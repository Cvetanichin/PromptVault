import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { usePromptStore } from '@/stores/promptStore';
import { ALL_CATEGORIES, ALL_MODELS } from '@/constants/mockData';
import { generateImprovements } from '@/lib/promptOptimizer';
import PromptOptimizer from '@/components/features/PromptOptimizer';
import type { Prompt, LLMModel, PromptCategory } from '@/types';

export default function AddPromptDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [tags, setTags] = useState('');
  const addPrompt = usePromptStore((s) => s.addPrompt);
  const { toast } = useToast();

  const toggleModel = (model: string) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  const handleSubmit = () => {
    if (!title || !content || !category || selectedModels.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Fill in title, content, category, and select at least one model.',
      });
      return;
    }

    const improvements = generateImprovements(content, category as PromptCategory);

    const prompt: Prompt = {
      id: `p-${Date.now()}`,
      title,
      description: description || title,
      content,
      category: category as PromptCategory,
      models: selectedModels as LLMModel[],
      bestModel: selectedModels[0] as LLMModel,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      effectiveness: 3,
      qualityTag: 'okay',
      usageCount: 0,
      versions: [
        {
          id: `v-${Date.now()}`,
          version: 1,
          content,
          createdAt: new Date().toISOString(),
          rating: 3,
          qualityTag: 'okay',
        },
      ],
      isFavorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      improvements: improvements.length > 0 ? improvements : [
        'Run this prompt a few times to evaluate consistency',
      ],
    };

    addPrompt(prompt);
    toast({ title: 'Prompt created', description: `"${title}" added to your vault.` });
    setOpen(false);
    setTitle('');
    setDescription('');
    setContent('');
    setCategory('');
    setSelectedModels([]);
    setTags('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="size-4" />
          <span className="hidden sm:inline">New Prompt</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-card sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create New Prompt</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., React Component Generator"
              className="border-border bg-muted/50"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Description
            </label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short description of what this prompt does"
              className="border-border bg-muted/50"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Prompt Content
            </label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter your full prompt text…"
              rows={5}
              className="border-border bg-muted/50 font-mono text-xs"
            />
            {content.trim().length > 10 && (
              <div className="mt-3">
                <PromptOptimizer
                  content={content}
                  category={category as PromptCategory | undefined}
                  onApply={(optimized) => setContent(optimized)}
                  compact
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="border-border bg-muted/50">
                  <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent className="border-border bg-card">
                  {ALL_CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Tags (comma-separated)
              </label>
              <Input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="react, typescript"
                className="border-border bg-muted/50"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Compatible Models
            </label>
            <div className="flex flex-wrap gap-2">
              {ALL_MODELS.map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() => toggleModel(model)}
                  className={`rounded border px-2.5 py-1 font-mono text-xs transition-colors ${
                    selectedModels.includes(model)
                      ? 'border-primary bg-primary/15 text-primary'
                      : 'border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Create Prompt
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
