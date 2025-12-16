# REG–P2–Account Intake Schema

Canonical registry of all fields used to onboard and normalize a DGA subscriber account

Version: v1.0  
Created: 2025-12-16  
Status: Canonical (Active)

Primary Pillar: P2 — Intake & Onboarding  
Consumed By:
- P2 — Intake & Onboarding
- P3 — Audit
- P4 — Content Creation & Publishing
- P5 — Relationship Continuity
- Systems (Replit, Supabase, Automation)

---

## 1. Authority & Scope

This Registry defines the **canonical fields, types, and constraints** for:

> subscriber account intake, normalization, and activation within the DGA platform

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

---

## 3. Field Definitions

### 3.1 Account Identity

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| account_id | System-generated unique account identifier | UUID | Yes | UUID v4 | Locked | P2 | P2–P5 |
| account_status | Current lifecycle status of the account | Enum | Yes | see ACCOUNT_STATUS | Mutable | P2 | P2–P5 |
| account_type | Subscription class | Enum | Yes | SO \| PB \| EN | Locked | P2 | P2–P5 |
| primary_profession | Primary professional role | Enum | Yes | MP \| REA | Locked | P2 | P2–P4 |
| legal_business_name | Registered legal business name | String | Yes | Free text | Locked | P2 | P2–P4 |
| public_business_name | Public-facing business name | String | Yes | Free text | Locked | P2 | P2–P4 |

---

### 3.2 Market & Territory

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| market_name | Canonical market name | String | Yes | DGA-defined | Locked | P2 | P2–P5 |
| market_type | Market classification | Enum | Yes | Urban \| Suburban \| Rural \| Seasonal | Locked | P2 | P2–P5 |
| territory_code | Internal territory identifier | String | Yes | DGA-defined | Locked | P2 | P2–P5 |

---

### 3.3 Canonical URLs & Platforms

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| website_url | Canonical primary website | URL | Yes | Valid URL | Locked | P2 | P2–P4 |
| gbp_url | Canonical Google Business Profile URL | URL | Yes | Google Maps / GBP format | Locked | P2 | P2–P3 |
| gbp_place_id | Google Place ID | String | No | Alphanumeric | Locked | P2 | P3 |
| linkedin_url | Primary LinkedIn profile or page | URL | No | linkedin.com | Locked | P2 | P3–P4 |

---

### 3.4 Platform Access Flags

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| gsc_connected | Google Search Console access granted | Boolean | No | true \| false | Mutable | P2 | P3 |
| gsc_property_type | GSC property scope | Enum | No | Domain \| URL-prefix | Locked | P2 | P3 |

---

### 3.5 Intake & Readiness State

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| p2_status | Intake completion state | Enum | Yes | see P2_STATUS | Mutable | P2 | P2–P3 |
| intake_completed_at | Timestamp of P2 completion | Timestamp | No | ISO 8601 | Locked | P2 | P2–P3 |
| intake_exception_flag | Indicates unresolved intake issue | Boolean | Yes | true \| false | Mutable | P2 | P2–P3 |

---

## 4. Enumerations

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

- `account_status = ACTIVE` requires `p2_status = P2_COMPLETE`
- `gbp_place_id` may exist only if `gbp_url` exists
- `gsc_property_type` may exist only if `gsc_connected = true`
- All Locked fields must not change after `p2_status = P2_COMPLETE`

---

## 6. Change Control

- Changes require version increment
- Field removal is prohibited without deprecation cycle
- Changes must be reviewed for downstream pillar impact

---

END — REG–P2–Account Intake Schema
