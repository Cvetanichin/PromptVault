# PL-067 - Dual-Format Output Packager

> Any deliverable that needs to exist in both narrative (Word/PDF) and tabular (Excel/Notion) formats — standard for donor handoffs and workspace documentation.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-067` |
| Category | Meta-Prompting |
| Subcategory | Output Standards |
| Type | Task Prompt |
| Output Type | Framework / Template |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `output format`, `dual format`, `DOCX`, `Excel`, `packaging`, `donor`, `reporting`, `export`, `meta` |

## Prompt

```text
Take the following content and produce it in two formats:

[PASTE CONTENT / SUMMARY / DATA]

Format 1 — NARRATIVE (Word/PDF-ready):
- Executive summary (150 words)
- Main sections with headings
- Analytical commentary
- Suitable for: [DONOR REPORT / PARTNER BRIEF / BOARD PAPER]

Format 2 — TABULAR (Excel/Airtable/Notion-ready):
- Column headers matching the content structure
- One row per item/entry/finding
- Add columns for: status, owner, date, notes
- Suitable for: [TRACKING / UPDATING / SHARING WITH TEAM]

Ensure both formats contain the same core information. Flag any content that works better in one format than the other.
```

## Example Output

Two outputs from one input: (1) Narrative DOCX with summary and sections, (2) Excel/Notion table with same data structured for tracking
