/* ============================================================
   DGA | P2 OIK GOVERNANCE — COMBINED MIGRATION (FINAL)
   Includes:
   - dga_accounts: email_normalized + profession
   - v_account_identity_lookup (OIK view)
   - OIK duplicate prevention trigger (BEFORE INSERT)
   - onboarding_intents table (soft-block store)
   - RLS enabled + policies (service_role insert, supabase_admin select/update)
   ============================================================ */

begin;

-- Extension
create extension if not exists pgcrypto;

-- ------------------------------------------------------------
-- 1) dga_accounts: add canonical columns (safe)
-- ------------------------------------------------------------
alter table public.dga_accounts
  add column if not exists email_normalized text;

alter table public.dga_accounts
  add column if not exists profession text;

-- Backfill email_normalized from email
update public.dga_accounts
set email_normalized = lower(trim(email))
where email is not null
  and (email_normalized is null or email_normalized <> lower(trim(email)));

-- Backfill profession from registry-driven effective code (current canonical source)
update public.dga_accounts
set profession = primary_profession_code_effective
where profession is null
  and primary_profession_code_effective is not null;

-- Keep profession synced going forward
create or replace function public.fn_sync_profession()
returns trigger as $$
begin
  if new.primary_profession_code_effective is not null then
    new.profession := new.primary_profession_code_effective;
  end if;

  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_sync_profession on public.dga_accounts;

create trigger trg_sync_profession
before insert or update on public.dga_accounts
for each row
execute function public.fn_sync_profession();

-- ------------------------------------------------------------
-- 2) Canonical OIK lookup view
--   OIK = email_normalized + profession + market_territory_code + plan_type(SO|PB)
-- ------------------------------------------------------------
create or replace view public.v_account_identity_lookup as
select
  a.account_code,
  a.email_normalized,
  a.profession,
  a.market_territory_code as market,
  a.plan_type as parent_account_type,
  a.account_status
from public.dga_accounts a;

-- ------------------------------------------------------------
-- 3) Duplicate OIK prevention (fail-safe)
-- ------------------------------------------------------------
create or replace function public.fn_check_oik_duplicate()
returns trigger as $$
begin
  if exists (
    select 1
    from public.v_account_identity_lookup v
    where v.email_normalized    = lower(trim(new.email))
      and v.profession          = new.profession
      and v.market              = new.market_territory_code
      and v.parent_account_type = new.plan_type
    limit 1
  ) then
    raise exception
      'Duplicate OIK detected (email + profession + market + parent_account_type)';
  end if;

  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_check_oik_duplicate on public.dga_accounts;

create trigger trg_check_oik_duplicate
before insert on public.dga_accounts
for each row
execute function public.fn_check_oik_duplicate();

-- ------------------------------------------------------------
-- 4) onboarding_intents (soft-block store; no FK linkage)
-- ------------------------------------------------------------
create table if not exists public.onboarding_intents (
  intent_id uuid primary key default gen_random_uuid(),

  email_normalized text not null,
  profession text not null,
  market text not null,
  parent_account_type text not null check (parent_account_type in ('SO','PB')),

  status text not null default 'PENDING'
    check (status in ('PENDING','APPROVED','DENIED','EXPIRED')),

  detected_at timestamptz not null default now(),

  resolution_reason text null,
  resolution_notes text null,
  resolved_at timestamptz null,
  resolved_by text null
);

-- ------------------------------------------------------------
-- 5) RLS + policies for onboarding_intents
-- ------------------------------------------------------------
alter table public.onboarding_intents
enable row level security;

drop policy if exists onboarding_intents_insert on public.onboarding_intents;
drop policy if exists onboarding_intents_select_admin on public.onboarding_intents;
drop policy if exists onboarding_intents_update_admin on public.onboarding_intents;

create policy onboarding_intents_insert
on public.onboarding_intents
for insert
to service_role
with check (true);

create policy onboarding_intents_select_admin
on public.onboarding_intents
for select
to supabase_admin
using (true);

create policy onboarding_intents_update_admin
on public.onboarding_intents
for update
to supabase_admin
using (status = 'PENDING')
with check (status in ('APPROVED','DENIED'));

commit;
