# DGA PILLAR LOCK REFERENCE
Governing Constraint Document

Version: v1.0  
Status: Governing Authority (Locked)  
Applies To: All Blueprints, EDs, SOPs, Automations, and Systems  
Parent Authority: DGA_BUSINESS_MODEL.md

---

## PURPOSE

This document **locks the DGA Operational Pillar Model**.

It exists to:
- prevent pillar drift
- constrain interpretation
- enforce separation of responsibility
- ensure all downstream documents align to a single execution model

If a downstream document conflicts with this reference, the conflict must be resolved **here first**.

---

## GOVERNING RULE

> **All DGA execution must map to exactly one primary pillar.**  
> **Cross-pillar dependencies are allowed. Cross-pillar ownership is not.**

No system, SOP, automation, or human action may:
- span multiple pillars as its primary function
- blur responsibility between pillars
- redefine pillar scope without governance approval

---

## THE FIVE LOCKED DGA PILLARS

### **P1 — Prospecting**

**Primary Responsibility:**  
Who enters the DGA ecosystem.

**Scope Includes:**
- education-first positioning
- visibility diagnostics for prospects
- PB prospect checks (via P3.3 diagnostics)
- pre-intake qualification

**Explicitly Excludes:**
- onboarding
- audits for ACTIVE subscribers
- content creation
- relationship management

**Failure Mode if Violated:**  
Over-promising, outcome guarantees, funnel creep.

---

### **P2 — Intake & Onboarding**

**Primary Responsibility:**  
Who the subscriber actually is at activation.

**Scope Includes:**
- account activation
- entity normalization
- NAP and platform validation
- readiness for audit and publishing systems

**Explicitly Excludes:**
- ongoing audits
- content creation
- relationship cadence
- performance evaluation

**Failure Mode if Violated:**  
Dirty baselines, inconsistent entities, downstream rework.

---

### **P3 — Audit**

**Primary Responsibility:**  
Understanding what is happening — without influence.

**Locked Sub-Components:**

- **P3.1 Snapshot Audit Protocol**  
  Authoritative, timestamped visibility snapshots

- **P3.2 Internal Audit & Ecosystem Monitoring**  
  Silent, continuous, non-subscriber-facing

- **P3.3 Adhoc Diagnostic Audits**  
  Competitive checks, prospecting diagnostics, ecosystem investigations

**Explicitly Excludes:**
- content creation
- posting
- outreach
- relationship management
- execution decisions

**Failure Mode if Violated:**  
Automation creep, bias, audit-to-action shortcuts.

---

### **P4 — Content Creation & Publishing**

**Primary Responsibility:**  
What is created and distributed.

**Scope Includes:**
- structured long-form content
- canonical publishing (DGA Authority Hub)
- managed omni-channel population
- formatting, cadence, and governance

**Explicitly Excludes:**
- deciding *what* should be created (audit owns that)
- relationship outreach
- follow-ups
- performance attribution

**Failure Mode if Violated:**  
Generic content, signal dilution, channel chaos.

---

### **P5 — Relationship Continuity**

**Primary Responsibility:**  
How DGA shows up as humans.

**Scope Includes:**
- 60–90 day human touch cadence
- calls, meetings, check-ins
- continuity tracking (not performance tracking)
- escalation without automation of intent

**Explicitly Excludes:**
- content creation
- posting
- audit execution
- CRM-style task automation
- outcome enforcement

**Failure Mode if Violated:**  
Transactional relationships, trust erosion, automation overreach.

---

## PILLAR INTERACTION RULES

- Pillars operate **in sequence**, not in parallel ownership
- Output from one pillar may inform another
- No pillar may execute actions owned by another pillar
- No system may “shortcut” the pillar order

**Example:**  
Audit (P3) informs Content (P4).  
Audit does not publish.  
Content does not reinterpret audit findings.

---

## REQUIRED CITATION

All downstream documents **must reference this file** when:

- defining scope
- assigning responsibility
- introducing automation
- describing handoffs
- resolving edge cases

Suggested citation line:

> *This document operates under the DGA Pillar Lock Reference (PILLAR_LOCK_REFERENCE.md).*

---

## CHANGE CONTROL

- Pillar definitions are **locked**
- Changes require:
  - explicit governance review
  - update to this document
  - version increment
- Silent drift is not permitted

---

END — DGA PILLAR LOCK REFERENCE
