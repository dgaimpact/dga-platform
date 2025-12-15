# BP–P2–VOICE BLUEPRINT AND INFORMATION INTAKE PROFILE

> **Subtitle:** Governs how professional voice is captured for content creation and how information-delivery preferences are captured for system communications, with strict separation of purpose and authority.

---

## DOCUMENT METADATA

**Document Type:** Blueprint (BP)
**Pillar:** P2 — Intake & Onboarding
**Blueprint Title:** Voice Blueprint & Information Intake Profile
**Filename:** BP_P2_VOICE_BLUEPRINT_AND_INFORMATION_INTAKE_PROFILE.md

**Version:** v1.0
**Status:** Governing Authority (Active)
**Created:** 2025-12-15
**Last Updated:** 2025-12-15

**Owned By:** DGA Core Platform
**Governing Authority:**

* 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
* 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md

---

## FOUNDER DOCTRINE

Voice integrity and communication clarity are not the same thing.

This Blueprint exists to permanently prevent those two concepts from being blended.

DGA content must sound like the professional.
DGA communications must respect how the professional prefers to receive information.

If those signals are ever mixed, the system loses trust, authenticity, and scale integrity.

This Blueprint therefore enforces a **hard structural separation** between:

* outward-facing voice used for content creation, and
* inward-facing preferences used for system communications.

No system convenience, automation shortcut, or downstream pressure may override this separation.

---

## TABLE OF CONTENTS

1. Purpose & Authority
2. Problem Statement
3. Scope — What This Blueprint Governs
4. Explicit Exclusions — What This Blueprint Does NOT Govern
5. Core Definitions
6. Foundational Principles
7. Invariants & Non-Negotiables
8. Pillar Ownership & Responsibilities
9. Relationships to Other Pillars
10. Downstream Enforcement & Consumption Rules
11. Change, Replacement & Persistence Rules
12. Compliance & Auditability
13. Lock Statement

---

## 1. Purpose & Authority

This Blueprint defines the **authoritative rules** for how DGA captures, stores, and applies:

* the **Voice Blueprint (VBP)** used for content creation, and
* the **Information Intake Profile (IIP)** used for communications *to* the account holder.

This document is **governing**, not advisory.

If any Execution Doctrine, AI agent, SOP, or system behavior conflicts with this Blueprint, the system behavior must be corrected.

---

## 2. Problem Statement

Without strict governance, AI systems naturally blend:

* how someone sounds publicly, and
* how they prefer to receive information privately.

That blending creates:

* inauthentic content,
* poor audit and recommendation delivery,
* erosion of professional trust, and
* scaling failure.

This Blueprint solves that problem by defining **two distinct profiles with non-overlapping authority**.

---

## 3. Scope — What This Blueprint Governs

This Blueprint governs:

* creation paths for VBP and IIP
* authority hierarchy between interview-based and scan-derived profiles
* storage, persistence, and replacement rules
* how Replit and downstream systems may consume each profile
* PB Subscriber context for referral-partner interviews

---

## 4. Explicit Exclusions — What This Blueprint Does NOT Govern

This Blueprint does **not** govern:

* audit scoring logic (P3)
* content topics or publishing mechanics (P4)
* relationship cadence or outreach (P5)
* prospect qualification (P1)

---

## 5. Core Definitions

### 5.1 Voice Blueprint (VBP)

A **VBP** captures how an account holder communicates outward.

It governs:

* tone
* sentence structure
* framing and explanations
* storytelling patterns
* confidence and restraint signals

**VBP is used ONLY for content creation.**

It applies to:

* blogs
* social posts
* public-facing emails
* Authority Hub content

VBP must never influence audit delivery, recommendations, or internal communications to the account holder.

---

### 5.2 Information Intake Profile (IIP)

An **IIP** captures how an account holder prefers to receive information.

It governs:

* audit report formatting
* recommendation email structure
* level of detail vs summary
* delivery sequencing and tone

**IIP is NEVER used for content creation.**

---

### 5.3 Web-Derived VBP (W-VBP)

A **W-VBP** is a fallback voice profile generated via scan when no interview-based VBP exists.

It is:

* internal only
* non-disclosed
* automatically replaceable

---

## 6. Foundational Principles

* Voice must be captured, not invented
* Preferences must be respected, not inferred beyond necessity
* Interviews outrank scans
* Replacement is permitted; blending is not
* Systems reference profiles; they do not reinterpret them

---

## 7. Invariants & Non-Negotiables

The following rules must never be violated:

1. VBP → content creation only
2. IIP → account-holder communications only
3. No blending between VBP and IIP
4. Interview-based VBP overrides all scan-derived profiles
5. W-VBP exists only until replaced
6. Replit references profiles; it does not author authority

---

## 8. Pillar Ownership & Responsibilities

This Blueprint is owned by **P2 — Intake & Onboarding** because:

* voice and preference capture occur at entity normalization
* accuracy at intake protects all downstream pillars

P2 is responsible for:

* ensuring a VBP or W-VBP exists before content creation
* ensuring an IIP exists before audit delivery at scale

---

## 9. Relationships to Other Pillars

* **P1** may collect preliminary signals but creates no authority
* **P3** consumes IIP for audit delivery only
* **P4** consumes VBP for content creation only
* **P5** may reference outputs but owns no profile authority

---

## 10. Downstream Enforcement & Consumption Rules

Replit and all AI agents must:

* reference VBP when generating content
* reference IIP when generating audits or communications
* default to W-VBP and provisional IIP only when none exist
* immediately defer to uploaded custom profiles when present

Execution details are governed by downstream EDs, including the Replit Audit Execution KB fileciteturn6file0.

---

## 11. Change, Replacement & Persistence Rules

* Custom VBPs and IIPs persist indefinitely
* W-VBPs and provisional IIPs persist only until replacement
* Replacement requires deletion, not merging
* No retroactive rewriting of published content

---

## 12. Compliance & Auditability

Compliance is verified by:

* presence of exactly one active VBP or W-VBP
* presence of exactly one active IIP
* execution logs showing correct profile usage

Any violation is a system fault.

---

## 13. Lock Statement

> This Blueprint is authoritative and binding. Any system, document, or execution behavior that conflicts with this Blueprint must be corrected to align with it.

---

**END — BP–P2–VOICE BLUEPRINT AND INFORMATION INTAKE PROFILE**
