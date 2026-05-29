# PL-012 - Digital Hygiene Agent Prompt

> Automated local/Drive file management.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-012` |
| Category | AI & Automation |
| Subcategory | File Management |
| Type | Task Prompt |
| Output Type | Code / Script |
| Source Platform | Claude |
| Version | v02 |
| Quality Score | 5 / 5 |
| Tags | `Python`, `automation`, `files`, `Drive`, `MCP`, `pipeline` |

## Prompt

```text
Build a Python pipeline for automated file management with 4 phases: Phase 1 Scan (SHA-256 + Drive API md5Checksum), Phase 2 Deduplicate (4-tier), Phase 3 Scaffold (CSO/NGO folder structure), Phase 4 Organize (rename to YYYYMMDD_Domain_Project-Tag convention). Include dry-run mode and FastMCP server.
```

## Example Output

4-phase Python script with dry-run mode and 7 MCP tools exposed
