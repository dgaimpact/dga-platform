# RCF – Continuity Loop Diagram

Canonical structural model for the Relationship Continuity Framework (RCF)

Version: v1.0  
Created: 2025-01-30  
Document Type: GENERAL (GD)

---

## Purpose

This document defines the **canonical structural loop** used by the
Relationship Continuity Framework (RCF).

It exists to provide a **single visual reference** that may be reused across:
- ED (system behavior)
- GD (framework definition)
- SOP (human execution)

This document defines **structure only**.

---

## Scope

This document governs:
- the structural relationship between RCF components
- continuity flow over time
- non-terminal relationship cycles

This document does **not** define:
- execution rules
- timing enforcement
- system behavior
- human instructions

---

## Canonical Continuity Loop

RCF operates as a **closed-loop continuity cycle**.
There is no terminal state while a relationship remains active.

### Continuity Sequence (Canonical)

1. **Relationship Active**
2. **Progress Snapshot**  
   _Context Established_
3. **Alignment Conversation**  
   _Meaning Confirmed_
4. **Group / Peer Discussion**  
   _Patterns Surface_
5. **Quiet Validation Touchpoint**  
   _Presence Reinforced_

The sequence repeats continuously while the relationship remains active.

### Structural Rules

The following rules are structural and invariant:

1. The continuity loop has **no terminal node**
2. Components execute in a **fixed order**
3. No component operates independently
4. Silence is **not** a valid state
5. The cycle repeats until the relationship ends

---

## Diagram Reuse Rules

This diagram may be reused in:
- ED documents (system-state interpretation)
- GD documents (framework definition)
- SOP documents (execution reference)

When reused:
- structure must remain unchanged
- labels may be adapted to audience
- sequence must not be altered

---

## Mermaid Reference (Optional)

For GitHub-native rendering:

```mermaid
flowchart LR
    A[Relationship Active]
    B[Progress Snapshot<br/>Context Established]
    C[Alignment Conversation<br/>Meaning Confirmed]
    D[Group / Peer Discussion<br/>Patterns Surface]
    E[Quiet Validation<br/>Presence Reinforced]

    A --> B --> C --> D --> E --> A

