# VBP–IIP Interview App (Replit) — Governance

**Pillar:** P2 — Intake, Profile & Consent  
**Execution Environment:** Replit  
**Consumers:** R-Agent, P4 Content Systems, P5 Communications  
**Source of Truth:** GitHub (this directory)

---

## Purpose
This directory governs the **Voice Blueprint (VBP)** and **Information Intake Profile (IIP)** interview process.

It defines:
- The questions asked (order, keys, intent)
- The generation constraints used by R-Agent
- The hard separation between VBP and IIP
- Versioning rules to prevent configuration drift (“creep”)

This repository **does not contain application code**.

---

## Responsibilities
- **Replit App**
  - Presents questions one at a time
  - Records audio
  - Transcribes responses
  - Stores transcripts + outputs in Supabase

- **GitHub (this directory)**
  - Defines *what* is asked and *how* outputs must be generated
  - Provides version-pinned configuration

- **Supabase**
  - Stores sessions, transcripts, profiles, and version references

- **R-Agent**
  - Generates VBP and IIP strictly from pinned GitHub configs
  - Must not infer beyond provided transcripts

---

## Hard Rules
- VBP and IIP are **never blended**
- Question keys are **immutable once live**
- R-Agent must follow generation parameters exactly
- Production behavior changes only when a new GitHub ref is promoted

---

## Directory Structure
question-packs/ Interview questions only
generation-params/ Output rules and formatting constraints
r-agent/ Explicit agent limitations and rules

---

## Versioning
Each interview session and generated profile records:
- Question pack commit SHA / tag
- Generation parameter commit SHA / tag

This allows full reproduction and rollback.
