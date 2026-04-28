import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, GitBranch, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Prompt } from '@/types';
import ModelBadge from './ModelBadge';
import QualityBadge from './QualityBadge';
import { usePromptStore } from '@/stores/promptStore';

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const toggleFavorite = usePromptStore((s) => s.toggleFavorite);

  const effDots = Array.from({ length: 5 }, (_, i) => i < prompt.effectiveness);

  return (
    <Link
      to={`/library/${prompt.id}`}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:glow-amber"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {prompt.title}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
            {prompt.description}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(prompt.id);
          }}
          className="shrink-0"
          aria-label={prompt.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Star
            className={cn(
              'size-4 transition-colors',
              prompt.isFavorite
                ? 'fill-primary text-primary'
                : 'text-muted-foreground/40 hover:text-muted-foreground'
            )}
          />
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {prompt.models.slice(0, 3).map((m) => (
          <ModelBadge key={m} model={m} />
        ))}
        {prompt.models.length > 3 && (
          <span className="px-1.5 py-0.5 text-[10px] text-muted-foreground">
            +{prompt.models.length - 3}
          </span>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {effDots.map((filled, i) => (
              <div
                key={i}
                className={cn(
                  'size-1.5 rounded-full',
                  filled ? 'bg-primary' : 'bg-muted'
                )}
              />
            ))}
          </div>
          <QualityBadge quality={prompt.qualityTag} />
        </div>

        <div className="flex items-center gap-2.5 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-0.5">
            <BarChart3 className="size-3" />
            {prompt.usageCount}
          </span>
          <span className="flex items-center gap-0.5">
            <GitBranch className="size-3" />
            v{prompt.versions.length}
          </span>
          <ArrowUpRight className="size-3 text-muted-foreground/40 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Link>
  );
}
