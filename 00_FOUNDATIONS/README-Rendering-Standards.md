# README — Rendering & Formatting Standards

This document defines **non-negotiable rendering standards** for all Markdown files in the DGA repository.

Its purpose is to ensure:
- consistent visual output in GitHub
- zero ambiguity in structure
- no broken trees, tables, or code blocks
- copy-paste safety across tools

---

## Core Rule (Memorize This)

> **Anything that must preserve spacing MUST be inside a fenced code block.**

If spacing matters and it’s not fenced, it will break.

---

## 1. Fenced Code Blocks (Required)

Use triple backticks **before and after** any of the following:

- Directory structures
- ASCII diagrams
- SQL
- JSON
- YAML
- Configuration
- Schemas
- Examples that must align

### Correct

```md
```text
example/
├── file.md
└── folder/
