# PL-052 - Zero-Shot Task Decomposer

> Converting a large complex task into a chain of smaller precise prompts.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-052` |
| Category | Prompt Engineering |
| Subcategory | Zero-Shot Decomposition |
| Type | Chain of Thought |
| Output Type | Strategy / Plan |
| Source Platform | Gemini |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `zero-shot`, `decomposition`, `prompt chain`, `task planning`, `PE` |

## Prompt

```text
Break down the following complex task into a step-by-step zero-shot prompt sequence: [PASTE COMPLEX TASK]
For each step: (1) Write a self-contained prompt, (2) State what input it requires and what output it produces, (3) Indicate if the output feeds the next step. Present as a numbered chain.
```

## Example Output

Numbered prompt chain with input/output annotations per step
