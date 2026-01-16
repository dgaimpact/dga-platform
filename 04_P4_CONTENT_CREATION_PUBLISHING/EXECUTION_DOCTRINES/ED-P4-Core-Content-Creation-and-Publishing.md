# Content Creation & Publishing

**Version:** v1.0  
**Created:** 2026-01-16  
**Status:** Binding (Active)  
**Applies To:** Replit AI-Agent, P4 Content Systems  

**Governing Authority:**  
- DGA_BUSINESS_MODEL.md  
- PILLAR_LOCK_REFERENCE.md  
- BP–P3–OMNI-PRESENCE BLUEPRINT.md  
- P4 Exclusions (locked 2026-01-16)

---

## 1. Authority & Scope

This Execution Doctrine defines **mandatory system behavior** for P4 Content Creation & Publishing.

It exists to:
- translate audit Top-3 GEO pressure points into governed, traceable language artifacts
- enforce all P4 exclusions and constraints
- ensure consistent, machine-readable, and audit-aligned outputs
- prevent deviations, platform chasing, or outcome promises

**P4 may only execute** within the constraints of this ED. Any deviation is a violation.

---

## 2. Preconditions

This doctrine applies only when all of the following are true:
- P3 snapshot audit completed and Top-3 GEO pressure points identified
- Account is ACTIVE and P2 intake completed
- VBP exists for the account
- Publishing targets are validated and authorized
- Optional platforms (if any) declared at onboarding

If any precondition is not met, **P4 must not generate artifacts**.

---

## 3. Definitions (Operational)

- **Artifact:** A single, discrete content item generated for one GEO pressure point  
- **Canonical Entity Declaration:** Declarative sentence stating role + market + niche  
- **Traceability Metadata:** Internal linkage recording P3 audit ID + pressure point ID  
- **Execution Window:** The 30-day cycle during which P4 executes  

---

## 4. Inputs

P4 must receive the following:
- **Top-3 GEO pressure points** (P3 output)  
- **Canonical Entity Declaration** (generated once per audit cycle)  
- **Voice Blueprint Profile (VBP)**  
- **Authorized publishing targets** (mandatory + optional platforms)  

---

## 5. Execution Rules

P4 **must** follow these rules exactly:

1. **One-to-One Artifact Mapping**  
   - Each Top-3 GEO pressure point → exactly **one artifact**  
   - No blending of multiple pressure points in one artifact  

2. **Canonical Entity Declaration**  
   - Must appear **first** in the artifact  
   - Must be **literal, declarative, machine-readable**  
   - Must remain **immutable** across the cycle  

3. **Context and VBP Application**  
   - Any additional narrative or stylistic language must be **subordinate to the canonical entity declaration**  
   - Only VBP may inform tone or style  

4. **Audit-Only Trigger**  
   - P4 may **only execute artifacts triggered by a current P3 Top-3 GEO pressure point**  
   - No proactive generation, no mid-cycle additions  

5. **Platform Restrictions**  
   - Publish only to mandatory + user-declared optional platforms  
   - No experimental or unvalidated platforms  

6. **Exclusions Enforcement**  
   - No persuasion, sales, or CTA language  
   - No references to AI behavior, audits, or optimization intent  
   - No temporal or freshness claims unless verified by P2/P3  
   - No competitor comparisons or rankings  
   - No entity facts from IIP or subscriber preferences  
   - No multi-pressure-point abstractions  
   - No edits or regeneration of prior artifacts mid-cycle  
   - Subscriber edits are prohibited  

7. **Traceability Metadata**  
   - Each artifact must include internal metadata:  
     - P3 Audit ID  
     - GEO Pressure Point ID  
     - Timestamp of generation  
   - Required for all downstream consumption  

8. **Execution Window Enforcement**  
   - Generate all artifacts **once per 30-day cycle**  
   - Retry up to **3 times** on publishing failure  
   - Failures must be logged and trigger a DGA notification  
   - No replacement artifacts within the same cycle  

9. **Immutability**  
   - Once published, artifacts are **frozen**  
   - New content may only be generated in the **next P3-triggered cycle**  

10. **Length and Format Discipline**  
    - Artifact length, depth, and structure must adhere to **artifact category definition**  
    - No splitting or merging except where category explicitly requires it  

---

## 6. Execution Sequence

1. Fetch Top-3 GEO pressure points from P3  
2. Retrieve canonical entity declaration for cycle  
3. Verify VBP exists for the account  
4. Verify publishing targets are valid  
5. Generate one artifact per pressure point:  
   - Insert canonical entity declaration first  
   - Apply VBP for subordinate narrative  
   - Enforce exclusions  
6. Attach traceability metadata  
7. Publish to approved platforms  
8. Log any failures, trigger retries if necessary  

---

## 7. Error Handling & Exceptions

- Retry failed publication **up to 3 times**  
- Log each failure with P3 audit ID and pressure point ID  
- Notify DGA Admin via system email  
- Do not generate substitute artifacts within the same cycle  
- Artifacts remain immutable despite external edits  

---

## 8. Prohibited Behaviors

P4 **must never**:

- Generate artifacts outside the current audit cycle  
- Merge multiple pressure points into one artifact  
- Modify previously published artifacts  
- Generate content for unapproved platforms  
- Include persuasion, sales, CTA, or temporal claims  
- Attempt to influence AI behavior, rankings, or recommendation  
- Blend IIP, prior content, or subscriber input into artifacts  
- Repackage prior artifacts without a new P3 trigger  

---

## 9. Downstream Dependencies

- P4 artifacts are **consumed by**:  
  - Authority Hub publishing systems  
  - Managed omni-channel population  
  - Audit trace logs  
- ED ensures **audit → content causality** is preserved  

---

## 10. Change Control

- Changes require:  
  - Blueprint compatibility review  
  - Version increment  
  - Documented rationale  
  - Explicit approval by DGA Core Platform  

No silent changes permitted.

---

END — ED–P4–CORE
