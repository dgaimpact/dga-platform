# DGA Naming Convention Standard  
**Version 3.0 — November 2025**  
_A foundational standard governing all IDs, file names, system objects, and entities across the Digital Growth Accelerator (DGA) Platform._

---

## 1. Purpose  
This standard ensures all DGA entities—clients, subscribers, workflows, systems, audits, data objects, and platform files—follow a **unified, deterministic naming structure**.  
The goal:  
- Total consistency  
- Machine-readability  
- Zero ambiguity  
- Seamless interoperability across Notion, GitHub, Replit, n8n, Google Workspace, StackAI, and future platforms  

This document is a **foundational architecture rule**, not a suggestion. All downstream standards, systems, and workflows must comply.

---

## 2. Core Principles  

### **2.1 Deterministic Structure**  
Every ID, filename, and code string must be:  
- predictable  
- reversible (you can interpret its meaning from structure alone)  
- machine-readable  
- free of ambiguous characters  

### **2.2 No Slashes Allowed**  
The following characters are banned:  
- `/`  
- `\`  
- `?`  
- `:`  
- `*`  
- `"`  
- `<`  
- `>`  
- `|`  
- spaces in code strings  

These cause conflicts in:  
- GitHub paths  
- URLs  
- n8n variables  
- Notion relations  
- StackAI schema  

### **2.3 Hyphen-Based Segmentation**  
All IDs follow:

```
segment1-segment2-segment3-[segment4]
```

Segments always use lowercase letters and hyphens.

---

## 3. Global Segment Definitions  
Every ID is composed from the following segment types.

### **3.1 Profession Codes (Primary Role of Subscriber)**  
| Profession | Code |
|-----------|-------|
| Mortgage Professional | mp |
| Real Estate Agent | rea |
| (Future) Lawyer | law |
| (Future) Financial Advisor | fin |
| (Future) Insurance Advisor | ins |

Profession = who is subscribing.

---

### **3.2 Subscription Type Codes**  
| Subscription Type | Code | Description |
|-------------------|-------|-------------|
| Playbook | pb | Major engine subscription with downstream partners |
| Solo MP | solo-mp | Niche-exclusive independent MP subscription |
| Solo REA | solo-rea | Niche-exclusive independent REA subscription |
| Partner (child record under PB) | partner | A non-subscriber partner inside a MP Playbook (e.g., PB → REA, PB → Planner) |

---

### **3.3 Partner Category Codes (PB Partner Track)**  
This defines the *type* of partner inside a Playbook subscription.

| Partner Category | Code | Meaning |
|------------------|-------|---------|
| Realtor | rea | MP Playbook client uses REA as partner type |
| Planner | plan | (Future) Financial advisor partner |
| Lawyer | law | (Future) Legal partner |
| Insurance | ins | (Future) Life/disability/ins partner |

Example future-ready codes:  
- `pb-mp-partner-plan`  
- `pb-mp-partner-law`  

---

### **3.4 Niche Codes**  
Niche codes are maintained in `02_data/niches.json` and always follow:

```
<profession>-<niche-name-kebab>
```

Examples:  
- `mp-first-time-buyer`  
- `mp-investor-financing`  
- `rea-luxury-home`  
- `rea-divorce-specialist`  
- `rea-condo`  

These codes are the **single source of truth**.

---

### **3.5 Territory Codes**  
Territories follow the strict Ontario set:  

```
ON-001 … ON-078
```

Future provinces:  

- BC-001 …  
- AB-001 …  
- QC-001 …  

Stored in:  
`02_data/territories.json`

---

### **3.6 Entity Type Codes**  
Defines what the ID represents:

| Entity | Code |
|--------|-------|
| Client / subscriber | client |
| Partner (REA under PB) | partner |
| Audit Report | audit |
| Workflow execution | run |
| Territory | terr |
| Niche | niche |
| Status change entry | status |
| Playbook | pb |
| System Engine reference | sys |
| Workflows | wf |

---

## 4. Master ID Patterns  

### **4.1 Subscriber ID (primary record)**  
Used in Notion clients DB, n8n Lead Intake, GitHub audit logs.

```
<profession>-<subscription-type>-<territory-code>-<unique-id>
```

Example:  
```
mp-pb-on-047-4f92c1
rea-solo-rea-on-046-a9cd12
mp-solo-mp-on-062-82bd91
```

