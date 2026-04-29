import { useState } from 'react';
import {
  Wand2,
  AlertCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Copy,
  Sparkles,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { optimizePrompt, type OptimizedPrompt, type OptimizationIssue } from '@/lib/promptOptimizer';
import type { PromptCategory } from '@/types';

interface PromptOptimizerProps {
  content: string;
  category?: PromptCategory;
  onApply?: (optimized: string) => void;
  compact?: boolean;
}

const severityIcons = {
  critical: AlertCircle,
  major: AlertTriangle,
  minor: Info,
  suggestion: Lightbulb,
};

const severityColors = {
  critical: 'text-red-400 bg-red-500/10 border-red-500/20',
  major: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  minor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  suggestion: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
};

const severityLabels = {
  critical: 'Critical',
  major: 'Major',
  minor: 'Minor',
  suggestion: 'Tip',
};

function IssueCard({ issue }: { issue: OptimizationIssue }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = severityIcons[issue.severity];
  const color = severityColors[issue.severity];

  return (
    <div className={cn('rounded-md border p-3', color)}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-2.5 text-left"
      >
        <Icon className="mt-0.5 size-3.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">{issue.title}</span>
            <span className="rounded px-1.5 py-0.5 text-[9px] font-medium uppercase opacity-70">
              {severityLabels[issue.severity]}
            </span>
          </div>
          {expanded && (
            <p className="mt-1.5 text-[11px] leading-relaxed opacity-80">
              {issue.description}
            </p>
          )}
        </div>
        {expanded ? (
          <ChevronUp className="mt-0.5 size-3 shrink-0 opacity-50" />
        ) : (
          <ChevronDown className="mt-0.5 size-3 shrink-0 opacity-50" />
        )}
      </button>
      {expanded && (
        <div className="mt-2 ml-6 rounded bg-card/50 px-3 py-2">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Recommended Fix
          </p>
          <p className="mt-0.5 text-xs text-foreground">{issue.fix}</p>
        </div>
      )}
    </div>
  );
}

export default function PromptOptimizer({ content, category, onApply, compact = false }: PromptOptimizerProps) {
  const [result, setResult] = useState<OptimizedPrompt | null>(null);
  const [showOptimized, setShowOptimized] = useState(false);
  const { toast } = useToast();

  const handleOptimize = () => {
    if (!content.trim()) {
      toast({ variant: 'destructive', title: 'Empty prompt', description: 'Enter some content to optimize.' });
      return;
    }
    const optimization = optimizePrompt(content, category);
    setResult(optimization);
    setShowOptimized(false);
  };

  const handleCopyOptimized = () => {
    if (result) {
      navigator.clipboard.writeText(result.optimized);
      toast({ title: 'Copied', description: 'Optimized prompt copied to clipboard.' });
    }
  };

  const handleApply = () => {
    if (result && onApply) {
      onApply(result.optimized);
      toast({ title: 'Applied', description: 'Optimized version applied.' });
    }
  };

  if (!result) {
    return (
      <Button
        variant="outline"
        size={compact ? 'sm' : 'default'}
        onClick={handleOptimize}
        className={cn(
          'gap-2 border-secondary/30 text-secondary hover:bg-secondary/10 hover:text-secondary',
          compact && 'h-8 text-xs'
        )}
        disabled={!content.trim()}
      >
        <Wand2 className={cn(compact ? 'size-3' : 'size-4')} />
        Optimize
      </Button>
    );
  }

  const scoreColor =
    result.overallScore >= 85
      ? 'text-emerald-400'
      : result.overallScore >= 60
        ? 'text-amber-400'
        : 'text-red-400';

  return (
    <div className="space-y-4 rounded-lg border border-secondary/20 bg-secondary/5 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-secondary" />
          <h3 className="text-sm font-semibold text-foreground">Optimization Report</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setResult(null)}
          className="h-7 text-[10px] text-muted-foreground"
        >
          Close
        </Button>
      </div>

      {/* Score + Summary */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className={cn('font-mono text-2xl font-bold tabular-nums', scoreColor)}>
            {result.overallScore}
          </span>
          <span className="text-xs text-muted-foreground">/100</span>
        </div>
        <p className="flex-1 text-xs text-muted-foreground">{result.summary}</p>
      </div>

      {/* Techniques Detected */}
      {result.techniques.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <Zap className="size-3 text-primary" />
          {result.techniques.map((t) => (
            <span
              key={t}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Issues */}
      {result.issues.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Issues Found ({result.issues.length})
          </p>
          {result.issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}

      {result.issues.length === 0 && (
        <div className="flex items-center gap-2 rounded-md bg-emerald-500/10 px-3 py-2">
          <CheckCircle2 className="size-4 text-emerald-400" />
          <p className="text-xs text-emerald-400">No issues found. This prompt follows all best practices.</p>
        </div>
      )}

      {/* Optimized Version */}
      <div>
        <button
          onClick={() => setShowOptimized(!showOptimized)}
          className="flex items-center gap-2 text-xs font-medium text-secondary hover:text-secondary/80"
        >
          <Wand2 className="size-3" />
          {showOptimized ? 'Hide' : 'View'} Optimized Version
          {showOptimized ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
        </button>

        {showOptimized && (
          <div className="mt-2 space-y-2">
            <div className="rounded-md border border-border bg-card p-3">
              <p className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/90">
                {result.optimized}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyOptimized}
                className="h-7 gap-1.5 text-xs"
              >
                <Copy className="size-3" />
                Copy
              </Button>
              {onApply && (
                <Button
                  size="sm"
                  onClick={handleApply}
                  className="h-7 gap-1.5 bg-secondary text-xs text-secondary-foreground hover:bg-secondary/90"
                >
                  <CheckCircle2 className="size-3" />
                  Apply to Prompt
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
