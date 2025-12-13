# 00_BLUEPRINTS — Canonical Governance Documents

**Purpose**
This folder contains all **Blueprints (BP)** for the DGA platform.

Blueprints are the **highest-authority documents** in the DGA documentation system. They define intent, boundaries, invariants, and governance rules that constrain how all downstream systems, processes, and automations are allowed to behave.

If there is ever uncertainty about *why* something exists, *what is allowed*, or *what must not drift*, the answer lives here.

---

## What Belongs in This Folder

Only documents that meet **all** of the following criteria belong here:

* Define **governance, intent, or doctrine**
* Apply **across systems or an entire pillar**
* Are **human-facing and non-operational**
* Change **rarely and intentionally**
* Constrain execution rather than describe how to perform it

Examples:

* Platform-wide governance maps
* Pillar-level canonical Blueprints
* System philosophy and invariants

---

## What Does *Not* Belong Here

The following document types must **never** be placed in this folder:

* Execution Doctrines (ED)
* Schema or Asset Registries (REG)
* Standard Operating Procedures (SOP)
* Automation logic or workflows
* Tool-specific instructions

If a document explains *how* something is built or run, it does not belong here.

---

## Naming Convention (Mandatory)

All Blueprints must follow the canonical naming pattern:

**`BP–[P#]–[Short Name].md`**

Where:

* **BP** = Blueprint (authority class)
* **P#** = Operating Pillar reference (P1–P5) or **PW** for platform-wide
* **Short Name** = Clear, human-readable intent (no snake case, no filler)

Examples:

* `BP–PW–Organizational Document Architecture & Governance.md`
* `BP–P3–GEO–AIO Omni-Presence.md`

---

## Authority Rules

* Blueprints override all other document types
* Execution Doctrines and SOPs must conform to the constraints defined here
* If a conflict exists, the Blueprint is always correct
* Any change to a Blueprint requires deliberate review and versioning

Blueprints are not advisory — they are **binding**.

---

## Versioning Expectations

* Version information must be declared **inside the document header**
* GitHub commit history serves as the archival record
* Blueprints should only be versioned when meaning or governance changes

---

## How to Use This Folder

* Read before building
* Reference when designing Execution Doctrines
* Revisit when considering system changes
* Do not optimize or experiment here

This folder exists to prevent drift, ambiguity, and accidental reinvention.

---

**End of README**
