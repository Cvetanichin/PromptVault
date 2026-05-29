# PL-055 - Adversarial Test Case Generator

> Stress-testing any prompt before deploying in a library or automated workflow.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-055` |
| Category | Prompt Engineering |
| Subcategory | Adversarial Testing |
| Type | Meta-Prompt |
| Output Type | Analysis / Research |
| Source Platform | Gemini |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `adversarial`, `testing`, `edge cases`, `prompt engineering`, `QA` |

## Prompt

```text
Generate adversarial test cases for the following prompt: [PASTE PROMPT]
Create 5 edge-case inputs designed to break, confuse, or produce poor outputs. For each: (1) Input scenario, (2) Expected failure mode, (3) Suggested prompt fix. Present as a table: Test case | Failure mode | Fix
```

## Example Output

5-row adversarial test table with failure modes and suggested fixes
