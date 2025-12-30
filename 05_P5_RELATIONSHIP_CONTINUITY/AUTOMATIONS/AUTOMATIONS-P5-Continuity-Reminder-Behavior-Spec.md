# Continuity Reminder - Behavior Specification

Non-executing automation specification defining the only permitted reminder behavior for P5 — Relationship Continuity

Version: v1.0  
Created: 2025-12-29  
Status: Reference (Active)

Applies To:
- Any scheduler, job, agent, or reminder mechanism referencing P5 data
- Any system surfacing time-based awareness related to continuity

Primary Pillar:
- P5 — Relationship Continuity

Governing Authority:
- BP–P5–Relationship-Continuity.md
- REG–P5–Relationship-Continuity.md
- All ED–P5–Relationship-Continuity Execution Doctrines

---

## 1. Purpose

This specification defines **the only allowed automation behavior** related to reminders in P5.

It exists to:
- surface time-based awareness without action
- prevent automation from substituting human intent
- standardize reminder neutrality and restraint
- eliminate escalation through frequency, language, or pressure

This document is **non-executing** and **non-prescriptive**.

---

## 2. Reminder Philosophy

P5 reminders exist to **make time visible**, not to influence behavior.

Reminders:
- inform
- surface
- repeat neutrally

Reminders must never:
- instruct
- persuade
- escalate
- decide
- communicate externally

---

## 3. Permitted Reminder Triggers

Reminders may be generated **only** when:

- a relationship enters **Approaching Lapse** ( >60 days ), or
- a relationship enters **Lapsed** ( >90 days )

No other triggers are permitted.

---

## 4. Reminder Frequency Rules

- Reminders must operate on **fixed intervals**
- Frequency must not increase after lapse
- No adaptive or learning-based scheduling
- No “nagging” patterns

Acceptable examples:
- single reminder on state entry
- periodic reminder at a fixed cadence (e.g., weekly)

Unacceptable examples:
- daily reminders
- accelerating reminders
- silence-then-burst patterns

---

## 5. Reminder Content Constraints

Reminder content must:

- reference elapsed time only
- avoid verbs implying action
- avoid urgency or consequence language
- avoid personalization beyond identifier
- avoid value, risk, or priority framing

### Forbidden Reminder Language

- “You should reach out”
- “This needs attention”
- “Overdue relationship”
- “High-risk account”
- “Immediate follow-up required”

If language implies action, the reminder violates P5.

---

## 6. Delivery Constraints

Reminders may be delivered **internally only**:

- dashboards
- internal notifications
- summary views

Reminders must never:
- send emails to subscribers
- send SMS, DMs, or calls
- post externally
- create tasks or calendar events

Visibility must not become outreach.

---

## 7. Interaction Constraints

Recipients of reminders must **not** be able to:

- trigger contact
- schedule meetings
- generate messages
- acknowledge or dismiss the reminder
- suppress future reminders manually

Reminders are informational, not interactive.

---

## 8. State Reset Rules

Reminders may reset **only** when:

- a valid Human Touchpoint is recorded
- `last_touchpoint_date` is updated by a human

System inference is prohibited.

---

## 9. Prohibited Automation Patterns

The following patterns are permanently prohibited:

- automated re-engagement
- AI-generated message suggestions
- task creation with deadlines
- outcome-weighted reminder logic
- revenue-based prioritization
- integration with CRM action engines

If automation initiates action, it violates P5.

---

## 10. Compliance Criteria

A reminder implementation is compliant only if:

- it cannot contact subscribers
- it cannot create work items
- it cannot prioritize relationships
- it cannot infer meaning
- it operates deterministically

---

## 11. Lock Statement

> **Reminders may inform.  
> They must never prompt.**

This specification is binding.

---

END — AUTOMATIONS–P5–Continuity-Reminder-Behavior-Spec
