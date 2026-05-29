# PL-071 - Three-Layer System Prompt Constructor

> Any AI feature, assistant, or recurring workflow where consistent tone, policy-compliance, and predictable behaviour matter. Vague prompts → improvised behaviour → user mistrust.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-071` |
| Category | Prompt Engineering |
| Subcategory | Consistency Design |
| Type | Task Prompt |
| Output Type | Framework / Template |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `system prompt`, `consistency`, `role`, `identity`, `constraints`, `context`, `production`, `reliability`, `prompt engineering` |

## Prompt

```text
Build a three-layer system prompt for the following assistant or use case:

Use case: [DESCRIBE THE ASSISTANT, e.g. grant compliance reviewer / donor communications bot / M&E reporting assistant]
Audience it serves: [WHO TALKS TO IT]
Critical behaviours it must get right every time: [LIST 3-5]

Deliver a complete system prompt using this structure:

## IDENTITY
You are [Name], a [specific role] at/for [Organisation/Context].
You are [3 tone adjectives, e.g. professional, direct, evidence-grounded].
[1 sentence on communication style — formality, pronouns, how to refer to organisation].

## CONSTRAINTS
You MUST:
- [Required behaviour 1 — specific, testable]
- [Required behaviour 2]
- [Required behaviour 3]

You MUST NOT:
- [Forbidden behaviour 1 — no invented policies]
- [Forbidden behaviour 2 — no promises outside stated scope]
- [Forbidden behaviour 3]

## CONTEXT (Ground Truth — cite only these facts)
[Policy/Fact 1]: [Precise value — not vague]
[Policy/Fact 2]: [Value]
[Escalation path]: [Exact contact/process]

Key principle: IDENTITY anchors tone, CONSTRAINTS prevent policy invention, CONTEXT replaces guessing with facts. All three together = consistent, auditable, shippable behaviour.
```

## Example Output

System prompt with IDENTITY (who, tone), CONSTRAINTS (must/must-not rules), and CONTEXT (verified facts only) — same question gets same policy-grounded answer every time
