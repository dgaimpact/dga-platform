# Playbook Audit  
Playbook (PB) Audit Execution Doctrine

Version: v1.0  
Created: 2025-12-29  
Status: Binding (Active)

Applies To:
- Replit AI-Agent (Audit Runner)
- P3 Audit Orchestration Layer
- Supabase Audit Persistence

Primary Pillar: **P3 — Audit**

Governing Authority:
- 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
- 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md

Governed By:
- BP–P3–OMNI-PRESENCE-BLUEPRINT.md

---

## GitHub Directory Location

# 03_P3_AUDIT/
# └── EXECUTION_DOCTRINES/
# └── ED–P3–PB-AUDIT.md

---

## 1. Authority & Scope

This Execution Doctrine defines the **mandatory audit execution behavior** for all **Playbook (PB)** subscriptions within DGA.

It exists to:
- enforce strict separation between PB Parent and PB Child audit scope
- ensure deterministic timing and execution of audits
- prevent audit scope creep, interpretation drift, or relationship contamination
- preserve the Audit → Content one-way dependency

This doctrine is **binding**.

If any system behaves differently than specified here, the system is wrong.

---

## 1.1 Pillar Ownership Declaration

This Execution Doctrine operates **exclusively within P3 — Audit**.

It may:
- consume normalized entity data from P2
- expose audit outputs to P4 (content planning inputs only)

It must **never**:
- trigger content creation
- initiate relationship actions
- override P5 relationship boundaries
- infer intent or outcomes

---

## 2. Definitions (Execution-Level)

- **PB Parent** — The primary Playbook subscriber (Mortgage Professional).
- **PB Child** — A referral partner onboarded under a PB subscription (e.g., Real Estate Agent).
- **Scheduled Audit** — A full, authoritative audit executed at a system-defined time.
- **Ad-Hoc Audit** — A diagnostic audit executed on human request; non-authoritative.
- **Governance Audit** — A reduced-scope audit validating entity integrity and platform compliance.
- **Full Audit** — A complete GEO + AIO audit following canonical execution rules.
- **Day 00** — The moment an account transitions to ACTIVE status.

If a term is not defined here, it must not be inferred.

---

## 3. Audit Types Allowed Under PB

Only the following audit types are permitted:

1. **Scheduled Governance Audit** (PB Parent)
2. **Scheduled Full Audit** (PB Child)
3. **Ad-Hoc Diagnostic Audit** (Either; non-authoritative)

No other audit variants are permitted.

---

## 4. PB Parent (MP) — Governance Audit Rules

### 4.1 Scope

PB Parent accounts receive **Governance Audits only**.

Governance Audits evaluate:
- entity integrity
- platform presence and consistency
- minimum AI corroboration signals
- review platform presence and accessibility

They do **not** perform:
- full GEO scoring loops
- full AIO scenario sweeps
- content opportunity ranking beyond governance thresholds

---

### 4.2 Mandatory Platforms (PB Parent)

The following platforms are **mandatory** for PB Parent governance audits:

- Website (canonical)
- Google Business Profile
- LinkedIn
- Facebook Business Page
- At least one public review surface

---

### 4.3 Review Platform Handling

- **Google Reviews** are the **preferred** review surface.
- Google Reviews are **not mandatory**.

If Google Reviews are not the primary review strategy:
- alternative platforms (e.g., Rate-My-Agent, brokerage-hosted reviews, industry-specific sites)  
  are included **contextually** in the Review Platform score.

Audit systems must:
- observe existing review strategy
- score corroboration and accessibility
- never penalize legitimate non-Google review choices

---

### 4.4 PB Parent Audit Cadence

PB Parent Governance Audits run:

- **Day 00** — immediately upon ACTIVE status
- **Monthly thereafter** — aligned to the global audit anchor cadence

Governance Audits:
- establish baseline at Day 00
- are re-run monthly
- use delta language **only** if regression occurs
- must not generate content triggers

---

## 5. PB Child (REA) — Full Audit Rules

### 5.1 Scope

PB Child accounts receive **Full Audits** identical in execution to Solo accounts.

Each Full Audit includes:
- complete GEO evaluation
- complete AIO evaluation
- fractional internal scoring
- top-3 opportunity identification
- baseline or delta-aware commentary

No PB-specific reduction is permitted.

---

### 5.2 PB Child Audit Cadence

PB Child Full Audits run:

- **Day 00** — immediately upon ACTIVE status
- **Monthly thereafter** — aligned to the global audit anchor cadence

All PB Child audits are:
- authoritative
- immutable once completed
- eligible to inform content planning

---

## 6. Timing & Execution Rules (Non-Negotiable)

### 6.1 Activation Trigger

When a PB Parent or PB Child transitions to ACTIVE:

- the appropriate Day 00 audit **must execute immediately**
- the audit establishes the authoritative baseline
- the next audit aligns to the *next* global anchor date

Mid-cycle activation must **not**:
- delay Day 00 audits
- accelerate subsequent audits
- create off-cycle audit schedules

---

### 6.2 Monthly Anchor Alignment

All recurring audits must:
- snap to the global anchor cadence
- execute at most once per cycle
- never be manually accelerated

---

## 7. Ad-Hoc Diagnostic Audits (Explicitly Limited)

Ad-Hoc Audits are permitted only as **diagnostic tools**.

They:
- may be executed on request
- may observe current ecosystem state
- may assist human review or troubleshooting

They must **never**:
- generate reports stored as system truth
- overwrite scheduled audit results
- update baselines or deltas
- inform content creation
- be referenced in subscriber reporting

Ad-Hoc audits are disposable.

---

## 8. Failure Isolation Rules (PB Context)

### 8.1 PB Parent Governance Failure

If a PB Parent Governance Audit fails:

- flag the PB Parent account
- pause **new PB Child onboarding only**
- allow existing PB Children to continue normal audit cycles
- prohibit governance failures from cascading to PB Children

---

### 8.2 PB Child Audit Failure

If a PB Child audit fails:

- isolate the failure to that PB Child
- do not impact PB Parent status
- do not impact other PB Children

Cross-account contamination is prohibited.

---

## 9. Prohibited Behaviors

Under no circumstances may the system:

- substitute governance audits for full audits
- infer audit scope based on subscription payment source
- merge PB Parent and PB Child audit data
- expose PB Child audit internals to other PB Children
- allow audit outcomes to trigger relationship actions
- allow content execution without a completed scheduled audit

If a desired outcome requires a prohibited behavior, the outcome is invalid.

---

## 10. Downstream Dependencies

This doctrine relies on:

- Replit Audit Execution KB (Scheduled Audit logic)
- Canonical GEO/AIO scoring definitions
- Registry-aligned audit schemas

Downstream systems must consume outputs **exactly as defined**.

---

## 11. Change Control

Changes to this Execution Doctrine require:

- Blueprint compatibility review
- version increment
- documented rationale
- explicit approval

Silent changes are prohibited.

---

**END — ED–P3–PB-AUDIT**
