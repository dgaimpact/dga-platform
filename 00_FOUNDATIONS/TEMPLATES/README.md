# Templates — Canonical Document Structures

This directory contains **canonical document templates** used across the DGA platform.

Templates define **structure only**.  
They do not define governance, execution logic, or operational behavior.

---

## Purpose

Templates exist to:
- Enforce structural consistency across documents
- Prevent formatting drift as the system scales
- Reduce cognitive load during document creation
- Ensure downstream systems can reliably interpret documents

Templates are **foundational assets** and are never consumed directly by runtime systems.

---

## What Belongs Here

This directory includes templates for the following **document classes**:

- **Blueprints (BP)**  
  Governance, intent, authority, and non-negotiables  
  *System-level, durable, governing*

- **Execution Doctrines (ED)**  
  Deterministic system behavior and enforcement rules  
  *System-level, executable, non-negotiable*

- **Standard Operating Procedures (SOP)**  
  Internal, repeatable workflows  
  *Human + system interaction, procedural*

- **General Documents (GD)**  
  Reference artifacts and account-level outputs  
  *Non-governing, often system-consumed*

- **Guides (GUIDE)**  
  Human-facing enablement documents  
  *Non-governing, instructional, shareable*

---

## Guide Documents (Important Distinction)

**Guides are not SOPs and are not GDs.**

Guides:
- Are written for **humans**, not systems
- Are intentionally **conversational and practical**
- May be shared with PB subscribers, referral partners, or internal teams
- Are **derived from** SOPs or governance — never the other way around
- Do not contain enforcement language or system internals

Examples of Guides include:
- Interviewer quick guides
- Relationship management guides
- Prospecting and positioning guides
- Conversation frameworks for PB subscribers

---

## Examples of Templates

- `BP_TEMPLATE_CANONICAL_V2.md`
- `ED_TEMPLATE_CANONICAL.md`
- `SOP_TEMPLATE_CANONICAL.md`
- `GENERAL_DOCUMENT_TEMPLATE_CANONICAL.md`
- `GUIDE_TEMPLATE_CANONICAL.md`

---

## What Does NOT Belong Here

This directory must not contain:
- Live account documents
- Pillar-specific governance files
- Execution logic
- Subscriber-specific artifacts
- Files referenced directly by runtime systems

Templates are **authoring tools**, not operational inputs.

---

## Governance Hierarchy Reminder

If conflicts arise:
- **Blueprints override templates**
- **Execution Doctrines override SOPs**
- **SOPs inform Guides**
- **Guides never override governance**

---

END — Templates README
