# Application Flow Contract

Authoritative contract defining what the P2 onboarding applications
may and may not do when handling onboarding identity, duplicate intent,
and Admin-gated resolution.

Aligned with:
- ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy
- SOP–P2–Onboarding-Intent–Data-Contract
- SOP–P2–Onboarding-Identity-&-Duplicate-Intent–Supabase-Guardrails
- ED–P2–Admin-Resolution-State-Model

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

Applies To:
- Subscriber Onboarding App
- Child Onboarding App
- Any future P2 intake surface

---

## 1. Authority & Intent

This Execution Doctrine defines the **hard boundaries** of onboarding
application behavior.

Its purpose is to:
- prevent applications from creating duplicate accounts
- ensure duplicate intent is always soft-blocked
- guarantee Admin-controlled re-entry
- stop downstream execution until identity is resolved

If an onboarding application violates this contract, the application is non-compliant.

---

## 2. Scope

This contract governs:
- user-facing onboarding flows
- backend onboarding services
- API behavior invoked by onboarding apps

It does **not** govern:
- Admin Console behavior (covered separately)
- downstream pillar execution (P3–P5)

---

## 3. Required Input Collection

Each onboarding application must collect, at minimum:

- email
- profession
- market
- parent_account_type (SO | PB)

No onboarding flow may proceed without all four inputs present.

---

## 4. Mandatory Pre-Processing

Before any persistence attempt, the application must:

1. Normalize email (lowercase, trim)
2. Resolve profession to canonical value
3. Resolve market to canonical value
4. Require explicit parent_account_type

These values together form the **Onboarding Identity Key (OIK)**.

---

## 5. Duplicate Intent Evaluation (Required)

Before attempting account creation, the application must:

- query the canonical identity lookup
- evaluate OIK uniqueness across **all account statuses**

This check is mandatory and may not be skipped.

---

## 6. Branching Logic (Authoritative)

### 6.1 No Duplicate Found

If no OIK match exists:

- application may create a new account
- account_status must be set to PROSPECT
- downstream systems remain locked until onboarding completion

---

### 6.2 Duplicate Found (Any Status)

If an OIK match exists:

- application must NOT create an account
- application must create an onboarding_intent record
- onboarding flow must immediately soft-block
- user must receive status-aware messaging
- no retries or alternate paths may be offered

---

## 7. Soft-Block User Experience

When soft-blocked, the application must:

- stop forward progress immediately
- display neutral, status-aware messaging:

  “An account associated with these details already exists and requires review.”

- confirm submission completion (no error framing)

The application must not:
- expose account status
- expose account codes
- suggest automated resolution

---

## 8. Prohibited Application Behaviors

Onboarding applications must never:

- auto-reactivate archived or terminated accounts
- update account_status on existing accounts
- reuse account_code values
- create linkage between old and new accounts
- bypass onboarding_intents
- trigger audits, seat logic, or content workflows

---

## 9. Post-Submission State

After submission:

- applications have no further authority
- resolution is Admin-only
- applications may only reflect final state if queried later

No polling, timers, or retries are permitted.

---

## 10. Failure Handling

If identity checks or inserts fail:

- application must halt
- no partial data may persist
- error details must not be shown to the user

---

## 11. Enforcement

This contract must be enforced by:
- application logic
- API guards
- database triggers

The database is the final authority.

---

## 12. Change Control

Any change to:
- required inputs
- branching logic
- soft-block behavior

requires:
- doctrine version increment
- Admin approval
- P2 blueprint alignment
