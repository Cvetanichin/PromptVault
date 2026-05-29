# PL-070 - Multi-Step Delegation Pipeline Builder

> Any task where a single mega-prompt produces shallow or generic output. One prompt, one cognitive mode — quality multiplies when steps specialize.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-070` |
| Category | Prompt Engineering |
| Subcategory | Multi-Step Delegation |
| Type | Chain of Thought |
| Output Type | Framework / Template |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `multi-step`, `delegation`, `pipeline`, `quality`, `prompt engineering`, `extract analyse synthesise`, `production` |

## Prompt

```text
Design a multi-step delegation pipeline for the following complex task:

Task: [DESCRIBE THE FULL TASK, e.g. analyse customer feedback and produce an executive summary]

Break it into steps where each model call has ONE job:

Step 1 — EXTRACT:
- System prompt: You are a [data extraction specialist]. Your ONLY job is to read raw input and extract [what]. Do NOT analyse, evaluate, or recommend. Output structured JSON.
- Input: [RAW SOURCE DATA]
- Output: [STRUCTURED INTERMEDIATE ARTEFACT]

Step 2 — ANALYSE:
- System prompt: You are a [senior analyst]. You receive pre-extracted structured data and produce [depth analysis: severity, impact, priority, scores]. NO writing yet.
- Input: Step 1 output
- Output: [ANALYSIS JSON]

Step 3 — SYNTHESISE:
- System prompt: You are a [communication specialist writing for AUDIENCE]. Transform the analysis into [output format]. Rules: lead with [most important thing], name specific [actions/numbers/findings], end with [next steps].
- Input: Step 1 + Step 2 output
- Output: [FINAL HUMAN-READABLE DELIVERABLE]

For parallel steps (independent analysis): run Step 2a, 2b, 2c concurrently → merge in Step 3.

Key insight: each step receives clean structured input from the previous step → no hallucinated context → each step is as good as it can possibly be.
```

## Example Output

3-step pipeline: Extract specialist reads raw data → Analyst evaluates with depth → Writer produces specific, data-backed output. ~3x quality improvement vs single-shot.
