import { cn } from '@/lib/utils';
import type { LLMModel } from '@/types';

const modelStyles: Record<LLMModel, string> = {
  Claude: 'bg-orange-500/15 text-orange-400 border-orange-500/20',
  'GPT-4': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  'GPT-4o': 'bg-green-500/15 text-green-400 border-green-500/20',
  'Gemini Pro': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  'Llama 3': 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  Mistral: 'bg-rose-500/15 text-rose-400 border-rose-500/20',
};

interface ModelBadgeProps {
  model: LLMModel;
  size?: 'sm' | 'md';
}

export default function ModelBadge({ model, size = 'sm' }: ModelBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border font-mono font-medium',
        modelStyles[model],
        size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-1 text-xs'
      )}
    >
      {model}
    </span>
  );
}
