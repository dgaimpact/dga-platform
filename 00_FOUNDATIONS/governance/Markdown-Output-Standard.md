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

### 4.1 Directory Structures & File Trees (Non-Negotiable)

Directory structures, file trees, or repository layouts **MUST NEVER** be included inside Markdown (` ```md `) documents.

Directory structures are **structural references**, not documents.

**Rules:**

- Directory trees are **not Markdown documents**
- Directory trees must never be mixed with:
  - Blueprints
  - SOPs
  - READMEs
  - Execution Doctrines
  - Registries
- Directory trees must always be delivered using a fenced **` ```text `** code block
- Directory trees must never be delivered using ` ```md `

**Required Format:**

- Use plain ASCII text only
- Use indentation (spaces) only
- Do **not** use box-drawing characters (`├──`, `└──`)
- Do **not** allow Markdown tokens at column 0 (`#`, `---`, `>`, `*`)

**Example (Valid):**

```text
DIRECTORY STRUCTURE

[ROOT]
  /03_P3_AUDIT
    /BLUEPRINTS
    /EXECUTION_DOCTRINES
    /SYSTEMS
    README.md
