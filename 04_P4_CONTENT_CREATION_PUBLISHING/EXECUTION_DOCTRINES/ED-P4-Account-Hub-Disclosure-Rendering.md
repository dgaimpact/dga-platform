# Account Hub Disclosure Rendering

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P4 — Content Creation & Publishing  
**Status:** Draft (Ready for Adoption)  
**Scope:** Private Disclosure Rendering Only  
**Owned By:** DGA Core Platform  

---

## 1. Purpose

This Execution Doctrine defines the **Account Hub** as a **private, read-only disclosure surface** for active subscribers.

Its purpose is to:

- Provide transparent visibility into P4 execution outputs  
- Reduce operational ambiguity and support requests  
- Reflect what exists, what is live, and what is scheduled  
- Surface prepared (but non-executed) amplification artifacts for reference  

The Account Hub **does not execute, control, or influence** any system behavior.

---

## 2. Relationship to ED-P4-Authority-Hub-Disclosure-Rendering

This doctrine is a **sibling disclosure renderer** to:

- **ED-P4-Authority-Hub-Disclosure-Rendering** (public)

Key distinction:

| Surface        | Audience | Indexing        | Authority |
|---------------|----------|-----------------|-----------|
| Authority Hub | Public   | Indexed         | Canonical |
| Account Hub   | Private  | Never indexed   | None      |

Both surfaces:

- Render outputs governed elsewhere  
- Do not perform execution  
- Do not alter content  

---

## 3. Access & Visibility Rules (Non-Negotiable)

### 3.1 Access Control

The Account Hub is:

- Account-number gated  
- Accessible only to **ACTIVE** accounts  
- Delivered via direct link or onboarding credentials  

No public access is permitted.

---

### 3.2 Indexing & Crawl Rules

The Account Hub must:

- Never be indexed  
- Never appear in sitemaps  
- Block all crawler access  
- Provide no SEO value  

This surface is **explicitly excluded** from discovery.

---

## 4. Disclosure Scope — What May Be Rendered

The Account Hub may render **only disclosure artifacts** produced or prepared by governed systems.

### 4.1 Executed Content Visibility

Permitted disclosures include:

- Content published by DGA  
- Platform used  
- Publish date  
- Live destination URL  
- Scheduled (queued) content with dates  

This is **visibility only**, not a task list.

---

### 4.2 Content History Rendering

Content history must be:

- Accordion-style  
- Sorted newest → oldest  
- Read-only  
- Linked out to canonical Authority Hub content  

Drafts, inline previews, or editing controls are prohibited.

---

### 4.3 Prepared Amplification Artifacts (Reference-Only)

The Account Hub **may display prepared but non-executed assets**, including:

- Email copy options  
- SMS sample messages  
- Platform-specific post copy  
- Image guidance and sizing parameters  
- Cadence-based posting windows (textual only)  

These artifacts:

- Carry **no execution state**  
- Are **not tracked**  
- Do **not** imply obligation  
- Are **optional reference material only**  

They exist to reduce friction — not to direct behavior.

---

## 5. PB (Playbook) Account Rendering Rules

### 5.1 Primary PB Account Holder (MP)

The MP Account Hub view may include:

- MP-anchored content disclosure  
- Navigation blocks linking to REA sub-accounts  

Navigation only — no content duplication.

---

### 5.2 PB Sub-Accounts (REA)

REA sub-accounts:

- Render identically to SO accounts  
- Display only their own content  
- Cannot see:  
  - The MP’s full hub  
  - Other REA accounts  
  - Cross-partner data  

Isolation is mandatory to preserve clarity and authority boundaries.

---

## 6. Explicit Prohibitions

The Account Hub must never:

- Publish content  
- Send email or SMS  
- Trigger platform posting  
- Modify schedules  
- Track usage, opens, clicks, or execution  
- Surface performance metrics  
- Behave like a CMS or CRM  
- Introduce task management semantics  

Any surface that enables action violates this doctrine.

---

## 7. Execution Boundary Statement (Lock)

> The Account Hub is a **private disclosure renderer only**.  
> It reflects governed P4 outputs and prepared reference artifacts without enabling execution, control, or authority.

---

## 8. Governance Alignment

This Execution Doctrine:

- Inherits authority from:  
  - ED-P4-Authority-Hub-Disclosure-Rendering  
  - P4 execution rules  
- Introduces no new business logic  
- Creates no new system of record  
- Exists solely to clarify disclosure behavior  

---

**END — ED-P4-Account-Hub-Disclosure-Rendering**
