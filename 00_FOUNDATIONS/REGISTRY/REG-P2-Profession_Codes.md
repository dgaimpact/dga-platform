# REG–P2–PROFESSION_CODES

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

| Field Name        | Description                                 | Type        | Required | Allowed Values / Format                  | Lock State | Primary Pillar | Consumed By |
|------------------|---------------------------------------------|-------------|----------|------------------------------------------|----
