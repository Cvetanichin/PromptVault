export type LLMModel = string;

export type PromptCategory = string;

export type EffectivenessRating = 1 | 2 | 3 | 4 | 5;

export type QualityTag = 'great' | 'okay' | 'poor';

export interface PromptVersion {
  id: string;
  version: number;
  content: string;
  createdAt: string;
  rating: EffectivenessRating;
  qualityTag: QualityTag;
  notes?: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: PromptCategory;
  models: LLMModel[];
  bestModel: LLMModel;
  tags: string[];
  effectiveness: EffectivenessRating;
  qualityTag: QualityTag;
  usageCount: number;
  versions: PromptVersion[];
  project?: string;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
  improvements: string[];
}
