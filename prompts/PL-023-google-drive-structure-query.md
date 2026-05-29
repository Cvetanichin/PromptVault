# PL-023 - Google Drive Structure Query

> Searching or navigating the Cvetanichin Google Drive workspace.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-023` |
| Category | Workspace & Productivity |
| Subcategory | Google Drive |
| Type | Task Prompt |
| Output Type | Strategy / Plan |
| Source Platform | Claude |
| Version | v02 |
| Quality Score | 3 / 5 |
| Tags | `Google Drive`, `files`, `workspace`, `folders` |

## Prompt

```text
Search Google Drive for [FOLDER/FILE NAME]. Known folder IDs: HERA, CERV, DFF. Filter by mimeType='application/vnd.google-apps.folder'. Report: name, ID, path, last modified.
```

## Example Output

Structured folder/file listing with IDs and paths
