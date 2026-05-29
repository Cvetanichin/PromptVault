param(
  [Parameter(Mandatory = $true)]
  [string]$SourcePath,

  [string]$OutputPath = "sources\downloads\candidate-intake.json"
)

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$ResolvedSource = Resolve-Path $SourcePath
$ResolvedOutput = Join-Path $Root $OutputPath
$OutputDir = Split-Path -Parent $ResolvedOutput

if (!(Test-Path $OutputDir)) {
  New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

$content = Get-Content -Raw $ResolvedSource

$candidate = [ordered]@{
  imported_at = (Get-Date).ToString("o")
  source_path = $ResolvedSource.Path
  status = "intake_only"
  promotion_rule = "Do not assign PL IDs here. Deduplicate, rewrite, score, and promote into data/prompt_library_v7.json."
  raw_text = $content
}

$candidate | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $ResolvedOutput

Write-Output "Candidate intake written to $ResolvedOutput"
