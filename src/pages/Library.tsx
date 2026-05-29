import { Star, SlidersHorizontal } from 'lucide-react';
import ImportExportDialog from '@/components/features/ImportExportDialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PromptCard from '@/components/features/PromptCard';
import AddPromptDialog from '@/components/features/AddPromptDialog';
import { usePromptStore } from '@/stores/promptStore';
import { ALL_CATEGORIES, ALL_MODELS } from '@/constants/mockData';
import { cn } from '@/lib/utils';
import emptyImg from '@/assets/empty-state.jpg';
import type { PromptCategory, LLMModel } from '@/types';
import type { PromptFilters } from '@/stores/promptStore';

export default function Library() {
  const filters = usePromptStore((s) => s.filters);
  const setCategory = usePromptStore((s) => s.setCategory);
  const setModel = usePromptStore((s) => s.setModel);
  const setSortBy = usePromptStore((s) => s.setSortBy);
  const setFavoritesOnly = usePromptStore((s) => s.setFavoritesOnly);
  const getFilteredPrompts = usePromptStore((s) => s.getFilteredPrompts);

  const filtered = getFilteredPrompts();

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold text-foreground">Prompt Library</h1>
          <p className="text-xs text-muted-foreground">
            <span className="font-mono text-primary tabular-nums">
              {filtered.length}
            </span>{' '}
            prompts found
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ImportExportDialog />
          <AddPromptDialog />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <SlidersHorizontal className="size-4 text-muted-foreground" />

        <Select
          value={filters.category || 'all'}
          onValueChange={(v) => setCategory(v === 'all' ? null : (v as PromptCategory))}
        >
          <SelectTrigger className="h-8 w-36 border-border bg-muted/50 text-xs">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="border-border bg-card">
            <SelectItem value="all">All Categories</SelectItem>
            {ALL_CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.model || 'all'}
          onValueChange={(v) => setModel(v === 'all' ? null : (v as LLMModel))}
        >
          <SelectTrigger className="h-8 w-32 border-border bg-muted/50 text-xs">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent className="border-border bg-card">
            <SelectItem value="all">All Models</SelectItem>
            {ALL_MODELS.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.sortBy}
          onValueChange={(v) => setSortBy(v as PromptFilters['sortBy'])}
        >
          <SelectTrigger className="h-8 w-36 border-border bg-muted/50 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-border bg-card">
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="effectiveness">Effectiveness</SelectItem>
            <SelectItem value="usage">Most Used</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFavoritesOnly(!filters.favoritesOnly)}
          className={cn(
            'h-8 gap-1.5 text-xs',
            filters.favoritesOnly && 'bg-primary/10 text-primary'
          )}
        >
          <Star
            className={cn(
              'size-3.5',
              filters.favoritesOnly && 'fill-primary'
            )}
          />
          Favorites
        </Button>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <PromptCard key={p.id} prompt={p} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <img
            src={emptyImg}
            alt="No prompts"
            className="mb-4 size-32 rounded-lg object-cover opacity-60"
          />
          <p className="text-sm font-medium text-foreground">No prompts match your filters</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Adjust your filters or create a new prompt
          </p>
        </div>
      )}
    </div>
  );
}
