# PL-040 - Multi-Level Summary Builder

> Same content in different formats for different audiences.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-040` |
| Category | Summarization |
| Subcategory | Multi-Level Summary |
| Type | Task Prompt |
| Output Type | Document / Report |
| Source Platform | Gemini |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `summarization`, `multi-level`, `brief`, `social media`, `donor` |

## Prompt

```text
Summarize [DOCUMENT / TOPIC] at three levels:
- Level 1 (Tweet): 1 sentence, max 280 characters
- Level 2 (Paragraph): 80-100 words, key facts only
- Level 3 (Brief): 300-400 words, full structured summary
Each level must stand alone.
```

## Example Output

Three summary blocks clearly labelled L1/L2/L3, each self-contained
