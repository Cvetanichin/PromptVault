import { useMemo } from 'react';
import { usePromptStore } from '@/stores/promptStore';
import type { LLMModel, PromptCategory } from '@/types';

export interface ModelStat {
  model: LLMModel;
  count: number;
  avgEffectiveness: number;
}

export interface CategoryStat {
  category: PromptCategory;
  count: number;
  avgEffectiveness: number;
}

export function usePromptStats() {
  const prompts = usePromptStore((s) => s.prompts);

  return useMemo(() => {
    const total = prompts.length;
    const avgEff =
      total > 0
        ? prompts.reduce((s, p) => s + p.effectiveness, 0) / total
        : 0;
    const favorites = prompts.filter((p) => p.isFavorite).length;
    const allModels = new Set(prompts.flatMap((p) => p.models));
    const allCategories = new Set(prompts.map((p) => p.category));
    const totalUsage = prompts.reduce((s, p) => s + p.usageCount, 0);

    const modelMap = new Map<LLMModel, { count: number; effSum: number }>();
    for (const p of prompts) {
      for (const m of p.models) {
        const cur = modelMap.get(m) || { count: 0, effSum: 0 };
        cur.count += 1;
        cur.effSum += p.effectiveness;
        modelMap.set(m, cur);
      }
    }
    const modelStats: ModelStat[] = Array.from(modelMap.entries())
      .map(([model, { count, effSum }]) => ({
        model,
        count,
        avgEffectiveness: effSum / count,
      }))
      .sort((a, b) => b.count - a.count);

    const catMap = new Map<PromptCategory, { count: number; effSum: number }>();
    for (const p of prompts) {
      const cur = catMap.get(p.category) || { count: 0, effSum: 0 };
      cur.count += 1;
      cur.effSum += p.effectiveness;
      catMap.set(p.category, cur);
    }
    const categoryStats: CategoryStat[] = Array.from(catMap.entries())
      .map(([category, { count, effSum }]) => ({
        category,
        count,
        avgEffectiveness: effSum / count,
      }))
      .sort((a, b) => b.count - a.count);

    return {
      total,
      avgEffectiveness: Math.round(avgEff * 10) / 10,
      favorites,
      modelCount: allModels.size,
      categoryCount: allCategories.size,
      totalUsage,
      modelStats,
      categoryStats,
    };
  }, [prompts]);
}
