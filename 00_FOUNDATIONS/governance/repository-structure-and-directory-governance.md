# DGA REPOSITORY STRUCTURE & DIRECTORY GOVERNANCE
Canonical Repository Map & Usage Constraints

Version: v1.0  
Created: 2025-12-14  
Status: Governing Authority (Active)

Applies To: GitHub (dga-platform), all contributors, all systems  
Governing Authority:
- DGA_BUSINESS_MODEL.md
- PILLAR_LOCK_REFERENCE.md

---

## 1. PURPOSE & AUTHORITY

This document defines the **canonical directory structure** for the DGA GitHub repository.

It exists to:
- eliminate ambiguity about where files belong
- enforce pillar ownership at the filesystem level
- prevent functional sprawl and silent scope creep
- ensure the repository remains navigable, auditable, and scalable

This document is **binding**.

If a file is placed in a directory that conflicts with its intended use as defined here, the file is misfiled and must be relocated.

---

## 2. GOVERNING PRINCIPLES

The DGA repository is organized by **pillar ownership first**, not by function.

Rules:
- Pillars define **responsibility and ownership**
- Governance documents outrank all other artifacts
- Executable code is isolated from documentation
- Cross-pillar assets are centralized, not duplicated
- Legacy material is preserved but explicitly non-governing

---

## 3. TOP-LEVEL DIRECTORY STRUCTURE (CANONICAL)

- 00_FOUNDATIONS/
- 01_P1_PROSPECTING/
- 02_P2_INTAKE_ONBOARDING/
- 03_P3_AUDIT/
- 04_P4_CONTENT_CREATION_PUBLISHING/
- 05_P5_RELATIONSHIP_CONTINUITY/
- 90_PLATFORM_RUNTIME/
- 95_SHARED_PLATFORM/
- 99_ARCHIVE/

Each directory below is **intentional**.  
No additional top-level folders may be introduced without governance review.

---

## 4. DIRECTORY DEFINITIONS & INTENDED USE

---

### 00_FOUNDATIONS — Governance & Authority

**Purpose:**  
Defines *what DGA is*, *how it is governed*, and *what constrains everything else*.

**Contains:**
- Business model
- Pillar lock reference
- Governance documents
- Canonical templates (ED, BP, SOP)
- Registries (schemas, naming, assets)

**Rules:**
- Nothing here executes
- Nothing here is optional
- Documents here outrank all others

---

### 01_P1_PROSPECTING — Prospecting Pillar

**Purpose:**  
Governs who enters the DGA ecosystem and under what conditions.

**Contains:**
- Prospecting blueprints
- Prospect-focused execution doctrines
- Diagnostic systems
- Education and qualification automations
- SOPs related to lead intake and qualification

**Explicitly Excludes:**
- Subscriber onboarding
- Audits for active accounts
- Content creation
- Relationship management

---

### 02_P2_INTAKE_ONBOARDING — Intake & Onboarding Pillar

**Purpose:**  
Establishes a clean, normalized entity baseline for new ACTIVE subscribers.

**Contains:**
- Intake blueprints
- Onboarding execution doctrines
- Entity normalization systems
- Platform validation automations
- Activation SOPs

**Explicitly Excludes:**
- Ongoing audits
- Content creation
- Relationship continuity

---

### 03_P3_AUDIT — Audit Pillar

**Purpose:**  
Observes and evaluates visibility and recommendability without bias or action.

**Contains:**
- Audit blueprints
- Audit execution doctrines
- Audit systems and orchestration logic
- Diagnostic and scoring tools
- Audit-specific automations

**Explicitly Excludes:**
- Content creation or publishing
- Outreach or relationship actions
- Performance enforcement

Audit informs.  
Audit does not act.

---

### 04_P4_CONTENT_CREATION_PUBLISHING — Content Pillar

**Purpose:**  
Creates and distributes structured authority content aligned to audit outputs.

**Contains:**
- Content blueprints
- Content execution doctrines
- Content systems
- Publishing and distribution automations
- Content libraries and templates

**Explicitly Excludes:**
- Audit decision-making
- Relationship outreach
- Performance attribution

---

### 05_P5_RELATIONSHIP_CONTINUITY — Relationship Pillar

**Purpose:**  
Ensures no active subscriber relationship becomes cold, invisible, or transactional.

**Contains:**
- Relationship continuity blueprints
- Relationship execution doctrines
- Human-led systems (status, prompts, reminders)
- Limited automations that support — not replace — humans
- SOPs for touch cadence and escalation

**Explicitly Excludes:**
- Automated outreach
- Content creation
- Audit execution
- CRM-style performance tracking

No automation of intent is permitted.

---

### 90_PLATFORM_RUNTIME — Executable Platform Code

**Purpose:**  
Houses code and configuration that **runs**.

**Contains:**
- Server code
- Dependency manifests
- Runtime configuration files
- Replit / hosting artifacts

**Rules:**
- No governance documents
- No blueprints
- No execution doctrines
- May be split into a separate repository in the future

---

### 95_SHARED_PLATFORM — Cross-Pillar Supporting Assets

**Purpose:**  
Centralizes assets that support **multiple pillars** but belong to none exclusively.

**Contains:**
- Stack and integration documentation
- Prompt libraries
- Sales and positioning assets
- Style guides and standards

**Rules:**
- Nothing here governs
- Nothing here executes
- Exists to prevent duplication across pillars

---

### 99_ARCHIVE — Non-Governing Legacy Material

**Purpose:**  
Preserves history without creating ambiguity.

**Contains:**
- Deprecated documents
- Superseded frameworks
- Untriaged legacy files

**Rules:**
- Nothing here governs behavior
- Nothing here may be referenced by active systems
- Items must be reviewed before reintroduction

---

## 5. ENFORCEMENT & CHANGE CONTROL

- All new files must be placed according to this structure
- Misfiled artifacts must be relocated
- New top-level folders require governance approval
- This document may only be updated via explicit versioned change

---

## 6. FINAL GOVERNING STATEMENT

> **Pillars define ownership.  
> Governance defines authority.  
> Structure enforces discipline.**

---

END — DGA REPOSITORY STRUCTURE & DIRECTORY GOVERNANCE
