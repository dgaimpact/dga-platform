# Admin Resolution State Model

Authoritative execution doctrine defining Admin-only states, actions,
and prohibitions for resolving onboarding duplicate intent.

Aligned with:
- ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy
- SOP–P2–Onboarding-Intent–Data-Contract
- SOP–P2–Onboarding-Identity-&-Duplicate-Intent–Supabase-Guardrails

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

Applies To:
- DGA Admin Console
- P2 Intake & Onboarding systems

---

## 1. Authority & Intent

This Execution Doctrine defines the **only permitted Admin behaviors**
when resolving soft-blocked onboarding intents.

Its purpose is to:
- enforce conversation-first resolution
- prevent silent reinstatement
- ensure clean re-entry via new account codes
- eliminate legacy contamination

If Admin behavior deviates from this doctrine, the system is out of compliance.

---

## 2. Scope & Ownership

Primary Pillar: **P2 — Intake & Onboarding**

This doctrine:
- governs Admin decision states
- governs Admin-triggered outcomes
- does not authorize execution in other pillars

---

## 3. Admin Resolution States

Admin resolution operates on **onboarding_intents only**.

### 3.1 Canonical States

An onboarding intent may exist in exactly one of the following states:

- UNRESOLVED  
- APPROVED  
- DENIED  

No other states are permitted.

---

### 3.2 State Definitions

UNRESOLVED:
- default state upon creation
- no downstream execution allowed
- no timers or auto-actions permitted

APPROVED:
- Admin authorizes re-entry
- requires creation of a new account code
- does not modify any existing account

DENIED:
- Admin declines re-entry
- no account may be created
- intent remains as historical record

---

## 4. Permitted Admin Actions

### 4.1 While UNRESOLVED

Admin may:
- review identity data
- communicate externally
- add internal notes (optional)

Admin may not:
- create accounts
- alter existing accounts
- trigger audits or workflows

---

### 4.2 APPROVAL Action

When Admin sets resolution = APPROVED:

Admin must:
- generate a **new account code**
- create a new account row
- set account_status = PROSPECT
- complete remaining onboarding fields internally

Admin must not:
- reuse any prior account_code
- reactivate archived or terminated accounts
- link new account to old accounts

---

### 4.3 DENIAL Action

When Admin sets resolution = DENIED:

Admin must:
- record a resolution reason
- optionally record notes

Admin must not:
- create any account
- trigger retries or follow-ups
- alter historical data

---

## 5. Prohibited Actions (Absolute)

Admin must never:
- change account_status of an existing account to PROSPECT
- flip ARCHIVED or TERMINATED accounts back to ACTIVE
- reuse account_code values
- create technical links between old and new accounts
- bypass onboarding_intents resolution

---

## 6. Execution Locks

Until an onboarding intent is resolved:
- no audits may run
- no seat logic may execute
- no content generation may occur
- no notifications may fire

Admin approval is the **only unlock mechanism**.

---

## 7. Audit & Traceability

Admin resolution must capture:
- decision (APPROVED | DENIED)
- standardized reason
- optional notes
- timestamp
- Admin identifier

These records are immutable once written.

---

## 8. Error Handling

If an Admin attempts a prohibited action:
- the system must block the action
- the system must log the attempt
- no partial changes may persist

---

## 9. Enforcement

This doctrine must be enforced by:
- Admin Console UI constraints
- API permission checks
- Supabase role and trigger enforcement

No override paths may exist.

---

## 10. Change Control

Any change to:
- Admin permissions
- resolution states
- approval mechanics

requires:
- doctrine version increment
- governance approval
- alignment with P2 blueprint
