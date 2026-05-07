import { useState } from 'react';
import { BookTemplate, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PROMPT_PRESETS, getPresetsForCategory, type PromptPreset } from '@/constants/presets';
import type { PromptCategory } from '@/types';

interface PresetSelectorProps {
  category?: string;
  onSelect: (preset: PromptPreset) => void;
}

export default function PresetSelector({ category, onSelect }: PresetSelectorProps) {
  const [expanded, setExpanded] = useState(false);

  const presets = category
    ? getPresetsForCategory(category as PromptCategory)
    : PROMPT_PRESETS;

  if (presets.length === 0) return null;

  return (
    <div className="rounded-lg border border-border bg-muted/30">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-3 py-2.5"
      >
        <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <BookTemplate className="size-3.5 text-secondary" />
          Use a Preset Template
          {category && (
            <span className="rounded bg-secondary/10 px-1.5 py-0.5 text-[10px] text-secondary">
              {presets.length} available
            </span>
          )}
        </span>
        {expanded ? (
          <ChevronUp className="size-3.5 text-muted-foreground" />
        ) : (
          <ChevronDown className="size-3.5 text-muted-foreground" />
        )}
      </button>

      {expanded && (
        <div className="border-t border-border px-3 pb-3 pt-2">
          <div className="grid gap-2 sm:grid-cols-2">
            {presets.map((preset) => (
              <PresetCard
                key={preset.id}
                preset={preset}
                showCategory={!category}
                onSelect={() => {
                  onSelect(preset);
                  setExpanded(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PresetCard({
  preset,
  showCategory,
  onSelect,
}: {
  preset: PromptPreset;
  showCategory: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'group flex flex-col items-start rounded-md border border-border bg-card p-3 text-left transition-all',
        'hover:border-secondary/50 hover:bg-secondary/5'
      )}
    >
      <div className="flex w-full items-start justify-between gap-2">
        <span className="text-xs font-semibold text-foreground group-hover:text-secondary">
          {preset.name}
        </span>
        <Sparkles className="size-3 shrink-0 text-muted-foreground/40 group-hover:text-secondary" />
      </div>
      <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground line-clamp-2">
        {preset.description}
      </p>
      {showCategory && (
        <span className="mt-1.5 rounded bg-accent px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accent-foreground">
          {preset.category}
        </span>
      )}
    </button>
  );
}
