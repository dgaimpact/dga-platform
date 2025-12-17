# P2 STATUS CODES

Canonical registry defining **P2 lifecycle status codes** used to track **Intake & Onboarding progression** independently from account activation state.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** REG_P2_P2_STATUS_CODES.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Consumed By:**
- P2 — Replit Onboarding Apps
- Supabase (status validation & enforcement)
- Activation & Exception Handling Logic

---

## 1. Authority & Scope

This Registry defines the **canonical P2 status codes** used to represent an account’s **intake and onboarding state**.

P2 status codes:
- Track onboarding progress
- Signal readiness (or blockage) for activation
- Provide deterministic state transitions for automation and UI

This document is:
- authoritative  
- non-executing  
- non-procedural  
- logic-free  

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- P2 status codes are **distinct from** `account_status`
- Every account in P2 must have **exactly one** P2 status
- Status transitions must be **explicit**
- No inference or auto-escalation is permitted
- If a P2 status code is not listed here, it does not exist

---

## 3. Field Definitions

| Field | Type | Required | Description |
|------|------|----------|-------------|
| p2_status | TEXT | Yes | Canonical P2 lifecycle status code |

### Field Notes
- `p2_status` reflects **process state**, not eligibility
- `p2_status` may change multiple times before activation
- `p2_status` does not imply `account_status`

---

## 4. Enumerations

### P2_STATUS

| Value | Description |
|------|-------------|
| P2_STARTED | Intake has begun but is incomplete |
| P2_VALIDATED | All required P2 intake fields validated |
| P2_ACTIVATION_REQUESTED | Activation attempt initiated |
| P2_ACTIVATION_BLOCKED | Activation failed due to a blocking condition |
| P2_ACTIVE_CONFIRMED | Activation completed successfully |

---

## 5. Relationship to Account Status

| Account Status | Allowed P2 Statuses |
|---------------|---------------------|
| PROSPECT | P2_STARTED, P2_VALIDATED |
| HOLD | P2_STARTED, P2_VALIDATED, P2_ACTIVATION_BLOCKED |
| ACTIVE | P2_ACTIVE_CONFIRMED |
| REJECTED | P2_STARTED, P2_ACTIVATION_BLOCKED |

Rules:
- `P2_ACTIVE_CONFIRMED` requires `account_status = ACTIVE`
- `account_status = ACTIVE` requires `p2_status = P2_ACTIVE_CONFIRMED`
- Any mismatch indicates an invalid state

---

## 6. Cross-Field Constraints (Declarative Only)

- `p2_status = P2_ACTIVATION_REQUESTED`:
  - must immediately attempt activation
  - must resolve to either `P2_ACTIVE_CONFIRMED` or `P2_ACTIVATION_BLOCKED`
- `p2_status = P2_ACTIVATION_BLOCKED`:
  - requires an explicit blocking reason (stored elsewhere)
- `p2_status` transitions must not skip states silently

---

## 7. Scope Exclusions

This Registry does **not** define:
- Activation eligibility rules
- Market capacity enforcement
- Intake field requirements
- Retry or escalation logic

These belong to Execution Doctrines and downstream systems.

---

## 8. Change Control

- Any change requires a **version increment**
- New status codes require:
  - REG update
  - ED review
  - Replit flow alignment
- Field removal is prohibited without a formal deprecation cycle

---

END — REG–P2–P2_STATUS_CODES
