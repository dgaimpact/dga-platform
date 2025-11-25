# System Config Files  
### Machine-Readable Constants for All DGA Systems

---

## Purpose

The **configs** folder stores all *machine-readable system constants* used across the Digital Growth Accelerator (DGA) platform.  
These files act as the **single source of truth** for values that must remain consistent across:

- Notion CRM  
- n8n automations  
- Audit Engine  
- Content Engine  
- Playbook Engine  
- Persona & Niche routing logic  
- Google Workspace integrations  
- StackAI Prompt Library  

By centralizing platform-wide constants, the configs folder ensures:

- Zero duplication  
- Zero naming drift  
- Easy updates to global definitions  
- Predictable behavior across systems and automations  

---

## Why This Folder Matters

These configuration files are:

- **Referenced by Systems (03_SYSTEMS)**  
- **Consumed by Automations (04_AUTOMATIONS)**  
- **Used by Prompts (08_STACKAI_PROMPT_LIBRARY)**  
- **Embedded in Workflows (02_OPERATIONS)**  

Every JSON file here directly influences DGA functionality.  
This folder is foundational to platform stability.

---

## File Index

### **1. `niches.json`**  
Defines all official niche categories recognized by DGA for:

- Mortgage Professionals (MP)  
- Real Estate Agents (REA)

Used in:

- Client intake  
- Persona classification  
- GEO/AIO audits  
- Content Engine niche logic  
- OCGF distribution patterns  
- Routing rules in Workflows 901–905  

---

### **2. `product-types.json`**  
Defines all subscription tiers and product SKUs for the platform.

Includes entries for:

- MP Solo  
- REA Solo  
- MP Playbook  
- REA Playbook  
- Volume tiers  
- Future subscription bundles  

Used in:

- Billing logic  
- CRM product assignments  
- Playbook Engine assembly  
- Account status & eligibility workflows  

---

### **3. `territories.json`**  
Contains every geographic market DGA recognizes across Canada.

Defines:

- Market names  
- Province  
- Short codes  
- Eligibility references for exclusivity rules  

Used in:

- Market exclusivity system  
- Client intake assignments  
- REA/MP cross-market routing logic  
- Entity and GEO audits  

---

### **4. `workflow-statuses.json`**  
Defines all allowed workflow states used across:

- CRM  
- n8n automations  
- Playbook progression  
- Audit Engine routing  
- Content Engine task flow  

These statuses ensure consistent task movement through:

- Intake → Processing → Delivery → QA → Completion  

---

### **5. `potential-config-files.md`**  
A draft list of additional config files that may be added as DGA evolves.

Examples may include:

- `audit-metrics.json`  
- `content-derivative-map.json`  
- `entity-weights.json`  
- `voice-blueprint-schema.json`  
- `workflow-permissions.json`  

This file acts as the future roadmap for configuration expansion.

---

### **6. `readme.md` (this file)**  
Overview of:

- Purpose  
- How configs fit into the broader DGA architecture  
- File-by-file documentation  
- Integration pathways  

---

## Integration Points

These files are referenced by:

### **03_SYSTEMS**  
- System architecture  
- Notion CRM structure  
- Audit/Content engines  
- Data validation layers  

### **04_AUTOMATIONS**  
- Telegram Gateway  
- Google integrations  
- Intake → Routing automations  
- Content Engine automation  

### **08_STACKAI_PROMPT_LIBRARY**  
Prompts use these configs for:

- Validation  
- Cross-checking  
- Dynamic substitutions  
- ID and naming consistency  

### **02_OPERATIONS**  
SOPs rely on these configs for:

- Intake instructions  
- Market assignment  
- Persona/niche routing  

---

## Editing Guidelines

- All config files **must remain machine-readable JSON**.  
- Follow consistent naming and casing conventions.  
- Add fields only after confirming cross-system impact.  
- All changes should be committed via a pull request when possible.  
- Update this README whenever a new config file is added.

---

## Status

This folder is **active and expanding**. Additional configuration standards will be added as new systems go live.

