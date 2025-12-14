# Notion → GitHub Export SOP  
### _Standard Operating Procedure for syncing the StackAI Prompt Library from Notion to GitHub_

---

## 📌 Purpose

This SOP defines the exact workflow for exporting prompts from the **StackAI Prompt Library** in Notion and syncing them into the GitHub repository (`DGA_02_SYSTEMS`).  
It ensures:

- Consistent file creation  
- Naming-compliant outputs  
- Zero manual rewriting  
- Accurate, audit-ready version control  
- Clean alignment between Notion (master authoring tool) and GitHub (technical source of truth)

This process supports StackAI ingestion, n8n automations, DGA Playbooks, and future SaaS infrastructure.

---

## 📁 Scope

This SOP applies to:

- **All prompt families** (Audit, Content, Persona, Niche, Standards, Systems, Workflows, Platforms, Other)  
- All contributors who maintain the StackAI Prompt Library  
- All updates to prompts that are “Ready for StackAI” in Notion

It does **not** apply to draft prompts or early working notes.

---

## 🧩 Prerequisites

Before exporting:

1. Ensure the prompt row in Notion has:
   - Valid **Prompt Title** following GNF naming conventions  
   - Complete Description, Prompt Content, Inputs Expected, Outputs  
   - Status set to **Ready for StackAI**  
   - `Requires Standards Cross-Check = YES/NO` properly set  
   - `Standards Validation = YES/NO` properly set  
   - No empty required fields

2. Run:
   - Other-903 — Naming Convention Checker  
   - Other-904 — Output Format Validator  
   - Other-908 — Standards Validation (Full Library Check)  
   - Other-910 — Draft → Ready QA Checklist  

Only export after the row passes all validations.

---

## 🚀 Step-by-Step Export Procedure

### **STEP 1 — Open the StackAI Prompt Library in Notion**

Go to:

> `DGA Workspace → StackAI Prompt Library`

Ensure you are in the **Table** view for maximum visibility.

---

### **STEP 2 — Export the entire database**

1. Click the `•••` menu (top-right).  
2. Select **Export**.  
3. Use these settings:

