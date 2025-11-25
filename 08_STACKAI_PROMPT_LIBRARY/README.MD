StackAI Prompt Library
Version-controlled prompt ecosystem for the DGA Platform

Purpose

This folder contains the canonical, production-grade StackAI Prompt Library used across the entire DGA ecosystem.
All prompts stored here are:
Standards-compliant
Naming-compliant (GNF Framework)
Version-controlled
Autonomously validated
Ready for integration with StackAI, n8n, custom GPTs, and future DGA SaaS deployments

The files in this directory represent the source of truth for all Systems, Workflows, Platforms, Audits, Content Builders, Persona Engines, Niche Generators, and Standards.

Library Structure

Each category has its own subfolder, matching the GNF naming framework and ID bands:

08_STACKAI_PROMPT_LIBRARY/
    standards/      (600-series)
    systems/        (800-series)
    workflows/      (900-series)
    platforms/      (700-series)
    audits/         (400-series)
    content/        (300-series)
    niches/         (200-series)
    personas/       (100-series)
    other/          (900-series auxiliary tools)


Each prompt inside these folders is stored as an individual .md file using:

<CategoryPrefix>-<ThreeDigitID>–<kebab-case-descriptive-name>.md


Example:

Standards-601–output-format-standard.md

System-801–geo-ai-visibility-audit-system.md

Workflow-901–geo-ai-visibility-audit-workflow.md

How This Library Works
1. Creation Workflow

All new prompts are drafted and validated in Notion first:

Naming Convention Checker

Standards Validation

Output Format Validator

Draft → Ready QA Checklist

No prompt is added here until it passes all checks.

2. Sync Workflow

Prompts are exported from Notion → Markdown and placed here manually or via automation.

Future automation will support:

GitHub API sync

n8n sync

StackAI ingestion

3. Governance

Standards govern everything else:

Standards-601 → Output Format

Standards-602 → Tone, Voice & Style

Standards-603 → GEO/AI Visibility

Standards-604 → Instruction Protocol

Standards-605 → Prompt Construction

Standards-606 → Audit Evidence

Standards-607 → Content Integrity

Systems rely on Standards.
Workflows rely on Systems.
Platforms support Systems/Workflows.
Audits, Personas, Niches, Content, and Other tools operate within this framework.

Versioning

Each prompt’s filename + commit history provides a complete change log.
New versions should:

Update the MD file

Include a commit message describing the revision

Avoid renaming the three-digit ID once assigned

All edits should go through the proper QA workflow in Notion before being committed here.

Usage

This library powers:

DGA Playbooks

StackAI automation blocks

n8n workflow engines

Custom GPTs

Realtor and MP onboarding systems

Content generation sequences

Voice Blueprint extraction

Audit/report generators

Whenever a prompt is needed anywhere in the DGA ecosystem, this is the authoritative source.

Related Documentation

For rules, naming protocols, and standards:

StackAI Prompt Library – README & Category Definitions

Standards Overview (601–607)

Naming Conventions (GNF Framework)

Governance Rules & QA Protocols
