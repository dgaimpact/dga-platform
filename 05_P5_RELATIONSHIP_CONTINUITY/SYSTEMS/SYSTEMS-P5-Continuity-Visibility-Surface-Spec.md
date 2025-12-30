# Continuity Visibility - Surface Specification

Non-executing system specification defining how P5 — Relationship Continuity is surfaced to humans

Version: v1.0  
Created: 2025-12-29  
Status: Reference (Active)

Applies To:
- Any UI, dashboard, or report that displays P5 continuity information
- Any system consuming REG–P5–Relationship-Continuity for display purposes

Primary Pillar:
- P5 — Relationship Continuity

Governing Authority:
- BP–P5–Relationship-Continuity.md
- REG–P5–Relationship-Continuity.md
- All ED–P5–Relationship-Continuity Execution Doctrines

---

## 1. Purpose

This specification defines **how P5 continuity data may be displayed** to humans.

It exists to:
- standardize visibility without prescribing action
- prevent urgency, prioritization, or optimization
- ensure displays remain descriptive and neutral
- enforce human/system boundaries at the UI layer

This document is **non-executing** and **non-prescriptive**.

---

## 2. Visibility Philosophy

P5 visibility must:
- make time visible
- avoid implying meaning
- avoid prompting action
- avoid ranking or comparison

Visibility exists for awareness only.

---

## 3. Required Display Elements (Minimal)

Any P5 visibility surface must include **only** the following elements.

### 3.1 Relationship Identifier

- Display a neutral identifier (e.g., name or label)
- No value-based ordering or emphasis

---

### 3.2 Last Touchpoint Date

- Display as a calendar date (YYYY-MM-DD)
- No relative language (“recently,” “long ago”)

---

### 3.3 Elapsed Time (Optional)

If displayed:
- show as a number of days elapsed
- do not convert to language implying urgency

---

### 3.4 Continuity State (Derived)

Permitted labels:
- Current
- Approaching Lapse
- Lapsed

Labels must:
- be visually neutral
- avoid color implying risk or priority
- be consistent across all surfaces

---

## 4. Ordering & Grouping Rules

Displays must **not**:

- rank relationships by state
- sort by urgency
- group by value or performance
- collapse or hide lapsed relationships

If ordering is required, it must be:
- alphabetical
- creation-order
- manually selected by the human viewer

---

## 5. Language Constraints (UI Copy)

UI language must be:

- factual
- time-descriptive
- non-judgmental

### Forbidden UI Language

- “needs attention”
- “at risk”
- “overdue”
- “priority”
- “urgent”
- “should contact”

If copy implies action, the surface violates P5.

---

## 6. Visual Design Constraints

UI design must avoid:

- red/yellow/green urgency coding
- flashing indicators
- countdown timers
- progress bars
- badges implying failure or success

Subtle differentiation is acceptable only if neutral.

---

## 7. Interaction Constraints

Users must **not** be able to:

- trigger outreach
- schedule contact
- generate messages
- mark states manually
- acknowledge or dismiss lapse

Visibility must not become workflow.

---

## 8. Cross-System Integration Rules

P5 visibility surfaces must not:

- link to CRM task creation
- feed automation engines
- influence prioritization elsewhere
- trigger alerts outside P5 scope

If a link implies action, it is prohibited.

---

## 9. Error & Absence Handling

If `last_touchpoint_date` is null:

- display “No recorded touchpoint”
- do not infer state
- do not hide the relationship

Absence must remain visible and explicit.

---

## 10. Compliance Checkpoints

A P5 visibility surface is compliant only if:

- no action can be taken from it
- no urgency is implied
- no optimization is possible
- all data is read-only
- meaning is not inferred

---

## 11. Lock Statement

> **If a screen encourages action, it is not a P5 screen.**

This specification is binding.

---

END — SYSTEMS–P5–Continuity-Visibility-Surface-Spec
