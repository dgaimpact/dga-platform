ED-P2-App2-Onboarding-Flow-Contract
Document Type

Execution Definition (ED)

Pillar

P2 — Intake & Onboarding

Purpose

Define the complete, governed onboarding flow for App 2, which supports:

Playbook (PB) Child Account onboarding

Enterprise (EN) Seat onboarding

This document is authoritative for flow sequencing, validation rules, column writes, UX language constraints, and admin responsibility boundaries.

No build, refactor, or automation may proceed without alignment to this contract.

Scope & Non-Goals
In Scope

Child onboarding under existing PB Parent accounts

Seat onboarding under existing EN Parent accounts

Invite-based and parent-linked flows

Validation, inheritance, and write constraints

Explicitly Out of Scope

Parent account creation

Territory selection or confirmation

CASL capture

Plan selection or pricing logic

Admin overrides or seat management UI

Schema changes of any kind

Source of Truth

Supabase is the system of record.

No schema changes permitted

No ALTER TABLE operations

No speculative columns

All writes must target existing columns only

Core Principles

Parent-driven governance — Child and seat records inherit from parent

Minimal public capture — Collect only what is required

Neutral UX language — Never imply confirmation or reservation

Explicit write contracts — Every step declares allowed writes

Admin authority preserved — Final activation handled outside public apps

FLOW A — PLAYBOOK (PB) CHILD ONBOARDING
Entry

User arrives via parent-scoped URL:

/onboard/child?parent={PARENT_ACCOUNT_ID}

Step A0 — Parent Validation (Read-Only)
Purpose

Ensure the parent account is eligible to accept a PB child.

Checks

Parent exists

Parent account_status = ACTIVE

Parent plan_type = PB

Parent seat capacity not exceeded

Outcome

PASS → Proceed

FAIL → Block with friendly message

Writes

None

Step A1 — Contact Information
Fields Captured

first_name

last_name

email

phone

Behavior

New record INSERT

parent_id assigned

profession_type inherited from parent

Writes

first_name

last_name

email

phone

parent_id

profession_type

Step A2 — Professional Identity
Fields Captured

Professional title (free text)

Brokerage / Firm name

License number

Required for MP

Optional for REA

Storage

Written to admin_notes as a structured PRO_ID block

Writes

admin_notes (append only)

Step A3 — Google Business Profile (PB Only)
Behavior

Identical to App 1 GBP matching flow.

Options

Match existing GBP

Request exception (explicit checkbox + note)

Writes

gbp_place_id

gbp_url

gbp_exception_enabled

gbp_exception_note

Completion — PB Child
UX

Confirmation screen only

Neutral language: “Submitted for review”

Writes

None

FLOW B — ENTERPRISE (EN) SEAT ONBOARDING
Entry

User arrives via invite-based URL:

/onboard/seat?token={INVITE_TOKEN}

Step B0 — Invite Validation (Read-Only)
Purpose

Validate eligibility before data capture.

Checks

Token valid

Token not expired

Token not previously used

Parent exists

Parent account_status = ACTIVE

Parent plan_type = EN

Seat capacity available (soft check only)

Outcome

PASS → Proceed

FAIL → Block with friendly message

Writes

None

Step B1 — Contact Information
Fields Captured

first_name

last_name

email

phone

Behavior

New record INSERT

parent_id assigned

profession_type inherited from invite

Writes

first_name

last_name

email

phone

parent_id

profession_type

Step B2 — Professional Identity
Fields Captured

Professional title (free text)

Brokerage / Firm name

License number (optional)

Storage

Written to admin_notes as a structured PRO_ID block

Writes

admin_notes (append only)

Completion — EN Seat
UX

Confirmation screen only

Language: “Submitted for onboarding review”

No territory confirmation

No seat confirmation

Writes

None

INHERITANCE RULES (MANDATORY)
Attribute	Source	Editable
parent_id	URL / Invite	No
profession_type	Parent / Invite	No
market_territory_code	Parent	No
plan_type	Parent	No
account_status	System/Admin	No
COLUMN WRITE MATRIX (APP 2)
Column	PB Child	EN Seat
first_name	Yes	Yes
last_name	Yes	Yes
email	Yes	Yes
phone	Yes	Yes
parent_id	Yes	Yes
profession_type	Inherited	From invite
admin_notes	Yes	Yes
gbp_place_id	Yes	No
gbp_url	Yes	No
gbp_exception_*	Yes	No
STRICTLY FORBIDDEN IN APP 2

Writing to casl_* fields

Writing to market_territory_code

Writing to plan_type

Writing to account_status

Any INSERT without parent_id

Any flow without parent/invite validation

Any public confirmation of seat or territory availability

UX LANGUAGE RULES
Allowed

“Submitted for review”

“Pending onboarding confirmation”

“Seat request received”

Forbidden

“Confirmed”

“Reserved”

“Your territory”

“Seat locked”

“Available seat”

ADMIN RESPONSIBILITIES (OUTSIDE APP 2)

Parent account creation

Seat limit configuration

Invite token generation and expiry

Seat approval or rejection

Account status promotion (PROSPECT → ACTIVE)

GBP handling for EN seats

FINAL STATUS

APP 2 — DEFINITION COMPLETE

This document supersedes all prior drafts and discussions.

No implementation may proceed until this contract is explicitly approved by DGA Admin.
