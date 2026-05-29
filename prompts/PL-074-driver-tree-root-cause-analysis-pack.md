# PL-074 - Driver Tree Root Cause Analysis Pack

> When a key performance indicator is declining and you need to move from data observation to structured root cause hypotheses to management recommendations — in operations, programme delivery, or service performance.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-074` |
| Category | Research & Analysis |
| Subcategory | Operational Analysis |
| Type | Chain of Thought |
| Output Type | Analysis / Research |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `driver tree`, `root cause`, `operational analysis`, `KPI`, `hypotheses`, `performance`, `operations`, `research`, `management` |

## Prompt

```text
Conduct a driver tree root cause analysis for [METRIC/KPI] that is [declining/deteriorating] in [CONTEXT: operations / programme delivery / service performance].

Dataset: [DESCRIBE AVAILABLE DATA — columns, time period, granularity]

Step 1 — KPI CALCULATION & TREND:
Calculate [KPI formula]. Identify the overall trend over [time period]. Highlight when performance starts deteriorating. Identify what changed vs the first [N] baseline periods. Be concrete — only describe what changed, do not jump to conclusions yet.

Step 2 — DRIVER TREE:
Using driver tree logic, structure all possible drivers of [KPI] grouped under:
- [CATEGORY 1, e.g. Throughput / Capacity]
- [CATEGORY 2, e.g. Quality / Accuracy]
- [CATEGORY 3, e.g. Lead Time / Speed]
Map relevant data columns to the appropriate drivers.

Step 3 — HYPOTHESES:
Propose 6 plausible root-cause hypotheses. For each: specify which driver it affects, explain the mechanism, indicate which data points support it, classify as short-term shock or structural issue.

Step 4 — RANKING:
Rank the 6 hypotheses by: (1) Likelihood based on data evidence, (2) Operational impact. Explain reasoning step by step.

Step 5 — EXECUTIVE NARRATIVE:
Create an executive-ready explanation structured as: What happened | Why it happened (top 2-3 drivers) | What matters most | What should be investigated first.
```

## Example Output

5-step chain: KPI trend → driver tree map → 6 competing hypotheses → likelihood/impact ranking → executive narrative with top 3 drivers and management priorities
