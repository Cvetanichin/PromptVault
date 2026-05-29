# Storage Architecture

## Decision

Use `Cvetanichin/PromptVault` as the single source-of-truth repository.

The canonical data file is:

```text
data/prompt_library_v7.json
```

## Roles By System

| System | Role | Source of truth? |
|---|---|---|
| GitHub / PromptVault | Versioned canonical storage, docs, app code, generated exports | Yes |
| JSON | Structured durable prompt data | Yes |
| Markdown prompt files | Human-readable generated prompt records | No |
| Google Drive | Archive, intake, PDFs, spreadsheets, source documents | No |
| Supabase | Future app/search backend | No |
| Figma | Design references and app UI assets | No |
| Google Calendar | Review cadence and cleanup reminders | No |
| Standalone JSX | Legacy local mirror/app export | No |

## Why GitHub First

GitHub gives the prompt library:

- version history
- change review
- scripts and validation
- app code and data in one place
- simple rollback
- clear source-of-truth rules

## Why Drive Stays Secondary

Google Drive already contains useful prompt folders, spreadsheets, PDFs, and exports, but it also contains duplicates and older versions. It is better as an archive and intake layer.

## Why Supabase Comes Later

Supabase is useful when the app needs:

- full-text search
- favorites
- usage logs
- import queues
- multi-device state
- review status

It should not become canonical until the JSON schema and import rules are stable.

## Sync Direction

```text
Drive / Downloads / Chat Exports
          |
          v
  Curated import process
          |
          v
data/prompt_library_v7.json
          |
          +--> prompts/*.md
          +--> system-prompts/*.md
          +--> src/data/prompts.generated.ts
          +--> future Supabase tables
```
