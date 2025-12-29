# Relationship Continuity – Automation Constraints

Execution Doctrine defining the absolute automation limits within P5 — Relationship Continuity

Version: v1.0  
Created: 2025-12-29  
Status: Binding (Active)

Applies To:
- DGA Core Platform
- All automation frameworks, schedulers, agents, and reminders touching P5
- All humans configuring or approving automation related to relationships

Governing Authority:
- 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
- 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md

Governed By:
- P5 — Relationship Continuity (Pillar Reference)
- ED–P5–Relationship-Continuity–Scope-&-Non-Scope
- ED–P5–Relationship-Continuity–Core-Definitions
- ED–P5–Relationship-Continuity–Cadence-Rules
- ED–P5–Relationship-Continuity–Signals-&-Escalation
- ED–P5–Relationship-Continuity–State-&-Data-Rules
- ED–P5–Relationship-Continuity–Human-vs-System-Responsibilities

---

## 1. Authority & Intent

This Execution Doctrine defines the **hard limits on automation** within P5.

It exists to:
- prevent substitution of human intent
- constrain automation to visibility and reminders only
- eliminate ambiguity before any tooling or workflows are designed
- protect trust by forbidding relationship automation

This document is **binding**.

If an automation exceeds these constraints, it is invalid by design.

---

## 2. Automation Philosophy (Declarative)

Automation in P5 is **assistive only**.

Automation exists to:
- surface time-based visibility
- reduce forgetfulness
- support human memory

Automation must never:
- act
- decide
- communicate
- persuade
- repair

Automation is memory, not agency.

---

## 3. Permitted Automation (Exhaustive)

Only the following automation behaviors are allowed.

No others may exist.

---

### 3.1 Time-Based Calculations

Automation may:
- calculate elapsed time since Last Touchpoint Date
- derive Continuity State
- update derived displays

Automation must not store interpretive outputs.

---

### 3.2 Visibility Surfacing

Automation may:
- display continuity state
- surface approaching lapse or lapse
- include relationships in summary views

Visibility must remain neutral and descriptive.

---

### 3.3 Non-Actionable Reminders

Automation may:
- remind humans that a continuity threshold is approaching or exceeded
- repeat reminders at fixed, non-accelerating intervals

Reminders must:
- contain no language
- include no suggested action
- include no urgency framing

---

### 3.4 Administrative Integrity Checks

Automation may:
- validate data formats
- block prohibited fields
- prevent invalid state transitions

---

## 4. Explicitly Forbidden Automation (Non-Negotiable)

The following automation behaviors are permanently prohibited:

- outbound emails, SMS, DMs, or calls
- auto-generated “check-in” messages
- message drafting of any kind
- task creation with deadlines
- prioritization or ranking of relationships
- adaptive or learning-based cadence changes
- outcome- or revenue-driven automation
- AI-generated language for human outreach
- automated “re-engagement” sequences

If automation communicates externally, it violates P5.

---

## 5. Reminder Content Constraints

Any reminder surfaced by automation must:

- reference time elapsed only
- avoid verbs implying action
- avoid urgency or consequence language
- avoid personalization beyond identifier

### Forbidden Reminder Examples

- “You should reach out”
- “This relationship needs attention”
- “High-risk account”
- “Urgent follow-up required”

Reminders must be informational only.

---

## 6. Frequency Constraints

Automation must:
- operate on fixed intervals
- avoid escalation through frequency
- never accelerate reminders after lapse

Time awareness must not become pressure.

---

## 7. AI Usage Prohibition

AI systems must **not** be used within P5 to:

- generate messages
- suggest talking points
- infer sentiment or intent
- assess relationship quality

AI may only be used upstream or downstream where governed separately.

---

## 8. Cross-Pillar Isolation

P5 automation must never:
- trigger actions in P3 or P4
- modify account status
- influence pricing or retention logic
- feed CRM performance engines

Automation boundaries must be enforced at integration points.

---

## 9. Downstream Dependency Declaration

This doctrine must be enforced before:
- any P5 automation is proposed
- any reminder logic is implemented
- any AI agent references P5 data

Downstream artifacts must not reinterpret automation limits.

---

## 10. Change Control

Changes to automation constraints require:
- re-validation of human/system boundary
- explicit founder approval
- version increment
- documented rationale

Automation creep is treated as trust erosion.

---

## 11. Lock Statement

> **Automation may remember.  
> Only humans may relate.**

These constraints are locked.

---

**END — ED–P5–Relationship-Continuity–Automation-Constraints**
