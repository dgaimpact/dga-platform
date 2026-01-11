# Seat Driving Profession Registry (SB)

Canonical registry defining **seat-driving professions** and approved **seat-domain splits** for territory allocation in Supabase (SB).

Version: v1.0  
Created: 2026-01-11  
Status: Canonical (Active)

Primary Pillar: P2 — Intake & Onboarding  
Consumed By:
- P2 (Onboarding forms + classification)
- P3 (Audit eligibility + governance)
- P4 (Content governance + routing)
- Systems (Supabase views, Replit apps, Admin Console)

---

## 1. Authority & Scope

This Registry defines the **only permitted seat-driving profession options** for DGA territory seat allocation.

This Registry governs:
- the canonical profession list used in onboarding selection
- seat allocation identity (what consumes a territory seat)
- permitted seat-domain splits (rare, explicit)
- deprecation + redirect rules for legacy codes

This Registry does NOT govern:
- niche selection or practice-area focus
- Power Groups (internal semantic layer)
- content topic selection
- VBP/IIP profiles

This document is:
- authoritative
- non-executing
- non-procedural
- logic-free

If a system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- Seat-driving options MUST be drawn from `public.reg_industry_master` where:
  - `status = 'ACTIVE'`
  - `is_selectable = true`
- Practice areas (e.g., family law, corporate law) MUST NOT be seat-driving professions.
- Commercial vs residential distinctions MUST NOT be seat-driving professions.
- Organization types (e.g., “Firm”, “Agency”) MUST NOT be seat-driving professions.
- Designations (e.g., “CPA”) MUST NOT be seat-driving professions.
- Deprecation MUST be implemented by:
  - setting `is_selectable = false` on the deprecated code
  - adding a redirect row in `public.reg_industry_master_redirect_map`
- Downstream systems MUST use the **effective profession code** derived from redirects.
- `dga_industry_code` values are immutable once referenced by any account record.
- No inference is allowed. If a code is not in this registry, it does not exist.

---

## 3. Canonical Tables (Supabase)

### 3.1 Seat-Driving Profession Table

**Table:** `public.reg_industry_master`  
**Purpose:** Canonical seat-driving profession registry.

| Column | Type | Required | Notes |
|---|---|---:|---|
| dga_industry_code | text | Yes | Immutable code. Seat-driving identity key. |
| dga_industry_label | text | Yes | Human-facing label. |
| profession_group | text | Yes | Internal grouping layer (e.g., MP, REA, OTHER). |
| allows_so | boolean | Yes | Subscription eligibility flag. |
| allows_pb | boolean | Yes | Subscription eligibility flag. |
| allows_en | boolean | Yes | Subscription eligibility flag. |
| seat_consumption_class | text | Yes | Seat consumption classification (e.g., PRIMARY, SHARED). |
| status | text | Yes | Must be ACTIVE for use. |
| is_selectable | boolean | Yes | True = visible to onboarding selection. |
| definition | text | No | Optional definition text. |
| notes | text | No | Optional admin notes. |
| created_at | timestamptz | Yes | System-managed. |
| updated_at | timestamptz | Yes | System-managed. |

---

### 3.2 Redirect Mapping Table

**Table:** `public.reg_industry_master_redirect_map`  
**Purpose:** Maps deprecated/legacy codes to canonical effective codes.

| Column | Type | Required | Notes |
|---|---|---:|---|
| old_dga_industry_code | text | Yes | Deprecated/legacy code. Primary key. |
| new_dga_industry_code | text | Yes | Canonical effective code in reg_industry_master. |
| reason | text | Yes | Human-readable rationale for redirect. |
| created_at | timestamptz | Yes | System-managed. |

---

### 3.3 Effective Resolution View (Required Consumption Layer)

**View:** `public.v_reg_industry_master_effective`  
**Purpose:** Resolves any original code to its canonical effective code.

