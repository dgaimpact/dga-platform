# Onboarding Identity & Duplicate Intent Policy

Deterministic rules for identifying onboarding identity, detecting duplicate intent, and enforcing soft-block + Admin resolution to prevent unintended re-entries and downstream execution.

**Version:** v1.0  
**Created:** 2026-01-12  
**Status:** Binding (Active)

**Applies To:**  
Subscriber Onboarding App  
Child Onboarding App  
DGA Admin Console  
Supabase (canonical schema + views)

**Governed By:**  
BP–P2–Intake-&-Onboarding-Blueprint  

---

## 1. Authority & Scope

This Execution Doctrine defines **mandatory system behavior** for onboarding identity and duplicate intent handling.

It exists to:
- prevent duplicate account creation
- force human decision-making for re-entry scenarios
- eliminate downstream execution until identity is resolved
- keep prior accounts immutable and non-reused

This doctrine is **binding**.

If a system behaves differently than specified here, the system is wrong.

---

## 1.1 Pillar Ownership Declaration

This doctrine operates **exclusively within P2 — Intake & Onboarding**.

It may consume outputs from other pillars but must not:
- execute actions owned by another pillar
- shortcut pillar sequencing

---

## 2. Preconditions

The system must provide:
- Canonical `account_status_enum`
- Onboarding intake capable of collecting:
  - email
  - profession
  - market
  - parent account type (SO or PB)
- Admin Console capability to:
  - view soft-blocked onboarding intents
  - record resolution (decision, reason, notes)
  - create a **new account code** on approval

---

## 3. Definitions (Operational)

**Onboarding Identity Key (OIK)**  
Composite identity used to detect duplicate intent:
- email + profession + market + parent_account_type (SO | PB)

**Duplicate Intent**  
Any onboarding attempt whose OIK matches an existing account.

**Soft Block**  
A controlled stop that:
- prevents account creation
- prevents downstream execution
- requires Admin resolution

**Re-entry Approval**  
Admin decision allowing participation again under a **new account code only**.

**Immutable Prior Account**  
Any existing account associated with the OIK remains unchanged forever.

---

## 4. Inputs

Required inputs:
- email (normalized)
- profession (canonical)
- market (canonical)
- parent_account_type (SO | PB)

System lookups:
- existing accounts by OIK across all statuses

---

## 5. Execution Rules (Non-Negotiable)

### 5.1 Identity Normalization

Before duplicate evaluation:
- email → lowercase, trimmed
- profession → canonical value
- market → canonical value
- parent account type → explicitly set

---

### 5.2 Duplicate Detection

If an existing account matches the OIK:
- onboarding is **soft-blocked**
- no account is created
- no status changes occur
- no downstream systems execute

---

### 5.3 Soft-Block Messaging

User-facing message (status-aware, neutral):

> “An account associated with these details already exists and requires review.”

No internal details may be exposed.

---

### 5.4 Conversation-First Resolution

Soft-blocked onboarding intents:
- do not expire
- do not auto-deny
- remain inert until Admin resolution

---

### 5.5 Re-entry Mechanics (Approved)

If Admin approves:
- create a **new account code**
- set `account_status = PROSPECT`
- Admin completes remaining onboarding fields internally
- prior accounts remain untouched

---

### 5.6 Prior Account Isolation

There is **no technical linkage** between prior and new accounts.

Historical context may exist only in:
- Admin notes
- external records (if maintained)

---

## 6. Execution Sequence

1. Collect onboarding inputs
2. Normalize inputs
3. Compute OIK
4. Query for existing accounts
5. If no match:
   - create account
   - set status = PROSPECT
6. If match:
   - soft-block onboarding intent
   - display status-aware message
   - notify Admin
   - halt all downstream actions
7. Admin resolves:
   - **Approve:** create new PROSPECT account
   - **Deny:** close intent, no action

---

## 7. Enforcement

This doctrine must be enforced at:
- application layer
- API layer
- database layer (where applicable)

No override paths may exist outside the Admin Console.

---

## 8. Change Control

Any change to:
- identity keys
- account statuses
- re-entry mechanics

requires:
- doctrine version increment
- Admin approval
- governance review

