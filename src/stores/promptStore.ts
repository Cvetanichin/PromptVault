import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Prompt, PromptCategory, LLMModel, QualityTag } from '@/types';
import { mockPrompts } from '@/constants/mockData';

export interface PromptFilters {
  searchQuery: string;
  category: PromptCategory | null;
  model: LLMModel | null;
  quality: QualityTag | null;
  sortBy: 'effectiveness' | 'recent' | 'usage' | 'name';
  favoritesOnly: boolean;
}

interface PromptState {
  prompts: Prompt[];
  filters: PromptFilters;
}

interface PromptActions {
  setSearchQuery: (query: string) => void;
  setCategory: (category: PromptCategory | null) => void;
  setModel: (model: LLMModel | null) => void;
  setQuality: (quality: QualityTag | null) => void;
  setSortBy: (sort: PromptFilters['sortBy']) => void;
  setFavoritesOnly: (fav: boolean) => void;
  toggleFavorite: (id: string) => void;
  addPrompt: (prompt: Prompt) => void;
  updatePrompt: (id: string, updates: Partial<Prompt>) => void;
  deletePrompt: (id: string) => void;
  getFilteredPrompts: () => Prompt[];
}

export const usePromptStore = create<PromptState & PromptActions>()(
  persist(
    (set, get) => ({
      prompts: mockPrompts,
      filters: {
        searchQuery: '',
        category: null,
        model: null,
        quality: null,
        sortBy: 'recent',
        favoritesOnly: false,
      },

      setSearchQuery: (searchQuery) =>
        set((s) => ({ filters: { ...s.filters, searchQuery } })),
      setCategory: (category) =>
        set((s) => ({ filters: { ...s.filters, category } })),
      setModel: (model) =>
        set((s) => ({ filters: { ...s.filters, model } })),
      setQuality: (quality) =>
        set((s) => ({ filters: { ...s.filters, quality } })),
      setSortBy: (sortBy) =>
        set((s) => ({ filters: { ...s.filters, sortBy } })),
      setFavoritesOnly: (favoritesOnly) =>
        set((s) => ({ filters: { ...s.filters, favoritesOnly } })),

      toggleFavorite: (id) =>
        set((s) => ({
          prompts: s.prompts.map((p) =>
            p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
          ),
        })),

      addPrompt: (prompt) =>
        set((s) => ({ prompts: [prompt, ...s.prompts] })),

      updatePrompt: (id, updates) =>
        set((s) => ({
          prompts: s.prompts.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        })),

      deletePrompt: (id) =>
        set((s) => ({ prompts: s.prompts.filter((p) => p.id !== id) })),

      getFilteredPrompts: () => {
        const { prompts, filters } = get();
        let filtered = [...prompts];

        if (filters.searchQuery) {
          const q = filters.searchQuery.toLowerCase();
          filtered = filtered.filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.tags.some((t) => t.toLowerCase().includes(q))
          );
        }
        if (filters.category) {
          filtered = filtered.filter((p) => p.category === filters.category);
        }
        if (filters.model) {
          filtered = filtered.filter((p) => p.models.includes(filters.model!));
        }
        if (filters.quality) {
          filtered = filtered.filter((p) => p.qualityTag === filters.quality);
        }
        if (filters.favoritesOnly) {
          filtered = filtered.filter((p) => p.isFavorite);
        }

        switch (filters.sortBy) {
          case 'effectiveness':
            filtered.sort((a, b) => b.effectiveness - a.effectiveness);
            break;
          case 'usage':
            filtered.sort((a, b) => b.usageCount - a.usageCount);
            break;
          case 'name':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'recent':
          default:
            filtered.sort(
              (a, b) =>
                new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
            );
        }

        return filtered;
      },
    }),
    { name: 'prompt-vault-store' }
  )
);
