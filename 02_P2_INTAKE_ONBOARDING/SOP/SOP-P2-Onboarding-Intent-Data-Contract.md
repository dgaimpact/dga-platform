# Onboarding Intent Data Contract

Canonical data contract for capturing onboarding attempts that trigger
duplicate intent soft-blocks and require Admin resolution.

Aligned with:
- ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy
- SOP–P2–Onboarding-Identity-&-Duplicate-Intent–Supabase-Guardrails

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

---

## 1. Purpose

This SOP defines the **onboarding_intents** table used to:

- capture duplicate onboarding attempts
- hold soft-blocked identity data
- store Admin resolution decisions
- remain non-operational and non-executing

This table must never:
- create accounts
- activate workflows
- trigger downstream systems

It is **decision support only**.

---

## 2. Table: onboarding_intents

### 2.1 Design Principles

- No foreign keys to accounts
- No operational dependencies
- Immutable historical record
- Admin-resolved, never auto-processed

---

### 2.2 Canonical Schema (DDL)

create table public.onboarding_intents (
  intent_id uuid primary key default gen_random_uuid(),

  email_normalized text not null,
  profession text not null,
  market text not null,
  parent_account_type text not null check (parent_account_type in ('SO','PB')),

  detected_at timestamp with time zone not null default now(),

  resolution text null check (resolution in ('APPROVED','DENIED')),
  resolution_reason text null,
  resolution_notes text null,
  resolved_at timestamp with time zone null,

  created_by text null,
  resolved_by text null
);

---

## 3. Write Rules

- Row is created **only** when duplicate intent is detected
- One intent per onboarding attempt
- No updates allowed until Admin resolution
- Resolution fields must be written atomically

---

## 4. Resolution Rules

### 4.1 Allowed States

- unresolved → resolution is NULL
- resolved → resolution = APPROVED or DENIED

Partial resolution states are forbidden.

---

### 4.2 Approval Effects

When resolution = APPROVED:
- Admin must manually create a new account
- new account_code is always generated
- account_status = PROSPECT
- onboarding_intents table does not link to the account

---

### 4.3 Denial Effects

When resolution = DENIED:
- no account may be created
- intent remains as historical record
- no retry automation is triggered

---

## 5. Immutability Rules

Once resolved:
- identity fields must not be changed
- resolution fields must not be altered
- intent rows are append-only history

Any correction requires a **new intent row**.

---

## 6. Access Control

- INSERT: onboarding services only
- UPDATE: Admin Console only
- SELECT: Admin Console (read)
- DELETE: prohibited

---

## 7. Audit & Governance

This table provides:
- duplicate intent audit trail
- Admin decision transparency
- historical compliance record

It must never be repurposed as an execution driver.

---

## 8. Change Control

Changes to:
- schema
- allowed resolution values
- write rules

require:
- SOP version increment
- ED alignment confirmation
- governance approval
