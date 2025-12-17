# AIO Prompt Set

Canonical registry of all AI Answer Optimization (AIO) prompts used by the P3 Audit pillar.

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
- must not be modified without Execution Doctrine revision  

If a prompt exists outside this Registry, **it does not exist**.

---

## 2. Canonical Variables (Locked)

All prompts may use **only** the following variables:

- `{{MARKET}}` — Declared market or territory  
- `{{NICHE}}` — Declared specialization or context  
- `{{PROFESSION}}` — Industry role (system-injected, role-equivalent)  
- `{{ACCOUNT_HOLDER_NAME}}` — Used **only** in P7  

No additional variables are permitted.

---

## 3. Prompt Set Overview

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

### P1 — Best-in-Niche (Direct)

**Purpose:**  
Stress-test direct AI recommendation behavior.

**Prompt:**

Who is the best {{PROFESSION}} for {{NICHE}} in {{MARKET}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### P2 — Best-in-Niche (Alternate Framing)

**Purpose:**  
Detect prompt framing sensitivity and bias.

**Prompt:**

Who is a leading {{PROFESSION}} specializing in {{NICHE}} in {{MARKET}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### P3 — Local Niche Expert

**Purpose:**  
Observe perceived expertise signals.

**Prompt:**

Someone in {{MARKET}} looking for deep expertise related to {{NICHE}} asks:

Which {{MARKET}} {{PROFESSION}} is considered an expert in {{NICHE}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### P4 — Highly Recommended

**Purpose:**  
Probe trust and recommendation signals.

**Prompt:**

Someone seeking a trusted recommendation in {{MARKET}} for {{NICHE}} asks:

Name a highly recommended {{MARKET}} {{PROFESSION}} for {{NICHE}}.

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### P5 — Most Trusted / Reviews-Oriented

**Purpose:**  
Surface reputation- and review-weighted selection.

**Prompt:**

Someone comparing options in {{MARKET}} based on reputation and reviews related to {{NICHE}} asks:

Who are the most trusted {{PROFESSION}}s for {{NICHE}} in {{MARKET}}?

Please consider reputation, reviews, and credibility.

Provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### P6 — Review-Specific Trigger

**Purpose:**  
Test whether reviews alone can trigger selection.

**Prompt:**

Which {{MARKET}} {{PROFESSION}} is known for great reviews related to {{NICHE}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### P7 — Entity Grounding / Bias Control

**Purpose:**  
Confirm entity grounding and explain selection outcomes.

**Prompt:**

What can you tell me about {{ACCOUNT_HOLDER_NAME}}, a {{PROFESSION}} in {{MARKET}} specializing in {{NICHE}}?

**Rules:**
- Executed only after P1–P6  
- Not scored  
- Used for grounding, bias detection, and explanation only  

---

## 5. Registry Rules (Non-Negotiable)

- Prompt IDs are immutable  
- Prompt text must not be paraphrased by systems  
- No additional prompts may be introduced without ED revision  
- Prompt sequencing is enforced by ED–P3–AIO_PROMPT_INVARIANTS  
- This Registry may be referenced but not overridden  

---

## 6. Change Control

Any change requires:
- Execution Doctrine update  
- Version increment  
- Documented rationale  
- Governance approval  

---

END — REG–P3–AIO Prompt Set
