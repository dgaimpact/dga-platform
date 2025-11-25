# 03_SYSTEMS  
### System Architecture, Data Structures & Platform Configurations

---

## Purpose

The **03_SYSTEMS** directory documents all *technical systems* that power the Digital Growth Accelerator (DGA) platform.

Where **01_FRAMEWORKS** defines strategy and **02_OPERATIONS** defines execution,  
**03_SYSTEMS** defines the *infrastructure* that makes DGA work at scale:

- Data structures  
- Platform integrations  
- System logic  
- Configuration standards  
- Architecture patterns  
- JSON schemas and registries  

This folder is the canonical reference for anyone building, maintaining, or integrating DGA systems.

---

## Scope

Systems include any technical layer that:

- Stores or structures data  
- Provides a functional capability (CRM, Content Engine, Audit Engine)  
- Connects to external platforms (Notion, Google Workspace, n8n, Telegram)  
- Defines schemas, standards, or configuration rules  
- Supports automations, workflows, or StackAI prompts  

If a document describes how something *works behind the scenes*, it belongs in **03_SYSTEMS**.

---

## Current Folder Contents

The folder includes (as of now):

### **configs/**  
A folder containing all DGA system configuration files.  
These govern how Notion, CRM, and various engines store and interpret information.

Current files include:

- `niches.json`  
- `product-types.json`  
- `territories.json`  
- `workflow-statuses.json`  
- `potential-config-files.md`  
- `readme.md` (config-level explanation)

### **readme.md**  
A high-level overview of the Systems folder.  
Great place for contributors to understand the purpose of the folder.

### **notion-crm.md**  
Documentation for the Notion CRM structure, including:

- Database architecture  
- Key properties  
- Data flow into DGA systems  
- Integration reference for n8n and future StackAI connectors

---

## Future Expected Contents

As DGA’s systems mature, this folder will include:

### **Audit Engine Architecture**  
- How audits are structured internally  
- JSON schema for GEO/AI reports  
- System logic to support Workflow-901

### **Content Engine Architecture**  
- How long-form → derivative → OCGF outputs are generated  
- Entity alignment rules  
- File and asset structures

### **Playbook Engine Architecture**  
- How MP + REA playbooks are assembled  
- Data → template → system mapping

### **System Schema Registry**  
A global index of all:

- JSON schemas  
- Required inputs/outputs  
- Data-types  
- Validation rules  

This ensures consistency across Systems, Workflows, Automations, and Prompts.

### **Platform Integration Blueprints**  
Documentation for:

- Google Drive folder logic  
- Gmail integration rules  
- Calendar sync protocol  
- GitHub branching and sync logic  
- Telegram Gateway (high-level view; details live in **04_AUTOMATIONS**)

---

## When to Add or Update a System File

Add a file here when you are documenting:

- A system that powers a workflow  
- A structural dependency for prompts or frameworks  
- A schema or registry used by automations  
- A functional capability (CRM rules, Content Engine logic, Audit Engine logic)  
- A cross-platform structure (Notion → Google → GitHub)  

Do **not** put execution steps here — those belong in:

- **02_OPERATIONS** (SOPs, instructions)  
- **04_AUTOMATIONS** (workflow logic)

---

## Relationship to Other Folders

- **01_FRAMEWORKS** → defines the strategy  
- **03_SYSTEMS** → defines the structure  
- **04_AUTOMATIONS** → executes system logic  
- **08_STACKAI_PROMPT_LIBRARY** → interacts with systems for dynamic outputs  
- **02_OPERATIONS** → uses systems to onboard and deliver DGA services  

This folder sits at the center of DGA’s technical layer.

---

## Status

This folder is **active** and will expand as new systems are designed and implemented.  
All future DGA systems must be documented here before being integrated into automations or prompt libraries.

