# Artifact Formatting & Platform Templates

> Human-facing, reference-only guide for P4 artifact generation and platform formatting

---

## DOCUMENT METADATA

**Document Type:** GUIDE  
**Intended Audience:** Replit AI-Agent developers, P4 content operators  
**Primary Use Case:** Provide platform-specific artifact formatting guidance  
**Related Pillar(s):** P4 — Content Creation & Publishing  
**Derived From:** ED–P4–CORE, BP–P4–Scope & Exclusions, REG–P4–ArtifactCategories  

**Version:** v1.0  
**Status:** Active  
**Created:** 2026-01-16  
**Last Updated:** 2026-01-16  
**Owned By:** DGA Core Platform

---

## 1. Purpose of This Guide

Provide **structured formatting and platform guidance** for all P4 artifact types, ensuring that artifacts:  
- Comply with ED–P4–CORE rules  
- Are traceable to P3 audit Top-3 GEO pressure points  
- Preserve canonical entity declaration first  
- Apply VBP voice only to subordinate narrative  
- Adhere to platform-specific formatting constraints  

No content is included; this is strictly operational guidance.

---

## 2. When to Use This Guide

- When configuring **R-Agent** to generate artifacts per platform  
- When verifying artifacts against **ED–P4–CORE** and **REG–P4–ArtifactCategories**  
- During the 30-day P4 execution cycle  

**Do not use for:**  
- Human content creation  
- Audit interpretation  
- Editing published artifacts  

---

## 3. What This Guide Is (and Is Not)

### What This Guide *Is*
- Operational reference for artifact formatting per platform  
- Guidance to ensure **audit-driven, traceable content**  
- Supports R-Agent and P4 system operators  

### What This Guide *Is Not*
- Authoritative binding document (BP or ED)  
- Source of actual content / copy  
- Replacement for ED enforcement  

---

## 4. Key Principles to Keep in Mind

- One artifact per pressure point  
- Canonical entity declaration always first and immutable  
- Subordinate narrative follows VBP only  
- Traceability metadata attached (P3 audit ID + pressure point ID + timestamp)  
- Platform-specific rules adapt **format**, not content  
- All P4 exclusions enforced  

---

## 5. How to Use This Guide (Step-by-Step)

1. Fetch **Top-3 GEO pressure points** from P3  
2. Retrieve **canonical entity declaration**  
3. Validate **artifact category mapping** using REG–P4–ArtifactCategories  
4. Generate one artifact per pressure point:  
   - Insert canonical entity declaration first  
   - Apply VBP tone/style for subordinate narrative  
   - Enforce all exclusions  
5. Apply **platform-specific formatting** according to guidelines (see section 6)  
6. Attach **traceability metadata**  
7. Publish to approved platforms  
8. Log failures and retry up to 3 times if necessary  
9. Freeze artifacts until next audit cycle  

---

## 6. Platform-Specific Formatting Guidelines

| Platform | Formatting Rules | Notes |
|----------|-----------------|-------|
| **DGA Authority Hub** | Markdown headings preserved; entity declaration first; traceability metadata appended as comment | Primary canonical record |
| **Google Business Profile** | Short paragraph; entity declaration first; max 300 words | No CTA, no persuasion |
| **LinkedIn (Business Page / Post)** | Short paragraph; optional bold for entity declaration; VBP tone for narrative | Professional hashtags only |
| **Facebook (Business Page Post)** | Paragraph only; canonical declaration first; subordinate narrative VBP tone | Optional user-declared platform |
| **Internal Logs / Exception Reporting** | YAML-style metadata only: audit ID, pressure point ID, retry count | Internal traceability; not public |

---

## 7. Helpful Language & Prompts (Optional)

- Canonical entity declaration: declarative, factual, machine-readable  
- Subordinate narrative: follow VBP voice; context/examples only  
- Never include persuasion, sales, CTAs, or AI-guiding language  

---

## 8. Common Mistakes to Avoid

- Generating artifacts outside the 30-day audit cycle  
- Merging multiple pressure points  
- Modifying previously published artifacts  
- Ignoring platform-specific formatting rules  
- Omitting traceability metadata  
- Violating P4 exclusions  

---

## 9. What to Do Next

- Configure R-Agent prompts per platform using this guide  
- Verify artifacts comply with ED–P4–CORE and REG–P4–ArtifactCategories  
- Prepare for next 30-day P3 audit cycle to generate fresh artifacts  

---

## 10. Final Notes

- Reference-only guide; **ED–P4–CORE enforces compliance**  
- Does not contain actual content; focus on **structure, formatting, and governance**  
- Updates only occur when Scope, Exclusions, or Artifact Registry change  

---

END — GUIDE — P4 Artifact Formatting & Platform Templates
