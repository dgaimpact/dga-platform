# Audit Eligibility & States

Canonical registry of P3 audit eligibility fields, states, and declarative constraints

Version: v1.0  
Created: 2026-01-15  
Status: Canonical (Active)

Primary Pillar: P3 — Audit  
Consumed By:
- P3 Systems (Audit Runner)
- Supabase (system of record)
- Replit (Account Hub surfaces)
- n8n (orchestration only)

---

## 1. Authority & Scope

This Registry defines the canonical fields, types, and constraints for:

- P3 audit eligibility gating
- P3 audit scheduling state
- P3 audit execution lifecycle states (non-procedural)
- Account Hub visibility control (graceful access)

This document is:
- authoritative
- non-executing
- non-procedural
- logic-free

If a system, SOP, or Execution Doctrine conflicts with this registry, this registry prevails.

---

## 2. Registry Rules (Non-Negotiable)

- Field names are immutable
- Types must be enforced exactly
- No implicit values are permitted
- No inference is allowed
- If a field is not listed here, it does not exist

---

## 3. Field Definitions

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|---|---|---|---|---|---|---|---|
| account_status | Account lifecycle status | enum/text | Yes | ACTIVE, INACTIVE | Locked | P2/P3 | P3 |
| execution_blocked | Master execution block for downstream execution | boolean | Yes | true/false | Locked | P2 | P3 |
| execution_blocked_reason | Human-readable reason for execution block | text | No | free text | Locked | P2 | P3 |
| payment_status_v2 | Canonical payment standing | enum | Yes | payment_status_enum | Locked | P2/P3 | P3 |
| payment_status_changed_at | Timestamp of last payment_status_v2 change | timestamp | No | ISO timestamp | Locked | P2/P3 | P3 |
| last_payment_date | Last payment date (if applicable) | date | No | YYYY-MM-DD | Unlocked | P2/P3 | P3 |
| hub_visible_until | Account Hub visibility sunset date (graceful access) | timestamp | No | ISO timestamp or NULL | Locked | P3 | Account Hub |
| last_audit_at | Timestamp of last completed audit | timestamp | No | ISO timestamp | Locked | P3 | P3 |
| last_audit_status | Status of last audit run | enum | No | audit_run_status_enum | Locked | P3 | P3 |
| last_audit_type | Type of last audit run | enum | No | audit_type_enum | Locked | P3 | P3 |
| next_audit_due_at | Timestamp when the next scheduled audit becomes due | timestamp | No | ISO timestamp | Locked | P3 | P3 |
| audit_retry_count | Retry counter for the current due audit cycle | integer | No | 0–3 | Locked | P3 | P3 |
| audit_last_error_code | Normalized failure code (internal) | text | No | free text | Locked | P3 | P3 |
| audit_last_error_at | Timestamp of last failure event | timestamp | No | ISO timestamp | Locked | P3 | P3 |
| audit_pdf_url | Canonical location of produced audit PDF (Account Hub artifact) | text | No | URL | Locked | P3 | Account Hub |
| audit_pdf_uploaded_at | Timestamp when the audit PDF was uploaded | timestamp | No | ISO timestamp | Locked | P3 | Account Hub |

---

## 4. Enumerations

### payment_status_enum

| Value | Description |
|---|---|
| BETA | Beta access; audits allowed |
| ACTIVE | Paying, in good standing; audits allowed |
| TRIAL | Trial access; audits allowed |
| PAST_DUE | Payment overdue; audits blocked |
| HOLD | Admin hold; audits blocked |
| CANCELLED | Subscription terminated; audits blocked |
| COMP | Complimentary; audits allowed |

### audit_type_enum

| Value | Description |
|---|---|
| DAY_00 | Baseline audit on activation |
| SCHEDULED_30D | Scheduled audit on 30-day cadence |

### audit_run_status_enum

| Value | Description |
|---|---|
| DUE | Audit is due to run (eligibility may still block) |
| BLOCKED | Audit is due but blocked by gating conditions |
| RUNNING | Audit execution in progress |
| RETRYING | Audit failed and is retrying (count < 3) |
| FAILED | Audit failed after max retries (manual intervention) |
| COMPLETED | Audit completed and artifact produced |

### audit_block_reason_enum

| Value | Description |
|---|---|
| EXECUTION_BLOCKED | execution_blocked = true |
| PAYMENT_INELIGIBLE | payment_status_v2 not in allowed set |
| ACCOUNT_INACTIVE | account_status != ACTIVE |

---

## 5. Cross-Field Constraints (Declarative Only)

- An audit is eligible to execute only when:
  - account_status = ACTIVE
  - execution_blocked = false
  - payment_status_v2 ∈ {BETA, ACTIVE, TRIAL, COMP}

- When payment_status_v2 transitions from an ineligible state to an eligible state:
  - last_audit_status may become DUE
  - audit_run_status_enum may transition to RUNNING
  - next_audit_due_at must be recalculated only after a successful audit completion

- audit_retry_count must not exceed 3

- When last_audit_status = COMPLETED:
  - last_audit_at must be non-null
  - audit_pdf_url must be non-null
  - audit_pdf_uploaded_at must be non-null

- hub_visible_until:
  - may be NULL
  - may be set in the future to allow time-bound access after deactivation
  - must never enable audit execution

- If account_status = ACTIVE:
  - Account Hub visibility must not be denied solely due to hub_visible_until being in the past

---

## 6. Change Control

- Changes require version increment
- Field removal is prohibited without deprecation cycle
- Changes must be reviewed for downstream impact

---

END — REG–P3–Audit Eligibility & States (v1.0)
