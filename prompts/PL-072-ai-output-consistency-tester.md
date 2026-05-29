# PL-072 - AI Output Consistency Tester

> Before shipping any AI feature to production — or when a system prompt has been changed. Proves consistency programmatically with assertion-based scoring.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-072` |
| Category | Prompt Engineering |
| Subcategory | Consistency Testing |
| Type | Task Prompt |
| Output Type | Analysis / Research |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `consistency`, `testing`, `system prompt`, `QA`, `assertion`, `scoring`, `production`, `reliability`, `prompt engineering` |

## Prompt

```text
Design a consistency testing protocol for the following AI prompt or system:

Prompt / system to test: [PASTE THE PROMPT OR DESCRIBE THE SYSTEM]
Behaviours that must be consistent across every run: [LIST 4-6 SPECIFIC ASSERTIONS]

For each assertion, write a testable check:
Assertion 1: [Does the response mention X?] → check: look for keyword/phrase Y in output
Assertion 2: [Does it avoid inventing Z?] → check: absence of pattern P
Assertion 3: [Does it always include escalation path?] → check: presence of contact/phrase
...

Testing protocol:
1. Send the same test question N times (recommended: 10-20 runs)
2. Score each response against each assertion (pass/fail)
3. Calculate consistency score per assertion: (passes / N) × 100%
4. Flag any assertion below 90% as FRAGILE — system prompt needs tightening on that dimension

Output format:
| Assertion | Score (%) | Fragile? | Fix suggestion |

Key principle: a score below 90% means real users will see inconsistent behaviour. Ship nothing without this test. Use it after every prompt change.
```

## Example Output

Consistency report: each assertion (e.g. 'mentions 30-day policy') scored 0-100% across N runs. Any score below 90% means the system prompt is fragile on that dimension and needs tightening.
