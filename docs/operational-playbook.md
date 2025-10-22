# Operational Playbook

**Last Updated:** 2024-06-11  
**Status:** Active  
**Related Files:** All config files and workflow documentation

## Overview

This playbook provides day-to-day operational procedures for managing the DGA territory and subscriber system. It serves as the go-to resource for sales, operations, and support teams.

## Daily Operations Checklist

### Morning Review (Operations Team)
- [ ] Check for new form submissions in REA Onboarding Queue
- [ ] Review pending audits approaching SLA (2 business days)
- [ ] Monitor n8n workflow errors from overnight processing
- [ ] Check Master Niche List for any status conflicts
- [ ] Review territory availability report for sales team

### Sales Team Daily
- [ ] Check territory availability before client calls
- [ ] Verify niche availability in Master Niche List
- [ ] Update CRM with new client interactions
- [ ] Coordinate with MPs on REA partner negotiations

### End of Day
- [ ] Ensure all audits completed within SLA
- [ ] Process any status changes from pending to active
- [ ] Update MP dashboards with daily changes
- [ ] Verify content team received all new activation triggers

## Common Procedures

### 1. New Subscriber Onboarding

**For PB, SO-MP, SO-REA Subscriptions:**
```
1. Sales confirms territory and niche availability
2. Subscription agreement signed
3. Payment processed
4. CRM status: LEAD → PENDING
5. Operations validates compliance
6. CRM status: PENDING → ACTIVE
7. n8n triggers content creation workflow
8. Welcome package delivered
```

**Key Validation Points:**
- Territory must be available for product type
- Niche must be available (for specialist products)
- Payment must be confirmed
- Compliance checks passed

### 2. REA Partner Onboarding (Under MP Playbook)

**Standard Procedure:**
```
1. MP negotiates with REA → confirms niche availability
2. MP submits REA Onboarding Form
3. System: Status = FORM_SUBMITTED
4. Operations: 2-day audit begins
5. Audit result:
   - PASS → Status = ACTIVE → trigger content
   - FAIL → Status = AUDIT_FAILED → notify MP
   - MORE INFO → Status = MORE_INFO_NEEDED → follow up
```

**Audit Checklist:**
- [ ] REA license valid and in good standing
- [ ] Contact information verifiable
- [ ] Niche aligns with REA expertise
- [ ] No conflicts with existing partners
- [ ] MP subscription active and in good standing

### 3. Territory Conflict Resolution

**Scenario: Two subscribers want same niche**
```
1. Check Master Niche List for current status
2. First to reach PENDING status has priority
3. Notify second subscriber of conflict
4. Offer alternative niches if available
5. Update sales team on resolved conflicts
```

**Scenario: Niche claimed while in PENDING status**
```
1. Automatic rejection of second claim
2. Notify MP that negotiated niche was pre-empted
3. MP must re-negotiate with REA for different niche
4. Update Master Niche List to reflect rejection
```

### 4. Status Change Management

**Approved Status Transitions:**
| From | To | Trigger | Required Actions |
|------|----|---------|------------------|
| PENDING | ACTIVE | Audit passed | - Update Master Niche List<br>- Trigger content workflow<br>- Notify subscriber |
| ACTIVE | SUSPENDED | Payment issue | - Pause content delivery<br>- Notify subscriber<br>- Start grace period |
| SUSPENDED | ACTIVE | Payment resolved | - Resume content delivery<br>- Update all systems |
| ACTIVE | CANCELLED | Subscriber request | - Stop content immediately<br>- Release territory<br>- Archive records |

### 5. Province Expansion Readiness

**Pre-Launch Checklist:**
- [ ] Legal compliance verified for new province
- [ ] Territory structure mapped and validated
- [ ] System configurations updated
- [ ] Sales team trained on new territories
- [ ] Marketing materials prepared
- [ ] Operational workflows tested

**Launch Day:**
- [ ] Territories loaded into production
- [ ] Sales campaign initiated
- [ ] Monitor first subscriber signups
- [ ] Content creation begins for new territories

## Emergency Procedures

### System Outages

**n8n Workflow Failure:**
1. Check n8n dashboard for error details
2. Review recent form submissions that may be stuck
3. Manually process any pending records if needed
4. Notify technical team for resolution

**Master Niche List Corruption:**
1. Immediately restore from last backup
2. Compare with CRM records to identify discrepancies
3. Manually reconcile any differences
4. Implement corrective measures

### Data Conflicts

**Duplicate Territory Assignments:**
1. Identify conflicting assignments
2. Determine which subscriber has valid claim (first to PENDING)
3. Contact affected subscribers with resolution
4. Update all systems to reflect correct assignment

**Niche Assignment Errors:**
1. Identify incorrect niche assignments
2. Determine root cause (human error, system bug)
3. Contact affected parties with correction plan
4. Implement process improvement to prevent recurrence

## Communication Protocols

### Internal Notifications

**Sales Team Alerts:**
- New territory availability
- Niche conflicts requiring resolution
- Provincial expansion updates
- System outages affecting onboarding

**Operations Team Alerts:**
- Audit completions
- Workflow failures
- Data conflicts
- Compliance issues

**Content Team Alerts:**
- New subscriber activations
- Status changes affecting content delivery
- Niche-specific content requirements

### External Communications

**Subscriber Notifications:**
- Welcome packages (activation)
- Renewal reminders (30 days before expiry)
- Status change confirmations
- Territory/niche updates

**MP Specific Communications:**
- REA partner status updates
- Territory performance reports
- New feature announcements

## Reporting & Analytics

### Daily Reports
- New subscriber acquisitions
- REA partner onboarding status
- Territory utilization rates
- Audit completion metrics

### Weekly Reports
- Provincial performance comparison
- Niche popularity analysis
- Sales pipeline health
- Content delivery metrics

### Monthly Reports
- Revenue by territory and product type
- Subscriber retention rates
- Expansion progress tracking
- System performance overview

## Tools & Systems Access

### Critical Systems
| System | Purpose | Access | Owner |
|--------|---------|--------|-------|
| Master Niche List | Niche assignment tracking | Operations Team | DGA Ops |
| CRM | Subscriber management | Sales & Operations | DGA Sales |
| n8n Dashboard | Workflow monitoring | Operations & Tech | DGA Tech |
| MP Dashboard | Partner management | MPs & Operations | DGA Ops |
| Territory Maps | Visual territory management | All Teams | DGA Ops |

### Access Management
- New team members require training before system access
- Regular access reviews (quarterly)
- Immediate revocation for departed team members

## Training & Documentation

### New Hire Onboarding
- Review all configuration files and their purposes
- Practice with test territories and niches
- Shadow experienced team members for 1 week
- Complete proficiency assessment before live access

### Ongoing Training
- Monthly updates on system changes
- Quarterly refresher on operational procedures
- Annual compliance and regulatory updates

## Change History

| Date | Version | Changes |
|------|---------|---------|
| 2024-06-11 | 1.0 | Initial operational playbook |
```
