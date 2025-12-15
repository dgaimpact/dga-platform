# BP-P2 — Voice Blueprint & Information Intake Profile

**Document Type:** Blueprint (BP)
**Pillar:** P2 — Intake & Onboarding
**Version:** v1.0
**Status:** Governing Authority (Active)

**Pillar Ownership:** P2 — Intake & Onboarding
**Version:** v1.0
**Status:** Governing Authority (Active)

Owned By: DGA Core Platform
Governed By:

* 00_FOUNDATIONS/GOVERNANCE/DGA_BUSINESS_MODEL.md
* 00_FOUNDATIONS/GOVERNANCE/PILLAR_LOCK_REFERENCE.md

---

## 1. Purpose of P2 — Entity Voice & Information Intake Profile

This Blueprint governs **how an entity’s outward voice is defined and how information is delivered to that entity inside DGA**.

This pillar exists to:

* establish a normalized, durable **entity voice** for all outward-facing content
* establish a normalized, durable **information intake preference** for communications sent to the account holder
* prevent voice drift, delivery friction, and AI overreach
* protect downstream pillars from misapplied tone, formatting, or assumptions

This Blueprint defines **who the entity sounds like** and **how the entity is communicated with**.

---

## 2. What This Pillar Owns

This pillar owns all systems, documents, and logic related to:

* Voice Blueprint Profile (VBP) definition and authority
* Information Intake Profile (IIP) definition and authority
* Storage, replacement, and precedence of VBP and IIP artifacts
* Validation that a VBP or fallback exists before downstream execution
* Validation that an IIP or fallback exists for account-holder communications

This pillar defines **the communicative identity contract** for every active DGA entity.

---

## 3. What This Pillar Explicitly Does NOT Own

This pillar does **not** own:

* Content strategy or publishing mechanics (P4)
* Audit interpretation or scoring logic (P3)
* Relationship cadence or outreach execution (P5)
* Prospect qualification or diagnostics (P1)
* Workflow steps, prompts, or automation logic (Execution Doctrines)

If an action is required outside this scope, ownership transfers immediately to the appropriate pillar.

---

## 4. Core Definitions

### 4.1 Voice Blueprint Profile (VBP)

A **Voice Blueprint Profile (VBP)** captures **how an entity communicates outward**.

A VBP governs:

* tone
* voice
* framing
* messaging patterns
* narrative continuity

A VBP is used **exclusively** for:

* blogs
* social posts
* scripts
* long-form articles
* public-facing marketing emails

A VBP is **never** used for:

* audit delivery
* recommendation summaries
* emails sent to the account holder
* system or operational communications

---

### 4.2 Information Intake Profile (IIP)

An **Information Intake Profile (IIP)** captures **how an entity prefers to receive information from DGA**.

An IIP governs:

* audit report delivery style
* recommendation summaries
* sequencing (context vs summary)
* level of detail
* follow-up cadence

An IIP is used **exclusively** for communications *to* the account holder.

An IIP is **never** used for:

* content creation
* brand voice or tone
* audience-facing messaging
* narrative framing

> **VBP governs expression.**
> **IIP governs delivery.**

These profiles are intentionally separate and must never be blended.

---

## 5. Creation Paths & Authority

### 5.1 Custom Interview-Based VBP (Preferred)

A custom VBP is created via a structured, human-led interview conducted outside of Replit.

Rules:

* treated as the highest authority
* uploaded to the account by DGA
* stored indefinitely
* referenced by all downstream systems
* remains active until explicitly replaced

AI systems must never reinterpret or override a custom VBP.

---

### 5.2 Web-Derived Voice Blueprint Profile (W-VBP)

A **W-VBP** may be created only when no custom VBP exists.

Source signals may include:

* website copy
* blog structure
* Google Business Profile descriptions
* LinkedIn bios and posts
* public social content

Rules:

* internal and silent
* provisional in confidence
* stored until replaced
* deleted when a custom VBP is uploaded
* never blended with a custom VBP

---

### 5.3 Custom Information Intake Profile (IIP)

A custom IIP is collected explicitly from the account holder.

Rules:

* governs all communications *to* the account holder
* stored indefinitely
* replaces any provisional IIP
* may be updated independently of the VBP

---

### 5.4 Provisional Information Intake Profile (IIP)

If no custom IIP exists, a **provisional IIP** may be inferred from observable signals such as:

* content density preferences
* formatting patterns
* professional vs casual presentation
* CTA clarity and structure

Rules:

* internal only
* silent
* used strictly for delivery mechanics
* automatically replaced by a custom IIP

---

## 6. Governing Constraints

The following constraints are non-negotiable:

* VBP must never be used for audit delivery or internal communications
* IIP must never be used for content creation
* No system may blend VBP and IIP inputs
* No AI may infer urgency, tone, or authority beyond what is explicitly defined
* Replacement occurs by deletion and substitution, never merging

Violation of these constraints constitutes a system fault.

---

## 7. Storage, Replacement, and Persistence

* Replit does not manage versions
* Replit references only what exists on file

Replacement behavior:

* when a custom VBP is uploaded, any W-VBP is deleted
* when a custom IIP is uploaded, any provisional IIP is discarded
* new profiles apply to all future execution only
* no retroactive rewriting occurs

---

## 8. Downstream Consumption

* **P3 — Audit**

  * consumes VBP for interpretive context only
  * consumes IIP for audit delivery only

* **P4 — Content Creation & Publishing**

  * consumes VBP only
  * must never reference IIP

* **P5 — Relationship Continuity**

  * consumes IIP only
  * must never reference VBP

---

## 9. Key Principle

> **Consistency of voice builds trust.**
> **Clarity of delivery preserves relationships.**

This principle must remain true even as systems evolve.

---

END — BP P2 Entity Voice & Information Intake Profile
