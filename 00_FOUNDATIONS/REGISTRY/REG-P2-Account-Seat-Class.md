# ACCOUNT SEAT CLASS

Canonical registry defining **account seat classification** used for **market capacity enforcement** and **relationship-based exclusions** within **P2 — Intake & Onboarding**.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** REG_P2_ACCOUNT_SEAT_CLASS.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Consumed By:**
- P2 — Replit Onboarding Apps
- Supabase (capacity enforcement triggers)
- Activation & Validation Logic

---

## 1. Authority & Scope

This Registry defines the **canonical seat classes** assigned to accounts during onboarding and activation.

Seat class determines:
- Whether an account consumes **market capacity**
- Whether capacity enforcement applies at activation
- How the account is treated in scarcity calculations

This document is:
- authoritative  
- non-executing  
- non-procedural  
- logic-free  

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- Every account must have **exactly one** seat class
- Seat class must be explicitly assigned (no inference)
- Seat class may not change silently after activation
- Seat class controls **capacity behavior only**, not identity or billing
- If a seat class is not listed here, it does not exist

---

## 3. Field Definitions

| Field | Type | Required | Description |
|------|------|----------|-------------|
| seat_class | TEXT | Yes | Canonical seat classification for the account |

### Field Notes
- `seat_class` is assigned during P2 onboarding
- `seat_class` is evaluated only at activation time
- Seat class does not determine profession or role

---

## 4. Enumerations

### SEAT_CLASS

| Value | Description |
|------|-------------|
| MARKET_CAPACITY | Account consumes one market seat |
| PB_CHILD | Referral partner sub-account under a PB MP; does **not** consume market capacity |

---

## 5. Capacity Behavior Matrix

| Seat Class | Consumes Market Capacity | Notes |
|-----------|--------------------------|------|
| MARKET_CAPACITY | Yes | Default for subscribers and external clients |
| PB_CHILD | No | Counts only toward parent MP referral-partner limit |

---

## 6. Cross-Field Constraints (Declarative Only)

- `seat_class = MARKET_CAPACITY` requires:
  - valid `profession_code`
  - valid market assignment (`market_name` + `territory_code`)
- `seat_class = PB_CHILD`:
  - must be associated with an ACTIVE parent MP account
  - must never be counted in market capacity enforcement
- Capacity enforcement applies **only** when:
  - `seat_class = MARKET_CAPACITY`
  - `account_status = ACTIVE`

---

## 7. Change Control

- Any change requires a **version increment**
- New seat classes require:
  - REG update
  - ED review
  - downstream enforcement validation
- Field removal is prohibited without a formal deprecation cycle

---

END — REG–P2–ACCOUNT_SEAT_CLASS
