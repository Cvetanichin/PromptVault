# PL-073 - Google Sheets / Excel Data Consolidation Script

> Consolidating data spread across multiple spreadsheet tabs or files — common in M&E data entry, expense tracking, beneficiary registers, or multi-project reporting.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-073` |
| Category | Data Engineering |
| Subcategory | Spreadsheet Automation |
| Type | Task Prompt |
| Output Type | Code / Script |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `Google Sheets`, `Excel`, `VBA`, `Apps Script`, `data consolidation`, `automation`, `multi-tab`, `reporting`, `data engineering` |

## Prompt

```text
Write a [Google Apps Script / Excel VBA] script to consolidate and clean spreadsheet data.

Data structure:
- Source: [GOOGLE SHEETS URL or EXCEL FILE] with [N] tabs
- Each tab represents: [WHAT, e.g. one cardholder / one month / one project]

Consolidation rules:
1. Merge all tabs into one master sheet named [MASTER SHEET NAME]
2. Keep only columns: [LIST COLUMN LETTERS OR NAMES, e.g. C, D, E]
3. Remove rows: [LIST ROW NUMBERS TO DELETE, e.g. rows 3, 4, 5 — header noise]
4. Add derived column [COLUMN NAME, e.g. Cardholder name] using the tab name as the value
5. Add derived column [COLUMN NAME, e.g. Company name] using cell [CELL REF, e.g. B2] from each tab

Output:
- For Google Sheets: complete Apps Script with onOpen menu trigger
- For Excel: complete VBA macro with Run button
- Include: error handling if a tab is empty or missing expected columns
- Include: progress log to show which tabs were processed

Do not hardcode tab names — loop through all existing tabs dynamically.
```

## Example Output

Google Apps Script or VBA that merges all tabs into one master sheet, keeps only specified columns, removes header noise rows, and adds derived identifier columns (cardholder name, company, source tab)
