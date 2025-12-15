# Voice Blueprnt & Information Intake Profile

**Document Type:** Execution Doctrine (ED)

**Status:** Active — Enforced

**Scope:** System-wide (Replit AI-Agent, Intake, Audit, Content, Communications)

**Governing Authority:**

* BP — Voice Blueprint Profile (VBP)
* BP — Information Intake Profile (IIP)
* DGA Business Model
* Pillar Lock Reference

---

## 1. Purpose of This Execution Doctrine

This Execution Doctrine defines **how AI systems and operators must execute against an existing Voice Blueprint Profile (VBP) and Information Intake Profile (IIP)**.

It translates Blueprint-level intent into **deterministic system behavior**.

This ED exists to:

* Prevent voice contamination
* Prevent misuse of IIP in content generation
* Ensure consistent AI behavior across Replit, audits, content, and communications
* Enforce fallback logic when VBP or IIP is missing

This document is **binding**. If execution conflicts with this ED, execution is invalid.

---

## 2. Definitions (Operational)

### 2.1 Voice Blueprint Profile (VBP)

A structured profile defining **how an account holder communicates outward**.

Used ONLY for:

* Content creation
* Public-facing messaging
* Scripts, blogs, social posts, long-form articles

Never used for:

* Audit delivery
* Recommendation emails
* Internal communications to the account holder

---

### 2.2 Information Intake Profile (IIP)

A structured profile defining **how an account holder prefers to receive information from DGA**.

Used ONLY for:

* Audit reports
* Recommendation summaries
* Status updates
* Emails sent to the account holder

Never used for:

* Content creation
* Brand voice
* Audience-facing tone

---

## 3. Execution Preconditions

Before any AI system may execute:

* The account MUST be active (P2 complete)
* The system MUST check for:

  * VBP on file
  * IIP on file

No inference may occur until this check is complete.

---

## 4. VBP Resolution Logic (Content Generation)

### 4.1 Resolution Order

When generating content, the system MUST:

1. Check for a **custom interview-based VBP**
2. If none exists, check for a **W-VBP (Web-Derived VBP)**
3. If neither exists, halt execution

Resolution hierarchy:

```
Custom VBP
↓
W-VBP
```

---

### 4.2 Content Execution Rules

When VBP is resolved:

* AI MUST align to:

  * Voice attributes
  * Tone modifiers
  * Messaging DNA
  * Language preferences
  * Do / Don’t constraints

* AI MUST NOT:

  * Introduce stylistic elements not present in the VBP
  * Use IIP data in any form
  * Adjust voice based on inferred delivery preferences

VBP governs **expression**, not delivery.

---

## 5. IIP Resolution Logic (Account Holder Communications)

### 5.1 Resolution Order

When communicating *to* the account holder, the system MUST:

1. Check for a **custom IIP**
2. If none exists, check for a **provisional scan-derived IIP**
3. If neither exists, use default neutral delivery

Resolution hierarchy:

```
Custom IIP
↓
Provisional IIP
↓
Default Neutral Delivery
```

---

### 5.2 Communication Execution Rules

When IIP is resolved:

* AI MUST adapt:

  * Information sequencing
  * Level of detail
  * Formatting
  * Follow-up cadence

* AI MUST NOT:

  * Alter content voice
  * Alter audience-facing tone
  * Rephrase content artifacts

IIP governs **delivery mechanics only**.

---

## 6. Web Scan Fallback Logic

### 6.1 When Web Scans Are Permitted

Web scans MAY be used only when:

* No custom VBP exists
* No custom IIP exists
* Execution must proceed to maintain continuity

---

### 6.2 Web-Derived VBP (W-VBP)

When generating a W-VBP:

* AI MAY infer tone and structure from public assets
* AI MUST avoid speculative personality traits
* AI MUST weight findings as provisional

W-VBP is:

* Silent
* Internal-only
* Stored until replaced

---

### 6.3 Provisional IIP

When generating a provisional IIP:

* AI MAY infer formatting and detail preferences
* AI MUST avoid assumptions about decision authority or urgency

Provisional IIP is:

* Silent
* Internal-only
* Automatically replaced by custom IIP

---

## 7. Storage, Replacement, and Persistence

* Replit does not manage versions
* Replit references only what exists on file

Replacement behavior:

* DGA deletes W-VBP when a custom VBP is uploaded
* New VBP becomes authoritative immediately
* Same logic applies to IIP

No blending. No partial merges.

---

## 8. Explicit Prohibitions (System-Critical)

The following are STRICTLY PROHIBITED:

* Using IIP data during content creation
* Using VBP data to format audit delivery
* Blending delivery preferences into brand voice
* Inferring urgency, pressure, or tone not stated
* Modifying published content retroactively

Any violation constitutes a system fault.

---

## 9. Failure & Halt Conditions

Execution MUST HALT if:

* No VBP or W-VBP exists for content creation
* Account is not active
* Required upstream pillar data is missing

Silence is preferred over incorrect execution.

---

## 10. Auditability & Enforcement

All systems must:

* Log which profile was referenced (VBP, W-VBP, IIP)
* Preserve deterministic behavior
* Allow post-hoc verification of compliance

This ED is enforceable across:

* Replit AI-Agent
* Audit systems
* Content engines
* Communication workflows

---

## 11. Key Principle (Non-Negotiable)

> **Voice defines expression. Delivery defines understanding.**

Mixing the two erodes trust.

---

**END — ED VBP & IIP EXECUTION DOCTRINE**
