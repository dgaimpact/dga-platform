# Account Hub Disclosure UX Boundaries

**Document Type:** Execution Doctrine (ED)  
**Pillar:** P4 — Content Creation & Publishing  
**Status:** Draft (Template-Conformant)  
**Applies To:** Account Hub (Private Disclosure Surface)  
**Owned By:** DGA Core Platform  

---

## 1. Purpose

This Execution Doctrine defines the **UX and interaction boundaries** for the Account Hub.

Its purpose is to:

- Preserve the Account Hub as a **read-only disclosure surface**
- Prevent UX patterns that imply execution, obligation, or control
- Eliminate drift toward CMS, CRM, or task-management behavior
- Ensure visual and linguistic consistency with disclosure-only intent

This doctrine governs **user experience semantics**, not visual design or implementation.

---

## 2. Scope

This doctrine applies to:

- All Account Hub views
- All SO, PB, and PB-Sub account contexts
- All current and future UI implementations of the Account Hub

This doctrine does **not** apply to:

- Authority Hub surfaces
- Execution systems
- Admin consoles
- Onboarding flows
- External publishing tools

---

## 3. Definitions

For the purposes of this doctrine:

- **Disclosure Surface**  
  A UI that reflects existing data without enabling action, control, or mutation.

- **Read-Only**  
  A state in which no user input can alter data, trigger behavior, or imply obligation.

- **Action Semantics**  
  Visual or linguistic cues that suggest something must be done (e.g., “send,” “publish,” “complete”).

---

## 4. Governing Principles (Non-Negotiable)

All Account Hub UX must adhere to the following principles:

- The Account Hub is **observational**, not operational
- Nothing in the UI may imply:
  - required action
  - pending tasks
  - incomplete work
- Visibility must never be confused with responsibility
- UX clarity takes precedence over convenience
- Ambiguity must be resolved in favor of **non-action**

---

## 5. Permitted UX Patterns

The following UX patterns are explicitly allowed:

### 5.1 Structural Patterns

- Static sections
- Accordion-style disclosure blocks
- Chronological ordering (newest → oldest)
- Grouping by niche or content type
- Collapsed historical views

---

### 5.2 Informational Elements

- Dates (published / scheduled)
- Platform names
- Status labels (e.g., Active, Scheduled)
- Plain-text guidance or explanatory copy
- External links (Authority Hub only)

---

### 5.3 Reference Artifacts

- Display of prepared email copy
- Display of SMS sample messages
- Display of platform post copy
- Image sizing guidance
- Cadence windows expressed textually

All reference artifacts must be clearly non-executable.

---

## 6. Prohibited UX Patterns (Strict)

The following are **explicitly forbidden** in the Account Hub:

### 6.1 Action Indicators

- Buttons
- Toggles
- Checkboxes
- “Send,” “Post,” “Publish,” or “Approve” controls
- Icons commonly associated with execution

---

### 6.2 Task Semantics

- To-do lists
- Completion states
- Progress indicators
- “Pending,” “Incomplete,” or “Overdue” language
- Notification badges or alerts

---

### 6.3 Performance Cues

- Metrics of any kind
- Success or failure indicators
- Comparative labels (e.g., “Top,” “Best”)
- Engagement signals

---

### 6.4 Editing & Control

- Inline editing
- Draft previews
- Reordering controls
- Overrides or preference settings

If a UI element enables action or implies obligation, it is prohibited.

---

## 7. Language & Labeling Constraints

All UI language must:

- Use **descriptive**, not directive verbs
- Avoid imperatives (“do,” “send,” “complete”)
- Avoid urgency cues
- Avoid performance framing

Preferred language examples:
- “Published on”
- “Scheduled for”
- “Available reference copy”
- “Optional use”

Disallowed language examples:
- “You should”
- “Next step”
- “Action required”
- “Optimize”

---

## 8. Enforcement Rules

- Any UX element violating this doctrine must be removed
- No exceptions are permitted for convenience
- “Future roadmap” features must still comply
- Disclosure clarity overrides user requests for control

UX drift constitutes a **doctrine violation**, not a design preference.

---

## 9. Governance Alignment

This doctrine operates under and aligns with:

- ED-P4-Account-Hub-Disclosure-Rendering  
- ED-P4-Account-Hub-Disclosure-Data-Contract  
- ED-P4-Account-Hub-Disclosure-Allocation-Logic  
- ED-P4-Account-Hub-Disclosure-Cadence-Platform-MAX-Registry  
- ED-P4-Account-Hub-Disclosure-Cycle-Anchoring-Rotation  

It introduces no execution authority and no system of record.

---

## 10. Lock Statement

> The Account Hub UX must never imply action, obligation, or control.  
> Any interface element that suggests execution violates this doctrine.

---

**END — ED-P4-Account-Hub-Disclosure-UX-Boundaries**
