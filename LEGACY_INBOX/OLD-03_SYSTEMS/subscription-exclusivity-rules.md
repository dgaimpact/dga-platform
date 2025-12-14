# DGA Subscription & Exclusivity Rules

Defines how DGA subscriptions, territories, and niches interact across all streams.

This document is **system-level logic** used by:

- Intake workflows  
- Territory & niche availability checks  
- AI-Agent onboarding assistants  
- Future automation (n8n / StackAI)

---

## 1. Core Dimensions

Every subscriber record must be evaluable using these fields:

- **profession**  
  - `MP` (Mortgage Professional)  
  - `REA` (Real Estate Agent)  

- **plan_type**  
  - `PB-MP` – Playbook subscription for Mortgage Professionals  
  - `SO-MP` – Solo Mortgage Professional  
  - `SO-REA` – Solo Real Estate Agent  
  - `PB-REA` – Dependent REA under a PB-MP (for internal use only)

- **territory_code**  
  - One of `ON-001` → `ON-078`  
  - Territories and FSAs defined in:  
    - `03_SYSTEMS/configs/territory-map-ontario.json`  
    - `03_SYSTEMS/configs/fsa-territory-lookup-ontario.json`  

- **niche_code**  
  - For **MPs**: from `professions.MP` in `03_SYSTEMS/configs/niches.json`  
  - For **REAs**: from `professions.REA` in the same file  

- **status**  
  - Subscriber lifecycle from `03_SYSTEMS/configs/status-types.json`  
  - Only **ACTIVE** (and sometimes **PENDING**) count for exclusivity

---

## 2. Product Types (Summary)

Aligned with `03_SYSTEMS/configs/product-types.json`:

- **PB-MP**  
  - Name: “MP Playbook Subscription”  
  - Profession: `MP`  
  - Exclusivity: **territory-only**  
  - Dependents: may have many `PB-REA` partners in that territory

- **SO-MP**  
  - Name: “MP Solo Subscription”  
  - Profession: `MP`  
  - Exclusivity: **territory + niche** (for MPs only)  
  - No dependents

- **SO-REA**  
  - Name: “REA Solo Subscription”  
  - Profession: `REA`  
  - Exclusivity: **territory + niche** (for REAs only)  
  - No dependents

- **PB-REA**  
  - Name: “REA under MP Playbook”  
  - Profession: `REA`  
  - Parent: linked to a single `PB-MP`  
  - Exclusivity: **within that PB-MP’s roster only**, not at territory level

---

## 3. Exclusivity Principles (High-Level)

1. **Territories are owned by subscription types, not by professions.**  
   - PB-MP: 1 per territory (for MPs)  
   - SO-MP: 1 per territory **per MP niche**  
   - SO-REA: 1 per territory **per REA niche**

2. **MP and REA exclusivity are independent.**  
   - A Solo MP and a Solo REA may both be “First-Time Buyer” in the same territory.  
   - They are **not** in conflict because their professions differ.

3. **PB-MP = territory exclusivity only.**  
   - A PB-MP holds the Playbook seat for that territory.  
   - Solo MPs can still exist in the same territory, provided niche rules are respected.  
   - PB-REA partners do **not** block Solo REAs in the same territory/niche.

4. **Solo = niche + territory exclusivity within profession.**  
   - Solo MP: exclusive for **that MP niche** in **that territory** vs other MPs.  
   - Solo REA: exclusive for **that REA niche** in **that territory** vs other REAs.

5. **PB-REA niches are only unique within the PB-MP’s roster.**  
   - A PB-MP can have multiple REAs, ideally with distinct niches to avoid overlap **inside** the Playbook account.  
   - This does **not** prevent a Solo REA in the same territory and niche.

---

## 4. Detailed Rules by Plan Type

### 4.1 PB-MP (Playbook – Mortgage Professional)

**Key fields:**  
- `profession = MP`  
- `plan_type = PB-MP`  
- `territory_code = ON-xxx`  

**Exclusivity:**

- **Territory:**
  - Only **one** PB-MP can be **ACTIVE** in a given `territory_code`.
  - PB-MP territory exclusivity is **for MPs using the Playbook**, not for all MPs.

- **Niche:**
  - PB-MP has **no fixed niche exclusivity**; niche presence is earned via REA content cycles.
  - Any number of niches can be developed indirectly through PB-REA partners.

**Allowed coexistence:**

- A PB-MP in `ON-046` **can** coexist with:
  - A Solo MP (`SO-MP`) in `ON-046` with any MP niche.  
  - One or more Solo REAs (`SO-REA`) in `ON-046` with any REA niches.  
  - Multiple PB-REA partners (dependent REAs) inside the PB-MP account.

---

### 4.2 SO-MP (Solo – Mortgage Professional)

**Key fields:**  
- `profession = MP`  
- `plan_type = SO-MP`  
- `territory_code = ON-xxx`  
- `niche_code = one of MP niches`  

**Exclusivity:**

- **Territory + Niche (MP-only):**
  - For a given `territory_code` + `niche_code`, there may be **only one** Active Solo MP.
  - Other MPs (Solo or PB-MP) cannot occupy the same profession/niche/territory combination as a Solo MP.

**Allowed coexistence:**

