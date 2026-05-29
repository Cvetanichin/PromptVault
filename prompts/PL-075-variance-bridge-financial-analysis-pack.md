# PL-075 - Variance Bridge Financial Analysis Pack

> When gross margin or profitability is deteriorating and you need to decompose the financial variance into its drivers, link to operational causes, and communicate clearly to senior leadership.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-075` |
| Category | Research & Analysis |
| Subcategory | Financial Analysis |
| Type | Chain of Thought |
| Output Type | Analysis / Research |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `variance bridge`, `financial analysis`, `gross margin`, `price effect`, `volume effect`, `mix effect`, `cost effect`, `CFO`, `CEO`, `operations`, `research` |

## Prompt

```text
Conduct a variance bridge financial analysis for [METRIC: gross margin / EBITDA / revenue] deterioration in [CONTEXT].

Datasets available: [DESCRIBE: financial data columns, time period]

Step 1 — FINANCIAL TREND:
Calculate weekly/monthly [metric]. Identify the trend over [time period]. Identify when deterioration begins. Highlight which cost/revenue components increased most. Do not interpret yet — only describe.

Step 2 — VARIANCE BRIDGE:
Explain the [metric] change by grouping effects into:
- Price effect: [revenue per unit change]
- Volume effect: [change in units/orders processed]
- Mix effect: [shift in product/service type composition]
- Cost effects: [labour / logistics / materials / overhead changes]
Use evidence from the dataset to support each effect quantitatively.

Step 3 — OPERATIONAL INTEGRATION:
Link the financial deterioration to operational root causes [from a preceding driver tree analysis or context]. For each financial variance component: identify the operational root cause, explain the causal chain from operations to financial impact.

Step 4 — CEO-READY NARRATIVE:
Create a CEO-ready explanation structured as:
- What happened operationally
- How this translated into financial performance
- What the biggest financial driver is (€ impact)
- What management should prioritise (3 actions, specific owners)
```

## Example Output

4-step chain: margin trend → variance bridge (price/volume/mix/cost effects) → operational integration → CEO-ready narrative with root causes and management priorities
