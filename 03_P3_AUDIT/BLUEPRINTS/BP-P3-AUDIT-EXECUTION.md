# AUDIT_EXECUTION  
> **Subtitle:** Defines the authoritative execution flow, gating, modes, persistence rules, and audit outputs for the P3 Audit Runner, while delegating all scoring logic to the P3 Scoring Registry (REG).

---

## DOCUMENT METADATA

**Document Type:** Blueprint (BP)  
**Pillar:** P3 — Audit  
**Blueprint Title:** P3 Audit Execution  
**Filename:** BP_P3_AUDIT_EXECUTION.md  

**Version:** v1.0  
**Status:** Active  
**Created:** 2025-12-26  
**Last Updated:** 2025-12-26  

**Canonical GitHub Location:**  
/dga-platform/03_P3_AUDIT/BLUEPRINTS/BP_P3_AUDIT_EXECUTION.md  

**Consumes (Authoritative Inputs):**
- /dga-platform/03_P3_AUDIT/REGISTRIES/REG-P3-SCORING-GEO-AIO.md

**Produces (Authoritative Outputs):**
- P3 Audit Output (2-page rendered artifact) for DAY-00, SNAPSHOT, DELTA, ADHOC
- Audit execution records (status, timestamps, mode, score payloads, opportunity payloads)

**Non-Goals (Explicit):**
- This BP does not define scoring weights, scoring thresholds, or factor interpretation.
- This BP does not authorize scraping, discovery, enrichment, or external crawling.
- This BP does not define P4 content deployment, publication workflows, or P5 continuity workflows.

---

## 1. Purpose

This Blueprint defines the binding execution standard for the P3 Audit Runner. It governs:

- execution eligibility and gate logic
- supported modes and mode behavior
- deterministic sequence of steps
- output structure requirements
- persistence and overwrite rules
- audit classification and status codes
- separation of concerns between execution and scoring

All scoring rules are governed by REG-P3-SCORING-GEO-AIO.md. This BP only defines how scoring is executed and assembled into an audit artifact.

---

## 2. Scope & System Boundaries

### 2.1 In Scope
- Running P3 audits for eligible accounts
- Producing a consistent 2-page audit artifact
- Computing subtotals and totals from registry-governed factor scores
- Selecting exactly three opportunities derived from scored gaps
- Persisting authoritative audit runs (as defined by mode)

### 2.2 Out of Scope
- Changing account data during audit execution (no writes to account profile fields)
- Enrichment/discovery of new signals via scraping or external automation
- P4 publishing, Authority Hub build pipelines, or content production workflows
- P5 relationship continuity, outreach, UTM reporting, or attribution dashboards
- Any claims of ranking outcomes, lead generation, or performance guarantees

---

## 3. Definitions

**Audit Runner:** The system component that executes P3 audits and produces an audit artifact.  
**Gate:** Deterministic pre-checks that determine whether an audit can proceed to scoring.  
**Mode:** An execution classification that controls persistence and comparison behavior.  
**Authoritative Audit:** An audit run that establishes or updates the baseline used for comparisons (per mode rules).  
**Registry (REG):** Canonical scoring definition document consumed by the Audit Runner to assign scores and templates.  
**Blocked Audit:** A run where gate conditions fail; scoring is not executed; a 2-page blocked artifact is still produced.

---

## 4. Actors & Responsibilities

### 4.1 System Actors
- **Admin Operator:** Initiates audits (manual runs, testing, QA).
- **Automation Scheduler:** Initiates audits on cadence (future capability; must still obey modes and gates).
- **P3 Audit Runner:** Executes gate, scoring, output assembly, persistence.
- **Scoring Registry (REG):** Provides factor definitions, max points, sub-signal structure, and marking examples.

### 4.2 Responsibilities
- Audit Runner MUST follow the Gate rules in Section 6.
- Audit Runner MUST compute scores only using rules defined in REG-P3-SCORING-GEO-AIO.md.
- Audit Runner MUST produce the output structure defined in Section 9.
- Audit Runner MUST persist only according to Section 10.

---

## 5. Preconditions & Required Inputs

### 5.1 Required Account Fields (Minimum)
An audit run requires a valid account record with:

- account_status
- p2_status
- profession_type
- market_territory_code
- primary_niche_code
- identity fields (at minimum: first_name and last_name OR business_name)

### 5.2 Required Anchor Inputs
At least one of the following anchors MUST exist:

- website_url (owned or delegated surface)
- gbp_place_id (or equivalent GBP identifier stored in system)
- linkedin_url

If no anchors exist, the audit MUST be blocked.

### 5.3 Registry Requirement
The audit runner MUST have access to:
- REG-P3-SCORING-GEO-AIO.md (authoritative)

If registry access is missing or invalid, the audit MUST fail safely with an explicit system error (not a blocked audit).

---

## 6. Gate Logic (Deterministic)

### 6.1 Gate Conditions
The gate MUST verify:

1) account_status = ACTIVE  
2) p2_status = P2_COMPLETE  
3) profession_type present  
4) market_territory_code present  
5) primary_niche_code present  
6) At least one anchor exists (website_url OR gbp_place_id OR linkedin_url)  

### 6.2 Gate Outcomes
- If all conditions pass: proceed to scoring.
- If any condition fails:
  - status = BLOCKED_MISSING_SIGNALS
  - scoring is skipped
  - blocked artifact is generated (Section 11)
  - persistence behavior follows mode rules (Section 10.4)

