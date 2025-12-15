# ARCHIVE — Historical Account Profile Files

This directory contains **historical, superseded account profile files**.

Files stored here are retained for:
- auditability
- traceability
- staff reference

They are **never** used by runtime systems.

---

## Purpose

ARCHIVE exists to ensure that:
- only one active profile is ever used
- previous profiles remain available for review
- profile evolution is transparent and traceable

---

## Directory Structure

Each account has its own subdirectory:

/ARCHIVE/<account-slug>/

Within each account, profiles are separated by type:

/ARCHIVE/<account-slug>/VBP/
/ARCHIVE/<account-slug>/IIP/

Example:
/ARCHIVE/sherry-corbitt/VBP/
/ARCHIVE/sherry-corbitt/IIP/

---

## File Naming

Archived files must be timestamped at the time they are superseded.

Recommended format:
- `GD_<account-slug>_VBP_YYYY-MM-DD_HHMM.md`
- `GD_<account-slug>_IIP_YYYY-MM-DD_HHMM.md`
- `GD_<account-slug>_W-VBP_YYYY-MM-DD_HHMM.md`
- `GD_<account-slug>_W-IIP_YYYY-MM-DD_HHMM.md`

---

## Usage Rules (Strict)

- Runtime systems **MUST NOT** read from ARCHIVE
- ARCHIVE is write-only for automation
- Files are never edited after being archived
- ARCHIVE files are immutable historical records

If a system attempts to read from ARCHIVE, it is a configuration error.

---

## Lifecycle Summary

- Profiles begin life in ACTIVE as `*_CURRENT.md`
- When replaced, they are moved to ARCHIVE
- ARCHIVE files persist indefinitely unless manually purged by DGA staff

---

END — ARCHIVE Account Profiles README
