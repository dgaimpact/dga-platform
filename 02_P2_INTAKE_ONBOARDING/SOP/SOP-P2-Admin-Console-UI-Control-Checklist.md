# Admin Console UI Control Checklist

Definitive UI control checklist for the DGA Admin Console,
ensuring Admin actions comply with P2 onboarding identity,
duplicate intent, and re-entry governance.

Aligned with:
- ED–P2–Onboarding-Identity-&-Duplicate-Intent-Policy
- ED–P2–Admin-Resolution-State-Model
- ED–P2–Application-Flow-Contract
- ED–P2–to–P3–Handoff-Lock

Version: v1.0  
Created: 2026-01-12  
Status: Binding (Active)

Applies To:
- DGA Admin Console (all environments)

---

## 1. Purpose

This SOP defines **what the Admin Console UI must and must not allow**
when handling onboarding intents, duplicate identity resolution,
and re-entry approval.

UI controls are a **governance surface**, not a convenience layer.

If a UI control permits a prohibited action, the UI is non-compliant.

---

## 2. Global UI Principles (Non-Negotiable)

The Admin Console must:

- expose **only valid actions**
- hide or disable prohibited actions
- require explicit Admin intent
- prevent accidental execution
- enforce doctrine before API calls

No “are you sure?” dialogs may substitute for governance rules.

---

## 3. Onboarding Intents — Required UI Controls

### 3.1 Intent List View

The Admin Console must display:

- email (normalized)
- profession
- market
- parent_account_type
- detected_at timestamp
- resolution status (UNRESOLVED | APPROVED | DENIED)

The UI must NOT display:
- account codes
- prior account history
- internal system identifiers

---

### 3.2 UNRESOLVED Intent View

When an intent is UNRESOLVED, the UI must allow:

- view intent details (read-only)
- enter internal notes
- select a resolution decision

The UI must NOT allow:
- account creation
- status changes
- edits to identity fields
- execution of audits or workflows

---

## 4. Resolution Actions (Strict)

### 4.1 APPROVE Button

The APPROVE action must:

- be explicit (no auto-approve)
- require selection of a reason code
- optionally allow notes
- trigger **new account creation only**

On APPROVE:
- new account_code is generated
- account_status is set to PROSPECT
- Admin is routed to internal onboarding completion

The UI must NOT:
- offer reuse of existing accounts
- offer account linkage
- expose prior account data

---

### 4.2 DENY Button

The DENY action must:

- require a reason code
- optionally allow notes
- permanently close the intent

On DENY:
- no account is created
- no retry options are presented
- intent becomes read-only

---

## 5. Post-Resolution UI State

Once an intent is resolved:

- all fields become read-only
- resolution cannot be changed
- action buttons are removed
- audit trail remains visible

No “undo” or “reopen” actions are permitted.

---

## 6. Account Creation UI Constraints

When creating a new account via approval:

The UI must enforce:
- account_status = PROSPECT (locked)
- new account_code only
- no ability to select or reference prior accounts

The UI must NOT expose:
- status dropdowns
- legacy account selectors
- override flags

---

## 7. P3 Eligibility Controls

The Admin Console must:

- display audit_eligibility_status separately
- default all new accounts to NOT_ELIGIBLE
- require a **separate, deliberate Admin action** to mark ELIGIBLE

The UI must NOT:
- auto-enable eligibility
- infer eligibility from onboarding completion
- bundle eligibility with account creation

---

## 8. Prohibited UI Elements (Absolute)

The following UI elements must never exist:

- “Reactivate Account” buttons
- “Reuse Account” options
- “Merge Accounts” actions
- “Override Duplicate” toggles
- bulk approval actions

Any presence of these controls violates doctrine.

---

## 9. Error Handling

If an Admin attempts an invalid action:

- the UI must block the action
- the UI must display a governance-based message
- no partial changes may persist

Errors must never suggest workarounds.

---

## 10. Enforcement

This checklist must be enforced by:

- UI component logic
- API permission checks
- Supabase RLS and triggers

UI compliance is mandatory for production release.

---

## 11. Change Control

Any change to:
- Admin UI actions
- resolution workflows
- eligibility controls

requires:
- SOP version increment
- ED alignment review
- governance approval
