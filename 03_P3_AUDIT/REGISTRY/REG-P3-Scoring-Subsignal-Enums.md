# SCORING SUBSIGNAL ENUMS  
P3 Scoring Subsignal Enumeration — GEO & AIO

Version: v1.0  
Status: LOCKED  
Created: 2025-12-26  
Last Updated: 2025-12-26  

Consumes:
- /dga-platform/03_P3_AUDIT/REGISTRY/GD_P3_SCORING_BLUEPRINT_GEO_AIO.md

Purpose:
Defines the authoritative subsignal_id enumeration used by R-Agent for deterministic scoring, delta attribution, and templated explanations.

---

## 1. Global Enums

### 1.1 Allowed Subsignal State Enum (Authoritative)
All subsignals MUST emit exactly one of:

- PRESENT
- PARTIAL
- ABSENT
- NOT_INTEGRATED
- UNKNOWN

State meaning:
- PRESENT: evidence clearly supports the signal
- PARTIAL: evidence exists but is incomplete, misaligned, or weak
- ABSENT: evidence indicates the signal is not present
- NOT_INTEGRATED: the system does not yet collect/store the needed evidence
- UNKNOWN: evidence is expected but currently unavailable or indeterminate (not a system integration gap)

### 1.2 Evidence Reference Rule (Authoritative)
- evidence_refs MUST contain only keys from the execution-level evidence_index
- evidence_refs MUST be empty when state is NOT_INTEGRATED (unless documenting integration status)

---

## 2. GEO Subsignal Enums

### 2.1 GEO_GBP — Google Business Profile (3.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| GEO_GBP_EXISTS_ATTRIBUTABLE | GBP exists and is attributable | 1.0 | gbp_place_id | If no gbp_place_id and no resolvable identifier → ABSENT |
| GEO_GBP_CATEGORY_RELEVANCE | Category relevance | 0.5 | gbp_primary_category, gbp_primary_category_id, profession_type | PARTIAL when category exists but mismatched/too broad |
| GEO_GBP_NAP_COMPLETENESS | NAP completeness | 0.5 | gbp_primary_category_raw plus stored GBP profile fields (if available) | If GBP NAP fields not stored → NOT_INTEGRATED |
| GEO_GBP_PROFILE_COMPLETENESS | Profile completeness | 0.5 | stored GBP profile fields (description, hours, photos, services) | If not stored → NOT_INTEGRATED |
| GEO_GBP_VERIFIED_ACTIVITY | Verification and activity signals | 0.5 | stored GBP verification/activity flags | If not stored → NOT_INTEGRATED |

Delta drivers:
- GEO_GBP_EXISTS_ATTRIBUTABLE
- GEO_GBP_CATEGORY_RELEVANCE
- GEO_GBP_NAP_COMPLETENESS
- GEO_GBP_PROFILE_COMPLETENESS
- GEO_GBP_VERIFIED_ACTIVITY

---

### 2.2 GEO_REVIEWS — Reviews (Independent Client Feedback) (2.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| GEO_REVIEWS_PRESENT_ANY | Reviews present (any credible platform) | 0.5 | reviews_google_count, reviews_rma_count, reviews_trustpilot_count, reviews_other[] | PRESENT if any count >= 1 |
| GEO_REVIEWS_QUANTITY_AGG | Quantity threshold (aggregate) | 0.5 | counts across platforms | PARTIAL bands based on aggregate counts |
| GEO_REVIEWS_TEMPORAL_SPREAD | Temporal spread (aggregate) | 0.5 | last_review_date per platform; optional first_review_date | If dates not stored → NOT_INTEGRATED |
| GEO_REVIEWS_RATING_CONSISTENCY | Rating consistency (aggregate) | 0.5 | rating avg per platform; optional distribution | If ratings not stored → NOT_INTEGRATED |

Platform credibility weighting (internal guidance, not a separate subsignal):
- Google: 1.0
- Rate-My-Agent: 0.8
- Trustpilot: 0.6
- Other credible vertical platforms: 0.4–0.6

Delta drivers:
- GEO_REVIEWS_PRESENT_ANY
- GEO_REVIEWS_QUANTITY_AGG
- GEO_REVIEWS_TEMPORAL_SPREAD
- GEO_REVIEWS_RATING_CONSISTENCY

