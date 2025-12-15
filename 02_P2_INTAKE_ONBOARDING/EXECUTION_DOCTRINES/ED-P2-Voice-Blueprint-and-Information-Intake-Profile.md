# ED–P2–VOICE BLUEPRINT AND INFORMATION INTAKE PROFILE

Governs how Voice Blueprint Profiles (VBP) and Information Intake Profiles (IIP) are operationalized, resolved, and enforced across DGA systems, with deterministic execution rules and zero cross-contamination.

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)
**Pillar:** P2 — Intake & Onboarding
**Execution Doctrine Title:** Voice Blueprint & Information Intake Profile — Execution Rules
**Filename:** ED_P2_VOICE_BLUEPRINT_AND_INFORMATION_INTAKE_PROFILE.md

**Version:** v1.0
**Status:** Enforced (Active)
**Created:** 2025-12-15
**Last Updated:** 2025-12-15

**Owned By:** DGA Core Platform
**Governing Authority:**

* BP_P2_VOICE_BLUEPRINT_AND_INFORMATION_INTAKE_PROFILE.md
* 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
* 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md

---

## 1. Purpose

This Execution Doctrine defines **how DGA systems must execute against an existing Voice Blueprint Profile (VBP) and Information Intake Profile (IIP)**.

It translates Blueprint-level governance into **deterministic system behavior** for:

* Replit AI agents
* Audit generation
* Content creation
* Account-holder communications

This ED exists to prevent:

* voice drift
* delivery friction
* misuse of preference data
* AI improvisation beyond authority

If execution conflicts with this ED, execution is invalid.

---

## 2. Context

The Blueprint establishes *what is governed*.
This ED establishes *how that governance is enforced in practice*.

VBP and IIP are intentionally separate constructs:

* VBP defines outward expression
* IIP defines inward delivery

AI systems will naturally attempt to blend these unless explicitly constrained.
This ED provides those constraints.

---

## 3. Core Execution Model

### 3.1 Execution Preconditions

Before any downstream execution may occur:

* The account must be active (P2 complete)
* The system must resolve:

  * one (and only one) active VBP or W-VBP
  * one (and only one) active IIP or provisional IIP

If resolution fails, execution must halt.

---

### 3.2 VBP Resolution Logic (Content Creation)

When generating content, the system must resolve VBP in the following order:

1. Custom interview-based VBP
2. Web-derived VBP (W-VBP)

Resolution hierarchy:

```
Custom VBP
↓
W-VBP
```

If neither exists, content generation must halt.

---

### 3.3 VBP Application Rules

When VBP is resolved:

* Apply VBP to:

  * tone
  * sentence structure
  * framing
  * narrative style

* Do NOT apply VBP to:

  * audit delivery
  * recommendation formatting
  * emails to the account holder

VBP governs **expression only**.

---

### 3.4 IIP Resolution Logic (Account-Holder Communications)

When communicating *to* the account holder, the system must resolve IIP in the following order:

1. Custom IIP
2. Provisional (scan-derived) IIP
3. Default neutral delivery

Resolution hierarchy:

```
Custom IIP
↓
Provisional IIP
↓
Neutral Default
```

---

### 3.5 IIP Application Rules

When IIP is resolved:

* Adapt:

  * information sequencing
  * level of detail
  * formatting
  * follow-up cadence

* Do NOT adapt:

  * content voice
  * brand tone
  * outward messaging

IIP governs **delivery mechanics only**.

---

## 4. Web Scan Fallback Behavior

### 4.1 When Web Scans Are Permitted

Web scans may be used only when:

* no custom VBP exists
* or no custom IIP exists
* and execution must proceed to maintain continuity

---

### 4.2 Web-Derived VBP (W-VBP)

Rules:

* internal and silent
* confidence-weighted
* stored until replaced
* deleted when a custom VBP is uploaded

No blending with custom VBP is permitted.

---

### 4.3 Provisional IIP

Rules:

* internal only
* silent
* used strictly for delivery mechanics
* replaced immediately when a custom IIP is uploaded

---

## 5. Storage, Replacement & Persistence

* Replit does not manage versions
* Replit references only what exists on file

Replacement behavior:

* custom VBP replaces W-VBP by deletion
* custom IIP replaces provisional IIP by deletion
* no retroactive rewriting of published content

---

## 6. Explicit Prohibitions

The following actions are strictly prohibited:

* using IIP during content creation
* using VBP to format audit delivery
* blending voice and delivery signals
* inferring urgency, pressure, or authority not explicitly defined

Any violation constitutes a system fault.

---

## 7. Failure & Halt Conditions

Execution must halt if:

* no VBP or W-VBP exists for content creation
* required upstream P2 data is missing
* profile resolution returns ambiguity

Silence is preferred over incorrect execution.

---

## 8. Compliance & Auditability

Systems must log:

* which profile was resolved (VBP, W-VBP, IIP)
* timestamp of resolution
* execution context (content vs communication)

Logs must allow post-hoc verification of compliance.

---

## 9. Change Notes

* v1.0 — Initial execution doctrine aligned to BP_P2_VOICE_BLUEPRINT_AND_INFORMATION_INTAKE_PROFILE

---

END — ED–P2–VOICE BLUEPRINT AND INFORMATION INTAKE PROFILE
