# REG–P2–MARKET_CAPACITY

Canonical registry governing **market seat capacity enforcement** by **Market Type × Profession** and **Territory × Profession**.

---

## DOCUMENT METADATA

**Document Type:** Registry (REG)  
**Primary Pillar:** P2 — Intake & Onboarding  
**Filename:** REG_P2_MARKET_CAPACITY.md  

**Version:** v1.0  
**Status:** Canonical (Active)  
**Created:** 2025-12-17  

**Owned By:** DGA Core Platform  

**Consumed By:**
- P2 — Replit Onboarding Apps
- Supabase (capacity enforcement triggers & views)
- Activation & Validation Logic

---

## 1. Authority & Scope

This Registry defines the **canonical capacity model** used to determine:

- Whether a territory may accept a new ACTIVE account
- How many accounts of a given **profession** may exist within a **market classification**
- When activation must be blocked due to scarcity

This document is:
- authoritative  
- non-executing  
- non-procedural  
- logic-free  

If any system, SOP, or Execution Doctrine conflicts with this registry, **this registry prevails**.

---

## 2. Registry Rules (Non-Negotiable)

- Capacity is enforced **only at activation**
- Capacity is evaluated by **Market Type × Profession**
- Territory-specific overrides must explicitly exist
- No inference, fallback, or silent substitution is permitted
- If capacity data is missing, activation must be blocked

---

## 3. Market Type Capacity (Default)

This table defines the **default seat caps** by market classification and profession.

| Field | Type | Required | Description |
|------|------|----------|-------------|
| province_code | TEXT | Yes | Province identifier (e.g. `ON`) |
| market_type | TEXT | Yes | Market classification (`URBAN`, `SUBURBAN`, `RURAL`, `COTTAGE`) |
| profession_code | TEXT | Yes | Canonical profession code |
| seat_cap | INTEGER | Yes | Maximum ACTIVE seats allowed |
| is_active | BOOLEAN | Yes | Whether this cap is currently enforced |
| effective_from | DATE | Yes | Date the cap becomes effective |

### Field Notes
- This table provides the **fallback capacity** when no territory override exists  
- Only rows with `is_active = true` may be enforced  
- Historical rows may coexist with newer effective dates  

---

## 4. Territory Capacity Overrides (Optional)

This table defines **explicit overrides** for a specific territory and profession.

| Field | Type | Required | Description |
|------|------|----------|-------------|
| territory_code | TEXT | Yes | Canonical market territory identifier |
| profession_code | TEXT | Yes | Canonical profession code |
| seat_cap | INTEGER | Yes | Override maximum ACTIVE seats |
| is_active | BOOLEAN | Yes | Whether this override is enforced |
| effective_from | DATE | Yes | Date the override becomes effective |

### Field Notes
- Overrides take precedence over Market Type defaults  
- If no active override exists, Market Type capacity applies  
- Overrides must be explicit — no automatic inheritance  

---

## 5. Capacity Evaluation Order

Capacity resolution must follow this order **without exception**:

1. **Territory × Profession override** (if active)  
2. **Market Type × Profession default**  
3. **Block activation** if neither exists  

---

## 6. Exclusions & Special Cases

- PB referral partner sub-accounts (`seat_class = PB_CHILD`) **do not consume** market capacity  
- Internal test or system entities must be explicitly excluded at the execution layer  
- All capacity checks apply only when `account_status = ACTIVE`

---

## 7. Cross-Field Constraints (Declarative Only)

- `seat_cap` must be ≥ 0  
- Capacity applies only when:
  - `profession_code` is present
  - `seat_class = MARKET_CAPACITY`
- Capacity is province-scoped unless explicitly overridden  

---

## 8. Change Control

- Any change requires a **version increment**  
- Capacity reductions require downstream impact review  
- Field removal is prohibited without a formal deprecation cycle  

---

END — REG–P2–MARKET_CAPACITY
