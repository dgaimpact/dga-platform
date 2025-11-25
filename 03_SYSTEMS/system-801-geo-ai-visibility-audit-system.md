# System-801 – GEO/AI Visibility Audit System

*A core system within the Digital Growth Accelerator (DGA) Platform, used to run structured GEO/AI visibility audits for Canadian real estate and mortgage professionals.*

---

## Purpose

System-801 evaluates the visibility, clarity, consistency, and AI-search readiness of a single professional, brand, or MP–REA partnership.  
It produces an executive audit, platform-level findings, a readiness score, and prioritized recommendations aligned with the DGA cycle:

**Audit → Align → Activate → Advance**

This system is used during onboarding, baseline evaluations, re-audits, and pre-launch partner analysis.

---

## Category Code

`SYSTEM`  
*(In the StackAI Prompt Library, this lives within the System-8xx family.)*

## Prompt Type

`FUNCTION`

---

## Description

Runs a structured GEO/AI visibility audit across:

- Google Search  
- Google AI Overview / AI Experiences  
- ChatGPT  
- Perplexity  
- Bing Copilot  
- Key supporting platforms (GBP, LinkedIn, Instagram, Facebook, Rate-My-Agent, websites, directories)

Outputs a structured, client-friendly evaluation of how well a professional appears across modern discovery surfaces.

---

# Inputs Expected

- **Subject profile basics**
  - Professional / brand name  
  - Role (e.g., “Mortgage Broker in Ontario”, “Real Estate Agent in Niagara”)  
  - Primary market (city, region, province – Canada only)  
  - Website URL  
  - Platforms to include (GBP, LinkedIn, Instagram, Facebook, RMA, Website, etc.)

- **Current digital assets (optional but helpful)**
  - Profile links  
  - Website(s)  
  - Slogans, brand terminology, signature programs  

- **Audit focus / use case**
  - Baseline, re-audit, or pre-launch evaluation  
  - Audience: MP, REA, or MP+REA partnership  
  - Priority focus: Visibility / Reputation / Content Readiness / All

- **Constraints & notes**
  - Canada-only mortgage context  
  - Re-audit comparison timeframe  
  - Any exclusions  

---

# Outputs

## 1. GEO/AI Visibility Snapshot (Executive Summary)
3–5 sentence plain-language summary describing the subject’s current digital visibility.

## 2. Platform-by-Platform Findings
Short notes for:  
- Google Search / AI Overview  
- ChatGPT / AI Assistants  
- Perplexity  
- Bing Copilot  
- GBP / LinkedIn / Instagram / Facebook  
- Website + directories

## 3. DGA GEO/AI Readiness Score (Qualitative)
Banding:  
- **Emerging**  
- **Developing**  
- **Visible**  
- **Strong**

Includes a 2–3 sentence rationale.

## 4. Key Strengths & Risk Areas
Bulleted strengths followed by risks/gaps.

## 5. Priority Recommendations (Next 30–90 Days)
3–7 prioritized recommendations, each tagged with a DGA phase:

- `[Audit]`  
- `[Align]`  
- `[Activate]`  
- `[Advance]`

## 6. Notes for DGA Implementation
Notes shaping:  
- Content themes  
- OCGF anchors  
- Brand voice  
- Positioning  
- Case study opportunities  

---

# Prompt Content (System Instruction)

