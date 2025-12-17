# INTAKE FIELD SET

Canonical registry defining the **required and optional intake fields** for **P2 — Intake & Onboarding**.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** REG_P2_INTAKE_FIELD_SET.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Consumed By:**
- P2 — Replit Onboarding Apps
- Supabase (`dga_accounts`, validation logic)
- Activation & Exception Handling Logic

---

## 1. Authority & Scope

This Registry defines the **canonical intake field set** required to complete P2 onboarding.

The intake field set:
- Determines readiness for validation
- Gates activation eligibility
- Prevents partial or ambiguous onboarding states

This document is:
- authoritative  
- non-executing  
- non-procedural  
- logic-free  

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- All required fields must be present before `P2_VALIDATED`
- Optional fields must not block validation or activation
- No inference or auto-population is permitted
- Field meaning must not change across implementations
- If a field is not listed here, it does not exist

---

## 3. Core Identity Fields (Required)

| Field | Type | Required | Description |
|------|------|----------|-------------|
| professional_name | TEXT | Yes | Individual or business professional name |
| profession_code | TEXT | Yes | Canonical profession code |
| province | TEXT | Yes | Province of operation (e.g. `ON`) |

---

## 4. Business Information Fields (Required)

| Field | Type | Required | Description |
|------|------|----------|-------------|
| brokerage_name | TEXT | Yes | Brokerage or firm name |
| regulatory_body | TEXT | Yes | Governing or licensing body |
| regulatory_disclosure_required | BOOLEAN | Yes | Whether disclosures are required |

---

## 5. Location & Market Fields (Required)

| Field | Type | Required | Description |
|------|------|----------|-------------|
| business_address_line1 | TEXT | Yes | Primary business address |
| business_city | TEXT | Yes | City |
| business_province | TEXT | Yes | Province |
| business_postal_code | TEXT | Yes | Postal code (used for FSA resolution) |
| market_name | TEXT | Yes* | Market name (written atomically) |
| territory_code | TEXT | Yes* | Territory code (written atomically) |

\* `market_name` and `territory_code` must be written **together**.

---

## 6. Digital Presence Fields (Conditionally Required)

| Field | Type | Required | Description |
|------|------|----------|-------------|
| website_url | TEXT | Conditional | Business website (if one exists) |
| gbp_url | TEXT | Conditional | Google Business Profile URL (if one exists) |
| gbp_place_id | TEXT | Conditional | GBP Place ID (if GBP exists) |

### Conditional Rules
- If a GBP exists, `gbp_url` **and** `gbp_place_id` are required
- If no GBP exists, fields may be null (no inference)
- Website presence must be explicitly declared

---

## 7. Communication & Compliance Fields (Optional)

| Field | Type | Required | Description |
|------|------|----------|-------------|
| casl_address_confirmed | BOOLEAN | No | CASL compliance confirmation |
| address_source | TEXT | No | Source of address data |

---

## 8. Status & Control Fields (System-Managed)

| Field | Type | Required | Description |
|------|------|----------|-------------|
| account_status | TEXT | Yes | Account lifecycle status |
| p2_status | TEXT | Yes | P2 onboarding lifecycle status |
| intake_exception_flag | BOOLEAN | No | Indicates approved intake exception |
| intake_completed_at | TIMESTAMPTZ | No | Timestamp when intake completed |

---

## 9. Cross-Field Constraints (Declarative Only)

- `profession_code` must exist in `REG–P2–PROFESSION_CODES`
- `seat_class = MARKET_CAPACITY` requires full market assignment
- `market_name` and `territory_code` must be written atomically
- `P2_VALIDATED` requires all required fields present
- `intake_exception_flag = true` must be explicitly set (no inference)

---

## 10. Scope Exclusions

This Registry does **not** define:
- Activation logic
- Capacity enforcement
- Relationship handling
- Audit or content requirements

These are governed by Execution Doctrines and downstream pillars.

---

## 11. Change Control

- Any change requires a **version increment**
- Required-field changes require ED review
- Field removal is prohibited without a formal deprecation cycle

---

END — REG–P2–INTAKE_FIELD_SET
