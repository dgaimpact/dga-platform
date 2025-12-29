# Account Hub Disclosure Data Contract

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P4 — Content Creation & Publishing  
**Status:** Draft (Ready for Adoption)  
**Scope:** Disclosure Data Contract Only  
**Owned By:** DGA Core Platform  

---

## 1. Purpose

This Execution Doctrine defines the **data disclosure contract** for the Account Hub.

It exists to:

- Explicitly define **what data may be rendered**
- Identify **approved data sources**
- Prevent scope creep into execution, analytics, or control
- Ensure consistent behavior across SO and PB account types

This document governs **visibility only**, not storage, mutation, or logic.

---

## 2. Disclosure Boundary (Non-Negotiable)

The Account Hub may **only render data that already exists** as the result of governed execution or prepared reference artifacts.

It must never:

- Create data
- Modify data
- Infer data
- Derive performance insights
- Introduce new state

If a data element is not listed in this document, it **must not appear** in the Account Hub.

---

## 3. Core Disclosure Domains

The Account Hub disclosure surface is limited to the following domains:

1. Account metadata (context only)
2. Executed content visibility
3. Scheduled content visibility
4. Content history
5. Prepared amplification artifacts (reference-only)
6. PB navigation metadata (PB accounts only)

No other domains are permitted.

---

## 4. Account Metadata (Context Only)

### Permitted Fields

- Account name  
- Account type (SO / PB / PB-Sub)  
- Account status (e.g., Active, Frozen)  
- Current 30-day cycle label  
- Primary niche for the cycle  
- Secondary niche (only if addressed in the current cycle)

### Prohibited Fields

- Billing data  
- Payment status  
- Subscription pricing  
- Internal identifiers  
- System flags or internal enums  

This data exists **only to orient the viewer**.

---

## 5. Executed Content Visibility

### Permitted Fields

For each executed content item:

- Content title  
- Content type  
- Platform published to  
- Publish date  
- Live destination URL  
- Canonical Authority Hub link  

### Data Sources

- Authority Hub
- Content360 (or equivalent governed publisher)

### Explicit Exclusions

- Performance metrics (views, clicks, impressions)
- Engagement signals
- Ranking or visibility indicators
- Completion or success states

---

## 6. Scheduled Content Visibility

### Permitted Fields

For scheduled (queued) content:

- Content title  
- Platform  
- Scheduled publish date  

### Rules

- Schedule visibility is **informational only**
- No rescheduling controls
- No cancellation controls
- No progress indicators

If scheduling data is unavailable, this section may be omitted without substitution.

---

## 7. Content History Rendering

### Permitted Fields

For historical content blocks:

- Content title  
- Short description or summary  
- Original publish date  
- Authority Hub link  

### Rendering Constraints

- Accordion-style presentation
- Sorted newest → oldest
- Read-only
- No draft or unpublished items

---

## 8. Prepared Amplification Artifacts (Reference-Only)

### Permitted Artifact Types

The Account Hub may render prepared but non-executed assets, including:

- Email copy options (per article)
- SMS sample messages (general announcements only)
- Platform-specific post copy
- Recommended image type and sizing parameters
- Cadence-based posting windows (textual guidance only)

### Required Characteristics

All prepared artifacts must:

- Be clearly labeled as **optional**
- Carry no execution state
- Carry no timestamps
- Carry no usage indicators
- Carry no implied obligation

### Prohibited Characteristics

Prepared artifacts must never include:

- Performance claims
- “Best performing” labels
- Urgency language
- Automated sending indicators

---

## 9. PB-Specific Disclosure Rules

### 9.1 Primary PB Account Holder (MP)

The MP Account Hub view may disclose:

- MP-anchored executed and scheduled content
- Navigation metadata for REA sub-accounts, including:
  - REA name
  - Link to REA sub-account hub

No REA content data may be rendered directly in the MP view.

---

### 9.2 PB Sub-Accounts (REA)

REA sub-account hubs may disclose:

- Only REA-authored / REA-anchored content
- Prepared artifacts related to that REA’s content

REA sub-accounts must never disclose:

- MP content
- Other REA accounts
- Cross-partner metrics or comparisons

Isolation is mandatory.

---

## 10. Explicitly Prohibited Data

The Account Hub must never render:

- Analytics or reporting data
- Open rates, click rates, impressions
- User behavior or access logs
- Task lists or “to-do” indicators
- Execution controls or action buttons
- Internal system identifiers
- Audit scores or diagnostic outputs

If a data element implies action, performance, or control, it is prohibited.

---

## 11. Governance Alignment

This Execution Doctrine:

- Operates under:
  - ED-P4-Account-Hub-Disclosure-Rendering
  - ED-P4-Authority-Hub-Disclosure-Rendering
- Introduces no execution logic
- Does not alter systems of record
- Exists solely to constrain disclosure behavior

---

## 12. Lock Statement

> The Account Hub may render only the data explicitly defined in this disclosure contract.  
> Any data not listed here is out of scope and must not be displayed.

---

**END — ED-P4-Account-Hub-Disclosure-Data-Contract**
