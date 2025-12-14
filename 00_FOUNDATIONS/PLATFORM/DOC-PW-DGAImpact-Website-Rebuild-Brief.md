# DGAImpact.com — Website Rebuild Brief

**Version:** v1.0
**Created:** 2025-12-14
**Status:** Execution Reference (Build Brief)

Applies To: Web Build / Rebuild (Replit or Equivalent)
Governing References:

* DOC–PW–DGAImpact-Platform-Definition
* DOC–PW–DGAImpact-Downstream-Pillar-Implications
* DGA Business Model

---

## 1. Purpose of This Brief

This document translates the **approved DGAImpact.com Platform Definition** into a **clear, non-ambiguous website rebuild brief**.

It exists to:

* guide technical implementation without reinterpretation
* prevent feature creep during build
* ensure structural alignment with DGA governance
* allow delegation to developers without repeated clarification

This brief defines **what must be built**, **what must not be built**, and **how decisions are validated**.

---

## 2. Core Build Principle (Non-Negotiable)

> **The website is a reflection layer only.**

It must:

* read data
* present state
* expose governed content

It must never:

* execute actions
* trigger workflows
* mutate system state
* substitute for audits, intake, or human processes

If a proposed feature violates this rule, it is rejected.

---

## 3. Domain & Routing Structure

Single primary domain:

* **dgaimpact.com**

All surfaces live as **subdirectories**, not separate domains.

### Required High-Level Routes (Illustrative)

* `/` → DGA Public Site (profession-neutral)
* `/mortgage-professionals/` → MP education & intake
* `/real-estate-professionals/` → REA education & intake
* `/authority/` → DGA Authority Hub (public)
* `/trust-network/` → DGA Trust Network (public)
* `/account/` → DGA Account Hub (private, gated)

Exact slugs may change, but **surface separation must remain intact**.

---

## 4. Surface-Specific Build Requirements

### 4.1 DGA Public Site

**Audience:** Prospects, AI systems, general public

**Required Capabilities:**

* static and dynamic content pages
* profession-neutral entry
* MP and REA routing
* pricing presentation
* consultation booking links

**Content Constraints:**

* meta-level only (GEO, AIO, Omni-Presence)
* no profession-, niche-, or market-specific advice

**SEO / AI:**

* fully indexable
* schema-friendly
* optimized for DGA-category authority only

---

### 4.2 DGA Authority Hub

**Audience:** Public, AI systems

**Required Capabilities:**

* long-form article display
* author attribution to professional account holders
* persistent URLs
* category and tag support (market, niche, role)

**Content Source:**

* populated exclusively from governed content pipelines

**Constraints:**

* no dashboards
* no private data
* no editing or execution controls

---

### 4.3 DGA Trust Network

**Audience:** Public, AI systems

**Required Capabilities:**

* directory-style listing pages
* filters:

  * region
  * territory
  * profession
  * niche
* individual profile pages

**Profile Requirements:**

* photo
* NAP-aligned contact info
* external website link
* booking link
* UTM-linked Authority Hub references

**Constraints:**

* no ranking, scoring, or promotion logic
* no marketplace behavior

---

### 4.4 DGA Account Hub (Private)

**Audience:** Account holders only

**Access Control:**

* account-number gated
* URL-accessible
* blocked from indexing

**Required Capabilities:**

* content archive view
* publishing status (past / upcoming)
* mandatory vs optional platform indicators
* downloadable content for optional platforms

**Constraints:**

* read-only
* no triggers
* no execution

---

## 5. Authentication & Access Rules

* Public surfaces require no authentication
* Account Hub requires explicit authentication
* No mixed public/private states on the same page
* Private pages must:

  * block indexing
  * block AI ingestion

---

## 6. Analytics & Tracking

**Allowed:**

* page views
* content engagement
* directional visibility signals
* UTM tracking between surfaces

**Forbidden:**

* ROI claims
* lead attribution guarantees
* performance scoring

Analytics language must remain observational.

---

## 7. CMS & Data Handling

* Website consumes data from authoritative systems
* Website does not store canonical data
* Write access is prohibited except for basic form submission (intake, booking)

If data correctness matters, it must live upstream.

---

## 8. Change Control During Build

Any proposed addition must answer:

1. Which surface does this belong to?
2. Which pillar owns the behavior?
3. Does this introduce execution or authority drift?

If unclear, the change is paused.

---

## 9. Acceptance Criteria (Go/No-Go)

The rebuild is considered acceptable only if:

* all four surfaces are clearly separated
* no execution logic exists on the site
* content boundaries are enforced
* private surfaces are non-indexed
* analytics language remains compliant

---

## 10. Lock Statement

This brief enforces the **already-approved platform definition**.

Implementation must follow intent.

When convenience conflicts with governance, **governance wins**.

---

**END — DGAImpact.com Website Rebuild Brief**
