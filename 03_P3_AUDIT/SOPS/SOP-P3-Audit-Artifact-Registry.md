# SOP — P3 Audit Artifact Registry

## DOCUMENT METADATA

**Document Type:** SOP · Canonical Registry  
**Scope:** Audit Governance · Artifact Definition  
**Applies To:** All DGA audit outputs, storage, and downstream usage

**Primary Pillar:** P3 — Audit  
**Downstream Pillars Protected:**  
- P4 — Content Creation & Publishing  
- P5 — Relationship Continuity  

**Derived From:**  
- BP — P3 Omni-Presence Blueprint  
- SOP — P3 Audit Review Trigger Rules  
- SOP — P2 Entity Readiness Checklist  
- DGA Business Model (Governing Authority)

**Version:** v1.0  
**Status:** Active  
**Created:** 2025-12-16  
**Last Updated:** 2025-12-16  

**Owned By:** DGA Core Platform  

---

## 1. Purpose

This registry defines the **canonical set of audit artifacts** produced by **P3 — Audit**, including:

- what artifacts exist
- what each artifact represents
- how it may be used
- where it is stored
- what it must *not* be used for

Its purpose is to:
- prevent schema drift
- protect audit neutrality
- ensure downstream consistency
- stop audit outputs from mutating into advice or promises

If an artifact is not listed here, it is **not authoritative**.

---

## 2. What This SOP Governs

This SOP governs:

- All audit-generated data objects
- All audit reports and scorecards
- All interpretive boundaries
- Downstream consumption rules

This registry is the **single source of truth** for P3 artifacts.

---

## 3. Audit Artifact Categories

Audit artifacts are grouped into four non-overlapping categories.

---

## 4. Category A — Identity & Context Artifacts

These establish *what is being observed*.

### A1. Entity Snapshot
**Description:**  
Normalized representation of the audited entity at a point in time.

**Includes:**  
- entity identifiers  
- role and market  
- audit timestamp  

**Used By:** P3  
**Stored In:** Supabase (entity_snapshot)  
**Restrictions:**  
- Must not include scoring or interpretation  

---

### A2. Surface Inventory
**Description:**  
List of discovered digital surfaces and authority anchors.

**Includes:**  
- websites  
- GBP / maps entities  
- professional profiles  

**Used By:** P3  
**Stored In:** Supabase (surface_inventory)  
**Restrictions:**  
- Discovery only; no optimization guidance  

---

## 5. Category B — Observational Signal Artifacts

These record **what signals exist**, without judgment.

### B1. Signal Presence Matrix
**Description:**  
Binary or enumerated representation of signal presence.

**Examples:**  
- schema present / absent  
- citations detected / not detected  

**Used By:** P3  
**Stored In:** Supabase (signal_matrix)  
**Restrictions:**  
- No weighting or ranking  

---

### B2. Corroboration Map
**Description:**  
Representation of how signals align across surfaces.

**Used By:** P3  
**Stored In:** Supabase (corroboration_map)  
**Restrictions:**  
- No authority inference  

---

## 6. Category C — Derived Diagnostic Artifacts

These summarize **patterns**, not prescriptions.

### C1. Audit Summary
**Description:**  
Human-readable synthesis of observed state.

**Used By:** P3, P5  
**Stored In:** Supabase + Report Output  
**Restrictions:**  
- Must avoid outcome framing  
- Must preserve uncertainty  

---

### C2. Risk & Ambiguity Flags
**Description:**  
Explicit markers where interpretation is fragile or constrained.

**Used By:** P3, P5  
**Stored In:** Supabase (audit_flags)  
**Restrictions:**  
- Flags do not imply action  

---

## 7. Category D — Reporting Artifacts

These are **presentation layers**, not data sources.

### D1. Audit Report (Snapshot / Monitoring)
**Description:**  
Compiled audit output for review.

**Used By:** P3, Subscriber (read-only)  
**Stored In:** Generated Output + Reference ID  
**Restrictions:**  
- Must trace back to canonical artifacts  

---

### D2. Scorecards (If Applicable)
**Description:**  
Controlled representation of observational completeness.

**Used By:** P3  
**Stored In:** Generated Output  
**Restrictions:**  
- Scores reflect coverage, not performance  

---

## 8. Prohibited Artifacts

The following **must not exist** as P3 artifacts:

- Recommendations
- Action plans
- Optimization guidance
- Predictions or forecasts
- Competitive rankings
- Outcome likelihood statements

These belong outside P3 governance.

---

## 9. Downstream Usage Rules

- **P4** may reference artifacts, never reinterpret them
- **P5** may reference summaries and flags only
- No pillar may modify audit artifacts
- Audit artifacts are append-only by version

---

## 10. Enforcement Rule

If an artifact:
- is not listed here
- violates category restrictions
- is repurposed beyond scope

It is invalid and must be removed or corrected.

---

## 11. Lock Statement

This registry is authoritative.

Any audit behavior, storage schema, report, or downstream usage that violates this registry breaches P3 governance and must be corrected.

---

**END — SOP — P3 Audit Artifact Registry (v1.0)**
