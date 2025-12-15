# ED — P2 — GBP Primary Category Governance

Authoritative execution doctrine governing how Google Business Profile (GBP) categories are detected, stored, interpreted, and applied across the DGA platform

---

## DOCUMENT METADATA

**Document Type:** Execution Doctrine (ED)
**Pillar:** P2 — Intake & Onboarding
**Title:** Google Business Profile (GBP) Primary Category — Detection, Governance & Usage Rules
**Filename:** ED_P2_GBP_PRIMARY_CATEGORY_GOVERNANCE.md

**Version:** v1.0
**Status:** Active
**Created:** 2025-12-15
**Last Updated:** 2025-12-15

**Owned By:** DGA Core Platform
**Enforced By:** Replit AI-Agent / Audit & Content Execution Layer

---

## 1. Doctrine Purpose

This Execution Doctrine defines the **non-negotiable rules** governing the use of **Google Business Profile (GBP) categories** within the DGA platform.

Its purpose is to ensure:

* consistent entity classification
* AI visibility alignment (GEO / AIO)
* deterministic execution behavior
* protection against category drift, misalignment, or over-interpretation

GBP categories are treated as **classification anchors**, not identity definitions.

---

## 2. Core Principles

1. **Primary Category Is the Anchor**
   Only the GBP *Primary Category* is used for execution alignment.

2. **Secondary Categories Are Observational**
   Additional GBP categories provide context only and never alter execution logic.

3. **Scan-Derived Truth**
   GBP category data is derived from scans, not self-reported inputs.

4. **Adaptive, Not Reactive**
   Category changes affect future cycles only and never retroactively.

5. **No Category Enforcement**
   DGA never overrides or forces GBP category choices.

---

## 3. Definitions

* **GBP Primary Category:** The single category designated by Google as the business’s primary classification
* **GBP Secondary Categories:** Supporting categories visible on the GBP
* **Profession Object:** DGA’s normalized internal classification used for routing, governance, and execution
* **Category Snapshot:** Stored record of GBP category data at a point in time

---

## 4. Category Detection & Intake

### 4.1 Source of Truth

* The **GBP URL** provided during onboarding is the authoritative source
* Category data is extracted via automated scan
* Account holders are not required to self-report category names

### 4.2 Stored Fields

The following fields MAY be stored as part of the account record:

* `gbp_primary_category`
* `gbp_secondary_categories[]`
* `gbp_last_verified_date`

These values represent a **snapshot**, not a permanent configuration.

---

## 5. Relationship to Profession Classification

### 5.1 Separation of Concerns

* GBP Primary Category informs the **Profession Object**
* Profession Object governs:

  * schema recommendations
  * content framing guardrails
  * audit interpretation

The GBP category does not:

* define voice (VBP)
* define delivery preferences (IIP)
* define legal or regulated titles
* define URL slug structure directly

---

## 6. Execution Usage Rules

### 6.1 Audit (P3)

During audits, GBP Primary Category is used to:

* contextualize findings
* interpret alignment or misalignment
* identify category-consistent opportunities

Secondary categories MAY be referenced descriptively but never as decision drivers.

---

### 6.2 Content Creation (P4)

During content creation:

* GBP Primary Category provides **classification guardrails**
* Content tone, examples, and framing must not contradict the primary category

GBP category must not:

* override VBP voice
* restrict niche focus
* constrain expertise expression

---

### 6.3 Subscriber Communications (P5)

GBP category may be referenced in:

* audit summaries
* recommendations
* explanatory communications

Delivery style remains governed exclusively by IIP or W-IIP.

---

## 7. Category Change Handling

### 7.1 Detection

* GBP category is re-evaluated during each audit scan
* Changes between snapshots are detected automatically

### 7.2 Impact Rules

When a category change is detected:

* The change is flagged in audit context
* No retroactive content changes occur
* Future content cycles align to the new category

No immediate reprocessing is permitted.

---

## 8. Prohibited Behaviors

DGA systems MUST NOT:

* infer identity beyond GBP classification
* blend primary and secondary categories
* recommend frequent category switching
* auto-correct or overwrite GBP categories
* hard-bind slugs or titles to GBP category strings

---

## 9. Governance Hierarchy

This Execution Doctrine overrides:

* SOP-level interpretations
* Guide-level guidance
* informal operational practices

Any change requires an updated ED.

---

## 10. Auditability & Traceability

* All GBP category snapshots must be timestamped
* Historical snapshots are retained for reference
* Execution always resolves against the **latest verified snapshot**

---

END — ED — GBP Primary Category Governance
