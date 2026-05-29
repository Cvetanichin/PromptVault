# Changelog

## 2026-05-29

Repository implementation pass.

- Converted PromptVault from generic scaffold toward canonical PromptLibrary repository.
- Added `data/prompt_library_v7.json` as the source-of-truth data file.
- Added split data exports for system prompts and gaps.
- Generated one Markdown file per prompt in `prompts/`.
- Generated one Markdown file per system prompt in `system-prompts/`.
- Added `src/data/prompts.generated.ts` for app usage.
- Rewired `src/constants/mockData.ts` to re-export generated PromptLibrary data.
- Added source indexes for Google Drive, GitHub, and Downloads scan evidence.
- Added documentation for taxonomy, import rules, quality scoring, and storage architecture.
- Added validation and regeneration scripts.
