# Account Hub Disclosure Cadence Platform MAX Registry

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P4 — Content Creation & Publishing  
**Status:** Draft (Ready for Adoption)  
**Scope:** Canonical Cadence & Platform MAX Registry  
**Owned By:** DGA Core Platform  

---

## 1. Purpose

This Execution Doctrine defines the **canonical monthly cadence limits and platform maximums (MAXs)** used by Account Hub disclosure and allocation logic.

It exists to:

- Establish a **single source of truth** for platform ceilings  
- Prevent cadence drift, inflation, or optimization creep  
- Provide deterministic inputs to allocation logic  
- Ensure consistent behavior across SO, PB, and PB-Sub accounts  

This document defines **limits only**.  
It does not recommend behavior, trigger execution, or imply outcomes.

---

## 2. Governing Principles (Non-Negotiable)

All cadence and platform MAXs defined here are:

- **Hard caps** per 30-day cycle  
- **Consumed by allocation logic**, not interpreted  
- **Independent of performance or engagement**  
- **Not targets** and not guarantees of coverage  
- **Cycle-scoped**, with no rollover or carry-forward  

If a platform is not listed in this registry, it has **no defined MAX** and must not be allocated.

---

## 3. Applicability by Account Type

Unless otherwise stated, all MAXs apply uniformly to:

- **SO** (Solo subscribers)  
- **PB** (Primary Playbook account holders)  
- **PB-Sub** (REA child accounts)

PB scale occurs via **article volume**, not by increasing platform MAXs.

---

## 4. Canonical Platform MAXs (30-Day Cycle)

### 4.1 Mandatory / Common Platforms

| Platform | MAX / 30 Days | Notes |
|--------|---------------|------|
| Google Business Profile (GBP) | 6 | Local freshness cap |
| LinkedIn (Personal Profile) | 8 | Professional continuity ceiling |
| Facebook Business Page | 6 | Corroboration-focused |
| Instagram (Business Profile) | 6 | Static feed only |
| X (formerly Twitter) | 8 | Article-derived posts only |
| Threads | 8 | Optional, capped |
| Pinterest | 6 | Evergreen indexing |
| TikTok (Business) | 4 | Weekly maximum |
| YouTube (Channel / Shorts) | 4 | Weekly maximum |

Once the MAX is reached, no additional articles may be allocated to that platform in the cycle.

---

## 5. Email Cadence MAXs (Reference-Only)

Email amplification assets are **prepared but not executed** by DGA.

### Monthly Limits

| Channel | MAX / 30 Days | Scope |
|-------|----------------|-------|
| Email | 2 | Per account, per cycle |

Rules:

- Emails are **curated digests**, not per-article sends  
- Email assets are intended for **segmented audiences**  
- No additional emails are prepared beyond this cap  

---

## 6. SMS Cadence MAXs (Reference-Only)

SMS assets are optional and conditional.

### Monthly Limits

| Channel | MAX / 30 Days | Scope |
|-------|----------------|-------|
| SMS | 2 | General announcements only |

Rules:

- SMS links to the **Account Hub**, not individual articles  
- No niche targeting at the SMS layer  
- No execution or delivery is performed by DGA  

---

## 7. Relationship to Allocation Logic

- Platform MAXs defined here are **consumed directly** by:
  - ED-P4-Account-Hub-Disclosure-Allocation-Logic
- Allocation logic must:
  - Stop allocation when MAX is reached
  - Ignore remaining articles for that platform
  - Perform no redistribution or compensation

This registry contains **no logic** — only limits.

---

## 8. Explicit Prohibitions

This registry must never be used to:

- Increase posting frequency dynamically  
- React to engagement or performance  
- Override platform behavior  
- Create subscriber obligations  
- Justify execution volume  

Any behavior implying optimization violates this doctrine.

---

## 9. Governance Alignment

This Execution Doctrine operates under:

- ED-P4-Account-Hub-Disclosure-Rendering  
- ED-P4-Account-Hub-Disclosure-Data-Contract  
- ED-P4-Account-Hub-Disclosure-Allocation-Logic  

It introduces no execution authority and no system of record.

---

## 10. Lock Statement

> Platform and channel MAXs are fixed, cycle-scoped ceilings.  
> They constrain allocation and disclosure behavior without implying execution, obligation, or outcome.

---

**END — ED-P4-Account-Hub-Disclosure-Cadence-Platform-MAX-Registry**
