# Quality Scoring

`quality_score` is a 1-5 score based on clarity, reusability, specificity, and actionability.

## Score 5

Production-ready.

The prompt has a clear role, precise task, strong output structure, useful constraints, practical usage guidance, and a concrete example output.

## Score 4

Strong and reusable.

The prompt is clear and useful, with only minor gaps such as missing edge cases, weaker example output, or limited source context.

## Score 3

Usable but needs review.

The prompt can work, but may be generic, under-specified, too broad, or missing practical constraints.

## Score 2

Rough candidate.

The prompt has a recognizable intent but needs rewriting before promotion.

## Score 1

Do not promote.

The prompt is vague, one-off, duplicated, unsafe, or too dependent on missing context.

## Scoring Checklist

Ask four questions:

- Clarity: can another person understand the task immediately?
- Reusability: can it be used beyond the original chat?
- Specificity: does it include enough constraints to produce a good output?
- Actionability: does the output help the user do something concrete?

Use the lowest weak dimension to guide the score. A prompt with excellent wording but poor reusability should not score 5.
