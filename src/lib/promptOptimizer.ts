import type { Prompt, PromptCategory } from '@/types';

// --- OPTIMIZATION RESULT TYPES ---

export interface OptimizationIssue {
  id: string;
  severity: 'critical' | 'major' | 'minor' | 'suggestion';
  category: 'structure' | 'clarity' | 'specificity' | 'format' | 'scope' | 'technique';
  title: string;
  description: string;
  fix: string;
}

export interface OptimizedPrompt {
  original: string;
  optimized: string;
  issues: OptimizationIssue[];
  overallScore: number;
  techniques: string[];
  summary: string;
}

// --- ANALYSIS RULES ---

interface Rule {
  id: string;
  severity: OptimizationIssue['severity'];
  category: OptimizationIssue['category'];
  title: string;
  check: (content: string, meta?: { category?: PromptCategory }) => boolean;
  description: string;
  fix: string;
}

const RULES: Rule[] = [
  {
    id: 'no-role',
    severity: 'critical',
    category: 'structure',
    title: 'Missing role assignment',
    check: (c) => !(c.includes('you are') || c.includes('act as') || c.includes('you\'re a') || c.includes('as a')),
    description: 'Prompts without a clear persona produce generic, unfocused outputs. Models perform significantly better when given a specific expertise to emulate.',
    fix: 'Add a role like: "You are a senior [domain] expert with 10+ years of experience in [specific area]."',
  },
  {
    id: 'no-format',
    severity: 'major',
    category: 'format',
    title: 'No output format specified',
    check: (c) => !(c.includes('format') || c.includes('structure') || c.includes('output') || c.includes('respond with') || c.includes('provide:') || c.includes('include:')),
    description: 'Without format specifications, models default to unstructured prose which may not match your needs.',
    fix: 'Specify the exact output structure, e.g., "Structure your response as: 1) Summary, 2) Key findings, 3) Recommendations with bullet points."',
  },
  {
    id: 'too-short',
    severity: 'major',
    category: 'specificity',
    title: 'Prompt is too brief',
    check: (c) => c.split(' ').length < 25,
    description: 'Very short prompts lack the context needed for high-quality outputs. They leave too much to interpretation.',
    fix: 'Expand with: context about the task, desired tone/style, constraints, and success criteria. Aim for 50-150 words minimum.',
  },
  {
    id: 'no-constraints',
    severity: 'major',
    category: 'scope',
    title: 'Missing constraints or boundaries',
    check: (c) => !(c.includes('must') || c.includes('should') || c.includes("don't") || c.includes('do not') || c.includes('avoid') || c.includes('never') || c.includes('only')),
    description: 'Without boundaries, the model may produce off-topic content, excessive length, or include unwanted elements.',
    fix: 'Add explicit constraints: word limits, topics to avoid, required inclusions, or scope boundaries.',
  },
  {
    id: 'no-examples',
    severity: 'minor',
    category: 'clarity',
    title: 'No examples provided',
    check: (c) => !(c.includes('example') || c.includes('e.g.') || c.includes('for instance') || c.includes('such as') || c.includes('like this')),
    description: 'Examples dramatically improve output quality by showing the model exactly what you expect (few-shot prompting).',
    fix: 'Add 1-2 concrete examples of desired output format or style.',
  },
  {
    id: 'no-audience',
    severity: 'minor',
    category: 'clarity',
    title: 'Target audience not specified',
    check: (c) => !(c.includes('audience') || c.includes('reader') || c.includes('user') || c.includes('beginner') || c.includes('expert') || c.includes('technical') || c.includes('non-technical')),
    description: 'Without knowing the audience, the model cannot calibrate complexity, jargon level, or assumed knowledge.',
    fix: 'Specify who will consume the output: "Write for [senior developers / non-technical stakeholders / general audience]."',
  },
  {
    id: 'no-quality-criteria',
    severity: 'minor',
    category: 'specificity',
    title: 'No success criteria defined',
    check: (c) => !(c.includes('quality') || c.includes('criteria') || c.includes('ensure') || c.includes('accurate') || c.includes('thorough') || /\d+/.test(c)),
    description: 'Without measurable criteria, you cannot evaluate if the output meets your standards.',
    fix: 'Add measurable criteria: "Ensure at least 5 examples, accuracy above 95%, or word count between 500-800."',
  },
  {
    id: 'no-tone',
    severity: 'suggestion',
    category: 'clarity',
    title: 'Tone/style not specified',
    check: (c) => !(c.includes('tone') || c.includes('style') || c.includes('formal') || c.includes('casual') || c.includes('professional') || c.includes('conversational') || c.includes('concise')),
    description: 'Specifying tone helps maintain consistency across outputs and matches your brand voice.',
    fix: 'Add tone guidance: "Use a professional yet approachable tone" or "Keep the style concise and technical."',
  },
  {
    id: 'no-step-by-step',
    severity: 'suggestion',
    category: 'technique',
    title: 'No chain-of-thought guidance',
    check: (c) => !(c.includes('step by step') || c.includes('step-by-step') || c.includes('think through') || c.includes('reasoning') || c.includes('explain your') || c.includes('walk through')),
    description: 'For complex tasks, chain-of-thought prompting significantly improves accuracy by forcing logical progression.',
    fix: 'For complex reasoning tasks, add: "Think through this step by step" or "Show your reasoning process."',
  },
  {
    id: 'vague-verbs',
    severity: 'suggestion',
    category: 'clarity',
    title: 'Uses vague action verbs',
    check: (c) => {
      const firstSentence = c.split('.')[0].toLowerCase();
      return (firstSentence.includes('help me') || firstSentence.includes('can you') || firstSentence.includes('i need') || firstSentence.includes('please'));
    },
    description: 'Conversational openings ("help me", "can you") waste tokens and reduce directness. Commands are more effective.',
    fix: 'Replace conversational starters with direct commands: "Generate...", "Analyze...", "Create...", "Write..."',
  },
];

