# ED — P2 — Web‑Derived Profile Creation & Replacement

Execution Doctrine governing when and how W‑VBP and W‑IIP profiles are created, used, replaced, and archived

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)
**Pillar:** P2 — Intake & Onboarding
**Title:** Web‑Derived Voice Blueprint (W‑VBP) and Information Intake Profile (W‑IIP) — Creation & Replacement Rules
**Filename:** ED_P2_W_VBP_W_IIP_CREATION_AND_REPLACEMENT.md

**Version:** v1.0
**Status:** Active
**Created:** 2025-12-15
**Last Updated:** 2025-12-15

**Owned By:** DGA Core Platform
**Enforced By:** Replit AI‑Agent / Automation Layer

---

## 1. Doctrine Purpose

This Execution Doctrine defines the **non‑negotiable rules** governing:

* when Web‑Derived Voice Blueprint Profiles (W‑VBP) are created
* when Web‑Derived Information Intake Profiles (W‑IIP) are created
* how these profiles are used by runtime systems
* how and when they are replaced and archived

The objective is to **eliminate execution bottlenecks** without compromising voice integrity, delivery preferences, or system determinism.

---

## 2. Governing Principles

1. **Continuity Over Perfection**
   Execution must proceed even if interview‑based profiles are unavailable.

2. **Interview‑Derived Profiles Always Win**
   Custom VBP and IIP supersede all web‑derived profiles.

3. **Single Active Profile Rule**
   At any time, exactly one active VBP‑type file and one active IIP‑type file may exist per account.

4. **No Profile Blending**
   Voice and delivery profiles are never combined or cross‑referenced.

---

## 3. Definitions

* **VBP:** Interview‑derived Voice Blueprint Profile
* **IIP:** Interview‑derived Information Intake Profile
* **W‑VBP:** Web‑Derived Voice Blueprint Profile
* **W‑IIP:** Web‑Derived Information Intake Profile
* **ACTIVE:** GitHub directory containing the current authoritative profile files
* **ARCHIVE:** GitHub directory containing superseded historical profile files

---

## 4. Conditions for W‑VBP Creation

A W‑VBP **MUST** be created when **all** of the following conditions are true:

1. No interview‑derived VBP exists in `ACCOUNT_PROFILES/ACTIVE`
2. A content creation cycle is scheduled or underway
3. Delaying content creation would breach the execution timeline

A W‑VBP **MAY** be created during:

* Day‑00 onboarding cycles
* First 30‑day content cycle when interviews are pending

A W‑VBP **MUST NOT** be created if an interview‑derived VBP already exists.

---

## 5. Conditions for W‑IIP Creation

A W‑IIP **MUST** be created when **all** of the following conditions are true:

1. No interview‑derived IIP exists in `ACCOUNT_PROFILES/ACTIVE`
2. Subscriber‑facing communication is required
3. Delaying communication would impede onboarding, audit delivery, or continuity

A W‑IIP **MAY** be created independently of W‑VBP status.

---

## 6. Usage Rules (Hard Enforcement)

### 6.1 W‑VBP Usage

W‑VBP files:

* MAY be accessed **only** during content generation
* MUST NOT be accessed for:

  * audit reports
  * recommendations
  * subscriber emails

### 6.2 W‑IIP Usage

W‑IIP files:

* MAY be accessed **only** for subscriber‑facing communications
* MUST NOT be accessed for:

  * public content
  * voice modeling
  * Omni‑Presence assets

---

## 7. Replacement Rules

### 7.1 Replacement Trigger

Replacement occurs when:

* an interview‑derived VBP or IIP is uploaded and validated

### 7.2 Replacement Process (Deterministic)

Upon replacement:

1. The existing `*_CURRENT.md` file (W‑ or interview‑derived) is moved to `ACCOUNT_PROFILES/ARCHIVE`
2. The file is timestamped at time of archival
3. The new interview‑derived profile is written to `ACCOUNT_PROFILES/ACTIVE` as `*_CURRENT.md`
4. Runtime systems immediately resolve against the new ACTIVE file

---

## 8. Cycle Boundaries

* Profiles are resolved at the **start** of a content or communication cycle
* No mid‑cycle profile switching is permitted
* Updated profiles apply at the **next** execution boundary

---

## 9. Failure & Conflict Handling

If conflicting profiles are detected in ACTIVE:

* execution MUST halt
* an alert MUST be raised
* no fallback or heuristic resolution is permitted

---

## 10. Auditability & Traceability

* All replaced profiles MUST be archived
* Archived files are immutable
* ACTIVE directory represents the sole source of truth

---

## 11. Doctrine Authority

This Execution Doctrine overrides:

* SOP‑level interpretations
* Guide‑level guidance
* informal operational practices

Any deviation requires an updated ED.

---

END — ED — Web‑Derived Profile Creation & Replacement
