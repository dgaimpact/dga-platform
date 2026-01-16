# Audit Runner

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P3 — Audit  
**Doctrine Title:** Audit Runner — Deterministic Execution & Containment  
**Filename:** ED_P3_AUDIT_RUNNER.md  

**Version:** v2.0  
**Status:** Active  
**Created:** 2026-01-15  
**Last Updated:** 2026-01-16  

**Owned By:** DGA Core Platform  

**Governing Authority:**
- 00_FOUNDATIONS/BLUEPRINTS/P3_AUDIT/BP_P3_AUDIT_GOVERNANCE.md  
- 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md  

**GitHub Directory:**  
`P3_AUDIT/EXECUTION_DOCTRINES/ED_P3_AUDIT_RUNNER.md`

---

## 1. Purpose & Authority

This Execution Doctrine defines the **deterministic runtime behavior** of the P3 Audit Runner.

It translates the P3 Audit Governance Blueprint into **enforced system behavior**.  
No discretion, optimization, or outcome-aware logic is permitted at runtime.

If any system behavior conflicts with this doctrine, this doctrine prevails unless superseded by Blueprint authority.

---

## 2. Execution Intent

The Audit Runner exists to:

- Execute governed audits only when eligible
- Enforce deterministic execution and containment
- Produce immutable audit artifacts
- Separate observation from execution entirely

The runner is not adaptive, persuasive, instructional, or outcome-aware.

---

## 3. Execution Triggers

Audits may be triggered only by:

- Account activation (Day 00)
- Scheduled audit due state
- Internal-authority ad-hoc invocation (diagnostic only)

No subscriber-initiated or manual trigger is permitted.

---

## 4. Eligibility Enforcement

Before execution, the runner must assert:

- `account_status = ACTIVE`
- `execution_blocked = false`
- `payment_status_v2 ∈ {BETA, ACTIVE, TRIAL, COMP}`

If any condition fails:

- execution is aborted
- `audit_run_status = BLOCKED`
- no retries are attempted

---

## 5. Cadence Rules

- Cadence determines **when** a scheduled audit may run
- Cadence does **not** alter audit structure, scoring, or output
- Blocked audits do not advance cadence
- Cadence logic is external to the audit artifact

The audit itself contains no timing or cadence language.

---

## 6. Execution Flow (Deterministic)

The Audit Runner MUST execute the following steps in order:

1. Assert eligibility gates
2. Lock audit run context
3. Perform GEO observation
4. Perform AIO observation
5. Apply factor-level scoring
6. Aggregate GEO and AIO totals
7. Construct audit artifact
8. Persist immutable audit record
9. Release execution lock

No step may be skipped, reordered, or conditionally bypassed.

---

## 7. Scoring Enforcement

- All factors execute every run
- Each factor has a defined maximum score
- Missing, incomplete, or ambiguous signals receive low or zero scores
- Unobservable signals receive a zero score with explanatory language
- No confidence bands or confidence modifiers are permitted
- No global penalties are permitted

---

## 8. Retry & Failure Handling

- Maximum retries per scheduled audit cycle: 3
- Retries occur only within the same due window
- After 3 failures:
  - `audit_run_status = FAILED`
  - no further retries
  - administrative review required

Subscribers are not notified of failures.

---

## 9. Artifact Rules

- One immutable artifact per audit run
- Artifacts are never overwritten
- Historical artifacts remain accessible per Account Hub policy
- No regeneration of historical audits is permitted

---

## 10. Ad-Hoc Audit Rules

- Ad-hoc audits are **internal-authority only**
- Ad-hoc audits are **diagnostic**
- Ad-hoc audits:
  - are not visible to account holders
  - do not update baselines
  - do not write deltas
  - do not trigger P4
  - do not alter cadence

Ad-hoc audits may not be converted into formal audits.

---

## 11. Account-Type Parameterization

The runner is parameterized by account type:

- SO
- PB Parent
- Child

Parameterization may affect:
- delivery recipients
- inheritance rules
- compliance enforcement

Execution logic remains uniform.

---

## 12. Prohibited Behavior

The Audit Runner must never:

- emit execution guidance
- recommend actions
- reference platform-specific tactics
- reference competitor identities
- alter upstream account data
- adapt logic based on prior outcomes

---

## 13. Versioning Enforcement

- Every audit run is tagged with an internal logic version
- The audit version is displayed in the footer
- When logic changes affect comparability, a brief annotation is included
- No scoring mechanics or change details are exposed

---

## 14. Monitoring & Observability

The runner must emit:

- run start and completion timestamps
- retry counts
- terminal execution status

Observability does not imply control or adaptation.

---

## 15. Lock Statement

This Execution Doctrine is authoritative and binding.

Any deviation requires a governed revision aligned to the P3 Audit Governance Blueprint.

---

END — ED–P3 — Audit Runner (v2.0)
