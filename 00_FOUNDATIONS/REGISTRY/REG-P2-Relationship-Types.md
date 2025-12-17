# RELATIONSHIP TYPES

Canonical registry defining **relationship types** between accounts within **P2 — Intake & Onboarding**.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** REG_P2_RELATIONSHIP_TYPES.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Consumed By:**
- P2 — Replit Onboarding Apps
- Supabase (relationship integrity enforcement)
- Activation & Validation Logic

---

## 1. Authority & Scope

This Registry defines the **canonical relationship types** that may exist between DGA accounts during and after onboarding.

Relationship types govern:
- How accounts are structurally linked
- Which execution paths apply (e.g., PB-REA onboarding)
- Whether capacity or seat limits are affected

This document is:
- authoritative  
- non-executing  
- non-procedural  
- logic-free  

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- Relationship types are **explicit** (no inference)
- Each relationship must have a declared type
- Relationship types must not be overloaded with logic
- If a relationship type is not listed here, it does not exist
- Directionality (parent → child) must be respected

---

## 3. Field Definitions

| Field | Type | Required | Description |
|------|------|----------|-------------|
| relationship_type | TEXT | Yes | Canonical identifier for the relationship |
| is_active | BOOLEAN | Yes | Whether this relationship type is currently permitted |
| created_at | TIMESTAMPTZ | Yes | System-generated creation timestamp |

### Field Notes
- `relationship_type` is immutable once created  
- Deactivating a relationship type prevents new assignments but does not retroactively remove existing relationships  

---

## 4. Enumerations

### RELATIONSHIP_TYPE

| Value | Description |
|------|-------------|
| PB_REFERRAL_PARTNER | Referral partner relationship under an ACTIVE PB MP account |

---

## 5. Directionality & Semantics

| Relationship Type | Parent Account | Child Account |
|------------------|---------------|---------------|
| PB_REFERRAL_PARTNER | MP (PB Subscriber) | REA (PB_CHILD) |

Rules:
- Parent must exist and be ACTIVE
- Child must be created with `seat_class = PB_CHILD`
- Relationship must be created at onboarding time

---

## 6. Cross-Field Constraints (Declarative Only)

- `PB_REFERRAL_PARTNER` requires:
  - parent `account_status = ACTIVE`
  - child `seat_class = PB_CHILD`
  - child `profession_code = REA`
- Relationship records must not exist without both parent and child accounts
- A child account may not have multiple active parent relationships of the same type

---

## 7. Scope Exclusions

This Registry does **not** define:
- Seat limits or capacity rules
- Activation behavior
- Relationship cadence or lifecycle
- Billing or compensation logic

These belong to Execution Doctrines or downstream pillars.

---

## 8. Change Control

- Any change requires a **version increment**
- New relationship types require:
  - REG update
  - ED review
  - downstream validation
- Field removal is prohibited without a formal deprecation cycle

---

END — REG–P2–RELATIONSHIP_TYPES
