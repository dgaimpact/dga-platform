# Niche Management Guide

**Last Updated:** 2025-11-18  
**Status:** Active  
**Related Files:** `configs/niches.json`, `configs/product-types.json`, `docs/rea-onboarding-workflow.md`

## Overview

This guide explains how niches are managed, assigned, and tracked across all territory levels and product types. Proper niche management is critical to maintaining the exclusivity value proposition for all subscribers.

## Core Principles

### 1. Niche Exclusivity is Absolute
- No two subscribers in the same territory can have the same niche
- Applies across **all product types** (`PB`, `SO-MP`, `SO-REA`, `PB-REA`)
- Exclusivity is enforced at the **territory-level** (Core, Mid, Outer)

### 2. One Niche Per Specialist
- `SO-MP`, `SO-REA`, and `PB-REA` subscribers must choose exactly one niche
- `PB` subscribers (MP Playbook) operate as generalists with no niche requirement

### 3. First-Come, First-Served
- Niches are reserved when a subscriber's status becomes `PENDING`
- During pending status, the niche is temporarily locked

## The Master Niche List

### Structure
The Master Niche List is the single source of truth for niche assignments across all territories.

| Column | Description | Example |
|--------|-------------|---------|
| `TerrID` | Unique territory identifier | `001` |
| `TerritoryName` | Full territory name | `ON-TOR-Metro-Core` |
| `Product` | Product type | `PB-REA` |
| `ExclusivityCode` | Unique subscriber code | `PB-REA-CORE-ON-001-03` |
| `Subscriber` | Subscriber name | `Lisa Wong, REA` |
| `Niche` | Assigned niche | `First-Time Buyer Seminars` |
| `Status` | Current status | `ACTIVE` |
| `DateAdded` | When record was created | `2024-06-11` |
| `LastUpdated` | When record was modified | `2024-06-11` |

### Status Lifecycle
```
AVAILABLE → PENDING → ACTIVE → INACTIVE
     ↓         ↓         ↓        ↓
   Open    Audit     Live    Ended
           Period
```

## Niche Assignment Rules by Product Type

### MP Playbook (PB)
- **Niche Requirement:** None (generalist)
- **Can claim niches?** No, but can onboard REAs who claim niches
- **Role:** Territory manager and REA aggregator

### MP Solo (SO-MP) 
- **Niche Requirement:** One exclusive niche
- **Can claim niches?** Yes
- **Coexistence:** Can share territory with PB and SO-REA

### REA Solo (SO-REA)
- **Niche Requirement:** One exclusive niche  
- **Can claim niches?** Yes
- **Coexistence:** Can share territory with PB and SO-MP

### REA under MP Playbook (PB-REA)
- **Niche Requirement:** One exclusive niche
- **Can claim niches?** Yes, but dependent on PB subscriber
- **Activation:** Requires parent PB to be active

## Niche Conflict Prevention

### During Onboarding
1. **Pre-submission Check:** Sales/MP checks Master Niche List for availability
2. **System Validation:** Form submission validates niche isn't taken
3. **Pending Lock:** Niche is temporarily reserved during audit
4. **Active Confirmation:** Niche is permanently assigned upon activation

### Conflict Scenarios & Resolution

| Scenario | Resolution |
|----------|------------|
| Two subscribers want same niche | First to reach `PENDING` status wins |
| Niche claimed while in PENDING | Second claim is automatically rejected |
| MP cancels with active PB-REAs | All PB-REA niches become available |
| Audit fails on PENDING niche | Niche returns to AVAILABLE status |

## Niche Audit Process

### Automated Checks
- License validation (where available via API)
- Territory boundary compliance
- Product type permissions

### Manual Checks
- Professional standing verification
- Niche alignment with subscriber expertise
- Business reputation review

## Best Practices

### For Sales Team
- Always check Master Niche List before promising exclusivity
- Explain niche rules clearly to prospects
- Use the "Available Niches" report for sales conversations

### For Mortgage Professionals
- Negotiate niches with REA partners before form submission
- Monitor your territory's niche availability in the MP Dashboard
- Plan niche strategy for your REA recruitment

### For Operations Team
- Process audit checks within 2 business days
- Communicate clearly when niches are rejected
- Maintain accurate Master Niche List

## Tools & Reports

### Available Niches Report
Shows all unclaimed niches by territory, sorted by demand.

### Niche Conflict Alert
Automated notification when niche conflicts are detected.

### Territory Niche Map
Visual representation of niche coverage across territories.

## Change History

| Date | Version | Changes |
|------|---------|---------|
| 2024-06-11 | 1.0 | Initial niche management guide |
