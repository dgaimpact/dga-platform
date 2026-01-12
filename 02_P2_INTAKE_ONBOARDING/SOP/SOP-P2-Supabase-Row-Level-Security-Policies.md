# Supabase Row Level Security Policies

Authoritative Row Level Security (RLS) policies enforcing inert behavior,
Admin-only resolution, and strict separation between onboarding intents
and operational accounts.

Aligned with:
- ED–P2–Application-Flow-Contract
- ED–P2–Admin-Resolution-State-Model
- SOP–P2–Onboarding-Intent–Data-Contract
- SOP–P2–Onboarding-Identity-&-Duplicate-Intent–Supabase-Guardrails

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

Applies To:
- Supabase (Postgres)
- onboarding_intents
- accounts (read-only constraints)

---

## 1. Purpose

This SOP defines mandatory RLS policies that ensure:

- onboarding_intents are non-operational
- only Admin roles may resolve intents
- onboarding apps cannot bypass soft-blocks
- downstream systems cannot operate without valid accounts

RLS is a **hard enforcement layer**, not optional.

---

## 2. Role Definitions (Conceptual)

The following logical roles are assumed:

- anon / public_user  
- onboarding_service  
- admin_console  
- system_services  

Exact role mapping is environment-specific but must preserve intent.

---

## 3. onboarding_intents — RLS Policies

### 3.1 Enable RLS

alter table public.onboarding_intents
enable row level security;

---

### 3.2 INSERT — Onboarding Services Only

create policy onboarding_intents_insert
on public.onboarding_intents
for insert
to onboarding_service
with check (true);

- Only onboarding services may create intents
- Public and Admin roles may not insert

---

### 3.3 SELECT — Admin Read Only

create policy onboarding_intents_select_admin
on public.onboarding_intents
for select
to admin_console
using (true);

- Admin may read all intents
- No public visibility

---

### 3.4 UPDATE — Admin Resolution Only

create policy onboarding_intents_update_admin
on public.onboarding_intents
for update
to admin_console
using (resolution is null)
with check (resolution in ('APPROVED','DENIED'));

Rules:
- Only unresolved intents may be updated
- Resolution must be terminal
- Partial updates forbidden

---

### 3.5 DELETE — Prohibited

No DELETE policy is defined.

Result:
- onboarding_intents are append-only
- historical audit is preserved

---

## 4. accounts — Protective Read Constraints

### 4.1 Enable RLS (if not already)

alter table public.accounts
enable row level security;

---

### 4.2 Prevent Status Reversion

create policy accounts_no_reactivation
on public.accounts
for update
to admin_console
using (account_status not in ('ARCHIVED','TERMINATED'))
with check (account_status not in ('PROSPECT'));

This ensures:
- archived or terminated accounts cannot return to PROSPECT
- re-entry always requires new account creation

---

### 4.3 Insert — Controlled Creation Only

create policy accounts_insert_admin_only
on public.accounts
for insert
to admin_console
with check (account_status = 'PROSPECT');

- Only Admin may create accounts manually
- New accounts must begin as PROSPECT

---

## 5. Downstream Service Lock

System services must not be granted:
- SELECT on onboarding_intents
- UPDATE on accounts without account_code

Downstream execution must require:
- valid account_code
- account_status != PROSPECT (where applicable by pillar)

---

## 6. Prohibited RLS Patterns

The following are forbidden:

- public SELECT on onboarding_intents
- UPDATE policies allowing resolution overwrite
- policies permitting account_status mutation from ARCHIVED / TERMINATED
- cross-table policies linking intents to accounts

---

## 7. Enforcement Notes

If RLS blocks an action:
- the action must fail
- no fallback paths may exist
- the application must not suppress the failure

---

## 8. Change Control

Any change to:
- RLS policies
- role permissions
- resolution rules

requires:
- SOP version increment
- ED alignment confirmation
- Admin approval
