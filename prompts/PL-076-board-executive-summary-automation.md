# PL-076 - Board / Executive Summary Automation

> Transforming raw data, assumptions, or scenario analysis into a concise, board-ready or donor-ready executive summary — for board papers, management reports, or high-stakes stakeholder communications.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-076` |
| Category | Donor Reporting |
| Subcategory | Executive Communications |
| Type | Task Prompt |
| Output Type | Document / Report |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `executive summary`, `board`, `donor`, `CFO`, `scenario`, `communication`, `reporting`, `automation`, `management` |

## Prompt

```text
You are acting as an experienced [CFO / Programme Director / Senior Consultant].

Based on the information below, create a concise EXECUTIVE SUMMARY suitable for [AUDIENCE: Board of Directors / Donor / Steering Committee / Senior Management].

Information to summarise:
[PASTE: data, analysis, scenarios, or project status]

Requirements:
- Max 1 page
- No tables, no markdown symbols, no calculations visible
- Short paragraphs and bullet points
- Focus on insights and implications, not raw numbers
- Accessible but rigorous language — practical and decision-useful

Structure the output exactly as follows:

1. Executive Summary (5-6 sentences)
   — Overall situation, trajectory, and the single most important message

2. Key Findings or Scenario Comparison (bullet points)
   — [SCENARIO A / FINDING A]: [2-3 bullets]
   — [SCENARIO B / FINDING B]: [2-3 bullets]

3. Key Risks and Watchpoints (3 bullets)
   — Each risk: what it is, likelihood, and impact if materialised

4. Recommendation (2-3 sentences)
   — Clear, actionable, specific to the decision-maker

End with a short reference to the source analysis or model.
Do not invent data — only cite what is in the input above.
```

## Example Output

1-page executive summary with: overall outlook (5-6 sentences), scenario comparison (bullets), key risks (3 bullets), and a clear recommendation — no tables, no markdown, no calculations visible