Notes:  
- Niche is **not** included here (niche can change).  
- Territory is static once assigned.  
- Unique ID always 5–6 hex characters.

---

### **4.2 Partner ID (REA or future partners inside a Playbook)**  
Structure:

```
pb-mp-partner-<partner-type>-<territory-code>-<niche-code>-<unique-id>
```

Example (REA partner under a MP Playbook):  
```
pb-mp-partner-rea-on-047-rea-luxury-home-a8f131
```

This creates full separation between:  
- subscriber type  
- partner type  
- territory logic  
- niche exclusivity

---

### **4.3 Audit Record ID**  
Used for each 30-day audit cycle.

```
audit-<client-or-partner-id>-<yyyy-mm-dd>
```

Example:  
```
audit-mp-pb-on-047-4f92c1-2025-12-01
audit-pb-mp-partner-rea-on-047-rea-first-time-buyer-a8f131-2025-12-01
```

---

### **4.4 Workflow Execution ID (n8n, Replit, StackAI)**  

```
run-<system-or-workflow-code>-<client-or-partner-id>-<timestamp>
```

Example:  
```
run-wf-audit30-mp-pb-on-047-4f92c1-2025-12-01T14-05-33Z
```

---

## 5. Naming Rules for Files, Systems, Workflows, and Prompts

### **5.1 StackAI Prompt Library**  
Prompts follow:

```
<CategoryPrefix>-<ThreeDigitID> – <Descriptive Name>
```

But filenames must follow:

```
categoryprefix-id-descriptive-name.md
```

Example:  
```
system-801-geo-ai-visibility-audit-system.md
standards-601-output-format-standard.md
workflow-901-playbook-assembly.md
```

---

## 6. ID Assignment Rules

### **6.1 Subscriber Exclusivity Rules**  
- `pb-mp` = territory-exclusive  
- `solo-mp` = territory + niche exclusive  
- `solo-rea` = territory + niche exclusive  
- `pb-mp-partner-rea` = niche exclusive **within the PB territory only**  
  - A solo REA can exist in the same territory & niche concurrently (no conflict with MP Playbook REAs)

### **6.2 No Multi-PB for One Subscriber**  
An MP cannot subscribe to:  
- PB-MP-REA  
and  
- PB-MP-Plan  
inside **one subscription**.

Different partner types = different DGA product lines = different subscriptions.

---

## 7. Future-Proofing Rules  

### **7.1 Adding New Professions**  
Just append new codes:  
- `law`  
- `fin`  
- `ins`  
ID patterns remain valid.

### **7.2 Adding New Playbook Types**  
New Playbooks must follow:

```
pb-<profession>-partner-<partner-type>
```

Example:  
```
pb-fin-partner-law
pb-ins-partner-rea
```

---

## 8. Validation Rules (Required by Systems & Workflows)

### **8.1 ID Must Parse Cleanly**  
Every ID must be readable using segmentation:

```
segment1-segment2-segment3...
```

### **8.2 Territory Must Be Valid**  
Must exist in `territories.json`.

### **8.3 Niche Must Exist in the Niche Registry**  
Must be present in `niches.json`.

### **8.4 Profession Must Be One of the Approved Codes**  

### **8.5 Subscription Type Must Be Approved**  

### **8.6 No Slashes or Spaces Allowed**  

---

## 9. Live Examples  

### **MP Playbook Subscriber**  
```
mp-pb-on-047-4f92c1
```

### **REA Partner Under MP Playbook**  
```
pb-mp-partner-rea-on-047-rea-investor-specialist-91d3a4
```

### **Solo Mortgage Professional**  
```
mp-solo-mp-on-062-7bf1d2
```

---

## 10. Governance  
This standard is governed by:

```
08_stackai_prompt_library/00_foundations/stackai-governance-standard.md
```

All updates require a pull request and version-tag update.

---

## 11. Version History  
**3.0 — November 2025**  
- Added partner-type architecture  
- Removed slashes from naming  
- Added support for future PB variants  
- Synced with niches.json and territories.json  
- Formalized ID patterns  
- Clarified MP vs REA exclusivity  

**2.0 — Deprecated**  
- Old separator rules  
- Old niche set  
- No cross-platform compatibility  

**1.0 — Legacy**  
- Initial high-level notes  

---

# END OF STANDARD
