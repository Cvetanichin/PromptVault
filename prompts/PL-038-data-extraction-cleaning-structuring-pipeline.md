# PL-038 - Data Extraction, Cleaning & Structuring Pipeline

> Automating data processing: extracting from source, cleaning messy data, structuring unstructured input (notes/text), or transforming raw datasets for analysis or CRM import.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-038` |
| Category | Data Engineering |
| Subcategory | Data Processing Pipeline |
| Type | Task Prompt |
| Output Type | Code / Script |
| Source Platform | Claude |
| Version | v03 |
| Quality Score | 4 / 5 |
| Tags | `data extraction`, `transformation`, `python`, `pandas`, `data cleaning`, `structuring`, `CRM`, `automation`, `daily` |

## Prompt

```text
Build a data processing pipeline with these phases:

Phase 1 — Extract: Read data from [SOURCE: CSV/Excel/API/text notes] using pandas
Phase 2 — Clean: Remove duplicates, fix formatting, standardise field values, handle missing data with [fill/drop/flag] strategy
Phase 3 — Structure: Transform into [DESIRED FORMAT: cleaned table / pivot / database-ready fields / CRM-importable CSV]
Phase 4 — Validate: Flag rows that failed validation with reason column
Phase 5 — Export: Save output to [DESTINATION] with processing summary

For unstructured input (notes/text):
- Extract fields: [FIELD LIST, e.g. name, date, amount, category, tags]
- Output: structured table ready for [Airtable / Notion / Excel / CSV]

Frequency: [Daily / Weekly / On demand]
Error handling: try/except with clear error messages. Include row-level logging. No hardcoded paths.
```

## Example Output

Python pipeline with extract → clean → structure → validate → export phases. Handles CSVs, Excel, and unstructured text. Outputs clean data with a validation report.
