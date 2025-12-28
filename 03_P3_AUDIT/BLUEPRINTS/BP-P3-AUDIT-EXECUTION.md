# AUDIT-EXECUTION

## Document Metadata
- **Blueprint:** P3 – Audit Execution Model
- **Version:** v1.1
- **Status:** Canonical
- **Owner:** Digital Growth Accelerator (DGA)
- **Last Updated:** 2025-01-28
- **Supersedes:** v1.0
- **Scope:** Execution Governance (non-scoring)

---

## 1. Purpose

This document defines **how P3 audits are executed** within DGA, including:
- discovery principles
- execution constraints
- cost controls
- governance rules

It does **not** define scoring logic, weights, or evaluation criteria.

---

## 2. Execution Principles

P3 execution is designed to be:
- **Deterministic** – same inputs yield the same outputs
- **Intentional** – audits run only when explicitly triggered
- **Cost-aware** – discovery spend aligns with GEO importance
- **Non-leading** – signals are discovered, not prescribed

---

## 3. Explicit Run Control (Hard Rule)

P3 audits **must not run automatically**.

Audits may only execute when:
- an explicit admin action is taken (e.g., “Run Audit”)
- the run-lock guard is satisfied

Audits must **not** run:
- on page load
- during health checks
- during configuration changes
- during data reads (history, gaps, summaries)

This rule exists to:
- prevent silent cost leakage
- preserve audit intent
- support future plan-based limits

---

## 4. Entity Bundle Input Model (Clarified)

P3 execution does not rely on a single literal brand string.

Each audit operates on an **Entity Bundle**, consisting of:
- a primary domain (authoritative anchor)
- one or more entity names / aliases

Entity Bundles may be constructed from:
- onboarding inputs
- authoritative website signals
- Google Business Profile naming
- linked professional profiles

Discovery is performed **across the bundle**, not against a single name.

---

## 5. Discovery Strategy (GEO-Weighted)

Discovery effort must mirror **GEO factor importance**.

### 5.1 High-Impact Factors (Primary Spend)
Discovery prioritizes:
- website authority and entity clarity
- Google Business Profile presence
- third-party review visibility (platform-agnostic)

The majority of external discovery budget is allocated here.

---

### 5.2 Low-Impact Factors (Conditional)
Low-weight GEO factors:
- receive no dedicated discovery by default
- may be conditionally included only if primary signals are weak

This prevents over-investment in marginal signals.

---

## 6. Review Discovery (Agnostic)

Review discovery is **platform-agnostic**.

- No preferred or allow-listed review platforms
- Any legitimate third-party review surface may be detected
- Discovery is driven by generic review-intent queries
- Evaluation focuses on presence and corroboration, not vendor identity

---

## 7. Cost Controls & Budget Guardrails

P3 execution enforces:
- a hard cap on external discovery calls per run
- caching with defined TTL
- reuse of discovery outputs across signals
- no duplicate calls for equivalent intent

These controls ensure scalability without compromising signal quality.

---

## 8. Separation from Scoring

Execution logic:
- discovers signals
- normalizes inputs
- feeds scoring

It does **not**:
- assign weights
- interpret impact
- modify evaluation outcomes

Scoring remains governed by the P3 Scoring Blueprint.

---

## 9. Audit Lifecycle

A P3 audit consists of:
1. Explicit run initiation
2. Entity Bundle construction
3. GEO-weighted discovery
4. Crawl and signal extraction
5. Scoring and rollup
6. Gap detection and action synthesis
7. Persistence of results

Each run is:
- timestamped
- reproducible
- historically preserved

---

## 10. Governance Note

This execution blueprint is designed to:
- evolve independently of scoring philosophy
- remain compatible with future GEO/AIO refinements
- support plan-based controls and scheduling without refactor

---

## 11. Version History

- **v1.0** – Initial audit execution outline
- **v1.1** – Aligned execution with entity bundles, GEO-weighted discovery, explicit run-locks, and cost-aware governance

---

## 12. Canonical Status

This document is the **authoritative execution reference** for P3 audits within DGA.

All Audit Runner behavior must remain aligned to this blueprint unless superseded by a formally versioned update.
