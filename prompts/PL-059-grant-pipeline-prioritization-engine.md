# PL-059 - Grant Pipeline Prioritization Engine

> Weekly pipeline review — ranking active grant opportunities by strategic fit, effort-to-value ratio, and readiness.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-059` |
| Category | Fundraising |
| Subcategory | Pipeline Management |
| Type | Task Prompt |
| Output Type | Table |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `fundraising`, `pipeline`, `grants`, `prioritization`, `strategy`, `CSO`, `decision`, `weekly` |

## Prompt

```text
Evaluate and prioritize the following funding opportunities for [ORGANISATION].

Opportunities:
[PASTE LIST: name, funder, deadline, amount, brief description]

Score each on:
- Strategic fit (1-5): alignment with mission, thematic area, geographic scope
- Effort required (1-5 inverse — 5=low effort): proposal complexity, relationship depth needed
- Readiness (1-5): track record match, documentation ready, partnerships in place

Composite score = Fit × (6 - Effort) × Readiness

Output:
1. Ranked table with all scores and composite
2. Top 3 recommendations with rationale
3. 1-2 opportunities to DROP from pipeline and why
4. One quick win (highest readiness, nearest deadline)
```

## Example Output

Ranked pipeline table with fit/effort/readiness scores, composite score, and recommended next actions