// --- CATEGORY-SPECIFIC RULES ---

const CATEGORY_RULES: Partial<Record<PromptCategory, Rule[]>> = {
  Coding: [
    {
      id: 'code-no-lang',
      severity: 'major',
      category: 'specificity',
      title: 'Programming language not specified',
      check: (c) => !(c.includes('python') || c.includes('typescript') || c.includes('javascript') || c.includes('react') || c.includes('java') || c.includes('rust') || c.includes('go') || c.includes('c#') || c.includes('c++')),
      description: 'Without a language specification, the model may output code in an unexpected language or use wrong syntax.',
      fix: 'Explicitly state the target language and version: "Write in TypeScript (5.x) using modern ES2022+ features."',
    },
    {
      id: 'code-no-patterns',
      severity: 'suggestion',
      category: 'technique',
      title: 'No design patterns or conventions mentioned',
      check: (c) => !(c.includes('pattern') || c.includes('solid') || c.includes('dry') || c.includes('clean code') || c.includes('convention') || c.includes('best practice')),
      description: 'Specifying coding standards ensures output matches your team\'s conventions.',
      fix: 'Add conventions: "Follow SOLID principles, use dependency injection, prefer composition over inheritance."',
    },
  ],
  Writing: [
    {
      id: 'write-no-length',
      severity: 'minor',
      category: 'scope',
      title: 'No word count or length guidance',
      check: (c) => !(/\d+\s*word/.test(c) || c.includes('paragraph') || c.includes('sentences') || c.includes('brief') || c.includes('comprehensive')),
      description: 'Without length guidance, outputs may be too short or excessively long for your needs.',
      fix: 'Specify length: "Write 800-1200 words" or "Keep under 3 paragraphs."',
    },
  ],
  Analysis: [
    {
      id: 'analysis-no-data',
      severity: 'minor',
      category: 'specificity',
      title: 'No data context provided',
      check: (c) => !(c.includes('data') || c.includes('metrics') || c.includes('numbers') || c.includes('statistics') || c.includes('quantitative')),
      description: 'Analysis prompts perform better when they specify what data to expect and how to interpret it.',
      fix: 'Add: "Based on the provided [revenue/engagement/performance] data, analyze trends over [time period]."',
    },
  ],
};

// --- REWRITE ENGINE ---

