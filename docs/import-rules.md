# Import Rules

PromptLibrary uses curated import, not bulk import.

## Intake Sources

Accepted source material:

- local `ctx-*.json` conversation exports
- Google Drive prompt folders and sheets
- system prompt documents
- prompt suites
- app specs
- workflow blueprints
- prior PromptLibrary JSON/PDF exports

## Promotion Criteria

Promote a candidate only when it is:

- reusable across more than one situation
- clearly named
- specific enough to execute
- broad enough to adapt
- not a duplicate of an existing prompt
- safe to store in the library
- paired with usage guidance and example output

## Deduplication

Deduplicate by intent, not wording.

If two prompts both generate funding dashboards, keep the stronger one and merge useful constraints. Do not create separate records only because the chat source or filename differs.

## ID Assignment

Assign stable `PL-###` IDs only at promotion time.

Do not give permanent IDs to raw candidates, rough imports, partial exports, or unreviewed chat fragments.

## Required Fields

Every promoted prompt must include:

- `id`
- `name`
- `category`
- `sub_category`
- `type`
- `output_type`
- `quality_score`
- `source_platform`
- `version`
- `prompt`
- `when_to_use`
- `example_output`
- `tags`

## Source Tracking

Use `source_reference` for future imports when possible. A source reference may be:

- local filename
- Drive file URL
- GitHub URL
- conversation export filename
- PDF/export name

## Workflow

1. Place raw source material in `sources/` or reference it from a source index.
2. Extract candidates into a temporary intake list.
3. Compare candidates against existing IDs and names.
4. Rewrite rough candidates into reusable prompts.
5. Score quality.
6. Add promoted prompts to `data/prompt_library_v7.json`.
7. Run `scripts/export-jsx-prompts.ps1`.
8. Run `scripts/validate-library.ps1`.
9. Commit JSON, generated Markdown, generated app data, docs, and source indexes together.
