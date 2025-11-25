# Config Files — System Constants

This folder contains machine-readable configuration files used across the DGA Platform.

These configs act as **global constants** for:

- Territory and FSA lookup  
- Niche definitions for Mortgage Professionals (MP) and Real Estate Agents (REA)  
- Product types and subscription rules  
- Lifecycle/status logic for subscribers, REA onboarding, and content workflows  

They are consumed by:

- Notion CRM structures  
- n8n automations  
- StackAI prompt systems  
- Future SaaS/API endpoints

All files are versioned in GitHub and treated as the **single source of truth** for DGA operational logic.

---

## Folder Layout

```text
03_SYSTEMS/
  configs/
    README.md
    product-types.json
    workflow-statuses.json
    potential-config-files.md
    data/
      territories.json
      fsa-territory-lookup.json
      split-fsa-rules.json
      niches.json