---

### 2.3 GEO_WEBSITE — Website (Authority Surfaces) (3.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| GEO_WEBSITE_OWNERSHIP_PRIMACY | Ownership primacy (first-party domain) | 1.25 | website_url | PRESENT when owned site exists; otherwise ABSENT |
| GEO_WEBSITE_DELEGATED_AUTHORITY | Delegated authority presence | 0.75 | delegated_profile_url (brokerage profile) | PRESENT when brokerage profile exists; else ABSENT |
| GEO_WEBSITE_CRAWLABLE_PUBLIC | Crawlable and public | 0.5 | website_url and/or delegated_profile_url and/or authority_hub_url | If no crawl check stored → UNKNOWN (not NOT_INTEGRATED) |
| GEO_WEBSITE_ENTITY_ATTRIBUTION | Entity attribution clarity (NAP, credentials) | 0.5 | structured content checks or known template presence | If not assessed/stored → NOT_INTEGRATED |
| GEO_WEBSITE_STRUCTURED_REFERENCE | Structured reference content | 0.5 | content_inventory[] or known page list | If inventory not integrated → NOT_INTEGRATED |
| GEO_WEBSITE_AUTHORITY_HUB_PRESENT | Authority Hub presence | 0.25 | authority_hub_url | PRESENT when hub URL exists and is attributable |

Marking guidance:
- Brokerage profile only commonly yields ~1.8–2.1 across subsignals.
- Owned site only commonly yields ~2.4–2.7.
- Owned site + hub can reach full 3.0.

Delta drivers:
- GEO_WEBSITE_OWNERSHIP_PRIMACY
- GEO_WEBSITE_DELEGATED_AUTHORITY
- GEO_WEBSITE_CRAWLABLE_PUBLIC
- GEO_WEBSITE_ENTITY_ATTRIBUTION
- GEO_WEBSITE_STRUCTURED_REFERENCE
- GEO_WEBSITE_AUTHORITY_HUB_PRESENT

---

### 2.4 GEO_THIRD_PARTY_TRUST — Third-Party Mentions & Trust Network (1.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| GEO_TPT_INDEPENDENT_MENTIONS | Independent third-party mentions | 0.5 | third_party_mentions[] | PARTIAL bands based on count/quality |
| GEO_TPT_TRUST_NETWORK_CORROBORATION | Trust Network corroboration | 0.5 | trust_network_relationships[]; trust_network_links[]; utm_relationship_proof[] | If not yet integrated → NOT_INTEGRATED |

Delta drivers:
- GEO_TPT_INDEPENDENT_MENTIONS
- GEO_TPT_TRUST_NETWORK_CORROBORATION

---

### 2.5 GEO_SOCIAL — Social Media Activity Signals (0.5)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| GEO_SOCIAL_ACTIVE_PROFILE_PRESENT | At least one active profile | 0.25 | facebook_url, instagram_url, x_url, tiktok_url, youtube_url, other_social_urls[] | Active = exists, public, attributable |
| GEO_SOCIAL_RECENT_ACTIVITY_PRESENT | Evidence of recent activity | 0.25 | social_last_activity_date_by_platform[] | If not stored → NOT_INTEGRATED |

Exclusions:
- LinkedIn is not scored here (belongs to GEO_OTHER_PROFILES).

Delta drivers:
- GEO_SOCIAL_ACTIVE_PROFILE_PRESENT
- GEO_SOCIAL_RECENT_ACTIVITY_PRESENT

---

### 2.6 GEO_OTHER_PROFILES — Other Profiles (Identity Surfaces) (0.5)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| GEO_PROFILES_CREDIBLE_PRESENT | At least one credible profile | 0.25 | linkedin_url, licensing_registry_url, association_profile_urls[], directory_profile_urls[] | Review platforms excluded |
| GEO_PROFILES_CONSISTENCY | Consistency across profiles | 0.25 | same as above plus normalized identity fields | If normalization not implemented → NOT_INTEGRATED |

Delta drivers:
- GEO_PROFILES_CREDIBLE_PRESENT
- GEO_PROFILES_CONSISTENCY

---

## 3. AIO Subsignal Enums

