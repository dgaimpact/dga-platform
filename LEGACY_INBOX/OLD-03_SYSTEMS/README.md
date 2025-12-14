# **03_SYSTEMS — System Architecture & Operational Logic**

This directory contains the **core system definitions** for the Digital Growth Accelerator (DGA).
Each file inside this folder represents a *system-level blueprint* that defines how a major DGA function operates — conceptually, operationally, and programmatically.

These system documents act as the “source of truth” for:

* Product logic
* Territory logic
* Workflow logic
* Intake and onboarding systems
* Content generation systems
* GEO/AI visibility systems
* Cross-system dependencies and rules

Everything in this folder is **platform-agnostic** and can be used by:

* Notion frameworks
* n8n automations
* StackAI & ChatGPT prompt systems
* The future DGA SaaS platform
* Developer handoffs

---

## **Folder Structure**

```
03_SYSTEMS/
  configs/
  SYSTEMS/
  README.md   ← You are here
```

### **`configs/`**

Machine-readable configuration files used by systems:

* `territories.json`
* `niches.json`
* `product-types.json`
* `workflow-statuses.json`
* (future) subscription rules, pricing tables, prompt schemas, etc.

These act like global constants.

---

### **`SYSTEMS/`**

Human-readable system design documents:

* `system-801-geo-ai-visibility-audit-system.md`
* `system-802-brand-voice-interview-system.md`
* `system-803-playbook-system.md`
* `system-804-lead-intake-crm-system.md`
* `system-805-content-engine-system.md`

Each follows a consistent structure:

* Purpose
* Inputs / Outputs
* Data dependencies
* Workflow states
* Automations
* APIs / prompts used
* Edge cases
* Version control

---

## **Purpose of This Folder**

The goal of `03_SYSTEMS` is to act as the **master blueprint layer** for how the DGA platform works.

This is where:

* Business rules are defined
* Operational constraints are documented
* Cross-system relationships are mapped
* The future SaaS backend logic will come from
* Developers and AI agents can reference exact system behaviour

This folder **does not contain code** — only logic, rules, definitions, and workflows.

---

## **Contributing / Updating**

When updating any system:

1. Update the appropriate system document in `SYSTEMS/`
2. Update the corresponding JSON in `configs/`
3. Commit & Push through Replit → GitHub
4. Note the update in the system’s `Version History` section

All changes here should remain **intentionally deliberate and well-documented**.
