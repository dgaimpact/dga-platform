# DGA REALTOR® AI-Audit Workflow Specification

## Overview
This document consolidates the finalized audit and reporting workflow discussed with Steve Dainard for the Digital Growth Accelerator (DGA) system. It defines the end-to-end structure, scoring logic, and content plan framework for the REALTOR® (REA) Ad-Hoc Audit pipeline.

---

## 1. Audit Workflow Summary

### Purpose
The workflow provides a repeatable, semi-automated audit process for REAs designed to strengthen GEO (Local Search & Trust) and AIO (AI + Entity Optimization) performance. Each audit produces actionable 30-day visibility recommendations.

### Process Phases
1. **Google Form / CSV Intake**: MPs submit REA details via form → converted to CSV for upload.
2. **Intermediate Audit Confirmation (PAI)**: Data verified for accuracy, URLs checked, notes added.
3. **AI Visibility Prompt Execution**: REA evaluated via ChatGPT, Gemini, and Perplexity across 6 prompts from the DGA AI Visibility Template.
4. **Scoring and Rubric Application**: GEO and AIO components scored (10 points each).
5. **Final Audit Report (PDF)**: Generated landscape report with top 3 recommendations and matching REA/MP pillar titles.
6. **REA Title & Frequency Selection**: MP records chosen article and frequency (High, Medium, Low).
7. **30-Day Content Plan Execution**: AI-informed plan generated for REA/MP pair.

---

## 2. Scoring Model Summary

### GEO (10 Points Total)
1. Google Business Profile – 3
2. Google Reviews – 2
3. Website Quality (SEO, niche alignment) – 2
4. Third-Party Mentions – 1
5. Social Media Consistency – 1
6. Other Profiles (LinkedIn, Bing, YouTube) – 1

### AIO (10 Points Total)
| Factor | Max Score | Details |
|---------|------------|----------|
| ChatGPT Visibility | 2 | Run 6 prompts via AI Visibility Template |
| Gemini Visibility | 2 | Run 6 prompts via AI Visibility Template |
| Perplexity Visibility | 2 | Run 6 prompts via AI Visibility Template |
| Structured Content | 1 | Schema, article structure, About metadata |
| NAP Consistency | 1 | Perfect match across platforms |
| Review Diversity | 1 | Three or more active review channels |
| Authority Mentions | 1 | Mentions in external authoritative sources |

Total possible visibility points: **20**.

---

## 3. AI Visibility Prompt Logic

Each AI model executes 6 standard prompts:
1. Best in Niche A
2. Best in Niche B
3. Local Niche Expert A
4. Local Niche Expert B
5. Top Reviewed Real Estate Agent
6. Public Profile Visibility

Each prompt is scored 0–2:
- 2 = Named as expert or clearly identified
- 1 = Mentioned contextually or brokerage listed
- 0 = Absent

Average of 6 prompts → platform average. Platform averages across ChatGPT, Gemini, Perplexity → AI Visibility Average.

### AIO Total Formula
```
AIO_Total = AI_Visibility_Avg + Structured_Score + NAP_Score + ReviewDiversity + AuthorityMentions
```
Maximum: **10 points**.

---

## 4. Audit CSV Structure

**Filename:** `REA_AIO_AI_Visibility_Results.csv`

```
REA_Name,Market,Niche,Audit_Date,MP_Name,
ChatGPT_Prompt1..6,ChatGPT_Platform_Avg,
Gemini_Prompt1..6,Gemini_Platform_Avg,
Perplexity_Prompt1..6,Perplexity_Platform_Avg,
AI_Visibility_Avg,Structured_Score,NAP_Score,ReviewDiversity_Score,AuthorityMentions_Score,AIO_Total,Evidence_Links,Notes
```

Includes:
- Fractional scoring (0.5 increments)
- Truncated evidence URLs if >40 chars
- Optional cell wrapping for Notes only (<3 lines)

---

## 5. PDF Audit Report (Landscape)

**Layout:**
- A4, Landscape, 1-inch margins.
- DGA header and tagline: _Future-Proofing Your Brand_
- Footer URL: [dgaimpact.com](https://dgaimpact.com)

### Sections
1. Header with REA info: {Name, Niche, Market, MP Name}
2. GEO Breakdown table (6 criteria, subtotal)
3. AIO Breakdown table (7 criteria, subtotal)
4. Top 3 Visibility Improvement Priorities
5. 3 Recommended 30-Day Content Titles (2 niche, 1 evergreen)
6. Notes and Review Section (REA signature optional)

### Table & Design Rules
- Fixed column widths.
- Truncate overflow URLs and explanations.
- Consistent vertical cell padding.
- Alternate row shading (5–10% gray).
- Fonts: Inter (Headers), Lato (Body), 10–11pt.
- Header background: #0A2E52, white text.
- Primary accent: #2CB1A1.

---

## 6. Content Frequency Plans

### High Tier (4 Weeks)
- Full campaign activation, weekly posts, cross-links, GBP + social cadence.
- 4 publication pushes, SEO + AIO reinforcement.

### Medium Tier (2 Active + 2 Maintenance Weeks)
- Two heavy weeks; two follow-up weeks for updates.

### Low Tier (1 Active + 3 Light Weeks)
- Core visibility push with limited social support.

Each cycle ends with a mini geo/AIO review before next REA audit.

---

## 7. File Summary (Assets to Replicate)
1. Google Form / CSV Intake Template
2. Intermediate CSV Review Sheet
3. Final Audit PDF Report (Print Ready)
4. REA Article Selection Sheet
5. 30-Day Calendar Template (High/Medium/Low)
6. Master Audit Tracker Sheet (cross-linked)

---

Prepared for DGA Internal Use
© 2025 Digital Growth Accelerator | Future-Proofing Your Brand | dgaimpact.com