Downstream systems MUST use:
- `dga_industry_code_effective`
- `dga_industry_label_effective`
- `profession_group_effective`
- `seat_consumption_class_effective`
- `status_effective`
- `is_selectable_effective`

---

## 4. Enumerations (If Applicable)

### seat_consumption_class

| Value | Description |
|---|---|
| PRIMARY | Consumes a full profession seat in a territory. |
| SHARED | Shared classification used for admin review or special handling. |

---

## 5. Cross-Field Constraints (Declarative Only)

- `is_selectable = true` implies `status = 'ACTIVE'`
- Any `old_dga_industry_code` in redirect map MUST exist in `reg_industry_master`
- Any `new_dga_industry_code` in redirect map MUST exist in `reg_industry_master`
- Any deprecated code MUST be set `is_selectable = false` and MUST have a redirect entry
- Umbrella categories MUST be `is_selectable = false`

---

## 6. Canonical Redirects (Current)

The following redirects are canonical and active:

| old_dga_industry_code | new_dga_industry_code | reason |
|---|---|---|
| ACCOUNTANT_SMB | ACCOUNTANT | SMB is niche -> canonical profession |
| ACCOUNTING_FIRM | ACCOUNTANT | Org type -> canonical profession |
| CPA | ACCOUNTANT | Designation -> canonical profession |
| TAX_CORP | ACCOUNTANT | Tax is niche -> canonical profession |
| TAX_CROSS_BORDER | ACCOUNTANT | Tax is niche -> canonical profession |
| TAX_PLANNING_ADVISOR | ACCOUNTANT | Tax is niche -> canonical profession |
| LAW_CIVIL | LAWYER | Practice area -> niche |
| LAW_CORP | LAWYER | Practice area -> niche |
| LAW_EMP | LAWYER | Practice area -> niche |
| LAW_FAMILY | LAWYER | Practice area -> niche |
| LAW_IMM | LAWYER | Practice area -> niche |
| LAW_PI | LAWYER | Practice area -> niche |
| LAW_WE | LAWYER | Practice area -> niche |
| REL | LAWYER | Practice area -> niche |
| REA_COMMERCIAL_AGENT | REA | Commercial vs residential -> niche |
| REA_RESIDENTIAL_AGENT | REA | Commercial vs residential -> niche |
| LEASING_AGENT | REA | Practice focus -> niche |
| NEW_HOME_SALES | REA | Practice focus -> niche |
| PROPERTY_MANAGER_COMM | PROPERTY_MANAGER | Commercial focus -> niche |
| MP_ALT_LENDING | MP_MORTGAGE_BROKER | MP practice focus -> niche |
| MP_COMMERCIAL | MP_MORTGAGE_BROKER | Commercial vs residential -> niche |
| MP_CONSTRUCTION_FIN | MP_MORTGAGE_BROKER | MP practice focus -> niche |
| MP_CREDIT_REPAIR | MP_MORTGAGE_BROKER | Service focus -> niche |
| MP_MIC | MP_MORTGAGE_BROKER | MP practice focus -> niche |
| MP_PRIVATE_LENDING | MP_MORTGAGE_BROKER | MP practice focus -> niche |
| MP_REVERSE | MP_MORTGAGE_BROKER | MP practice focus -> niche |
| INS_PERS | INS_PNC | P&C domain |
| INS_COMM | INS_PNC | P&C domain |
| INS_RISK | INS_PNC | P&C domain |
| INS_GROUP | INS_LIVING | Life/Living domain |
| INS_BEN | INS_LIVING | Life/Living domain |
| INS_LIFE | INS_LIVING | Life/Living domain |
| INS_HEALTH_DIS | INS_LIVING | Life/Living domain |

---

## 7. Change Control

- Changes require version increment.
- Adding a new selectable profession requires governance review.
- Deprecation requires:
  - redirect map entry
  - is_selectable set to false
  - downstream consumption verified via effective view
- Field removal is prohibited without deprecation cycle.
- Profession code reuse is prohibited.

---

END — REG–P2–Seat-Driving Profession Registry (SB)
