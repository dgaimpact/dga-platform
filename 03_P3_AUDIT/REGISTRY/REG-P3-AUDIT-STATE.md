# AUDIT STATE  
Canonical Audit State, Timing & Content Eligibility Registry

Version: v1.0  
Created: 2025-12-29  
Status: Canonical (Active)

Primary Pillar: **P3 — Audit**

Consumed By:
- P2 — Intake & Onboarding
- P3 — Audit Orchestration
- P4 — Content Creation & Publishing
- Replit AI-Agent
- Supabase (constraints & triggers)

---

## GitHub Directory Location

03_P3_AUDIT/
└── REGISTRIES/
└── REG–P3–AUDIT-STATE.md

---

## 1. Authority & Scope

This Registry defines the **canonical audit state fields, enums, and constraints** that govern:

- audit execution state
- audit timing and immutability
- content eligibility gating
- PB Parent vs PB Child isolation
- governance blocking behavior

This registry is:
- authoritative
- non-executing
- logic-free

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Core Registry Rules (Non-Negotiable)

- Audit state fields are immutable once set, unless explicitly allowed
- Scheduled audits and ad-hoc diagnostics must never share state fields
- Content eligibility must be derived only from scheduled audit completion
- PB Parent and PB Child state must never be merged
- No inference is permitted

If a field is not defined here, it does not exist.

---

## 3. Field Definitions

### 3.1 Audit State Fields

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|-------------|
| audit_state | Current authoritative audit state | enum | yes | PENDING, RUNNING, COMPLETED, FAILED | mutable (system-only) | P3, P4 |
| audit_type | Type of scheduled audit executed | enum | yes | GOVERNANCE, FULL | immutable | P3 |
| audit_scope | PB context of audit | enum | yes | SOLO, PB_PARENT, PB_CHILD | immutable | P3 |
| audit_started_at | Timestamp audit execution begins | timestamptz | yes | ISO-8601 | immutable | P3 |
| audit_completed_at | Timestamp audit completes successfully | timestamptz | conditional | ISO-8601 | immutable | P3, P4 |
| audit_failed_at | Timestamp audit fails | timestamptz | conditional | ISO-8601 | immutable | P3 |
| audit_cycle_anchor | Anchor date for scheduled audit | date | conditional | YYYY-MM-DD | immutable | P3 |

---

### 3.2 Content Eligibility Fields

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|-------------|
| content_eligible | Indicates content may execute | boolean | yes | true / false | system-derived | P4 |
| content_block_reason | Reason content is blocked | enum | conditional | NO_AUDIT, GOVERNANCE_FAILURE, AUDIT_FAILED | immutable | P4 |

---

### 3.3 Governance Control Fields (PB Context)

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|-------------|
| governance_status | Governance integrity state | enum | conditional | CLEAR, BLOCKED | mutable (system-only) | P3 |
| governance_blocked_at | Timestamp governance block applied | timestamptz | conditional | ISO-8601 | immutable | P3 |
| governance_block_reason | Reason for governance block | text | conditional | free text | immutable | P3 |

---

## 4. Enumerations

### 4.1 audit_state

| Value | Description |
|------|-------------|
| PENDING | Audit queued but not started |
| RUNNING | Audit currently executing |
| COMPLETED | Audit completed successfully |
| FAILED | Audit execution failed |

---

### 4.2 audit_type

| Value | Description |
|------|-------------|
| GOVERNANCE | PB Parent governance audit |
| FULL | Full GEO + AIO audit |

---

### 4.3 audit_scope

| Value | Description |
|------|-------------|
| SOLO | Solo subscriber audit |
| PB_PARENT | Playbook parent (MP) audit |
| PB_CHILD | Playbook child (REA) audit |

---

### 4.4 content_block_reason

| Value | Description |
|------|-------------|
| NO_AUDIT | No completed scheduled audit exists |
| GOVERNANCE_FAILURE | Governance audit failed |
| AUDIT_FAILED | Most recent scheduled audit failed |

---

### 4.5 governance_status

| Value | Description |
|------|-------------|
| CLEAR | Governance satisfied |
| BLOCKED | Governance failure present |

---

## 5. Cross-Field Constraints (Declarative Only)

- content_eligible = true requires audit_state = COMPLETED
- audit_completed_at must be present when audit_state = COMPLETED
- audit_failed_at must be present when audit_state = FAILED
- governance_status = BLOCKED prohibits content_eligible = true
- audit_scope = PB_PARENT prohibits audit_type = FULL
- audit_scope = PB_CHILD requires audit_type = FULL

No implicit defaults are permitted.

---

## 6. Ad-Hoc Diagnostic Exclusion Rule

Ad-hoc diagnostic activity:

- must not write to any field in this registry
- must not update audit_state
- must not affect content eligibility
- must not be persisted historically

If diagnostic data requires persistence, it belongs in a separate registry.

---

## 7. Change Control

- Version increment required for any change
- Field removal prohibited without deprecation cycle
- Downstream compatibility review required

Silent drift is prohibited.

---

**END — REG–P3–AUDIT-STATE**
