# ACTIVATION & CAPACITY ENFORCEMENT

Execution Doctrine governing **account activation**, **territory assignment**, and **market capacity enforcement** within **P2 — Intake & Onboarding**.

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** ED_P2_ACTIVATION_CAPACITY_ENFORCEMENT.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Derived From:**
- REG–P2–PROFESSION_CODES
- REG–P2–MARKET_CAPACITY

**Consumed By:**
- Replit Onboarding Apps
- Supabase enforcement functions & triggers
- Automation & activation workflows

---

## 1. Purpose

This Execution Doctrine defines **how and when** an account may transition to **ACTIVE** status and how **market capacity** must be enforced at that moment.

It exists to:
- Prevent market over-allocation
- Ensure deterministic, auditable activation behavior
- Eliminate partial or ambiguous market writes
- Align execution strictly with registry-defined intent

---

## 2. Authority & Precedence

This doctrine:
- **Implements** registry-defined rules
- Does **not** define identity, professions, or capacity values
- Must never override REG constraints

If execution behavior conflicts with a REG document, **the REG prevails**.

---

## 3. Activation Timing (Non-Negotiable)

Capacity enforcement occurs **only** when:

- `account_status` transitions to `ACTIVE`

Capacity is **not evaluated** for:
- PROSPECT
- P2_STARTED
- HOLD
- REJECTED
- Any non-ACTIVE state

---

## 4. Preconditions for Activation

An account **may not** become ACTIVE unless **all** of the following are true:

- `profession_code` is present and valid
- `seat_class = MARKET_CAPACITY`
- `territory_code` and `market_name` are both present
- Market write is atomic (no partial updates)
- Capacity data exists for the resolved market

Failure of any precondition **must block activation**.

---

## 5. Capacity Evaluation Model

Capacity is evaluated using the following dimensions:

- **Province**
- **Market Type**
- **Profession Code**

### Resolution Order (Strict)

1. Territory × Profession override (if active)
2. Market Type × Profession default
3. Block activation if neither exists

No fallback, inference, or silent substitution is permitted.

---

## 6. Seat Consumption Rules

| Seat Class | Consumes Market Capacity | Notes |
|----------|--------------------------|------|
| MARKET_CAPACITY | Yes | Default for subscribers |
| PB_CHILD | No | Counts toward parent MP referral limit only |

Capacity enforcement must explicitly exclude `PB_CHILD`.

---

## 7. Atomic Market Assignment

Market assignment must be **atomic**:

- `market_name` and `territory_code` must be written together
- Partial writes are prohibited
- Any attempt to write one without the other must error

This guarantees:
- Deterministic enforcement
- Clean rollback on failure
- No half-activated accounts

---

## 8. Failure Behavior (Hard Stops)

If capacity enforcement fails:

- Activation is blocked
- Account remains non-ACTIVE
- No side effects may occur
- Error must be explicit and surfaced to the calling system

Silent failure is prohibited.

---

## 9. Scope Exclusions

This doctrine does **not** govern:
- Audit execution (P3)
- Content creation or publishing (P4)
- Relationship cadence or follow-up (P5)
- Billing, pricing, or payment logic

---

## 10. Compliance & Auditability

Compliance is validated by:
- Supabase triggers and enforcement functions
- Immutable registry references
- Deterministic activation outcomes

Any manual override must be:
- explicit
- logged
- reviewed separately

---

## 11. Change Control

- Any change requires a **version increment**
- Capacity logic changes require REG review first
- Silent drift is prohibited

---

## 12. Lock Statement

This Execution Doctrine is authoritative and binding.  
Any activation behavior that violates this doctrine is invalid and must be corrected.

---

END — ED–P2–ACTIVATION & CAPACITY ENFORCEMENT
