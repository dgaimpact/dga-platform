# INTAKE EXCEPTION HANDLING

Execution Doctrine governing **intake exceptions** during **P2 — Intake & Onboarding**, including when exceptions are permitted, how they are recorded, and how they affect validation and activation.

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** ED_P2_INTAKE_EXCEPTION_HANDLING.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Derived From:**
- REG–P2–INTAKE_FIELD_SET
- REG–P2–P2_STATUS_CODES
- ED–P2–ACTIVATION & CAPACITY ENFORCEMENT

**Consumed By:**
- Replit Onboarding Apps
- Supabase validation logic
- Admin review workflows

---

## 1. Purpose

This Execution Doctrine defines **how intake exceptions are handled** when one or more required P2 intake fields cannot be completed at onboarding time.

It exists to:
- Allow controlled progression without data fabrication
- Preserve deterministic validation rules
- Prevent silent bypass of intake requirements
- Ensure all exceptions are explicit, auditable, and reversible

---

## 2. Authority & Precedence

This doctrine:
- Implements registry-defined intake requirements
- Does not redefine required fields
- Does not weaken activation or capacity rules

If execution behavior conflicts with a REG document, **the REG prevails**.

---

## 3. Definition of an Intake Exception

An **intake exception** is a **temporary, explicit allowance** for an account to proceed in P2 despite missing one or more required intake fields.

Exceptions:
- Are intentional
- Are visible
- Must be explicitly set
- Must never be inferred or auto-applied

---

## 4. When Intake Exceptions Are Permitted

An intake exception **may be granted only when**:

- The missing field is genuinely unavailable at intake time  
- The missing field does **not** prevent market assignment or capacity enforcement  
- Proceeding does not create an ambiguous or misleading account state  

Examples:
- Regulatory disclosure pending
- Brokerage details awaiting confirmation
- GBP not yet claimed or verified

Exceptions **must not** be used to bypass:
- Profession assignment
- Seat class assignment
- Market assignment
- Capacity enforcement

---

## 5. Exception Flag (Canonical Mechanism)

Intake exceptions are represented by:

- `intake_exception_flag = true`

Rules:
- Must be written explicitly
- Must not be defaulted
- Must be accompanied by a recorded reason (stored separately)
- May be cleared only when missing fields are resolved

---

## 6. Effect on P2 Status

| Condition | Allowed P2 Status |
|---------|-------------------|
| Required fields missing, no exception | P2_STARTED |
| Required fields missing, exception granted | P2_VALIDATED |
| Exception unresolved at activation attempt | P2_ACTIVATION_BLOCKED |
| All required fields resolved | P2_VALIDATED |

Rules:
- `P2_VALIDATED` may be reached with an exception **only if** the exception flag is set
- `P2_ACTIVE_CONFIRMED` requires all required fields resolved (no exceptions)

---

## 7. Activation Impact (Hard Rule)

Accounts with an active intake exception:

- **Must not** be activated
- **Must not** transition to `ACTIVE`
- **Must** be blocked at activation attempt

Activation enforcement must treat:
- missing required fields
- active intake exceptions  

as equivalent blocking conditions.

---

## 8. Resolution of Intake Exceptions

An intake exception is resolved only when:

- All missing required fields are completed
- Validation passes without exception
- `intake_exception_flag` is explicitly cleared
- `intake_completed_at` is set

Resolution must be explicit and auditable.

---

## 9. Failure Behavior

If an exception is misused or improperly applied:

- Activation must be blocked
- The account must remain non-ACTIVE
- An explicit error must be surfaced
- No silent correction or inference is permitted

---

## 10. Scope Exclusions

This doctrine does **not** govern:
- Capacity enforcement logic
- Relationship handling
- Audit execution (P3)
- Content creation or publishing (P4)
- Billing or pricing decisions

---

## 11. Compliance & Auditability

Compliance is validated by:
- Presence and state of `intake_exception_flag`
- Consistent P2 status transitions
- Absence of ACTIVE accounts with unresolved exceptions

Any manual override must be:
- explicit
- logged
- reviewed separately

---

## 12. Change Control

- Any change requires a **version increment**
- Exception scope changes require REG review
- Silent drift is prohibited

---

## 13. Lock Statement

This Execution Doctrine is authoritative and binding.  
Any intake exception handling that violates this doctrine is invalid and must be corrected.

---

END — ED–P2–INTAKE_EXCEPTION_HANDLING
