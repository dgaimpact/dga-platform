# Relationship Continuity – State & Data Rules

Execution Doctrine defining the only permitted state handling and data rules for P5 — Relationship Continuity

Version: v1.0  
Created: 2025-12-29  
Status: Binding (Active)

Applies To:
- DGA Core Platform
- All systems, dashboards, reminders, and records storing P5 data
- All humans recording or updating relationship continuity information

Governing Authority:
- 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
- 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md

Governed By:
- P5 — Relationship Continuity (Pillar Reference)
- ED–P5–Relationship-Continuity–Scope-&-Non-Scope
- ED–P5–Relationship-Continuity–Core-Definitions
- ED–P5–Relationship-Continuity–Cadence-Rules
- ED–P5–Relationship-Continuity–Signals-&-Escalation

---

## 1. Authority & Intent

This Execution Doctrine defines the **authoritative data model and state-handling rules** for P5.

It exists to:
- constrain what data P5 is allowed to store
- prevent analytical or interpretive data creep
- ensure state transitions are deterministic and time-based
- preserve the non-evaluative nature of the relationship layer

This document is **binding**.

If a field, state, or transition is not explicitly permitted here, it must not exist.

---

## 2. Canonical P5 Data Objects (Minimal Set)

P5 is intentionally data-light.

Only the following data objects are permitted.

---

### 2.1 Relationship Identifier

**Definition:**  
A reference linking a specific human relationship to an ACTIVE subscriber or sub-account.

Rules:
- identifier must be explicit
- no inferred relationships permitted
- one identifier per relationship

P5 does not aggregate relationships.

---

### 2.2 Last Touchpoint Date

**Definition:**  
The calendar date of the most recent valid Human Touchpoint.

Rules:
- stored as a single date (YYYY-MM-DD)
- set or updated only by a human
- never system-derived
- never backfilled automatically

If unknown or never occurred, the value is null.

---

### 2.3 Continuity State

**Definition:**  
A derived, non-persistent descriptor based solely on elapsed time since Last Touchpoint Date.

Rules:
- state is derived, not authored
- state must be reproducible at any time
- state must not be manually overridden

Permitted values:
- Current
- Approaching Lapse
- Lapsed

No additional states are allowed.

---

### 2.4 Elapsed Time (Derived)

**Definition:**  
The number of days elapsed since the Last Touchpoint Date.

Rules:
- calculated dynamically
- never stored as a primary field
- used only for state derivation and display

Elapsed time must never be interpreted beyond cadence thresholds.

---

## 3. Forbidden Data Fields (Explicit)

The following data types are permanently prohibited in P5:

- relationship health scores
- engagement metrics
- sentiment indicators
- satisfaction ratings
- priority levels
- outcome flags
- performance annotations
- notes implying quality or intent

If meaning must be captured, it belongs outside P5.

---

## 4. State Transition Rules

### 4.1 Allowed Transitions

State transitions are **automatic and time-based only**.

Permitted transitions:

- Current → Approaching Lapse  
- Approaching Lapse → Lapsed  
- Any State → Current (only via new Human Touchpoint)

---

### 4.2 Forbidden Transitions

The following transitions are prohibited:

- manual state overrides
- Lapsed → Approaching Lapse (without touchpoint)
- Lapsed → Current (without touchpoint)
- any transition driven by audits, content, or outcomes

Time plus human presence is the only driver.

---

## 5. Touchpoint Recording Rules

A Human Touchpoint may be recorded only when:

- a human confirms it occurred
- a valid date is supplied
- the touchpoint meets canonical definition

Recording a touchpoint:
- updates Last Touchpoint Date
- resets continuity state to Current
- does not erase historical lapse visibility

Systems must not:
- auto-record touchpoints
- infer touchpoints from activity
- infer touchpoints from content delivery or audits

---

## 6. History Handling (Visibility-Only)

P5 may display:
- historical Last Touchpoint Dates
- visible indication that a lapse occurred

P5 must not:
- compute lapse frequency
- compute average gaps
- trend continuity behavior
- compare relationships

History exists for awareness, not analysis.

---

## 7. Cross-System Data Isolation

P5 data must never be:

- written to CRM performance tables
- joined with revenue or engagement data
- used to rank or sort accounts by value
- consumed by automation engines for outreach

If another system needs context, it must request it from humans.

---

## 8. Error Handling & Integrity Rules

If continuity data is missing or invalid:

- state must default to visibility-only (unknown)
- no assumptions may be made
- no corrective automation permitted

Data uncertainty must be surfaced, not hidden.

---

## 9. Downstream Dependency Declaration

This doctrine must be enforced before:
- any P5 schema or registry is defined
- any P5 dashboard is implemented
- any P5 SOP references data or states

Downstream artifacts must mirror this data model exactly.

---

## 10. Change Control

Changes to P5 data or state rules require:
- review against Scope & Non-Scope
- confirmation cadence remains intact
- version increment
- documented rationale

Data expansion is treated as intent expansion.

---

## 11. Lock Statement

> **P5 stores time, not meaning.**  
> **The moment meaning is stored, trust is quantified — and lost.**

This data model is locked.

---

**END — ED–P5–Relationship-Continuity–State-&-Data-Rules**
