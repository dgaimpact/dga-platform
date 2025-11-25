# Standards Library (601–606)  
### Core behavioural rules for all DGA prompts & systems

---

## Purpose

The **Standards Library** defines the non-negotiable rules that govern how all DGA prompts, systems, and workflows behave.

These standards:

- Ensure **consistent output** across tools and platforms  
- Enforce **naming and structural discipline** (GNF framework)  
- Provide a **shared contract** between Notion, GitHub, StackAI, and n8n  
- Act as the reference point for all “Requires Standards Cross-Check” logic

Every prompt in the StackAI Prompt Library that touches formatting, tone, GEO/AI visibility, instructions, prompt design, or audit evidence is expected to comply with these standards.

---

## Standards Index

The current standards set covers:

1. `Standards-601 – Output Format Standard`  
2. `Standards-602 – Tone, Voice & Style Standard`  
3. `Standards-603 – GEO/AI-Visibility Standard`  
4. `Standards-604 – Instruction Protocol Standard`  
5. `Standards-605 – Prompt Construction Standard`  
6. `Standards-606 – Audit Evidence Standard`  

Each standard is represented as a **StackAI Prompt Library entry** (Category Code = `STANDARDS`) and is referenced by Systems, Workflows, and Other tools.

---

## Standards-601 – Output Format Standard

**What it controls**

- Accepted output containers (markdown, JSON, tables, bullet lists, etc.)  
- Section ordering and required headings  
- Rules for when to use prose vs structured data  
- Prohibitions (e.g., no emojis, no marketing fluff in system tools)  

**Used by**

- All “generator” prompts in `CONTENT`, `AUDIT`, `NICHES`, `PERSONA`  
- System-level prompts (System-801 → 805)  
- Output validators (e.g., `Other-904 – Output Format Validator`)  

---

## Standards-602 – Tone, Voice & Style Standard

**What it controls**

- Global DGA tone (direct, practical, non-hype)  
- Handling of brand voice overlays (per-client Brand Voice Blueprint)  
- Rules for first/second/third-person usage  
- Treatment of disclaimers, constraints, and sensitive topics  

**Used by**

- Brand Voice workflow and wrappers  
- All client-facing content prompts  
- Persona/Niche generators and audit narratives  

---

## Standards-603 – GEO/AI-Visibility Standard

**What it controls**

- How prompts should support **GEO/AI visibility** and entity clarity  
- Use of niche, market, and profession metadata  
- Treatment of local signals, structured references, and search-oriented phrasing  
- Alignment with DGA’s GEO/AI frameworks (not SEO-only thinking)  

**Used by**

- GEO/AI audit prompts (`Audit-40x` series)  
- Content prompts that claim to be “AI-visible” or “entity-aligned”  
- Systems and Workflows that surface visibility recommendations  

---

## Standards-604 – Instruction Protocol Standard

**What it controls**

- How instructions are structured inside prompts  
- Required ordering: context → constraints → steps → outputs  
- “Do / Don’t” lists and negative instructions  
- How to reference other prompts, systems, or standards safely  

**Used by**

- All System prompts (System-801 → 805)  
- Workflows that orchestrate multiple prompts (Workflow-901 → 905)  
- Meta-tools (e.g., template converters, stress-test tools)  

---

## Standards-605 – Prompt Construction Standard

**What it controls**

- Canonical prompt layout (sections, labels, comments)  
- Naming conventions for internal variables and placeholders  
- How to express optional vs required inputs  
- How to encode guardrails and failure-mode handling  

**Used by**

- Prompt templates in the StackAI Prompt Library  
- “Prompt Builder” and “Prompt Converter” tools in `OTHER`  
- Any new prompt added to the library (Draft → Ready for StackAI)  

---

## Standards-606 – Audit Evidence Standard

**What it controls**

- What counts as acceptable “evidence” inside audits and reports  
- How findings, examples, and citations should be recorded  
- Minimum detail level for each audit tier (quick scan → deep dive)  
- How to document reasoning so it is **reviewable and repeatable**  

**Used by**

- All `AUDIT` prompts (4xx series)  
- GEO/AI audit workflows (Workflow-901)  
- Future reporting/export prompts  

---

## Relationship to the StackAI Prompt Library

- Each Standard lives as a **prompt record** in the `StackAI Prompt Library` database (`Category Code = STANDARDS`, IDs 601–606).  
- Prompts that must enforce these rules are flagged with:
  - `Requires Standards Cross-Check = "__YES__"`  
  - `Standards Validation = "__YES__"`  

Systems and Workflows rely on these flags and the underlying standards to maintain behavioural consistency across tools.

---

## When to Update a Standard

Update or extend a standard **only when**:

- A platform change (Notion, GitHub, StackAI, n8n) requires new rules  
- You discover inconsistent behaviour across prompts that needs governance  
- You introduce a new capability that should be globally standardized  

When a standard changes:

1. Update the corresponding `Standards-60x` prompt in the StackAI Prompt Library.  
2. Update this README if the summary description needs to change.  
3. Note any required updates to Systems, Workflows, or Platform prompts.  
4. Commit the change to GitHub with a clear message (e.g.,  
   `chore(standards): refine GEO/AI visibility rules in Standards-603`).

---

## Status

- Standards-601 → 606 are **active and in use** across the DGA platform.  
- Any new Systems, Workflows, or high-impact prompts **must** declare which standards they comply with and set appropriate validation flags in the StackAI Prompt Library.

