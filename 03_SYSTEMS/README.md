# 03_SYSTEMS — Platform Systems & Architecture

This folder documents how the DGA Platform is wired together at a **systems level**.  
It focuses on structure, integrations, and data flow rather than strategy or day-to-day operations.

Use this area to define how tools like Notion, Google Workspace, n8n, and GitHub connect to each other.

---

## Purpose

- Provide a **single source of truth** for DGA’s technical architecture  
- Document how core tools and services are configured  
- Describe data flows between systems (intake → CRM → content → automation)  
- Support future automation, scaling, and delegation  

If a question starts with “How does DGA *technically* do X?”, the answer should live here.

---

## Structure

Current and planned contents:

### `configs/`
System constants in JSON format, including:
- `niches.json`
- `product-types.json`
- `territories.json`
- `workflow-statuses.json`

See `configs/README.md` for details.

### Planned System Docs

These files can be added as they’re defined:

- `notion-crm.md`  
  - Database structure, fields, relations, and tags  
- `google-drive-architecture.md`  
  - Folder hierarchy and naming conventions  
- `gmail-calendar-integration.md`  
  - How email + calendar connect to Notion and n8n  
- `data-flow-maps.md`  
  - Intake → CRM → Content → Automation diagrams  
- `tagging-taxonomy.md`  
  - Standard tags for clients, niches, territories, and workflows  

---

## Relationship to Other Folders

- **02_OPERATIONS** → “How we run things” (processes and playbooks)  
- **03_SYSTEMS** → “How everything is wired” (systems and architecture)  
- **04_AUTOMATIONS** → “How it runs itself” (n8n and other workflows)  

---

Keep this folder focused on **structure and integration**, not day-to-day tasks or strategy.
