# SCORING SUBSIGNAL ENUMS

## Document Metadata
- **Registry:** P3 Scoring – Subsignal Enumerations
- **Version:** v1.1
- **Status:** Canonical
- **Owner:** Digital Growth Accelerator (DGA)
- **Last Updated:** 2025-01-28
- **Supersedes:** v1.0
- **Scope:** Scoring Registry (non-executional)

---

## 1. Purpose

This document defines the **canonical subsignal enumerations** used by the P3 scoring engine.

Subsignals represent **detected conditions or attributes** derived from discovery and crawling processes.  
They are **inputs to scoring**, not scoring logic themselves.

This registry intentionally avoids:
- discovery mechanics
- query logic
- platform preferences
- execution details

---

## 2. Entity Identity Subsignals

These subsignals reflect clarity and consistency of the **Entity Bundle**.

### ENTITY_NAME_PRESENT
- One or more entity names or aliases detected
- Aliases may include personal name, DBA, or branded name

### ENTITY_NAME_CONSISTENT
- Entity names across surfaces are reconcilable
- Minor variation permitted within the same Entity Bundle

### ENTITY_NAME_CONFLICT
- Irreconcilable or contradictory entity naming detected

---

## 3. Domain & Ownership Subsignals

### PRIMARY_DOMAIN_PRESENT
- Authoritative primary domain detected

### PRIMARY_DOMAIN_CONSISTENT
- Domain consistently associated with the same entity bundle

### DOMAIN_ENTITY_MISMATCH
- Domain detected but entity association unclear or conflicting

---

## 4. Google Business Profile (GBP) Subsignals

### GBP_PRESENT
- Google Business Profile detected

### GBP_NAME_CONSISTENT
- GBP naming aligns with Entity Bundle

### GBP_LOCATION_MATCH
- GBP location matches declared service geography

---

## 5. Review Presence Subsignals (Platform-Agnostic)

Review subsignals intentionally **do not encode vendor identity**.

### REVIEW_SURFACE_PRESENT
- One or more third-party review surfaces detected

### REVIEW_SURFACE_MULTIPLE
- Reviews detected across multiple independent domains

### REVIEW_ENTITY_MATCH
- Reviews clearly reference the same Entity Bundle

### REVIEW_ENTITY_AMBIGUOUS
- Reviews present but entity association unclear

---

## 6. Location & NAP Subsignals

### NAP_PRESENT
- Name, address, and/or phone detected

### NAP_CONSISTENT
- NAP signals consistent across surfaces

### NAP_INCONSISTENT
- Conflicting NAP signals detected

---

## 7. Content & Context Subsignals

### SERVICE_CONTEXT_PRESENT
- Services clearly described in relation to the entity

### LOCATION_CONTEXT_PRESENT
- Location references present within content

### CONTEXT_THIN
- Entity or service context present but insufficient

---

## 8. Indexing & Accessibility Subsignals

### INDEXABLE
- Page accessible and indexable

### NOINDEX_DETECTED
- Explicit noindex directive detected

### CRAWL_ERROR
- Page unreachable or errored during crawl

---

## 9. Interpretation Notes

- Subsignals are **binary or categorical observations**
- They do **not** imply score weight
- Weighting and impact are governed by the P3 Scoring Blueprint
- Detection methods may evolve without changing enum meaning

---

## 10. Version History

- **v1.0** – Initial subsignal enumeration
- **v1.1** – Aligned subsignals with Entity Bundle model and platform-agnostic review philosophy

---

## 11. Canonical Status

This registry is the **authoritative enumeration source** for:
- P3 scoring inputs
- gap detection logic
- action synthesis mapping

All P3 scoring components must reference these enums verbatim unless superseded by a formally versioned update.
