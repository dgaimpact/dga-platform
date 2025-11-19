# Brand Voice — Notion Implementation Guide  
*A complete operational workflow for managing Brand Voice Blueprints (BVBs) inside the DGA Notion workspace.*

## Purpose
This guide outlines how the Brand Voice Framework is integrated into the DGA Notion system, including:
- where Brand Voice data is stored  
- how it connects to onboarding  
- how it supports OCGF content creation  
- how it integrates with CRM records  
- how it is accessed during audits and REA engagement workflows  

This ensures internal consistency and a single source of truth for every client’s voice.

---

# 1. Notion Structure Overview

Brand Voice is used in four main parts of the Notion ecosystem:

1. **Clients Database (CRM)**
2. **Brand Voice Folder (within DGA Brand Voice System)**
3. **Onboarding Workflow Pages**
4. **OCGF Content Engine**

The structure ensures every workflow can reference the BVB without duplication.

---

# 2. Where Brand Voice Lives in Notion

## 2.1 Primary Storage: “Brand Voice Blueprints” Folder
Inside the **DGA Brand Voice System**, create:

/Brand Voice Blueprints
/Client Name — Brand Voice Blueprint
/Client Name — Interview Notes

Each client gets two linked pages:
- **Interview Notes** (raw data from the script)  
- **Brand Voice Blueprint** (clean final document)  

Use the BVB Markdown template from GitHub.

---

## 2.2 Client CRM (Single Source of Reference)
In the **Clients Database**, add the following properties:

| Property Name | Type | Purpose |
|---------------|------|---------|
| Brand Voice | Relation → Brand Voice Blueprint | Direct link to BVB |
| Voice Summary | Text | 2–3 line description for quick reference |
| Voice Attributes | Multi-select | Main voice traits |
| Tone Modifiers | Multi-select | Context-based tones |
| CTA Style | Select | Direct, soft, advisory |
| Language Preferences | Text | Words to use and avoid |

These properties allow fast access during content creation and audits.

---

# 3. Onboarding Workflow Integration

## 3.1 Intake → Interview → Blueprint Pipeline
The onboarding workflow should include:

1. **Assign Brand Voice Interview**  
2. **Create Interview Notes page**  
3. **Conduct interview using script**  
4. **Convert notes → Blueprint using the BVB template**  
5. **Link final BVB to CRM record**  

## 3.2 Automations (Optional)
Future n8n enhancements may include:
- Creating the Brand Voice folder structure automatically  
- Updating CRM entries upon BVB completion  
- Sending notifications when BVB updates occur  

---

# 4. Content Creation Workflow (OCGF Integration)

## 4.1 Before Creating the Foundation Article
Writers or systems should:
- open the client’s BVB  
- review Voice Attributes  
- check preferred language and tone modifiers  
- follow CTA and story guidelines  

## 4.2 During Derivation (Short-Form, Social, Scripts)
DGA creators must:
- keep vocabulary consistent  
- maintain chosen tone  
- avoid disallowed language  
- adapt to platform formatting without changing voice  

## 4.3 Content Calendar & Approval
Each month’s content plan links directly to:
- the BVB  
- the foundation article draft  
- derivative content drafts  

This keeps everything centralized and eliminates mismatched tone.

---

# 5. Usage in Audits & Engagement Systems

## 5.1 GEO/AIO Audits
Audit responses should reference:
- Voice consistency  
- Tone alignment with niche  
- Message clarity  

## 5.2 MP–REA Engagement Playbook
When REAs have brand-protection concerns, link to:
- their BVB  
- examples from their own voice  
- commitment to brand identity preservation  

## 5.3 Email Sequences & Scripts
Pull from:
- Messaging DNA  
- Signature Phrases  
- Tone Modifiers  

This ensures every client-facing interaction feels consistent.

---

# 6. Maintenance & Version Control

## 6.1 Update Cycle
The BVB should be reviewed:
- quarterly  
- after niche changes  
- after major client feedback  
- when new messaging patterns develop  

## 6.2 Version Logging
In the BVB file:
- Log all updates using the Update Log table  
- Note who made the edits and why  

## 6.3 Syncing With GitHub
The official templates (script, blueprint, wrapper) remain in GitHub.  
Notion links to them but does not duplicate framework files.

---

# 7. Quick Access Workflow (Internal)

Whenever generating content:
1. Open the client’s CRM entry  
2. Click **Brand Voice → Open Blueprint**  
3. Review Voice Attributes, Language Preferences, and CTA Style  
4. Use AI Wrapper Prompt in ChatGPT  
5. Generate content  
6. Double-check against BVB  

This ensures system-wide consistency.

---

# End of Brand Voice Notion Implementation Guide


