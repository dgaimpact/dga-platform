# ED–P4–Authority Hub Disclosure Rendering

Execution doctrine governing regulatory and CASL disclosure on DGA-hosted public pages

Version: v1.0  
Created: 2025-12-16  
Status: Active

Primary Pillar: P4 — Content Creation & Publishing  
Upstream Dependencies:
- REG–P2–Account Intake Schema (v1.1)
- DGA Business Model
- BP–P3–Omni-Presence Blueprint

Consumed By:
- Authority Hub rendering system
- Replit publishing logic
- Static page generators / templates

---

## 1. Purpose & Authority

This Execution Doctrine defines **how regulatory identity and CASL-required information must be rendered** on all **DGA-hosted public pages** representing a subscriber entity (the “Authority Hub”).

It exists to:
- ensure legislative advertising compliance
- satisfy CASL identification requirements
- prevent under- or over-disclosure
- enforce consistent presentation across all accounts

This doctrine is **binding** on all P4 systems and templates.

---

## 2. Scope — What This Doctrine Governs

This doctrine governs:
- Authority Hub **header**, **footer**, and **About/Profile** sections
- Rendering of P2-captured:
  - professional identity
  - brokerage affiliation
  - regulatory disclosures
  - business address (CASL)

This doctrine does **not** govern:
- social media posts
- platform-native profile bios
- email templates (handled separately)
- audit logic or intake rules

---

## 3. Rendering Principles (Non-Negotiable)

- Disclosure must be **accurate, minimal, and complete**
- Only **legislatively required** identifiers are displayed
- No inference or supplementation is permitted
- Rendering is **deterministic**, not stylistic
- Disclosure visibility must not depend on device, viewport, or interaction

---

## 4. Required Authority Hub Elements (Always Rendered)

The following elements **must appear** on every Authority Hub page representing a subscriber:

### 4.1 Professional Identity Block
Rendered prominently (header or profile section):

- `professional_name`
- `profession`
- `brokerage_name`

Source: REG–P2 §3.1

---

### 4.2 Regulatory Disclosure Block (Conditional)

Rendered only when `regulatory_disclosure_required = true`.

Must include:
- Regulatory body name (`regulatory_body`)
- Required identifiers **only** (see Section 5)

Must not include:
- optional or non-required licence numbers
- internal identifiers
- explanatory commentary

Source: REG–P2 §3.2

---

### 4.3 Business Address (CASL Compliance)

Rendered in footer or contact section:

- business_address_line1
- business_city
- business_province
- business_postal_code
- business_country

The address must be:
- complete
- human-readable
- non-obfuscated

Source: REG–P2 §3.4

---

## 5. Conditional Disclosure Rules (Province & Regulator)

### 5.1 Ontario — FSRA (Mortgage)

When:
- `province = ON`
- `regulatory_body = FSRA`

Render:
- Brokerage name
- Brokerage licence number

Do **not** render:
- individual licence numbers

---

### 5.2 British Columbia — BCFSA (Real Estate)

When:
- `province = BC`
- `regulatory_body = BCFSA`

Render:
- Brokerage name
- Regulatory body name

Do **not** render:
- brokerage licence numbers
- individual licence numbers

---

### 5.3 Alberta — RECA (Real Estate)

When:
- `province = AB`
- `regulatory_body = RECA`

Render:
- Brokerage name
- Regulatory body name

Do **not** render:
- brokerage licence numbers
- individual licence numbers

---

### 5.4 No Regulatory Body

When:
- `regulatory_body = NONE`

Render:
- Professional name
- Profession
- Brokerage / firm name (if applicable)
- Business address

Do **not** render:
- regulatory language of any kind

---

## 6. Explicit Prohibitions

P4 systems must **never**:

- infer regulatory requirements
- display non-required identifiers
- hide required disclosures behind interactions
- rely on platform “About” sections for compliance
- suppress address visibility for aesthetic reasons

---

## 7. Failure Handling

If required disclosure data is missing:

- The Authority Hub page must not publish
- The account remains blocked at P4
- No partial rendering is permitted

This is a **hard stop**.

---

## 8. Downstream Enforcement

This doctrine is enforced by:
- Authority Hub templates
- Static rendering checks
- P4 publishing gates
- REG–P2 field presence validation

Any conflict between presentation logic and REG–P2 must be resolved **in REG first**.

---

## 9. Change Control

- Changes require version increment
- Regulatory changes require explicit documentation
- All updates must be reviewed for cross-province impact

---

END — ED–P4–Authority Hub Disclosure Rendering
