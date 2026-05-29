# PL-047 - Simplifier & Plain Language Converter

> Creating beneficiary-facing communications or accessible public documents.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-047` |
| Category | Rephrasing |
| Subcategory | Simplification |
| Type | Task Prompt |
| Output Type | Document / Report |
| Source Platform | Perplexity |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `rephrasing`, `simplification`, `plain language`, `accessibility`, `community` |

## Prompt

```text
Simplify the following text for [TARGET, e.g. Grade 8 / non-native English speaker]: [PASTE TEXT]
Requirements: use Flesch-Kincaid as guide (target > 60), replace all technical terms, use bullet points where helpful, keep all facts intact. Flag facts that could not be simplified.
```

## Example Output

Simplified text with reading level score + list of flagged untranslatable facts
