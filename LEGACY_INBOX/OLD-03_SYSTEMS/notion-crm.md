# DGA Notion CRM Specification  
*A complete schema for the Client Database inside the DGA Notion Workspace.*

## Purpose
This document defines the structure, fields, relationships, and workflows for the DGA CRM inside Notion.  
The CRM is the **central tracking system** for all MP and REA clients, leads, and content cycles.

It acts as the single source of truth for:
- Onboarding  
- Brand Voice development  
- Content production (OCGF)  
- Audits  
- Territory and niche mapping  
- Automation (n8n)  

---

# 1. CRM Structure Overview

The CRM is a single database titled:

**“DGA Clients”**

This database organizes all MP and REA clients, leads, and subscribers across all tiers.

### Roles captured:
- Mortgage Professionals  
- Real Estate Agents  
- Prospects / Leads  
- Active Subscribers  
- Paused / Cancelled Clients  

---

# 2. Required Fields (Schema Specification)

Below is the complete field list with recommended Notion property types.

| Field Name | Type | Purpose |
|------------|-------|---------|
| **Client Name** | Title | Primary record identifier |
| **Status** | Select | Lead → Active → Paused → Cancelled |
| **Subscription** | Select | REA Solo / MP Solo / MP Playbook |
| **Tier** | Select | High / Medium / Low (OCGF volume tier) |
| **Profession** | Select | MP / REA |
| **Niche** | Relation (to Niches DB or Select) | Primary client niche |
| **Market / Territory** | Relation (to Territories DB) or Select | Region mapping (Core/Mid/Outer) |
| **Email** | Email | Main contact |
| **Company** | Text | Brokerage or business name |
| **Brand Voice** | Relation (Brand Voice Blueprint) | Connects to BVB system |
| **Voice Summary** | Text | 2–3 lines summarizing voice attributes |
| **CTA Style** | Select | Direct / Soft / Advisory |
| **Workflow Status** | Select | Follows workflow-statuses.json |
| **Content Cycle** | Relation (to Content Calendar DB) | Links each monthly cycle |
| **Audit Score** | Number | GEO/AIO score (0–100) |
| **Tags** | Multi-select | Free-form classification |
| **Created** | Created time | Auto field |
| **Updated** | Last edited time | Auto field |

---

# 3. Field Details & Rules

## 3.1 Status (Select)
Allowed values:
- Lead  
- Onboarding  
- Active  
- Paused  
- Cancelled  

This field is used by operational workflows and automations.

---

## 3.2 Subscription (Select)
Based on product-types.json:
- MP Solo  
- REA Solo  
- MP Playbook  

This determines which onboarding workflow applies.

---

## 3.3 Tier (Select)
Matches OCGF content volumes:
- High  
- Medium  
- Low  

**Used for:**
- Content calendar generation  
- Volume-based automation triggers  

---

## 3.4 Profession (Select)
Allowed values:
- MP  
- REA  

Controls branching in:
- Engagement workflows  
- Content derivation  
- Audit templates  

---

## 3.5 Brand Voice (Relation)
Links to:
/01_FRAMEWORKS/brand-voice/blueprints/

Each client must have:
- Interview Notes  
- BVB document  
- Summary properties in CRM  

This ensures content creators and automations always have voice data available.

---

## 3.6 Workflow Status (Select)
Values pulled from `workflow-statuses.json`.

Examples:
- intake_received  
- waiting_for_documents  
- bvb_in_progress  
- content_cycle_active  
- audit_pending  

This allows n8n to trigger actions.

---

## 3.7 Content Cycle (Relation)
Each monthly content package links to:
- Foundation article  
- Derivative assets  
- Posting calendar  

This is the backbone for the OCGF.

---

# 4. Required Views

## 4.1 **Active Subscribers**
Filters:
- Status = Active  
- Shows: Subscription, Tier, Profession, Market, BVB  

## 4.2 **Onboarding Pipeline**
Filters:
- Status = Lead OR Onboarding  
- Sort: Workflow Status ASC  

## 4.3 **MP Clients**
Filters:
- Profession = MP  

## 4.4 **REA Clients**
Filters:
- Profession = REA  

## 4.5 **Needs Brand Voice**
Filters:
- Brand Voice = Empty  
- Status = Active OR Onboarding  

## 4.6 **Content Cycle View**
Grouped by:
- Content Cycle  
- Tier  

---

# 5. Integration With Other Systems

## 5.1 n8n
The CRM is referenced by automations for:
- Intake → CRM record creation  
- BVB completion → Workflow status updates  
- Content cycle creation  
- Notifications  

Fields required by automations:
- Status  
- Workflow Status  
- Email  
- Subscription  
- Tier  
- Niche  
- Market  

---

## 5.2 Google Forms → Intake
The intake form populates:
- Client Name  
- Profession  
- Email  
- Niche  
- Market  
- Subscription  

Then triggers:
- CRM creation  
- Onboarding workflow  
- Brand Voice Interview  

---

## 5.3 Brand Voice System
CRM fields store:
- Voice Summary  
- Voice Attributes  
- CTA Style  
- Relation to full BVB  

---

## 5.4 OCGF System
CRM fields used:
- Subscription  
- Tier  
- Niche  
- Profession  
- Market  

---

# 6. Naming Conventions

### General Rules:
- Use **Pascal Case** for database names  
- Use **Title Case** for field names  
- Use **lowercase-hyphens** for workflow statuses (matching JSON)

---

# 7. Required Automations (Future)

Here are planned automations tied to the CRM:

- New intake → create CRM record  
- Create BVB folder and Interview Notes  
- Update Workflow Status during onboarding  
- Create monthly content cycle  
- Notify MP/REA when cycle delivered  
- Archive cancelled clients automatically  

---

# End of Notion CRM Specification
