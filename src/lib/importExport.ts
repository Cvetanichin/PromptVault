import type { Prompt, PromptCategory, LLMModel } from '@/types';

// --- EXPORT ---

export function exportLibraryAsJSON(prompts: Prompt[]): void {
  const data = {
    exportedAt: new Date().toISOString(),
    version: '1.0',
    promptCount: prompts.length,
    prompts,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `promptvault-library-${formatDate()}.json`);
}

export function exportPromptAsMarkdown(prompt: Prompt): void {
  const md = generateMarkdown(prompt);
  const blob = new Blob([md], { type: 'text/markdown' });
  const filename = prompt.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  downloadBlob(blob, `${filename}.md`);
}

function generateMarkdown(prompt: Prompt): string {
  const lines: string[] = [];
  lines.push(`# ${prompt.title}\n`);
  lines.push(`> ${prompt.description}\n`);
  lines.push(`## Metadata\n`);
  lines.push(`| Field | Value |`);
  lines.push(`|-------|-------|`);
  lines.push(`| Category | ${prompt.category} |`);
  lines.push(`| Models | ${prompt.models.join(', ')} |`);
  lines.push(`| Best Model | ${prompt.bestModel} |`);
  lines.push(`| Effectiveness | ${prompt.effectiveness}/5 |`);
  lines.push(`| Quality | ${prompt.qualityTag} |`);
  lines.push(`| Usage Count | ${prompt.usageCount} |`);
  if (prompt.project) lines.push(`| Project | ${prompt.project} |`);
  lines.push(`| Tags | ${prompt.tags.map(t => `\`${t}\``).join(', ')} |`);
  lines.push(`| Created | ${new Date(prompt.createdAt).toLocaleDateString()} |`);
  lines.push(`| Updated | ${new Date(prompt.updatedAt).toLocaleDateString()} |`);
  lines.push('');
  lines.push(`## Prompt Content\n`);
  lines.push('```');
  lines.push(prompt.content);
  lines.push('```\n');
  if (prompt.versions.length > 1) {
    lines.push(`## Version History\n`);
    const sorted = [...prompt.versions].sort((a, b) => b.version - a.version);
    sorted.forEach((v) => {
      lines.push(`### v${v.version} — ${new Date(v.createdAt).toLocaleDateString()} (${v.qualityTag}, ${v.rating}/5)\n`);
      lines.push('```');
      lines.push(v.content);
      lines.push('```\n');
    });
  }
  if (prompt.improvements.length > 0) {
    lines.push(`## Suggested Improvements\n`);
    prompt.improvements.forEach((imp) => lines.push(`- ${imp}`));
    lines.push('');
  }
  return lines.join('\n');
}

// --- IMPORT ---

export interface ImportResult {
  prompts: Prompt[];
  errors: string[];
  warnings: string[];
}

export function importFromJSON(content: string): ImportResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const prompts: Prompt[] = [];

  try {
    const parsed = JSON.parse(content);
    const items = Array.isArray(parsed) ? parsed : parsed.prompts;

    if (!Array.isArray(items)) {
      return { prompts: [], errors: ['Invalid format: expected an array of prompts or an object with a "prompts" key.'], warnings: [] };
    }

    items.forEach((item: any, index: number) => {
      const validated = validateAndNormalizePrompt(item, index);
      if (validated.prompt) {
        prompts.push(validated.prompt);
      }
      if (validated.error) errors.push(validated.error);
      if (validated.warning) warnings.push(validated.warning);
    });
  } catch {
    errors.push('Failed to parse JSON. Ensure the file is valid JSON.');
  }

  return { prompts, errors, warnings };
}

