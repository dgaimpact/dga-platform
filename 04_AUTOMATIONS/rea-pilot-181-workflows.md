# n8n Workflows for 4-REA Pilot Program

**Last Updated:** 2025-10-22  
**Status:** Development  
**Related Files:** `docs/rea-onboarding-workflow.md`, `docs/operational-playbook.md`, `docs/mp-performance-tracking-guide.md`

## Overview

This document outlines the critical n8n automation workflows required for the 4-REA pilot program. These workflows will validate the core business processes before full-scale implementation.

## Pilot Program Scope

### Test Participants:
- **1 MP Playbook Subscriber**
- **4 REA Partners** (2 under MP Playbook, 2 REA Solo subscribers)

### Test Duration: 90 days
### Key Validation Metrics:
- REA onboarding success rate
- Content delivery accuracy
- Cross-promotion implementation
- GEO/AIO visibility improvements
- MP performance accountability

---

## COMPLETE WORKFLOW SEQUENCE

```
MP Playbook Onboarding
    ↓
WORKFLOW: rea-onboarding-audit (REA Audit Gate)
    ↓
WORKFLOW: monthly-content-delivery (Content Creation)
    ↓
WORKFLOW: cross-promotion-sync (Quality Control)
    ↓
WORKFLOW: performance-monitoring (Daily Tracking)
    ↓
WORKFLOW: mp-30day-audit (MP Accountability)
    ↓
WORKFLOW: feedback-iteration (Continuous Improvement)
```

---

## Critical Workflow #1: REA Onboarding & Audit Automation

### Workflow Name: `rea-onboarding-audit`
**Trigger:** REA Onboarding Form Submission

```yaml
Workflow Steps:
1. Webhook: Receive form data from REA onboarding form
2. Data Validation: Check required fields (license, niche, territory)
3. Google Sheets: Create record in "Pilot REA Master List" with status "PENDING_AUDIT"
4. Slack: Notify operations team "New REA pending audit" with link to audit checklist
5. Email: Send acknowledgment to MP "REA [Name] received, audit in progress"
6. Delay: Wait for manual audit completion (24-48 hour SLA)
7. Google Sheets: Monitor for status change (operations team updates)
8. Conditional: 
   - If status = "AUDIT_PASSED" → Continue to activation
   - If status = "AUDIT_FAILED" → Notify MP and REA, stop workflow
   - If status = "MORE_INFO_NEEDED" → Request info from MP, restart delay
9. If AUDIT_PASSED:
   a. Google Sheets: Update status to "ACTIVE"
   b. Generate: REA folder structure in Google Drive
   c. Email: Send welcome package to REA
   d. Trigger: Content planning workflow
```

### Audit Criteria (Manual Review):
- [ ] REA license valid and in good standing
- [ ] Contact information verifiable  
- [ ] Niche aligns with REA expertise
- [ ] No conflicts with existing partners
- [ ] MP subscription active and in good standing

---

## Critical Workflow #2: MP 30-Day Performance Audit

### Workflow Name: `mp-30day-audit`
**Trigger:** 30 days after MP Playbook activation + monthly recurring

```yaml
Workflow Steps:
1. Cron: Daily check for MPs at 30-day mark + monthly recurring
2. Google Sheets: Query "MP Master List" for MPs needing audit
3. Data Collection from MP Tracking Sheet (Top Row):
   a. MP implementation score (own content posting)
   b. REA partner count vs. target
   c. Average REA implementation scores
   d. Cross-promotion compliance rate
   e. Referral activity and quality
4. Performance Scoring (Weighted):
   - MP Implementation: 40% (own content consistency)
   - REA Management: 40% (partner performance)
   - Business Results: 20% (referrals, visibility)
5. Conditional Scoring:
   - If score >= 80% → "HIGH_PERFORMER" status
   - If score 60-79% → "SATISFACTORY" with improvement plan
   - If score < 60% → "NEEDS_INTERVENTION" status
6. Google Sheets: Update MP status and audit results
7. Email: Send detailed audit report to MP
8. Slack: Notify DGA team of MP audit results
9. Conditional: If "NEEDS_INTERVENTION" → Trigger MP coaching workflow
```

