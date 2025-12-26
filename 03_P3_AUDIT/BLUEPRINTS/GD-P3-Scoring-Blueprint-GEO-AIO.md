# SCORING BLUEPRINT - GEO & AIO  

---

## DOCUMENT METADATA

**Document Type:** General Document (GD)  
**Pillar:** P3 — Audit  
**Document Title:** P3 Scoring Blueprint — GEO & AIO  
**Filename:** GD_P3_SCORING_BLUEPRINT_GEO_AIO.md  

**Version:** v1.0  
**Status:** LOCKED  
**Created:** 2025-12-26  
**Last Updated:** 2025-12-26  

**Canonical GitHub Location:**  
/dga-platform/03_P3_AUDIT/REGISTRIES/GD_P3_SCORING_BLUEPRINT_GEO_AIO.md  

**Consumed By:**
- BP-P3-AUDIT-EXECUTION
- BP-P3-DELTA-EVALUATION
- P3 Audit Runner (R-Agent)
- Governance Review

**Produces:**
- Authoritative scoring rules for GEO and AIO
- Factor definitions, weights, and marking guidance

**Non-Goals (Explicit):**
- This document does not define execution order or workflows
- This document does not define automation triggers or schedules
- This document does not authorize discovery, scraping, or enrichment
- This document does not define content creation or publishing (P4)
- This document does not define relationship activation (P5)

---

## 1. Purpose

This General Document defines the **canonical scoring model** for the P3 Audit.

It establishes:
- what is scored
- how much each factor may contribute
- how partial credit is assigned
- how GEO and AIO differ in intent
- how incremental improvements are reflected over time

This document is the **single source of truth** for P3 scoring.  
All execution logic must defer to this registry.

---

## 2. Scoring Philosophy (Global)

All P3 scoring adheres to the following principles:

- Scores are **bounded** by defined maxima
- Partial credit is preferred over binary outcomes
- Absence of observable evidence yields a score of 0.0
- No inferred, predicted, or speculative signals are permitted
- Improvements must map to observable changes
- Scores must be explainable to a non-technical subscriber
- GEO stabilizes; AIO compounds

---

## 3. Score Structure Overview

The P3 Audit consists of two independent scoring domains:

| Domain | Max |
|------|-----|
| GEO — Entity Legitimacy & Corroboration | 10.0 |
| AIO — Answer Inclusion & Optimization | 10.0 |
| **P3 Total** | **20.0** |

Each domain is composed of weighted factors defined below.

---

# PART I — GEO  
Entity Legitimacy & Corroboration (10.0)

## GEO Definition

GEO answers one question:

**Is this entity real, attributable, and independently corroborated across the web?**

GEO does not measure:
- performance
- rankings
- marketing quality
- optimization sophistication

---

## GEO Factor Summary

| Factor | Max |
|------|----|
| Google Business Profile | 3.0 |
| Reviews (Independent Client Feedback) | 2.0 |
| Website (Authority Surfaces) | 3.0 |
| Third-Party Mentions & Trust Network | 1.0 |
| Social Media Activity Signals | 0.5 |
| Other Profiles (Identity Surfaces) | 0.5 |
| **Total GEO** | **10.0** |

---

## GEO Factor 1 — Google Business Profile (3.0)

### Definition  
Measures Google-validated existence, attribution, and configuration clarity.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| GBP exists and is attributable | 1.0 |
| Category relevance | 0.5 |
| NAP completeness | 0.5 |
| Profile completeness | 0.5 |
| Verification and activity signals | 0.5 |

### Marking Examples
- Exists but poorly configured → 1.6–2.0  
- Well configured, lightly maintained → 2.2–2.6  
- Complete, verified, consistent → 2.7–3.0  

Service-area and address-based profiles are treated equally.

---

## GEO Factor 2 — Reviews (Independent Client Feedback) (2.0)

### Definition  
Measures independent, third-party, client-generated evidence of service delivery over time.

### Included Platforms
- Google Reviews (primary)
- Rate-My-Agent
- Trustpilot
- Other credible vertical review platforms

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Reviews present | 0.5 |
| Quantity threshold (aggregate) | 0.5 |
| Temporal spread | 0.5 |
| Rating consistency | 0.5 |

### Marking Examples
- No reviews → 0.0  
- Few or dated reviews → 0.6–1.0  
- Consistent moderate history → 1.2–1.6  
- Strong, stable, multi-platform → 1.7–2.0  

