# Execution Playbook & Artifact Templates

> Human-facing, reference-only guide for P4 content execution

---

## DOCUMENT METADATA

**Document Type:** GUIDE  
**Intended Audience:** Replit AI-Agent developers, P4 content operators  
**Primary Use Case:** Provide artifact-level operational guidance for generating P4 content  
**Related Pillar(s):** P4 — Content Creation & Publishing  
**Derived From:** ED–P4–CORE, BP–P4–Scope & Exclusions, REG–P4–ArtifactCategories  

**Version:** v1.0  
**Status:** Active  
**Created:** 2026-01-16  
**Last Updated:** 2026-01-16  
**Owned By:** DGA Core Platform

---

## 1. Purpose of This Guide

Explain **how P4 artifacts should be structured and generated**:

- One artifact per Top-3 GEO pressure point  
- Canonical entity declaration first, immutable per cycle  
- Subordinate narrative follows VBP voice only  
- Fully traceable to P3 audit ID and GEO pressure point ID  
- Compliance with all P4 exclusions

No actual content is included; this guide focuses on **operational structure and process**.

---

## 2. When to Use This Guide

- When configuring **R-Agent** to generate P4 artifacts  
- When verifying artifact structure against **ED–P4–CORE**  
- During P4 execution cycle (30-day) to ensure **compliance and traceability**  

**Do not use for:**  
- Actual content creation by humans  
- Auditing or interpreting AI recommendability  
- Editing or modifying existing artifacts

---

## 3. What This Guide Is (and Is Not)

### What This Guide *Is*
- Operational reference for artifact-level structure  
- Guidance for R-Agent on placement, traceability, and exclusions  
- Ensures adherence to P4 governance  

### What This Guide *Is Not*
- Authoritative binding document (BP or ED)  
- Source of content or copy examples  
- A substitute for ED–P4–CORE enforcement  

---

## 4. Key Principles to Keep in Mind

- One artifact per pressure point  
- Canonical entity declaration first, immutable  
- Subordinate narrative only for VBP-driven tone  
- Traceability metadata required (audit ID + pressure point ID + timestamp)  
- No content outside current audit cycle  
- All exclusions enforced (persuasion, CTA, AI-guiding language, etc.)  

---

## 5. How to Use This Guide (Step-by-Step)

1. Fetch **Top-3 GEO pressure points** from P3 audit  
2. Retrieve **canonical entity declaration** for the cycle  
3. Validate artifact category mapping using **REG–P4–ArtifactCategories**  
4. Generate one artifact per pressure point:
   - Insert canonical entity declaration first  
   - Apply VBP for subordinate context  
   - Enforce all exclusions  
5. Attach **traceability metadata** (P3 audit ID + pressure point ID + timestamp)  
6. Publish to approved platforms (mandatory + optional)  
7. Log failures and retry if necessary (max 3 retries)  
8. Freeze artifacts until next audit cycle  

---

## 6. Helpful Language & Prompts (Optional)

- Use **declarative, factual language** for entity declarations  
- Subordinate narrative may follow **VBP tone**  
- Never include persuasion, sales, or AI-directed phrasing  

---

## 7. Common Mistakes to Avoid

- Generating artifacts outside the current audit cycle  
- Merging multiple pressure points in one artifact  
- Modifying previously published artifacts  
- Ignoring traceability metadata  
- Using unapproved platforms or experimental channels  
- Blending IIP or subscriber preferences into content  

---

## 8. What to Do Next

- Reference this guide when configuring **R-Agent prompts** for P4  
- Use in tandem with **ED–P4–CORE** for automated enforcement  
- Verify artifacts against **REG–P4–ArtifactCategories** to ensure category compliance  
- Prepare for next 30-day P3 audit cycle to generate fresh artifacts  

---

## 9. Final Notes

- This guide is **reference only**; ED–P4–CORE enforces compliance  
- Does not include actual copy — focus is on **structure, traceability, and governance**  
- Updates occur only when **Scope, Exclusions, or Artifact Registry** are revised  

---

END — GUIDE — P4 Execution Playbook & Artifact Templates
