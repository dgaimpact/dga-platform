# StackAI Prompt Library  
### _Version-controlled prompt ecosystem for the DGA Platform_

---

## 📌 Purpose

The StackAI Prompt Library is the **single source of truth** for all prompts used across the Digital Growth Accelerator (DGA) ecosystem.

Every prompt in this library is:

- Aligned with DGA **Standards** (Output, Tone, GEO/AI, Instruction, Construction, Audit Evidence)
- Naming-compliant according to the **GNF Framework**
- Fully validated via **Standards Cross-Check** and **QA tools**
- Structured for **Machine Readability** and future StackAI ingestion
- Integrated with DGA **Systems**, **Workflows**, and **Platforms**
- Version-controlled for auditability, transparency, and continuous improvement

This library ensures consistent behavior, predictable output, and complete traceability across all DGA systems and automations.

---

# 📁 Library Structure

The StackAI Prompt Library is organized according to the GNF Category & ID Framework.

Each prompt follows this naming pattern:

**`<CategoryPrefix>-<ThreeDigitID> – <Descriptive Name>`**

Examples:
- `Standards-601 – Output Format Standard`
- `System-801 – GEO/AI Visibility Audit System`
- `Workflow-901 – Playbook Assembly Workflow`  
- `Audit-401 – Competitor Visibility Comparison`

---

## 🧩 Categories & ID Bands

| Category | Prefix | ID Band | Description |
|---------|--------|---------|-------------|
| **Standards** | `Standards-` | 6xx | Foundational output, tone, GEO/AI, instruction, construction, and audit evidence standards |
| **Systems** | `System-` | 8xx | High-level engine architectures (Audit Engine, Playbook Engine, CRM Engine, Content Engine) |
| **Workflows** | `Workflow-` | 9xx | End-to-end execution flows tied to Systems |
| **Platforms** | `Platform-` | 7xx | Tool-specific instruction generators (Notion, Google Drive, GitHub, n8n, Telegram, etc.) |
| **Content** | `Content-` | 3xx | Templates and function prompts for content creation and OCGF assets |
| **Personas** | `Persona-` | 1xx | Persona identification, classification, and mapping tools |
| **Niches** | `Niche-` | 2xx | Niche identification, classification, and expansion tools |
| **Audits** | `Audit-` | 4xx | GEO/AI visibility, niche, persona, content, and entity audits |
| **Other** | `Other-` | 9xx | Validators, QA tools, formatting utilities, and helper prompts |

---

# 🏛️ Standards → Systems → Workflows Architecture

This library follows a strict hierarchy for clarity and maintainability:

### **1. Standards (6xx)**  
Define **how every prompt must behave** across the entire DGA ecosystem.

These govern:
- Output format  
- Tone & style  
- GEO/AI semantics  
- Instruction safety  
- Prompt construction rules  
- Audit evidence requirements  

Standards never depend on Systems or Workflows.

---

### **2. Systems (8xx)**  
Define **what** the major engines do.

Examples:
- GEO/AI Audit System  
- Brand Voice Interview System  
- Playbook System  
- Lead Intake & CRM System  
- Content Engine System  

Systems depend on Standards, not on Workflows.

---

### **3. Workflows (9xx)**  
Define **how** Systems are executed step-by-step.

Examples:
- GEO/AI Visibility Audit Workflow  
- Brand Voice Interview & Blueprint Workflow  
- Playbook Assembly Workflow  
- CRM Intake Processing Workflow  
- Content Engine Omni-Channel Workflow  

Workflows depend on Systems (and therefore indirectly use Standards).

---

# 🔧 Platform Integration Prompts (7xx)

Prompts in the `Platform-7xx` band provide instructions, payloads, and structure for:

- Notion  
- Google Drive  
- Google Docs / Sheets  
- Google Calendar  
- Gmail  
- Telegram bots  
- GitHub  
- n8n automations  

These tools enable direct operational use in automations and future StackAI API interactions.

---

# 🗂️ Folder Layout (Future-State)

The following subfolders are recommended as the library scales:

```
08_STACKAI_PROMPT_LIBRARY/
│
├── standards/
│     ├── Standards-601-output-format-standard.md
│     ├── Standards-602-tone-voice-style-standard.md
│     └── ...
│
├── systems/
├── workflows/
├── platforms/
├── audits/
├── content/
├── personas/
├── niches/
├── other/
│
├── index.md                 ← Auto-generated cross-reference
└── README.md                ← (this file)
```

You may populate these gradually (recommended) or all at once (not required).

---

# 🧪 Validation & Compliance

Each prompt includes:

- **Requires Standards Cross-Check** (`YES` or `NO`)
- **Standards Validation** (`YES` or `NO`)
- Compliance with:
  - Output Format Standard
  - Tone, Voice & Style Standard
  - GEO/AI-Visibility Standard
  - Instruction Protocol Standard
  - Prompt Construction Standard
  - Audit Evidence Standard

DGA QA tools (Other-903, Other-904, Other-908, etc.) ensure automatic detection of:

- Naming violations  
- Missing fields  
- Standards mismatches  
- Structural errors  
- Prompt drift  

---

# 🔄 Versioning & Governance

This library follows strict version-control rules:

- **GNF naming stability** — IDs never change once assigned.
- **Semantic content versioning** — changes documented in commit logs.
- **Standards-first updates** — no prompt can violate 601→607.
- **No duplication** — prompts evolve, they are not forked.
- **Machine readability** — written for future StackAI ingestion.

A full governance SOP lives in:

```
02_OPERATIONS/notion-github-sync-sop.md
```

---

# 🚀 Roadmap (Coming Soon)

- Automated index generation (`index.md`)
- Full folder population for each category
- Prompt-level version metadata
- StackAI API-approved prompt schema
- Integration with Notion Sync Pipeline
- Mermaid diagrams showing Standards → Systems → Workflows flow
- Prompt coverage heatmaps for QA

---

# 👤 Maintainer

**Steve Dainard**  
Architect & Founder – Digital Growth Accelerator (DGA)

This library is continuously evolving as DGA expands into deeper automation, specialization, and AI-driven execution.

