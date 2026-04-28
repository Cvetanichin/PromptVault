import { cn } from '@/lib/utils';
import type { PromptVersion } from '@/types';
import QualityBadge from './QualityBadge';

interface VersionTimelineProps {
  versions: PromptVersion[];
  activeVersionId: string | null;
  onSelect: (id: string) => void;
}

export default function VersionTimeline({
  versions,
  activeVersionId,
  onSelect,
}: VersionTimelineProps) {
  const sorted = [...versions].sort((a, b) => b.version - a.version);

  return (
    <div className="space-y-0">
      {sorted.map((v, i) => {
        const isActive = v.id === activeVersionId;
        const isLast = i === sorted.length - 1;

        return (
          <button
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={cn(
              'relative flex w-full items-start gap-3 py-3 pl-6 text-left transition-colors',
              isActive
                ? 'bg-primary/5'
                : 'hover:bg-accent/50'
            )}
          >
            {/* Timeline line */}
            {!isLast && (
              <div className="absolute bottom-0 left-[18px] top-8 w-px bg-border" />
            )}
            {/* Dot */}
            <div
              className={cn(
                'relative z-10 mt-1 size-3 shrink-0 rounded-full border-2',
                isActive
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground/40 bg-card'
              )}
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'font-mono text-xs font-semibold',
                    isActive ? 'text-primary' : 'text-foreground'
                  )}
                >
                  v{v.version}
                </span>
                <QualityBadge quality={v.qualityTag} />
                <span className="ml-auto font-mono text-[10px] text-muted-foreground tabular-nums">
                  {v.rating}/5
                </span>
              </div>
              <p className="mt-0.5 text-[10px] text-muted-foreground">
                {new Date(v.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
