import type { PromptCategory, LLMModel } from '@/types';

export interface PromptPreset {
  id: string;
  name: string;
  description: string;
  category: PromptCategory;
  models: LLMModel[];
  tags: string[];
  content: string;
}

export const PROMPT_PRESETS: PromptPreset[] = [
  // Coding
  {
    id: 'preset-code-review',
    name: 'Code Review Template',
    description: 'Thorough code review with security, performance, and style checks',
    category: 'Coding',
    models: ['Claude', 'GPT-4'],
    tags: ['code-review', 'quality', 'best-practices'],
    content: `You are a principal engineer conducting a code review. Review the provided code for:

1) **Correctness** — logic errors, edge cases, off-by-one errors
2) **Security** — injection risks, auth issues, data exposure
3) **Performance** — time/space complexity, unnecessary allocations
4) **Maintainability** — naming, structure, DRY violations
5) **Testing** — untested paths, suggested test cases

Rate each finding as critical/major/minor/suggestion. Format as a PR review with inline code references. Provide corrected code snippets for critical and major issues.

Language/Framework: [SPECIFY]
Context: [DESCRIBE THE CODEBASE CONTEXT]`,
  },
  {
    id: 'preset-api-builder',
    name: 'API Endpoint Builder',
    description: 'Generates REST API endpoints with validation, error handling, and docs',
    category: 'Coding',
    models: ['Claude', 'GPT-4', 'GPT-4o'],
    tags: ['api', 'rest', 'backend', 'typescript'],
    content: `You are a senior backend engineer. Build a production-ready REST API endpoint based on the specification below.

Include:
- Route handler with proper HTTP method and path
- Input validation using Zod or equivalent schema
- Error handling with appropriate HTTP status codes (400, 401, 403, 404, 500)
- TypeScript interfaces for request/response shapes
- Database query logic (using [ORM/QUERY BUILDER])
- Authentication/authorization middleware check
- Rate limiting considerations noted in comments
- OpenAPI documentation comment block

Language: TypeScript
Framework: [Express/Fastify/Hono]
Database: [PostgreSQL/MongoDB]
Endpoint: [DESCRIBE THE ENDPOINT]`,
  },
  {
    id: 'preset-refactor',
    name: 'Code Refactoring Guide',
    description: 'Refactors legacy code with SOLID principles and modern patterns',
    category: 'Coding',
    models: ['Claude', 'GPT-4o'],
    tags: ['refactoring', 'clean-code', 'solid', 'patterns'],
    content: `You are a software architect specializing in code modernization. Refactor the provided code following these principles:

1) Apply SOLID principles where applicable
2) Extract reusable functions/modules (DRY)
3) Improve naming for self-documenting code
4) Reduce cyclomatic complexity (max 10 per function)
5) Add proper TypeScript types (no \`any\`)
6) Implement error handling with custom error classes
7) Add JSDoc comments for public APIs

For each change, explain:
- What was changed and why
- Before/after comparison
- Potential risks of the refactor

Preserve all existing behavior (no functional changes). Suggest tests to verify the refactor is safe.

Language: [SPECIFY]
Code to refactor:
[PASTE CODE]`,
  },

  // Writing
  {
    id: 'preset-blog-writer',
    name: 'Blog Writer Template',
    description: 'SEO-optimized blog posts with structure, hooks, and CTAs',
    category: 'Writing',
    models: ['Claude', 'GPT-4o'],
    tags: ['blog', 'seo', 'content-marketing'],
    content: `You are an experienced content strategist and SEO writer. Write a comprehensive blog post following this structure:

1) **Headline** — compelling, keyword-optimized (60 chars max)
2) **Meta description** — 155 chars, includes target keyword
3) **Hook intro** — 2-3 sentences that identify the reader's pain point
4) **Body** — 4-6 sections with H2 subheadings, each 150-250 words
5) **Actionable takeaways** — bulleted list of 3-5 key points
6) **Conclusion with CTA** — summarize value + next step for reader

Guidelines:
- Target keyword: [KEYWORD]
- Word count: 1500-2000 words
- Tone: authoritative yet conversational
- Audience: [DESCRIBE TARGET READER]
- Include 2-3 data points or statistics (cite sources)
- Use transition phrases between sections
- Avoid keyword stuffing (1-2% density max)

Topic: [YOUR TOPIC]`,
  },
  {
    id: 'preset-email-sequence',
    name: 'Email Sequence Writer',
    description: 'Conversion-focused email sequences with A/B subject lines',
    category: 'Writing',
    models: ['GPT-4o', 'Claude'],
    tags: ['email', 'copywriting', 'marketing', 'conversion'],
    content: `You are a direct-response email copywriter. Write an email for the specified campaign stage.

Include:
- **Subject line** + 2 A/B variations (under 50 chars each)
- **Preview text** — 90 chars that complement the subject
- **Personalized greeting** using [FIRST_NAME] merge tag
- **Body copy** — using PAS (Problem-Agitate-Solution) framework
- **Primary CTA** — single clear action button with text
- **P.S. line** — urgency or social proof element

Constraints:
- Body under 200 words (mobile-first readability)
- One idea per email, one CTA per email
- Conversational tone matching brand voice: [DESCRIBE BRAND VOICE]
- Comply with CAN-SPAM: include unsubscribe, physical address reference

Campaign type: [welcome / nurture / conversion / re-engagement]
Goal: [DESCRIBE DESIRED ACTION]
Audience segment: [DESCRIBE]`,
  },

  // Analysis
  {
    id: 'preset-market-analysis',
    name: 'Market Analysis Report',
    description: 'Structured competitive analysis with SWOT and strategic recommendations',
    category: 'Analysis',
    models: ['Gemini Pro', 'GPT-4'],
    tags: ['market-research', 'competitive-analysis', 'strategy'],
    content: `You are a senior market research analyst at a top-tier consulting firm. Create a comprehensive market analysis report.

Structure:
1) **Executive Summary** — 3-sentence overview of key findings
2) **Market Size & Growth** — TAM/SAM/SOM with growth rates (cite plausible figures)
3) **Competitive Landscape** — top 5 players with market share estimates
4) **SWOT Analysis** — 4+ points per quadrant, specific and actionable
5) **Consumer Behavior** — key buying factors, decision journey, pain points
6) **Emerging Trends** — 3-5 trends with evidence and timeline
7) **Risk Factors** — regulatory, market, and operational risks
8) **Strategic Recommendations** — 3 actions with impact/effort scores (1-5)

Format as a professional report with clear headings and data tables where applicable. Use specific numbers, not vague qualifiers.

Industry: [SPECIFY INDUSTRY]
Geographic scope: [REGION]
Time horizon: [1-3 years / 3-5 years]
Company/Product focus: [OPTIONAL]`,
  },
  {
    id: 'preset-data-analysis',
    name: 'Data Interpretation Template',
    description: 'Interprets datasets with trend analysis and actionable insights',
    category: 'Analysis',
    models: ['GPT-4', 'Claude'],
    tags: ['data-analysis', 'insights', 'reporting', 'metrics'],
    content: `You are a data analyst specializing in turning raw data into business decisions. Analyze the provided dataset and deliver:

1) **Key Metrics Summary** — top 5-7 metrics with current values and period-over-period changes
2) **Trend Analysis** — identify patterns with specific numbers and timeframes
3) **Anomaly Detection** — flag unexpected values with possible explanations
4) **Segment Breakdown** — compare performance across relevant segments
5) **Correlations** — identify relationships between variables (not causation)
6) **Actionable Insights** — 3-5 recommendations with expected impact
7) **Data Quality Notes** — flag missing data, outliers, or methodology concerns

Present numeric findings in tables. Use percentage changes, not just absolute numbers. Distinguish between correlation and causation.

Data type: [revenue / engagement / performance / survey]
Time period: [SPECIFY]
Key question to answer: [WHAT DECISION DOES THIS INFORM?]`,
  },

  // Brainstorming
  {
    id: 'preset-product-ideation',
    name: 'Product Ideation Engine',
    description: 'Generates product ideas using structured creativity frameworks',
    category: 'Brainstorming',
    models: ['GPT-4o', 'Claude', 'Gemini Pro'],
    tags: ['ideation', 'product', 'innovation', 'creativity'],
    content: `You are a creative director at an innovation consultancy. Use multiple creativity frameworks to brainstorm product/feature ideas for the given challenge.

Generate exactly 10 ideas using these methods:
- 3 ideas via SCAMPER (Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse)
- 3 ideas via analogy from other industries
- 2 ideas via constraint removal ("What if X limitation didn't exist?")
- 2 wildcard ideas (unconventional, potentially disruptive)

For each idea provide:
| Field | Detail |
|-------|--------|
| Name | Catchy 2-4 word name |
| Pitch | One-sentence elevator pitch |
| Target user | Who benefits most |
| Feasibility | Score 1-5 with brief justification |
| Novelty | Score 1-5 |
| Revenue model | How it makes money |

End with your top 3 picks ranked, with implementation roadmap (Phase 1/2/3).

Challenge: [DESCRIBE THE PROBLEM OR OPPORTUNITY]
Constraints: [budget / timeline / tech limitations]
Industry: [SPECIFY]`,
  },
  {
    id: 'preset-naming',
    name: 'Brand Naming Workshop',
    description: 'Generates memorable brand/product names with evaluation criteria',
    category: 'Brainstorming',
    models: ['Gemini Pro', 'GPT-4o'],
    tags: ['branding', 'naming', 'creative', 'marketing'],
    content: `You are a brand naming specialist at a creative agency. Generate 15 product/brand name candidates organized by approach:

**Descriptive (3 names)** — directly communicates what it does
**Evocative (4 names)** — suggests feelings or outcomes
**Invented (4 names)** — coined words with pleasing phonetics
**Compound/Portmanteau (4 names)** — two concepts merged

For each name evaluate:
- Pronunciation guide (if non-obvious)
- Meaning/origin explanation
- Emotional tone it conveys
- .com domain likelihood (high/medium/low)
- Trademark risk (low/medium/high)
- Global friendliness (any negative meanings in major languages?)

Criteria: 1-3 syllables, easy to spell on first hearing, memorable after one exposure.

Rank your top 5 with justification. Include a "Rejected but worth noting" section for creative-but-risky options.

Product/Service: [DESCRIBE]
Target audience: [DESCRIBE]
Brand personality: [3-4 adjectives]
Competitors to differentiate from: [LIST]`,
  },

  // Data Extraction
  {
    id: 'preset-data-parser',
    name: 'Structured Data Extractor',
    description: 'Extracts and transforms unstructured data into clean schemas',
    category: 'Data Extraction',
    models: ['Claude', 'GPT-4'],
    tags: ['parsing', 'etl', 'data-cleaning', 'json'],
    content: `You are a data engineer specializing in ETL and data transformation. Extract structured data from the provided unstructured source.

Process:
1) **Identify entities** — list all extractable data fields
2) **Define schema** — propose a JSON/CSV schema with field names, types, and constraints
3) **Extract data** — parse the source into the defined schema
4) **Validate** — flag any ambiguous, missing, or inconsistent values
5) **Transform** — standardize formats (dates → ISO 8601, phones → E.164, names → Title Case)
6) **Output** — provide the clean structured data in the requested format

Output format: [JSON / CSV / SQL INSERT statements]
Handle ambiguity by: [asking for clarification / using best guess with confidence score / skipping]
Null handling: [explicit null / empty string / default value]

Source data:
[PASTE UNSTRUCTURED DATA]`,
  },
  {
    id: 'preset-schema-generator',
    name: 'JSON Schema Generator',
    description: 'Infers comprehensive JSON Schema from data samples',
    category: 'Data Extraction',
    models: ['Claude', 'GPT-4'],
    tags: ['json-schema', 'validation', 'data-modeling', 'api'],
    content: `You are a data architect. Analyze the provided JSON data sample(s) and generate a comprehensive JSON Schema (draft-07 or 2020-12).

Include:
- All property types with human-readable descriptions
- Required vs optional fields (inferred from consistency across samples)
- \`format\` validators: email, uri, date-time, uuid, ipv4, etc.
- \`enum\` constraints where values appear bounded
- \`pattern\` regex for strings with consistent formats
- Array schemas with minItems/maxItems and item validation
- Nested object schemas fully resolved (no lazy \`object\` types)
- Default values where sensible
- Examples per field

Deliverables:
1) The complete JSON Schema
2) One valid example payload
3) One invalid payload with expected validation errors explained
4) Migration notes if upgrading from a simpler schema

Schema version: [draft-07 / 2020-12]
Data samples:
[PASTE 2-3 SAMPLE OBJECTS]`,
  },

  // Image Generation
  {
    id: 'preset-image-prompt',
    name: 'AI Image Prompt Crafter',
    description: 'Transforms concepts into detailed, effective image generation prompts',
    category: 'Image Generation',
    models: ['GPT-4', 'Claude'],
    tags: ['dall-e', 'midjourney', 'stable-diffusion', 'creative'],
    content: `You are an expert prompt engineer for AI image generation (DALL-E, Midjourney, Stable Diffusion, Flux). Transform the user's concept into optimized generation prompts.

For each concept provide 3 variations:
1) **Photorealistic** — camera specs, lighting, environment
2) **Artistic/Painterly** — art movement reference, medium, texture
3) **Stylized/Graphic** — design style, color palette, composition

Each prompt should include (40-80 words):
- Subject with specific physical details
- Environment/background description
- Lighting type and direction
- Art style or photography type
- Color palette (3-4 colors)
- Mood/atmosphere keywords
- Quality modifiers (resolution, detail level)

Also provide:
- Recommended aspect ratio per variation
- Negative prompt / things to avoid
- Platform-specific tips (Midjourney --parameters, DALL-E style keywords)

Concept: [DESCRIBE YOUR VISION]
Primary use: [social media / website hero / product shot / illustration]
Brand colors: [OPTIONAL]`,
  },

  // Translation
  {
    id: 'preset-translation',
    name: 'Technical Translation Template',
    description: 'Translates technical content preserving terminology and formatting',
    category: 'Translation',
    models: ['Gemini Pro', 'GPT-4'],
    tags: ['translation', 'localization', 'technical', 'documentation'],
    content: `You are a professional technical translator with domain expertise. Translate the provided content following these rules:

**Preserve exactly as-is:**
- Code snippets, variable names, file paths
- Brand names and product names
- URLs and email addresses
- Version numbers and technical identifiers

**Translation rules:**
- Use formal/informal register: [formal / informal]
- For terms with no direct translation, keep English term + parenthetical native translation on first use
- Maintain original formatting (headings, lists, code blocks, tables)
- Adapt idioms to culturally equivalent expressions (don't translate literally)
- Numbers: use target locale formatting (decimal separator, thousands)
- Dates: convert to target locale format

**Deliverables:**
1) Full translated document
2) Glossary of translated technical terms (English → Target)
3) Flagged passages needing human review (ambiguous or context-dependent)

Source language: [SPECIFY]
Target language: [SPECIFY]
Domain: [software / medical / legal / marketing]
Content:
[PASTE CONTENT]`,
  },

  // Debugging
  {
    id: 'preset-debugger',
    name: 'Bug Diagnosis Template',
    description: 'Systematic root cause analysis with fix and prevention strategies',
    category: 'Debugging',
    models: ['Claude', 'GPT-4o'],
    tags: ['debugging', 'root-cause', 'error-handling', 'fix'],
    content: `You are a senior engineer specializing in debugging production systems. Analyze the provided error and code context.

Deliver:
1) **Root Cause** — explain exactly why this error occurs, referencing specific lines
2) **The Fix** — provide corrected code with changes highlighted (minimal diff)
3) **Why It Works** — explain the fix in one sentence
4) **Prevention** — how to avoid this class of bug:
   - Type-level prevention (stricter types, branded types)
   - Runtime prevention (assertions, guards, validation)
   - Test coverage (specific test cases to add)
5) **Related Pitfalls** — 2-3 similar bugs commonly found in this pattern
6) **Confidence Level** — rate how certain you are this is the root cause (high/medium/low)

If multiple potential causes exist, rank them by likelihood and provide fixes for each.

Language: [SPECIFY]
Runtime: [Node.js / Browser / Python / etc.]
Error message:
[PASTE ERROR]

Relevant code:
[PASTE CODE]`,
  },
  {
    id: 'preset-log-analyzer',
    name: 'Log Analysis Template',
    description: 'Parses application logs to identify patterns and remediation steps',
    category: 'Debugging',
    models: ['Claude', 'Llama 3'],
    tags: ['devops', 'logs', 'monitoring', 'sre'],
    content: `You are a Site Reliability Engineer analyzing production logs. Process the provided logs and produce:

1) **Error Classification** — group by error type with frequency count
2) **Timeline** — map error patterns to timestamps, identify spikes
3) **Root Cause Hypotheses** — rank top 3 likely causes with evidence
4) **Correlation Analysis** — connections between error types, timing patterns, or cascading failures
5) **Impact Assessment** — estimated user-facing impact, affected endpoints/services
6) **Remediation Plan** — prioritized actions:
   | Priority | Action | Effort | Expected Impact |
   |----------|--------|--------|-----------------|
7) **Monitoring Gaps** — what additional logging/alerting would catch this earlier

Log format: [JSON / syslog / custom — describe format]
Time range: [SPECIFY]
Known recent changes: [deployments, config changes, traffic spikes]

Logs:
[PASTE LOGS]`,
  },

  // Summarization
  {
    id: 'preset-summarizer',
    name: 'Document Summarizer Template',
    description: 'Creates structured summaries with key points and action items',
    category: 'Summarization',
    models: ['Claude', 'GPT-4o'],
    tags: ['summary', 'tldr', 'key-points', 'digest'],
    content: `You are a research analyst who creates precise, structured summaries. Summarize the provided document using this framework:

1) **TL;DR** — one sentence, tweet-length (< 280 chars)
2) **Executive Summary** — 3-5 sentences covering the essential message
3) **Key Points** — 5-7 bullet points, each one concrete fact or insight
4) **Data & Evidence** — specific numbers, quotes, or findings cited
5) **Action Items** — what should the reader DO based on this (if applicable)
6) **Open Questions** — what the document doesn't answer or leaves ambiguous
7) **Related Topics** — 3 areas to explore for deeper understanding

Rules:
- Preserve specific numbers and data points (don't round or generalize)
- Distinguish between facts stated and opinions expressed
- Note the document's limitations or biases
- Target audience for summary: [executive / technical / general]
- Summary length: [brief ~200 words / standard ~500 words / comprehensive ~800 words]

Document:
[PASTE CONTENT]`,
  },

  // Research
  {
    id: 'preset-literature-review',
    name: 'Literature Review Template',
    description: 'Synthesizes research papers into thematic literature reviews',
    category: 'Research',
    models: ['Claude', 'Gemini Pro'],
    tags: ['academic', 'literature-review', 'synthesis', 'research'],
    content: `You are an academic researcher conducting a literature review. Synthesize the provided sources (or topic) into a structured review:

1) **Research Question** — what overarching question does this review address?
2) **Scope & Methodology** — search criteria, inclusion/exclusion, databases searched
3) **Thematic Synthesis** — organize findings by theme (not by paper):
   - Theme 1: [finding pattern] — supported by [Author, Year] + [Author, Year]
   - Theme 2: ...
4) **Consensus vs Debate** — where do researchers agree? Where do they disagree?
5) **Methodological Trends** — common approaches, sample sizes, limitations
6) **Research Gaps** — clearly identified areas needing more study
7) **Future Directions** — 3-5 specific research questions worth pursuing
8) **Key References** — annotated bibliography of the 10 most important papers

Citation style: [APA 7th / MLA / Chicago / Harvard]
Field: [SPECIFY DISCIPLINE]
Topic: [DESCRIBE RESEARCH AREA]
Known papers to include: [OPTIONAL LIST]`,
  },
  {
    id: 'preset-experiment-design',
    name: 'Experiment Design Template',
    description: 'Designs rigorous experiments with controls, metrics, and analysis plans',
    category: 'Research',
    models: ['GPT-4', 'Claude'],
    tags: ['experiment', 'methodology', 'hypothesis', 'statistics'],
    content: `You are a research methodologist. Design a rigorous experiment to test the following hypothesis:

Deliver:
1) **Hypothesis** — null and alternative, clearly stated and falsifiable
2) **Variables** — independent, dependent, and controlled variables with operational definitions
3) **Design Type** — [between/within/mixed] subjects with justification
4) **Sample** — target population, sampling method, minimum sample size (power analysis rationale)
5) **Procedure** — step-by-step protocol with timing
6) **Materials/Instruments** — what tools, surveys, or measures are needed
7) **Controls** — how confounds are managed (randomization, blinding, counterbalancing)
8) **Analysis Plan** — pre-registered statistical tests, significance thresholds, effect size metrics
9) **Ethical Considerations** — consent, risks, IRB requirements
10) **Limitations** — acknowledged threats to validity (internal, external, construct)

Include: power analysis assumptions, expected timeline, and budget considerations.

Research question: [STATE YOUR QUESTION]
Context: [DESCRIBE THE SETTING]
Constraints: [budget / time / participant access]`,
  },
];

export function getPresetsForCategory(category: PromptCategory): PromptPreset[] {
  return PROMPT_PRESETS.filter((p) => p.category === category);
}

export function getAllPresetCategories(): PromptCategory[] {
  const categories = new Set(PROMPT_PRESETS.map((p) => p.category));
  return Array.from(categories) as PromptCategory[];
}