### MP Audit Metrics:
**MP Individual Performance:**
- Content posting consistency (MP's own channels)
- Article publication (3,000+ words, cross-linked)
- Responsiveness to DGA communications

**REA Partnership Management:**
- Active REA partners vs. target
- REA implementation scores (average)
- REA retention and satisfaction
- Cross-promotion compliance

**Business Outcomes:**
- Referral flow from REA partners
- GEO/AIO visibility improvements
- Partnership health indicators

---

## Critical Workflow #3: Monthly Content Delivery

### Workflow Name: `monthly-content-delivery`
**Trigger:** 1st of each month + manual override (ONLY for AUDITED REAs)

```yaml
Workflow Steps:
1. Cron: Monthly trigger (1st at 9:00 AM)
2. Google Sheets: Get ACTIVE REA list (status = "ACTIVE")
3. Loop: For each ACTIVE REA
   a. Check: MP status (must be "ACTIVE" or "HIGH_PERFORMER")
   b. Generate: Monthly content calendar (High/Medium/Low tier)
   c. Google Docs: Create foundation article template (3,000+ words)
   d. Google Drive: Populate REA folder with content assets
   e. Generate: Platform-specific content variations
   f. Email: Send content package to REA
4. Google Sheets: Log content delivery for each REA
5. Slack: Notify "Monthly content delivery complete"
6. Email: Send delivery report to DGA team
```

### Content Delivery Rules:
- **Only for REAs with "ACTIVE" status**
- **Only if MP is in good standing** (not "NEEDS_INTERVENTION")
- **Tier-based volume** (High/Medium/Low)
- **Cross-promotion requirements** built into all content

---

## Critical Workflow #4: MP-REA Cross-Promotion Sync

### Workflow Name: `cross-promotion-sync`
**Trigger:** REA article publication + MP article publication

```yaml
Workflow Steps:
1. Webhook: REA article published (via website CMS)
2. Webhook: MP article published (via website CMS)  
3. Data Validation: Check both articles are live and meet requirements
4. Link Validation: Verify cross-links are active and proper
5. Conditional: 
   - If links broken → Alert team for immediate fix
   - If articles not 3,000+ words → Quality alert
   - If successful → Continue to promotion
6. Google Sheets: Record successful cross-promotion with timestamp
7. Slack: Notify "Cross-promotion active for [REA-MP pair]"
8. Email: Send confirmation to both REA and MP
9. Trigger: Social promotion workflow
```

### Cross-Promotion Requirements:
- Both articles minimum 3,000 words
- Active cross-links with natural anchor text
- Simultaneous publication (within 4-hour window)
- Schema markup implemented

---

## Critical Workflow #5: Performance Monitoring & Alerts

### Workflow Name: `performance-monitoring`
**Trigger:** Daily at 8:00 AM + real-time alerts

```yaml
Workflow Steps:
1. Cron: Daily check (8:00 AM)
2. Google Sheets: Get yesterday's implementation data for ALL participants
3. Social Media APIs: Check REA and MP posting activity
4. GEO Tools: Check visibility scores (daily delta)
5. Conditional Monitoring:
   a. REA: If implementation < 50% → Slack alert to MP
   b. MP: If own implementation < 60% → DGA team alert
   c. Visibility: If drop > 10% → Investigation alert
   d. Cross-promotion: If missing → Compliance alert
6. Google Sheets: Update performance dashboard
7. Weekly: Generate performance report (Monday 9:00 AM)
8. Monthly: Pre-audit data collection for MP 30-day audit
```

### Alert Thresholds:
- **REA Implementation:** < 50% for 7+ days = alert
- **MP Implementation:** < 60% for 7+ days = alert  
- **Visibility Drops:** > 10% = immediate investigation
- **Cross-Promotion Missing:** 48+ hours = compliance issue

---

## Critical Workflow #6: Feedback & Iteration Collection

### Workflow Name: `feedback-iteration`
**Trigger:** Weekly + milestone events + post-audit

```yaml
Workflow Steps:
1. Cron: Every Friday 2:00 PM + post-audit triggers
2. Google Sheets: Get participant list for feedback
3. Email: Send structured feedback form
4. Delay: 48 hours for responses
5. Google Forms: Collect and parse feedback
6. Data Processing: Categorize feedback
   - UI/UX Issues
   - Content Quality
   - Process Improvements
   - Technical Problems
7. Google Sheets: Add to feedback backlog with priority scoring
8. Slack: Post weekly feedback summary
9. Conditional: High-priority issues → Immediate team alert
10. Monthly: Generate feature request prioritization matrix
```

### Feedback Integration:
- **MP Audit Results:** Incorporate into improvement plans
- **REA Implementation Issues:** Feed into process optimization
- **Technical Problems:** Route to development team
- **Content Feedback:** Inform content strategy adjustments

---

## Technical Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Set up n8n instance (cloud or self-hosted)
- [ ] Create Google Workspace structure (Sheets, Drive, Docs)
- [ ] Configure webhook endpoints
- [ ] Set up Slack integration
- [ ] Create email templates
- [ ] Build MP and REA master tracking sheets

### Phase 2: Audit Workflows (Week 2)
- [ ] Build REA onboarding audit workflow
- [ ] Build MP 30-day audit workflow
- [ ] Create audit checklists and scoring systems
- [ ] Test audit notification and escalation paths

### Phase 3: Content & Monitoring (Weeks 3-4)
- [ ] Build content delivery workflow
- [ ] Build cross-promotion sync workflow  
- [ ] Build performance monitoring workflow
- [ ] Build feedback collection workflow
- [ ] Test end-to-end sequence

### Phase 4: Testing & Validation (Week 5)
- [ ] Test with 1 REA (full audit → content → monitoring)
- [ ] Validate MP audit triggers and scoring
- [ ] Test all alert mechanisms and thresholds
- [ ] Train DGA team on workflow monitoring
- [ ] Document operational procedures

### Phase 5: Pilot Execution (Weeks 6-14)
- [ ] Launch with 4 REA partners and 1 MP
- [ ] Monitor all workflows in production
- [ ] Collect and implement feedback
- [ ] Adjust workflows based on real usage
- [ ] Prepare scaling documentation

---

## Error Handling & Recovery

### Critical Failure Points:
1. **REA Audit Stalled:** Escalate after 48 hours, manual override
2. **MP Audit Failure:** Immediate coaching intervention
3. **Content Delivery Failure:** Regenerate + 24-hour extension
4. **Cross-Promotion Break:** Manual fix + process improvement
5. **Performance Data Gap:** Fallback to manual data collection

### Success Metrics for Workflows:
- **REA Audit:** < 48 hours completion, 100% compliance
- **MP Audit:** 100% on-time execution, actionable insights
- **Content Delivery:** 100% on-time, tier-appropriate volume
- **Cross-Promotion:** < 4-hour sync, 100% link accuracy
- **Performance Data:** < 24-hour freshness, 95% accuracy
- **Feedback:** > 60% response rate, 48-hour processing

---

## Required Integrations & APIs

### Essential for Pilot:
- Google Workspace (Sheets, Drive, Docs, Gmail)
- Slack (notifications and alerts)
- Email (SendGrid or similar)
- Webhook endpoints (for CMS integration)
- Social media APIs (posting verification)
- GEO tools API (visibility tracking)

### Monitoring & Analytics:
- Real-time dashboard for workflow status
- Alert escalation matrix
- Performance trend analysis
- Audit compliance tracking

---

## Quality Assurance Gates

### Before REA Activation:
- [ ] License verification complete
- [ ] Niche conflict check passed
- [ ] MP subscription active and in good standing
- [ ] Technical capability confirmed

### Before Content Delivery:
- [ ] REA status = "ACTIVE"
- [ ] MP status = "ACTIVE" or "HIGH_PERFORMER" 
- [ ] Previous month implementation > 50%
- [ ] Cross-promotion history positive

### Before MP Continuation:
- [ ] 30-day audit score >= 60%
- [ ] REA partner satisfaction > 70%
- [ ] Content implementation > 60%
- [ ] Business results trending positive

---

**Next Steps:** 
1. Begin with Phase 1 foundation setup
2. Prioritize audit workflows (critical quality gates)
3. Test MP audit before REA onboarding
4. Document any workflow adjustments during testing

These 6 core workflows now provide complete coverage of the DGA operational model with proper quality gates and accountability measures for both MPs and REAs.
