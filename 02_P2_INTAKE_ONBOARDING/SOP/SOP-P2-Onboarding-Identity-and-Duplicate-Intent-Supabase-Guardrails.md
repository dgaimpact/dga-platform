# Onboarding Identity & Duplicate Intent – Supabase Guardrails

Database-level guardrails enforcing onboarding identity, duplicate intent detection, and soft-block behavior in alignment with  
ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy.

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

Applies To:
- Supabase (Postgres)
- Canonical tables, views, triggers

---

## 1. Purpose

This SOP defines non-negotiable database protections that ensure:

- duplicate onboarding attempts are detected deterministically
- no account is created when duplicate intent exists
- soft-blocked intents are inert
- re-entry always results in a new account code
- prior accounts remain immutable

Application logic may not bypass these controls.

---

## 2. Canonical Constructs

### 2.1 Account Status Enum (Existing)

account_status_enum values:
- PROSPECT
- ACTIVE
- PAUSED
- TERMINATED
- ARCHIVED

This enum is authoritative.

---

### 2.2 Onboarding Identity Key (OIK)

Logical composite identity (not a physical primary key):

email_normalized  
+ profession  
+ market  
+ parent_account_type (SO | PB)

---

## 3. Required Tables / Views

### 3.1 Email Normalization

All identity checks must use a normalized email value:

lower(trim(email))

Raw email values must never be used for identity comparison.

---

### 3.2 Canonical Identity Lookup View

Read-only identity lookup view:

create or replace view v_account_identity_lookup as
select
  account_code,
  lower(trim(email)) as email_normalized,
  profession,
  market,
  parent_account_type,
  account_status
from public.accounts;

- View is read-only
- Used exclusively for duplicate intent checks
- No writes permitted

---

## 4. Duplicate Intent Detection Rule

Before any account insert, the system must execute:

select 1
from v_account_identity_lookup
where email_normalized    = :email_normalized
  and profession          = :profession
  and market              = :market
  and parent_account_type = :parent_account_type
limit 1;

If a row exists, duplicate intent is detected.

---

## 5. Soft-Block Enforcement

### 5.1 No Account Creation on Duplicate

Account inserts must not occur when duplicate intent exists.

This rule is enforced by:
- application-layer pre-checks
- database-layer triggers (fail-safe)

---

### 5.2 Fail-Safe Trigger

create or replace function prevent_duplicate_account_creation()
returns trigger as $$
begin
  if exists (
    select 1
    from v_account_identity_lookup
    where email_normalized    = lower(trim(new.email))
      and profession          = new.profession
      and market              = new.market
      and parent_account_type = new.parent_account_type
  ) then
    raise exception
      'Duplicate onboarding identity detected. Account creation blocked.';
  end if;

  return new;
end;
$$ language plpgsql;

create trigger trg_prevent_duplicate_account
before insert on public.accounts
for each row
execute function prevent_duplicate_account_creation();

This trigger protects against:
- application bugs
- manual inserts
- future services

---

## 6. Re-entry Rules (Approved Only)

- re-entry never updates an existing account
- re-entry always inserts a new account row
- old accounts remain unchanged forever
- account_code reuse is forbidden
- identity mutation to bypass OIK is forbidden

---

## 7. Admin Resolution Storage (Non-Operational)

Admin decisions are stored outside the accounts table.

Example structure:

onboarding_intents
- intent_id
- email_normalized
- profession
- market
- parent_account_type
- resolution (APPROVED | DENIED)
- resolution_reason
- resolution_notes
- resolved_at

This table:
- has no foreign key to accounts
- is informational only
- does not drive execution directly

---

## 8. Inert-State Guarantee

Until a valid account_code exists:
- no audits
- no territory logic
- no content generation
- no notifications

Database role permissions must prevent downstream services
from operating without an account_code.

---

## 9. Enforcement

This SOP must be enforced by:
- database triggers
- restricted roles
- read-only identity views

Any bypass constitutes non-compliance.

---

## 10. Change Control

Changes to:
- OIK composition
- trigger logic
- enum values

require:
- SOP version increment
- ED alignment review
- explicit Admin approval
