# Config Files — System Constants

This folder contains machine-readable JSON configuration files used across the DGA Platform.  
These files represent **global constants** that support workflows, audits, routing, onboarding, and automation.  
They ensure consistency across Notion, n8n, content engines, and all DGA systems.

---

## Purpose of This Folder

- Maintain a **single source of truth** for all platform-level constants  
- Standardize how niches, territories, product types, and workflow states are referenced  
- Support automations (n8n), CRM structure (Notion), and content delivery frameworks (OCGF)  
- Reduce duplication and prevent mismatched definitions across the platform  

---

## File Index

### **1. `niches.json`**
Defines official niche categories for both Mortgage Professionals (MP) and Real Estate Agents (REA).

Used in:
- Client intake  
- Persona routing  
- GEO/AIO audits  
- Content planning  
- OCGF niche-specific publishing  

---

### **2. `product-types.json`**
Defines all subscription products and tiers within the DGA Platform.

Includes:
- MP Solo  
- REA Solo  
- MP Playbook  
- Tiered volume