Reviews strengthen confidence but do not directly contribute to AIO.

---

## GEO Factor 3 — Website (Authority Surfaces) (3.0)

### Definition  
Measures the presence of crawlable, attributable authority surfaces usable by AI systems.

### Authority Surface Classes
- Owned first-party website
- Delegated brokerage profile
- Authority Hub (DGA-controlled)

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Ownership primacy | 1.25 |
| Delegated authority presence | 0.75 |
| Crawlable and public | 0.5 |
| Entity attribution clarity | 0.5 |
| Structured reference content | 0.5 |
| Authority Hub presence | 0.25 |

### Marking Examples
- Brokerage profile only → ~1.8–2.1  
- Personal website only → ~2.4–2.7  
- Website + Authority Hub → 3.0  

Authority Hub reinforces but does not replace ownership primacy.

---

## GEO Factor 4 — Third-Party Mentions & Trust Network (1.0)

### Definition  
Measures independent corroboration and structured professional relationships.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Independent third-party mentions | 0.5 |
| Trust Network corroboration | 0.5 |

### Marking Examples
- Association or chamber listing → partial  
- Media or industry mentions → stronger  
- Verified Trust Network relationships → additive  

Trust Network is corroborative, not client feedback.

---

## GEO Factor 5 — Social Media Activity Signals (0.5)

### Definition  
Measures minimal public activity presence, not engagement or marketing performance.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| At least one active profile | 0.25 |
| Evidence of recent activity | 0.25 |

Follower counts and engagement metrics are excluded.

---

## GEO Factor 6 — Other Profiles (Identity Surfaces) (0.5)

### Definition  
Measures identity coherence across non-review, non-social platforms.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| At least one credible profile | 0.25 |
| Consistency across profiles | 0.25 |

Includes LinkedIn, brokerage directories, licensing registries, and associations.

---

# PART II — AIO  
Answer Inclusion & Optimization (10.0)

## AIO Definition

AIO answers one question:

**Would an AI system confidently include this entity when answering a relevant question?**

AIO measures usability by AI systems, not existence.

---

## AIO Factor Summary

| Factor | Max |
|------|----|
| Situation Coverage | 3.0 |
| Content Extractability & Structure | 3.0 |
| First-Party Authority Signals | 2.0 |
| AI Surface Presence | 2.0 |
| **Total AIO** | **10.0** |

---

## AIO Factor 1 — Situation Coverage (3.0)

### Definition  
Measures how many real-world situations are explicitly addressed in AI-readable language.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Core service situations | 1.0 |
| Secondary and edge situations | 1.0 |
| Geographic and role clarity | 1.0 |

### Marking Examples
- Generic descriptions → 0.4–0.7  
- Multiple vague mentions → 0.8–1.4  
- Structured situation sections → 1.8–2.4  
- Deep long-form coverage → 2.5–3.0  

---

## AIO Factor 2 — Content Extractability & Structure (3.0)

### Definition  
Measures how reliably AI can extract clean answers without inference.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Declarative headings | 1.0 |
| Answer-dense paragraphs | 1.0 |
| Structural consistency | 1.0 |

### Marking Examples
- Narrative blog style → 0.3–0.8  
- Mixed structure → 1.0–1.8  
- Well-structured pages → 2.0–2.6  
- Authority Hub canonical pages → 2.7–3.0  

---

## AIO Factor 3 — First-Party Authority Signals (2.0)

### Definition  
Measures AI trust in the entity as a safe source of advice.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Entity clarity and credentials | 0.75 |
| Authorship and attribution | 0.5 |
| Authority Hub canonical presence | 0.75 |

Authority Hub carries near-first-party weight for AIO.

---

## AIO Factor 4 — AI Surface Presence (2.0)

### Definition  
Measures observed inclusion or persistence in AI-generated outputs.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Evidence of AI citation or summarization | 1.0 |
| Persistence across queries or time | 1.0 |

### Day-00 Expectation
Most baseline audits score 0.0–0.5 here.  
This is expected and honest.

---

## 4. Final Notes

- GEO stabilizes early; AIO compounds over time
- Authority Hub primarily drives AIO improvement
- Incremental changes must be visible in 30-day cycles
- This document is authoritative and binding

---

**END — GD_P3_SCORING_BLUEPRINT_GEO_AIO**
