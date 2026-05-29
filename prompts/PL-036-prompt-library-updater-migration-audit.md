# PL-036 - Prompt Library Updater & Migration Audit

> Periodic library maintenance or migrating prompts from other AI workspaces (ChatGPT, Gemini, Perplexity) into Claude.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-036` |
| Category | Meta-Prompting |
| Subcategory | Library Maintenance |
| Type | Meta-Prompt |
| Output Type | Table |
| Source Platform | Claude |
| Version | v03 |
| Quality Score | 5 / 5 |
| Tags | `meta-prompt`, `library maintenance`, `update`, `extraction`, `migration`, `audit`, `inventory` |

## Prompt

```text
You are helping me [UPDATE MY LIBRARY / MIGRATE FROM ANOTHER AI WORKSPACE].

Task: [UPDATE: Review recent conversations | MIGRATE: Go through past conversations from [PLATFORM] and map every important prompt or outcome]

For each recovered prompt:
1. Extract the raw prompt text or verbatim quote that justifies the entry
2. Assign: category, sub-category, intent type (Task / System / Meta / Chain of Thought)
3. Assess complexity (Low/Medium/High) and reusability (Low/Medium/High)
4. Write a 1-sentence When to use description
5. Note source confidence: [Recovered verbatim | Recovered from user profile | Inferred from pattern]

Additionally:
- Flag duplicates against the existing library
- Suggest 3 improvements for the weakest existing prompts
- Identify 3 critical gaps not covered

Output: structured table + narrative summary of changes recommended.
```

## Example Output

Structured table of recovered prompts with categories, verbatim quotes, metadata + improvement flags for existing entries
