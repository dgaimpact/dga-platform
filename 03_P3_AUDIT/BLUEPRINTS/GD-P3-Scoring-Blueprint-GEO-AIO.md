# Audit Scoring Blueprint — GEO & AIO  
Canonical Weighted Scoring Model

Version: v1.0  
Status: LOCKED  
Applies To: P3 Audit Runner (DAY-00, SNAPSHOT, DELTA, ADHOC)  
Audience: R-Agent, Audit Engine, Governance Review  

---

## 1. Purpose

This document defines the authoritative scoring blueprint for the P3 Audit.

It governs how weighted, fractional scores are assigned for:

- GEO — Entity Legitimacy & Corroboration (10.0)
- AIO — Answer Inclusion & Optimization (10.0)

The blueprint exists to ensure scoring is:

- deterministic  
- bounded  
- monotonic (only improves with improvement)  
- explainable to subscribers  
- suitable for 30-day deltas  

R-Agent MUST consume this document as the source of truth.  
R-Agent MUST NOT invent weights, thresholds, or interpretations.

---

## 2. Global Scoring Rules (Non-Negotiable)

- All factor scores are capped at their defined maximum.
- Sub-signals are additive, never multiplicative.
- Partial credit is preferred over binary scoring.
- Absence of observable evidence = score 0.0.
- No inference, prediction, or intent modeling at P3.
- Improvements must map to observable changes.
- Scores may change only when inputs change.

---

# PART I — GEO  
Entity Legitimacy & Corroboration (10.0)

GEO answers one question:

Is this entity real, attributable, and independently corroborated?

GEO does NOT measure performance, marketing quality, optimization, or recency.

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
| Total GEO | 10.0 |

---

## GEO Factor 1 — Google Business Profile (3.0)

### Definition  
Measures Google-validated existence, attribution, and configuration clarity.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| GBP exists & attributable | 1.0 |
| Category relevance | 0.5 |
| NAP completeness | 0.5 |
| Profile completeness | 0.5 |
| Verification & activity signals | 0.5 |

### Marking Examples
- Exists but misconfigured → 1.6–2.0  
- Well configured, lightly maintained → 2.2–2.6  
- Strong, complete, verified → 2.7–3.0  

Service-area and address-based profiles are treated equally.  
Clarity failures are configuration failures, not business-model failures.

---

## GEO Factor 2 — Reviews (Independent Client Feedback) (2.0)

### Definition  
Measures independent, third-party, client-generated evidence of service delivery over time.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Reviews present (any credible platform) | 0.5 |
| Quantity threshold (aggregate) | 0.5 |
| Temporal spread (aggregate) | 0.5 |
| Rating consistency (aggregate) | 0.5 |

### Platforms Included
- Google Reviews (primary)
- Rate-My-Agent
- Trustpilot
- Other credible vertical platforms (weighted internally)

### Marking Examples
- No reviews → 0.0  
- Few, old reviews → 0.6–1.0  
- Consistent moderate history → 1.2–1.6  
- Strong, stable, multi-platform → 1.7–2.0  

Reviews do not contribute directly to AIO scoring.

---

## GEO Factor 3 — Website (Authority Surfaces) (3.0)

### Definition  
Measures the existence of crawlable, attributable authority surfaces usable by AI systems.

### Authority Surface Classes
- Owned first-party website
- Delegated brokerage profile (e.g. brokerage domain page)
- Authority Hub (DGA-controlled)

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Ownership primacy (first-party domain) | 1.25 |
| Delegated authority presence | 0.75 |
| Crawlable & public | 0.5 |
| Entity attribution (NAP, credentials) | 0.5 |
| Structured long-form reference content | 0.5 |
| Authority Hub presence | 0.25 |
| Total | 3.0 |

### Marking Examples
- Brokerage profile only → ~1.8–2.1  
- Personal website only → ~2.4–2.7  
- Website + Authority Hub → 3.0  

Authority Hub confirms legitimacy but does not replace ownership primacy.

---

## GEO Factor 4 — Third-Party Mentions & Trust Network (1.0)

### Definition  
Measures independent corroboration and structured professional relationships.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Independent third-party mentions | 0.5 |
| Trust Network corroboration | 0.5 |

### Examples
- Chamber of Commerce, association listing → partial  
- Media or industry features → stronger  
- Verified MP–REA Trust Network relationships → additive  

Trust Network is corroborative, not client feedback.

---

## GEO Factor 5 — Social Media Activity Signals (0.5)

### Definition  
Measures minimal public activity presence, not marketing performance.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| At least one active profile | 0.25 |
| Evidence of recent activity | 0.25 |

No engagement metrics are evaluated.

---

## GEO Factor 6 — Other Profiles (Identity Surfaces) (0.5)

### Definition  
Measures identity coherence across non-review, non-social platforms.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| At least one credible profile | 0.25 |
| Consistency across profiles | 0.25 |

Includes LinkedIn, brokerage directories, licensing registries, associations.

---

# PART II — AIO  
Answer Inclusion & Optimization (10.0)

AIO answers one question:

If an AI system is asked a relevant question, would it confidently include this entity in the answer?

AIO measures usability by AI systems, not legitimacy.

---

## AIO Factor Summary

| Factor | Max |
|------|----|
| Situation Coverage | 3.0 |
| Content Extractability & Structure | 3.0 |
| First-Party Authority Signals | 2.0 |
| AI Surface Presence | 2.0 |
| Total AIO | 10.0 |

---

## AIO Factor 1 — Situation Coverage (3.0)

### Definition  
Measures how many real-world situations are explicitly addressed in AI-readable language.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Core service situations | 1.0 |
| Secondary / edge situations | 1.0 |
| Geographic & role clarity | 1.0 |

### Marking Examples
- Generic description → 0.4–0.7  
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
| Entity clarity & credentials | 0.75 |
| Authorship & attribution | 0.5 |
| Authority Hub canonical presence | 0.75 |

Authority Hub carries near-first-party weight in AIO.

---

## AIO Factor 4 — AI Surface Presence (2.0)

### Definition  
Measures observed inclusion or persistence in AI-generated outputs.

### Sub-Signals

| Sub-Signal | Max |
|----------|-----|
| Evidence of AI citation | 1.0 |
| Persistence across queries or time | 1.0 |

### Day-00 Reality
Most Day-00 audits score 0.0–0.5 here.  
This is expected and honest.

---

## 3. Final Scoring Model

- GEO Score: /10.0  
- AIO Score: /10.0  
- P3 Total Score: /20.0  

GEO stabilizes early.  
AIO compounds over time.  

This separation ensures honest baselines and visible improvement driven by DGA execution.

---

End of Canonical Document
