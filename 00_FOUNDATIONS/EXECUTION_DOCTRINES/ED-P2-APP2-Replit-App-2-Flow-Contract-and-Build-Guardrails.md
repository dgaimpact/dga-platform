# Replit App 2 Onboarding Flow Contract & Build Guardrails

## Document Type
Execution Definition (ED)

## Primary Pillar
P2 — Intake & Onboarding

## Purpose
Define the complete, governed onboarding flow for **App 2**, which supports:

- Playbook (PB) Child Account onboarding  
- Enterprise (EN) Seat onboarding  

This document is authoritative for:

- Flow sequencing  
- Validation rules  
- Column write permissions  
- UX language constraints  
- Admin vs Public responsibility boundaries  

No build, refactor, or automation may proceed without alignment to this contract.

---

## Scope

### In Scope
- Child onboarding under existing PB Parent accounts  
- Seat onboarding under existing EN Parent accounts  

### Out of Scope
- Parent account creation  
- Territory creation or modification  
- Seat capacity overrides  
- Status promotion (PROSPECT → ACTIVE)  
- Billing, pricing, or invoicing logic  

---

## Core Principles

1. **Supabase is the Source of Truth**  
   No schema changes. No ALTER TABLE. No inferred columns.

2. **Parent-Driven Authority**  
   App 2 inherits profession, territory, and plan from the parent.  
   The user cannot change these.

3. **Minimal Public Capture**  
   App 2 collects only what the user must supply.  
   Admin resolves all ambiguity later.

4. **Neutral UX Language Only**  
   Never imply reservation, confirmation, or lock-in.

---

## Flow A — Playbook (PB) Child Onboarding

### Entry
`/onboard/child?parent={PARENT_ID}`

---

### Step 0 — Parent Validation (Read Only)

**Purpose**  
Verify that the parent account is eligible to accept a child.

**Checks**
- Parent exists  
- Parent account_status = ACTIVE  
- Parent plan_type = PLAYBOOK  
- Parent has available seat capacity  

**Writes**
- None

**Failure Handling**
- Show friendly error  
- Block progression  

---

### Step 1 — Contact Information

**Capture**
- first_name  
- last_name  
- email  
- phone  

**Writes**
- INSERT new row in `dga_accounts`
- parent_id  
- profession_type (inherited from parent)  
- account_status = PROSPECT  

**Constraints**
- No CASL capture  
- No territory selection  
- No plan selection  

---

### Step 2 — Professional Identity

**Capture**
- Professional title (free text)  
- Brokerage / Firm name  
- License number  
  - Required for Mortgage Professionals  
  - Optional for Real Estate Agents  

**Writes**
- UPDATE `admin_notes`
- Append structured `PRO_ID` block  

---

### Step 3 — Google Business Profile Match

**Behavior**
- Same matching logic as App 1  
- Optional manual entry  
- Exception path allowed  

**Writes**
- gbp_place_id  
- gbp_url  
- gbp_exception_enabled  
- gbp_exception_note  

---

### Completion
- Confirmation screen only  
- No writes  

---

## Flow B — Enterprise (EN) Seat Onboarding

### Entry
`/onboard/seat?token={INVITE_TOKEN}`

---

### Step 0 — Invite Validation (Read Only)

**Checks**
- Invite token exists and is valid  
- Parent exists  
- Parent account_status = ACTIVE  
- Parent plan_type = ENTERPRISE  
- Seat capacity available  

**Writes**
- None

---

### Step 1 — Contact Information

**Capture**
- first_name  
- last_name  
- email  
- phone  

**Writes**
- INSERT new row in `dga_accounts`
- parent_id  
- profession_type (from invite)  
- account_status = PROSPECT  

---

### Step 2 — Professional Identity

**Capture**
- Professional title (free text)  
- Brokerage / Firm name  
- License number (optional unless MP)  

**Writes**
- UPDATE `admin_notes`
- Append structured `PRO_ID` block  

---

### Completion
- Confirmation screen only  
- Invite token burned  
- No additional writes  

---

## Column Write Permissions (App 2)

### Allowed
- first_name  
- last_name  
- email  
- phone  
- parent_id  
- profession_type  
- admin_notes  
- gbp_place_id (PB only)  
- gbp_url (PB only)  
- gbp_exception_* (PB only)  

---

### Explicitly Forbidden
- casl_*  
- market_territory_code  
- plan_type  
- account_status (beyond initial PROSPECT)  
- Any INSERT without parent_id  

---

## UX Language Rules

### Use
- “Submitted for review”  
- “Seat pending confirmation”  
- “Inherited from parent account”  

### Avoid
- “Confirmed”  
- “Reserved”  
- “Your territory”  
- “Available seat”  

---

## Validation Rules

- Profession type is inherited and immutable  
- Territory is inherited and read-only  
- Seat capacity enforced before INSERT  
- License rules depend on profession  
- No field is captured more than once  

---

## Admin Responsibilities (Out of App 2)

- Parent account creation  
- Invite token generation  
- Seat limit management  
- Status promotion  
- Territory assignment confirmation  
- GBP matching for EN seats  

---

## Final Authority Statement

This document is **canonical** for App 2.

Any implementation that:
- Writes outside permitted columns  
- Allows user-controlled territory or plan changes  
- Implies availability or reservation  
- Bypasses parent validation  

is **non-compliant** and must be corrected before release.
