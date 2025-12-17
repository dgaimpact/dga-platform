# PROFESSION CODES

Canonical registry of profession codes used for **P2 intake**, **territory assignment**, and **market capacity enforcement**.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** REG_P2_PROFESSION_CODES.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Consumed By:**
- P2 — Replit Onboarding Apps
- Supabase (`dga_accounts`, capacity enforcement)
- Automation & Validation Logic

---

## 1. Authority & Scope

This Registry defines the **canonical profession codes** for all DGA accounts that participate in:

- Profession assignment during onboarding  
- Market capacity enforcement (Market Type × Profession)  
- Territory assignment eligibility checks  

This document is:
- authoritative  
- non-executing  
- non-procedural  
- logic-free  

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- Field names are immutable  
- Data types must be enforced exactly  
- No implicit values are permitted  
- No inference is allowed  
- If a field is not listed here, it does not exist  

---

## 3. Field Definitions

| Field | Type | Required | Description |
|------|------|----------|-------------|
| profession_code | TEXT | Yes | Canonical profession identifier used for capacity enforcement |
| profession_name | TEXT | Yes | Human-readable profession label |
| is_active | BOOLEAN | Yes | Controls availability for new assignments |
| created_at | TIMESTAMPTZ | Yes | System-generated creation timestamp |

### Field Notes
- `profession_code` must be uppercase, 2–8 characters  
- `profession_code` is required for any account that consumes market capacity  
- `is_active = false` blocks new assignment but does not invalidate existing accounts  

---

## 4. Enumerations

### PROFESSION_CODE

| Code | Description |
|------|-------------|
| MP | Mortgage Professional |
| REA | Real Estate Agent |
| MKTG | Marketing Agency |

---

## 5. Cross-Field Constraints (Declarative Only)

- `profession_code` must be unique  
- Capacity enforcement applies only when `profession_code` is present  
- Inactive professions cannot be selected during onboarding  

---

## 6. Change Control

- Any change requires a **version increment**  
- Field removal is prohibited without a formal deprecation cycle  
- All changes must be reviewed for downstream impact (Replit, Supabase, capacity enforcement)

---

END — REG–P2–PROFESSION_CODES
