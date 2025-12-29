# Account Hub Disclosure Cycle Anchoring Rotation

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P4 — Content Creation & Publishing  
**Status:** Draft (Ready for Adoption)  
**Scope:** Cycle Anchoring & Rotation Governance  
**Owned By:** DGA Core Platform  

---

## 1. Purpose

This Execution Doctrine defines the **temporal governance model** used by the Account Hub for:

- 30-day cycle anchoring  
- Monthly round-robin rotation  
- Fair exposure distribution across PB-linked content  

It exists to:

- Eliminate ambiguity around cycle timing  
- Prevent exposure bias over time  
- Ensure deterministic, audit-safe behavior  
- Prohibit performance-based or subjective sequencing  

This doctrine governs **time and order only**.  
It does not control execution, allocation math, or disclosure rendering.

---

## 2. Canonical Cycle Definition

### 2.1 Cycle Length

- All Account Hub logic operates on a **30-day cycle**
- Cycles are discrete and non-overlapping
- No mid-cycle recalculation is permitted

A cycle begins and ends based on the **cycle anchor date** defined below.

---

## 3. Canonical REA Start Dates (PB Context)

The following six dates are the **only valid REA child start anchors**:

- **3rd**
- **8th**
- **13th**
- **18th**
- **23rd**
- **28th**

These dates serve two purposes:

1. Initial onboarding start points for PB sub-accounts  
2. Deterministic ordering inputs for round-robin allocation  

No other dates may be introduced without revising this doctrine.

---

## 4. Anchor Selection Logic

### 4.1 Anchor Definition

The **anchor** is the REA start date that determines:

- The first article considered for allocation in a cycle  
- The starting point of the round-robin sequence  

Only one anchor exists per cycle.

---

### 4.2 Initial Anchor Assignment

For a newly activated PB account:

- The initial anchor is set to the **earliest ACTIVE REA start date**
- This assignment occurs once at PB activation
- No retroactive reassignment is permitted

---

## 5. Monthly Anchor Rotation

### 5.1 Rotation Rule

At the start of each new 30-day cycle:

- The anchor advances to the **next date in the canonical start-date list**
- Rotation proceeds in fixed order:
  - 3rd → 8th → 13th → 18th → 23rd → 28th → back to 3rd
- Rotation advances **exactly one position per cycle**

No skipping, acceleration, or conditional logic is allowed.

---

### 5.2 Rotation Persistence

- Only the **anchor position** persists across cycles
- No other historical state is retained
- Rotation does not depend on:
  - Number of articles
  - Allocation outcomes
  - Subscriber behavior
  - Platform performance

This ensures fairness **without tracking history**.

---

## 6. Behavior with Fewer Than Six REA Children

When fewer than six ACTIVE REA child accounts exist:

- The rotation set contracts to include **only ACTIVE REAs**
- Anchor rotation still advances monthly
- Rotation wraps within the ACTIVE subset
- No placeholders or reserved positions are created

Inactive or frozen REAs are excluded immediately.

---

## 7. REA Additions, Removals, and Status Changes

### 7.1 Adding a New REA

When a new REA child is activated:

- It is inserted into the rotation based on its assigned start date
- It participates in the next cycle
- No rebalancing of the current cycle occurs

---

### 7.2 Removing or Freezing an REA

When an REA becomes inactive or frozen:

- It is removed from the rotation immediately
- The next cycle proceeds with the reduced ACTIVE set
- Anchor rotation continues uninterrupted

No compensatory logic is applied.

---

## 8. Explicit Prohibitions

Cycle anchoring and rotation must never:

- Use engagement, performance, or analytics data  
- Skip or repeat anchor positions  
- Reset based on outcomes or complaints  
- Adjust mid-cycle  
- Create priority or seniority effects  

Any deviation violates this doctrine.

---

## 9. Relationship to Allocation Logic

- Cycle anchoring determines **order only**
- Allocation math is governed by:
  - ED-P4-Account-Hub-Disclosure-Allocation-Logic
- Platform MAXs remain authoritative and unchanged

Anchoring does not override platform ceilings.

---

## 10. Governance Alignment

This Execution Doctrine operates under:

- ED-P4-Account-Hub-Disclosure-Rendering  
- ED-P4-Account-Hub-Disclosure-Data-Contract  
- ED-P4-Account-Hub-Disclosure-Allocation-Logic  
- ED-P4-Account-Hub-Disclosure-Cadence-Platform-MAX-Registry  

It introduces no execution authority and no system of record.

---

## 11. Lock Statement

> Account Hub cycle anchoring and rotation are deterministic, fixed, and non-optimizable.  
> Monthly anchor rotation ensures equitable exposure over time without tracking performance or history.

---

**END — ED-P4-Account-Hub-Disclosure-Cycle-Anchoring-Rotation**
