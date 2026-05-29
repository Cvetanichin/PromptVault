# PromptLibrary Taxonomy

PromptLibrary uses two axes for sorting: domain category and workflow stage.

## Domain Category

`category` answers: what kind of work does this prompt support?

Current categories include:

- AI & Automation
- Brand & Portfolio
- Capacity Building
- Clarification
- Communication
- Data Engineering
- Donor Reporting
- Fundraising
- M&E / MEL
- Meta-Prompting
- Organizational Development
- Project Management
- Prompt Engineering
- Proposal Writing
- Rephrasing
- Research & Analysis
- Summarization
- Versioning
- Vibe Coding / Product
- Workspace & Productivity
- Writing Style

## Subcategory

`sub_category` answers: what narrower use case does this prompt belong to?

Examples:

- `Logframe & Indicators`
- `Compliance`
- `Workflow Automation`
- `Funding Monitoring`
- `Strategic Planning`

## Workflow Stage

Future prompt records should include `workflow_stage`. Use one of these values:

- `Intake`
- `Design`
- `Draft`
- `Analyze`
- `Build`
- `Review`
- `Publish`
- `Monitor`
- `Archive`

This makes the library useful during actual work. A donor compliance scanner belongs to `Donor Reporting / Review`; a dashboard builder belongs to `Fundraising / Build`; an indicator prompt belongs to `M&E / MEL / Design`.

## Prompt Types

Use `type` to describe the prompting pattern:

- `Task Prompt`
- `System Prompt`
- `Meta-Prompt`
- `Chain of Thought`
- `Framework Prompt`
- `Workflow Prompt`

## Output Types

Use `output_type` to describe the artifact the prompt produces:

- `Document / Report`
- `Framework / Template`
- `Dashboard / Visual`
- `Table`
- `Code / Script`
- `Strategy / Plan`
- `Analysis / Research`

## Naming Standard

Prompt names should be short, reusable, and outcome-specific.

Good:

- `EU Grant Compliance Document Scanner`
- `HERA M&E Indicator Progress Tracker`
- `CSO Workflow Automation Blueprint`

Avoid:

- filenames
- chat titles
- vague verbs such as `Improve this`
- one-off task descriptions