### 3.1 AIO_SITUATION_COVERAGE — Situation Coverage (3.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| AIO_SIT_CORE_SITUATIONS | Core service situations | 1.0 | content_inventory[]; situation_map[] | If not integrated → NOT_INTEGRATED |
| AIO_SIT_SECONDARY_EDGE | Secondary and edge situations | 1.0 | content_inventory[]; situation_map[] | PARTIAL when coverage exists but shallow |
| AIO_SIT_GEO_ROLE_CLARITY | Geographic and role clarity | 1.0 | content checks for location/role blocks; authority_hub templates | If not assessed → NOT_INTEGRATED |

Marking examples:
- Generic descriptions → 0.4–0.7
- Multiple vague mentions → 0.8–1.4
- Structured situation sections → 1.8–2.4
- Deep long-form coverage → 2.5–3.0

Delta drivers:
- AIO_SIT_CORE_SITUATIONS
- AIO_SIT_SECONDARY_EDGE
- AIO_SIT_GEO_ROLE_CLARITY

---

### 3.2 AIO_EXTRACTABILITY — Content Extractability & Structure (3.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| AIO_EXT_DECLARATIVE_HEADINGS | Declarative headings | 1.0 | structural_checks[] per page | If not integrated → NOT_INTEGRATED |
| AIO_EXT_ANSWER_DENSE_PARAS | Answer-dense paragraphs | 1.0 | structural_checks[] per page | If not integrated → NOT_INTEGRATED |
| AIO_EXT_STRUCTURAL_CONSISTENCY | Structural consistency | 1.0 | presence of lists, sections, FAQs | If not integrated → NOT_INTEGRATED |

Marking examples:
- Narrative blog style → 0.3–0.8
- Mixed structure → 1.0–1.8
- Well-structured pages → 2.0–2.6
- Authority Hub canonical pages → 2.7–3.0

Delta drivers:
- AIO_EXT_DECLARATIVE_HEADINGS
- AIO_EXT_ANSWER_DENSE_PARAS
- AIO_EXT_STRUCTURAL_CONSISTENCY

---

### 3.3 AIO_AUTHORITY_SIGNALS — First-Party Authority Signals (2.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| AIO_AUTH_ENTITY_CREDENTIALS | Entity clarity and credentials | 0.75 | credential_block_present; licensing_category; page template checks | If not integrated → NOT_INTEGRATED |
| AIO_AUTH_AUTHORSHIP_ATTRIB | Authorship and attribution | 0.5 | authorship_present; about_page_present; schema_present | If not integrated → NOT_INTEGRATED |
| AIO_AUTH_HUB_CANONICAL_PRESENCE | Authority Hub canonical presence | 0.75 | authority_hub_url; hub_content_inventory[] | PRESENT when hub exists and is attributable |

Delta drivers:
- AIO_AUTH_ENTITY_CREDENTIALS
- AIO_AUTH_AUTHORSHIP_ATTRIB
- AIO_AUTH_HUB_CANONICAL_PRESENCE

---

### 3.4 AIO_AI_SURFACE_PRESENCE — AI Surface Presence (2.0)

| subsignal_id | Label | Max | Expected Evidence Inputs | Notes |
|---|---|---:|---|---|
| AIO_AI_EVIDENCE_OF_CITATION | Evidence of AI citation or summarization | 1.0 | ai_presence_observations[] | If you do not run observations yet → NOT_INTEGRATED |
| AIO_AI_PERSISTENCE_OVER_TIME | Persistence across queries or time | 1.0 | ai_presence_time_series[] | Typically NOT_INTEGRATED at Day-00 |

Day-00 expectation:
- Scores often 0.0–0.5 due to lack of integrated observations.

Delta drivers:
- AIO_AI_EVIDENCE_OF_CITATION
- AIO_AI_PERSISTENCE_OVER_TIME

---

## 4. Required R-Agent Output Alignment (Binding)

For each factor:
- R-Agent MUST emit all subsignals listed above
- R-Agent MUST compute factor score as the sum of subsignal scores capped at factor max
- R-Agent MUST provide evidence_refs for each subsignal when PRESENT or PARTIAL
- R-Agent MUST set NOT_INTEGRATED where the system does not collect the evidence yet
- R-Agent MUST avoid using UNKNOWN when the correct state is NOT_INTEGRATED

---

END — REG_P3_SCORING_SUBSIGNAL_ENUMS
