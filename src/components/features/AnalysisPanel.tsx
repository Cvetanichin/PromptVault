import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Target,
  FileText,
  Wand2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Prompt } from '@/types';

interface AnalysisPanelProps {
  prompt: Prompt;
}

interface AnalysisCheck {
  label: string;
  passed: boolean;
  tip: string;
}

function analyzePrompt(prompt: Prompt): AnalysisCheck[] {
  const c = prompt.content.toLowerCase();
  return [
    {
      label: 'Role / Persona',
      passed: c.includes('you are') || c.includes('act as'),
      tip: 'Start with a clear role assignment (e.g., "You are a...")',
    },
    {
      label: 'Output Format',
      passed:
        c.includes('format') ||
        c.includes('json') ||
        c.includes('markdown') ||
        c.includes('structure') ||
        c.includes('include:'),
      tip: 'Specify the exact output format expected',
    },
    {
      label: 'Constraints',
      passed: c.includes('must') || c.includes('should') || c.includes("don't") || c.includes('avoid'),
      tip: 'Add explicit constraints to narrow output scope',
    },
    {
      label: 'Examples',
      passed: c.includes('example') || c.includes('e.g.') || c.includes('such as') || c.includes('for instance'),
      tip: 'Include concrete examples to demonstrate expected output',
    },
    {
      label: 'Specificity',
      passed: prompt.content.length > 200,
      tip: 'Add more detail — prompts under 200 chars tend to produce generic output',
    },
    {
      label: 'Measurable Output',
      passed: /\d/.test(prompt.content),
      tip: 'Include specific numbers (word count, item count, score ranges)',
    },
  ];
}

export default function AnalysisPanel({ prompt }: AnalysisPanelProps) {
  const checks = analyzePrompt(prompt);
  const score = checks.filter((c) => c.passed).length;
  const scorePercent = Math.round((score / checks.length) * 100);

  return (
    <div className="space-y-5">
      {/* Score Ring */}
      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-center gap-4">
          <div className="relative flex size-16 items-center justify-center">
            <svg className="size-16 -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32" cy="32" r="28"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="4"
              />
              <circle
                cx="32" cy="32" r="28"
                fill="none"
                stroke={scorePercent >= 70 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(scorePercent / 100) * 175.9} 175.9`}
              />
            </svg>
            <span className="absolute font-mono text-sm font-bold text-foreground">
              {scorePercent}%
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Structural Score
            </h3>
            <p className="text-xs text-muted-foreground">
              {score}/{checks.length} best practices met
            </p>
          </div>
        </div>
      </div>

      {/* Checks */}
      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Target className="size-3.5" />
          Structural Analysis
        </h3>
        <div className="space-y-2">
          {checks.map((check) => (
            <div
              key={check.label}
              className="flex items-start gap-2.5 rounded-md px-2.5 py-2 text-xs"
            >
              {check.passed ? (
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
              ) : (
                <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
              )}
              <div>
                <p
                  className={cn(
                    'font-medium',
                    check.passed ? 'text-foreground' : 'text-amber-400'
                  )}
                >
                  {check.label}
                </p>
                {!check.passed && (
                  <p className="mt-0.5 text-muted-foreground">{check.tip}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Improvements */}
      {prompt.improvements.length > 0 && (
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Lightbulb className="size-3.5" />
            Suggested Improvements
          </h3>
          <ul className="space-y-2">
            {prompt.improvements.map((imp, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 rounded-md bg-primary/5 px-3 py-2 text-xs"
              >
                <Wand2 className="mt-0.5 size-3 shrink-0 text-primary" />
                <span className="text-foreground">{imp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats */}
      <div className="rounded-lg border border-border bg-card p-4">
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <TrendingUp className="size-3.5" />
          Performance
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md bg-muted/50 p-3 text-center">
            <p className="font-mono text-lg font-bold text-primary tabular-nums">
              {prompt.usageCount}
            </p>
            <p className="text-[10px] text-muted-foreground">Total Uses</p>
          </div>
          <div className="rounded-md bg-muted/50 p-3 text-center">
            <p className="font-mono text-lg font-bold text-secondary tabular-nums">
              {prompt.versions.length}
            </p>
            <p className="text-[10px] text-muted-foreground">Versions</p>
          </div>
          <div className="rounded-md bg-muted/50 p-3 text-center">
            <p className="font-mono text-lg font-bold text-foreground tabular-nums">
              {prompt.effectiveness}/5
            </p>
            <p className="text-[10px] text-muted-foreground">Effectiveness</p>
          </div>
          <div className="rounded-md bg-muted/50 p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <FileText className="size-4 text-foreground" />
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">
              {prompt.content.split(' ').length} words
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
