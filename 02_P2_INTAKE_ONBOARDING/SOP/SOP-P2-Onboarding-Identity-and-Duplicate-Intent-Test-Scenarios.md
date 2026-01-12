# Onboarding Identity & Duplicate Intent Test Scenarios

Canonical Given / When / Then test scenarios validating
P2 onboarding identity, duplicate intent handling,
Admin resolution, and P2 → P3 handoff locks.

Aligned with:
- ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy
- ED–P2–Application-Flow-Contract
- ED–P2–Admin-Resolution-State-Model
- ED–P2–to–P3–Handoff-Lock
- SOP–P2–Supabase–Row-Level-Security-Policies

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

---

## 1. New Onboarding — No Duplicate

Given:
- no existing account matches the OIK
- inputs are valid and complete

When:
- user submits onboarding

Then:
- a new account is created
- account_status = PROSPECT
- no onboarding_intent is created
- downstream systems remain locked

---

## 2. Duplicate Identity — Existing PROSPECT

Given:
- an existing account matches OIK
- account_status = PROSPECT

When:
- user submits onboarding

Then:
- onboarding is soft-blocked
- onboarding_intent is created
- no account is created
- user receives status-aware message
- no downstream execution occurs

---

## 3. Duplicate Identity — Existing ACTIVE

Given:
- an existing account matches OIK
- account_status = ACTIVE

When:
- user submits onboarding

Then:
- onboarding is soft-blocked
- onboarding_intent is created
- no account is created
- no status changes occur
- no downstream execution occurs

---

## 4. Duplicate Identity — Existing PAUSED

Given:
- an existing account matches OIK
- account_status = PAUSED

When:
- user submits onboarding

Then:
- onboarding is soft-blocked
- onboarding_intent is created
- no account is created
- prior account remains PAUSED

---

## 5. Duplicate Identity — Existing ARCHIVED

Given:
- an existing account matches OIK
- account_status = ARCHIVED

When:
- user submits onboarding

Then:
- onboarding is soft-blocked
- onboarding_intent is created
- no account is created
- prior account remains ARCHIVED
- Admin resolution required

---

## 6. Duplicate Identity — Existing TERMINATED

Given:
- an existing account matches OIK
- account_status = TERMINATED

When:
- user submits onboarding

Then:
- onboarding is soft-blocked
- onboarding_intent is created
- no account is created
- no automatic denial occurs

---

## 7. Admin Resolution — APPROVED

Given:
- onboarding_intent exists
- resolution = UNRESOLVED

When:
- Admin sets resolution = APPROVED

Then:
- a new account_code is generated
- new account_status = PROSPECT
- Admin completes onboarding internally
- prior accounts remain unchanged
- no linkage exists between accounts

---

## 8. Admin Resolution — DENIED

Given:
- onboarding_intent exists
- resolution = UNRESOLVED

When:
- Admin sets resolution = DENIED

Then:
- no account is created
- intent becomes read-only
- no retries or follow-ups occur

---

## 9. Prohibited Action — Reactivation Attempt

Given:
- an existing account with status ARCHIVED or TERMINATED

When:
- Admin attempts to change account_status to PROSPECT or ACTIVE

Then:
- action is blocked
- no changes persist
- attempt is logged

---

## 10. Prohibited Action — Account Reuse

Given:
- an existing account_code exists

When:
- Admin attempts to reuse the account_code for re-entry

Then:
- action is blocked
- system enforces new account_code creation

---

## 11. P2 → P3 Handoff — Not Eligible

Given:
- account_status = PROSPECT
- audit_eligibility_status = NOT_ELIGIBLE

When:
- a P3 audit runner attempts execution

Then:
- execution is blocked
- no audit artifacts are created
- attempt is logged

---

## 12. P2 → P3 Handoff — Eligible

Given:
- account_status = PROSPECT
- audit_eligibility_status = ELIGIBLE
- Admin explicitly set eligibility

When:
- P3 audit runner executes

Then:
- audit proceeds normally
- P2 governance is respected

---

## 13. Inert-State Guarantee

Given:
- no account_code exists

When:
- any downstream service attempts execution

Then:
- execution fails hard
- no side effects occur

---

## 14. Data Integrity — onboarding_intents Immutability

Given:
- onboarding_intent is resolved

When:
- any update attempt is made

Then:
- update is blocked
- historical record remains unchanged

---

## 15. Compliance Assertion

If all scenarios pass:
- P2 is governance-complete
- duplicate intent is fully controlled
- re-entry is human-approved
- P3 access is explicitly gated
