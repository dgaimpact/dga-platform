# P2 — REPLIT ONBOARDING LOGIC (ED-MAPPED)
Mapped 1:1 to: **ED–P2–ACTIVATION & CAPACITY ENFORCEMENT**

---

## DOCUMENT METADATA

**Document Type:** Implementation Spec (Replit)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** P2_REPLIT_ONBOARDING_ED_MAPPED.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Depends On:**
- REG–P2–PROFESSION_CODES
- REG–P2–MARKET_CAPACITY
- ED–P2–ACTIVATION & CAPACITY ENFORCEMENT

---

## 1. App Surfaces (Separated)

### A) Subscriber Onboarding App (SO / PB Master)
Purpose: create/complete P2 intake and request activation.

### B) PB-REA Referral Partner Onboarding App (PB_CHILD)
Purpose: create/complete P2 intake under an ACTIVE parent MP; must not consume market capacity.

---

## 2. Canonical Status Model (P2-only)

### Account Status (`account_status`)
- PROSPECT
- ACTIVE
- HOLD
- REJECTED

### P2 Status (`p2_status`)
- P2_STARTED
- P2_VALIDATED
- P2_ACTIVATION_REQUESTED
- P2_ACTIVATION_BLOCKED
- P2_ACTIVE_CONFIRMED

---

## 3. ED Mapping Matrix (Strict)

| ED Clause | Replit Enforcement | Blocking Condition |
|---|---|---|
| ED §3 Activation Timing | Replit does not attempt capacity checks until activation request step | Any pre-activation attempt to force ACTIVE |
| ED §4 Preconditions | Replit validates required fields before activation request | Missing `profession_code`, missing market atomic pair |
| ED §5 Capacity Model | Replit calls capacity precheck (optional) but relies on SB trigger as source of truth | Missing cap data or seats_remaining = 0 |
| ED §6 Seat Rules | Replit assigns seat_class by app surface | PB_CHILD ever set to MARKET_CAPACITY |
| ED §7 Atomic Market | Replit writes market_name + territory_code in one update | Any attempt to write one without the other |
| ED §8 Failure Behavior | Replit surfaces explicit error and sets P2_ACTIVATION_BLOCKED | Any “silent retry” or hidden fallback |

---

## 4. Data Writes (Supabase Tables)

Primary base table: `public.dga_accounts`  
Canonical view for read: `public.v_accounts_canonical`

Required fields used by Replit:
- `id`
- `account_status`
- `p2_status`
- `profession_code`
- `seat_class`
- `province`
- `territory_code`
- `market_name`
- `gbp_url` / `gbp_place_id` (if used)
- `website_url` (if used)

---

## 5. Subscriber Onboarding Flow (SO / PB Master)

### STEP 0 — Start / Identify Record
**Input:** email/phone or account locator (your chosen key)  
**Action:** create or resume `dga_accounts` row  
**Write:**
- `p2_status = P2_STARTED`
- `account_status = PROSPECT` (unchanged if already PROSPECT)

**Block if:** record is `REJECTED`

---

### STEP 1 — Profession Assignment (REG–P2)
**Input:** profession selection  
**Write:**
- `profession_code` (must exist in `profession_codes` and be active)

**Block if:**
- profession_code missing/invalid/inactive

---

### STEP 2 — Intake Capture (P2 fields)
Capture required P2 intake fields (as defined in your intake schema).  
**Write:** only P2 fields; no activation.

**Block if:** required intake fields missing.

---

### STEP 3 — Market Resolution (FSA → Territory)
**Input:** postal code (FSA)  
**Action:** call SB function or query mapping table to resolve:
- `territory_code`
- `market_name`

**Write (ATOMIC):**
- `territory_code`
- `market_name`

**Block if:**
- FSA unresolved
- Territory unresolved
- Market write cannot be atomic (must write both fields together)

---

### STEP 4 — Validation Gate
**Action:** ensure all activation preconditions satisfied.

**Checks (must all pass):**
- `profession_code` present
- `seat_class = MARKET_CAPACITY`
- `territory_code` + `market_name` present (atomic pair)
- other required P2 fields complete

**Write:**
- `p2_status = P2_VALIDATED`

**Block if:** any precondition missing.

---

### STEP 5 — Activation Request (ED §3 / §8)
**Action:** attempt to set account ACTIVE.

**Write Attempt (single update):**
- `account_status = ACTIVE`
- `p2_status = P2_ACTIVATION_REQUESTED`

**Expected SB behavior:**
- SB trigger enforces capacity and blocks if full or invalid.

**On Success:**
- `p2_status = P2_ACTIVE_CONFIRMED`

**On Failure (catch exception):**
- `p2_status = P2_ACTIVATION_BLOCKED`
- Surface error message verbatim to user/admin UI
- Do not retry silently

---

## 6. PB-REA Referral Partner Onboarding Flow (PB_CHILD)

### STEP 0 — Access Gate (Parent MP Account ID)
**Input:** `parent_mp_account_id` (password)  
**Action:** verify parent exists and is ACTIVE.

**Block if:**
- parent not found
- parent `account_status != ACTIVE`

---

### STEP 1 — Create Child Record
**Write new dga_accounts row:**
- `seat_class = PB_CHILD`
- `account_status = PROSPECT`
- `p2_status = P2_STARTED`
- `profession_code = REA` (fixed) OR selectable if you allow multiple partner professions

**Write relationship link** (table per your model):
- `parent_account_id`
- `child_account_id`
- `relationship_type = PB_REFERRAL_PARTNER`

**Block if:** parent seat limit reached (max 5) (enforced at P2 gating + DB if you add trigger later)

---

### STEP 2 — Intake + Market Resolution
Same as Subscriber flow Steps 2–3, with same atomic write rule:
- write `territory_code` + `market_name` together

---

### STEP 3 — Validation Gate
Same as Subscriber Step 4, except:
- `seat_class = PB_CHILD`

---

### STEP 4 — Activation Request (NO MARKET CAPACITY)
Attempt:
- `account_status = ACTIVE`

Expected SB behavior:
- Market capacity trigger must ignore PB_CHILD (no seat consumption)

On Success:
- `p2_status = P2_ACTIVE_CONFIRMED`

On Failure:
- `p2_status = P2_ACTIVATION_BLOCKED`
- Surface error verbatim

---

## 7. Error Handling (Non-Negotiable)

- No inference
- No silent fallback
- No silent retry loops on activation
- All DB exceptions must be shown (cleaned for UI) and logged

---

## 8. Required Supabase Calls (Interface Contract)

Replit must implement these SB interactions:

### A) Profession Validation
- Read: `profession_codes` where `is_active = true`

### B) Market Resolution
One of:
- RPC: `fn_resolve_territory_from_fsa_on(fsa)` → returns `territory_code`, `market_name`
- OR direct table queries on ON FSA→territory mapping + market territory table

### C) Activation Attempt
- Update `dga_accounts` with `account_status = ACTIVE`
- Handle SB trigger exceptions as authoritative result

---

## 9. Acceptance Tests (Must Pass)

### Subscriber (MARKET_CAPACITY)
- Cannot activate without profession_code
- Cannot activate without territory_code+market_name
- Cannot activate when seats_remaining = 0
- Can activate when seats_remaining > 0

### PB_CHILD
- Cannot start without valid ACTIVE parent
- Does not reduce market seats
- Can activate even when market is “full” (only if PB_CHILD exclusion is enforced)

---

END — P2 REPLIT ONBOARDING LOGIC (ED-MAPPED)
