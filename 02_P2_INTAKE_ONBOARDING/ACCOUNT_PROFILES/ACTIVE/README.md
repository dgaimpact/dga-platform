# ACTIVE — Account Profile Files

This directory contains the **only account profile files that may be read by runtime systems**, including Replit.

---

## Purpose

The ACTIVE directory holds the **current, authoritative profiles** for each account:

- Voice Blueprint Profile (VBP)
- Information Intake Profile (IIP)

At any point in time, there must be **exactly one active file per profile type per account**.

---

## Directory Structure

Each account has its own subdirectory:

/ACTIVE/<account-slug>/

Example:
/ACTIVE/sherry-corbitt/

---

## Required Files (Per Account)

Each account directory must contain:

- `GD_<account-slug>_VBP_CURRENT.md`
- `GD_<account-slug>_IIP_CURRENT.md`

Only these files may be referenced by Replit or any downstream system.

---

## Usage Rules (Non-Negotiable)

- Runtime systems **MUST read from ACTIVE only**
- Runtime systems **MUST NOT read from ARCHIVE**
- Filenames are stable (`*_CURRENT.md`)
- Versioning and timestamps live **inside the file header**
- Machine identifiers (account_id, sub_account_id) live **inside the file**, not the filename

---

## Replacement Rules

When a new profile is generated:

1. The existing `*_CURRENT.md` file is moved to ARCHIVE
2. A new `*_CURRENT.md` file is written to ACTIVE
3. No more than one CURRENT file per profile type may exist

If multiple CURRENT files exist, execution must h
