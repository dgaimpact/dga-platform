# Content Creation & Publishing

**Version:** v1.1  
**Created:** 2026-01-16  
**Status:** Binding (Active)  
**Applies To:** Replit AI-Agent, P4 Content Systems  

**Governing Authority:**  
- DGA_BUSINESS_MODEL.md  
- PILLAR_LOCK_REFERENCE.md  
- BP–P3–OMNI-PRESENCE BLUEPRINT.md  
- BP–P4–Scope & Exclusions  
- REG–P4–ArtifactCategories

---

## 1. Authority & Scope

This Execution Doctrine defines **mandatory system behavior** for P4.  

It exists to:  
- Translate **Top-3 GEO pressure points** from P3 into traceable, governed artifacts  
- Enforce **BP–P4–Scope & Exclusions**  
- Ensure artifacts are **immutable, declarative, and audit-aligned**  
- Prevent deviations, platform chasing, or outcome claims  

P4 may only execute within the constraints of this ED. Any deviation is a violation.

---

## 2. Preconditions

P4 may execute only when all the following are true:  
- P3 snapshot audit completed and Top-3 GEO pressure points identified  
- Account ACTIVE with P2 intake completed  
- VBP exists for the account  
- Publishing targets validated and authorized  
- Artifact categories locked in REG–P4–ArtifactCategories  

If any precondition fails, P4 must **not generate artifacts**.

---

## 3. Definitions (Operational)

- **Artifact:** Single, discrete content item generated for one pressure point  
- **Canonical Entity Declaration:** Declarative sentence of role + market + niche  
- **Traceability Metadata:** Links artifact → P3 audit ID → GEO pressure point ID  
- **Execution Window:** 30-day cycle during which P4 executes  

---

## 4. Inputs

- Top-3 GEO pressure points (P3 output)  
- Canonical entity declaration (per audit cycle)  
- VBP  
- Approved publishing targets (mandatory + optional)  
- Artifact category registry (REG–P4–ArtifactCategories)  

---

## 5. Execution Rules

1. **Artifact Mapping**  
   - One artifact per Top-3 GEO pressure point  
   - Each artifact maps to one **locked category** from REG–P4–ArtifactCategories  

2. **Canonical Entity Declaration**  
   - Appears first in artifact  
   - Literal, declarative, machine-readable  
   - Immutable within cycle  

3. **Context / VBP Application**  
   - Narrative subordinate to declaration  
   - Only VBP may inform voice or style  

4. **Audit Trigger Only**  
   - P4 executes artifacts **only** from current P3 Top-3 pressure points  
   - No proactive or mid-cycle generation  

5. **Platform Enforcement**  
   - Publish only to mandatory + user-declared optional platforms  
   - No experimental/unvalidated platforms  

6. **Exclusions Enforcement (from BP–P4–Scope & Exclusions)**  
   - No persuasion, sales, CTA, marketing, temporal/freshness claims  
   - No competitor or ranking language  
   - No AI behavior references  
   - No edits or reuse of prior artifacts  
   - No blending of multiple pressure points  
   - No non-actionable pressure points  

7. **Traceability**  
   - Each artifact stores: P3 audit ID + pressure point ID + timestamp  

8. **Execution Window**  
   - Generate all artifacts once per 30-day cycle  
   - Retry failed publication up to 3 times  
   - Log failures, notify DGA Admin  
   - No replacement artifacts until next audit cycle  

9. **Immutability**  
   - Artifacts frozen once published  
   - Only new P3-triggered cycles may generate replacements  

10. **Length / Format Discipline**  
    - Adhere to category definition  
    - No splitting/merging unless explicitly required by category  

---

## 6. Execution Sequence

1. Fetch Top-3 GEO pressure points from P3  
2. Retrieve canonical entity declaration  
3. Verify VBP and publishing targets  
4. Validate artifact category mapping  
5. Generate one artifact per pressure point:  
   - Insert canonical entity declaration first  
   - Apply VBP for subordinate context  
   - Enforce all exclusions  
6. Attach traceability metadata  
7. Publish to approved platforms  
8. Log failures, retry if necessary  
9. Freeze artifacts until next audit cycle  

---

## 7. Prohibited Behaviors

P4 must never:  
- Generate outside the current audit cycle  
- Merge multiple pressure points into one artifact  
- Modify previously published artifacts  
- Generate for unapproved platforms  
- Include persuasion, sales, CTA, or temporal claims  
- Reference competitors, rankings, or AI behavior  
- Blend IIP, prior content, or subscriber input  
- Reuse artifacts from previous cycles without new P3 trigger  

---

## 8. Downstream Dependencies

Artifacts are consumed by:  
- Authority Hub publishing systems  
- Managed omni-channel population  
- Audit trace logs  

ED ensures **audit → content causality** is preserved.

---

## 9. Change Control

- Changes require:  
  - BP compatibility review  
  - Version increment  
  - Documented rationale  
  - Explicit DGA governance approval  

No silent changes permitted.

---

END — ED–P4–CORE (Integrated with Scope & Artifact Registry)
