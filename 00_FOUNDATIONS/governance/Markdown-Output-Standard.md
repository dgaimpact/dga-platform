# Markdown Output Standard

This document defines the **mandatory formatting standard** for all Markdown (MD) content generated for the DGA project.

Its purpose is to ensure all Markdown files are:
- clean
- continuous
- GitHub-ready
- free of rendering artifacts
- copy-paste safe

This standard is **non-negotiable**.

---

## 1. Core Requirement

All Markdown output **MUST** be presented as:

- one continuous document
- plain Markdown only
- immediately ready for GitHub commit

No cleanup should be required after generation.

---

## 2. Prohibited Output (Strict)

Markdown output MUST NOT include:

- YAML front-matter (`---`)
- fenced code blocks wrapping entire documents
- UI artifacts (e.g. “Copy code”, language tags, scroll containers)
- mixed Markdown + JSON/YAML hybrids
- partial document fragments
- multi-section outputs split across messages
- headings introduced outside document flow

If any of the above appear, the output is **invalid**.

---

## 3. Required Formatting Rules

All Markdown documents MUST:

- begin with a single top-level heading (`#`)
- use standard Markdown headings (`##`, `###`)
- use horizontal rules (`---`) only where semantically appropriate
- maintain logical, uninterrupted section flow
- avoid inline system commentary or meta-instructions

The document must read as if it were authored directly in a code editor.

---

## 4. Code Blocks (Allowed, Scoped)

Code blocks are permitted **only** when:

- they contain actual code (SQL, JSON, prompts, etc.)
- they do **not** wrap the entire document
- they are clearly subordinate to headings

Documents themselves must **never** be wrapped in code fences.

---

## 5. Single-Pass Delivery Rule

All Markdown documents must be delivered:

- in one response
- in final form
- with no “continued below” sections
- with no placeholders
- with no post-hoc corrections required

If a document cannot be completed in one pass, it must not be generated.

---

## 6. Authority

This standard applies to:

- Blueprints (BP)
- Execution Doctrines (ED)
- Registries (REG)
- Guides (GUIDE)
- SOPs
- Internal governance documents

If a document violates this standard, it must be regenerated.

---

END — Markdown Output Standard
