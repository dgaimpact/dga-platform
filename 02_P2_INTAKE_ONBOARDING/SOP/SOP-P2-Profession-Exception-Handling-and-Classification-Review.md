# Profession Exception Handling & Classification Review

Exception handling procedure for onboarding submissions that do not cleanly map to existing SB industry / profession / seat-domain definitions.

Version: v1.0  
Created: 2026-01-11  
Status: Operational (Active)

Applies To: DGA Core Platform (Governance, Admin Review)  
Owned By: P2 — Intake & Onboarding  
Governed By:
- DGA_BUSINESS_MODEL.md
- PILLAR_LOCK_REFERENCE.md
- BP–P2–Intake & Onboarding (if applicable)
- SB Canonical Industry / Profession Registry

---

## 1. Purpose

This SOP defines the **mandatory exception-handling process** when an onboarding submission cannot be confidently classified into an existing **industry, profession, and seat-driving domain**.

This SOP exists to:
- protect territory seat allocation integrity
- prevent uncontrolled profession or industry sprawl
- ensure scarcity is governed, not reactive
- separate onboarding execution from structural definition

This SOP is **binding** for all exception cases.

---

## 2. Preconditions

This SOP applies only when **all** of the following are true:

- An onboarding form has been submitted successfully
- Automated classification cannot confidently map the submission to:
  - an existing canonical profession, or
  - an existing seat-driving domain
- The submission would otherwise:
  - risk misallocating a territory seat, or
  - imply creation of a new profession, industry, or seat domain

If a clean mapping exists, this SOP must **not** be used.

---

## 3. Definitions (Operational)

- **Exception Case** — An onboarding submission that cannot be confidently classified using existing SB definitions.
- **Seat-Driving Domain** — A governed unit used for territory seat allocation.
- **Profession Family** — A high-level role grouping that may contain one or more seat-driving domains.
- **Pending Classification** — A temporary system state indicating governance review is required before activation.

---

## 4. Inputs & Tools Required

### Inputs
- Onboarding submission record
- Declared profession label
- Declared niche (if provided)
- Website and platform URLs
- Territory requested

### Tools / Systems
- Supabase (SB tables)
- DGA Admin Console
- Canonical Industry / Profession Registry (SB)
- Governance decision log (GitHub)

---

## 5. Procedure (Step-by-Step)

### Step 1 — Flag the Submission
- Set account status to **PENDING_CLASSIFICATION**
- Do **not** consume a territory seat
- Prevent downstream activation (P3–P5)

---

### Step 2 — Attempt Canonical Mapping
Evaluate whether the submission can be mapped to:

- an existing canonical profession **without distortion**
- an existing seat-driving domain **without unfair suppression**

If yes:
- Document mapping decision
- Proceed to Step 5

If no:
- Continue to Step 3

---

### Step 3 — Apply Seat-Domain Qualification Test

A new seat-driving domain may be considered **only if all conditions are met**:

1. Buyer intent is non-substitutable
2. Demand does not complete with existing domains
3. Referral ecosystem is materially distinct
4. AI interpretation context is materially different
5. Treating it as existing would:
   - suppress legitimate supply, or
   - distort seat fairness

If **any** condition fails:
- New domain is prohibited
- Proceed to Step 4

---

### Step 4 — Resolution Decision

One of the following outcomes **must** be selected:

**A. Map to Existing Profession / Domain**
- Update classification
- Proceed to activation

**B. Create New Seat-Driving Domain (Rare)**
- Update SB registry (versioned change)
- Document rationale in governance log
- Activate only after SB update is live

**C. Reject or Defer**
- Decline onboarding or place on hold
- Notify internal admin (no automated user messaging)

---

### Step 5 — Activation
Once classification is resolved:

- Activate account normally
- Consume territory seat if applicable
- Allow downstream pillars to proceed

---

## 6. Output / Completion Criteria

This SOP is complete when:

- A classification decision is recorded
- The account is either:
  - activated correctly, or
  - explicitly rejected / deferred
- No silent SB changes have occurred

Expected outputs:
- Governance decision record
- Updated account classification state

---

## 7. Exceptions & Escalation

If classification remains ambiguous after review:

- Do **not** improvise
- Do **not** create provisional professions
- Escalate to: DGA Core Governance Review

No automation may override this escalation.

---

## 8. Quality & Review

- This SOP should be reviewed every: 6 months
- Changes require:
  - documented rationale
  - version increment
  - governance approval

---

END — SOP–P2–Exception Handling & Classification Review
