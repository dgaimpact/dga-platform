# DGA Platform Knowledge Base - Documentation Site

## Overview
This is a web-based documentation viewer for the Digital Growth Accelerator (DGA) Platform Knowledge Base. The repository contains markdown files organized into various categories (Foundations, Frameworks, Operations, Systems, etc.), and this application provides a user-friendly web interface to browse and read all documentation.

## Project Structure
- `server.js` - Express server that serves the documentation site
- `package.json` - Node.js dependencies and scripts
- Documentation folders:
  - `00_FOUNDATIONS/` - Core principles and definitions
  - `01_FRAMEWORKS/` - Strategic frameworks
  - `02_OPERATIONS/` - SOPs and workflows
  - `03_SYSTEMS/` - Technical systems architecture
  - `04_AUTOMATIONS/` - Automation specifications
  - `05_AUDIT_TOOLS/` - Audit tools and templates
  - `06_CONTENT_SYSTEM/` - Content production templates
  - `07_SALES_MARKETING/` - Sales and marketing assets
  - `08_STACKAI_PROMPT_LIBRARY/` - AI prompt library
  - `99_ARCHIVE/` - Deprecated materials

## Technology Stack
- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Markdown Parser**: Marked
- **Port**: 5000 (configured for Replit webview)

## How It Works
1. The Express server scans all markdown files in the repository
2. Generates a hierarchical navigation tree from the folder structure
3. Serves a clean, responsive web interface with:
   - Collapsible folder navigation
   - Beautiful markdown rendering
   - Breadcrumb navigation
   - Syntax highlighting for code blocks

## Development
- **Start Server**: `npm start`
- **Server URL**: http://0.0.0.0:5000
- The server automatically includes all markdown files from the repository

## Deployment
- **Target**: Autoscale deployment
- **Command**: `node server.js`
- The site is configured to run on Replit's deployment infrastructure

## Recent Changes
- 2025-11-25: Initial setup of documentation viewer
  - Created Express-based markdown renderer
  - Configured for Replit environment (port 5000, 0.0.0.0 binding)
  - Set up deployment configuration
  - Added .gitignore for Node.js