---

## 7. Supported Execution Modes

### 7.1 DAY-00 (Baseline Establishment)
Purpose: establish the first authoritative baseline for the account.

Rules:
- MUST run gate
- MUST run GEO scoring
- MUST run AIO scoring
- AIO may legitimately score low/zero at baseline where signals are absent
- MUST persist as authoritative baseline when successful

### 7.2 SNAPSHOT (Current-State Only)
Purpose: evaluate current observable state without delta comparison.

Rules:
- MUST run gate
- MUST run GEO scoring
- MUST run AIO scoring
- MAY persist as a historical snapshot (implementation choice), but MUST NOT overwrite the DAY-00 baseline unless explicitly configured as “authoritative snapshot” in system settings

### 7.3 DELTA (Comparison Run)
Purpose: compare current scores to the most recent authoritative audit.

Rules:
- MUST run gate
- MUST run GEO scoring and AIO scoring
- MUST load prior authoritative audit for comparison
- MUST produce factor-level deltas (direction, magnitude)
- MUST NOT overwrite baseline unless explicitly designated as “baseline refresh” policy in system settings

### 7.4 ADHOC (Diagnostic / Non-Authoritative)
Purpose: diagnostic run for QA, investigation, or previews.

Rules:
- MUST run gate
- MAY run GEO scoring and AIO scoring
- MUST NOT overwrite baseline or authoritative history
- MUST be labeled clearly as non-authoritative in output metadata

---

## 8. Execution Sequence

The Audit Runner MUST execute steps in this order:

1) **Initialize Run Context**
   - account_id
   - mode
   - timestamp
   - execution_id

2) **Gate Evaluation**
   - apply Section 6 logic

3) **Resolve Registry + Reference Data**
   - load REG-P3-SCORING-GEO-AIO.md
   - map profession_type to applicable niche registry context (if needed for labeling only)

4) **Collect Observational Inputs**
   - read stored URLs/IDs only
   - do not discover new assets
   - do not scrape

5) **Score GEO**
   - compute per-factor scores per registry
   - compute GEO subtotal / 10.0

6) **Score AIO**
   - compute per-factor scores per registry
   - compute AIO subtotal / 10.0

7) **Compute P3 Total**
   - P3 Total = GEO + AIO
   - display rounding rules must be consistent across runs

8) **Select Opportunities**
   - select exactly 3
   - derived from lowest-scoring factors (registry-governed gap logic)
   - no promises or ranking claims

9) **Assemble Output Artifact**
   - must match Section 9 structure
   - include mode and status

10) **Persist According to Mode**
   - apply Section 10 rules

---

## 9. Output Requirements (Audit Artifact)

### 9.1 Artifact Format
The audit output MUST be assembled as a 2-page artifact:

**Page 1 — Audit Summary**
- Title: “P3 Audit”
- Mode label (DAY-00 / SNAPSHOT / DELTA / ADHOC)
- Account summary (entity name, profession_type, territory, niche labels)
- GEO factor table:
  - factor name
  - max points
  - observed score
  - evidence (as available)
  - comment template output
- GEO subtotal / 10.0
- AIO factor table (same columns)
- AIO subtotal / 10.0
- P3 Total / 20.0
- Status label (COMPLETED or BLOCKED)

**Page 2 — Action Plan**
- Exactly three opportunities
- Each opportunity includes:
  - Title
  - Why it matters (template)
  - What we will address (template)
- Language must remain observational and non-promissory

### 9.2 Determinism Requirements
- The same inputs MUST produce the same output.
- Opportunity selection MUST be deterministic.
- Comments MUST be template-based (no free-form generation in execution).

---

## 10. Persistence & Baseline Rules

### 10.1 Authoritative Baseline
- DAY-00 successful run establishes the authoritative baseline.

### 10.2 Snapshot Persistence
- SNAPSHOT may be stored as historical record.
- SNAPSHOT MUST NOT overwrite DAY-00 baseline unless configured by explicit policy.

### 10.3 Delta Persistence
- DELTA runs should be stored as historical comparison records.
- DELTA MUST reference the prior authoritative baseline used.

### 10.4 Blocked Runs
- Blocked runs MAY be stored as operational history.
- Blocked runs MUST NOT overwrite authoritative baselines.

---

## 11. Blocked Audit Output Standard

If blocked:

**Page 1**
- Title: “P3 Audit — Blocked”
- Explicit list of missing signals (deterministic list)
- Clear statement that scoring was not executed

**Page 2**
- Remediation actions mapped to missing signals
- No scoring tables

Blocked outputs exist to preserve continuity and speed troubleshooting.

---

## 12. Compliance & Auditability

Compliance is validated by:

- Gate compliance: automated checks against Section 6
- Mode compliance: audit records must include mode and baseline reference
- Output compliance: artifact must include required sections and counts (2 pages; 3 opportunities)
- Registry compliance: scoring payloads must reference factor names and max points defined in REG-P3-SCORING-GEO-AIO.md
- Non-inference compliance: evidence fields must only contain stored/known references; no invented URLs

Violations are identified by:

- automated validators (schema/structure checks)
- deterministic diff checks (same inputs → same outputs)
- baseline overwrite detection (blocked or adhoc overwriting baseline is non-compliant)

---

## 13. Lock Statement

> This Blueprint is authoritative and binding. Any system, document, or implementation that conflicts with this Blueprint must be corrected to align with it.

---

**END — BP_P3_AUDIT_EXECUTION**
