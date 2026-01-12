# P2–to–P3 Handoff Lock

Authoritative doctrine defining the hard boundary between
P2 (Intake & Onboarding) and P3 (Visibility Audit & Governance).

This document explicitly locks when and how an account may transition
from onboarding into audit eligibility.

Aligned with:
- ED–P2–Application-Flow-Contract
- ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy
- ED–P2–Admin-Resolution-State-Model
- BP–P3–Omni-Presence-Blueprint

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

Applies To:
- P2 systems
- P3 audit runners
- DGA Admin Console
- Supabase governance logic

---

## 1. Purpose

This Execution Doctrine exists to:

- prevent premature audit execution
- eliminate ambiguous handoffs
- enforce Admin-controlled readiness
- guarantee clean sequencing between pillars

P3 must never infer readiness.  
P2 must explicitly grant it.

---

## 2. Pillar Ownership Declaration

- P2 owns **identity, eligibility, and readiness**
- P3 owns **audit execution and visibility governance**

No overlap is permitted.

---

## 3. Handoff Preconditions (All Required)

An account may transition from P2 to P3 **only if all conditions below are true**:

- valid `account_code` exists
- account_status = PROSPECT
- onboarding completed internally by Admin
- no unresolved onboarding_intents exist
- Admin has explicitly marked the account as **Audit Eligible**

Failure of any condition results in a hard stop.

---

## 4. Explicit Eligibility Signal

P3 eligibility must be represented by a **deliberate flag**, not inference.

Example (conceptual):

audit_eligibility_status = ELIGIBLE

Permitted values:
- NOT_ELIGIBLE (default)
- ELIGIBLE

P3 may not execute unless status = ELIGIBLE.

---

## 5. Prohibited Implicit Signals

The following must NOT be used as P3 triggers:

- account creation timestamp
- account_status alone
- presence of platforms
- time-based assumptions
- prior account history

Implicit triggers are forbidden.

---

## 6. Admin-Controlled Transition

Only Admin may set an account to ELIGIBLE.

Admin must confirm:
- identity resolved
- onboarding complete
- data sufficient for audit
- no governance exceptions exist

This is a **deliberate action**, not an automation.

---

## 7. Execution Lock Guarantees

Until eligibility is explicitly granted:

- no P3 audit runners may execute
- no visibility snapshots may run
- no audit artifacts may be created
- no downstream automation may fire

Any attempted execution must fail hard.

---

## 8. Failure Handling

If a P3 system attempts execution while NOT_ELIGIBLE:

- execution must abort
- the attempt must be logged
- no partial artifacts may persist

---

## 9. Re-entry Implications

Re-entry accounts:
- always begin as PROSPECT
- always default to NOT_ELIGIBLE
- require full Admin confirmation before P3 access

No historical shortcuts are allowed.

---

## 10. Enforcement

This doctrine must be enforced via:
- Admin Console gating
- Supabase constraints or flags
- P3 runner pre-flight checks

No override paths may exist.

---

## 11. Change Control

Any change to:
- eligibility conditions
- transition mechanics
- enforcement rules

requires:
- doctrine version increment
- P2 and P3 owner approval
- governance review
