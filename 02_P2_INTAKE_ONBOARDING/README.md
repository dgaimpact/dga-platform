# P2 — Intake & Onboarding

This folder defines the **canonical governance, registries, and execution doctrines** for **Pillar 2 (P2): Intake & Onboarding** within the DGA platform.

P2 is responsible for establishing **clean, validated, activation-ready accounts** without inference, drift, or ambiguity.

---

## Pillar Purpose

P2 exists to answer one question — **with certainty**:

> “Is this account structurally valid and eligible to become ACTIVE?”

P2 does **not**:
- qualify prospects (P1)
- define authority or truth (P3)
- create or publish content (P4)
- manage relationships or cadence (P5)

P2 is the **gatekeeper** between interest and execution.

---

## What P2 Governs

P2 governs:

- Intake field requirements
- Profession assignment
- Seat classification
- Market & territory assignment
- Capacity enforcement at activation
- PB-REA referral partner onboarding
- Intake exceptions (explicit, temporary)
- Deterministic activation behavior

If an account is ACTIVE, **P2 guarantees**:
- no missing required fields
- no capacity violations
- no partial market writes
- no inferred data

---

## Folder Structure

'''text
2 — Intake & Onboarding
│
├── REGISTRIES/
│ ├── REG_P2_PROFESSION_CODES.md
│ ├── REG_P2_MARKET_CAPACITY.md
│ ├── REG_P2_ACCOUNT_SEAT_CLASS.md
│ ├── REG_P2_RELATIONSHIP_TYPES.md
│ ├── REG_P2_P2_STATUS_CODES.md
│ └── REG_P2_INTAKE_FIELD_SET.md
│
├── EXECUTION_DOCTRINES/
│ ├── ED_P2_ACTIVATION_CAPACITY_ENFORCEMENT.md
│ ├── ED_P2_PB_REA_REFERRAL_PARTNER_ONBOARDING.md
│ └── ED_P2_INTAKE_EXCEPTION_HANDLING.md
│
└── IMPLEMENTATION/
└── P2_REPLIT_ONBOARDING_ED_MAPPED.md

---

## Registry Layer (REG)

Registries define **what exists**.

They are:
- authoritative
- non-executing
- logic-free
- immutable without versioning

### P2 Registries

| Registry | Purpose |
|--------|--------|
| REG_P2_PROFESSION_CODES | Canonical profession dimension |
| REG_P2_MARKET_CAPACITY | Market scarcity model |
| REG_P2_ACCOUNT_SEAT_CLASS | Capacity-bearing vs non-capacity seats |
| REG_P2_RELATIONSHIP_TYPES | Parent/child account relationships |
| REG_P2_P2_STATUS_CODES | P2 lifecycle state machine |
| REG_P2_INTAKE_FIELD_SET | Required & optional intake fields |

If a field, enum, or rule is not in a REG, **it does not exist**.

---

## Execution Doctrine Layer (ED)

Execution Doctrines define **how rules are enforced**.

They:
- implement REG intent
- prohibit ambiguity
- define hard stops and failure behavior
- control activation timing

### P2 Execution Doctrines

| ED | Purpose |
|----|--------|
| ED_P2_ACTIVATION_CAPACITY_ENFORCEMENT | When & how activation occurs |
| ED_P2_PB_REA_REFERRAL_PARTNER_ONBOARDING | PB referral partner exception path |
| ED_P2_INTAKE_EXCEPTION_HANDLING | Controlled intake exceptions |

If execution behavior conflicts with a REG, **the REG prevails**.

---

## Implementation Mapping

Application logic must map **1:1** to EDs.

- Replit onboarding apps
- Supabase triggers & functions
- Automation workflows

**Reference:**
`IMPLEMENTATION/P2_REPLIT_ONBOARDING_ED_MAPPED.md`

This document is the **contract** between governance and code.

---

## Key Invariants (Non-Negotiable)

- No account becomes ACTIVE without passing P2
- Capacity is enforced only at activation
- Market assignment is atomic (`market_name` + `territory_code`)
- PB_CHILD accounts never consume market capacity
- Intake exceptions are explicit and block activation
- No inference, no silent fallback, no drift

Violation of any invariant invalidates execution.

---

## P2 → P3 Handoff

An account may exit P2 and enter P3 **only when**:
- `account_status = ACTIVE`
- `p2_status = P2_ACTIVE_CONFIRMED`
- No unresolved intake exceptions
- All REG and ED constraints satisfied

P3 assumes **P2 truth is final**.

---

## Change Control

- All changes require versioned updates
- REG changes precede ED changes
- ED changes precede app changes
- Silent drift is prohibited

---

END — P2 PILLAR README
