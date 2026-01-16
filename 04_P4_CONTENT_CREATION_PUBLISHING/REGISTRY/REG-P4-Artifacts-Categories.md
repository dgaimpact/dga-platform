# Artifact Categories

Canonical Registry of P4 Artifact Categories and Mappings from P3 GEO Pressure Points

Version: v1.0  
Created: 2026-01-16  
Status: Canonical (Active)  
Primary Pillar: P4 — Content Creation & Publishing  
Consumed By:  
- ED–P4–CORE  
- P4 Content Systems  
- Replit AI-Agent

---

## 1. Authority & Scope

This registry defines the **fixed set of artifact categories** for P4 execution and maps all currently recognized P3 Top-3 GEO pressure points to these categories.  

- All P4 artifacts must be generated **only** from a mapped P3 pressure point.  
- No ad hoc or new artifact categories may be introduced without formal governance review.  
- Public-facing artifacts may only use categories 1–6. Category 7 is internal only.  

---

## 2. Artifact Categories & Mappings

| **P3 Pressure Point Type**                   | **Description / Trigger**                                     | **P4 Artifact Category**             |
|---------------------------------------------|---------------------------------------------------------------|-------------------------------------|
| Role + Market + Niche clarity               | Entity lacks explicit role, geographic market, or niche      | Entity Declaration                   |
| Professional Credentials / Experience       | Missing or weak evidence of qualifications, licensing, awards | Credential Corroboration             |
| Platform Presence / Corroboration           | Missing, inconsistent, or ambiguous presence across required platforms (website, GBP, LinkedIn) | Platform Context                      |
| Niche-specific Context / Expertise          | Entity provides minimal examples, explanation, or value add | Niche Context / Expertise Explanation |
| Temporal / Continuity Validation            | Entity persistence or continuity not clearly observable      | Temporal Continuity Statement        |
| Public Reference / Attribution              | Missing citations or verifiable public signals               | Reference / Attribution Statement    |
| Artifact Publishing Failure (internal)      | Publishing failed, retries exhausted                          | Failure / Exception Log (internal)  |

---

## 3. Rules & Constraints

1. **One-to-one mapping:** One P3 pressure point → one P4 artifact  
2. **Traceability required:** Each artifact must store P3 audit ID + GEO pressure point ID + timestamp  
3. **Public vs internal:** Only categories 1–6 are public; category 7 is internal only  
4. **Immutable category set:** No new artifact categories without formal governance approval  
5. **Artifact compliance:** Any artifact not mapping to a recognized pressure point type is invalid  

---

## 4. Change Control

- Changes require:  
  - Review by DGA governance team  
  - Version increment  
  - Documented rationale  
  - ED–P4 compatibility review  
- No silent updates are permitted.  

---

END — REG–P4–ArtifactCategories
