import { useState, useRef } from 'react';
import { Download, Upload, FileJson, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { usePromptStore } from '@/stores/promptStore';
import {
  exportLibraryAsJSON,
  importFromJSON,
  importFromText,
  type ImportResult,
} from '@/lib/importExport';

export default function ImportExportDialog() {
  const [open, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [importMode, setImportMode] = useState<'json' | 'text'>('json');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const prompts = usePromptStore((s) => s.prompts);
  const addPrompt = usePromptStore((s) => s.addPrompt);
  const { toast } = useToast();

  const handleExportJSON = () => {
    exportLibraryAsJSON(prompts);
    toast({ title: 'Exported', description: `${prompts.length} prompts exported as JSON.` });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) return;

      if (file.name.endsWith('.json') || importMode === 'json') {
        const result = importFromJSON(content);
        setImportResult(result);
      } else {
        const result = importFromText(content);
        setImportResult(result);
      }
    };
    reader.readAsText(file);
    // Reset the file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleTextImport = () => {
    if (!textInput.trim()) {
      toast({ variant: 'destructive', title: 'Empty input', description: 'Paste some text to import.' });
      return;
    }

    const result = importMode === 'json'
      ? importFromJSON(textInput)
      : importFromText(textInput);
    setImportResult(result);
  };

  const confirmImport = () => {
    if (!importResult || importResult.prompts.length === 0) return;

    importResult.prompts.forEach((p) => addPrompt(p));
    toast({
      title: 'Import successful',
      description: `${importResult.prompts.length} prompt(s) added to your vault.`,
    });
    setImportResult(null);
    setTextInput('');
    setOpen(false);
  };

  const resetState = () => {
    setImportResult(null);
    setTextInput('');
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) resetState(); }}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-border text-xs">
          <Download className="size-3.5" />
          Import / Export
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-foreground">Import & Export</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="export" className="mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="export">Export</TabsTrigger>
            <TabsTrigger value="import">Import</TabsTrigger>
          </TabsList>

          {/* EXPORT TAB */}
          <TabsContent value="export" className="mt-4 space-y-4">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2.5">
                  <FileJson className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Export Full Library</p>
                  <p className="text-xs text-muted-foreground">
                    Download all {prompts.length} prompts as a JSON file
                  </p>
                </div>
                <Button size="sm" onClick={handleExportJSON} className="gap-1.5">
                  <Download className="size-3.5" />
                  JSON
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-border p-4">
              <p className="text-xs text-muted-foreground">
                To export individual prompts as Markdown, open a prompt and use the export button in the detail view.
              </p>
            </div>
          </TabsContent>

          {/* IMPORT TAB */}
          <TabsContent value="import" className="mt-4 space-y-4">
            {/* Mode selector */}
            <div className="flex gap-2">
              <button
                onClick={() => { setImportMode('json'); resetState(); }}
                className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                  importMode === 'json'
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileJson className="size-3.5" />
                JSON
              </button>
              <button
                onClick={() => { setImportMode('text'); resetState(); }}
                className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                  importMode === 'text'
                    ? 'border-secondary bg-secondary/10 text-secondary'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText className="size-3.5" />
                Plain Text
              </button>
            </div>

            {/* File upload */}
            <div className="rounded-lg border border-dashed border-border p-4 text-center">
              <Upload className="mx-auto size-6 text-muted-foreground/60" />
              <p className="mt-2 text-xs text-muted-foreground">
                Drop a file or{' '}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  browse
                </button>
              </p>
              <p className="mt-0.5 text-[10px] text-muted-foreground/60">
                {importMode === 'json' ? '.json files' : '.txt, .md files'}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept={importMode === 'json' ? '.json' : '.txt,.md,.text'}
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>

            {/* Text input */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Or paste content directly
              </label>
              <Textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={
                  importMode === 'json'
                    ? '[\n  { "title": "My Prompt", "content": "..." }\n]'
                    : 'Paste your prompt text here…\n\nSeparate multiple prompts with ---'
                }
                rows={5}
                className="border-border bg-muted/50 font-mono text-xs"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={handleTextImport}
                className="mt-2 gap-1.5 text-xs"
                disabled={!textInput.trim()}
              >
                <Upload className="size-3" />
                Parse
              </Button>
            </div>

            {/* Import Result */}
            {importResult && (
              <div className="space-y-3 rounded-lg border border-border p-4">
                {/* Success */}
                {importResult.prompts.length > 0 && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-400" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {importResult.prompts.length} prompt(s) ready to import
                      </p>
                      <ul className="mt-1 space-y-0.5">
                        {importResult.prompts.slice(0, 5).map((p) => (
                          <li key={p.id} className="text-xs text-muted-foreground">
                            • {p.title}{' '}
                            <span className="text-[10px] text-secondary">({p.category})</span>
                          </li>
                        ))}
                        {importResult.prompts.length > 5 && (
                          <li className="text-xs text-muted-foreground">
                            …and {importResult.prompts.length - 5} more
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Warnings */}
                {importResult.warnings.length > 0 && (
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 size-4 shrink-0 text-amber-400" />
                    <div>
                      <p className="text-xs font-medium text-amber-400">Warnings</p>
                      <ul className="mt-0.5 space-y-0.5">
                        {importResult.warnings.slice(0, 3).map((w, i) => (
                          <li key={i} className="text-[10px] text-muted-foreground">{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Errors */}
                {importResult.errors.length > 0 && (
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                    <div>
                      <p className="text-xs font-medium text-destructive">Errors</p>
                      <ul className="mt-0.5 space-y-0.5">
                        {importResult.errors.map((e, i) => (
                          <li key={i} className="text-[10px] text-muted-foreground">{e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Confirm button */}
                {importResult.prompts.length > 0 && (
                  <Button onClick={confirmImport} className="w-full gap-2">
                    <CheckCircle2 className="size-4" />
                    Import {importResult.prompts.length} Prompt(s)
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
