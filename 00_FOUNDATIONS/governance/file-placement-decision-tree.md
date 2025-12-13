# DGA FILE PLACEMENT DECISION TREE
Canonical Artifact Classification Guide

Version: v1.0  
Created: 2025-12-14  
Status: Governing Authority (Active)

Applies To: All files, documents, code, and assets added to the DGA repository  
Governing Authority:
- DGA_BUSINESS_MODEL.md
- PILLAR_LOCK_REFERENCE.md
- DGA_REPOSITORY_STRUCTURE.md

---

## PURPOSE

This document provides a **single, deterministic decision tree** for placing files into the correct directory within the DGA GitHub repository.

It exists to:
- eliminate hesitation and rework
- prevent functional sprawl
- enforce pillar ownership
- ensure consistent classification across contributors and time

This document is **binding**.

If a file is placed inconsistently with this decision tree, the file is misclassified and must be moved.

---

## THE DECISION TREE (FOLLOW IN ORDER)

Answer each question **top to bottom**.  
The first “YES” determines placement.

---

### 1. Does this file define or constrain how DGA works?

Includes:
- business rules
- pricing or capacity logic
- authority hierarchy
- pillar definitions
- templates that constrain other documents

**YES →**  
`00_FOUNDATIONS/GOVERNANCE/`

**NO → Continue**

---

### 2. Is this file a reusable template or registry that constrains execution?

Includes:
- ED templates
- BP templates
- SOP templates
- schema or naming registries

**YES →**  
`00_FOUNDATIONS/TEMPLATES/` or `00_FOUNDATIONS/REGISTRY/`

**NO → Continue**

---

### 3. Does this file belong to exactly ONE DGA pillar?

Ask:
- Which pillar *owns* this behavior?
- Which pillar would be violated if this file were misused?

**YES → Continue to Question 4**

**NO → Skip to Question 6**

---

### 4. Which pillar owns it?

- 01_P1_PROSPECTING/
- 02_P2_INTAKE_ONBOARDING/
- 03_P3_AUDIT/
- 04_P4_CONTENT_CREATION_PUBLISHING/
- 05_P5_RELATIONSHIP_CONTINUITY/


Then continue to Question 5.

---

### 5. What type of artifact is it?

Choose the **most specific** category:

| Artifact Type | Folder |
|--------------|--------|
| Blueprint | `BLUEPRINTS/` |
| Execution Doctrine | `EXECUTION_DOCTRINES/` |
| System design / logic | `SYSTEMS/` |
| Automation | `AUTOMATIONS/` |
| Human procedure | `OPS_SOPS/` |
| Reference material | `ASSETS/` |
| Audit-only tools | `TOOLS/` (P3 only) |
| Content assets | `CONTENT_LIBRARY/` (P4 only) |

Place the file accordingly.

---

### 6. Does this file support MULTIPLE pillars but govern none?

Includes:
- prompt libraries
- stack or integration notes
- sales and positioning assets
- style guides

**YES →**  
`95_SHARED_PLATFORM/`

**NO → Continue**

---

### 7. Does this file EXECUTE (run as code)?

Includes:
- server code
- runtime configuration
- dependency manifests
- hosting configuration

**YES →**  
`90_PLATFORM_RUNTIME/`

**NO → Continue**

---

### 8. Is this file outdated, unclassified, or awaiting review?

Includes:
- legacy documents
- superseded frameworks
- temporary holding items

**YES →**  
`99_ARCHIVE/`

Add or preserve a legacy warning header if applicable.

---

## FINAL FALLBACK RULE

If you cannot confidently answer **which pillar owns this file**, it must be placed in:

Place the file under the owning pillar root:

- 99_ARCHIVE/LEGACY_PENDING_REVIEW/


No file may remain unclassified indefinitely.

---

## ENFORCEMENT RULES

- Every Execution Doctrine must declare a single owning pillar
- No file may govern behavior from outside `00_FOUNDATIONS`
- No executable code may live outside `90_PLATFORM_RUNTIME`
- Cross-pillar assets must not be duplicated across pillars

---

## GOVERNING STATEMENT

> **When ownership is unclear, governance comes first.  
> When ownership is clear, pillars decide placement.  
> When in doubt, archive — then decide deliberately.**

---

END — DGA FILE PLACEMENT DECISION TREE