export function importFromText(content: string): ImportResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const prompts: Prompt[] = [];

  // Split by separator patterns (---  or empty lines with headings)
  const sections = content.split(/\n---+\n|\n#{1,2}\s/).filter((s) => s.trim());

  if (sections.length === 0) {
    // Treat entire content as one prompt
    const prompt = createPromptFromText(content.trim());
    if (prompt) prompts.push(prompt);
    else errors.push('Could not parse any prompt from the provided text.');
    return { prompts, errors, warnings };
  }

  // If only one section and no separator, treat as single prompt
  if (sections.length === 1 && !content.includes('\n---')) {
    const prompt = createPromptFromText(content.trim());
    if (prompt) prompts.push(prompt);
    else errors.push('Could not parse any prompt from the provided text.');
    return { prompts, errors, warnings };
  }

  sections.forEach((section, i) => {
    const trimmed = section.trim();
    if (trimmed.length < 10) {
      warnings.push(`Section ${i + 1} too short, skipped.`);
      return;
    }
    const prompt = createPromptFromText(trimmed);
    if (prompt) prompts.push(prompt);
    else warnings.push(`Section ${i + 1} could not be parsed.`);
  });

  if (prompts.length === 0) {
    errors.push('No valid prompts found in the provided text.');
  }

  return { prompts, errors, warnings };
}

// --- CATEGORY DETECTION ---

const CATEGORY_KEYWORDS: Record<PromptCategory, string[]> = {
  Coding: ['code', 'function', 'programming', 'developer', 'typescript', 'python', 'javascript', 'react', 'component', 'api', 'algorithm', 'software', 'class', 'interface', 'refactor'],
  Writing: ['write', 'blog', 'article', 'essay', 'content', 'copy', 'headline', 'seo', 'tone', 'narrative', 'story', 'email', 'newsletter'],
  Analysis: ['analyze', 'analysis', 'report', 'metrics', 'data', 'trend', 'insight', 'evaluate', 'benchmark', 'assess', 'swot', 'market'],
  Brainstorming: ['brainstorm', 'ideate', 'creative', 'ideas', 'concept', 'innovate', 'naming', 'design', 'wireframe', 'prototype'],
  'Data Extraction': ['extract', 'parse', 'csv', 'json', 'schema', 'transform', 'etl', 'data-cleaning', 'scrape', 'structured'],
  'Image Generation': ['image', 'visual', 'dall-e', 'midjourney', 'stable diffusion', 'art', 'photo', 'illustration', 'render', 'generation'],
  Translation: ['translate', 'translation', 'language', 'localize', 'multilingual', 'interpret', 'legal', 'simplif'],
  Debugging: ['debug', 'error', 'bug', 'fix', 'traceback', 'log', 'exception', 'crash', 'diagnos', 'troubleshoot'],
  Summarization: ['summarize', 'summary', 'distill', 'tldr', 'condense', 'brief', 'digest', 'key points', 'overview'],
  Research: ['research', 'paper', 'academic', 'study', 'literature', 'citation', 'methodology', 'hypothesis', 'experiment'],
};

function detectCategory(text: string): PromptCategory {
  const lower = text.toLowerCase();
  let bestCategory: PromptCategory = 'Writing';
  let bestScore = 0;

  (Object.entries(CATEGORY_KEYWORDS) as [PromptCategory, string[]][]).forEach(
    ([category, keywords]) => {
      const score = keywords.reduce((acc, kw) => {
        return acc + (lower.includes(kw) ? 1 : 0);
      }, 0);
      if (score > bestScore) {
        bestScore = score;
        bestCategory = category;
      }
    }
  );

  return bestCategory;
}

function detectModels(text: string): LLMModel[] {
  const lower = text.toLowerCase();
  const detected: LLMModel[] = [];
  if (lower.includes('claude')) detected.push('Claude');
  if (lower.includes('gpt-4o') || lower.includes('gpt4o')) detected.push('GPT-4o');
  else if (lower.includes('gpt-4') || lower.includes('gpt4')) detected.push('GPT-4');
  if (lower.includes('gemini')) detected.push('Gemini Pro');
  if (lower.includes('llama')) detected.push('Llama 3');
  if (lower.includes('mistral')) detected.push('Mistral');
  return detected.length > 0 ? detected : ['Claude', 'GPT-4'];
}

