import { Link } from 'react-router-dom';
import {
  Code2,
  PenTool,
  BarChart3,
  Lightbulb,
  Database,
  Image,
  Languages,
  Bug,
  FileText,
  Microscope,
} from 'lucide-react';
import { usePromptStats, type CategoryStat } from '@/hooks/usePromptStats';
import { usePromptStore } from '@/stores/promptStore';
import { cn } from '@/lib/utils';
import type { PromptCategory } from '@/types';
import type { LucideIcon } from 'lucide-react';

const categoryIcons: Record<PromptCategory, LucideIcon> = {
  Coding: Code2,
  Writing: PenTool,
  Analysis: BarChart3,
  Brainstorming: Lightbulb,
  'Data Extraction': Database,
  'Image Generation': Image,
  Translation: Languages,
  Debugging: Bug,
  Summarization: FileText,
  Research: Microscope,
};

const categoryColors: Record<PromptCategory, string> = {
  Coding: 'from-orange-500/20 to-orange-500/5 border-orange-500/20',
  Writing: 'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  Analysis: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  Brainstorming: 'from-violet-500/20 to-violet-500/5 border-violet-500/20',
  'Data Extraction': 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
  'Image Generation': 'from-pink-500/20 to-pink-500/5 border-pink-500/20',
  Translation: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/20',
  Debugging: 'from-red-500/20 to-red-500/5 border-red-500/20',
  Summarization: 'from-teal-500/20 to-teal-500/5 border-teal-500/20',
  Research: 'from-indigo-500/20 to-indigo-500/5 border-indigo-500/20',
};

function CategoryCard({ stat }: { stat: CategoryStat }) {
  const prompts = usePromptStore((s) => s.prompts);
  const setCategory = usePromptStore((s) => s.setCategory);
  const Icon = categoryIcons[stat.category];
  const colorClass = categoryColors[stat.category];

  const catPrompts = prompts.filter((p) => p.category === stat.category);
  const topPrompt = [...catPrompts].sort(
    (a, b) => b.effectiveness - a.effectiveness
  )[0];

  const effDots = Array.from(
    { length: 5 },
    (_, i) => i < Math.round(stat.avgEffectiveness)
  );

  return (
    <Link
      to="/library"
      onClick={() => setCategory(stat.category)}
      className={cn(
        'group relative overflow-hidden rounded-lg border bg-gradient-to-br p-5 transition-all duration-200 hover:scale-[1.01]',
        colorClass
      )}
    >
      <div className="flex items-start justify-between">
        <Icon className="size-6 text-foreground/70" />
        <span className="font-mono text-2xl font-bold text-foreground tabular-nums">
          {stat.count}
        </span>
      </div>

      <h3 className="mt-3 text-sm font-semibold text-foreground">
        {stat.category}
      </h3>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {effDots.map((filled, i) => (
            <div
              key={i}
              className={cn(
                'size-1.5 rounded-full',
                filled ? 'bg-primary' : 'bg-muted-foreground/20'
              )}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
          {stat.avgEffectiveness.toFixed(1)} avg
        </span>
      </div>

      {topPrompt && (
        <p className="mt-3 truncate text-[10px] text-muted-foreground">
          Top:{' '}
          <span className="text-foreground/70">{topPrompt.title}</span>
        </p>
      )}
    </Link>
  );
}

export default function Categories() {
  const { categoryStats } = usePromptStats();

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-foreground">Categories</h1>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Browse prompts organized by task type
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoryStats.map((stat) => (
          <CategoryCard key={stat.category} stat={stat} />
        ))}
      </div>
    </div>
  );
}
