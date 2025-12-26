# DELTA EVALUATION  
P3 Audit Delta Evaluation Blueprint

---

## DOCUMENT METADATA

**Document Type:** Blueprint (BP)  
**Pillar:** P3 — Audit  
**Blueprint Title:** P3 Delta Evaluation  
**Filename:** BP_P3_DELTA_EVALUATION.md  

**Version:** v1.0  
**Status:** ACTIVE  
**Created:** 2025-12-26  
**Last Updated:** 2025-12-26  

**Canonical GitHub Location:**  
/dga-platform/03_P3_AUDIT/BLUEPRINTS/BP_P3_DELTA_EVALUATION.md  

**Consumes (Authoritative Inputs):**
- /dga-platform/03_P3_AUDIT/REGISTRIES/GD_P3_SCORING_BLUEPRINT_GEO_AIO.md
- /dga-platform/03_P3_AUDIT/REGISTRIES/REG_P3_SCORING_SUBSIGNAL_ENUMS.md
- P3 Audit Execution Records (prior authoritative audit)

**Produces (Authoritative Outputs):**
- Factor-level delta calculations
- Subsignal-level delta attribution
- Human-readable delta explanations
- Delta-qualified audit artifact (2-page)

**Non-Goals (Explicit):**
- This BP does not change scoring logic
- This BP does not authorize new data collection
- This BP does not define content publishing actions
- This BP does not override baseline persistence rules

---

## 1. Purpose

This Blueprint defines how **changes between P3 audits** are evaluated, calculated, and explained.

It governs:
- what qualifies as a delta
- how deltas are computed
- how subsignal changes are attributed
- how improvements vs regressions are explained
- how deltas are presented to subscribers

This BP ensures deltas are:
- deterministic
- monotonic
- explainable
- non-punitive
- governance-safe

---

## 2. Definitions

**Baseline Audit:**  
The most recent authoritative audit used for comparison.

**Current Audit:**  
The audit being evaluated for change.

**Delta:**  
The numerical difference between baseline and current scores.

**Driver Subsignal:**  
A subsignal whose state or score changed and caused a factor delta.

---

## 3. Eligibility for Delta Evaluation

Delta evaluation MAY occur only when:

- mode = DELTA
- a prior authoritative audit exists
- both baseline and current audits are COMPLETED
- both audits reference the same scoring registry version

If any condition fails:
- DELTA evaluation MUST be skipped
- Audit output MUST indicate “Delta unavailable”

---

## 4. Delta Computation Rules

### 4.1 Domain-Level Deltas

Compute:

- GEO_delta = GEO_current − GEO_baseline
- AIO_delta = AIO_current − AIO_baseline
- P3_delta = P3_current − P3_baseline

Rules:
- Use **display scores (1 decimal)** for reporting
- Internal precision MAY be stored but not shown
- Negative deltas MUST be allowed but explained

---

### 4.2 Factor-Level Deltas

For each factor:

factor_delta = factor_current − factor_baseline

Rules:
- If factor not present in baseline → delta = null
- If factor max unchanged → direct subtraction
- If factor definition changed → delta MUST be suppressed

---

### 4.3 Subsignal-Level Attribution (Required)

For every non-zero factor delta:

- Identify all subsignals where:
  - state changed OR
  - score_internal changed
- These subsignals are the **only valid delta drivers**

No inferred drivers are permitted.

---

## 5. Delta Direction Classification

Each delta MUST be classified as one of:

- IMPROVED (delta > 0)
- UNCHANGED (delta = 0)
- REGRESSED (delta < 0)

Classification applies at:
- domain level
- factor level

---

## 6. Delta Explanation Rules

### 6.1 Required Explanation Components

Every factor with a delta MUST include:

- Factor name
- Direction (IMPROVED / REGRESSED)
- Magnitude (+0.3, −0.5, etc.)
- List of driver subsignals
- Plain-language explanation tied to evidence

### 6.2 Language Constraints

Explanations MUST:
- reference observable changes only
- avoid promises or rankings
- avoid future tense guarantees
- avoid blame language

Examples:
- “Improved due to Authority Hub becoming publicly available”
- “Unchanged because no new review activity was observed”

---

## 7. Handling Negative Deltas

Negative deltas are allowed and expected.

Rules:
- No punitive framing
- Must explain what changed or disappeared
- Must not imply fault or failure

Common causes:
- removed URLs
- broken links
- profile deactivation
- loss of Trust Network signal

---

## 8. Presentation in Audit Artifact

### 8.1 Page 1 — Delta Summary Overlay

When mode = DELTA:

- Show current scores
- Show delta indicators (↑ ↓ —)
- Include GEO_delta, AIO_delta, P3_delta

### 8.2 Page 2 — Delta Drivers

Replace generic action plan with:

- Factor-by-factor delta explanations
- Highlight positive movement first
- Clearly separate improvements from regressions

---

## 9. Persistence Rules

- DELTA audits MUST NOT overwrite baselines
- DELTA audits MUST reference baseline_execution_id
- Delta records MUST be immutable once stored

---

## 10. Governance & Versioning

If:
- scoring registry version changes
- subsignal enum set changes

Then:
- DELTA evaluation MUST be disabled across versions
- Audit output MUST state “Delta unavailable due to scoring model change”

This preserves audit integrity.

---

## 11. Lock Statement

> This Blueprint is authoritative. Any delta calculation, explanation, or presentation that conflicts with this document is non-compliant.

---

END — BP_P3_DELTA_EVALUATION
