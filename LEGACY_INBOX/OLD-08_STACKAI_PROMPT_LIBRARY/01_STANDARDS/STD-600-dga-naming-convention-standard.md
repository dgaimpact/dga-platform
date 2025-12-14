# DGA Naming Convention Standard  
### _Platform-wide ID, taxonomy, and classification rules for all Systems, Workflows, Prompts, Automations, and CRM entities._

---

## 1. Purpose

The DGA Naming Convention Standard provides a **unified, machine-readable classification system** used across every layer of the DGA platform, including:

- StackAI Prompt Library  
- n8n automations  
- Notion CRM & Intake  
- GitHub system files & JSON configs  
- Audit Engine / Content Engine / Playbook Engine  
- Territory / Niche / Profession logic  

This is a **platform-critical standard** that ensures:

- Predictable structure  
- Zero collisions  
- Auditability  
- Automated lookup & routing  
- Consistent prompt behaviour  
- System interoperability  

---

## 2. Core Principles

### **2.1 No Slashes (`/`) in IDs**
Slashes create issues in:

- URLs  
- JSON  
- Automations  
- File paths  
- Mermaid diagrams  
- Replit & GitHub  

All multi-segment concepts use `-` only.

---

### **2.2 IDs must be deterministic**
Anyone should be able to infer:

- the category  
- the profession  
- the subscription type  
- the role  
- the index  

…just by looking at an ID.

---

### **2.3 IDs never change once created**
IDs are permanent.  
When a concept evolves → **version the content**, not the ID.

---

## 3. Global Category Prefixes

| Category | Prefix | Example |
|---------|--------|---------|
| **Standards** | `STD` | `STD-601-output-format` |
| **Systems** | `SYS` | `SYS-801-geo-visibility-audit` |
| **Workflows** | `WF` | `WF-901-playbook-assembly` |
| **Platforms** | `PLT` | `PLT-703-notion-integration` |
| **Audits** | `AUD` | `AUD-401-competitor-scan` |
| **Content** | `CNT` | `CNT-301-longform-article` |
| **Personas** | `PRS` | `PRS-102-first-time-buyer` |
| **Niches** | `NIC` | `NIC-205-mp-investor-financing` |
| **Other / Utilities** | `UTL` | `UTL-903-standards-validator` |

These prefixes align with folder and ID-band structures in GitHub and StackAI.

---

## 4. Profession Codes

| Profession | Code |
|------------|------|
| Mortgage Professional | `MP` |
| Real Estate Agent | `REA` |
| Future (e.g., Planners, Lawyers) | Reserved |

---

## 5. Subscription Type Codes

| Subscription Tier | Code |
|-------------------|------|
| Playbook (profession-specific) | `PB` |
| Solo – Mortgage Professional | `SO-MP` |
| Solo – Real Estate Agent | `SO-REA` |
| Future subscription families | Reserve structure using same pattern |

**Playbook note:**  
Each Playbook is tied to a **profession**, so we extend the code:

- `PB-MP` = Playbook for Mortgage Professionals  
- `PB-REA` = future Playbook for Real Estate Agents  
- `PB-PLN` = potential future Playbook for Planners, etc.

This creates space for multi-vertical expansion without renaming.

---

## 6. Partner-Type Codes (Playbook Ecosystem)

These codes identify who the Playbook subscriber is partnering with.

| Partner Type | Code | Example |
|--------------|------|---------|
| Real Estate Agent (REA partner inside PB-MP) | `RP-REA` | Used in REA Onboarding Workflow |
| Future Partner (lawyer, planner, etc.) | `RP-XXX` | Placeholder |

This ensures we can build:

- PB-MP (with RP-REA)  
- PB-MP (with RP-LAW?)  
- PB-REA (with RP-MP?)  
- PB-PLN (future)  

…all without collisions.

---

## 7. Territory Codes

Territory codes follow the structure:

```
<ProvinceCode>-<ThreeDigitID>
```

