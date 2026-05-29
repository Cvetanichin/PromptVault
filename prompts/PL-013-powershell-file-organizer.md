# PL-013 - PowerShell File Organizer

> Windows file organization and Drive mirroring.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-013` |
| Category | AI & Automation |
| Subcategory | Workflows |
| Type | Task Prompt |
| Output Type | Code / Script |
| Source Platform | Claude |
| Version | v02 |
| Quality Score | 4 / 5 |
| Tags | `PowerShell`, `Windows`, `files`, `Drive`, `automation` |

## Prompt

```text
Write a PowerShell script that mirrors the Google Drive folder structure to a local D:\ path. Include dry-run mode by default, an -Execute switch to apply changes, and file renaming to YYYYMMDD_ProjectName_vXX. Critical: avoid all & characters in string literals.
```

## Example Output

PowerShell script with dry-run, -Execute flag, and renamed file log
