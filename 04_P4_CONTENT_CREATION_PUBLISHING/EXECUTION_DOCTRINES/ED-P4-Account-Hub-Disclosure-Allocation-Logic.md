# Account Hub Disclosure Allocation Logic

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P4 — Content Creation & Publishing  
**Status:** Draft (Ready for Adoption)  
**Scope:** Allocation Logic for Disclosure Only  
**Owned By:** DGA Core Platform  

---

## 1. Purpose

This Execution Doctrine defines the **deterministic allocation logic** used to associate long-form content with platform disclosure slots as reflected in the Account Hub.

It exists to:

- Freeze allocation behavior as **rule-based and non-interpretive**
- Ensure fairness and predictability across SO and PB accounts
- Prevent performance-driven, subjective, or manual prioritization
- Provide a defensible explanation for why certain content appears on certain platforms in a given cycle

This doctrine governs **allocation logic only**, not execution, publishing, or analytics.

---

## 2. Core Allocation Principles (Non-Negotiable)

All allocation behavior must adhere to the following principles:

- Allocation is **cycle-scoped** (30-day cycle)
- Allocation is **platform-capped**
- Allocation is **deterministic**
- Allocation uses **no performance or engagement data**
- Allocation never guarantees full coverage
- Allocation exists to respect platform ceilings, not content volume

---

## 3. Allocation Inputs

Allocation logic may consider **only** the following inputs:

- Number of long-form articles available in the cycle
- Article association (SO or PB-linked MP articles)
- ACTIVE REA child accounts (PB only)
- REA child **start dates**
- Platform-specific monthly maximums
- Monthly round-robin anchor position

No other inputs are permitted.

---

## 4. Platform Maximums (Hard Caps)

Each platform enforces a fixed maximum number of allocation slots per 30-day cycle.

Once a platform maximum is reached:

- No additional articles are allocated to that platform
- Remaining articles are considered **out of scope** for that platform for the cycle
- No rollover, credit, or carry-forward is permitted

Platform maximums are defined elsewhere and consumed by this doctrine.

---

## 5. SO Account Allocation Logic

For SO accounts:

- All available articles are ordered by publish date
- Articles are allocated sequentially to platforms
- Allocation stops when the platform maximum is reached
- No rotation logic is required

If fewer articles exist than available slots, allocation naturally under-fills.

---

## 6. PB Account Allocation Logic (MP Perspective)

### 6.1 Article Set Definition

For PB accounts, the MP article set for a cycle consists of:

- One MP mortgage article per ACTIVE REA child account
- No baseline MP article independent of REA participation

If zero ACTIVE REA child accounts exist, no MP PB articles are produced or allocated.

---

### 6.2 Round-Robin Allocation Mechanism

Allocation across MP PB articles uses a **round-robin sequence** derived from REA child start dates.

Rules:

- Only ACTIVE REA children are included
- REA start dates define the ordering sequence
- Allocation proceeds sequentially from a defined anchor
- The sequence wraps as needed
- Allocation stops when platform max is reached

No weighting or prioritization is allowed.

---

### 6.3 Monthly Anchor Rotation

To prevent systemic exposure bias:

- The round-robin **anchor position rotates monthly**
- Rotation advances through the ordered start-date list
- After the final start date, rotation wraps to the beginning

This ensures equitable exposure over time without tracking history.

---

## 7. Handling Fewer Than Maximum REA Children

When fewer than the maximum number of REA children exist:

- The round-robin sequence contracts to the ACTIVE set
- No placeholders or reserved slots are created
- Allocation proceeds normally until platform max is reached

No special handling or compensatory logic is permitted.

---

## 8. Unallocated Articles

Articles that are not allocated to a given platform due to platform maximums:

- Remain valid and published
- May appear in:
  - Email amplification guidance
  - SMS announcements (via Account Hub reference)
  - Optional, subscriber-executed platforms
- Do not generate exceptions, warnings, or backlog

Non-allocation is a **normal and expected outcome**.

---

## 9. Explicit Prohibitions

Allocation logic must never:

- Use engagement, performance, or visibility data
- Rank articles by perceived importance
- Guarantee per-article platform exposure
- Adjust mid-cycle
- Reallocate based on subscriber behavior
- Carry state beyond anchor rotation

Any such behavior violates this doctrine.

---

## 10. Disclosure Relationship

The results of allocation logic may be **rendered for visibility** in the Account Hub but must not:

- Be editable
- Be overrideable
- Be framed as tasks or obligations

Allocation explains **what appears where**, not **what must be done**.

---

## 11. Governance Alignment

This Execution Doctrine operates under:

- ED-P4-Account-Hub-Disclosure-Rendering
- ED-P4-Account-Hub-Disclosure-Data-Contract
- ED-P4-Authority-Hub-Disclosure-Rendering

It introduces no execution authority and no system of record.

---

## 12. Lock Statement

> Content-to-platform allocation is deterministic, capped, and cycle-scoped.  
> Allocation respects platform maximums and rotates exposure fairly over time without using performance signals or subjective judgment.

---

**END — ED-P4-Account-Hub-Disclosure-Allocation-Logic**
