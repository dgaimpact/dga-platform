# DGA ORGANIZATIONAL DOCUMENT ARCHITECTURE & GOVERNANCE MAP

**Version:** v1.0
**Created:** 2025-12-13
**Status:** Canonical (Foundational)

---

## PURPOSE OF THIS DOCUMENT

This document defines **how all DGA documentation is structured, governed, and used**.

Its sole purpose is to eliminate ambiguity during:

* system design (Replit, Supabase, automation)
* execution doctrine creation
* future scaling and onboarding

This is an **organizational-level map**, not an operating manual.

---

## DESIGN PRINCIPLES (NON-NEGOTIABLE)

1. **Single Source of Truth**
   Every concept, rule, and field name has one authoritative home.

2. **Human-Verifiable Before System-Executable**
   A human must understand the intent and expected outcome before automation is trusted.

3. **No Implicit Inference**
   Systems must not guess. If behavior matters, it must be written.

4. **Separation of Authority**
   Governance, execution, and operations are documented separately.

---

## DGA DOCUMENT CLASSES (AUTHORITATIVE HIERARCHY)

### Canonical Naming Convention

All DGA documents follow this required naming pattern:

**`[TYPE]–[P#]–[Short Name]`**

Where:

* **TYPE** = document authority class (BP, ED, SOP, REG, KB)
* **P#** = Operating Pillar reference
* **Short Name** = human-readable intent (no snake case, no filler)

### Document Type Codes

| Code    | Meaning                      | Usage                             |
| ------- | ---------------------------- | --------------------------------- |
| **BP**  | Blueprint                    | Governance / intent               |
| **ED**  | Execution Doctrine           | System execution rules            |
| **SOP** | Standard Operating Procedure | Human operational workflows       |
| **REG** | Registry                     | Canonical schemas & assets        |
| **KB**  | Knowledge Base               | Explanatory or reference material |

### Pillar Codes

| Pillar                        | Code   |
| ----------------------------- | ------ |
| Prospecting                   | **P1** |
| Intake & Onboarding           | **P2** |
| Audit                         | **P3** |
| Content Creation & Publishing | **P4** |
| Post-Publish Reinforcement    | **P5** |
| Platform-Wide / Cross-Pillar  | **PW** |

**PW** is used only for documents that intentionally apply across multiple pillars.

---

### 2. EXECUTION DOCTRINES (ED)

**Authority Level:** Binding (System Execution)

**Purpose:**

* Translate Blueprint intent into deterministic, testable system behavior
* Eliminate ambiguity during build and automation

**Characteristics:**

* Human-readable, system-executable
* Strict, explicit, non-negotiable
* Versioned

**Structure:**

* Core ED (shared logic)
* Overlay EDs (context-specific behavior)

**Examples:**

* ED-AUD-CORE
* ED-AUD-SCHED
* ED-AUD-ADHOC

---

### 3. EXECUTION APPENDICES (WITHIN BLUEPRINTS)

**Authority Level:** Referential Bridge

**Purpose:**

* Declare which Execution Doctrines apply
* State non-negotiable execution constraints

**Characteristics:**

* Short
* Non-operational
* No logic duplication

---

### 4. SCHEMA & ASSET REGISTRY

**Authority Level:** Canonical Naming & Structure

**Purpose:**

* Define all platform assets and schemas
* Prevent naming drift and duplication

**Primary Document:**

* DGA_ASSET_SCHEMA_REGISTRY_CANONICAL.md

**Organization:**

* By Operating Pillar
* Within Pillar: by Platform

---

### 5. STANDARD OPERATING PROCEDURES (SOP)

**Authority Level:** Operational (Human Execution)

**Purpose:**

* Guide routine human tasks
* Support operations, not systems

**Characteristics:**

* Step-by-step
* Tool-agnostic where possible
* May change frequently

**Examples:**

* Intake & Onboarding SOP
* Exception Handling SOP

---

## OPERATING PILLARS (CONCEPTUAL)

Operating Pillars describe **business functions**, not execution logic.

Examples:

* Prospecting
* Intake & Onboarding
* Audit
* Content Creation & Publishing
* Post-Publish Reinforcement

Pillars CONSUME documents — they do not define document authority.

---

## DOCUMENT RELATIONSHIP FLOW

Blueprint (Why / Boundaries)
↓
Execution Appendix (What must be enforced)
↓
Execution Doctrine (How systems behave)
↓
Schema & Asset Registry (Exact names & structures)
↓
Systems (Replit / Supabase / Automation)

SOPs operate in parallel for human processes.

---

## VERSIONING & CHANGE CONTROL

* Blueprints: versioned, rarely updated
* Execution Doctrines: versioned, controlled evolution
* Registry: versioned, canonical naming only
* SOPs: date-stamped, flexible

Meaningful change requires:

* version increment
* change summary
* GitHub commit

---

## GOVERNANCE RULE

If a conflict exists:

1. Blueprint overrides all
2. Execution Doctrine overrides SOPs
3. Registry overrides system implementation

No system behavior may contradict a higher authority document.

---

**END OF DOCUMENT**
