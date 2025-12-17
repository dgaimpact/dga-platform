# README — Rendering & Formatting Standards

This document defines **non-negotiable rendering standards** for all Markdown files in the DGA repository.

Its purpose is to ensure:
- consistent GitHub rendering
- clean directory trees
- readable tables
- copy-paste safety
- zero formatting drift

---

## Core Rule

**If spacing matters, it must be inside a fenced code block.**

If it is not fenced, GitHub will reflow it and break alignment.

---

## Directory Trees (Required Standard)

All directory structures **must**:
- be wrapped in a fenced code block
- use ASCII characters only
- avoid typographic symbols
- avoid em dashes (—)

Example (canonical):

```text
P2_Intake_Onboarding/
├── REGISTRIES/
│   └── REG_P2_EXAMPLE.md
└── EXECUTION_DOCTRINES/
    └── ED_P2_EXAMPLE.md
```

Do **not** place directory trees outside a code block.

---

## Code Blocks

Use fenced code blocks for:
- directory structures
- SQL
- JSON
- YAML
- schemas
- configuration
- diagrams
- anything where spacing matters

Use `text` unless a specific language adds value.

---

## Headings vs Structures

- Headings may use typographic characters (—, &, etc.)
- Directory trees and diagrams may **not**

Correct:
- `# P2 — Intake & Onboarding`

Incorrect (inside trees):
- `P2 — Intake & Onboarding/`

---

## Tables

- Keep tables narrow
- Avoid horizontal scrolling
- Move explanations below tables when needed
- Split wide tables into sections

---

## Visual Checks (After Pasting)

After saving a Markdown file in GitHub, confirm:
- directory trees align vertically
- code blocks show a **Copy** button
- no unexpected language labels appear
- headings render normally

If anything looks wrong, a code fence is missing or misplaced.

---

## Enforcement

These standards apply to:
- all README files
- all REG documents
- all ED documents
- all implementation specs

Formatting correctness is a **foundational requirement**, not a preference.

---

END — README_RENDERING_STANDARDS