function generateOptimizedVersion(content: string, issues: OptimizationIssue[], category?: PromptCategory): string {
  let optimized = content;

  // Add role if missing
  const hasRole = content.toLowerCase().includes('you are') || content.toLowerCase().includes('act as');
  if (!hasRole) {
    const roleMap: Partial<Record<PromptCategory, string>> = {
      Coding: 'You are a senior software engineer with expertise in modern development practices.',
      Writing: 'You are an experienced content strategist and professional writer.',
      Analysis: 'You are a senior data analyst with expertise in deriving actionable insights.',
      Brainstorming: 'You are a creative director at an innovation consultancy.',
      'Data Extraction': 'You are a data engineer specializing in structured data extraction.',
      'Image Generation': 'You are an expert visual prompt engineer for AI image generation.',
      Translation: 'You are a professional translator with domain expertise.',
      Debugging: 'You are a senior engineer specializing in debugging and root cause analysis.',
      Summarization: 'You are a research analyst who creates precise, structured summaries.',
      Research: 'You are an academic researcher with skills in literature synthesis.',
    };
    const role = (category && roleMap[category]) || 'You are an expert assistant specializing in the following task.';
    optimized = role + ' ' + optimized;
  }

  // Add output format if missing
  const hasFormat = content.toLowerCase().includes('format') || content.toLowerCase().includes('structure') || content.toLowerCase().includes('include:');
  if (!hasFormat && content.split(' ').length > 15) {
    optimized += '\n\nStructure your response clearly with headings and organized sections. Be specific and actionable.';
  }

  // Add constraints if missing
  const hasConstraints = content.toLowerCase().includes('must') || content.toLowerCase().includes('avoid') || content.toLowerCase().includes("don't");
  if (!hasConstraints) {
    optimized += ' Ensure accuracy and completeness. Avoid generic or filler content.';
  }

  // Add quality signal
  if (!content.toLowerCase().includes('quality') && !content.toLowerCase().includes('thorough')) {
    optimized += ' Prioritize depth over breadth.';
  }

  return optimized.trim();
}

// --- MAIN OPTIMIZER FUNCTION ---

export function optimizePrompt(content: string, category?: PromptCategory): OptimizedPrompt {
  const lower = content.toLowerCase();
  const issues: OptimizationIssue[] = [];

  // Run general rules
  RULES.forEach((rule) => {
    if (rule.check(lower, { category })) {
      issues.push({
        id: rule.id,
        severity: rule.severity,
        category: rule.category,
        title: rule.title,
        description: rule.description,
        fix: rule.fix,
      });
    }
  });

  // Run category-specific rules
  if (category && CATEGORY_RULES[category]) {
    CATEGORY_RULES[category]!.forEach((rule) => {
      if (rule.check(lower, { category })) {
        issues.push({
          id: rule.id,
          severity: rule.severity,
          category: rule.category,
          title: rule.title,
          description: rule.description,
          fix: rule.fix,
        });
      }
    });
  }

  // Sort by severity
  const severityOrder = { critical: 0, major: 1, minor: 2, suggestion: 3 };
  issues.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  // Calculate score
  const maxScore = 100;
  const deductions = issues.reduce((acc, issue) => {
    switch (issue.severity) {
      case 'critical': return acc + 25;
      case 'major': return acc + 15;
      case 'minor': return acc + 8;
      case 'suggestion': return acc + 3;
      default: return acc;
    }
  }, 0);
  const overallScore = Math.max(0, Math.min(100, maxScore - deductions));

  // Detect techniques used
  const techniques: string[] = [];
  if (lower.includes('you are') || lower.includes('act as')) techniques.push('Role Assignment');
  if (lower.includes('step by step') || lower.includes('think through')) techniques.push('Chain of Thought');
  if (lower.includes('example') || lower.includes('e.g.')) techniques.push('Few-Shot');
  if (lower.includes('format') || lower.includes('structure')) techniques.push('Structured Output');
  if (lower.includes('must') || lower.includes('avoid')) techniques.push('Constraint Setting');
  if (/\d/.test(content)) techniques.push('Quantified Criteria');
  if (lower.includes('tone') || lower.includes('style')) techniques.push('Tone Control');
  if (lower.includes('context') || lower.includes('background')) techniques.push('Context Priming');

  // Generate optimized version
  const optimized = generateOptimizedVersion(content, issues, category);

  // Summary
  const criticalCount = issues.filter((i) => i.severity === 'critical').length;
  const majorCount = issues.filter((i) => i.severity === 'major').length;
  let summary = '';
  if (overallScore >= 85) {
    summary = 'Excellent prompt structure. Minor refinements suggested below.';
  } else if (overallScore >= 60) {
    summary = `Good foundation with ${majorCount} key area(s) to strengthen for more consistent outputs.`;
  } else if (overallScore >= 35) {
    summary = `Needs improvement. ${criticalCount + majorCount} structural issue(s) are likely reducing output quality.`;
  } else {
    summary = `Significant rework recommended. The prompt lacks core elements needed for reliable, high-quality outputs.`;
  }

  return {
    original: content,
    optimized,
    issues,
    overallScore,
    techniques,
    summary,
  };
}

// --- GENERATE IMPROVEMENT SUGGESTIONS FOR STORE ---

export function generateImprovements(content: string, category?: PromptCategory): string[] {
  const result = optimizePrompt(content, category);
  return result.issues
    .filter((i) => i.severity === 'critical' || i.severity === 'major')
    .slice(0, 5)
    .map((i) => i.fix);
}