Examples:

- `ON-001`  
- `ON-047`  
- `ON-078`  

Each territory ID is **authoritative and static**.

Territory codes appear in:

- CRM  
- Audit Engine  
- Subscription validation  
- n8n routing  
- FSA lookup JSON  
- Territory availability workflows  

---

## 8. Niche Codes

Niche codes follow:

```
NIC-<profession>-<slug>
```

Examples:

- `NIC-MP-investor-financing`
- `NIC-MP-bfs-self-employed`
- `NIC-REA-luxury`
- `NIC-REA-downsizer`
- `NIC-REA-waterfront`

All niche definitions in GitHub must match these codes exactly.

---

## 9. DGA Entity IDs (CRM)

This governs the **Notion Intake → Routing → Audit → Content → 30-Day Cycle** workflow.

### **9.1 Lead ID**
```
LEAD-<timestamp>-<random>
```

### **9.2 Client ID**
```
CLI-<profession>-<subscription>-<territory>-<niche?>
```

Examples:

### Solo MP  
```
CLI-MP-SO-MP-ON-047-NIC-MP-investor-financing
```

### Solo REA  
```
CLI-REA-SO-REA-ON-046-NIC-REA-luxury
```

### MP Playbook (subscriber)  
```
CLI-MP-PB-MP-ON-047
```

### REA partner under MP Playbook  
```
CLI-REA-RP-REA-ON-047-NIC-REA-luxury
```

This pattern is **100% deterministic** and already aligns with your territory rules.

---

## 10. File Naming Conventions (GitHub)

### Always use:

- lowercase  
- hyphens  
- no spaces  
- no slashes  
- semantic names  

Example:

```
sys-801-geo-ai-visibility-audit-system.md
nic-mp-investor-financing.json
territories-ontario.json
fsa-to-territory-lookup.json
split-fsa-rules.json
```

---

## 11. Prompt File Naming

Match the ID itself:

```
SYS-801-geo-ai-visibility-audit-system.md
STD-601-output-format-standard.md
WF-901-playbook-assembly-workflow.md
```

Case sensitivity is allowed in Prompts because they’re human-facing.

---

## 12. Versioning Rules

### **12.1 IDs never change**  
### **12.2 Content versions increment inside the file**  
Example:

```
version: 1.2
last_updated: 2025-11-25
```

### **12.3 Breaking changes require major-version bump**  
Minor updates → bump minor.  
Spelling/format → no bump required.

---

## 13. Reserved Codes (Behind the Scenes)

The following codes are reserved for future professions, subscription types, and partners:

- Professions: `PLN`, `LAW`, `ACC`, `ADV`  
- Playbooks: `PB-PLN`, `PB-LAW`  
- Partner types: `RP-PLN`, `RP-LAW`  

This future-proofs the entire ID ecosystem.

---

## 14. Governance

This standard is upheld by:

- `STD-602-instruction-protocol`  
- `UTL-903-standards-validator`  
- GitHub review process  
- n8n automated ID checker (future)

All new prompts, workflows, automations, and CRM features must comply.

---

## 15. Appendix: Quick Examples

### **A. MP Playbook subscriber (territory-exclusive)**  
```
CLI-MP-PB-MP-ON-047
```

### **B. REA partner inside MP’s PB ecosystem**  
```
CLI-REA-RP-REA-ON-047-NIC-REA-downsizer
```

### **C. MP Solo niche subscriber**  
```
CLI-MP-SO-MP-ON-059-NIC-MP-bfs-self-employed
```

### **D. REA Solo niche subscriber**  
```
CLI-REA-SO-REA-ON-035-NIC-REA-first-time-home
```

### **E. System Prompt**  
```
SYS-801-geo-ai-visibility-audit
```

### **F. Standard Prompt**  
```
STD-601-output-format
```

---

# End of Standard  
**Maintainer:** Steve Dainard  
**System:** Digital Growth Accelerator (DGA)  
