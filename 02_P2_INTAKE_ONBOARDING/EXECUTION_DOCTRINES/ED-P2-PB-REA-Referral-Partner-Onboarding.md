# PB–REA REFERRAL PARTNER ONBOARDING

Execution Doctrine governing **PB-REA referral partner onboarding** under an **ACTIVE MP Playbook (PB) subscriber** within **P2 — Intake & Onboarding**.

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** ED_P2_PB_REA_REFERRAL_PARTNER_ONBOARDING.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Derived From:**
- REG–P2–ACCOUNT_SEAT_CLASS
- REG–P2–PROFESSION_CODES
- REG–P2–MARKET_CAPACITY
- ED–P2–ACTIVATION & CAPACITY ENFORCEMENT

**Consumed By:**
- PB-REA Replit Onboarding App
- Supabase enforcement & validation logic
- Relationship seat-count validation

---

## 1. Purpose

This Execution Doctrine defines **how referral partner (REA) accounts are onboarded** under an already-ACTIVE MP Playbook (PB) subscriber.

It exists to:
- Enable referral partner onboarding **without consuming market capacity**
- Enforce PB referral-partner seat limits
- Preserve deterministic activation behavior
- Prevent misuse of PB onboarding to bypass scarcity rules

---

## 2. Authority & Precedence

This doctrine:
- Implements registry-defined rules
- Does not define capacity values or professions
- Must never override REG constraints

If execution behavior conflicts with a REG document, **the REG prevails**.

---

## 3. Eligibility Preconditions (Hard Gates)

PB-REA onboarding **may proceed only if**:

- A valid `parent_mp_account_id` is provided
- The parent MP account exists
- The parent MP account:
  - has `account_status = ACTIVE`
  - is a PB subscriber (plan validation occurs upstream)
- The parent MP has **available referral partner seats**

Failure of any condition **must block onboarding**.

---

## 4. Seat Classification (Non-Negotiable)

All PB-REA referral partner accounts must be created with:

- `seat_class = PB_CHILD`
- `profession_code = REA`

These values:
- must be written at record creation
- must not be inferred
- must not be altered silently

---

## 5. Market Capacity Exclusion

PB-REA referral partner accounts:

- **must not consume** market capacity
- **must not participate** in Market × Profession seat counts
- **must bypass** capacity enforcement triggers

This exclusion is achieved **only** via:
- `seat_class = PB_CHILD`

No other mechanism is permitted.

---

## 6. Parent-Child Relationship Binding

Each PB-REA account must be explicitly linked to its parent MP via a relationship record.

### Required relationship attributes
- `parent_account_id` (MP)
- `child_account_id` (REA)
- `relationship_type = PB_REFERRAL_PARTNER`
- `is_active = true`

Onboarding must fail if the relationship record cannot be created.

---

## 7. Referral Partner Seat Limit Enforcement

PB referral partner seats are limited per MP (default: **5**).

Enforcement rules:
- Count ACTIVE PB_CHILD accounts linked to the parent MP
- If count ≥ allowed limit → block onboarding
- Seat limit enforcement occurs **before activation**

Market capacity availability is **irrelevant** to this check.

---

## 8. Activation Rules

PB-REA accounts follow the same **activation lifecycle** as standard accounts, with one exception:

- Market capacity enforcement **must be skipped**

### Activation Preconditions
- Required P2 intake fields completed
- Atomic market assignment (`market_name` + `territory_code`)
- Valid parent relationship exists

### Activation Attempt
- Set `account_status = ACTIVE`
- Rely on Supabase enforcement to:
  - allow activation (PB_CHILD)
  - block only on non-capacity violations

---

## 9. Failure Behavior (Hard Stops)

If onboarding or activation fails:

- The account must remain non-ACTIVE
- `p2_status` must reflect a blocked state
- Errors must be explicit and surfaced to the caller
- Silent retries or fallback logic are prohibited

---

## 10. Scope Exclusions

This doctrine does **not** govern:
- Parent MP onboarding
- Market capacity configuration
- Audit execution (P3)
- Content creation or publishing (P4)
- Relationship cadence (P5)
- Billing or pricing logic

---

## 11. Compliance & Auditability

Compliance is validated by:
- Seat-class enforcement
- Relationship integrity
- Deterministic activation outcomes
- Explicit error handling

Any manual override must be logged and reviewed.

---

## 12. Change Control

- Any change requires a **version increment**
- Referral-seat logic changes require REG review
- Silent drift is prohibited

---

## 13. Lock Statement

This Execution Doctrine is authoritative and binding.  
Any PB-REA onboarding behavior that violates this doctrine is invalid and must be corrected.

---

END — ED–P2–PB–REA–REFERRAL_PARTNER_ONBOARDING
