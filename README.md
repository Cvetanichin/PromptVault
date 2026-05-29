# PromptVault

Canonical repository for the Cvetanichin PromptLibrary.

PromptVault stores the curated prompt library as versioned data, readable prompt files, documentation, and a React app shell for browsing and using prompts.

## Source Of Truth

The durable source of truth is:

```text
data/prompt_library_v7.json
```

Generated or mirrored surfaces include:

- `prompts/` - one Markdown file per library prompt.
- `system-prompts/` - one Markdown file per reusable system prompt.
- `src/data/prompts.generated.ts` - app-ready prompt data generated from JSON.
- `src/constants/mockData.ts` - compatibility re-export for the existing app.

Do not hand-edit generated prompt Markdown or app data unless you are intentionally replacing the generation flow. Edit the canonical JSON, then regenerate.

## Repository Layout

```text
data/
  prompt_library_v7.json
  system_prompts.json
  prompt_gaps.json
docs/
  taxonomy.md
  import-rules.md
  quality-scoring.md
  storage-architecture.md
  changelog.md
prompts/
system-prompts/
sources/
  downloads/
  google-drive/
  github/
scripts/
  validate-library.ps1
  export-jsx-prompts.ps1
  import-candidates.ps1
src/
  data/prompts.generated.ts
```

## Current Library

- Version: `7.6`
- Last updated: `2026-05-29`
- Prompts: `96`
- System prompts: `15`
- Known gaps: `23`

## Validation

From the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-library.ps1
```

The validator checks JSON parsing, metadata counts, required prompt fields, duplicate IDs, generated Markdown counts, and generated app data.

## Regeneration

After editing `data/prompt_library_v7.json`, regenerate app data and Markdown files:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\export-jsx-prompts.ps1
```

## Storage Policy

PromptVault is the canonical storage layer. Google Drive remains the readable archive and intake layer. Supabase can be added later as an app/search backend. Figma remains a design-reference surface. Calendar can support review cadence and maintenance reminders.

See [docs/storage-architecture.md](docs/storage-architecture.md) for the full decision.