- SO-MP can coexist with:
  - PB-MP in the same `territory_code` (PB-MP has territory-only exclusivity).  
  - Any REA plans (SO-REA or PB-REA) in the same territory and niche.

---

### 4.3 SO-REA (Solo – Real Estate Agent)

**Key fields:**  
- `profession = REA`  
- `plan_type = SO-REA`  
- `territory_code = ON-xxx`  
- `niche_code = one of REA niches`  

**Exclusivity:**

- **Territory + Niche (REA-only):**
  - For a given `territory_code` + `niche_code`, there may be **only one** Active Solo REA.
  - Other REAs (Solo or PB-REA) cannot occupy that same REA niche & territory as a Solo REA **for Solo seats**.

**Allowed coexistence:**

- SO-REA can coexist with:
  - PB-MP in the same territory.  
  - Solo MPs in the same territory/niche (because profession differs).  
  - PB-REA partners with the **same REA niche** in the same territory (PB-REA does not enforce territory-level exclusivity).

---

### 4.4 PB-REA (Dependent REA under PB-MP)

**Key fields:**  
- `profession = REA`  
- `plan_type = PB-REA`  
- `parent_plan_type = PB-MP`  
- `parent_subscriber_id = <pb_mp_id>`  
- `territory_code = parent.territory_code`  
- `niche_code = one of REA niches`  

**Exclusivity:**

- **Within PB-MP roster:**
  - Recommended: 1 PB-REA per **REA niche** per PB-MP in a territory (to avoid overlap inside the Playbook).  
  - This is a **soft business rule**, not a territory-level exclusivity constraint.

- **At territory level:**
  - PB-REA **does not** block:
    - Solo REAs with the same niche in the same territory.  
    - Future PB-MP accounts (because only 1 PB-MP is allowed per territory anyway).

**Dependence:**

- PB-REA requires:
  - Parent PB-MP in **ACTIVE** status.  
  - Territory code inherited from the PB-MP.  
  - Niche availability within that PB-MP roster (internal check, not territory-level).

---

## 5. Availability Check Logic (Pseudocode)

### 5.1 FSA → Territory Resolution

1. Extract FSA from postal code (`first 3 chars`, uppercased).  
2. Lookup in `fsa-territory-lookup-ontario.json`.  
3. If multiple territories returned (split FSA), flag `needs_address_verification = true`.

Result:

- `territory_code = ON-xxx`
- `split_fsa_flag = true/false`

---

### 5.2 General Seat Availability

**Inputs:**

- `profession`  
- `plan_type`  
- `territory_code`  
- `niche_code` (if applicable)  

**Steps:**

1. Filter subscribers to **ACTIVE** (and optionally `PENDING` for reserving seats).  
2. Apply plan-specific rules:

**PB-MP:**

- Check for any ACTIVE `PB-MP` where `territory_code` matches.  
  - If exists → PB-MP seat **not available**.  
  - If none → PB-MP seat **available**.

**SO-MP:**

- Check for any ACTIVE `SO-MP` where `territory_code` and `niche_code` match.  
  - If exists → Solo MP seat for that niche/territory **not available**.  
  - If none → seat **available**, regardless of PB-MP.

**SO-REA:**

- Check for any ACTIVE `SO-REA` where `territory_code` and `niche_code` match.  
  - If exists → Solo REA seat for that niche/territory **not available**.  
  - If none → seat **available**, regardless of PB-MP or PB-REA.

**PB-REA:**

- Check for other PB-REA under the **same PB-MP parent** and **same niche_code**.  
  - If business rule = 1 niche per PB-REA → block duplicate niches under that PB-MP.  
  - No territory-level block required.

---

## 6. Status Interaction

For exclusivity checks, treat **only these statuses** as “seat-holding”:

- `PENDING` – temporarily reserves seat (time-limited).  
- `ACTIVE` – fully holds seat.  
- `RENEWAL_PENDING` – may hold seat during renewal window.

Statuses that **do not** hold a seat:

- `LEAD`, `CANCELLED`, `EXPIRED`, `ARCHIVED`, `NEGOTIATION`, etc.

Detailed status definitions live in:

- `03_SYSTEMS/configs/status-types.json`

---

## 7. Future-Proofing Notes

- If new professions are added (e.g., Financial Planner, Lawyer), they will:  
  - Get their own **Solo** and **Playbook** plan types (e.g., `SO-FP`, `PB-FP`).  
  - Reuse the same territory and FSA logic.  
  - Define profession-specific niche sets in `niches.json`.

- PB-MP remains **one per territory per profession per Playbook type**.  
- Multiple Playbook products for the same MP (e.g., PB-MP-REA + PB-MP-FP) should be modeled as separate subscriptions, not merged into one.

---

## 8. Implementation Pointers

- AI-Agent onboarding should always:
  1. Resolve FSA → territory.  
  2. Confirm profession and desired plan type.  
  3. Confirm niche (if Solo or dependent REA).  
  4. Run the appropriate availability check.  

- n8n automations should use:
  - Territory configs: `territory-map-ontario.json`  
  - FSA lookup: `fsa-territory-lookup-ontario.json`  
  - Product types: `product-types.json`  
  - Status types: `status-types.json`  
  - Niches: `niches.json`

---
