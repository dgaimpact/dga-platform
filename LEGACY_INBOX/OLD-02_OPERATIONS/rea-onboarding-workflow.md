# REA Partner Onboarding Workflow

**Last Updated:** 2025-10-22  
**Status:** Active  
**Related Files:** `configs/product-types.json`, `configs/territories.json`, `configs/niches.json`

## Overview

This document outlines the end-to-end process for onboarding Real Estate Agent (REA) partners under an MP Playbook subscription, from initial negotiation through to content activation. This workflow enables Mortgage Professionals to build their referral network while maintaining niche exclusivity and content quality standards.

## Workflow Diagram

```
MP Negotiates → Form Submission → Pending Record → Audit Check → Status Active → Content Creation
      ↓              ↓               ↓             ↓            ↓            ↓
   Business      Data Capture    Temp Hold     Compliance    Activation   Delivery
```

## Roles & Responsibilities

| Role | Responsibilities |
|------|------------------|
| **Mortgage Professional (MP)** | - Negotiate with REA partners<br>- Submit onboarding form<br>- Communicate status to REA |
| **DGA Operations** | - Audit REA information<br>- Approve/Reject applications<br>- Monitor workflow |
| **Content Team** | - Create niche-specific content<br>- Deliver to appropriate channels |
| **n8n Automation** | - Process status changes<br>- Trigger content creation<br>- Update master lists |

## Step-by-Step Process

### Step 1: MP Negotiation & Form Submission

**Actor:** Mortgage Professional (Playbook subscriber)

**Prerequisites:**
- MP must have active `PB` subscription in target territory
- REA must agree to exclusive niche focus
- Niche must be available in the territory (check Master Niche List)

**Form Fields (REA Onboarding Form):**
```yaml
required_fields:
  - mp_territory_code: "PB-CORE-ON-001"  # MP's territory code
  - rea_full_name: "Lisa Wong"
  - rea_contact_email: "lisa@example.com"
  - rea_license_number: "123456789"
  - agreed_niche: "First-Time Buyer Seminars"
  - mp_notes: "Strong local presence, 5 years experience"

optional_fields:
  - rea_phone: "+1-555-0123"
  - rea_company: "Metro Realty"
  - target_activation_date: "2024-07-01"
```

### Step 2: System Creates Pending Record

**Automated Process:**
1. Form submission triggers n8n workflow
2. System validates:
   - MP territory code exists and is active
   - Niche is available in territory (not `ACTIVE` or `PENDING`)
3. Creates record with status: `PENDING`

**Data Storage:**
- **Master Niche List:** Adds entry with `Status: PENDING`
- **MP Dashboard:** Shows new pending REA partner
- **CRM:** Creates contact record with pending status

**Example Master Niche List Entry:**
| TerrID | Territory | Product | Exclusivity Code | Subscriber | Niche | Status | Date Added |
|--------|-----------|---------|------------------|------------|-------|---------|------------|
| 001 | ON-TOR-Metro-Core | PB-REA | PB-REA-CORE-ON-001-03 | Lisa Wong | First-Time Buyer Seminars | PENDING | 2024-06-11 |

### Step 3: Internal Audit & Compliance Check

**Actor:** DGA Operations Team

**Audit Checklist:**
- [ ] REA license is valid and in good standing
- [ ] Contact information is verifiable
- [ ] Niche aligns with REA's demonstrated expertise
- [ ] No conflicts with existing partners
- [ ] MP subscription is current and in good standing

**Timeline:** Audit should be completed within 2 business days of form submission.

**Possible Outcomes:**
- ✅ **APPROVED** → Proceed to Step 4
- ❌ **REJECTED** → Notify MP with reason, remove pending record
- ⚠️ **MORE INFO NEEDED** → Request additional details from MP

### Step 4: Status Change to Active

**Trigger:** Successful audit completion

**Manual Process:**
- Operations team updates status from `PENDING` to `ACTIVE` in admin interface

**Automated Process (Future State):**
- n8n workflow automatically updates status when audit criteria are met
- Integration with license verification APIs

### Step 5: n8n Workflow Execution

**Automated Actions when Status = ACTIVE:**

1. **Lock the Niche:**
   ```javascript
   // Update Master Niche List
   updateMasterNicheList(rea_record, 'ACTIVE');
   ```

2. **Notify Stakeholders:**
   - **MP:** "Your REA partner Lisa Wong is now active!"
   - **REA:** "Welcome to DGA! Your content for 'First-Time Buyer Seminars' is being prepared."
   - **Content Team:** Creates task in project management system

3. **Trigger Content Development:**
   ```javascript
   // Pass to content pipeline
   triggerContentCreation({
     subscriber: "Lisa Wong",
     territory: "ON-TOR-Metro-Core", 
     niche: "First-Time Buyer Seminars",
     product_type: "PB-REA",
     exclusivity_code: "PB-REA-CORE-ON-001-03"
   });
   ```

4. **Update MP Dashboard:**
   - Move REA from "Pending Partners" to "Active Partners"
   - Update available niche count for territory

## Error Handling & Edge Cases

### Niche Conflict During Pending Period
**Scenario:** Another subscriber claims the same niche while REA is `PENDING`
**Resolution:** 
- Immediate rejection of second claim
- Notification to MP that their negotiated niche was pre-empted
- MP must re-negotiate with REA for different niche

### Audit Failure
**Scenario:** REA fails compliance check
**Resolution:**
- Status changed to `AUDIT_FAILED`
- MP notified with specific reasons
- Pending record removed from Master Niche List
- Niche becomes available again

### MP Subscription Lapses
**Scenario:** MP cancels Playbook subscription while REAs are active
**Resolution:**
- All dependent `PB-REA` records are set to `INACTIVE`
- Content delivery stops immediately
- Niches become available for other subscribers

## Related Automation Workflows

See technical specifications in:
- `docs/technical-spec.md#rea-onboarding-automation`
- `n8n/workflows/rea-onboarding.json`

## Change History

| Date | Version | Changes |
|------|---------|---------|
| 2024-06-11 | 1.0 | Initial workflow documentation |

rint for the REA onboarding process. It clearly separates manual and automated steps, defines roles and responsibilities, and handles edge cases.

**Next file?** I recommend `docs/niche-management-guide.md` to explain how niches are tracked and managed across the entire system.
