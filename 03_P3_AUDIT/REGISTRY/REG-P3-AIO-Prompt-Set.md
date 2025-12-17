# AIO Prompt Set

Canonical registry of all AI Answer Optimization (AIO) prompts used by the P3 Audit pillar.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P3 — Audit  
**Filename:** REG–P3–AIO_PROMPT_SET.md  

**Version:** v1.1  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  
**Last Updated:** 2025-12-17  

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
- `{{ACCOUNT_HOLDER_NAME}}` — Used **only** in AIO-G01  

No additional variables are permitted.

---

## 3. Prompt Classes & Execution Rules (Non-Negotiable)

### 3.1 AIO Selection Prompts

- **Exactly six (6)** AIO selection prompts exist  
- Identified as **AIO-01 through AIO-06**  
- Executed **first**, as a group  
- Used only to observe:
  - AI selection behavior
  - trust and credibility signals
  - framing sensitivity
  - reputation weighting  

**Account-holder identity MUST NOT appear** in any selection prompt.

---

### 3.2 AIO Grounding / Bias-Control Prompt

- **Exactly one (1)** grounding prompt exists  
- Identified as **AIO-G01**  
- Executed **only after** AIO-01 through AIO-06  
- Executed **in isolation**, never combined with selection prompts  

AIO-G01:
- confirms entity grounding
- detects hallucination vs real knowledge
- explains selection or non-selection
- provides diagnostic context only

AIO-G01:
- is **not scored**
- MUST NOT influence selection evidence
- MUST NOT be executed before or alongside AIO-01–AIO-06

---

## 4. Canonical AIO Prompt Definitions

---

### AIO-01 — Best-in-Niche (Direct)

**Purpose:**  
Stress-test direct AI recommendation behavior.

**Prompt:**

Who is the best {{PROFESSION}} for {{NICHE}} in {{MARKET}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### AIO-02 — Best-in-Niche (Alternate Framing)

**Purpose:**  
Detect prompt framing sensitivity and bias.

**Prompt:**

Who is a leading {{PROFESSION}} specializing in {{NICHE}} in {{MARKET}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### AIO-03 — Local Niche Expert

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

### AIO-04 — Highly Recommended

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

### AIO-05 — Most Trusted / Reviews-Oriented

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

### AIO-06 — Review-Specific Trigger

**Purpose:**  
Test whether reviews alone can trigger selection.

**Prompt:**

Which {{MARKET}} {{PROFESSION}} is known for great reviews related to {{NICHE}}?

Please provide results in two clearly separated sections:  
1) **Individual professionals**  
2) **Organizations or firms**

If only one category meaningfully exists, state that explicitly.

---

### AIO-G01 — Entity Grounding / Bias Control

**Purpose:**  
Confirm entity grounding and explain selection outcomes.

**Prompt:**

What can you tell me about {{ACCOUNT_HOLDER_NAME}}, a {{PROFESSION}} in {{MARKET}} specializing in {{NICHE}}?

**Execution Rules:**  
- Executed **only after** AIO-01 through AIO-06  
- Executed **separately** to eliminate AI bias  
- Not scored  
- Used for grounding, bias detection, and explanation only  

---

## 5. Registry Rules (Non-Negotiable)

- Prompt identifiers are immutable  
- Prompt text must not be paraphrased by systems  
- No additional AIO prompts may be introduced without ED revision  
- Prompt sequencing and isolation are enforced by ED–P3–AIO_PROMPT_INVARIANTS  
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
