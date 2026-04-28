import { useState } from 'react';
import { GitCompareArrows, ArrowRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ModelBadge from '@/components/features/ModelBadge';
import QualityBadge from '@/components/features/QualityBadge';
import { usePromptStore } from '@/stores/promptStore';
import { cn } from '@/lib/utils';

function MetricRow({
  label,
  left,
  right,
  higher = 'better',
}: {
  label: string;
  left: number;
  right: number;
  higher?: 'better' | 'neutral';
}) {
  const leftWins = higher === 'better' ? left > right : false;
  const rightWins = higher === 'better' ? right > left : false;

  return (
    <div className="grid grid-cols-3 items-center py-2">
      <p
        className={cn(
          'text-right font-mono text-sm tabular-nums',
          leftWins ? 'font-bold text-primary' : 'text-foreground'
        )}
      >
        {left}
      </p>
      <p className="text-center text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          'text-left font-mono text-sm tabular-nums',
          rightWins ? 'font-bold text-secondary' : 'text-foreground'
        )}
      >
        {right}
      </p>
    </div>
  );
}

export default function Compare() {
  const prompts = usePromptStore((s) => s.prompts);
  const [leftId, setLeftId] = useState<string>('');
  const [rightId, setRightId] = useState<string>('');

  const left = prompts.find((p) => p.id === leftId);
  const right = prompts.find((p) => p.id === rightId);

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <GitCompareArrows className="size-5 text-secondary" />
          Compare Prompts
        </h1>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Select two prompts to compare side-by-side
        </p>
      </div>

      {/* Selectors */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Select value={leftId} onValueChange={setLeftId}>
          <SelectTrigger className="h-9 w-64 border-border bg-muted/50 text-xs">
            <SelectValue placeholder="Select first prompt…" />
          </SelectTrigger>
          <SelectContent className="max-h-64 border-border bg-card">
            {prompts.map((p) => (
              <SelectItem key={p.id} value={p.id} disabled={p.id === rightId}>
                {p.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <ArrowRight className="size-4 text-muted-foreground" />

        <Select value={rightId} onValueChange={setRightId}>
          <SelectTrigger className="h-9 w-64 border-border bg-muted/50 text-xs">
            <SelectValue placeholder="Select second prompt…" />
          </SelectTrigger>
          <SelectContent className="max-h-64 border-border bg-card">
            {prompts.map((p) => (
              <SelectItem key={p.id} value={p.id} disabled={p.id === leftId}>
                {p.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Comparison */}
      {left && right ? (
        <div className="space-y-4">
          {/* Metrics */}
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Performance Metrics
            </h2>
            <div className="mx-auto max-w-md divide-y divide-border">
              <MetricRow
                label="Effectiveness"
                left={left.effectiveness}
                right={right.effectiveness}
              />
              <MetricRow
                label="Usage Count"
                left={left.usageCount}
                right={right.usageCount}
              />
              <MetricRow
                label="Versions"
                left={left.versions.length}
                right={right.versions.length}
              />
              <MetricRow
                label="Word Count"
                left={left.content.split(' ').length}
                right={right.content.split(' ').length}
                higher="neutral"
              />
            </div>
          </div>

          {/* Side by side panels */}
          <div className="grid gap-4 lg:grid-cols-2">
            {[left, right].map((p, idx) => (
              <div
                key={p.id}
                className={cn(
                  'rounded-lg border bg-card p-5',
                  idx === 0 ? 'border-primary/30' : 'border-secondary/30'
                )}
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <QualityBadge quality={p.qualityTag} />
                </div>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {p.models.map((m) => (
                    <ModelBadge key={m} model={m} />
                  ))}
                </div>

                <span className="mb-2 block rounded-md bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground w-fit">
                  {p.category}
                </span>

                <div className="mt-3 rounded-md bg-muted/50 p-3">
                  <p className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-foreground/80 line-clamp-[12]">
                    {p.content}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid-bg flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-24">
          <GitCompareArrows className="mb-3 size-10 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">
            Select two prompts above to begin comparison
          </p>
        </div>
      )}
    </div>
  );
}