function extractTitle(text: string): string {
  // Try to get title from first line if it looks like a heading
  const firstLine = text.split('\n')[0].replace(/^#+\s*/, '').trim();
  if (firstLine.length > 3 && firstLine.length < 80) {
    return firstLine;
  }
  // Generate from first 50 chars
  const truncated = text.slice(0, 50).replace(/\n/g, ' ').trim();
  return truncated.length > 40 ? truncated.slice(0, 40) + '…' : truncated;
}

function createPromptFromText(text: string): Prompt | null {
  if (text.length < 10) return null;

  const title = extractTitle(text);
  const category = detectCategory(text);
  const models = detectModels(text);
  // Remove title from content if it was the first line
  const firstLine = text.split('\n')[0].trim();
  const content = title === firstLine.replace(/^#+\s*/, '').trim()
    ? text.split('\n').slice(1).join('\n').trim() || text
    : text;

  const now = new Date().toISOString();
  return {
    id: `p-import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    description: content.slice(0, 120).replace(/\n/g, ' ').trim(),
    content,
    category,
    models,
    bestModel: models[0],
    tags: [`imported`, category.toLowerCase().replace(/\s+/g, '-')],
    effectiveness: 3,
    qualityTag: 'okay',
    usageCount: 0,
    versions: [
      {
        id: `v-import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        version: 1,
        content,
        createdAt: now,
        rating: 3,
        qualityTag: 'okay',
      },
    ],
    isFavorite: false,
    createdAt: now,
    updatedAt: now,
    improvements: [
      'Review auto-detected category for accuracy',
      'Add specific model preferences based on testing',
      'Consider adding output format specifications',
    ],
  };
}

function validateAndNormalizePrompt(item: any, index: number): { prompt?: Prompt; error?: string; warning?: string } {
  if (!item || typeof item !== 'object') {
    return { error: `Item ${index + 1}: Not a valid object.` };
  }

  // Minimum requirements: must have content or title
  const content = item.content || item.prompt || item.text || '';
  const title = item.title || item.name || '';

  if (!content && !title) {
    return { error: `Item ${index + 1}: Missing both title and content.` };
  }

  const now = new Date().toISOString();
  const category = item.category && CATEGORY_KEYWORDS[item.category as PromptCategory]
    ? (item.category as PromptCategory)
    : detectCategory(content || title);

  const models: LLMModel[] = Array.isArray(item.models)
    ? item.models.filter((m: string) => ['Claude', 'GPT-4', 'GPT-4o', 'Gemini Pro', 'Llama 3', 'Mistral'].includes(m))
    : detectModels(content || title);

  const prompt: Prompt = {
    id: item.id || `p-import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: title || extractTitle(content),
    description: item.description || (content || title).slice(0, 120).replace(/\n/g, ' '),
    content: content || title,
    category,
    models: models.length > 0 ? models : ['Claude', 'GPT-4'],
    bestModel: item.bestModel || models[0] || 'Claude',
    tags: Array.isArray(item.tags) ? item.tags : ['imported'],
    effectiveness: typeof item.effectiveness === 'number' ? Math.min(5, Math.max(1, item.effectiveness)) : 3,
    qualityTag: ['great', 'okay', 'poor'].includes(item.qualityTag) ? item.qualityTag : 'okay',
    usageCount: typeof item.usageCount === 'number' ? item.usageCount : 0,
    versions: Array.isArray(item.versions) && item.versions.length > 0
      ? item.versions
      : [{
          id: `v-import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          version: 1,
          content: content || title,
          createdAt: item.createdAt || now,
          rating: 3,
          qualityTag: 'okay' as const,
        }],
    project: item.project || undefined,
    isFavorite: item.isFavorite === true,
    createdAt: item.createdAt || now,
    updatedAt: item.updatedAt || now,
    improvements: Array.isArray(item.improvements) ? item.improvements : [
      'Review imported prompt for accuracy',
      'Test across models and rate effectiveness',
    ],
  };

  const warning = (!item.category || !item.models)
    ? `Item ${index + 1} ("${prompt.title}"): Auto-detected category as "${category}".`
    : undefined;

  return { prompt, warning };
}

// --- HELPERS ---

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function formatDate(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
