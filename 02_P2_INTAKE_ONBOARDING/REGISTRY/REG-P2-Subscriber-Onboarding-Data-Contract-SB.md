# REG–P2–Subscriber Onboarding Data Contract (SB)

Canonical registry defining the **only permitted onboarding inputs** for all DGA subscribers.  
All downstream classification, eligibility, routing, and governance is **derived**.

Version: v1.0  
Created: 2026-01-11  
Status: Canonical (Active)

Primary Pillar: P2 — Intake & Onboarding  
Consumed By:
- Subscriber Onboarding App (Replit)
- DGA Admin Console
- P3 Audit Runner
- P4 Content Runner
- P5 Relationship Continuity
- Systems (Supabase, R-Agent, Automation)

---

## 1. Authority & Scope

This Registry defines the **minimum and sufficient data** collected at onboarding.

This Registry governs:
- what fields onboarding is allowed to collect
- which fields are user-entered vs system-derived
- how profession, seat, PB eligibility, and content scope are resolved

This Registry does NOT govern:
- profession definitions (see REG–P2–Seat-Driving-Profession-Registry)
- Power Group logic (internal semantic layer)
- content templates or topics
- UI/UX implementation details

If any system collects additional fields at onboarding, **it is out of compliance**.

---

## 2. Registry Rules (Non-Negotiable)

- Onboarding MUST be a single form.
- Users MUST NOT choose:
  - Power Groups
  - PB eligibility
  - seat domains (unless explicitly prompted)
- Profession selection MUST resolve via:
  - `v_reg_industry_master_effective`
- All downstream logic MUST be derived.
- No inference. No silent defaults.

---

## 3. Field Definitions — User Entered

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Consumed By |
|---|---|---|---|---|---|---|
| legal_name | Individual or business legal name | text | Yes | Free text | Editable | Admin |
| display_name | Public-facing brand/name | text | Yes | Free text | Editable | P4 |
| primary_market | Primary city / market | text | Yes | Free text | Locked after approval | Seat allocation |
| country | Country of operation | text | Yes | ISO country name | Locked | Governance |
| primary_profession_code | Selected profession | text | Yes | From `v_reg_industry_master_effective` where `is_selectable_effective = true` | Locked | All |
| niche_primary | Primary niche focus | text | Yes | Free text (guided) | Editable | P4 |
| niche_secondary | Optional sub-niche | text | No | Free text | Editable | P4 |
| business_model_notes | Optional clarification | text | No | Free text | Editable | Admin |
| website_url | Primary website | text | No | Valid URL | Editable | P3 |
| gbp_url | Google Business Profile URL | text | No | Valid URL | Editable | P3 |

---

## 4. Conditional User Fields (Prompted Only When Required)

| Field Name | Trigger Condition | Type | Required | Notes |
|---|---|---|---|---|
| insurance_seat_domain | primary_profession_code ∈ {INS_PNC, INS_LIVING} | enum | Yes | User selects applicable domain |
| enterprise_flag | Account intent = Enterprise | boolean | Yes | Determines EN flow only |

No other conditional fields are permitted.

---

## 5. System-Derived Fields (Never User Entered)

| Field Name | Source | Description |
|---|---|---|
| profession_code_effective | `v_reg_industry_master_effective` | Canonical seat-driving code |
| profession_group_effective | Derived | Internal grouping only |
| seat_consumption_class | Derived | PRIMARY or SHARED |
| pb_eligibility | Derived | From profession + allows_pb |
| so_eligibility | Derived | From profession + allows_so |
| en_eligibility | Derived | From profession + allows_en |
| power_group_assignments | Derived | Internal semantic alignment |
| content_scope_boundary | Derived | From profession + niches |
| audit_eligibility | Derived | P3 gate |
| content_cadence_default | Derived | P4 governance |
| account_status_initial | Derived | Defaults to PENDING_REVIEW |

---

## 6. Cross-Field Constraints (Declarative Only)

- `primary_profession_code` MUST resolve to exactly one effective code
- If a redirect exists, effective code MUST be used downstream
- `insurance_seat_domain` is required ONLY when prompted
- Niche fields MUST NOT alter seat allocation
- Market + effective profession MUST be unique per seat

---

## 7. Change Control

- Any new onboarding field requires a version increment
- Removing a field requires deprecation cycle
- Derivation logic changes MUST NOT alter collected fields
- This Registry overrides any UI or app behavior

---

END — REG–P2–Subscriber Onboarding Data Contract (SB)
