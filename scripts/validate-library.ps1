$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$LibraryPath = Join-Path $Root "data\prompt_library_v7.json"
$GeneratedPath = Join-Path $Root "src\data\prompts.generated.ts"
$PromptDir = Join-Path $Root "prompts"
$SystemPromptDir = Join-Path $Root "system-prompts"

if (!(Test-Path $LibraryPath)) {
  throw "Missing canonical library file: $LibraryPath"
}

$library = Get-Content -Raw $LibraryPath | ConvertFrom-Json

$requiredPromptFields = @(
  "id",
  "name",
  "category",
  "sub_category",
  "type",
  "output_type",
  "quality_score",
  "source_platform",
  "version",
  "prompt",
  "when_to_use",
  "example_output",
  "tags"
)

$errors = New-Object System.Collections.Generic.List[string]

if ($library.metadata.total_prompts -ne $library.prompts.Count) {
  $errors.Add("metadata.total_prompts=$($library.metadata.total_prompts), actual=$($library.prompts.Count)")
}

if ($library.metadata.total_system_prompts -ne $library.system_prompts.Count) {
  $errors.Add("metadata.total_system_prompts=$($library.metadata.total_system_prompts), actual=$($library.system_prompts.Count)")
}

if ($library.metadata.total_gaps -ne $library.gaps.Count) {
  $errors.Add("metadata.total_gaps=$($library.metadata.total_gaps), actual=$($library.gaps.Count)")
}

$duplicatePromptIds = $library.prompts | Group-Object id | Where-Object { $_.Count -gt 1 }
foreach ($dup in $duplicatePromptIds) {
  $errors.Add("Duplicate prompt ID: $($dup.Name)")
}

foreach ($prompt in $library.prompts) {
  foreach ($field in $requiredPromptFields) {
    if (-not ($prompt.PSObject.Properties.Name -contains $field)) {
      $errors.Add("$($prompt.id): missing required field '$field'")
    }
  }
  if ($prompt.tags -isnot [array] -and $prompt.tags.Count -eq 0) {
    $errors.Add("$($prompt.id): tags must be an array")
  }
}

$promptMarkdownCount = 0
if (Test-Path $PromptDir) {
  $promptMarkdownCount = (Get-ChildItem $PromptDir -Filter "PL-*.md").Count
}
if ($promptMarkdownCount -ne $library.prompts.Count) {
  $errors.Add("Prompt Markdown count=$promptMarkdownCount, expected=$($library.prompts.Count)")
}

$systemMarkdownCount = 0
if (Test-Path $SystemPromptDir) {
  $systemMarkdownCount = (Get-ChildItem $SystemPromptDir -Filter "SP-*.md").Count
}
if ($systemMarkdownCount -ne $library.system_prompts.Count) {
  $errors.Add("System prompt Markdown count=$systemMarkdownCount, expected=$($library.system_prompts.Count)")
}

if (!(Test-Path $GeneratedPath)) {
  $errors.Add("Missing generated app data: $GeneratedPath")
} else {
  $generatedText = Get-Content -Raw $GeneratedPath
  if ($generatedText -notmatch "export const canonicalPrompts") {
    $errors.Add("Generated app data does not export canonicalPrompts")
  }
  if ($generatedText -notmatch "export const mockPrompts") {
    $errors.Add("Generated app data does not export mockPrompts")
  }
}

if ($errors.Count -gt 0) {
  $errors | ForEach-Object { Write-Error $_ }
  throw "PromptLibrary validation failed with $($errors.Count) error(s)."
}

[pscustomobject]@{
  status = "ok"
  version = $library.metadata.version
  prompts = $library.prompts.Count
  system_prompts = $library.system_prompts.Count
  gaps = $library.gaps.Count
  prompt_markdown = $promptMarkdownCount
  system_prompt_markdown = $systemMarkdownCount
} | ConvertTo-Json
