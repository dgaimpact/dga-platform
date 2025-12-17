# Markdown Output Standard (Canonical)

## Purpose

This document defines the **mandatory formatting and delivery standard** for all Markdown (MD) content generated for the DGA project.

Its purpose is to ensure all documentation is:

- GitHub-ready
- copy-paste safe
- rendering-predictable
- governance-compliant
- frictionless for ChatGPT → GitHub workflows

This standard is **non-negotiable**.

---

## 1. Core Requirements (Immutable)

All Markdown documents MUST:

- Be authored as **valid CommonMark Markdown**
- Be **single, continuous documents**
- Be **complete on first delivery**
- Require **no cleanup or reformatting** before GitHub commit
- Preserve **exact heading hierarchy and spacing**

Partial documents, fragments, or multi-message outputs are invalid.

---

## 2. Required Document Structure

All Markdown documents MUST:

- Begin with **one single top-level heading (`#`)**
- Use standard Markdown headings (`##`, `###`)
- Maintain uninterrupted document flow
- Use horizontal rules (`---`) only where semantically meaningful
- Avoid inline system commentary or meta explanations

Documents must read as if authored directly in a code editor.

---

## 3. Prohibited Formatting (Strict)

Markdown output MUST NOT include:

- YAML front-matter (`---` at top)
- Mixed Markdown + JSON / YAML hybrids
- UI artifacts (e.g., “Copy code”, scroll containers)
- Partial sections or placeholders
- Headings introduced outside document flow
- Emojis or decorative symbols
- Chat-style commentary embedded in documents

If any prohibited formatting appears, the output is **invalid**.

---

## 4. Code Blocks (Scoped Allowance)

Code blocks are permitted **only** when:

- They contain **actual executable code** (SQL, JSON, prompts, configs)
- They are **subordinate** to a heading
- They do **not** wrap the entire document

**Documents themselves must never be wrapped in code fences when stored in GitHub.**

---

## 5. Delivery Format Rule (Mandatory)

### 5.1 Chat Delivery Requirement

When delivering Markdown content **via ChatGPT**, the assistant MUST:

- Return the **entire document inside a single fenced Markdown code block**
- Use ` ```md ` as the fence language
- Include **only the document content** inside the block
- Include **no text before or after** the fenced block

This rule exists to guarantee:
- lossless copy-paste into GitHub
- no rendering drift
- no UI interference

Failure to deliver Markdown inside a fenced `md` block when requested is a **standard violation**.

---

### 5.2 GitHub Storage Requirement

When the document is committed to GitHub:

- The fenced block is **removed**
- The document exists as **plain Markdown**
- No wrapping code fences remain in the repository

The fenced block is a **delivery mechanism**, not a storage format.

---

## 6. Single-Pass Delivery Rule

All Markdown documents must be delivered:

- In **one response**
- In **final form**
- With **no “continued below”**
- With **no placeholders**
- With **no post-hoc corrections required**

If a document cannot be completed in one pass, it must **not** be generated.

---

## 7. Authority & Applicability

This standard applies to **all DGA documentation**, including:

- Blueprints (BP)
- Execution Doctrines (ED)
- Registries (REG)
- SOPs
- Guides
- Internal governance documents

If a document violates this standard, it must be **regenerated**, not patched.

---

## 8. Enforcement Rule

If there is a conflict between:

- formatting convenience
- chat UI behavior
- tool limitations

**This standard prevails.**

Markdown integrity outranks speed.

---

END — Markdown Output Standard (Canonical)
