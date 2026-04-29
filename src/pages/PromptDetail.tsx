import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Copy,
  Trash2,
  FolderOpen,
  Clock,
  FileDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePromptStore } from '@/stores/promptStore';
import ModelBadge from '@/components/features/ModelBadge';
import QualityBadge from '@/components/features/QualityBadge';
import AnalysisPanel from '@/components/features/AnalysisPanel';
import VersionTimeline from '@/components/features/VersionTimeline';
import { exportPromptAsMarkdown } from '@/lib/importExport';
import { cn } from '@/lib/utils';

export default function PromptDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const prompt = usePromptStore((s) => s.prompts.find((p) => p.id === id));
  const toggleFavorite = usePromptStore((s) => s.toggleFavorite);
  const deletePrompt = usePromptStore((s) => s.deletePrompt);

  const [activeVersionId, setActiveVersionId] = useState<string | null>(null);

  if (!prompt) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <p className="text-sm text-muted-foreground">Prompt not found</p>
        <Link to="/library" className="mt-2 text-xs text-primary hover:underline">
          Back to Library
        </Link>
      </div>
    );
  }

  const activeVersion = activeVersionId
    ? prompt.versions.find((v) => v.id === activeVersionId)
    : null;

  const displayContent = activeVersion?.content || prompt.content;

  const handleCopy = () => {
    navigator.clipboard.writeText(displayContent);
    toast({ title: 'Copied', description: 'Prompt content copied to clipboard.' });
  };

  const handleExportMd = () => {
    exportPromptAsMarkdown(prompt);
    toast({ title: 'Exported', description: `"${prompt.title}" saved as Markdown.` });
  };

  const handleDelete = () => {
    deletePrompt(prompt.id);
    toast({ title: 'Deleted', description: `"${prompt.title}" removed from vault.` });
    navigate('/library');
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Back link */}
      <Link
        to="/library"
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to Library
      </Link>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main Content — 7 cols */}
        <div className="space-y-5 lg:col-span-7">
          {/* Header */}
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-bold text-foreground">{prompt.title}</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {prompt.description}
                </p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(prompt.id)}
                  aria-label="Toggle favorite"
                >
                  <Star
                    className={cn(
                      'size-4',
                      prompt.isFavorite
                        ? 'fill-primary text-primary'
                        : 'text-muted-foreground'
                    )}
                  />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleExportMd} aria-label="Export as Markdown">
                  <FileDown className="size-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy prompt">
                  <Copy className="size-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleDelete} aria-label="Delete prompt">
                  <Trash2 className="size-4 text-destructive/70" />
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                {prompt.category}
              </span>
              {prompt.project && (
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <FolderOpen className="size-3" />
                  {prompt.project}
                </span>
              )}
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Clock className="size-3" />
                Updated{' '}
                {new Date(prompt.updatedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {prompt.models.map((m) => (
                <ModelBadge key={m} model={m} size="md" />
              ))}
              <span className="ml-1 self-center text-[10px] text-muted-foreground">
                Best:{' '}
                <span className="font-semibold text-foreground">{prompt.bestModel}</span>
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {prompt.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Prompt Content
                {activeVersion && (
                  <span className="ml-2 text-primary">
                    (v{activeVersion.version})
                  </span>
                )}
              </h2>
              <div className="flex items-center gap-2">
                <QualityBadge quality={activeVersion?.qualityTag || prompt.qualityTag} />
              </div>
            </div>
            <div className="p-5">
              <p className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/90">
                {displayContent}
              </p>
            </div>
          </div>

          {/* Version Timeline */}
          <div className="rounded-lg border border-border bg-card">
            <div className="border-b border-border px-5 py-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Version History
              </h2>
            </div>
            <VersionTimeline
              versions={prompt.versions}
              activeVersionId={activeVersionId}
              onSelect={(vid) =>
                setActiveVersionId(vid === activeVersionId ? null : vid)
              }
            />
          </div>
        </div>

        {/* Analysis — 5 cols */}
        <div className="lg:col-span-5">
          <AnalysisPanel prompt={prompt} />
        </div>
      </div>
    </div>
  );
}
