$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$LibraryPath = Join-Path $Root "data\prompt_library_v7.json"

if (!(Test-Path $LibraryPath)) {
  throw "Missing canonical library file: $LibraryPath"
}

$python = @'
import json
import re
from pathlib import Path

root = Path.cwd()
data = json.loads((root / "data" / "prompt_library_v7.json").read_text(encoding="utf-8"))

for folder in ["prompts", "system-prompts", "src/data"]:
    (root / folder).mkdir(parents=True, exist_ok=True)

def slug(value):
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value).strip("-").lower()
    return value[:72] or "untitled"

def md_escape(value):
    return str(value).replace("|", "\\|")

def quality_tag(score):
    score = int(score or 3)
    if score >= 4:
        return "great"
    if score == 3:
        return "okay"
    return "poor"

def prompt_markdown(prompt):
    tags = ", ".join(f"`{tag}`" for tag in prompt.get("tags", []))
    return f"""# {prompt["id"]} - {prompt["name"]}

> {prompt.get("when_to_use", "")}

## Metadata

| Field | Value |
|---|---|
| ID | `{prompt["id"]}` |
| Category | {md_escape(prompt.get("category", ""))} |
| Subcategory | {md_escape(prompt.get("sub_category", ""))} |
| Type | {md_escape(prompt.get("type", ""))} |
| Output Type | {md_escape(prompt.get("output_type", ""))} |
| Source Platform | {md_escape(prompt.get("source_platform", ""))} |
| Version | {md_escape(prompt.get("version", ""))} |
| Quality Score | {prompt.get("quality_score", "")} / 5 |
| Tags | {tags} |

## Prompt

```text
{prompt.get("prompt", "")}
```

## Example Output

{prompt.get("example_output", "")}
"""

for old in (root / "prompts").glob("PL-*.md"):
    old.unlink()
for prompt in data["prompts"]:
    (root / "prompts" / f'{prompt["id"]}-{slug(prompt["name"])}.md').write_text(prompt_markdown(prompt), encoding="utf-8")

def system_markdown(prompt):
    tags = ", ".join(f"`{tag}`" for tag in prompt.get("tags", []))
    return f"""# {prompt["id"]} - {prompt["name"]}

## Metadata

| Field | Value |
|---|---|
| ID | `{prompt["id"]}` |
| Category | {md_escape(prompt.get("category", "System Prompt"))} |
| Source Platform | {md_escape(prompt.get("source_platform", ""))} |
| Version | {md_escape(prompt.get("version", ""))} |
| Tags | {tags} |

## System Prompt

```text
{prompt.get("prompt", "")}
```

## When To Use

{prompt.get("when_to_use", "")}
"""

for old in (root / "system-prompts").glob("SP-*.md"):
    old.unlink()
for prompt in data.get("system_prompts", []):
    (root / "system-prompts" / f'{prompt["id"]}-{slug(prompt["name"])}.md').write_text(system_markdown(prompt), encoding="utf-8")

model_map = {
    "Claude": "Claude",
    "GPT": "GPT-4o",
    "Gemini": "Gemini Pro",
    "Perplexity": "GPT-4o",
    "Manual": "Claude",
}

app_prompts = []
updated = f'{data["metadata"].get("last_updated", "2026-05-29")}T00:00:00Z'
for prompt in data["prompts"]:
    model = model_map.get(prompt.get("source_platform"), "Claude")
    score = max(1, min(5, int(prompt.get("quality_score") or 3)))
    app_prompts.append({
        "id": prompt["id"],
        "title": prompt["name"],
        "description": prompt.get("when_to_use", ""),
        "content": prompt.get("prompt", ""),
        "category": prompt.get("category", "Uncategorized"),
        "models": [model],
        "bestModel": model,
        "tags": prompt.get("tags", []),
        "effectiveness": score,
        "qualityTag": quality_tag(score),
        "usageCount": int(prompt.get("times_used") or 0),
        "versions": [{
            "id": f'{prompt["id"]}-v{prompt.get("version", "1")}',
            "version": 1,
            "content": prompt.get("prompt", ""),
            "createdAt": updated,
            "rating": score,
            "qualityTag": quality_tag(score),
        }],
        "project": prompt.get("sub_category") or None,
        "isFavorite": score >= 5,
        "createdAt": updated,
        "updatedAt": updated,
        "improvements": [],
    })

all_categories = sorted({prompt["category"] for prompt in data["prompts"]})
all_models = sorted({model for prompt in app_prompts for model in prompt["models"]})
all_projects = sorted({prompt["project"] for prompt in app_prompts if prompt.get("project")})

generated = "/* Generated from data/prompt_library_v7.json. Do not edit by hand. */\n"
generated += "import type { Prompt } from '@/types';\n\n"
generated += "export const canonicalLibraryMetadata = " + json.dumps(data["metadata"], ensure_ascii=False, indent=2) + " as const;\n\n"
generated += "export const canonicalPrompts = " + json.dumps(data["prompts"], ensure_ascii=False, indent=2) + " as const;\n\n"
generated += "export const canonicalSystemPrompts = " + json.dumps(data.get("system_prompts", []), ensure_ascii=False, indent=2) + " as const;\n\n"
generated += "export const mockPrompts: Prompt[] = " + json.dumps(app_prompts, ensure_ascii=False, indent=2) + ";\n\n"
generated += "export const ALL_CATEGORIES: string[] = " + json.dumps(all_categories, ensure_ascii=False, indent=2) + ";\n\n"
generated += "export const ALL_MODELS: string[] = " + json.dumps(all_models, ensure_ascii=False, indent=2) + ";\n\n"
generated += "export const ALL_PROJECTS: string[] = " + json.dumps(all_projects, ensure_ascii=False, indent=2) + ";\n"

(root / "src/data/prompts.generated.ts").write_text(generated, encoding="utf-8")
(root / "src/constants/mockData.ts").write_text("export { mockPrompts, ALL_CATEGORIES, ALL_MODELS, ALL_PROJECTS } from '@/data/prompts.generated';\n", encoding="utf-8")

print(json.dumps({
    "status": "ok",
    "prompts": len(data["prompts"]),
    "system_prompts": len(data.get("system_prompts", [])),
    "generated": "src/data/prompts.generated.ts",
}, indent=2))
'@

Push-Location $Root
try {
  $python | python -
} finally {
  Pop-Location
}
