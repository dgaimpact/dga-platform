# Account Intake Schema

Canonical registry of all fields used to onboard, normalize, and compliantly represent a DGA subscriber account

Version: v1.1  
Created: 2025-12-16  
Status: Canonical (Active)

Primary Pillar: P2 — Intake & Onboarding  
Consumed By:
- P2 — Intake & Onboarding
- P3 — Audit
- P4 — Content Creation & Publishing (Authority Hub)
- P5 — Relationship Continuity
- Systems (Replit, Supabase, Automation)

---

## 1. Authority & Scope

This Registry defines the **canonical fields, types, and constraints** for:

> subscriber identity, regulatory disclosure, and CASL-compliant public representation within the DGA platform

This document is:
- authoritative
- non-executing
- non-procedural
- logic-free

If a system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- Field names are immutable
- Types must be enforced exactly
- No implicit values are permitted
- No inference is allowed
- If a field is not listed here, it does not exist
- Regulatory compliance fields must be user-confirmed

---

## 3. Field Definitions

### 3.1 Account Identity (Public-Facing)

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| account_id | System-generated unique account identifier | UUID | Yes | UUID v4 | Locked | P2 | P2–P5 |
| account_status | Current lifecycle status | Enum | Yes | see ACCOUNT_STATUS | Mutable | P2 | P2–P5 |
| profession | User-declared profession (public-facing) | String | Yes | Free text | Locked | P2 | P2–P4 |
| professional_name | Legal / licensed professional name | String | Yes | Free text | Locked | P2 | P2–P4 |
| brokerage_name | Public-facing brokerage / firm name | String | Yes | Free text | Locked | P2 | P2–P4 |

---

### 3.2 Regulatory Disclosure

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| regulatory_body | Governing regulatory authority | Enum | Yes | FSRA \| BCFSA \| RECA \| NONE \| OTHER | Locked | P2 | P2–P4 |
| brokerage_license_number | Brokerage licence number (if required) | String | Conditional | Alphanumeric | Locked | P2 | P4 |
| regulatory_disclosure_required | Indicates mandatory public disclosure | Boolean | Yes | true \| false | Locked | P2 | P4 |

---

### 3.3 Market & Jurisdiction

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| province | Primary province of operation | Enum | Yes | ON \| BC \| AB \| Other | Locked | P2 | P2–P4 |
| market_name | Canonical market / city | String | Yes | DGA-defined | Locked | P2 | P2–P5 |

---

### 3.4 Business Address (CASL Compliance)

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| business_address_line1 | Street address | String | Yes | Free text | Locked | P2 | P4 |
| business_address_line2 | Unit / suite | String | No | Free text | Locked | P2 | P4 |
| business_city | City | String | Yes | Free text | Locked | P2 | P4 |
| business_province | Province | Enum | Yes | CA provinces | Locked | P2 | P4 |
| business_postal_code | Postal code | String | Yes | Canadian postal format | Locked | P2 | P4 |
| business_country | Country | String | Yes | Default: Canada | Locked | P2 | P4 |
| address_source | Source of address | Enum | Yes | OWN \| BROKERAGE | Locked | P2 | P4 |
| casl_address_confirmed | User attestation for CASL use | Boolean | Yes | true | Locked | P2 | P4 |

---

### 3.5 Canonical Platforms

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| website_url | Canonical primary website | URL | Yes | Valid URL or NONE | Locked | P2 | P2–P4 |
| gbp_url | Canonical Google Business Profile URL | URL | Conditional | Google Maps format | Locked | P2 | P2–P3 |
| gbp_place_id | Google Place ID | String | No | Alphanumeric | Locked | P2 | P3 |

---

### 3.6 Intake State

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| p2_status | Intake completion state | Enum | Yes | see P2_STATUS | Mutable | P2 | P2–P3 |
| intake_completed_at | Timestamp of intake completion | Timestamp | No | ISO 8601 | Locked | P2 | P2–P3 |
| intake_exception_flag | Intake exception present | Boolean | Yes | true \| false | Mutable | P2 | P2–P3 |

---

## 4. Enumerations

### REGULATORY_BODY

| Value | Description |
|------|-------------|
| FSRA | Financial Services Regulatory Authority (ON) |
| BCFSA | BC Financial Services Authority |
| RECA | Real Estate Council of Alberta |
| NONE | No regulatory body |
| OTHER | User-specified |

---

### ACCOUNT_STATUS

| Value | Description |
|------|-------------|
| PROSPECT | Not yet activated |
| ACTIVE | Live subscriber |
| PAUSED | Temporarily inactive |
| TERMINATED | Permanently closed |

---

### P2_STATUS

| Value | Description |
|------|-------------|
| P2_STARTED | Intake initiated |
| P2_INCOMPLETE | Missing required data |
| P2_COMPLETE | Intake finalized |
| P2_EXCEPTION | Exception logged |

---

## 5. Cross-Field Constraints (Declarative Only)

- `regulatory_disclosure_required = true` requires `regulatory_body ≠ NONE`
- `province = ON` AND `regulatory_body = FSRA` requires `brokerage_license_number`
- `gbp_place_id` may exist only if `gbp_url` exists
- `casl_address_confirmed` must be true for `p2_status = P2_COMPLETE`
- All Locked fields must not change after `p2_status = P2_COMPLETE`

---

## 6. Change Control

- Changes require version increment
- Field removal is prohibited without deprecation cycle
- Changes must be reviewed for downstream Authority Hub impact

---

END — REG–P2–Account Intake Schema
