### **File: `docs/expansion-framework.md`**

```markdown
# Provincial Expansion Framework

**Last Updated:** 2025-10-22  
**Status:** Active  
**Related Files:** `configs/territories.json`, `configs/product-types.json`, `docs/business-model.md`

## Overview

This framework outlines the standardized process for expanding DGA operations into new Canadian provinces. The system is designed to maintain consistency while allowing for provincial market adaptations.

## Provincial Expansion Sequence

### Phase 1: Market Analysis & Prioritization
**Activities:**
- Demographic and market size analysis
- Competitive landscape review
- Regulatory environment assessment
- Real estate market dynamics study

**Output:** Provincial expansion priority list with timeline

### Phase 2: Regulatory & Legal Setup
**Activities:**
- Business registration in new province
- Review of real estate/mortgage advertising regulations
- Compliance with provincial privacy laws
- Tax registration and setup

**Output:** Legal clearance to operate

### Phase 3: Territory Structure Design
**Activities:**
- Map major metropolitan areas and regions
- Define Core/Mid/Outer boundaries for each region
- Assign territory numbers continuing national sequence
- Validate with local market experts

**Output:** Complete territory structure for the province

### Phase 4: System Configuration
**Activities:**
- Update all configuration files
- Train sales and operations teams
- Set up provincial-specific workflows
- Prepare marketing materials

**Output:** Province-ready operational system

## Province Code Standards

### Official Province Codes
| Province | Code | Example Territory |
|----------|------|-------------------|
| Ontario | `ON` | `ON-TOR-Metro-Core` |
| British Columbia | `BC` | `BC-VAN-Metro-Core` |
| Alberta | `AB` | `AB-CAL-Metro-Core` |
| Quebec | `QC` | `QC-MTL-Metro-Core` |
| Manitoba | `MB` | `MB-WPG-Metro-Core` |

### Territory Numbering Protocol
- Territory numbers continue **national sequence**
- Do not reset numbers for new provinces
- Last Ontario territory: `ON-025` → First BC territory: `BC-026`

## Territory Naming Convention

### Standard Format
```
[Province Code]-[Region]-[Area]-[Level]
```

### Examples by Province

**British Columbia (BC)**
```
BC-VAN-Metro-Core        # Vancouver Metro Core
BC-VAN-Metro-Mid         # Vancouver Metro Mid
BC-VAN-FraserValley-Core # Fraser Valley Core  
BC-VI-South-Core         # Vancouver Island South Core
BC-OK-Kelowna-Core       # Okanagan Kelowna Core
```

**Alberta (AB)**
```
AB-CAL-Metro-Core        # Calgary Metro Core
AB-CAL-Metro-Mid         # Calgary Metro Mid
AB-EDM-Metro-Core        # Edmonton Metro Core
AB-EDM-Metro-Mid         # Edmonton Metro Mid
AB-CEN-RedDeer-Mid       # Central Alberta Red Deer Mid
```

## Exclusivity Code Generation

### Process for New Provinces
1. **Identify Last Territory Number:** Check the highest `TerritoryNumber` in existing provinces
2. **Continue Sequence:** Assign next numbers to new provincial territories
3. **Generate Codes:** Apply standard code format with new province code

### Example: BC Expansion
Assuming last Ontario territory was `ON-025`:

| Province | Territory Name | Territory Number | Exclusivity Codes |
|----------|----------------|------------------|-------------------|
| BC | `BC-VAN-Metro-Core` | 026 | `PB-CORE-BC-026`, `SO-MP-CORE-BC-026`, etc. |
| BC | `BC-VAN-Metro-Mid` | 027 | `PB-MID-BC-027`, `SO-MP-MID-BC-027`, etc. |
| BC | `BC-VI-South-Core` | 028 | `PB-CORE-BC-028`, `SO-MP-CORE-BC-028`, etc. |

## Provincial Market Adaptations

### Pricing Strategy
- Market-based pricing analysis for each province
- Consider local income levels, real estate prices, and competition
- May require different price points for Core/Mid/Outer tiers

### Regulatory Considerations
| Province | Key Considerations |
|----------|-------------------|
| BC | - Real Estate Services Act<br>- BC Financial Services Authority<br>- Specific advertising disclosure requirements |
| AB | - Real Estate Act of Alberta<br>- RECA regulations<br>- Mortgage broker licensing differences |
| QC | - French language requirements<br>- Different legal system (Civil Code)<br>- Unique regulatory body (OACIQ) |

### Content Localization
- Adapt content for provincial market nuances
- Local real estate terminology and practices
- Provincial-specific compliance requirements
- Local success stories and case studies

## Implementation Checklist

### Pre-Launch
- [ ] Complete market analysis and territory mapping
- [ ] Legal and regulatory compliance verified
- [ ] All system configurations updated
- [ ] Sales team trained on new province
- [ ] Marketing materials prepared
- [ ] Operational workflows tested

### Launch Phase
- [ ] Territories loaded into Master List
- [ ] Sales campaign initiated
- [ ] First subscribers onboarded
- [ ] Content creation begun for new territories

### Post-Launch
- [ ] Performance monitoring established
- [ ] Feedback collection from early subscribers
- [ ] Adjustments made based on market response

## Success Metrics

### Expansion KPIs
- Time from decision to first subscriber
- Territory uptake rate (% sold in first 90 days)
- Revenue per territory compared to forecast
- Subscriber satisfaction scores in new province

### Operational Metrics
- System configuration accuracy
- Sales team proficiency with new territories
- Content delivery timeline adherence

## Change History

| Date | Version | Changes |
|------|---------|---------|
| 2024-06-11 | 1.0 | Initial expansion framework |
