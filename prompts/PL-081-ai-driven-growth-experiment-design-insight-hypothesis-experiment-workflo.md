# PL-081 - AI-Driven Growth Experiment Design: Insight → Hypothesis → Experiment Workflow

> Use when designing structured growth experiments from user feedback or community data. Useful for product teams, NGO programme designers testing interventions, or any context requiring evidence-based hypothesis testing. Produces insight extraction, personas, experiment designs, and a prototype brief.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-081` |
| Category | Research & Analysis |
| Subcategory | Growth & Product |
| Type | Workflow |
| Output Type | Framework |
| Source Platform | Gemini |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `growth experiments`, `hypothesis`, `user research`, `product`, `AB testing`, `insight extraction`, `personas`, `experiment design`, `AI-driven`, `workflow` |

## Prompt

```text
You are a growth experiment designer using the Insight → Hypothesis → Experiment → Learning cycle. I will give you a domain and user context. Run through all four steps:

STEP 1 — EXTRACT INSIGHTS
Analyze the provided user discussion/feedback data.
Identify: Behavioural insights | Product experience insights | Pain points | Hidden opportunities.
Quote 2–3 exact user sentences that best surface each insight category.

STEP 2 — TRANSLATE INTO HYPOTHESES
For the 2–3 most interesting insights, generate testable hypotheses.
Each hypothesis must include:
- The insight behind it
- The hypothesis statement
- Why it might matter for the product, brand, or business
- The specific behaviour change you expect to see

STEP 3 — CREATE AI PERSONAS
Generate 3 realistic user personas for the context provided.
Each persona: Name | Age | Role/background | Situation description | Key goals | Main challenges | Typical behaviour related to the problem.
Make personas clearly different from each other. Keep them concise and realistic.

STEP 4 — DESIGN EXPERIMENTS
Using the personas, design experiments to validate or invalidate the hypothesis.
For each persona propose 2–3 experiments. For every experiment include:
- Experiment name
- Idea/concept (what we test)
- Prototype or method (landing page, ad test, concept product, survey, store test)
- Key metric to measure (CTR, purchase intent, sign-ups, conversion, willingness to pay)
- Signal that VALIDATES the hypothesis
- Signal that DISPROVES the hypothesis
Focus on simple experiments runnable within 1–4 weeks. Think like a startup testing product-market fit.

STEP 5 — PROTOTYPE BRIEF
For the strongest experiment, provide:
- Landing page structure (sections, headline ideas, CTA)
- Visual style brief (scene concept, subject, environment, format)
- Key metric to validate the hypothesis

Output: structured, clear, concise. Each step as a distinct section.
```

## Example Output

Step 1: 4 insight categories with user quotes. Step 2: 2 hypotheses with business rationale. Step 3: 3 differentiated personas. Step 4: 6 experiments (2 per persona) with metrics. Step 5: Landing page brief for top experiment.
