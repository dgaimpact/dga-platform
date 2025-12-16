# SOP–P2–Google Search Console Onboarding

Controlled onboarding and usage of Google Search Console within the DGA system

Version: v1.0  
Created: 2025-12-16  
Status: Operational (Active)

Applies To:
- DGA Staff
- DGA Audit Systems

Owned By: P2 — Onboarding
Governed By:
- BP–P3–Omni-Presence-Blueprint.md
- DGA_BUSINESS_MODEL.md
- PILLAR_LOCK_REFERENCE.md

---

## 1. Purpose

This Standard Operating Procedure (SOP) defines the **required steps and constraints** for onboarding and using **Google Search Console (GSC)** within the DGA platform.

This SOP exists to:
- ensure GSC is used strictly as an **observational instrument**
- prevent optimization, performance claims, or reactive behavior
- protect audit integrity and downstream pillar discipline

This SOP is **binding** for all DGA staff and systems.

---

## 2. Preconditions

This SOP applies **only** when all of the following conditions are met:

- Account status is `ACTIVE`
- P2 status is `P2_COMPLETE`
- Canonical website URL is locked
- Canonical Google Business Profile (GBP) URL is locked
- Market / territory is finalized
- No unresolved intake exceptions exist

If any condition is not met, **do not execute this SOP**.

---

## 3. Definitions

- **Google Search Console (GSC)** — Google-owned platform providing crawl, indexation, and query observation data.
- **Observational Use** — Use of data solely to understand visibility state without triggering optimization or action.
- **Read-Only Access** — Access that permits viewing data but prohibits configuration, submission, or changes.

---

## 4. Inputs & Tools Required

### Inputs
- Canonical website URL (from P2)
- Active subscriber Google account (subscriber-owned)

### Tools / Systems
- Google Search Console
- DGA internal audit systems (Replit + Supabase)

---

## 5. Procedure

Follow these steps **in order**.

### Step 1 — Verify Eligibility
Confirm that all P2 completion conditions listed in Section 2 are satisfied.

If any condition fails, stop and do not proceed.

---

### Step 2 — Confirm Ownership Model
Ensure that:
- The GSC property remains **owned by the subscriber**
- DGA will be granted **read-only access only**

DGA must not create, own, or control the GSC property.

---

### Step 3 — Connect GSC Property
GSC may be connected using **one** of the following methods:

- Subscriber adds DGA as a read-only user  
**OR**
- Supervised screen-share during onboarding

Under no circumstances may DGA:
- request subscriber login credentials
- store credentials
- automate login or access

---

### Step 4 — Validate Access Level
Confirm that DGA access is:
- Read-only
- Non-configurational
- Non-submissive

If access exceeds read-only, request correction before proceeding.

---

### Step 5 — Record Connection Status
Document the following in the account record:

- GSC connected: Yes / No
- Property type: Domain or URL-prefix
- Date connected

Do not store raw GSC data.

---

## 6. Output / Completion Criteria

This SOP is considered complete when:

- GSC access is confirmed as read-only
- Connection status is recorded
- Account remains eligible for P3 audit execution

Expected outputs:
- GSC connection flag on the account
- No system state changes beyond documentation

---

## 7. Exceptions & Escalation

If GSC is:
- unavailable
- inaccessible
- misconfigured
- declined by the subscriber

Then:
- do not delay onboarding
- proceed with audits without GSC input
- apply audit confidence caps where required

Do not escalate unless access errors persist across multiple audit cycles.

---

## 8. Quality & Review

- This SOP must be reviewed every 12 months
- Any changes require:
  - documented rationale
  - version increment
  - confirmation of Blueprint alignment

---

END — SOP–P3–Google Search Console Onboarding
