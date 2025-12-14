# StackAI Prompt Library — Category Definitions  
### _GNF Category Architecture, Naming Rules, and ID Bands_

---

## 📌 Purpose of This Document
This file defines the **official category architecture**, **naming conventions**, and **ID band rules** for all prompts inside the StackAI Prompt Library.

It exists to ensure:

- Consistent naming  
- Clear category boundaries  
- Predictable ID assignment  
- Stable system behavior  
- Machine-readability for future StackAI ingestion  
- Seamless Systems → Workflows → Platforms interoperability  

This is the **authoritative reference** for how the prompt library is organized.

---

# 🧩 Category Overview

Each prompt belongs to exactly one category.  
Each category uses a **prefix + three-digit ID band** (GNF Format).

| Category | Prefix | ID Band | Description |
|---------|--------|---------|-------------|
| **Standards** | `Standards-` | 6xx | Core rules that govern all prompt behavior |
| **Systems** | `System-` | 8xx | High-level engines (Audit Engine, Playbook Engine, Content Engine, CRM Engine) |
| **Workflows** | `Workflow-` | 9xx | End-to-end execution sequences tied to Systems |
| **Platforms** | `Platform-` | 7xx | Prompts for Notion, Google Drive, Gmail, GitHub, Telegram, n8n |
| **Content** | `Content-` | 3xx | Content generators, templates, OCGF outputs |
| **Personas** | `Persona-` | 1xx | Persona tools, classifications, and mapping |
| **Niches** | `Niche-` | 2xx | Niche identification, specialization, expansion |
| **Audits** | `Audit-` | 4xx | GEO/AI audits, visibility scans, niche/persona audits |
| **Other** | `Other-` | 9xx | Validators, formatting helpers, QA tools |

---

# 🔠 Naming Convention (GNF Standard)

Every prompt follows this structure:

```
<CategoryPrefix>-<ThreeDigitID> – <Descriptive Name>
```

### Examples
```
Standards-601 – Output Format Standard
Platform-708 – Google Drive Folder & Asset Generator
System-803 – Playbook System
Workflow-905 – Content Engine Omni-Channel Workflow
Persona-110 – PERS-10 Persona Generator
```

### Rules
- IDs are **never changed** once assigned.  
- Names use an **em dash** (—), not a hyphen (-).  
- Descriptions must start with **Title Case**.  
- IDs within each band may be sparse, but never reused.  
- A prompt cannot exist in two categories.  

---

# 🏛️ Standards Category (6xx)

Standards define **how every prompt must behave** across the DGA ecosystem.

### Bands
- **Standards-601 → 607** are reserved and active.  
- Future standards: **608+** (not yet in use).

### Purpose
- Enforce tone, output, safety, and instruction quality  
- Ensure machine-readability  
- Provide compliance for Systems, Workflows, and Platforms  
- Govern prompt generation and validation  

### Dependency Rules
- Standards never depend on Systems or Workflows.  
- All other categories may depend on Standards.

---

# 🧱 Systems Category (8xx)

Systems define **what** each major engine does.

### Active Systems
- System-801 → 805  
(Five system engines completed)

### Purpose
- High-level architecture for:  
  - Audit Engine  
  - Playbook Engine  
  - Content Engine  
  - CRM & Intake Engine  
  - Brand Voice Engine  
- Provide structure for Workflows  
- Enforce Standards compliance  

### Dependency Rules
- Systems **must** depend on Standards  
- Systems **must not** depend on Workflows  
- Systems **must not** depend on Platforms

---

# 🔁 Workflows Category (9xx)

Workflows define **how** Systems operate step-by-step.

### Active Workflows
- Workflow-901 → 905  

### Purpose
- Execute Systems end-to-end  
- Provide instructions, routing, sequencing  
- Define inputs, outputs, QA gates

### Dependency Rules
- Workflows **must depend** on a System  
- Workflows **must comply** with all Standards  
- Workflows **must not** depend on Platforms

---

# 🧰 Platforms Category (7xx)

Prompts that generate **tool-specific** structures or instructions.

### Tools Covered
- Notion  
- Google Drive  
- Google Docs / Sheets  
- Gmail  
- Google Calendar  
- GitHub  
- Telegram Bot API  
- n8n workflows and payloads  

### Dependency Rules
- Platforms **may reference Standards**  
- Platforms **must not depend** on Systems or Workflows  
- Platforms are **utility-layer prompts only**

---

# ✍️ Content Category (3xx)

Content-producing prompts:  
- Scripts  
- OCGF assets  
- Topic generation  
- Short-form / long-form content  
- Derivative content patterns  

### Dependency Rules
- Content prompts may cite Standards  
- Must not depend on Systems or Workflows  

---

# 🧍 Personas Category (1xx)

Tools for identifying or producing persona-aligned content.

Includes:
- Classification tools  
- Persona synthesis  
- Persona mapping to niches, content, or audits  

### Dependency Rules
- May reference Standards  
- No dependency on Systems or Workflows  

---

# 🗺️ Niches Category (2xx)

Tools for niche classification, expansion, or mapping.

Used heavily in:
- Audit Engine  
- Content Engine  
- Persona → Niche routing  
- Entity-building  

### Dependency Rules
- May reference Standards  
- Must remain independent of Systems and Workflows  

---

# 🔍 Audits Category (4xx)

Tools for:
- GEO/AI visibility  
- Niche positioning  
- Persona alignment  
- Content diagnostics  
- Competitive scanning  
- Entity integrity  

### Dependency Rules
- Audits may reference Standards  
- Must not depend on Systems or Workflows  

---

# 🧪 Other Category (9xx)

This is the **Utility / QA / Validator** category.

Examples:
- Formatting validators  
- Naming compliance checks  
- JSON-safe wrappers  
- Prompt transformers  
- Standards validation tools  

### Dependency Rules
- May reference Standards  
- Must not depend on Systems or Workflows  

---

# 🔄 Cross-Category Dependency Rules

### Allowed
- Systems → Standards  
- Workflows → Systems (+ Standards)  
- Platforms → Standards  
- Audits/Content/Personas/Niches → Standards  

### Not Allowed
- Standards → Anything  
- Systems → Workflows  
- Workflows → Platforms  
- Platforms → Systems/Workflows  
- Other → Systems/Workflows  

---

# 🧪 Standards Cross-Check Requirements

For any prompt with:

```
Requires Standards Cross-Check = YES
```

Its **Prompt Content must reference at least one** of:

- Output Format Standard  
- Tone, Voice & Style Standard  
- GEO/AI Visibility Standard  
- Instruction Protocol Standard  
- Prompt Construction Standard  
- Audit Evidence Standard  

---

# 🧭 Summary

This document defines:

- DGA’s entire prompt taxonomy  
- Naming conventions  
- Category boundaries  
- ID bands  
- Dependency rules  
- Standards compliance rules  

It is the **canonical reference** for validating any prompt in the StackAI Prompt Library.

---

# 🔗 Related Documents

- `README.md` (root of 08_STACKAI_PROMPT_LIBRARY)  
- `index.md` (auto-generated cross-reference — coming soon)  
- Standards 601–607  
- Systems 801–805  
- Workflows 901–905  
