# ED–P3–AUDIT LIFECYCLE

Deterministic State Management for All DGA Audit Executions

Version: v1.0  
Created: 2025-12-15  
Status: Binding (Active)

Applies To:
- Audit Engine
- Replit Orchestration Layer
- Supabase Audit Persistence

Governed By:
- BP–P3–OMNI-PRESENCE BLUEPRINT
- PILLAR_LOCK_REFERENCE.md

---

## 1. Authority & Scope

This Execution Doctrine defines the **mandatory lifecycle states and transitions** for all DGA audits.

It exists to:
- translate audit authority into deterministic execution
- prevent partial, ambiguous, or retroactive audits
- enforce immutability and traceability
- constrain system behavior during failure or degradation

This doctrine is **binding**.

If an audit behaves outside this lifecycle, the audit is invalid.

---

## 2. Preconditions

This doctrine applies only when **all** of the following are true:

- An account has completed P2 Intake & Onboarding
- An audit execution mode has been explicitly declared
- Required platforms are reachable per ED–P3–Audit Core
- Canonical audit schemas are present and validated

If any precondition is not met, the audit **must not initiate**.

---

## 3. Definitions (Operational)

- **Audit Run** — A single, immutable execution instance of an audit
- **Lifecycle State** — A discrete execution phase with defined entry and exit rules
- **Terminal State** — A lifecycle state after which no further execution is permitted
- **Degraded Execution** — Completion under constrained conditions, explicitly flagged

If a term is not defined here, the system must not infer its meaning.

---

## 4. Inputs

The system must receive the following inputs prior to lifecycle initiation:

- **account_id** — Canonical subscriber identifier
- **audit_type** — `scheduled` | `adhoc`
- **execution_mode** — `DEV` | `BETA` | `LIVE`
- **trigger_source** — system | manual | diagnostic

If any required input is missing:
- execution must halt
- an integrity alert must be logged
- no audit_run record may be created

---

## 5. Execution Rules (Non-Negotiable)

The system **must** adhere to the following rules:

1. Every audit run must progress through defined lifecycle states
2. States may not be skipped, merged, or reordered
3. State transitions must be explicitly recorded
4. Terminal states are immutable
5. Audit results may not be modified after completion
6. Failed audits may not silently retry

No conditional interpretation is permitted.

---

## 6. Audit Lifecycle States & Sequence

When this doctrine applies, execution **must** follow this exact order:

### 6.1 INITIALIZED
- Inputs validated
- execution_mode locked
- audit_run_id generated

Transition allowed only to: **VALIDATED**

---

### 6.2 VALIDATED
- Required platforms reachable
- Required schemas verified
- Registry alignment confirmed

If validation fails:
- Transition to **FAILED**
- Record failure reason

---

### 6.3 EXECUTING
- Platform scans performed
- Observational inputs collected
- No scoring yet permitted

Partial execution is prohibited.

---

### 6.4 EVALUATED
- Scoring logic applied
- GEO and AIO observations synthesized
- Confidence constraints enforced

Evaluation may occur only once per audit run.

---

### 6.5 COMPLETED (Terminal)
- Results persisted
- Audit marked immutable
- Notifications triggered per execution mode

No further state transitions permitted.

---

### 6.6 FAILED (Terminal)
- Failure reason recorded
- Partial results discarded
- Execution closed

FAILED audits may not be repurposed.

---

## 7. State Handling Rules

The system must:

- Record every state transition with timestamp
- Preserve full lifecycle history
- Prevent backward transitions

Allowed states:
- INITIALIZED
- VALIDATED
- EXECUTING
- EVALUATED
- COMPLETED
- FAILED

Forbidden transitions (examples):
- EXECUTING → INITIALIZED
- EVALUATED → EXECUTING
- COMPLETED → any state

---

## 8. Timing & Cadence Rules

- Minimum interval between audits is governed elsewhere
- This doctrine enforces **sequence only**, not scheduling
- No reactive acceleration is permitted

Time manipulation is prohibited.

---

## 9. Prohibited Behaviors

The system must **never**:

- Skip validation
- Complete an audit without evaluation
- Modify results post-completion
- Retry silently after failure
- Merge multiple executions into one audit_run

If completion requires any prohibited behavior, the audit is invalid.

---

## 10. Error Handling & Exceptions

If an error occurs:

- The system must halt execution
- The system must transition to FAILED
- The system must log the failure explicitly

Exceptions are allowed **only** if explicitly defined:
- None at this time

Silently ignoring errors is prohibited.

---

## 11. Downstream Dependencies

This doctrine relies on:

- ED–P3–Audit Core
- Canonical audit schemas (Supabase)
- Registry-aligned field definitions

Downstream systems may **consume results only after COMPLETED** state.

---

## 12. Change Control

Changes to this Execution Doctrine require:

- Blueprint compatibility review
- version increment
- documented rationale
- explicit approval

No silent changes are permitted.

---

END — ED–P3–AUDIT LIFECYCLE
