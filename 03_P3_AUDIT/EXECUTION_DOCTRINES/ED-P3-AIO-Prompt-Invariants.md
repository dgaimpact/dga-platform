# AIO Prompt Invariants

**Short Descriptor:**  
Binding execution rules governing all AI Answer Optimization (AIO) prompt construction, sequencing, and interpretation within the P3 Audit pillar.

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)  
**Primary Pillar:** P3 — Audit  
**Filename:** ED–P3–AIO_PROMPT_INVARIANTS.md  

**Version:** v1.0  
**Status:** Binding (Active)  
**Created:** 2025-12-17  

**Applies To:**  
- Replit AI-Agent (Audit Execution)  
- AIO Prompt Registry  
- P3 Audit Orchestration Logic  

**Governing Authority:**  
- 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md  
- 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md  

**Governed By:**  
- BP–P3–OMNI-PRESENCE BLUEPRINT.md  

---

## 1. Authority & Scope

This Execution Doctrine defines **non-negotiable invariants** governing the design, execution, and interpretation of **all AIO prompts** used within the P3 Audit pillar.

This document exists to:
- prevent prompt drift
- eliminate role and title bias
- enforce audit neutrality
- preserve cross-profession universality
- protect bias-control mechanisms

If any system behavior, prompt text, or agent logic conflicts with this document, **the system is wrong**.

---

## 2. AIO Prompt Set Structure (Locked)

### 2.1 Selection / Recommendation Prompts

- Exactly **six (6)** AIO selection prompts exist
- These prompts are executed **first**
- They are used to observe:
  - AI selection behavior
  - trust and credibility signals
  - framing sensitivity
  - reputation weighting

**Account holder name MUST NOT appear** in any selection prompt.

---

### 2.2 Entity Grounding Prompt

- Exactly **one (1)** entity grounding prompt exists
- This prompt is executed **after** all six selection prompts
- It **MUST** include:
  - `{{ACCOUNT_HOLDER_NAME}}`
  - `{{MARKET}}`
  - `{{NICHE}}`
  - `{{PROFESSION}}`

This prompt exists solely for:
- entity grounding confirmation
- hallucination detection
- bias explanation
- diagnostic context

The entity grounding prompt:
- is **not scored**
- does **not** influence selection outcomes
- must **never** be blended with selection prompts

---

## 3. Universality Rule (Non-Negotiable)

All AIO prompts are **universal by design**.

- A single canonical prompt set applies across **all professions**
- No prompt may be hard-coded to a specific profession (e.g., REALTOR®, Mortgage Broker)
- All professional context must be injected via system variables

Allowed variables:
- `{{MARKET}}`
- `{{NICHE}}`
- `{{PROFESSION}}`
- `{{ACCOUNT_HOLDER_NAME}}` (entity prompt only)

---

## 4. Profession Handling & Title Equivalence

### 4.1 Profession as Role (Not Title)

The `{{PROFESSION}}` variable represents an **industry role**, not a licensed or branded title.

The system MUST treat functionally equivalent professional titles as the same role during interpretation.

Examples (non-exhaustive):
- Mortgage Broker ↔ Mortgage Agent (all license levels)
- Realtor ↔ Salesperson ↔ Sales Representative ↔ Broker

---

### 4.2 Title Equivalence Handling (System-Level)

- Title equivalence logic MUST be handled by the AI-Agent or upstream profile metadata
- Title variant lists MUST NOT appear in prompt text
- The AI-Agent MUST NOT exclude valid entities due to title variation alone

---

## 5. Individuals vs Organizations (Separation Rule)

All six selection prompts MUST request **explicit separation** between:

1. **Individual professionals**
2. **Organizations / firms**

Prompts MUST NOT:
- prioritize one category over the other
- suppress a category
- force individual-only results

If one category does not meaningfully exist in a market or niche, the AI-Agent should reflect this explicitly.

---

## 6. Scenario Anchoring (Constrained Allowance)

Scenario-based contextual framing is **permitted but constrained**.

### 6.1 Allowed Usage
- Scenario anchoring may be applied **only** to selection prompts **P3–P5**
- Anchoring must:
  - be prefix-only
  - remain profession-neutral
  - avoid outcome guarantees or ranking promises

### 6.2 Prohibited Usage
Scenario anchoring is **not permitted** for:
- P1 — Best-in-Niche (Direct)
- P2 — Best-in-Niche (Alternate Framing)
- P6 — Review-Specific Trigger
- P7 — Entity Grounding Prompt

---

## 7. Bias Control & Sequencing Rules

- Selection prompts MUST execute before the entity grounding prompt
- Account-holder identity MUST NOT be known to the AI during selection probing
- No prompt may imply preference, endorsement, or guaranteed recommendation
- Outputs are observational inputs only; scoring occurs downstream

---

## 8. Prohibited Behaviors

The system MUST NEVER:
- merge individuals and organizations into a single list
- infer profession equivalence from prompt text
- modify prompt intent dynamically
- introduce new AIO prompts without doctrine revision
- reuse entity prompt outputs as selection evidence

---

## 9. Change Control

Changes to this Execution Doctrine require:
- Blueprint compatibility review
- version increment
- documented rationale
- explicit approval

Silent changes are prohibited.

---

**END — ED–P3–AIO Prompt Invariants**
