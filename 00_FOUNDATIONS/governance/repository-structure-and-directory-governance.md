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

