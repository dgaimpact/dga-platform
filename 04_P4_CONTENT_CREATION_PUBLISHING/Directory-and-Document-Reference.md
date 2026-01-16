# Directory & Document Reference

Version: v1.0  
Created: 2026-01-16  
Status: Canonical Reference  
Primary Pillar: P4 — Content Creation & Publishing  
Owned By: DGA Core Platform

---

## 1. Purpose

This document defines the **folder structure and canonical documents** for P4.  
It serves as the **single source of reference** for artifact generation, workflow, cadence, and platform-specific guidance.

---

## 2. Directory Structure

04_P4_CONTENT_CREATION_PUBLISHING/
├── BLUEPRINTS/
│   └── BP–P4–Scope & Exclusions.md
├── EXECUTION_DOCTRINES/
│   └── ED–P4–CORE.md
├── SYSTEMS/
│   └── [Logical system diagrams, R-Agent integration specs]
├── AUTOMATIONS/
│   └── [Publishing automation workflows]
├── CONTENT_LIBRARY/
│   └── [Canonical artifact templates (empty placeholder; generation occurs via R-Agent)]
├── ASSETS/
│   └── [Reference materials, example VBP mappings, internal notes]
├── GUIDES/
│   └── GUIDE–P4–Execution Playbook & Artifact Templates.md
│   └── GUIDE–P4–Artifact Formatting & Platform Templates.md
├── DELIVERY/
│   └── BP–P4–Delivery Workflow & Cadence.md
└── README.md

---

## 3. Document Roles & Cross-References

- **BP–P4–Scope & Exclusions** → defines what P4 may and may not do  
- **ED–P4–CORE** → enforces all scope, exclusions, and traceability rules  
- **REG–P4–ArtifactCategories** → provides the fixed artifact categories mapping  
- **GUIDE documents** → operational guidance for artifact generation and platform formatting  
- **Delivery Workflow** → governs cadence, execution window, retries, and freezes  

All ED, BP, REG, and GUIDE documents are **mutually referential**.  
R-Agent consumes ED, REG, and GUIDEs to generate compliant artifacts.

---

## 4. Governance Notes

- No artifacts may be generated outside of ED enforcement  
- All documents must be versioned and approved prior to use  
- Any change to one document must be reflected in cross-references  
- GitHub folder serves as **canonical reference** for P4 content operations

---

## 5. Key Principle

> **P4 documents and folder structure ensure governance, traceability, and consistent execution of all content artifacts.**  

All R-Agent and system references must adhere to this structure.

---

END — 04_P4_CONTENT_CREATION_PUBLISHING — Directory & Document Reference
