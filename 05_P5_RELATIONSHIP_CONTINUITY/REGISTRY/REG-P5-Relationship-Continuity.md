# Relationship Continuity

Canonical registry defining the only permitted fields and values for P5 — Relationship Continuity

Version: v1.0  
Created: 2025-12-29  
Status: Canonical (Active)

Primary Pillar: P5 — Relationship Continuity  
Consumed By:
- P5 Systems
- P5 Automations (visibility-only)
- P5 SOPs (reference only)
- Compliance & Audit tooling

Governing Authority:
- 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
- 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md
- BP–P5–Relationship-Continuity.md

---

## 1. Authority & Scope

This Registry defines the **complete and exclusive data surface** for P5 — Relationship Continuity.

It is:
- authoritative
- non-executing
- non-procedural
- logic-free

If a field is not defined in this registry, it **does not exist** in P5.

---

## 2. Registry Rules (Non-Negotiable)

- Field names are immutable
- No inferred or computed meaning fields permitted
- No qualitative or outcome-oriented data allowed
- State values are derived, not authored
- No extension fields, metadata blobs, or notes permitted

P5 remains intentionally data-minimal.

---

## 3. Field Definitions

| Field Name | Description | Type | Required | Allowed Values / Format | Lock State | Primary Pillar | Consumed By |
|-----------|-------------|------|----------|--------------------------|------------|----------------|-------------|
| relationship_id | Unique identifier for a specific human relationship | UUID | Yes | UUID v4 | Locked | P5 | Systems |
| account_id | Reference to ACTIVE subscriber or sub-account | UUID | Yes | UUID v4 | Locked | P5 | Systems |
| last_touchpoint_date | Date of most recent valid human touchpoint | DATE | No | YYYY-MM-DD | Locked | P5 | Systems |
| continuity_state | Derived continuity status (time-based only) | ENUM | Yes (derived) | current \| approaching_lapse \| lapsed | Locked | P5 | Systems |
| created_at | Record creation timestamp | TIMESTAMP | Yes | ISO-8601 | Locked | P5 | Systems |
| updated_at | Last update timestamp | TIMESTAMP | Yes | ISO-8601 | Locked | P5 | Systems |

---

## 4. Enumerations

### CONTINUITY_STATE

| Value | Description |
|------|-------------|
| current | Last touchpoint occurred within 60 days |
| approaching_lapse | Elapsed time >60 and ≤90 days |
| lapsed | Elapsed time >90 days |

No additional values are permitted.

---

## 5. Cross-Field Constraints (Declarative Only)

- `continuity_state` must be derivable solely from `last_touchpoint_date`
- `last_touchpoint_date` must never be system-generated
- `relationship_id` must be unique per relationship
- Null `last_touchpoint_date` is permitted only when no touchpoint has occurred

No logic, weighting, or interpretation is allowed.

---

## 6. Change Control

- Any change requires version increment
- Field removal is prohibited without deprecation cycle
- New fields are prohibited unless P5 lock is formally reopened
- Downstream impact review is mandatory

---

## 7. Lock Statement

> **P5 data records time — nothing else.**  
> **Meaning lives with humans, not systems.**

This registry is locked.

---

END — REG–P5–Relationship-Continuity
