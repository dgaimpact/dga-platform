REG–P2–PROFESSION_CODES

Canonical registry of profession codes used for P2 intake, territory assignment, and market capacity enforcement.

Version: v1.0
Created: 2025-12-17
Status: Canonical (Active)

Primary Pillar: P2 — Intake & Onboarding
Consumed By:

P2 (Replit Onboarding Apps)

Supabase (dga_accounts, capacity enforcement)

Automations (seat/cap checks)

1. Authority & Scope

This Registry defines the canonical profession codes for DGA accounts that participate in:

Profession assignment during onboarding

Market capacity enforcement (Market Type × Profession)

Territory assignment eligibility checks

This document is:

authoritative

non-executing

non-procedural

logic-free 

REGISTRY_TEMPLATE_CANONICAL

If a system, SOP, or Execution Doctrine conflicts with this registry, this registry prevails. 

REGISTRY_TEMPLATE_CANONICAL

2. Registry Rules (Non-Negotiable)

Field names are immutable

Types must be enforced exactly

No implicit values are permitted

No inference is allowed

If a field is not listed here, it does not exist 

REGISTRY_TEMPLATE_CANONICAL

3. Field Definitions
Field Name	Description	Type	Required	Allowed Values / Format	Lock State	Primary Pillar	Consumed By
profession_code	Canonical profession identifier	TEXT	Yes	Uppercase code (2–8 chars). Example: MP	Locked	P2	Replit, Supabase, Capacity
profession_name	Human-readable profession label	TEXT	Yes	Title Case	Locked	P2	UI, Reporting
is_active	Whether the profession is valid for new assignments	BOOLEAN	Yes	true/false	Locked	P2	Replit gating
created_at	Record creation timestamp	TIMESTAMPTZ	Yes	System-generated	Locked	P2	Supabase
4. Enumerations
PROFESSION_CODE
Value	Description
MP	Mortgage Professional
REA	Real Estate Agent
MKTG	Marketing Agency
5. Cross-Field Constraints (Declarative Only)

profession_code must be unique.

profession_code is required for any account that consumes market capacity.

is_active = false prohibits assignment to new accounts (existing records may remain unchanged).

6. Change Control

Changes require version increment.

Field removal is prohibited without deprecation cycle.

Changes must be reviewed for downstream impact. 

REGISTRY_TEMPLATE_CANONICAL

END — REG–P2–PROFESSION_CODES
