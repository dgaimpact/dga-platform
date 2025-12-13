# REGISTRY — Canonical Asset & Schema Definitions

**Purpose**
This folder contains all **Registry (REG)** documents for the DGA platform.

Registry documents define the **canonical names, structures, and required assets** used across DGA systems. They exist to eliminate ambiguity, prevent naming drift, and ensure that all systems (Supabase, Replit, automations, and integrations) reference the **same source of truth**.

If a field name, table, module, or external asset exists in DGA, it must be defined here.

---

## What Belongs in This Folder

Only documents that meet **all** of the following criteria belong here:

* Define **canonical names** (tables, fields, modules, assets)
* Specify **required structures** and allowed values
* Are referenced by Execution Doctrines (ED)
* Apply across one or more systems
* Exist to prevent duplication or reinterpretation

Examples:

* Asset & Schema Registry
* Canonical field dictionaries
* Platform asset inventories

---

## What Does *Not* Belong Here

The following document types must **never** be placed in this folder:

* Blueprints (BP)
* Execution Doctrines (ED)
* Standard Operating Procedures (SOP)
* Automation logic or workflow instructions
* Explanatory guides or tutorials

If a document explains *why* something exists or *how* to operate it, it does not belong here.

---

## Naming Convention (Mandatory)

All Registry documents must follow the canonical naming pattern:

**`REG–[P#]–[Short Name].md`**

Where:

* **REG** = Registry (canonical definitions)
* **P#** = Operating Pillar reference (P1–P5) or **PW** for platform-wide
* **Short Name** = Clear, human-readable intent

Examples:

* `REG–PW–Asset & Schema Registry.md`

---

## Authority Rules

* Registry definitions are **binding** for all systems
* Execution Doctrines must reference registry entries explicitly
* Systems must conform to registry names exactly
* No aliases, synonyms, or near-duplicate fields are permitted

If a required asset does not exist, it must be created **to match the registry**, not worked around.

---

## Versioning Expectations

* Version information must be declared **inside the document header**
* GitHub commit history serves as the archival record
* Registry documents should be versioned only when **meaning or structure changes**

Examples of version-worthy changes:

* Adding a new table or field
* Changing a field name or type
* Deprecating an existing asset

---

## How to Use This Folder

* Reference before building or modifying systems
* Use as the checklist for Supabase migrations
* Validate Replit and automation inputs against registry definitions
* Never invent names outside of this folder

This folder exists to ensure consistency, reliability, and long-term maintainability.

---

**End of README**
