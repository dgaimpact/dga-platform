# AIO Prompt Set

**Canonical Registry of all AI Answer Optimization (AIO) prompts used by the P3 Audit pillar**

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P3 — Audit  
**Filename:** REG–P3–AIO_PROMPT_SET.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Consumed By:**  
- Replit AI-Agent (Audit Execution)  
- P3 Audit Orchestration Logic  
- AIO Evidence Extraction Layer  

**Governing Authority:**  
- ED–P3–AIO_PROMPT_INVARIANTS.md  
- BP–P3–OMNI-PRESENCE BLUEPRINT.md  

---

## 1. Authority & Scope

This Registry defines the **exact, canonical AIO prompt set** used for AI visibility observation within the P3 Audit pillar.

This Registry:
- is authoritative
- is non-executing
- contains no scoring logic
- must not be modified without doctrine revision

If a prompt exists outside this Registry, **it does not exist**.

---

## 2. Variable Definitions (Canonical)

All prompts may use only the following variables:

- `{{MARKET}}` — Declared market or territory
- `{{NICHE}}` — Declared specialization or context
- `{{PROFESSION}}` — Industry role (system-injected)
- `{{ACCOUNT_HOLDER_NAME}}` — Used **only** in Prompt P7

No additional variables are permitted.

---

## 3. Prompt Set Overview (Locked)

| Prompt ID | Prompt Name | Prompt Class |
|---------|-------------|--------------|
| P1 | Best-in-Niche (Direct) | Selection |
| P2 | Best-in-Niche (Alternate Framing) | Selection |
| P3 | Local Niche Expert | Selection |
| P4 | Highly Recommended | Selection |
| P5 | Most Trusted / Reviews-Oriented | Selection |
| P6 | Review-Specific Trigger | Selection |
| P7 | Entity Grounding / Bias Control | Grounding |

---

## 4. Canonical Prompt Definitions

---

### **P1 — Best-in-Niche (Direct)**

**Purpose:**  
Stress-test direct AI recommendation behavior.

**Prompt:**
