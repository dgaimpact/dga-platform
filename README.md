# Digital Growth Accelerator (DGA) — Platform Knowledge Base

*A governed, pillar-based operating system for AI visibility, content authority, and relationship continuity.*

Version: v1.1  
Updated: 2025-12-14  
Status: Navigational Reference (Non-Governing)

---

## What This Repository Is

This repository is the **single source of truth** for the Digital Growth Accelerator (DGA) platform.

It contains all governing documents, pillar execution artifacts, systems, automations, and operational references required to **design, operate, scale, and audit** DGA.

This repository is **governed**, **version-controlled**, and **pillar-aligned**.

This README is **navigational only**.  
It does not define behavior or override governance.

---

## Governing Authority (Read First)

All documents and systems in this repository are governed by:

- **`00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md`**
- **`00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md`**
- **`00_FOUNDATIONS/GOVERNANCE/DGA_REPOSITORY_STRUCTURE.md`**
- **`00_FOUNDATIONS/GOVERNANCE/DGA_FILE_PLACEMENT_DECISION_TREE.md`**

If any document conflicts with these authorities, the conflict is resolved **there first**.

---

## DGA Operational Pillars (Primary Navigation)

DGA operates on **five locked operational pillars**.  
Pillars define **ownership, sequencing, and execution boundaries**.

Each pillar contains its own (as applicable):
- Blueprints
- Execution Doctrines (EDs)
- Systems
- Automations
- SOPs

---

### **P1 — Prospecting**
**Purpose:** Who should enter the DGA ecosystem.

Includes:
- Education-first positioning
- Prospect diagnostics
- Pre-intake visibility checks

---

### **P2 — Intake & Onboarding**
**Purpose:** Who the subscriber actually is at activation.

Includes:
- Entity normalization
- NAP and platform validation
- Readiness for audit and publishing systems

---

### **P3 — Audit**
**Purpose:** Understand visibility and recommendability without bias.

Includes:
- Snapshot audits
- Internal ecosystem monitoring
- Adhoc diagnostic audits

---

### **P4 — Content Creation & Publishing**
**Purpose:** Create and distribute structured authority content.

Includes:
- Long-form content creation
- Canonical publishing (DGA Authority Hub)
- Managed omni-channel population

---

### **P5 — Relationship Continuity**
**Purpose:** Ensure no active subscriber relationship goes cold or transactional.

Includes:
- Human-led outreach cadence
- Continuity tracking
- Escalation without automation of intent

---

## Foundations, Shared Platform & Runtime

### **00_FOUNDATIONS/**
**Purpose:** Governance, authority, and canonical references.

Includes:
- Business Model
- Pillar Lock Reference
- Repository Structure & Placement Rules
- Templates (ED, BP)
- Registries

This folder outranks all others.

---

### **90_PLATFORM_RUNTIME/**
**Purpose:** Executable platform code only.

Includes:
- Server code
- Runtime configuration
- Dependency manifests
- Hosting / Replit artifacts

No governance or pillar documentation lives here.

---

### **95_SHARED_PLATFORM/**
**Purpose:** Cross-pillar, non-governing support assets.

Includes:
- Stack & integration documentation
- Internal Prompt Library
- Sales and positioning assets
- Style and standards references

Nothing here executes or governs.

---

## Legacy & Archive Handling (Documented Exception)

### **LEGACY_INBOX/**
**Purpose:** Temporary holding location for legacy or pre-governance files.

**Important:**
- This folder exists at the repository root by exception
- It serves the same function as `99_ARCHIVE/LEGACY_PENDING_REVIEW`
- Items here are **non-governing**
- Files must be reviewed, migrated, or archived intentionally

This exception is documented to reduce rework and does not alter governance rules.

---

### **99_ARCHIVE/**
**Purpose:** Deprecated, superseded, or retired materials.

Rules:
- Nothing here governs active systems
- Archived items must be clearly marked
- No active system may reference archived content

---

## How to Navigate This Repository

### New to DGA?
Start with:
1. `00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md`
2. `00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md`
3. Review the five pillars in order (P1 → P5)

---

### Working on Systems or Automations?
Navigate to the **pillar that owns the behavior**, then:
- `EXECUTION_DOCTRINES/`
- `SYSTEMS/`
- `AUTOMATIONS/`

---

### Writing or Updating Docs?
- Governance → `00_FOUNDATIONS`
- Pillar-specific behavior → owning pillar folder
- Cross-pillar assets → `95_SHARED_PLATFORM`
- Unclassified or legacy items → `LEGACY_INBOX` or `99_ARCHIVE`

---

## Versioning & Change Discipline

This repository enforces:
- Versioned governing documents
- Pillar ownership enforcement
- No silent changes
- Governance before implementation

---

## Maintainer

**Steve Dainard**  
Founder & Architect — Digital Growth Accelerator

---

*DGA is intentionally constrained so it remains valuable.  
Systems outperform tactics. Governance protects trust.*
