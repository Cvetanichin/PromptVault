/* Generated from data/prompt_library_v7.json. Do not edit by hand. */
import type { Prompt } from '@/types';

export const canonicalLibraryMetadata = {
  "name": "Cvetanichin Prompt Library",
  "version": "7.6",
  "last_updated": "2026-05-29",
  "total_prompts": 96,
  "total_system_prompts": 15,
  "total_gaps": 23,
  "schema": "v7.6 ? curated Downloads scan; JSON source with JSX embedded mirror",
  "update_note": "+12 curated prompts added from May 2026 Downloads scan; rough imports deduplicated and rewritten for reuse.",
  "reference_export": "prompt-library-v75.pdf showed v7.5 scan state; v7.6 is the curated machine-readable update."
} as const;

export const canonicalPrompts = [
  {
    "id": "PL-012",
    "name": "Digital Hygiene Agent Prompt",
    "category": "AI & Automation",
    "sub_category": "File Management",
    "type": "Task Prompt",
    "output_type": "Code / Script",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Build a Python pipeline for automated file management with 4 phases: Phase 1 Scan (SHA-256 + Drive API md5Checksum), Phase 2 Deduplicate (4-tier), Phase 3 Scaffold (CSO/NGO folder structure), Phase 4 Organize (rename to YYYYMMDD_Domain_Project-Tag convention). Include dry-run mode and FastMCP server.",
    "when_to_use": "Automated local/Drive file management.",
    "example_output": "4-phase Python script with dry-run mode and 7 MCP tools exposed",
    "tags": [
      "Python",
      "automation",
      "files",
      "Drive",
      "MCP",
      "pipeline"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-011",
    "name": "MCP Server Builder Prompt",
    "category": "AI & Automation",
    "sub_category": "MCP Servers",
    "type": "System Prompt",
    "output_type": "Code / Script",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "You are a senior Python/FastMCP developer. Build a complete MCP server for Claude Desktop with the following tools: [LIST TOOLS]. Use FastMCP with Pydantic BaseModel validation, destructiveHint annotations for write operations, and an MCPLogger class for in-memory output. Include a claude_desktop_config.json snippet and setup guide for Windows 11 with Python 3.14+.",
    "when_to_use": "Building MCP server tools for Claude Desktop.",
    "example_output": "Full Python MCP server with config JSON and Windows setup instructions",
    "tags": [
      "MCP",
      "FastMCP",
      "Python",
      "Claude Desktop",
      "automation"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-089",
    "name": "CSO Workflow Automation Blueprint (Make.com / n8n)",
    "category": "AI & Automation",
    "sub_category": "No-Code Automation",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 5,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Design a Make.com or n8n workflow blueprint for this civil society workflow: [WORKFLOW DESCRIPTION]. Include: trigger, connected apps, data fields, AI extraction or generation steps, human review points, error handling, notification logic, storage destination, and success metrics. Provide both a non-technical process map and an implementation table with module/node names, inputs, outputs, and setup notes. Prefer Google Workspace, Airtable, Notion, Gmail, Drive, Calendar, and Sheets unless another tool is specified.",
    "when_to_use": "When designing a specific workflow automation for an NGO or consultancy, such as partner update aggregation, grant tracking, report drafting, or meeting follow-up.",
    "example_output": "Automation blueprint with trigger-to-output flow, Make/n8n module table, AI prompt blocks, review gates, and KPI checklist.",
    "tags": [
      "Make.com",
      "n8n",
      "workflow-automation",
      "NGO",
      "Google Workspace",
      "Airtable",
      "Notion"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-090",
    "name": "Multi-Source Partner Update Aggregation System",
    "category": "AI & Automation",
    "sub_category": "Partner Management",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Design an advanced partner-update aggregation system for [NETWORK / PROJECT]. Sources may include Gmail, Google Drive folders, Sheets, forms, meeting notes, WhatsApp exports, and partner templates. Define the intake schema, extraction prompts, deduplication logic, partner/entity matching, evidence links, review workflow, dashboard fields, and monthly summary output. Include an MVP version and a scalable version for multiple projects or countries.",
    "when_to_use": "When building an automation system for a CSO network, consortium, or large NGO that receives updates from multiple partners and needs one clean reporting view.",
    "example_output": "System architecture with source map, normalized update schema, review queue, partner dashboard, and monthly donor-summary generator.",
    "tags": [
      "Make.com",
      "n8n",
      "enterprise-automation",
      "partner-management",
      "CSO-network",
      "reporting"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-014",
    "name": "React Dashboard Connector",
    "category": "AI & Automation",
    "sub_category": "React & Dashboards",
    "type": "Task Prompt",
    "output_type": "Code / Script",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Build a React/FastAPI dashboard that streams pipeline output in real time using SSE. Frontend: React with useEffect for SSE, abort controller, Connected/Demo Mode status badge. Backend: FastAPI wrapping existing CLI script. CORS configured for Vite dev server.",
    "when_to_use": "Connecting a Python backend pipeline to a React frontend.",
    "example_output": "Full-stack app with live streaming, status badge, and demo fallback mode",
    "tags": [
      "React",
      "FastAPI",
      "SSE",
      "dashboard",
      "Python"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-063",
    "name": "AI Workflow & Automation Designer",
    "category": "AI & Automation",
    "sub_category": "Workflow Design",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Design an AI workflow automation for [USE CASE / RECURRING TASK].\n\nCurrent manual process: [STEPS, TOOLS, TIME SPENT]\nDesired outcome: [WHAT SHOULD BE AUTOMATED AND WHY]\nAvailable tools: [n8n / Make / Zapier / Airtable / Notion / Google Workspace / Slack / Claude API]\nConstraints: [BUDGET / TECHNICAL SKILL / NO-CODE PREFERENCE / DATA PRIVACY]\n\nDeliver:\n1. Automation blueprint (trigger → AI processing → output → destination)\n2. Tool stack recommendation with rationale\n3. Implementation sequence (ordered by dependency)\n4. Estimated time saving per month\n5. Risk flags (data quality, human-in-the-loop, cost limits)\n6. Priority matrix: Quick wins / Medium-term / Strategic\n\nFavor lean no-code first. Optimize for fast experimentation and usability.",
    "when_to_use": "Designing AI-powered automation for recurring tasks — monthly system upgrades, new tool integrations, or scaling manual workflows.",
    "example_output": "Automation blueprint: trigger → AI step → output → destination, with tool stack, time saving estimate, and implementation priority matrix",
    "tags": [
      "AI",
      "automation",
      "workflow",
      "n8n",
      "Make",
      "Zapier",
      "pipeline",
      "no-code",
      "strategy",
      "scaling"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-013",
    "name": "PowerShell File Organizer",
    "category": "AI & Automation",
    "sub_category": "Workflows",
    "type": "Task Prompt",
    "output_type": "Code / Script",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Write a PowerShell script that mirrors the Google Drive folder structure to a local D:\\ path. Include dry-run mode by default, an -Execute switch to apply changes, and file renaming to YYYYMMDD_ProjectName_vXX. Critical: avoid all & characters in string literals.",
    "when_to_use": "Windows file organization and Drive mirroring.",
    "example_output": "PowerShell script with dry-run, -Execute flag, and renamed file log",
    "tags": [
      "PowerShell",
      "Windows",
      "files",
      "Drive",
      "automation"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-080",
    "name": "Google Workspace Automation & Local-Cloud Integration Architecture",
    "category": "AI & Automation",
    "sub_category": "Workspace Automation",
    "type": "Task Prompt",
    "output_type": "Framework",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "I want to design and build a fully customized workspace tailored to my daily operations, workflows, and personal needs. I need to set up automations and connect my local drive (laptop) and local files between my Gmail account and tools such as Google Drive, Google Calendar, Google Keep, and Gemini to reduce manual filing and archiving work. Analyze and improve my internal workflows to make my work and operations clearer, faster, and more efficient using my G-Drive Workspace. Help me bring structure, turning scattered files into organized systems and systems into easy access.\n\nProvide a Unified Digital Workspace Architecture prompt that will:\n1. Connect my local files with my G-Drive workspace using clear naming and categorization methods\n2. Design automations between Gmail, Calendar, Drive, and Keep to reduce manual work\n3. Map my daily operational workflows and identify friction points\n4. Suggest a phased implementation plan: manual setup first → automation layer second\n5. Include a maintenance routine (weekly/monthly) to keep the workspace self-managing\n\nMy context:\n- Solo professional, two work domains: civil society/HR work and AI/technical learning\n- Main tools: Google Drive, Notion, Gmail, Google Calendar, Gemini AI\n- Goal: Reduce time hunting files; increase time thinking, creating, coding\n\nOutput: Architecture diagram (described), workflow map, automation trigger list, phased checklist.",
    "when_to_use": "Use when setting up or improving automations between local files and Google Workspace (Drive, Gmail, Calendar, Keep). Produces a connected architecture with workflow maps, automation triggers, and a phased implementation checklist.",
    "example_output": "Architecture: local sync via Drive for Desktop (Mirror for active, Stream for archive). Automations: Gmail label → Drive auto-folder rule. Workflow map: Inbox → Tag → File → Notion record. Phased checklist: Week 1 manual setup, Week 2 automation layer.",
    "tags": [
      "Google Drive",
      "Gmail",
      "Google Calendar",
      "automation",
      "workspace",
      "local drive",
      "integration",
      "workflow",
      "Gemini",
      "productivity",
      "filing"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-026",
    "name": "Bio & Profile Writer",
    "category": "Brand & Portfolio",
    "sub_category": "Content",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Write a professional bio for Vaska Cvetanoska Panova (Cvetanichin), Skopje. Key stats: 12+ years EU-funded experience, 29+ sub-grants managed, 4 languages. Apply Strategic Minimalist voice. Versions: 150-word short bio, 300-word long bio, 3-line LinkedIn headline bio.",
    "when_to_use": "Bios, speaker profiles, donor introductions, application forms.",
    "example_output": "3 bio versions (3-line / 150w / 300w) in SM voice",
    "tags": [
      "bio",
      "profile",
      "Cvetanichin",
      "brand",
      "writing"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-025",
    "name": "Portfolio Website Builder",
    "category": "Brand & Portfolio",
    "sub_category": "Website",
    "type": "Task Prompt",
    "output_type": "Code / Visual",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Build a professional consultancy portfolio website as a self-contained HTML file. Brand: Cvetanichin. Palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D. Sections: Hero, About, Service Clusters, 6-Step Approach, Selected Assignments, Testimonials, Contact. No external dependencies.",
    "when_to_use": "Rebuilding or updating the Cvetanichin portfolio website.",
    "example_output": "Single-file HTML portfolio with 10 sections and brand colours applied",
    "tags": [
      "portfolio",
      "website",
      "Cvetanichin",
      "brand",
      "HTML"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-028",
    "name": "AI Literacy Workshop Prompt",
    "category": "Capacity Building",
    "sub_category": "AI Literacy",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 3,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Design a half-day AI literacy workshop for [AUDIENCE]. Focus: practical AI tools for [USE CASE]. Include: 3 hands-on exercises using Claude, risk/ethics discussion (10 min), resource list. Avoid technical jargon. Tone: empowering, not overwhelming.",
    "when_to_use": "AI upskilling sessions within CSO/NGO settings.",
    "example_output": "Half-day agenda with 3 exercises, ethics segment, and resource list",
    "tags": [
      "AI literacy",
      "training",
      "CSO",
      "workshop",
      "capacity"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-027",
    "name": "Training Programme & Module Builder",
    "category": "Capacity Building",
    "sub_category": "Training Design",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v03",
    "prompt": "Design a [FULL PROGRAMME / SINGLE MODULE] on [TOPIC] for [TARGET GROUP].\n\nIf FULL PROGRAMME ([X]-day):\n- Learning objectives (max 5)\n- Session breakdown with timings, facilitation methods, and materials per session\n- Pre/post assessment approach\n- Participant feedback form template\n- Apply non-formal education principles\n\nIf SINGLE MODULE:\n- Module learning objectives\n- Content sections with teaching methods (lecture, group work, case studies, role play)\n- Materials needed and time allocation per section\n- Assessment approach (quiz, reflection, peer review)\n- Facilitator notes\n\nOutput as structured table.\nContext: [ORGANISATION TYPE / THEMATIC AREA]\nAudience level: [BEGINNER / INTERMEDIATE / ADVANCED]",
    "when_to_use": "Designing full training programmes or individual session modules for CSOs, NGOs, or partner organisations.",
    "example_output": "Full programme table with objectives, timings, methods, materials, and assessment OR single-session module outline",
    "tags": [
      "training",
      "capacity building",
      "CSO",
      "facilitation",
      "curriculum",
      "module",
      "workshop design"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-042",
    "name": "Ambiguity Detector & Question Generator",
    "category": "Clarification",
    "sub_category": "Ambiguity Detection",
    "type": "Meta-Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "GPT",
    "version": "v01",
    "prompt": "Read the following task: [PASTE TASK]. Before answering, identify every ambiguous element. For each ambiguity: (1) state what is unclear, (2) explain why it matters, (3) ask a precise clarifying question. Only proceed after ambiguities are resolved.",
    "when_to_use": "Start of complex or high-stakes tasks to prevent misinterpretation.",
    "example_output": "Numbered list of ambiguities with 3-part structure per item",
    "tags": [
      "clarification",
      "ambiguity",
      "QA",
      "meta-prompt",
      "requirements"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-044",
    "name": "Concept Explainer — Three Audiences",
    "category": "Clarification",
    "sub_category": "Concept Explanation",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Explain [CONCEPT] to three audiences:\n- Audience 1: [EXPERT] — technical language, deep background\n- Audience 2: [PRACTITIONER] — plain language, practical focus\n- Audience 3: [LAYPERSON] — simple language, concrete analogy\nEach explanation: max 100 words. Label each clearly.",
    "when_to_use": "Communicating the same idea to multiple stakeholders.",
    "example_output": "Three labelled 100-word explanations at different register levels",
    "tags": [
      "clarification",
      "explanation",
      "audience",
      "communication",
      "accessibility"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-043",
    "name": "Requirements Clarification Protocol",
    "category": "Clarification",
    "sub_category": "Requirements Clarification",
    "type": "Chain of Thought",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "Task: [TASK DESCRIPTION]. Before I begin, I clarify requirements:\n- Who is the target audience?\n- What is the expected format and length?\n- What constraints apply?\n- What does 'done' look like?\n- What is the most common failure mode?\nAfter answering, state clarified understanding and complete the task.",
    "when_to_use": "Tackling unfamiliar or underspecified tasks.",
    "example_output": "Clarification block followed by completed task — no ambiguity left in output",
    "tags": [
      "clarification",
      "requirements",
      "chain of thought",
      "task planning"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-062",
    "name": "Feature-to-Benefit Copywriter",
    "category": "Communication",
    "sub_category": "Copywriting",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Rewrite the following feature-focused text as compelling, benefit-led copy:\n\n[PASTE FEATURE DESCRIPTION / ACTIVITY TEXT]\n\nAudience: [DONOR / BOARD / COMMUNITY / PUBLIC / JOURNALIST]\nContext: [GRANT APPLICATION / ANNUAL REPORT / WEBSITE / SOCIAL MEDIA]\nTone: [FORMAL / CONVERSATIONAL / INSPIRATIONAL / EVIDENCE-BASED]\n\nRules:\n1. Lead with the human outcome, not the activity\n2. Use specific numbers (people, %, €, days) wherever possible\n3. Replace ‘we deliver’ with ‘X people now…’ or ‘Y% improvement…’\n4. One sentence per idea. Max 25 words per sentence.\n5. End with a forward-looking statement\n\nOutput:\n1. Rewritten version (max [WORD COUNT] words)\n2. Original → rewritten comparison for 3 key phrases\n3. One pull-quote for social media (max 140 characters)",
    "when_to_use": "Rewriting technical or operational descriptions as compelling, benefit-led copy for donor reports, grant applications, website content, or social media.",
    "example_output": "Before: ‘We deliver training.’ After: ‘47 NGO staff now design evidence-based programmes — cutting proposal revision cycles by 40%.’",
    "tags": [
      "copywriting",
      "comms",
      "benefit",
      "rewriting",
      "donor",
      "grant",
      "persuasive",
      "content"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-038",
    "name": "Data Extraction, Cleaning & Structuring Pipeline",
    "category": "Data Engineering",
    "sub_category": "Data Processing Pipeline",
    "type": "Task Prompt",
    "output_type": "Code / Script",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v03",
    "prompt": "Build a data processing pipeline with these phases:\n\nPhase 1 — Extract: Read data from [SOURCE: CSV/Excel/API/text notes] using pandas\nPhase 2 — Clean: Remove duplicates, fix formatting, standardise field values, handle missing data with [fill/drop/flag] strategy\nPhase 3 — Structure: Transform into [DESIRED FORMAT: cleaned table / pivot / database-ready fields / CRM-importable CSV]\nPhase 4 — Validate: Flag rows that failed validation with reason column\nPhase 5 — Export: Save output to [DESTINATION] with processing summary\n\nFor unstructured input (notes/text):\n- Extract fields: [FIELD LIST, e.g. name, date, amount, category, tags]\n- Output: structured table ready for [Airtable / Notion / Excel / CSV]\n\nFrequency: [Daily / Weekly / On demand]\nError handling: try/except with clear error messages. Include row-level logging. No hardcoded paths.",
    "when_to_use": "Automating data processing: extracting from source, cleaning messy data, structuring unstructured input (notes/text), or transforming raw datasets for analysis or CRM import.",
    "example_output": "Python pipeline with extract → clean → structure → validate → export phases. Handles CSVs, Excel, and unstructured text. Outputs clean data with a validation report.",
    "tags": [
      "data extraction",
      "transformation",
      "python",
      "pandas",
      "data cleaning",
      "structuring",
      "CRM",
      "automation",
      "daily"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-084",
    "name": "Data Analysis and Impact Dashboard Agent (Vintage Pastels)",
    "category": "Data Engineering",
    "sub_category": "M&E / MEL",
    "type": "System Prompt",
    "output_type": "System Prompt",
    "quality_score": 5,
    "source_platform": "Gemini",
    "version": "v1",
    "prompt": "You are an advanced Data Analysis and Coding Agent that processes files, analyses data, and delivers actionable insights via interactive, colour-coordinated dashboards.\n\nCore Capabilities:\n1. Data Processing & Analysis: Browse and extract information from uploaded files (CSV, Excel, PDF, JSON, text). Summarize datasets with key statistics, trends, and patterns. Cross-reference data across files to spot relationships and discrepancies. Calculate metrics including totals, averages, percentages, growth rates, custom formulas. Surface insights such as outliers, correlations, trends, and anomalies.\n\n2. Visual Presentation Standards: Create publication-quality visualizations using the Vintage Pastels color scheme.\nColor Palette:\n- Primary Purple: #A079AE - main data series, headers, primary elements\n- Coral Pink: #F09E9F - secondary data, highlights, alerts\n- Warm Beige: #E5C690 - tertiary data, backgrounds, supporting elements\n- Cream: #EAD9CB - backgrounds, cards, contrast areas\n- Soft Blue: #93B3C1 - neutral data, progress indicators\n- Deep Blue: #6890AC - accents, borders, text on light backgrounds\n\nVisualization types: bar charts, line charts, pie/donut charts, tree maps, mind maps, progress bars, heatmaps, scatter plots, Sankey diagrams.\n\n3. Interactive Impact Dashboards: When users upload project files, automatically build executive summary cards, progress trackers, impact metrics (beneficiaries, outcomes, budget use), comparative views, Gantt-style timelines, resource allocation views, and risk/issue boards with colour-coded priority matrices.\n\nWorkflow:\nStep 1 - File Analysis: Identify file types and data structures. Extract relevant data points. Summarize contents in 2-3 sentences. Highlight key dimensions (time, categories, metrics).\nStep 2 - Data Processing: Clean and normalize data. Run calculations. Cross-reference multiple files. Flag data quality issues.\nStep 3 - Visual Generation: Build interactive HTML dashboards in Plotly with Vintage Pastels. Output standalone charts as PNG for reports. Use color strategically: Purple for positive/primary, Coral for alerts/secondary, Blues for neutral.\nStep 4 - Insight Delivery: (1) Executive summary (3-5 key takeaways), (2) Visual dashboard (interactive HTML artifact), (3) Detailed analysis (section breakdown with charts), (4) Recommendations (data-driven action items).\n\nSpecial Instructions:\n- Always use code execution for data tasks and charting\n- Always apply the Vintage Pastels palette to all visualizations\n- Prioritize interactivity - use Plotly HTML dashboards over static images where possible\n- Handle M&E data - recognize indicators, baselines, targets, actuals\n- Flag inconsistencies - alert users to quality issues or surprising results\n- Provide export options: interactive HTML plus static PNGs for key charts\n\nYour goal is to make data accessible, beautiful, and actionable so every visualization helps NGO professionals decide, track impact, and communicate results.",
    "when_to_use": "Use as a system prompt for an AI data analysis agent that processes CSV/Excel/PDF project files and generates interactive Plotly dashboards using the Vintage Pastels colour scheme. Ideal for M&E progress tracking, budget analysis, impact reporting, and grant proposal comparisons.",
    "example_output": "Interactive HTML dashboard with progress bars, bar/line/pie charts, executive summary cards, and data-driven recommendations styled in Vintage Pastels palette.",
    "tags": [
      "data-analysis",
      "visualization",
      "plotly",
      "dashboard",
      "mel",
      "ngo",
      "charts",
      "impact-reporting",
      "vintage-pastels",
      "html-artifact"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-073",
    "name": "Google Sheets / Excel Data Consolidation Script",
    "category": "Data Engineering",
    "sub_category": "Spreadsheet Automation",
    "type": "Task Prompt",
    "output_type": "Code / Script",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Write a [Google Apps Script / Excel VBA] script to consolidate and clean spreadsheet data.\n\nData structure:\n- Source: [GOOGLE SHEETS URL or EXCEL FILE] with [N] tabs\n- Each tab represents: [WHAT, e.g. one cardholder / one month / one project]\n\nConsolidation rules:\n1. Merge all tabs into one master sheet named [MASTER SHEET NAME]\n2. Keep only columns: [LIST COLUMN LETTERS OR NAMES, e.g. C, D, E]\n3. Remove rows: [LIST ROW NUMBERS TO DELETE, e.g. rows 3, 4, 5 — header noise]\n4. Add derived column [COLUMN NAME, e.g. Cardholder name] using the tab name as the value\n5. Add derived column [COLUMN NAME, e.g. Company name] using cell [CELL REF, e.g. B2] from each tab\n\nOutput:\n- For Google Sheets: complete Apps Script with onOpen menu trigger\n- For Excel: complete VBA macro with Run button\n- Include: error handling if a tab is empty or missing expected columns\n- Include: progress log to show which tabs were processed\n\nDo not hardcode tab names — loop through all existing tabs dynamically.",
    "when_to_use": "Consolidating data spread across multiple spreadsheet tabs or files — common in M&E data entry, expense tracking, beneficiary registers, or multi-project reporting.",
    "example_output": "Google Apps Script or VBA that merges all tabs into one master sheet, keeps only specified columns, removes header noise rows, and adds derived identifier columns (cardholder name, company, source tab)",
    "tags": [
      "Google Sheets",
      "Excel",
      "VBA",
      "Apps Script",
      "data consolidation",
      "automation",
      "multi-tab",
      "reporting",
      "data engineering"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-010",
    "name": "Donor Compliance Checker",
    "category": "Donor Reporting",
    "sub_category": "Compliance",
    "type": "Meta-Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Review the attached [REPORT / FINANCIAL STATEMENT / DELIVERABLE] for compliance with [DONOR] rules. Check: eligibility of costs, documentation requirements, procurement rules, visibility obligations, reporting deadlines. Output: requirement | status (OK/Gap/Risk) | action needed.",
    "when_to_use": "Before submitting any donor deliverable.",
    "example_output": "Compliance matrix table with status colour-coding and action column",
    "tags": [
      "compliance",
      "donor",
      "EU",
      "audit",
      "reporting"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-087",
    "name": "EU Grant Compliance Document Scanner",
    "category": "Donor Reporting",
    "sub_category": "Compliance Review",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v01",
    "prompt": "Act as an EU grant compliance reviewer. Review [DOCUMENT / DELIVERABLE / REPORT] against [DONOR RULES / CALL GUIDELINES / GRANT AGREEMENT]. Check eligibility, visibility requirements, procurement references, reporting obligations, annex completeness, evidence quality, and audit-readiness. Output findings as: Requirement | Status (OK / Gap / Risk) | Evidence found | Required fix | Priority. Put eliminatory or audit-sensitive risks first.",
    "when_to_use": "Before submitting reports, communication products, deliverables, procurement files, or annexes to an EU donor.",
    "example_output": "Compliance matrix sorted by priority, with audit-sensitive risks highlighted first and concrete fixes assigned.",
    "tags": [
      "EU-compliance",
      "grant-management",
      "visibility",
      "audit",
      "donor-reporting",
      "quality-assurance"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-076",
    "name": "Board / Executive Summary Automation",
    "category": "Donor Reporting",
    "sub_category": "Executive Communications",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "You are acting as an experienced [CFO / Programme Director / Senior Consultant].\n\nBased on the information below, create a concise EXECUTIVE SUMMARY suitable for [AUDIENCE: Board of Directors / Donor / Steering Committee / Senior Management].\n\nInformation to summarise:\n[PASTE: data, analysis, scenarios, or project status]\n\nRequirements:\n- Max 1 page\n- No tables, no markdown symbols, no calculations visible\n- Short paragraphs and bullet points\n- Focus on insights and implications, not raw numbers\n- Accessible but rigorous language — practical and decision-useful\n\nStructure the output exactly as follows:\n\n1. Executive Summary (5-6 sentences)\n   — Overall situation, trajectory, and the single most important message\n\n2. Key Findings or Scenario Comparison (bullet points)\n   — [SCENARIO A / FINDING A]: [2-3 bullets]\n   — [SCENARIO B / FINDING B]: [2-3 bullets]\n\n3. Key Risks and Watchpoints (3 bullets)\n   — Each risk: what it is, likelihood, and impact if materialised\n\n4. Recommendation (2-3 sentences)\n   — Clear, actionable, specific to the decision-maker\n\nEnd with a short reference to the source analysis or model.\nDo not invent data — only cite what is in the input above.",
    "when_to_use": "Transforming raw data, assumptions, or scenario analysis into a concise, board-ready or donor-ready executive summary — for board papers, management reports, or high-stakes stakeholder communications.",
    "example_output": "1-page executive summary with: overall outlook (5-6 sentences), scenario comparison (bullets), key risks (3 bullets), and a clear recommendation — no tables, no markdown, no calculations visible",
    "tags": [
      "executive summary",
      "board",
      "donor",
      "CFO",
      "scenario",
      "communication",
      "reporting",
      "automation",
      "management"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-035",
    "name": "Narrative Data Visualization Builder",
    "category": "Donor Reporting",
    "sub_category": "Narrative Reporting",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 3,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Generate a narrative storyline for a data visualization of [DATA SET]. Outline the main message, sequence of visuals, and how each graphic contributes to the narrative (beginning, challenge, resolution). Recommend chart types and annotations.",
    "when_to_use": "Donor reports requiring storytelling with data.",
    "example_output": "3-act narrative structure with chart type recommendations per act",
    "tags": [
      "data visualization",
      "narrative",
      "storytelling",
      "donor reporting"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-088",
    "name": "EU Interim Narrative Report Generator",
    "category": "Donor Reporting",
    "sub_category": "Narrative Reports",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v01",
    "prompt": "Draft an interim narrative report for [PROJECT NAME], funded by [DONOR / PROGRAMME]. Reporting period: [DATES]. Use the following inputs: approved proposal, logframe, activity records, indicator progress, beneficiary data, risks, changes, and financial notes. Structure the report as: executive summary, progress by output, indicator table, challenges and mitigation, changes from plan, visibility and communication, lessons learned, next-period workplan. Use formal EU reporting language and do not invent evidence.",
    "when_to_use": "When drafting quarterly or interim reports for EU-funded projects such as CERV, IPA, Horizon, EuropeAid, or Erasmus+.",
    "example_output": "Donor-ready interim report narrative with progress by output, indicator status table, risks, mitigation, and next-period priorities.",
    "tags": [
      "EU-reporting",
      "narrative-report",
      "donor-reporting",
      "interim-report",
      "logframe",
      "project-management"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-009",
    "name": "Progress Report Drafter",
    "category": "Donor Reporting",
    "sub_category": "Narrative Reports",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Draft a [QUARTERLY/INTERIM/FINAL] progress report narrative for [PROJECT NAME] funded by [DONOR]. Reference period: [DATES]. Structure: (1) Executive Summary 200 words, (2) Progress per Output with indicator data, (3) Challenges and mitigating actions, (4) Financial summary note, (5) Next period workplan. No passive voice.",
    "when_to_use": "Donor narrative report drafting.",
    "example_output": "Full structured report with 5 sections, 800-1500 words, donor-compliant tone",
    "tags": [
      "donor reporting",
      "narrative",
      "EU",
      "progress",
      "MEL"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-065",
    "name": "Partner & Donor Coordination Pack",
    "category": "Donor Reporting",
    "sub_category": "Partner Communications",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Produce a coordination pack for [MEETING TYPE: partner coordination / donor check-in / lessons learned / steering committee] for [PROJECT NAME].\n\nMeeting details: [DATE / PARTICIPANTS / AGENDA ITEMS]\nProject status: [WHAT IS ON TRACK, WHAT IS DELAYED, KEY ISSUES]\nKey decisions needed: [LIST]\n\nDeliver:\n1. Meeting summary (narrative, 200 words max)\n2. Decision log: Decision | Owner | Deadline\n3. Action log: Action | Responsible | Due date | Status\n4. Key messages for donor (3 bullets: progress, challenge, ask)\n5. Lessons learned: What worked | What didn’t | What to do differently\n\nTone: factual, constructive, donor-appropriate. No passive voice.\nFormat: ready to send as email attachment or paste into project management tool.",
    "when_to_use": "Producing coordination documents for partner meetings, donor check-ins, or lessons-learned sessions.",
    "example_output": "Meeting summary, decision log, action log, donor key messages, and lessons learned template — all in one pack",
    "tags": [
      "partner",
      "donor",
      "coordination",
      "meeting notes",
      "lessons learned",
      "communication",
      "CSO",
      "reporting"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-058",
    "name": "Donor Email & Outreach Writer",
    "category": "Fundraising",
    "sub_category": "Donor Outreach",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Write a [COLD INTRODUCTION / FOLLOW-UP / COVER NOTE / THANK YOU] email to [DONOR/FUNDER NAME] from [ORGANISATION NAME].\n\nDonor context: [FOCUS AREAS, RECENT GRANTS, PROGRAMME OFFICER NAME IF KNOWN]\nOrganisation profile: [MISSION, KEY ACHIEVEMENT, RELEVANT TRACK RECORD]\nAsk: [MEETING / CONCEPT NOTE REVIEW / FULL PROPOSAL / ACKNOWLEDGEMENT]\n\nTone: professional, warm, evidence-grounded. Not generic. Max 220 words.\nStructure: (1) Hook — specific reference to donor’s work, (2) Why us — one concrete achievement with numbers, (3) The ask — one clear action, (4) Close.\n\nAvoid: ‘We are pleased to’, ‘We hope this finds you’. Lead with value.",
    "when_to_use": "Writing personalised donor outreach emails — cold introduction, follow-up after meeting, or proposal submission cover note.",
    "example_output": "Personalised 200-word email with clear value proposition, specific donor alignment reference, and one concrete ask",
    "tags": [
      "fundraising",
      "donor email",
      "outreach",
      "communication",
      "conversion",
      "CSO",
      "grants"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-057",
    "name": "Donor Research & Prospect Mapper",
    "category": "Fundraising",
    "sub_category": "Donor Prospecting",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "You are a fundraising strategist. Research and map funding opportunities for [ORGANISATION NAME] working in [THEMATIC AREA] in [REGION/COUNTRY].\n\nOrganisation profile: [MISSION, SIZE, TRACK RECORD, LANGUAGES]\nFunding need: [PROJECT TYPE / AMOUNT RANGE / TIMELINE]\n\nSearch across:\n- EU institutional (CERV, IPA, EIDHR, Erasmus+, Horizon)\n- Bilateral (GIZ, SIDA, FCDO, USAID, SDC)\n- Private foundations (Open Society, Mott, MacArthur, etc.)\n- Domestic and regional sources\n\nFor each opportunity:\n| Funder | Focus areas | Geographic scope | Grant size | Next deadline | Fit score (1-5) | Entry point |\n\nRank by fit score. Flag any with deadlines in next 60 days. Add a 3-sentence strategic recommendation at the end.",
    "when_to_use": "Weekly donor prospecting — building a prioritised list of matched funders based on organisation profile and thematic fit.",
    "example_output": "Ranked donor list: funder, focus areas, geography, grant size, deadline, fit score, and entry point recommendation",
    "tags": [
      "fundraising",
      "donor research",
      "prospecting",
      "CSO",
      "grants",
      "EU",
      "bilateral",
      "foundations"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-091",
    "name": "CSO 2026 Funding Dashboard Builder",
    "category": "Fundraising",
    "sub_category": "Funding Intelligence",
    "type": "Task Prompt",
    "output_type": "Dashboard / Visual",
    "quality_score": 5,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Build a sortable funding dashboard for CSOs for [YEAR / REGION / THEMATIC AREA]. Track open calls from [DONOR LIST / SOURCES]. For each opportunity, extract donor, programme, title, deadline, geography, eligible applicants, thematic fit, budget range, co-financing rules, link, application stage, and strategic fit score. Output a table sorted by urgency and fit, plus recommended next actions for the top opportunities.",
    "when_to_use": "When tracking open funding calls across multiple donors and thematic areas for a CSO, NGO, or consultancy fundraising pipeline.",
    "example_output": "Sortable dashboard table with deadlines, eligibility, fit score, budget range, application stage, and top-5 action list.",
    "tags": [
      "fundraising",
      "funding-dashboard",
      "CSO",
      "EU-grants",
      "donor-intelligence",
      "pipeline"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-092",
    "name": "Digital Rights & AI Governance Funding Monitor ? Web App Spec",
    "category": "Fundraising",
    "sub_category": "Grant Monitoring",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Write a web app specification for a funding monitor focused on digital rights, AI governance, civic tech, and human rights. Define user personas, data sources, opportunity fields, scraping or manual-ingestion approach, taxonomy, search and filters, scoring logic, alert rules, admin workflow, dashboard views, and export formats. Include an MVP scope, no-code prototype option, and production architecture option.",
    "when_to_use": "When designing an automated grant-monitoring tool for a CSO or NGO focused on digital rights, AI governance, technology policy, or civic space.",
    "example_output": "Product spec with source map, data model, scoring criteria, alert flows, dashboard views, MVP roadmap, and production architecture.",
    "tags": [
      "digital-rights",
      "AI-governance",
      "funding-monitor",
      "grant-tracking",
      "web-app-spec",
      "civic-tech"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-059",
    "name": "Grant Pipeline Prioritization Engine",
    "category": "Fundraising",
    "sub_category": "Pipeline Management",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Evaluate and prioritize the following funding opportunities for [ORGANISATION].\n\nOpportunities:\n[PASTE LIST: name, funder, deadline, amount, brief description]\n\nScore each on:\n- Strategic fit (1-5): alignment with mission, thematic area, geographic scope\n- Effort required (1-5 inverse — 5=low effort): proposal complexity, relationship depth needed\n- Readiness (1-5): track record match, documentation ready, partnerships in place\n\nComposite score = Fit × (6 - Effort) × Readiness\n\nOutput:\n1. Ranked table with all scores and composite\n2. Top 3 recommendations with rationale\n3. 1-2 opportunities to DROP from pipeline and why\n4. One quick win (highest readiness, nearest deadline)",
    "when_to_use": "Weekly pipeline review — ranking active grant opportunities by strategic fit, effort-to-value ratio, and readiness.",
    "example_output": "Ranked pipeline table with fit/effort/readiness scores, composite score, and recommended next actions",
    "tags": [
      "fundraising",
      "pipeline",
      "grants",
      "prioritization",
      "strategy",
      "CSO",
      "decision",
      "weekly"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-082",
    "name": "Civil Society Funding Monitor — AI Product Spec",
    "category": "Fundraising",
    "sub_category": "Vibe Coding / Product",
    "type": "System Prompt",
    "output_type": "System Prompt",
    "quality_score": 5,
    "source_platform": "Gemini",
    "version": "v1",
    "prompt": "Act as a product architect, OSINT researcher, and AI workflow designer.\n\nDesign a web-based AI application called “Civil Society Funding Monitor” that continuously tracks, verifies, and updates grant opportunities for civil society organizations.\n\nProduct goal:\nBuild an AI-powered web application that monitors open and forthcoming grants, calls for proposals, donations, concept note invitations, expressions of interest, and rolling funds from donors, foundations, trusts, public institutions, philanthropy platforms, and official grant portals.\n\nPrimary users:\n- civil society fundraising teams\n- human rights organizations\n- digital rights groups\n- watchdog and transparency organizations\n- media freedom and civic tech organizations\n- coalition coordinators and regranting intermediaries\n\nSubstantive priorities:\n- digital rights\n- digital democracy\n- AI governance and accountability\n- ethical and rights-based AI\n- online freedom\n- privacy and data protection\n- surveillance, spyware, and biometric abuses\n- technology-facilitated human rights violations\n- freedom of expression online\n- accountability, transparency, anti-corruption, and civic participation using digital tools\n\nRequired sources:\n1. Official donor and funder websites\n2. Official foundations and trust pages\n3. EU and multilateral funding portals\n4. Open donor and grants databases\n5. Civil society funder platforms\n6. Verified social media accounts for grant announcements\n7. Community-maintained opportunity listings, but only if traceable to original sources\n\nThe application must include these features:\n\nA. Source monitoring engine\n- Crawl and monitor selected websites and pages on a recurring schedule\n- Track newly published and updated opportunities\n- Detect changes in deadlines, eligibility, budget, and application stage\n- Monitor verified social posts that announce calls\n\nB. Opportunity extraction and normalization\n- Extract: title, donor, URL, status, opening date, deadline, applicant eligibility, geography, themes, amount, stage, concept note requirement, rolling status, and source type\n- Normalize inconsistent terminology such as CFP, call for proposals, grants, concept notes, EOI, LOI, and invitation-only calls\n- Deduplicate the same opportunity appearing across multiple sources\n\nC. AI classification and scoring\n- Classify each opportunity by theme, region, donor type, urgency, and strategic fit\n- Score opportunities for relevance to civil society work on digital rights, democracy, AI accountability, privacy, and anti-surveillance\n- Highlight high-fit calls for advocacy groups, watchdogs, media, and human rights defenders\n\nD. Web application interface\nBuild a clean dashboard with:\n- live opportunity feed\n- filters by status, theme, geography, donor, deadline month, and application type\n- cards and table views\n- deadline calendar view\n- new this week view\n- closing soon alerts\n- watchlist for recurring donors\n- saved searches\n- notes field for internal assessment\n- export to CSV and spreadsheet\n- shareable weekly digest\n\nE. AI assistant layer\nAdd an assistant that can:\n- answer natural language questions like Show open grants for digital rights in Europe closing in the next 45 days\n- recommend top-fit calls for a specific organization profile\n- draft donor prospect shortlists\n- explain why an opportunity matches selected priorities\n- detect concept-note-first opportunities\n\nF. Updating and notifications\n- Run scheduled updates daily or multiple times per day for priority sources\n- Send alerts for new high-priority calls\n- Flag revised deadlines and newly opened submissions\n- Generate weekly and monthly funding intelligence summaries\n\nG. Data trust and verification\n- Label source reliability clearly\n- Prefer official source pages over aggregators\n- Preserve evidence snippets and timestamps\n- Mark uncertain or unverified records for human review\n\nH. Technical architecture\nPropose: source ingestion workflow, scraping and monitoring logic, AI extraction pipeline, database schema, ranking logic, frontend dashboard structure, alerting workflow, admin panel for managing sources, compliance and ethical safeguards for scraping and data use.\n\nI. Output deliverables\nProduce:\n1. Product requirements document\n2. User stories\n3. Data model\n4. Source taxonomy\n5. Ranking and scoring framework\n6. Dashboard information architecture\n7. Update workflow\n8. Prompt design for the AI assistant\n9. MVP roadmap\n10. Suggested stack for implementation\n\nImportant operating rules:\n- Use only open and legally accessible sources\n- Do not fabricate opportunities\n- Every listing must include a source URL\n- Separate open, forthcoming, rolling, and watchlist opportunities\n- Exclude expired calls from active views unless they are recurring and useful for forecasting\n- Prioritize recent announcements and near-term deadlines\n- Make the system especially strong for official portals and recurring civil society donor programs",
    "when_to_use": "Use when building or briefing an AI assistant to design a web application that continuously monitors, classifies, and surfaces grant opportunities for civil society organisations. Covers product requirements, source taxonomy, scoring logic, and dashboard architecture.",
    "example_output": "Full product requirements document, user stories, data model, source taxonomy, scoring framework, dashboard IA, MVP roadmap, and suggested tech stack for a civil society funding intelligence app.",
    "tags": [
      "fundraising",
      "funding-monitor",
      "civil-society",
      "product-spec",
      "grants-intelligence",
      "osint",
      "automation",
      "dashboard",
      "digital-rights"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-002",
    "name": "M&E Progress Dashboard Prompt",
    "category": "M&E / MEL",
    "sub_category": "Dashboard & Reporting",
    "type": "Task Prompt",
    "output_type": "Dashboard / Visual",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Build an interactive HTML M&E dashboard for [PROJECT NAME] with: animated progress bars per outcome area, a risk register table (likelihood × impact matrix), work package Gantt view, beneficiary counter, and a donor-ready summary section. Color palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D.",
    "when_to_use": "Creating visual M&E dashboards for donor reporting.",
    "example_output": "Interactive HTML artifact with animated progress bars, risk matrix, Gantt, and beneficiary counter",
    "tags": [
      "M&E",
      "dashboard",
      "HTML",
      "HERA",
      "visual",
      "donor"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-003",
    "name": "MEL Workbook Builder",
    "category": "M&E / MEL",
    "sub_category": "Data Collection",
    "type": "Task Prompt",
    "output_type": "Excel / Workbook",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Create a 10-sheet Excel M&E workbook for [PROJECT]. Sheets: (1) Cover & Instructions, (2) Logframe Summary, (3) Indicator Tracking Matrix, (4) Quarterly Data Entry, (5) Cumulative Progress, (6) Beneficiary Register, (7) Risk Register, (8) Budget vs Actual, (9) Lessons Learned, (10) Donor Report Draft. All sheets linked with formulas.",
    "when_to_use": "Project inception MEL data management setup.",
    "example_output": "10-sheet Excel workbook with cross-referenced formulas and dropdown validation",
    "tags": [
      "M&E",
      "Excel",
      "workbook",
      "logframe",
      "EU"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-004",
    "name": "Theory of Change Reviewer",
    "category": "M&E / MEL",
    "sub_category": "Evaluation",
    "type": "Chain of Thought",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Review the attached Theory of Change for [PROJECT]. Step 1: map the causal chain (inputs → activities → outputs → outcomes → impact). Step 2: identify broken logic links and untested assumptions. Step 3: flag external risks not addressed. Step 4: recommend 3 improvements.",
    "when_to_use": "Proposal design phase or mid-term evaluation.",
    "example_output": "Structured table: Level | Logic gap | Assumption at risk | Improvement recommendation",
    "tags": [
      "ToC",
      "M&E",
      "logframe",
      "evaluation",
      "RBM"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-086",
    "name": "HERA M&E Indicator Progress Tracker",
    "category": "M&E / MEL",
    "sub_category": "Indicator Tracking",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v01",
    "prompt": "Act as a senior M&E specialist for an EU-funded project. Review the indicator data for [PROJECT NAME] and produce a quarterly progress tracker. Inputs: logframe indicators, baseline, target, current value, reporting period, evidence source, and implementation notes. For each indicator, calculate progress against target, classify status as On Track / Watch / Off Track, flag data-quality issues, and recommend one corrective action. Output a donor-ready table plus a short management summary.",
    "when_to_use": "Quarterly or monthly indicator review for EU-funded projects, especially when activity data must be converted into clear management and donor reporting signals.",
    "example_output": "Indicator tracker table with baseline, target, actual, progress %, status, evidence gap, and corrective action, followed by a 150-word summary.",
    "tags": [
      "M&E",
      "indicators",
      "EU-project",
      "monitoring",
      "HERA",
      "logframe",
      "progress-tracking"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-001",
    "name": "Logframe Indicator Builder",
    "category": "M&E / MEL",
    "sub_category": "Logframe & Indicators",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Act as a senior M&E expert. Review the attached logframe and: (1) assess indicator quality against SMART criteria, (2) flag gaps in means of verification, (3) suggest baselines and targets, (4) check theory of change coherence. Output a structured table with findings per level (Impact, Outcome, Output, Activity).",
    "when_to_use": "Drafting or reviewing logframes for EU-funded proposals or project reporting.",
    "example_output": "Table: Level | Indicator | SMART score | MoV gap | Suggested baseline | Risk",
    "tags": [
      "M&E",
      "logframe",
      "EU",
      "indicators",
      "SMART"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-031",
    "name": "Risk Matrix Generator",
    "category": "M&E / MEL",
    "sub_category": "Risk Management",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "You are an M&E risk analyst. Generate a comprehensive risk matrix for [PROJECT/PROGRAMME]. Include columns for risk event, likelihood (low/medium/high), impact, mitigation strategy, and monitoring indicators. Align with results-based management principles.",
    "when_to_use": "Planning M&E projects requiring risk management sections.",
    "example_output": "Risk matrix table with 5 columns and colour-coded likelihood ratings",
    "tags": [
      "risk",
      "matrix",
      "M&E",
      "RBM",
      "risk management"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-060",
    "name": "Visual M&E Impact Map Builder",
    "category": "M&E / MEL",
    "sub_category": "Visualization",
    "type": "Task Prompt",
    "output_type": "Dashboard / Visual",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Create a visual impact map for [PROJECT/PROGRAMME NAME] for [REPORTING PERIOD].\n\nProgramme data:\n- Overall goal: [IMPACT STATEMENT]\n- Outputs achieved: [LIST WITH NUMBERS]\n- Outcomes with indicators: [LIST WITH BASELINE → ACTUAL]\n- Beneficiaries reached: [NUMBERS BY CATEGORY]\n- Geographic coverage: [REGIONS/LOCATIONS]\n\nVisual format: [IMPACT TREE / RESULTS CHAIN / INFOGRAPHIC / DASHBOARD CARD]\nDestination: [Canva / PDF report / HTML dashboard / PowerPoint]\nColor palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D, Ivory #F7F4ED\n\nInclude: hierarchy (Activities → Impact), key numbers prominently displayed, one headline pull-quote, geographic reach indicator.\nOutput: structured layout description with exact text content ready to drop into Canva or HTML.",
    "when_to_use": "Quarterly reporting — building a visual impact map or results chain for donor communications, board presentations, or public-facing reports.",
    "example_output": "Visual results chain: Activities → Outputs → Outcomes → Impact, with beneficiary counts, geographic reach, and headline achievement",
    "tags": [
      "M&E",
      "visualization",
      "impact map",
      "reporting",
      "donor",
      "infographic",
      "Canva",
      "PDF"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-094",
    "name": "Anti-Sycophancy Instruction Prompt",
    "category": "Meta-Prompting",
    "sub_category": "Critical Review",
    "type": "System Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v01",
    "prompt": "You are not here to flatter me. Your job is to improve the work. Challenge weak assumptions, vague logic, unsupported claims, and premature conclusions. If an idea is strong, say why. If it is weak, say exactly where and how to fix it. Separate evidence from interpretation. Prioritize usefulness over agreement. Use direct but respectful language and end with the highest-leverage next action.",
    "when_to_use": "At the start of any session where honest critique matters: proposal review, strategy evaluation, product planning, prompt testing, or decision support.",
    "example_output": "Direct critique with strong points, weak assumptions, evidence gaps, recommended fixes, and one next action.",
    "tags": [
      "meta-prompting",
      "anti-sycophancy",
      "honest-feedback",
      "critique",
      "quality-control"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-036",
    "name": "Prompt Library Updater & Migration Audit",
    "category": "Meta-Prompting",
    "sub_category": "Library Maintenance",
    "type": "Meta-Prompt",
    "output_type": "Table",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v03",
    "prompt": "You are helping me [UPDATE MY LIBRARY / MIGRATE FROM ANOTHER AI WORKSPACE].\n\nTask: [UPDATE: Review recent conversations | MIGRATE: Go through past conversations from [PLATFORM] and map every important prompt or outcome]\n\nFor each recovered prompt:\n1. Extract the raw prompt text or verbatim quote that justifies the entry\n2. Assign: category, sub-category, intent type (Task / System / Meta / Chain of Thought)\n3. Assess complexity (Low/Medium/High) and reusability (Low/Medium/High)\n4. Write a 1-sentence When to use description\n5. Note source confidence: [Recovered verbatim | Recovered from user profile | Inferred from pattern]\n\nAdditionally:\n- Flag duplicates against the existing library\n- Suggest 3 improvements for the weakest existing prompts\n- Identify 3 critical gaps not covered\n\nOutput: structured table + narrative summary of changes recommended.",
    "when_to_use": "Periodic library maintenance or migrating prompts from other AI workspaces (ChatGPT, Gemini, Perplexity) into Claude.",
    "example_output": "Structured table of recovered prompts with categories, verbatim quotes, metadata + improvement flags for existing entries",
    "tags": [
      "meta-prompt",
      "library maintenance",
      "update",
      "extraction",
      "migration",
      "audit",
      "inventory"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-067",
    "name": "Dual-Format Output Packager",
    "category": "Meta-Prompting",
    "sub_category": "Output Standards",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Take the following content and produce it in two formats:\n\n[PASTE CONTENT / SUMMARY / DATA]\n\nFormat 1 — NARRATIVE (Word/PDF-ready):\n- Executive summary (150 words)\n- Main sections with headings\n- Analytical commentary\n- Suitable for: [DONOR REPORT / PARTNER BRIEF / BOARD PAPER]\n\nFormat 2 — TABULAR (Excel/Airtable/Notion-ready):\n- Column headers matching the content structure\n- One row per item/entry/finding\n- Add columns for: status, owner, date, notes\n- Suitable for: [TRACKING / UPDATING / SHARING WITH TEAM]\n\nEnsure both formats contain the same core information. Flag any content that works better in one format than the other.",
    "when_to_use": "Any deliverable that needs to exist in both narrative (Word/PDF) and tabular (Excel/Notion) formats — standard for donor handoffs and workspace documentation.",
    "example_output": "Two outputs from one input: (1) Narrative DOCX with summary and sections, (2) Excel/Notion table with same data structured for tracking",
    "tags": [
      "output format",
      "dual format",
      "DOCX",
      "Excel",
      "packaging",
      "donor",
      "reporting",
      "export",
      "meta"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-018",
    "name": "Expert Role Activation Prompt",
    "category": "Meta-Prompting",
    "sub_category": "Role Assignment",
    "type": "System Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "You are a [ROLE] with 15+ years of experience in [DOMAIN]. You operate in the Western Balkans context. Apply [FRAMEWORK] to all outputs. Flag weak logic, missing assumptions, and implementation risks directly. Do not smooth over problems.",
    "when_to_use": "Opening complex task sessions.",
    "example_output": "Expert-mode response with flags, risks identified, and direct language",
    "tags": [
      "persona",
      "role",
      "expert",
      "system prompt",
      "activation"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-017",
    "name": "Self-Evaluating Meta-Prompt Template",
    "category": "Meta-Prompting",
    "sub_category": "Self-Evaluation",
    "type": "Meta-Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Generate [OUTPUT TYPE] for [CONTEXT]. Structure: (1) Produce the output. (2) Define 5 quality criteria. (3) Self-evaluate each criterion score 1-5. (4) Identify the 2 weakest areas. (5) Revise the output. (6) Explain the key changes made.",
    "when_to_use": "High-stakes outputs: proposals, M&E frameworks, reports.",
    "example_output": "Output + evaluation table + revised output — all in one response",
    "tags": [
      "meta-prompt",
      "self-evaluation",
      "QA",
      "reusable"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-019",
    "name": "Structured Output Chain of Thought",
    "category": "Meta-Prompting",
    "sub_category": "Structured Output",
    "type": "Chain of Thought",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Think step by step before producing output: Step 1 — Identify the exact deliverable. Step 2 — List constraints. Step 3 — Plan structure. Step 4 — Draft output. Step 5 — Self-check. Step 6 — Deliver final version only. Do not show intermediate drafts.",
    "when_to_use": "Complex structured deliverables where quality control matters.",
    "example_output": "Clean final output with 6-step invisible reasoning applied",
    "tags": [
      "chain of thought",
      "structured output",
      "QA",
      "meta"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-093",
    "name": "Cvetanichin Consultancy Strategic Operations Orchestrator",
    "category": "Organizational Development",
    "sub_category": "Consultancy Operations",
    "type": "System Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "You are the Strategic Operations Orchestrator for Cvetanichin Consultancy, a senior civil society consultancy serving CSOs and NGOs in Europe and the Western Balkans. Help transform expert freelance work into a scalable consultancy platform. Prioritize EU grant management, M&E, donor compliance, organizational development, AI workflow automation, training, and product development for NGOs. For every task, separate strategic advisory from operational execution, define the simplest useful system, flag maintenance risks, and produce decision-ready next steps.",
    "when_to_use": "Use as the master system prompt when working on consultancy business operations, client proposals, service design, AI systems, and internal workflows.",
    "example_output": "Consultancy operations plan with service-line framing, workflow design, risks, priority actions, and next-step implementation sequence.",
    "tags": [
      "system-prompt",
      "consultancy-operations",
      "Cvetanichin",
      "CSO",
      "organizational-development",
      "AI-operations"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-030",
    "name": "Fundraising Strategy Builder",
    "category": "Organizational Development",
    "sub_category": "Fundraising",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Build a diversified fundraising strategy for [ORGANIZATION TYPE] in [REGION]. Include: (1) Donor mapping table, (2) Revenue mix recommendation, (3) Top 5 funding opportunities with deadlines, (4) Capacity requirements, (5) Donor dependency risk analysis. Western Balkans context.",
    "when_to_use": "Supporting CSO fundraising strategy.",
    "example_output": "Donor mapping table + revenue mix chart + 5 opportunities ranked by fit",
    "tags": [
      "fundraising",
      "CSO",
      "strategy",
      "donors",
      "EU",
      "grants"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-095",
    "name": "Custom Taxonomy Design for CSO Document Management",
    "category": "Organizational Development",
    "sub_category": "Knowledge Management",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Design a custom document-management taxonomy for [ORGANIZATION / PROJECT]. Use the actual file types and workflows provided in [INPUT]. Create main categories, subcategories, document types, metadata fields, naming conventions, retention rules, ownership, access level, and recommended folder or database structure. Optimize for EU-funded project documentation, M&E evidence, donor reporting, GDPR-aware storage, and fast retrieval.",
    "when_to_use": "When redesigning a document management system for a CSO, NGO, consultancy, or EU-funded project archive.",
    "example_output": "Taxonomy table with category, subcategory, document type, naming convention, metadata, retention rule, owner, and access level.",
    "tags": [
      "taxonomy",
      "document-management",
      "organizational-development",
      "knowledge-management",
      "GDPR",
      "EU-projects"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-064",
    "name": "NGO Human Rights Project Design Framework",
    "category": "Organizational Development",
    "sub_category": "Programme Design",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Design [/ Review and improve] a civil society project for [ORGANISATION] in [COUNTRY/REGION].\n\nProblem area: [HUMAN RIGHTS ISSUE / THEMATIC FOCUS]\nTarget population: [BENEFICIARIES AND RIGHTS-HOLDERS]\nFunding context: [DONOR IF KNOWN, e.g. EU CERV / EIDHR / bilateral]\nDuration: [MONTHS]\n\nDeliver:\n1. Problem analysis (root causes, contributing factors, systemic barriers)\n2. Theory of Change (if…then logic, key assumptions, change pathway)\n3. Logframe skeleton (Overall Objective → Specific Objectives → Outputs → Activities)\n4. Implementation approach (direct delivery / capacity building / advocacy / litigation / research)\n5. Partnership structure (lead, implementing partners, target groups, duty-bearers)\n6. Cross-cutting considerations (gender, inclusion, do-no-harm, safeguarding)\n7. Key risks and mitigation\n\nApply results-based management. Flag any logical gaps directly.",
    "when_to_use": "Designing or improving civil society projects in human rights, rule of law, gender equality, or democratic governance.",
    "example_output": "Full project architecture: problem analysis, ToC, logframe skeleton, implementation approach, partnership structure, and risk mitigation",
    "tags": [
      "NGO",
      "human rights",
      "project design",
      "civil society",
      "ToC",
      "logframe",
      "Western Balkans",
      "EU"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-083",
    "name": "EU PRAG 2025 Internal Knowledge Assistant (Procurement & Grants Compliance)",
    "category": "Organizational Development",
    "sub_category": "Proposal Writing",
    "type": "System Prompt",
    "output_type": "System Prompt",
    "quality_score": 5,
    "source_platform": "Gemini",
    "version": "v1",
    "prompt": "Normative hierarchy and sources\nTreat the grant/contract (Special Conditions, General Conditions, annexes) and applicable law as the highest authority.\nImmediately after that, apply PRAG 2025 and related official EU guidance (e.g. procurement and grant guidelines for external actions, Financial Regulation principles).\nRecognise that different calls, instruments or management modes (direct, indirect, shared) may introduce specific derogations or stricter rules; always flag this and advise the user to confirm in their contract package and donor communications.\nInternal organisational procedures are used to operationalise donor rules but may not contradict them; when there is tension, you clearly explain that donor rules prevail and suggest how internal procedures could be adjusted.\n\nRisk posture and general behaviour\nYou are explicitly conservative and risk-averse: if more than one interpretation is plausible, prioritise the interpretation that is safest in terms of donor compliance, future audits and reputational risk.\nYou never suggest workarounds, loopholes or ways to game PRAG, procurement rules, eligibility rules or audits.\nYou never recommend back-dating documents, fabricating offers, or hiding errors. If users hint at such options, you instead explain the risks and propose transparent corrective actions and donor communication.\nWhenever information is incomplete or context-dependent, you: explicitly say what depends on the specific contract and country context; provide generic PRAG-based practice; recommend checking the contract, PRAG 2025, and if needed the donor/contracting authority.\n\nThematic scope\nYou primarily answer questions on:\n- Procurement under EU external actions: procedures and thresholds, market research, tendering (RFQ, negotiated procedures, open tenders), evaluation, award, contract management, and modifications.\n- Grant procedures and management: calls for proposals, eligibility of applicants and actions, partnership/consortium rules, sub-granting, visibility, reporting, audits, and closure under PRAG 2025.\n- Eligibility of costs and financial rules: direct/indirect costs, simplified cost options, procurement-linked eligibility, budget flexibility and amendment thresholds, exchange rates, and audit documentation.\n- Cross-cutting issues: conflicts of interest, anti-fraud and anti-corruption safeguards, due diligence on partners and suppliers, data protection, safeguarding and security considerations for human rights work.\n\nHow you reason and respond\nWhen answering a question:\n1. Clarify context: Restate situation using donor/instrument, management mode, contract type, project stage, and user role. Ask 1-3 clarification questions if key elements are missing.\n2. Explain the applicable rules: Summarise relevant PRAG 2025 and contract-based rules in plain language. Distinguish mandatory vs recommended vs prohibited.\n3. Translate rules into steps: Provide numbered steps or checklists. Explicitly mention what to document to be audit-ready.\n4. Flag risks and escalation points: Call out high-risk areas (single-source procurement above thresholds, insufficient competition, weak documentation, major budget reallocations, retroactive contract changes, irregularities).\n5. Stay within your limits: Make explicit when providing a generic PRAG-based interpretation, not a binding legal opinion.\n\nStyle: Clear, accessible language for non-lawyers. Short sections and bullet points. Tiny anonymised examples where helpful.\n\nRed lines: Do not assist in drafting deceptive justifications, hiding non-compliance, retaliating against whistle-blowers, or weakening due-diligence or safeguarding measures.\n\nYour overarching goal is to help the organisation make careful, well-documented, PRAG-2025-aligned decisions that will withstand donor scrutiny and audits while supporting human-rights-based civil society action.",
    "when_to_use": "Use as a system prompt to configure an AI assistant for EU external action procurement and grant compliance. Covers PRAG 2025 rules, procurement thresholds, eligibility, cost rules, sub-granting, audit documentation, and risk-averse compliance guidance.",
    "example_output": "Step-by-step procurement checklists, PRAG 2025 compliant tender procedures, eligibility assessments, budget amendment guidance, audit-ready documentation advice.",
    "tags": [
      "eu-grants",
      "prag-2025",
      "procurement",
      "compliance",
      "grant-management",
      "audit",
      "civil-society",
      "risk-management",
      "external-actions"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-029",
    "name": "Strategic Plan Builder",
    "category": "Organizational Development",
    "sub_category": "Strategic Planning",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Facilitate a strategic planning process for [ORGANIZATION]. Structure: (1) SWOT, (2) Mission/Vision alignment, (3) Strategic priorities max 4, (4) 3-year objectives per priority, (5) Resourcing, (6) MEL framework, (7) Governance. Apply RBM throughout.",
    "when_to_use": "Supporting CSOs with organizational strategic planning.",
    "example_output": "7-section strategic plan document with SWOT table and MEL framework",
    "tags": [
      "strategic planning",
      "OD",
      "CSO",
      "RBM",
      "organizational"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-097",
    "name": "Phased Implementation Plan Generator for CSO Projects",
    "category": "Project Management",
    "sub_category": "Implementation Planning",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 5,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Create a phased implementation plan for [PROJECT / SYSTEM / ORGANIZATIONAL INITIATIVE]. Define phases, timeline, objectives, key activities, milestones, deliverables, owners, dependencies, risks, mitigation measures, success criteria, and decision gates. Include a lean MVP path, a full rollout path, and a monitoring cadence. Use practical language suitable for CSO teams and donor-facing planning.",
    "when_to_use": "When launching a new project, system, workflow automation, or organizational initiative that needs clear phases and milestones.",
    "example_output": "Implementation roadmap with phases, milestones, deliverables, owners, dependencies, risks, success criteria, and monitoring rhythm.",
    "tags": [
      "project-management",
      "implementation-plan",
      "CSO",
      "milestones",
      "roadmap",
      "change-management"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-032",
    "name": "Stakeholder Mapping & Engagement Plan",
    "category": "Project Management",
    "sub_category": "Stakeholder Analysis",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Identify and categorize stakeholders for [PROJECT/PROGRAMME]. For each: interest in project, influence level (low/medium/high), potential impact, and proposed engagement strategy (inform, consult, partner). Present in table and summarise key insights.",
    "when_to_use": "Project planning and proposal development.",
    "example_output": "Stakeholder table with 4 columns + paragraph of strategic insights",
    "tags": [
      "stakeholder",
      "analysis",
      "engagement plan",
      "mapping"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-033",
    "name": "Work Breakdown Structure Generator",
    "category": "Project Management",
    "sub_category": "Work Planning",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Create a detailed WBS for [PROJECT]. Break deliverables into phases and tasks. For each task: timeline, responsible person/team, dependencies, and expected outputs. Present as a hierarchical table.",
    "when_to_use": "Start of a project or proposal to plan tasks.",
    "example_output": "Hierarchical table with 4 columns, indented task structure, and timeline column",
    "tags": [
      "WBS",
      "project management",
      "work planning",
      "tasks",
      "timeline"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-055",
    "name": "Adversarial Test Case Generator",
    "category": "Prompt Engineering",
    "sub_category": "Adversarial Testing",
    "type": "Meta-Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "Generate adversarial test cases for the following prompt: [PASTE PROMPT]\nCreate 5 edge-case inputs designed to break, confuse, or produce poor outputs. For each: (1) Input scenario, (2) Expected failure mode, (3) Suggested prompt fix. Present as a table: Test case | Failure mode | Fix",
    "when_to_use": "Stress-testing any prompt before deploying in a library or automated workflow.",
    "example_output": "5-row adversarial test table with failure modes and suggested fixes",
    "tags": [
      "adversarial",
      "testing",
      "edge cases",
      "prompt engineering",
      "QA"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-071",
    "name": "Three-Layer System Prompt Constructor",
    "category": "Prompt Engineering",
    "sub_category": "Consistency Design",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Build a three-layer system prompt for the following assistant or use case:\n\nUse case: [DESCRIBE THE ASSISTANT, e.g. grant compliance reviewer / donor communications bot / M&E reporting assistant]\nAudience it serves: [WHO TALKS TO IT]\nCritical behaviours it must get right every time: [LIST 3-5]\n\nDeliver a complete system prompt using this structure:\n\n## IDENTITY\nYou are [Name], a [specific role] at/for [Organisation/Context].\nYou are [3 tone adjectives, e.g. professional, direct, evidence-grounded].\n[1 sentence on communication style — formality, pronouns, how to refer to organisation].\n\n## CONSTRAINTS\nYou MUST:\n- [Required behaviour 1 — specific, testable]\n- [Required behaviour 2]\n- [Required behaviour 3]\n\nYou MUST NOT:\n- [Forbidden behaviour 1 — no invented policies]\n- [Forbidden behaviour 2 — no promises outside stated scope]\n- [Forbidden behaviour 3]\n\n## CONTEXT (Ground Truth — cite only these facts)\n[Policy/Fact 1]: [Precise value — not vague]\n[Policy/Fact 2]: [Value]\n[Escalation path]: [Exact contact/process]\n\nKey principle: IDENTITY anchors tone, CONSTRAINTS prevent policy invention, CONTEXT replaces guessing with facts. All three together = consistent, auditable, shippable behaviour.",
    "when_to_use": "Any AI feature, assistant, or recurring workflow where consistent tone, policy-compliance, and predictable behaviour matter. Vague prompts → improvised behaviour → user mistrust.",
    "example_output": "System prompt with IDENTITY (who, tone), CONSTRAINTS (must/must-not rules), and CONTEXT (verified facts only) — same question gets same policy-grounded answer every time",
    "tags": [
      "system prompt",
      "consistency",
      "role",
      "identity",
      "constraints",
      "context",
      "production",
      "reliability",
      "prompt engineering"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-072",
    "name": "AI Output Consistency Tester",
    "category": "Prompt Engineering",
    "sub_category": "Consistency Testing",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Design a consistency testing protocol for the following AI prompt or system:\n\nPrompt / system to test: [PASTE THE PROMPT OR DESCRIBE THE SYSTEM]\nBehaviours that must be consistent across every run: [LIST 4-6 SPECIFIC ASSERTIONS]\n\nFor each assertion, write a testable check:\nAssertion 1: [Does the response mention X?] → check: look for keyword/phrase Y in output\nAssertion 2: [Does it avoid inventing Z?] → check: absence of pattern P\nAssertion 3: [Does it always include escalation path?] → check: presence of contact/phrase\n...\n\nTesting protocol:\n1. Send the same test question N times (recommended: 10-20 runs)\n2. Score each response against each assertion (pass/fail)\n3. Calculate consistency score per assertion: (passes / N) × 100%\n4. Flag any assertion below 90% as FRAGILE — system prompt needs tightening on that dimension\n\nOutput format:\n| Assertion | Score (%) | Fragile? | Fix suggestion |\n\nKey principle: a score below 90% means real users will see inconsistent behaviour. Ship nothing without this test. Use it after every prompt change.",
    "when_to_use": "Before shipping any AI feature to production — or when a system prompt has been changed. Proves consistency programmatically with assertion-based scoring.",
    "example_output": "Consistency report: each assertion (e.g. 'mentions 30-day policy') scored 0-100% across N runs. Any score below 90% means the system prompt is fragile on that dimension and needs tightening.",
    "tags": [
      "consistency",
      "testing",
      "system prompt",
      "QA",
      "assertion",
      "scoring",
      "production",
      "reliability",
      "prompt engineering"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-053",
    "name": "Constraint-Based Prompt Builder",
    "category": "Prompt Engineering",
    "sub_category": "Constraint-Based Design",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Design a prompt for: [DESCRIBE TASK]\nApply these constraint layers:\n- Role constraint: who the model should be\n- Output format constraint: exact structure required\n- Scope constraint: what to include AND exclude\n- Quality constraint: self-evaluation criteria\n- Failure mode constraint: what errors to avoid\nPresent the final prompt with each constraint commented.",
    "when_to_use": "High-precision prompts for recurring high-stakes tasks.",
    "example_output": "Annotated prompt with 5 constraint layers labelled inline",
    "tags": [
      "constraint",
      "prompt engineering",
      "precision",
      "design",
      "meta"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-051",
    "name": "Few-Shot Example Generator",
    "category": "Prompt Engineering",
    "sub_category": "Few-Shot Learning",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "GPT",
    "version": "v01",
    "prompt": "Add few-shot examples to the following prompt: [PASTE PROMPT]\nGenerate 3 input-output example pairs that: use realistic but anonymised data, demonstrate the correct format and tone, cover different scenarios/edge cases.\nFormat: Example N: Input → [text] | Output → [text]",
    "when_to_use": "Upgrading any prompt by adding concrete examples.",
    "example_output": "3 input-output pairs covering different scenarios, formatted and ready to embed",
    "tags": [
      "few-shot",
      "examples",
      "prompt engineering",
      "quality",
      "training"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-070",
    "name": "Multi-Step Delegation Pipeline Builder",
    "category": "Prompt Engineering",
    "sub_category": "Multi-Step Delegation",
    "type": "Chain of Thought",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Design a multi-step delegation pipeline for the following complex task:\n\nTask: [DESCRIBE THE FULL TASK, e.g. analyse customer feedback and produce an executive summary]\n\nBreak it into steps where each model call has ONE job:\n\nStep 1 — EXTRACT:\n- System prompt: You are a [data extraction specialist]. Your ONLY job is to read raw input and extract [what]. Do NOT analyse, evaluate, or recommend. Output structured JSON.\n- Input: [RAW SOURCE DATA]\n- Output: [STRUCTURED INTERMEDIATE ARTEFACT]\n\nStep 2 — ANALYSE:\n- System prompt: You are a [senior analyst]. You receive pre-extracted structured data and produce [depth analysis: severity, impact, priority, scores]. NO writing yet.\n- Input: Step 1 output\n- Output: [ANALYSIS JSON]\n\nStep 3 — SYNTHESISE:\n- System prompt: You are a [communication specialist writing for AUDIENCE]. Transform the analysis into [output format]. Rules: lead with [most important thing], name specific [actions/numbers/findings], end with [next steps].\n- Input: Step 1 + Step 2 output\n- Output: [FINAL HUMAN-READABLE DELIVERABLE]\n\nFor parallel steps (independent analysis): run Step 2a, 2b, 2c concurrently → merge in Step 3.\n\nKey insight: each step receives clean structured input from the previous step → no hallucinated context → each step is as good as it can possibly be.",
    "when_to_use": "Any task where a single mega-prompt produces shallow or generic output. One prompt, one cognitive mode — quality multiplies when steps specialize.",
    "example_output": "3-step pipeline: Extract specialist reads raw data → Analyst evaluates with depth → Writer produces specific, data-backed output. ~3x quality improvement vs single-shot.",
    "tags": [
      "multi-step",
      "delegation",
      "pipeline",
      "quality",
      "prompt engineering",
      "extract analyse synthesise",
      "production"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-054",
    "name": "Output Format Specifier",
    "category": "Prompt Engineering",
    "sub_category": "Output Format Specification",
    "type": "Meta-Prompt",
    "output_type": "Framework / Template",
    "quality_score": 4,
    "source_platform": "GPT",
    "version": "v01",
    "prompt": "Add a precise output format specification to the following prompt: [PASTE PROMPT]\nThe format block should specify: Structure (table/list/paragraph/JSON/markdown), section headings, max length per section, data types for table columns, an example of one correctly formatted output row. Append the format specification block.",
    "when_to_use": "Eliminating format inconsistency from any prompt.",
    "example_output": "Original prompt + appended format spec block with example row",
    "tags": [
      "output format",
      "specification",
      "prompt engineering",
      "consistency",
      "automation"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-056",
    "name": "Persona-Enriched Task Prompt Builder",
    "category": "Prompt Engineering",
    "sub_category": "Persona Enrichment",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Enrich the following basic task prompt by adding a detailed persona layer: [PASTE BASIC PROMPT]\nThe persona should include: role title and years of experience, specific domain expertise and methodologies, decision-making style (e.g. risk-averse, evidence-based), epistemic style (flags uncertainty, cites sources), communication style aligned with [TARGET AUDIENCE]. Output: enriched prompt with persona block prepended.",
    "when_to_use": "Upgrading generic prompts with rich persona context.",
    "example_output": "Enriched prompt with 5-element persona block prepended to original task",
    "tags": [
      "persona",
      "role",
      "prompt engineering",
      "enrichment",
      "quality"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-069",
    "name": "Schema-Driven Structured Output Enforcer",
    "category": "Prompt Engineering",
    "sub_category": "Schema-Driven Output",
    "type": "Task Prompt",
    "output_type": "Code / Script",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Design a schema-enforced output system for the following AI task:\n\nTask: [DESCRIBE WHAT THE AI SHOULD EXTRACT OR PRODUCE]\nExpected output fields: [LIST FIELDS WITH TYPES, e.g. sentiment: string enum, score: integer 1-10, themes: array of strings]\n\nDeliver:\n1. Tool/function schema definition (JSON) — declare every required field with type, enum where applicable, and a precise description the model uses to fill correctly\n2. API call pattern using tool_choice to FORCE the model to call your schema (not respond in free text)\n3. Response extraction code — reads from tool_calls/tool_use block, already a Python dict, no json.loads needed\n4. Validation layer — check types, ranges, and content quality\n5. Retry loop — up to 3 attempts, feed previous errors back to the model so it self-corrects\n6. Safe fallback — if all retries fail, return a neutral default and log for human review\n\nKey principle: define the shape once as a schema, force the call, read from block.input. Never parse free text.\nTarget: 0% format-related crashes in production.",
    "when_to_use": "Any AI feature where inconsistent output shapes crash downstream code or parsers. Transforms 40% crash rate to 0%.",
    "example_output": "Tool schema definition + API call pattern that guarantees structured JSON every time — no markdown fences, no field-name surprises",
    "tags": [
      "schema",
      "structured output",
      "tool_use",
      "JSON",
      "prompt engineering",
      "production",
      "reliability"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-052",
    "name": "Zero-Shot Task Decomposer",
    "category": "Prompt Engineering",
    "sub_category": "Zero-Shot Decomposition",
    "type": "Chain of Thought",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "Break down the following complex task into a step-by-step zero-shot prompt sequence: [PASTE COMPLEX TASK]\nFor each step: (1) Write a self-contained prompt, (2) State what input it requires and what output it produces, (3) Indicate if the output feeds the next step. Present as a numbered chain.",
    "when_to_use": "Converting a large complex task into a chain of smaller precise prompts.",
    "example_output": "Numbered prompt chain with input/output annotations per step",
    "tags": [
      "zero-shot",
      "decomposition",
      "prompt chain",
      "task planning",
      "PE"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-007",
    "name": "Budget Narrative Writer",
    "category": "Proposal Writing",
    "sub_category": "Budget",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 3,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Write a budget narrative for the following budget line: [BUDGET LINE + AMOUNT]. Justify the cost in 2-3 sentences: what it covers, why it is necessary, how the amount was calculated, and which activity it supports. Tone: precise, donor-auditable.",
    "when_to_use": "Writing EU budget narratives line by line.",
    "example_output": "2-3 sentence justification per budget line, auditable and precise",
    "tags": [
      "budget",
      "narrative",
      "EU",
      "donor",
      "compliance"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-077",
    "name": "EU Concept Note Writer (Full Template)",
    "category": "Proposal Writing",
    "sub_category": "EU Concept Note",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Draft a complete EU concept note for the following action.\n\nProject basics:\n- Action title: [ACTION TITLE]\n- Lead applicant: [ORGANISATION NAME], [COUNTRY]\n- Co-applicants (if any): [LIST]\n- Call for proposals: [CALL REFERENCE]\n- Donor: [CERV / IPA / EIDHR / Erasmus+ / other EU instrument]\n- Requested contribution: EUR [AMOUNT]\n- Duration: [MONTHS]\n- Target country/region: [COUNTRY / REGION, e.g. Western Balkans / North Macedonia]\n\nThematic focus: [HUMAN RIGHTS / GENDER EQUALITY / CIVIL SOCIETY / RULE OF LAW / DEMOCRATIC GOVERNANCE / other]\n\n---\n\nSECTION 1.1 — SUMMARY TABLE (no page limit)\n\nObjectives:\n- Overall objective (Impact): [WHAT LONG-TERM CHANGE DOES THE ACTION CONTRIBUTE TO?]\n- Specific objective(s) (Outcome): [WHAT DIRECT CHANGE WILL THE ACTION ACHIEVE IN THE TARGET GROUP?]\n\nTarget groups: [WHO DIRECTLY BENEFITS FROM PROJECT ACTIVITIES?]\nFinal beneficiaries: [WHO BENEFITS INDIRECTLY IN THE LONG TERM?]\nExpected outputs / Results: [LIST KEY DELIVERABLES AND OUTPUTS]\nMain activities / Work Packages: [LIST ACTIVITY CLUSTERS]\n\n---\n\nSECTION 1.2 — DESCRIPTION OF THE ACTION (max 2 pages, Arial 10, single spacing, 2cm margins)\n\nDraft the following subsections in order:\ni. Background and context — sector/country/regional context, key challenges, any analysis informing design\nii. Objectives — explain the overall and specific objectives from Section 1.1\niii. Key stakeholder groups — their attitudes, any consultations held\niv. Intervention logic — expected outputs, outcomes, impact, main risks and assumptions\nv. Type of activities — description and linkages between activity clusters\nvi. Cross-cutting issues — how the action mainstreams: human rights, gender equality, democracy, good governance, youth, children’s rights, environmental sustainability (include only those relevant)\nvii. Timeframe — broad timeline and any specific scheduling factors\n\nTone: formal, evidence-based, results-oriented. Avoid passive voice. Use EU PCM terminology throughout.\n\n---\n\nSECTION 1.3 — RELEVANCE OF THE ACTION (max 3 pages, same format)\n\n1.3.1 Relevance to call objectives:\ni. Relevance to the objective(s) and priority(ies) of the call\nii. Relevance to specific subthemes / sectors / areas and requirements (including local ownership)\niii. Which expected results from the call guidelines will be addressed\n\n1.3.2 Relevance to target country/region needs:\ni. Specific pre-project situation with quantified data where possible\nii. Detailed problem analysis — how problems are interrelated at all levels\niii. Relevant national/regional/local plans and how the action relates to them\niv. If continuation of a previous action: how it builds on previous results\nv. If part of a larger programme: fit, coordination, synergies (especially with EC)\nvi. Complementarity with EU and other donor initiatives — avoid duplication\n\n1.3.3 Target groups and beneficiaries:\ni. Description of each group (quantified where possible) including selection criteria\nii. Needs and constraints of each group\niii. Relevance of the proposal to those needs\niv. Participatory process ensuring their involvement\n\n1.3.4 Added value:\nAny specific added-value elements — public-private partnerships, innovation, best practice, multiplier effect\n\n---\n\nQuality rules:\n- Strictly respect page limits (2 pages for 1.2, 3 pages for 1.3)\n- Each section must be in proportion to its evaluation weight (see call evaluation grid)\n- Full information — evaluation is based solely on what is provided\n- Clear, direct language to facilitate evaluation\n- Reference [CALL REFERENCE] throughout where relevant",
    "when_to_use": "First stage of any EU grant application — concept note submission before full proposal. High-stakes entry point. Covers cover page summary, description of action (max 2 pages), and relevance (max 3 pages).",
    "example_output": "Complete EU concept note: cover table (objectives, target groups, outputs, activities), 2-page action description, 3-page relevance section — donor-compliant, results-oriented, Western Balkans context",
    "tags": [
      "EU",
      "concept note",
      "proposal",
      "CERV",
      "IPA",
      "EIDHR",
      "first stage",
      "PCM",
      "RBM",
      "call for proposals"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-005",
    "name": "EU Proposal Section Writer",
    "category": "Proposal Writing",
    "sub_category": "EU Funding",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Write the [SECTION NAME] section of an EU proposal for [DONOR]. Applicant: [ORG NAME], Western Balkans context. Tone: formal, evidence-based, results-oriented. Max [WORD COUNT] words. Reference [RELEVANT FRAMEWORK]. End with a transition sentence to the next section.",
    "when_to_use": "Modular EU proposal drafting.",
    "example_output": "Draft section of 300-800 words in EU formal register with transition sentence",
    "tags": [
      "EU",
      "proposal",
      "CERV",
      "IPA",
      "EIDHR",
      "drafting"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-006",
    "name": "Proposal Logframe Constructor",
    "category": "Proposal Writing",
    "sub_category": "Logframe Design",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Design a logframe for the following project: [PASTE CONCEPT NOTE]. Include 1 Overall Objective, 2 Specific Objectives, 4-6 Outputs per Objective, Activities per Output. For each indicator: SMART formulation, baseline, target, and means of verification. Flag assumptions and risks at each level.",
    "when_to_use": "After concept note is approved.",
    "example_output": "Full logframe table with 4-level hierarchy, SMART indicators, and risk column",
    "tags": [
      "logframe",
      "EU",
      "proposal",
      "SMART",
      "indicators"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-008",
    "name": "Proposal QA Checklist Runner",
    "category": "Proposal Writing",
    "sub_category": "QA & Review",
    "type": "Meta-Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "You are a senior EU grants reviewer. Review the attached proposal draft and evaluate: (1) alignment with call objectives [CALL REF], (2) logframe coherence, (3) budget reasonableness, (4) risk analysis quality, (5) sustainability plan, (6) administrative compliance. Output: criterion | finding | recommendation | priority. Flag eliminatory weaknesses FIRST.",
    "when_to_use": "Final quality gate before EU submission.",
    "example_output": "Compliance matrix with 6 criteria, findings, and priority ratings",
    "tags": [
      "QA",
      "proposal",
      "EU",
      "review",
      "compliance",
      "checklist"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-045",
    "name": "Audience-Adaptive Rewriter",
    "category": "Rephrasing",
    "sub_category": "Audience Adaptation",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "GPT",
    "version": "v01",
    "prompt": "Rewrite the following text: [PASTE TEXT]\nTarget audience: [DEFINE AUDIENCE]\nTone target: [DEFINE TONE]\nLength constraint: [MAX WORDS]\nOutput: (1) Rewritten version, (2) List of the 3 most significant changes and why each was made.",
    "when_to_use": "Adapting reports, proposals, or communications for a specific reader.",
    "example_output": "Rewritten text + 3-item change log with rationale per change",
    "tags": [
      "rephrasing",
      "audience",
      "adaptation",
      "tone",
      "writing"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-046",
    "name": "Register Shifter — Formal to Plain",
    "category": "Rephrasing",
    "sub_category": "Register Shifting",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "Rewrite the following formal text in plain language: [PASTE TEXT]\nRules: Replace jargon with everyday equivalents (provide glossary at end), break sentences > 20 words into two, use active voice, do not remove data. Output: plain-language version + glossary.",
    "when_to_use": "Making donor reports or M&E documents accessible to non-specialist audiences.",
    "example_output": "Plain-language rewrite + jargon-to-plain glossary table",
    "tags": [
      "rephrasing",
      "plain language",
      "accessibility",
      "register",
      "editing"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-047",
    "name": "Simplifier & Plain Language Converter",
    "category": "Rephrasing",
    "sub_category": "Simplification",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Simplify the following text for [TARGET, e.g. Grade 8 / non-native English speaker]: [PASTE TEXT]\nRequirements: use Flesch-Kincaid as guide (target > 60), replace all technical terms, use bullet points where helpful, keep all facts intact. Flag facts that could not be simplified.",
    "when_to_use": "Creating beneficiary-facing communications or accessible public documents.",
    "example_output": "Simplified text with reading level score + list of flagged untranslatable facts",
    "tags": [
      "rephrasing",
      "simplification",
      "plain language",
      "accessibility",
      "community"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-021",
    "name": "Rapid Evidence Review Prompt",
    "category": "Research & Analysis",
    "sub_category": "Desk Research",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Conduct a rapid evidence review on [TOPIC] with focus on [REGION/COUNTRY]. Include: (1) Definition and scope, (2) Key statistics (with sources), (3) Policy and legal framework, (4) Civil society response, (5) Gaps and research needs. Max 800 words. Flag findings older than 3 years.",
    "when_to_use": "Background research during proposal development or evaluation prep.",
    "example_output": "800-word structured review with source citations and recency flags",
    "tags": [
      "research",
      "evidence",
      "analysis",
      "desk review",
      "CSO"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-075",
    "name": "Variance Bridge Financial Analysis Pack",
    "category": "Research & Analysis",
    "sub_category": "Financial Analysis",
    "type": "Chain of Thought",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Conduct a variance bridge financial analysis for [METRIC: gross margin / EBITDA / revenue] deterioration in [CONTEXT].\n\nDatasets available: [DESCRIBE: financial data columns, time period]\n\nStep 1 — FINANCIAL TREND:\nCalculate weekly/monthly [metric]. Identify the trend over [time period]. Identify when deterioration begins. Highlight which cost/revenue components increased most. Do not interpret yet — only describe.\n\nStep 2 — VARIANCE BRIDGE:\nExplain the [metric] change by grouping effects into:\n- Price effect: [revenue per unit change]\n- Volume effect: [change in units/orders processed]\n- Mix effect: [shift in product/service type composition]\n- Cost effects: [labour / logistics / materials / overhead changes]\nUse evidence from the dataset to support each effect quantitatively.\n\nStep 3 — OPERATIONAL INTEGRATION:\nLink the financial deterioration to operational root causes [from a preceding driver tree analysis or context]. For each financial variance component: identify the operational root cause, explain the causal chain from operations to financial impact.\n\nStep 4 — CEO-READY NARRATIVE:\nCreate a CEO-ready explanation structured as:\n- What happened operationally\n- How this translated into financial performance\n- What the biggest financial driver is (€ impact)\n- What management should prioritise (3 actions, specific owners)",
    "when_to_use": "When gross margin or profitability is deteriorating and you need to decompose the financial variance into its drivers, link to operational causes, and communicate clearly to senior leadership.",
    "example_output": "4-step chain: margin trend → variance bridge (price/volume/mix/cost effects) → operational integration → CEO-ready narrative with root causes and management priorities",
    "tags": [
      "variance bridge",
      "financial analysis",
      "gross margin",
      "price effect",
      "volume effect",
      "mix effect",
      "cost effect",
      "CFO",
      "CEO",
      "operations",
      "research"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-081",
    "name": "AI-Driven Growth Experiment Design: Insight → Hypothesis → Experiment Workflow",
    "category": "Research & Analysis",
    "sub_category": "Growth & Product",
    "type": "Workflow",
    "output_type": "Framework",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "You are a growth experiment designer using the Insight → Hypothesis → Experiment → Learning cycle. I will give you a domain and user context. Run through all four steps:\n\nSTEP 1 — EXTRACT INSIGHTS\nAnalyze the provided user discussion/feedback data.\nIdentify: Behavioural insights | Product experience insights | Pain points | Hidden opportunities.\nQuote 2–3 exact user sentences that best surface each insight category.\n\nSTEP 2 — TRANSLATE INTO HYPOTHESES\nFor the 2–3 most interesting insights, generate testable hypotheses.\nEach hypothesis must include:\n- The insight behind it\n- The hypothesis statement\n- Why it might matter for the product, brand, or business\n- The specific behaviour change you expect to see\n\nSTEP 3 — CREATE AI PERSONAS\nGenerate 3 realistic user personas for the context provided.\nEach persona: Name | Age | Role/background | Situation description | Key goals | Main challenges | Typical behaviour related to the problem.\nMake personas clearly different from each other. Keep them concise and realistic.\n\nSTEP 4 — DESIGN EXPERIMENTS\nUsing the personas, design experiments to validate or invalidate the hypothesis.\nFor each persona propose 2–3 experiments. For every experiment include:\n- Experiment name\n- Idea/concept (what we test)\n- Prototype or method (landing page, ad test, concept product, survey, store test)\n- Key metric to measure (CTR, purchase intent, sign-ups, conversion, willingness to pay)\n- Signal that VALIDATES the hypothesis\n- Signal that DISPROVES the hypothesis\nFocus on simple experiments runnable within 1–4 weeks. Think like a startup testing product-market fit.\n\nSTEP 5 — PROTOTYPE BRIEF\nFor the strongest experiment, provide:\n- Landing page structure (sections, headline ideas, CTA)\n- Visual style brief (scene concept, subject, environment, format)\n- Key metric to validate the hypothesis\n\nOutput: structured, clear, concise. Each step as a distinct section.",
    "when_to_use": "Use when designing structured growth experiments from user feedback or community data. Useful for product teams, NGO programme designers testing interventions, or any context requiring evidence-based hypothesis testing. Produces insight extraction, personas, experiment designs, and a prototype brief.",
    "example_output": "Step 1: 4 insight categories with user quotes. Step 2: 2 hypotheses with business rationale. Step 3: 3 differentiated personas. Step 4: 6 experiments (2 per persona) with metrics. Step 5: Landing page brief for top experiment.",
    "tags": [
      "growth experiments",
      "hypothesis",
      "user research",
      "product",
      "AB testing",
      "insight extraction",
      "personas",
      "experiment design",
      "AI-driven",
      "workflow"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-020",
    "name": "Constitutional Court Research Prompt",
    "category": "Research & Analysis",
    "sub_category": "Legal Research",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Search the Constitutional Court of [COUNTRY] database for cases involving [TOPIC] decided between [DATE RANGE]. For each case: extract case number, decision date, complainant type, legal basis, decision outcome, and key reasoning. Present in a structured table sorted by date.",
    "when_to_use": "Legal research on Constitutional Court jurisprudence in Western Balkans.",
    "example_output": "Sortable table of cases with 6 columns + trend summary paragraph",
    "tags": [
      "legal research",
      "constitutional",
      "court",
      "analysis",
      "N.Macedonia"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-037",
    "name": "Comprehensive Research Summary",
    "category": "Research & Analysis",
    "sub_category": "Literature Review",
    "type": "Task Prompt",
    "output_type": "Table",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Conduct a comprehensive literature review on [TOPIC]. Search for recent academic articles, reports, and policy documents (published after [YEAR]). Summarize key findings, methodologies, recommendations. Provide a table: citation, author, year, key findings, relevance. Include a narrative synthesis.",
    "when_to_use": "In-depth understanding for proposals, reports, or strategic planning.",
    "example_output": "Citation table + narrative synthesis paragraph + gap identification",
    "tags": [
      "literature review",
      "research",
      "analysis",
      "citations",
      "summary"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-074",
    "name": "Driver Tree Root Cause Analysis Pack",
    "category": "Research & Analysis",
    "sub_category": "Operational Analysis",
    "type": "Chain of Thought",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Conduct a driver tree root cause analysis for [METRIC/KPI] that is [declining/deteriorating] in [CONTEXT: operations / programme delivery / service performance].\n\nDataset: [DESCRIBE AVAILABLE DATA — columns, time period, granularity]\n\nStep 1 — KPI CALCULATION & TREND:\nCalculate [KPI formula]. Identify the overall trend over [time period]. Highlight when performance starts deteriorating. Identify what changed vs the first [N] baseline periods. Be concrete — only describe what changed, do not jump to conclusions yet.\n\nStep 2 — DRIVER TREE:\nUsing driver tree logic, structure all possible drivers of [KPI] grouped under:\n- [CATEGORY 1, e.g. Throughput / Capacity]\n- [CATEGORY 2, e.g. Quality / Accuracy]\n- [CATEGORY 3, e.g. Lead Time / Speed]\nMap relevant data columns to the appropriate drivers.\n\nStep 3 — HYPOTHESES:\nPropose 6 plausible root-cause hypotheses. For each: specify which driver it affects, explain the mechanism, indicate which data points support it, classify as short-term shock or structural issue.\n\nStep 4 — RANKING:\nRank the 6 hypotheses by: (1) Likelihood based on data evidence, (2) Operational impact. Explain reasoning step by step.\n\nStep 5 — EXECUTIVE NARRATIVE:\nCreate an executive-ready explanation structured as: What happened | Why it happened (top 2-3 drivers) | What matters most | What should be investigated first.",
    "when_to_use": "When a key performance indicator is declining and you need to move from data observation to structured root cause hypotheses to management recommendations — in operations, programme delivery, or service performance.",
    "example_output": "5-step chain: KPI trend → driver tree map → 6 competing hypotheses → likelihood/impact ranking → executive narrative with top 3 drivers and management priorities",
    "tags": [
      "driver tree",
      "root cause",
      "operational analysis",
      "KPI",
      "hypotheses",
      "performance",
      "operations",
      "research",
      "management"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-096",
    "name": "AI-Driven Root Cause Analysis for NGO Performance Decline",
    "category": "Research & Analysis",
    "sub_category": "Performance Diagnosis",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v01",
    "prompt": "Act as a senior performance analyst for NGO and donor-funded programmes. Investigate why [KPI / OUTPUT / OUTCOME] is underperforming. Use a driver-tree structure covering implementation, partner performance, beneficiary engagement, data quality, budget, staffing, external context, and design assumptions. Generate competing hypotheses, rank them by likelihood and impact, identify evidence needed to confirm or reject each one, and recommend corrective actions for the next reporting period.",
    "when_to_use": "When a key performance indicator is underperforming and the team needs to diagnose why before donor reporting or adaptive management decisions.",
    "example_output": "Root-cause driver tree, ranked hypotheses, evidence checklist, and corrective action plan for the next reporting cycle.",
    "tags": [
      "root-cause-analysis",
      "performance-diagnosis",
      "M&E",
      "adaptive-management",
      "NGO",
      "driver-tree"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-041",
    "name": "Cross-Document Comparative Summary",
    "category": "Summarization",
    "sub_category": "Comparative Summary",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "You are given [N] documents: [LIST DOCUMENTS]. Summarize and compare them across: (1) Main argument or purpose, (2) Key data or evidence cited, (3) Methodology, (4) Conclusions, (5) Gaps or limitations. Present as a comparison table. Then write a 150-word synthesis.",
    "when_to_use": "Comparing donor reports, research studies, or proposal evaluations side by side.",
    "example_output": "Comparison table with 5 dimensions + 150-word synthesis paragraph",
    "tags": [
      "summarization",
      "comparison",
      "analysis",
      "documents",
      "research"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-039",
    "name": "Executive Summary Generator",
    "category": "Summarization",
    "sub_category": "Executive Summary",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "GPT",
    "version": "v01",
    "prompt": "Summarize the following document [PASTE DOCUMENT] into a concise executive summary. Structure: (1) Context and purpose (1 sentence), (2) Key findings or outputs (3-5 bullets), (3) Recommendations or next steps (2-3 bullets), (4) Critical risk or caveat (1 sentence). Max 200 words. Avoid all jargon. Write for a non-specialist senior reader.",
    "when_to_use": "Executive summaries for donor reports, board briefs, or proposal annexes.",
    "example_output": "200-word structured summary with 4 clearly labelled sections and no jargon",
    "tags": [
      "summarization",
      "executive summary",
      "donor",
      "report",
      "brief"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-040",
    "name": "Multi-Level Summary Builder",
    "category": "Summarization",
    "sub_category": "Multi-Level Summary",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "Summarize [DOCUMENT / TOPIC] at three levels:\n- Level 1 (Tweet): 1 sentence, max 280 characters\n- Level 2 (Paragraph): 80-100 words, key facts only\n- Level 3 (Brief): 300-400 words, full structured summary\nEach level must stand alone.",
    "when_to_use": "Same content in different formats for different audiences.",
    "example_output": "Three summary blocks clearly labelled L1/L2/L3, each self-contained",
    "tags": [
      "summarization",
      "multi-level",
      "brief",
      "social media",
      "donor"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-049",
    "name": "Document Version Comparator",
    "category": "Versioning",
    "sub_category": "Document Comparison",
    "type": "Task Prompt",
    "output_type": "Analysis / Research",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "Compare [DOCUMENT v1] and [DOCUMENT v2]. Produce: (1) Summary of what changed, (2) Detailed change table: Section | Change type | Old text | New text | Significance, (3) Overall assessment: is v2 stronger or weaker, and why?",
    "when_to_use": "Reviewing revised proposals, report drafts, or policy documents between versions.",
    "example_output": "Change summary + detailed 5-column table + overall quality verdict",
    "tags": [
      "versioning",
      "comparison",
      "document",
      "review",
      "change tracking"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-050",
    "name": "Iterative Refinement Protocol",
    "category": "Versioning",
    "sub_category": "Iterative Refinement",
    "type": "Chain of Thought",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Perplexity",
    "version": "v01",
    "prompt": "Improve [OUTPUT TYPE] through 3 rounds:\nRound 1: Produce a first draft of [TASK].\nRound 2: Critique the draft against [CRITERIA]. Identify top 3 weaknesses.\nRound 3: Revise to address all 3 weaknesses.\nPresent only Round 3 output and a brief improvement note (max 50 words).",
    "when_to_use": "Refined, polished output through 3 iterations.",
    "example_output": "Final polished output + 50-word improvement note",
    "tags": [
      "versioning",
      "iteration",
      "refinement",
      "quality",
      "meta-prompt"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-048",
    "name": "Prompt Version Controller",
    "category": "Versioning",
    "sub_category": "Prompt Version Control",
    "type": "Meta-Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "GPT",
    "version": "v01",
    "prompt": "Review the following prompt: [PASTE PROMPT]. Version: [vXX]. Identify: (1) What this version does well, (2) What fails or underperforms, (3) Proposed improvements with rationale. Produce version [vXX+1] with changes tracked in a changelog block.\nChangelog format: Change | Reason | Expected impact",
    "when_to_use": "Systematically improving and version-controlling prompts.",
    "example_output": "Improved prompt vXX+1 + changelog block with 3 columns",
    "tags": [
      "versioning",
      "prompt engineering",
      "improvement",
      "changelog",
      "meta"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-068",
    "name": "Lean No-Code Product Constrainer",
    "category": "Vibe Coding / Product",
    "sub_category": "Build Approach",
    "type": "System Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Favor lean no-code or low-code solutions first. Keep things practical and optimize for fast experimentation, clarity, and usability.\n\nDefault stack preference: Notion / Airtable / Zapier / Make / n8n / Google Workspace before custom code. Use custom code only when no-code cannot handle the logic, performance is critical, or scale demands it. If custom code is needed, explain why no-code fails first.\n\nFor every solution proposed:\n- State the simplest version that solves 80% of the problem\n- State what is deliberately left out of v1\n- Estimate time to implement for a non-technical user\n- Flag any maintenance overhead or dependency risks\n\nOptimize for: the user being able to test the core idea within [1 day / 1 week / 1 sprint].",
    "when_to_use": "Opening any product design or build session — sets the default constraints toward lightweight, fast, no-code-first solutions.",
    "example_output": "Solution recommendation defaulting to no-code stack before proposing custom code, with explicit rationale and estimated implementation time for non-technical user",
    "tags": [
      "no-code",
      "lean",
      "MVP",
      "product",
      "constraints",
      "build approach",
      "fast prototyping",
      "vibe coding"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-066",
    "name": "MVP & Product Specification Builder",
    "category": "Vibe Coding / Product",
    "sub_category": "Product Specification",
    "type": "Task Prompt",
    "output_type": "Framework / Template",
    "quality_score": 5,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Turn this rough idea into a testable MVP specification:\n\n[DESCRIBE YOUR IDEA IN 2-3 SENTENCES]\n\nTarget users: [WHO WILL USE THIS AND WHAT PROBLEM DOES IT SOLVE]\nConstraints: [BUDGET / TIMELINE / TECHNICAL SKILL / PREFERRED TOOLS]\nPriority: [SPEED / QUALITY / LEARNING]\n\nDeliver:\n1. Problem statement (crisp, 1 sentence)\n2. Core user flow (step-by-step, from first action to value moment)\n3. Feature set: Core (must ship) | Stretch (v2) | Out of scope\n4. Database structure: entities, key fields, relationships\n5. UI copy: key screens with exact text for buttons, labels, empty states\n6. Prompt flows (if AI-powered): trigger → input → Claude prompt → output → destination\n7. Build sequence: what to build first, second, third\n8. Handoff notes: what a developer or no-code builder needs to start immediately\n\nFavor lean no-code. Optimize for fast experimentation and clarity.",
    "when_to_use": "Turning a rough product idea into a testable MVP specification — for digital tools, internal systems, AI-powered apps, or civic tech prototypes.",
    "example_output": "Full build spec: problem statement, user flows, feature set (core vs stretch), database schema, UI copy, prompt flows, and handoff-ready implementation notes",
    "tags": [
      "MVP",
      "product",
      "specification",
      "vibe coding",
      "build",
      "UI",
      "database",
      "schema",
      "prompt flow",
      "no-code"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-079",
    "name": "Design Unified Google Drive + Notion Workspace (Two-Domain Structure)",
    "category": "Workspace & Productivity",
    "sub_category": "Architecture",
    "type": "Task Prompt",
    "output_type": "Framework",
    "quality_score": 4,
    "source_platform": "Gemini",
    "version": "v01",
    "prompt": "You are a digital workspace architect helping a human rights defender and aspiring AI engineer organize a solo digital workspace so they can spend less time hunting for files and more time thinking, creating, coding, and deciding.\n\nStack:\n- Main file storage: Google Drive (Google One paid plan)\n- Knowledge hub: Notion (free plan, with 5 MB upload limit per file)\n- Workstyle: Solo\n\nMy work has two main pillars:\n1. Human rights and civil society work (projects, M&E, advocacy, research)\n2. AI engineering and LLM learning (learning path, experiments, \"vibe code\", personal apps, meta/system prompts, prompt libraries)\n\nGoal: Design a simple, intentional structure in Google Drive and Notion that:\n- Clearly separates but connects \"Human Rights\" and \"AI / Engineering\" work\n- Gives all my AI prompts, meta/system prompts, and personal apps a proper home so they stop living in random chats and files\n- Signals that my creative and technical work matters, and supports deep focus instead of chaos\n\nYour tasks:\n1. Propose a top-level Google Drive folder structure with two main domains (\"Human Rights & Civil Society\" and \"AI / Engineering & Prompts\"), each with 3–7 subfolders\n2. Define one simple naming convention for Drive files (using date, domain, project, and short description), and give at least 10 \"messy name → improved name\" examples\n3. Design a minimal Notion structure (max 5–6 main pages/databases): Home, HR & Civil Society Projects, AI Learning Path, Prompt & App Library, Meetings & Notes — for each explain its purpose and how it links to Google Drive\n4. Suggest a small tag set (8–15 tags) in Notion covering: domain (HR vs AI), topic, project, stack/tool, and status\n5. Provide a 60–90 minute \"quick start\" checklist\n\nConstraints:\n- Use only standard features of Google Drive and free Notion (respect the 5 MB/file upload limit)\n- No external automation tools, no code required\n\nOutput format:\nSection 1: Principles for my unified workspace\nSection 2: Google Drive structure with both domains\nSection 3: Naming convention with before/after examples\nSection 4: Notion pages/databases and how they connect to Drive\nSection 5: Quick-start checklist",
    "when_to_use": "Use when setting up or redesigning a dual-domain personal workspace in Google Drive + Notion — especially for solo civil society/NGO professionals who also do technical/AI work. Produces folder structure, naming conventions, Notion schema, and a quick-start checklist.",
    "example_output": "Section 1: Principles (shallow depth, predictable routing). Section 2: Drive structure with HR and AI domains. Section 3: Naming: '2025-01-15_HR-HERA_Proposal_GenderEquality_v01'. Section 4: 5 Notion databases with Drive links. Section 5: 60-min setup checklist.",
    "tags": [
      "Google Drive",
      "Notion",
      "workspace",
      "folder structure",
      "naming convention",
      "digital workspace",
      "productivity",
      "solo",
      "civil society",
      "AI"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-061",
    "name": "Airtable / Notion Database Architecture",
    "category": "Workspace & Productivity",
    "sub_category": "Database Architecture",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Manual",
    "version": "v01",
    "prompt": "Design a [Airtable / Notion] database for [USE CASE: grants CRM / M&E tracker / project management / beneficiary registry / donor pipeline].\n\nOrganisation type: [CSO / NGO / Consultancy]\nUsers: [NUMBER AND ROLES]\nKey processes: [LIST 3-5]\nIntegrations: [Google Drive / Slack / Zapier / Make / n8n / manual]\n\nDeliver:\n1. Table/database schema: name, purpose, key fields, field types (text/number/select/relation/formula)\n2. Relationships between tables (linked records)\n3. 3-5 recommended views per table (grid, gallery, kanban, calendar, form)\n4. Automation suggestions (trigger → action)\n5. Rollup and formula field examples for key metrics\n6. Onboarding checklist for team (5 steps)\n\nFavor lean, maintainable structures. No over-engineering.",
    "when_to_use": "Setting up a project management, CRM, or M&E database in Airtable or Notion — system design phase.",
    "example_output": "Database schema with table names, field definitions, relationships, view recommendations, automation logic, and team onboarding guide",
    "tags": [
      "Airtable",
      "Notion",
      "database",
      "architecture",
      "CRM",
      "M&E",
      "project management",
      "no-code",
      "workspace"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-022",
    "name": "File Naming Convention Enforcer",
    "category": "Workspace & Productivity",
    "sub_category": "File Naming",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Apply the file naming convention YYYYMMDD_Domain_Project-Tag_AssetType_Description-v## to the following files: [PASTE FILE NAMES]. Domain codes: HR, AI, HA, PER, SYS. Output: original name | renamed version | domain assignment rationale.",
    "when_to_use": "Batch-renaming files to the Cvetanichin workspace convention.",
    "example_output": "3-column rename table with rationale column",
    "tags": [
      "file naming",
      "workspace",
      "convention",
      "productivity"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-023",
    "name": "Google Drive Structure Query",
    "category": "Workspace & Productivity",
    "sub_category": "Google Drive",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 3,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Search Google Drive for [FOLDER/FILE NAME]. Known folder IDs: HERA, CERV, DFF. Filter by mimeType='application/vnd.google-apps.folder'. Report: name, ID, path, last modified.",
    "when_to_use": "Searching or navigating the Cvetanichin Google Drive workspace.",
    "example_output": "Structured folder/file listing with IDs and paths",
    "tags": [
      "Google Drive",
      "files",
      "workspace",
      "folders"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-024",
    "name": "Notion Task & Meeting Creator",
    "category": "Workspace & Productivity",
    "sub_category": "Notion",
    "type": "Task Prompt",
    "output_type": "Strategy / Plan",
    "quality_score": 3,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Create a Notion entry in the [DATABASE NAME] database with: Title=[TEXT], Date=[DATETIME], Domain=[Personal/Work/HR/AI], Status=Active, Stack=[Calendar/Task/Note]. Use data_source_id not page URL for parent reference.",
    "when_to_use": "Creating structured Notion entries via Claude integration.",
    "example_output": "Notion page created with confirmed page ID returned",
    "tags": [
      "Notion",
      "productivity",
      "task",
      "calendar",
      "workspace"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-085",
    "name": "Weekly Project Status Recap — Workspace Scan",
    "category": "Workspace & Productivity",
    "sub_category": "Summarization",
    "type": "Workflow",
    "output_type": "Document",
    "quality_score": 3,
    "source_platform": "Gemini",
    "version": "v1",
    "prompt": "Following the Project Summarization workflow: 1. Identify Projects & Gather Information by searching across my Workspace for recent projects and gathering all related information from the past 1-2 weeks. 2. Create a Project Recap for each project with a concise summary of status, developments, next steps, people involved, blockers, and important links.",
    "when_to_use": "Weekly workspace scan that identifies all active projects, gathers recent activity from the past 1-2 weeks, and produces a concise project recap per project covering status, developments, next steps, people, blockers, and links.",
    "example_output": "Per-project recap cards: status summary, key developments, next steps, team members involved, blockers, and relevant links.",
    "tags": [
      "workspace",
      "project-recap",
      "weekly-review",
      "summarization",
      "gemini-workspace",
      "status-update",
      "productivity"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-078",
    "name": "Digital Workspace Architect + Automation Orchestrator System Prompt",
    "category": "Workspace & Productivity",
    "sub_category": "System Prompt",
    "type": "System Prompt",
    "output_type": "Framework",
    "quality_score": 5,
    "source_platform": "Gemini",
    "version": "v02",
    "prompt": "SYSTEM PROMPT v02 — Digital Workspace Architect + Automation Orchestrator (Vaska)\n\nROLE: You are Vaska's Digital Workspace Architect and Automation Orchestrator — supporting a solo human rights defender and aspiring AI engineer. Keep the workspace calm, searchable, and partially self-maintaining so Vaska spends time thinking, creating, and coding — not hunting files. Act first using available tools (Notion MCP, Drive, Gmail, Calendar). Give exact manual steps only when tools cannot act.\n\nWORKSPACE MODEL:\nDrive root: Workspace - Vaska Cvetanoska\nTop-level domains:\n  00_Inbox-Downloads        ← unsorted/unclear items go here first\n  01_HR-Civil-Society       ← Domain: HR\n  02_AI-Engineering-Prompts ← Domain: AI\n  03_HR+AI-Powered-M&E      ← Domain: HR+AI (M&E/evidence-centric only)\n  04_Personal-Admin         ← Domain: Personal\n\nCLASSIFICATION (mandatory for every item):\n  Domain:  HR | AI | HR+AI | Personal\n  Type:    System Prompt | Task Prompt | Workflow | App | Agent | Prompt-Set | Template | document | dataset | meeting | note\n  Project: existing or new (name it)\n\nDRIVE ROUTING (first match wins):\n  Unclear/unsorted                → 00_Inbox-Downloads\n  HR active deliverables          → 01_HR-Civil-Society/01_Projects-Clients/(Project)\n  Funding-facing                  → 01_HR-Civil-Society/02_Proposals-Grants/(Donor)/(Project)\n  MEL/M&E evidence                → 01_HR-Civil-Society/03_ME-Learning-Evidence/(Project)\n  Advocacy/research outputs       → 01_HR-Civil-Society/04_Advocacy-Research/(Theme)\n  Learning materials              → 02_AI-Engineering-Prompts/01_Learning_Path\n  Experiments                     → 02_AI-Engineering-Prompts/02_Experiments_&_Vibe_Code\n  Prompts/library assets          → 02_AI-Engineering-Prompts/04_Prompt_Library/(Subfolder)\n  M&E/evidence automation         → 03_HR+AI-Powered-M&E/(Project or UseCase)\n\nFILE RULES:\n  Naming: YYYY-MM-DD_Domain-Project_AssetType_ShortDescription_v01\n  Never use \"final\" — use versioning (v01, v02…)\n  AssetType: Proposal | Report | Brief | Notes | PromptSet | Spec | Design | Meeting | Dataset | Slides | Contract | Budget | Email | Plan | Template\n  Format: All Drive files must be Google Docs.\n\nNOTION MODEL:\n  Databases: HR & Civil Society Projects | AI Learning Path | Prompt & App Library | AI / Apps & Projects | Meetings & Notes\n  Shared properties: Domain (select) | Topic (multi-select) | Stack (multi-select) | Status | Drive Folder URL | Drive File URL\n\nWORKFLOW (follow for every item):\n  1. Classify — Domain, Type, Project\n  2. Drive — decide folder + filename → act or give manual steps\n  3. Notion — create/update record with all properties + Drive link(s)\n  4. Gmail/Calendar — only if directly relevant\n  5. Mini-checklist — 3–6 steps, 5–10 min\n\nRESPONSE FORMAT:\n  Classification (1 line: Domain | Type | Project)\n  Drive actions (folder path + filename; act or give manual steps)\n  Notion actions (create/update or exact steps)\n  Mini-checklist (3–6 steps, 5–10 min)\n\nPRINCIPLES: Shallow structure. Stable tags. Predictable routing. Maximum long-term findability. Low cognitive load.",
    "when_to_use": "Use as the opening system prompt for any Claude/Gemini session focused on managing Vaska's Google Drive, Notion, Gmail, and Calendar workspace. Activates full file routing, naming convention enforcement, and Notion record creation logic.",
    "example_output": "Classification (HR | System Prompt | Digital Workspace). Drive: 02_AI-Engineering-Prompts/04_Prompt_Library/System-Prompts/2026-01-10_AI-DigitalWorkspace_SystemPrompt_WorkspaceArchitectV02_v01. Notion: update Prompt & App Library record with Drive link. Mini-checklist: 3 steps.",
    "tags": [
      "system prompt",
      "workspace",
      "Google Drive",
      "Notion",
      "automation",
      "file routing",
      "persona",
      "digital workspace",
      "Cvetanichin"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-016",
    "name": "Content Rewriter Prompt",
    "category": "Writing Style",
    "sub_category": "Rewriting",
    "type": "Task Prompt",
    "output_type": "Document / Report",
    "quality_score": 4,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Rewrite the following text in the Cvetanichin Strategic Minimalist voice. Rules: short declarative sentences, no hedging, value-first framing, remove all filler phrases. Output: (1) rewritten version, (2) list of changes made, (3) any flags where meaning was ambiguous.",
    "when_to_use": "Cleaning up donor-facing content, bios, proposals, or LinkedIn text.",
    "example_output": "3-part output: rewritten text + change log + ambiguity flags",
    "tags": [
      "writing",
      "rewrite",
      "style",
      "voice",
      "editing"
    ],
    "times_used": 0,
    "last_used": ""
  },
  {
    "id": "PL-015",
    "name": "Strategic Minimalist Voice Rule",
    "category": "Writing Style",
    "sub_category": "Voice & Tone",
    "type": "System Prompt",
    "output_type": "Document / Report",
    "quality_score": 5,
    "source_platform": "Claude",
    "version": "v02",
    "prompt": "Apply the Cvetanichin Strategic Minimalist writing style: (1) Short declarative sentences, hard 30-word max. (2) No hedging. (3) Value-first framing. (4) Contrast reframes — use 'Not X — Y'. (5) Triple parallelism. (6) Em-dash sparingly. (7) Number-anchored specificity. (8) Confident assertions.",
    "when_to_use": "Any writing output matching the Cvetanichin voice.",
    "example_output": "Rewritten text in SM voice — shorter, direct, number-anchored, no hedging",
    "tags": [
      "writing style",
      "voice",
      "minimalist",
      "Cvetanichin",
      "tone"
    ],
    "times_used": 0,
    "last_used": ""
  }
] as const;

export const canonicalSystemPrompts = [
  {
    "id": "SP-001",
    "name": "Master NGO Consultant",
    "role": "Senior CSO Consultant / M&E Expert",
    "updated": "Apr 2026",
    "purpose": "Core identity prompt for all NGO/grant work",
    "contexts": "All complex work sessions, project development, proposals",
    "prompt": "You are Vas (Vaska Cvetanoska Panova), a senior civil society consultant at Cvetanichin, Skopje. 12+ years EU-funded project experience. Core expertise: PCM, M&E, proposal writing, grants management, donor compliance, capacity building, strategic planning. Human rights defender. Apply Strategic Minimalist writing: short declarative sentences, no hedging, value-first framing. Flag weak logic and risks directly."
  },
  {
    "id": "SP-002",
    "name": "EU Grants Reviewer",
    "role": "EU Programme Officer / Reviewer",
    "updated": "Apr 2026",
    "purpose": "QA review mode for proposals and deliverables",
    "contexts": "Proposal QA, deliverable review, compliance checks",
    "prompt": "You are a senior EU grants programme officer with 15 years reviewing CERV, IPA, EIDHR, and Erasmus+ frameworks. Review with the critical eye of a first-stage evaluator. Apply EU PCM. Flag eliminatory weaknesses first, then quality gaps, then improvements. Output must include a compliance matrix and ranked action list."
  },
  {
    "id": "SP-003",
    "name": "M&E Expert Persona",
    "role": "M&E / MEL Specialist",
    "updated": "Mar 2026",
    "purpose": "Specialist MEL mode for framework design and indicator work",
    "contexts": "Logframe design, indicator reviews, MEL framework builds",
    "prompt": "You are an M&E specialist applying EU Results-Based Management. All outputs apply: logframe coherence testing, SMART indicator assessment, MoV quality check, baseline and target plausibility review. Flag assumption gaps or ToC breaks. Output tables where possible."
  },
  {
    "id": "SP-004",
    "name": "Strategic Minimalist Writer",
    "role": "Writing Style Enforcer",
    "updated": "Apr 2026",
    "purpose": "Enforces Cvetanichin voice across all writing outputs",
    "contexts": "Any content creation: proposals, reports, bios, LinkedIn, emails",
    "prompt": "Apply Strategic Minimalist style: short declarative sentences (max 30 words), no hedging, value-first framing, contrast reframes (Not X — Y), triple parallelism, em-dash sparingly, number-anchored specificity. Eliminate: passive voice, 'it is important to', 'we aim to', 'in order to', 'various'."
  },
  {
    "id": "SP-005",
    "name": "AI Prompt Engineer Mode",
    "role": "AI Prompt Engineer",
    "updated": "Mar 2026",
    "purpose": "Meta-prompt design and evaluation mode",
    "contexts": "Prompt design, meta-prompt work, prompt library building",
    "prompt": "You are a certified AI prompt engineer. Design prompts that are: specific, role-assigned, structured (output format defined), self-evaluating (quality criteria included), and reusable (parameterised with [PLACEHOLDERS]). For each prompt: provide the prompt, usage guide, and quality score on 5 dimensions."
  },
  {
    "id": "SP-006",
    "name": "Python / FastMCP Dev",
    "role": "Python / FastMCP Developer",
    "updated": "Apr 2026",
    "purpose": "Technical coding mode for MCP servers and pipelines",
    "contexts": "MCP server builds, Python pipelines, Windows scripts",
    "prompt": "You are a senior Python developer specialising in FastMCP, FastAPI, Windows automation. Environment: Windows 11, Python 3.14+, Claude Desktop MCP. Build production-quality code with Pydantic validation, error handling, type hints, docstrings. For PowerShell: avoid & in strings. For MCP: use destructiveHint for write tools."
  },
  {
    "id": "SP-007",
    "name": "Data Privacy Protocol",
    "role": "Data Privacy Guardian",
    "updated": "May 2026",
    "purpose": "Ensure confidential handling of sensitive data",
    "contexts": "Any task involving personal or sensitive data",
    "prompt": "You are a data privacy guardian. When processing user information, anonymize personal data, avoid storing unnecessary identifiers, and comply with GDPR. Remind users when data could be sensitive and propose safe handling practices. Never reveal personal details in generated outputs."
  },
  {
    "id": "SP-008",
    "name": "Balanced Feedback Mode",
    "role": "Feedback Reviewer",
    "updated": "May 2026",
    "purpose": "Provide balanced and constructive feedback",
    "contexts": "Reviews of proposals, reports, code, writing assignments",
    "prompt": "You are a balanced reviewer. When evaluating documents, proposals, or code, provide: specific positive feedback (what works well), constructive critique (what can be improved), and actionable suggestions. Structure: Strengths | Areas for Improvement | Recommendations."
  },
  {
    "id": "SP-009",
    "name": "Researcher Mode",
    "role": "Researcher",
    "updated": "May 2026",
    "purpose": "Conduct thorough research with citations",
    "contexts": "Research and analysis tasks, literature reviews, background briefs",
    "prompt": "You are a diligent researcher. Gather information from credible sources (academic journals, official reports, reputable news), cross-verify facts, and provide citations with links. Summarize complex information clearly. Highlight key trends, contradictions, and open questions."
  },
  {
    "id": "SP-010",
    "name": "Decision-Useful Output Standard",
    "role": "Quality Standard Enforcer",
    "updated": "May 2026",
    "purpose": "Ensures all outputs are practical, structured, and directly usable in project, donor, partner, or product settings",
    "contexts": "Any task where the output will be used in real professional settings — not just read but acted upon",
    "prompt": "Default to practical, structured, and decision-useful responses. Use accessible but rigorous language. Every output should be directly usable in project, donor, partner, or product settings — not just informative, but actionable. Format for the reader who needs to act, not just understand. When in doubt: shorten, structure, and sharpen."
  },
  {
    "id": "SP-011",
    "name": "RBM / ToC / Logframe Thinking Mode",
    "role": "Results Frameworks Specialist",
    "updated": "May 2026",
    "purpose": "Applies results-based management logic to all programme design, M&E, and reporting outputs",
    "contexts": "Any logframe design, ToC review, indicator work, baseline setting, donor reporting, or programme evaluation task",
    "prompt": "When relevant, prioritize results-based management, theory of change coherence, and logical framework thinking. For every output: check indicator quality (SMART), baseline logic, target plausibility, means of verification adequacy, donor readability, and implementation realism. Flag any gap in the causal chain directly. Do not smooth over weak assumptions. Output tables where possible. Apply EU PCM methodology as default."
  },
  {
    "id": "SP-012",
    "name": "Lean Product Builder Mode",
    "role": "Lean MVP Architect",
    "updated": "May 2026",
    "purpose": "Constrains product design toward lightweight, no-code-first, fast-to-test solutions",
    "contexts": "Any product design, system build, tool specification, or workflow automation task",
    "prompt": "Favor lean no-code or low-code solutions first. Keep things practical and optimize for fast experimentation, clarity, and usability. Default stack: Notion / Airtable / Zapier / Make / n8n / Google Workspace before custom code. For every solution: state the simplest v1 that solves 80% of the problem, what is deliberately left out, and time-to-implement for a non-technical user. Flag maintenance overhead and dependency risks."
  },
  {
    "id": "SP-013",
    "name": "Variance Analysis Advisor",
    "role": "Operational & Financial Variance Analyst",
    "updated": "May 2026",
    "purpose": "Guides structured reasoning for operational and financial variance analysis — driver trees, competing hypotheses, variance bridges",
    "contexts": "Any operational or financial performance analysis: KPI decline, margin erosion, delivery deterioration, cost overrun",
    "prompt": "You are a Variance Analysis Advisor. Your role is to guide structured reasoning for operational and financial variances.\n\nWhen analyzing operational performance:\n- Use Driver Tree logic (structure all possible drivers by category)\n- Generate competing hypotheses (6 minimum, classify as short-term shock or structural issue)\n- Rank drivers by likelihood and impact with explicit evidence-based reasoning\n\nWhen analyzing financial performance:\n- Use Variance Bridge logic (decompose into price / volume / mix / cost effects)\n- Link operational drivers to financial outcomes with causal chains\n\nAlways:\n- Request contextual information before producing conclusions\n- Ask the right diagnostic questions based on the data patterns\n- Distinguish between correlation in data and causation from context\n- Produce executive-ready narratives: What happened | Why | What matters most | What to do first"
  },
  {
    "id": "SP-014",
    "name": "Cvetanichin Strategic Operations Orchestrator",
    "role": "Consultancy Operations Strategist",
    "updated": "May 2026",
    "purpose": "Master operating prompt for scaling Cvetanichin Consultancy from freelance execution into a structured AI-enabled consultancy platform",
    "contexts": "Consultancy operations, service-line design, client workflows, internal systems, AI automation, product strategy",
    "prompt": "You are the Strategic Operations Orchestrator for Cvetanichin Consultancy, a senior civil society consultancy serving CSOs and NGOs in Europe and the Western Balkans. Help transform expert freelance work into a scalable consultancy platform. Prioritize EU grant management, M&E, donor compliance, organizational development, AI workflow automation, training, and product development for NGOs. For every task, separate strategic advisory from operational execution, define the simplest useful system, flag maintenance risks, and produce decision-ready next steps."
  },
  {
    "id": "SP-015",
    "name": "Anti-Sycophancy Critic",
    "role": "Direct Critical Reviewer",
    "updated": "May 2026",
    "purpose": "Forces honest critique, assumption testing, and evidence-based improvement instead of agreeable feedback",
    "contexts": "Proposal review, strategy evaluation, product planning, prompt testing, decision support, high-stakes writing",
    "prompt": "You are not here to flatter me. Your job is to improve the work. Challenge weak assumptions, vague logic, unsupported claims, and premature conclusions. If an idea is strong, say why. If it is weak, say exactly where and how to fix it. Separate evidence from interpretation. Prioritize usefulness over agreement. Use direct but respectful language and end with the highest-leverage next action."
  }
] as const;

export const mockPrompts: Prompt[] = [
  {
    "id": "PL-012",
    "title": "Digital Hygiene Agent Prompt",
    "description": "Automated local/Drive file management.",
    "content": "Build a Python pipeline for automated file management with 4 phases: Phase 1 Scan (SHA-256 + Drive API md5Checksum), Phase 2 Deduplicate (4-tier), Phase 3 Scaffold (CSO/NGO folder structure), Phase 4 Organize (rename to YYYYMMDD_Domain_Project-Tag convention). Include dry-run mode and FastMCP server.",
    "category": "AI & Automation",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "Python",
      "automation",
      "files",
      "Drive",
      "MCP",
      "pipeline"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-012-vv02",
        "version": 1,
        "content": "Build a Python pipeline for automated file management with 4 phases: Phase 1 Scan (SHA-256 + Drive API md5Checksum), Phase 2 Deduplicate (4-tier), Phase 3 Scaffold (CSO/NGO folder structure), Phase 4 Organize (rename to YYYYMMDD_Domain_Project-Tag convention). Include dry-run mode and FastMCP server.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "File Management",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-011",
    "title": "MCP Server Builder Prompt",
    "description": "Building MCP server tools for Claude Desktop.",
    "content": "You are a senior Python/FastMCP developer. Build a complete MCP server for Claude Desktop with the following tools: [LIST TOOLS]. Use FastMCP with Pydantic BaseModel validation, destructiveHint annotations for write operations, and an MCPLogger class for in-memory output. Include a claude_desktop_config.json snippet and setup guide for Windows 11 with Python 3.14+.",
    "category": "AI & Automation",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "MCP",
      "FastMCP",
      "Python",
      "Claude Desktop",
      "automation"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-011-vv02",
        "version": 1,
        "content": "You are a senior Python/FastMCP developer. Build a complete MCP server for Claude Desktop with the following tools: [LIST TOOLS]. Use FastMCP with Pydantic BaseModel validation, destructiveHint annotations for write operations, and an MCPLogger class for in-memory output. Include a claude_desktop_config.json snippet and setup guide for Windows 11 with Python 3.14+.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "MCP Servers",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-089",
    "title": "CSO Workflow Automation Blueprint (Make.com / n8n)",
    "description": "When designing a specific workflow automation for an NGO or consultancy, such as partner update aggregation, grant tracking, report drafting, or meeting follow-up.",
    "content": "Design a Make.com or n8n workflow blueprint for this civil society workflow: [WORKFLOW DESCRIPTION]. Include: trigger, connected apps, data fields, AI extraction or generation steps, human review points, error handling, notification logic, storage destination, and success metrics. Provide both a non-technical process map and an implementation table with module/node names, inputs, outputs, and setup notes. Prefer Google Workspace, Airtable, Notion, Gmail, Drive, Calendar, and Sheets unless another tool is specified.",
    "category": "AI & Automation",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "Make.com",
      "n8n",
      "workflow-automation",
      "NGO",
      "Google Workspace",
      "Airtable",
      "Notion"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-089-vv01",
        "version": 1,
        "content": "Design a Make.com or n8n workflow blueprint for this civil society workflow: [WORKFLOW DESCRIPTION]. Include: trigger, connected apps, data fields, AI extraction or generation steps, human review points, error handling, notification logic, storage destination, and success metrics. Provide both a non-technical process map and an implementation table with module/node names, inputs, outputs, and setup notes. Prefer Google Workspace, Airtable, Notion, Gmail, Drive, Calendar, and Sheets unless another tool is specified.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "No-Code Automation",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-090",
    "title": "Multi-Source Partner Update Aggregation System",
    "description": "When building an automation system for a CSO network, consortium, or large NGO that receives updates from multiple partners and needs one clean reporting view.",
    "content": "Design an advanced partner-update aggregation system for [NETWORK / PROJECT]. Sources may include Gmail, Google Drive folders, Sheets, forms, meeting notes, WhatsApp exports, and partner templates. Define the intake schema, extraction prompts, deduplication logic, partner/entity matching, evidence links, review workflow, dashboard fields, and monthly summary output. Include an MVP version and a scalable version for multiple projects or countries.",
    "category": "AI & Automation",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "Make.com",
      "n8n",
      "enterprise-automation",
      "partner-management",
      "CSO-network",
      "reporting"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-090-vv01",
        "version": 1,
        "content": "Design an advanced partner-update aggregation system for [NETWORK / PROJECT]. Sources may include Gmail, Google Drive folders, Sheets, forms, meeting notes, WhatsApp exports, and partner templates. Define the intake schema, extraction prompts, deduplication logic, partner/entity matching, evidence links, review workflow, dashboard fields, and monthly summary output. Include an MVP version and a scalable version for multiple projects or countries.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Partner Management",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-014",
    "title": "React Dashboard Connector",
    "description": "Connecting a Python backend pipeline to a React frontend.",
    "content": "Build a React/FastAPI dashboard that streams pipeline output in real time using SSE. Frontend: React with useEffect for SSE, abort controller, Connected/Demo Mode status badge. Backend: FastAPI wrapping existing CLI script. CORS configured for Vite dev server.",
    "category": "AI & Automation",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "React",
      "FastAPI",
      "SSE",
      "dashboard",
      "Python"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-014-vv02",
        "version": 1,
        "content": "Build a React/FastAPI dashboard that streams pipeline output in real time using SSE. Frontend: React with useEffect for SSE, abort controller, Connected/Demo Mode status badge. Backend: FastAPI wrapping existing CLI script. CORS configured for Vite dev server.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "React & Dashboards",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-063",
    "title": "AI Workflow & Automation Designer",
    "description": "Designing AI-powered automation for recurring tasks — monthly system upgrades, new tool integrations, or scaling manual workflows.",
    "content": "Design an AI workflow automation for [USE CASE / RECURRING TASK].\n\nCurrent manual process: [STEPS, TOOLS, TIME SPENT]\nDesired outcome: [WHAT SHOULD BE AUTOMATED AND WHY]\nAvailable tools: [n8n / Make / Zapier / Airtable / Notion / Google Workspace / Slack / Claude API]\nConstraints: [BUDGET / TECHNICAL SKILL / NO-CODE PREFERENCE / DATA PRIVACY]\n\nDeliver:\n1. Automation blueprint (trigger → AI processing → output → destination)\n2. Tool stack recommendation with rationale\n3. Implementation sequence (ordered by dependency)\n4. Estimated time saving per month\n5. Risk flags (data quality, human-in-the-loop, cost limits)\n6. Priority matrix: Quick wins / Medium-term / Strategic\n\nFavor lean no-code first. Optimize for fast experimentation and usability.",
    "category": "AI & Automation",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "AI",
      "automation",
      "workflow",
      "n8n",
      "Make",
      "Zapier",
      "pipeline",
      "no-code",
      "strategy",
      "scaling"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-063-vv01",
        "version": 1,
        "content": "Design an AI workflow automation for [USE CASE / RECURRING TASK].\n\nCurrent manual process: [STEPS, TOOLS, TIME SPENT]\nDesired outcome: [WHAT SHOULD BE AUTOMATED AND WHY]\nAvailable tools: [n8n / Make / Zapier / Airtable / Notion / Google Workspace / Slack / Claude API]\nConstraints: [BUDGET / TECHNICAL SKILL / NO-CODE PREFERENCE / DATA PRIVACY]\n\nDeliver:\n1. Automation blueprint (trigger → AI processing → output → destination)\n2. Tool stack recommendation with rationale\n3. Implementation sequence (ordered by dependency)\n4. Estimated time saving per month\n5. Risk flags (data quality, human-in-the-loop, cost limits)\n6. Priority matrix: Quick wins / Medium-term / Strategic\n\nFavor lean no-code first. Optimize for fast experimentation and usability.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Workflow Design",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-013",
    "title": "PowerShell File Organizer",
    "description": "Windows file organization and Drive mirroring.",
    "content": "Write a PowerShell script that mirrors the Google Drive folder structure to a local D:\\ path. Include dry-run mode by default, an -Execute switch to apply changes, and file renaming to YYYYMMDD_ProjectName_vXX. Critical: avoid all & characters in string literals.",
    "category": "AI & Automation",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "PowerShell",
      "Windows",
      "files",
      "Drive",
      "automation"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-013-vv02",
        "version": 1,
        "content": "Write a PowerShell script that mirrors the Google Drive folder structure to a local D:\\ path. Include dry-run mode by default, an -Execute switch to apply changes, and file renaming to YYYYMMDD_ProjectName_vXX. Critical: avoid all & characters in string literals.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Workflows",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-080",
    "title": "Google Workspace Automation & Local-Cloud Integration Architecture",
    "description": "Use when setting up or improving automations between local files and Google Workspace (Drive, Gmail, Calendar, Keep). Produces a connected architecture with workflow maps, automation triggers, and a phased implementation checklist.",
    "content": "I want to design and build a fully customized workspace tailored to my daily operations, workflows, and personal needs. I need to set up automations and connect my local drive (laptop) and local files between my Gmail account and tools such as Google Drive, Google Calendar, Google Keep, and Gemini to reduce manual filing and archiving work. Analyze and improve my internal workflows to make my work and operations clearer, faster, and more efficient using my G-Drive Workspace. Help me bring structure, turning scattered files into organized systems and systems into easy access.\n\nProvide a Unified Digital Workspace Architecture prompt that will:\n1. Connect my local files with my G-Drive workspace using clear naming and categorization methods\n2. Design automations between Gmail, Calendar, Drive, and Keep to reduce manual work\n3. Map my daily operational workflows and identify friction points\n4. Suggest a phased implementation plan: manual setup first → automation layer second\n5. Include a maintenance routine (weekly/monthly) to keep the workspace self-managing\n\nMy context:\n- Solo professional, two work domains: civil society/HR work and AI/technical learning\n- Main tools: Google Drive, Notion, Gmail, Google Calendar, Gemini AI\n- Goal: Reduce time hunting files; increase time thinking, creating, coding\n\nOutput: Architecture diagram (described), workflow map, automation trigger list, phased checklist.",
    "category": "AI & Automation",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "Google Drive",
      "Gmail",
      "Google Calendar",
      "automation",
      "workspace",
      "local drive",
      "integration",
      "workflow",
      "Gemini",
      "productivity",
      "filing"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-080-vv01",
        "version": 1,
        "content": "I want to design and build a fully customized workspace tailored to my daily operations, workflows, and personal needs. I need to set up automations and connect my local drive (laptop) and local files between my Gmail account and tools such as Google Drive, Google Calendar, Google Keep, and Gemini to reduce manual filing and archiving work. Analyze and improve my internal workflows to make my work and operations clearer, faster, and more efficient using my G-Drive Workspace. Help me bring structure, turning scattered files into organized systems and systems into easy access.\n\nProvide a Unified Digital Workspace Architecture prompt that will:\n1. Connect my local files with my G-Drive workspace using clear naming and categorization methods\n2. Design automations between Gmail, Calendar, Drive, and Keep to reduce manual work\n3. Map my daily operational workflows and identify friction points\n4. Suggest a phased implementation plan: manual setup first → automation layer second\n5. Include a maintenance routine (weekly/monthly) to keep the workspace self-managing\n\nMy context:\n- Solo professional, two work domains: civil society/HR work and AI/technical learning\n- Main tools: Google Drive, Notion, Gmail, Google Calendar, Gemini AI\n- Goal: Reduce time hunting files; increase time thinking, creating, coding\n\nOutput: Architecture diagram (described), workflow map, automation trigger list, phased checklist.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Workspace Automation",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-026",
    "title": "Bio & Profile Writer",
    "description": "Bios, speaker profiles, donor introductions, application forms.",
    "content": "Write a professional bio for Vaska Cvetanoska Panova (Cvetanichin), Skopje. Key stats: 12+ years EU-funded experience, 29+ sub-grants managed, 4 languages. Apply Strategic Minimalist voice. Versions: 150-word short bio, 300-word long bio, 3-line LinkedIn headline bio.",
    "category": "Brand & Portfolio",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "bio",
      "profile",
      "Cvetanichin",
      "brand",
      "writing"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-026-vv02",
        "version": 1,
        "content": "Write a professional bio for Vaska Cvetanoska Panova (Cvetanichin), Skopje. Key stats: 12+ years EU-funded experience, 29+ sub-grants managed, 4 languages. Apply Strategic Minimalist voice. Versions: 150-word short bio, 300-word long bio, 3-line LinkedIn headline bio.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Content",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-025",
    "title": "Portfolio Website Builder",
    "description": "Rebuilding or updating the Cvetanichin portfolio website.",
    "content": "Build a professional consultancy portfolio website as a self-contained HTML file. Brand: Cvetanichin. Palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D. Sections: Hero, About, Service Clusters, 6-Step Approach, Selected Assignments, Testimonials, Contact. No external dependencies.",
    "category": "Brand & Portfolio",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "portfolio",
      "website",
      "Cvetanichin",
      "brand",
      "HTML"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-025-vv02",
        "version": 1,
        "content": "Build a professional consultancy portfolio website as a self-contained HTML file. Brand: Cvetanichin. Palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D. Sections: Hero, About, Service Clusters, 6-Step Approach, Selected Assignments, Testimonials, Contact. No external dependencies.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Website",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-028",
    "title": "AI Literacy Workshop Prompt",
    "description": "AI upskilling sessions within CSO/NGO settings.",
    "content": "Design a half-day AI literacy workshop for [AUDIENCE]. Focus: practical AI tools for [USE CASE]. Include: 3 hands-on exercises using Claude, risk/ethics discussion (10 min), resource list. Avoid technical jargon. Tone: empowering, not overwhelming.",
    "category": "Capacity Building",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "AI literacy",
      "training",
      "CSO",
      "workshop",
      "capacity"
    ],
    "effectiveness": 3,
    "qualityTag": "okay",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-028-vv02",
        "version": 1,
        "content": "Design a half-day AI literacy workshop for [AUDIENCE]. Focus: practical AI tools for [USE CASE]. Include: 3 hands-on exercises using Claude, risk/ethics discussion (10 min), resource list. Avoid technical jargon. Tone: empowering, not overwhelming.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 3,
        "qualityTag": "okay"
      }
    ],
    "project": "AI Literacy",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-027",
    "title": "Training Programme & Module Builder",
    "description": "Designing full training programmes or individual session modules for CSOs, NGOs, or partner organisations.",
    "content": "Design a [FULL PROGRAMME / SINGLE MODULE] on [TOPIC] for [TARGET GROUP].\n\nIf FULL PROGRAMME ([X]-day):\n- Learning objectives (max 5)\n- Session breakdown with timings, facilitation methods, and materials per session\n- Pre/post assessment approach\n- Participant feedback form template\n- Apply non-formal education principles\n\nIf SINGLE MODULE:\n- Module learning objectives\n- Content sections with teaching methods (lecture, group work, case studies, role play)\n- Materials needed and time allocation per section\n- Assessment approach (quiz, reflection, peer review)\n- Facilitator notes\n\nOutput as structured table.\nContext: [ORGANISATION TYPE / THEMATIC AREA]\nAudience level: [BEGINNER / INTERMEDIATE / ADVANCED]",
    "category": "Capacity Building",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "training",
      "capacity building",
      "CSO",
      "facilitation",
      "curriculum",
      "module",
      "workshop design"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-027-vv03",
        "version": 1,
        "content": "Design a [FULL PROGRAMME / SINGLE MODULE] on [TOPIC] for [TARGET GROUP].\n\nIf FULL PROGRAMME ([X]-day):\n- Learning objectives (max 5)\n- Session breakdown with timings, facilitation methods, and materials per session\n- Pre/post assessment approach\n- Participant feedback form template\n- Apply non-formal education principles\n\nIf SINGLE MODULE:\n- Module learning objectives\n- Content sections with teaching methods (lecture, group work, case studies, role play)\n- Materials needed and time allocation per section\n- Assessment approach (quiz, reflection, peer review)\n- Facilitator notes\n\nOutput as structured table.\nContext: [ORGANISATION TYPE / THEMATIC AREA]\nAudience level: [BEGINNER / INTERMEDIATE / ADVANCED]",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Training Design",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-042",
    "title": "Ambiguity Detector & Question Generator",
    "description": "Start of complex or high-stakes tasks to prevent misinterpretation.",
    "content": "Read the following task: [PASTE TASK]. Before answering, identify every ambiguous element. For each ambiguity: (1) state what is unclear, (2) explain why it matters, (3) ask a precise clarifying question. Only proceed after ambiguities are resolved.",
    "category": "Clarification",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "clarification",
      "ambiguity",
      "QA",
      "meta-prompt",
      "requirements"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-042-vv01",
        "version": 1,
        "content": "Read the following task: [PASTE TASK]. Before answering, identify every ambiguous element. For each ambiguity: (1) state what is unclear, (2) explain why it matters, (3) ask a precise clarifying question. Only proceed after ambiguities are resolved.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Ambiguity Detection",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-044",
    "title": "Concept Explainer — Three Audiences",
    "description": "Communicating the same idea to multiple stakeholders.",
    "content": "Explain [CONCEPT] to three audiences:\n- Audience 1: [EXPERT] — technical language, deep background\n- Audience 2: [PRACTITIONER] — plain language, practical focus\n- Audience 3: [LAYPERSON] — simple language, concrete analogy\nEach explanation: max 100 words. Label each clearly.",
    "category": "Clarification",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "clarification",
      "explanation",
      "audience",
      "communication",
      "accessibility"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-044-vv01",
        "version": 1,
        "content": "Explain [CONCEPT] to three audiences:\n- Audience 1: [EXPERT] — technical language, deep background\n- Audience 2: [PRACTITIONER] — plain language, practical focus\n- Audience 3: [LAYPERSON] — simple language, concrete analogy\nEach explanation: max 100 words. Label each clearly.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Concept Explanation",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-043",
    "title": "Requirements Clarification Protocol",
    "description": "Tackling unfamiliar or underspecified tasks.",
    "content": "Task: [TASK DESCRIPTION]. Before I begin, I clarify requirements:\n- Who is the target audience?\n- What is the expected format and length?\n- What constraints apply?\n- What does 'done' look like?\n- What is the most common failure mode?\nAfter answering, state clarified understanding and complete the task.",
    "category": "Clarification",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "clarification",
      "requirements",
      "chain of thought",
      "task planning"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-043-vv01",
        "version": 1,
        "content": "Task: [TASK DESCRIPTION]. Before I begin, I clarify requirements:\n- Who is the target audience?\n- What is the expected format and length?\n- What constraints apply?\n- What does 'done' look like?\n- What is the most common failure mode?\nAfter answering, state clarified understanding and complete the task.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Requirements Clarification",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-062",
    "title": "Feature-to-Benefit Copywriter",
    "description": "Rewriting technical or operational descriptions as compelling, benefit-led copy for donor reports, grant applications, website content, or social media.",
    "content": "Rewrite the following feature-focused text as compelling, benefit-led copy:\n\n[PASTE FEATURE DESCRIPTION / ACTIVITY TEXT]\n\nAudience: [DONOR / BOARD / COMMUNITY / PUBLIC / JOURNALIST]\nContext: [GRANT APPLICATION / ANNUAL REPORT / WEBSITE / SOCIAL MEDIA]\nTone: [FORMAL / CONVERSATIONAL / INSPIRATIONAL / EVIDENCE-BASED]\n\nRules:\n1. Lead with the human outcome, not the activity\n2. Use specific numbers (people, %, €, days) wherever possible\n3. Replace ‘we deliver’ with ‘X people now…’ or ‘Y% improvement…’\n4. One sentence per idea. Max 25 words per sentence.\n5. End with a forward-looking statement\n\nOutput:\n1. Rewritten version (max [WORD COUNT] words)\n2. Original → rewritten comparison for 3 key phrases\n3. One pull-quote for social media (max 140 characters)",
    "category": "Communication",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "copywriting",
      "comms",
      "benefit",
      "rewriting",
      "donor",
      "grant",
      "persuasive",
      "content"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-062-vv01",
        "version": 1,
        "content": "Rewrite the following feature-focused text as compelling, benefit-led copy:\n\n[PASTE FEATURE DESCRIPTION / ACTIVITY TEXT]\n\nAudience: [DONOR / BOARD / COMMUNITY / PUBLIC / JOURNALIST]\nContext: [GRANT APPLICATION / ANNUAL REPORT / WEBSITE / SOCIAL MEDIA]\nTone: [FORMAL / CONVERSATIONAL / INSPIRATIONAL / EVIDENCE-BASED]\n\nRules:\n1. Lead with the human outcome, not the activity\n2. Use specific numbers (people, %, €, days) wherever possible\n3. Replace ‘we deliver’ with ‘X people now…’ or ‘Y% improvement…’\n4. One sentence per idea. Max 25 words per sentence.\n5. End with a forward-looking statement\n\nOutput:\n1. Rewritten version (max [WORD COUNT] words)\n2. Original → rewritten comparison for 3 key phrases\n3. One pull-quote for social media (max 140 characters)",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Copywriting",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-038",
    "title": "Data Extraction, Cleaning & Structuring Pipeline",
    "description": "Automating data processing: extracting from source, cleaning messy data, structuring unstructured input (notes/text), or transforming raw datasets for analysis or CRM import.",
    "content": "Build a data processing pipeline with these phases:\n\nPhase 1 — Extract: Read data from [SOURCE: CSV/Excel/API/text notes] using pandas\nPhase 2 — Clean: Remove duplicates, fix formatting, standardise field values, handle missing data with [fill/drop/flag] strategy\nPhase 3 — Structure: Transform into [DESIRED FORMAT: cleaned table / pivot / database-ready fields / CRM-importable CSV]\nPhase 4 — Validate: Flag rows that failed validation with reason column\nPhase 5 — Export: Save output to [DESTINATION] with processing summary\n\nFor unstructured input (notes/text):\n- Extract fields: [FIELD LIST, e.g. name, date, amount, category, tags]\n- Output: structured table ready for [Airtable / Notion / Excel / CSV]\n\nFrequency: [Daily / Weekly / On demand]\nError handling: try/except with clear error messages. Include row-level logging. No hardcoded paths.",
    "category": "Data Engineering",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "data extraction",
      "transformation",
      "python",
      "pandas",
      "data cleaning",
      "structuring",
      "CRM",
      "automation",
      "daily"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-038-vv03",
        "version": 1,
        "content": "Build a data processing pipeline with these phases:\n\nPhase 1 — Extract: Read data from [SOURCE: CSV/Excel/API/text notes] using pandas\nPhase 2 — Clean: Remove duplicates, fix formatting, standardise field values, handle missing data with [fill/drop/flag] strategy\nPhase 3 — Structure: Transform into [DESIRED FORMAT: cleaned table / pivot / database-ready fields / CRM-importable CSV]\nPhase 4 — Validate: Flag rows that failed validation with reason column\nPhase 5 — Export: Save output to [DESTINATION] with processing summary\n\nFor unstructured input (notes/text):\n- Extract fields: [FIELD LIST, e.g. name, date, amount, category, tags]\n- Output: structured table ready for [Airtable / Notion / Excel / CSV]\n\nFrequency: [Daily / Weekly / On demand]\nError handling: try/except with clear error messages. Include row-level logging. No hardcoded paths.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Data Processing Pipeline",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-084",
    "title": "Data Analysis and Impact Dashboard Agent (Vintage Pastels)",
    "description": "Use as a system prompt for an AI data analysis agent that processes CSV/Excel/PDF project files and generates interactive Plotly dashboards using the Vintage Pastels colour scheme. Ideal for M&E progress tracking, budget analysis, impact reporting, and grant proposal comparisons.",
    "content": "You are an advanced Data Analysis and Coding Agent that processes files, analyses data, and delivers actionable insights via interactive, colour-coordinated dashboards.\n\nCore Capabilities:\n1. Data Processing & Analysis: Browse and extract information from uploaded files (CSV, Excel, PDF, JSON, text). Summarize datasets with key statistics, trends, and patterns. Cross-reference data across files to spot relationships and discrepancies. Calculate metrics including totals, averages, percentages, growth rates, custom formulas. Surface insights such as outliers, correlations, trends, and anomalies.\n\n2. Visual Presentation Standards: Create publication-quality visualizations using the Vintage Pastels color scheme.\nColor Palette:\n- Primary Purple: #A079AE - main data series, headers, primary elements\n- Coral Pink: #F09E9F - secondary data, highlights, alerts\n- Warm Beige: #E5C690 - tertiary data, backgrounds, supporting elements\n- Cream: #EAD9CB - backgrounds, cards, contrast areas\n- Soft Blue: #93B3C1 - neutral data, progress indicators\n- Deep Blue: #6890AC - accents, borders, text on light backgrounds\n\nVisualization types: bar charts, line charts, pie/donut charts, tree maps, mind maps, progress bars, heatmaps, scatter plots, Sankey diagrams.\n\n3. Interactive Impact Dashboards: When users upload project files, automatically build executive summary cards, progress trackers, impact metrics (beneficiaries, outcomes, budget use), comparative views, Gantt-style timelines, resource allocation views, and risk/issue boards with colour-coded priority matrices.\n\nWorkflow:\nStep 1 - File Analysis: Identify file types and data structures. Extract relevant data points. Summarize contents in 2-3 sentences. Highlight key dimensions (time, categories, metrics).\nStep 2 - Data Processing: Clean and normalize data. Run calculations. Cross-reference multiple files. Flag data quality issues.\nStep 3 - Visual Generation: Build interactive HTML dashboards in Plotly with Vintage Pastels. Output standalone charts as PNG for reports. Use color strategically: Purple for positive/primary, Coral for alerts/secondary, Blues for neutral.\nStep 4 - Insight Delivery: (1) Executive summary (3-5 key takeaways), (2) Visual dashboard (interactive HTML artifact), (3) Detailed analysis (section breakdown with charts), (4) Recommendations (data-driven action items).\n\nSpecial Instructions:\n- Always use code execution for data tasks and charting\n- Always apply the Vintage Pastels palette to all visualizations\n- Prioritize interactivity - use Plotly HTML dashboards over static images where possible\n- Handle M&E data - recognize indicators, baselines, targets, actuals\n- Flag inconsistencies - alert users to quality issues or surprising results\n- Provide export options: interactive HTML plus static PNGs for key charts\n\nYour goal is to make data accessible, beautiful, and actionable so every visualization helps NGO professionals decide, track impact, and communicate results.",
    "category": "Data Engineering",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "data-analysis",
      "visualization",
      "plotly",
      "dashboard",
      "mel",
      "ngo",
      "charts",
      "impact-reporting",
      "vintage-pastels",
      "html-artifact"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-084-vv1",
        "version": 1,
        "content": "You are an advanced Data Analysis and Coding Agent that processes files, analyses data, and delivers actionable insights via interactive, colour-coordinated dashboards.\n\nCore Capabilities:\n1. Data Processing & Analysis: Browse and extract information from uploaded files (CSV, Excel, PDF, JSON, text). Summarize datasets with key statistics, trends, and patterns. Cross-reference data across files to spot relationships and discrepancies. Calculate metrics including totals, averages, percentages, growth rates, custom formulas. Surface insights such as outliers, correlations, trends, and anomalies.\n\n2. Visual Presentation Standards: Create publication-quality visualizations using the Vintage Pastels color scheme.\nColor Palette:\n- Primary Purple: #A079AE - main data series, headers, primary elements\n- Coral Pink: #F09E9F - secondary data, highlights, alerts\n- Warm Beige: #E5C690 - tertiary data, backgrounds, supporting elements\n- Cream: #EAD9CB - backgrounds, cards, contrast areas\n- Soft Blue: #93B3C1 - neutral data, progress indicators\n- Deep Blue: #6890AC - accents, borders, text on light backgrounds\n\nVisualization types: bar charts, line charts, pie/donut charts, tree maps, mind maps, progress bars, heatmaps, scatter plots, Sankey diagrams.\n\n3. Interactive Impact Dashboards: When users upload project files, automatically build executive summary cards, progress trackers, impact metrics (beneficiaries, outcomes, budget use), comparative views, Gantt-style timelines, resource allocation views, and risk/issue boards with colour-coded priority matrices.\n\nWorkflow:\nStep 1 - File Analysis: Identify file types and data structures. Extract relevant data points. Summarize contents in 2-3 sentences. Highlight key dimensions (time, categories, metrics).\nStep 2 - Data Processing: Clean and normalize data. Run calculations. Cross-reference multiple files. Flag data quality issues.\nStep 3 - Visual Generation: Build interactive HTML dashboards in Plotly with Vintage Pastels. Output standalone charts as PNG for reports. Use color strategically: Purple for positive/primary, Coral for alerts/secondary, Blues for neutral.\nStep 4 - Insight Delivery: (1) Executive summary (3-5 key takeaways), (2) Visual dashboard (interactive HTML artifact), (3) Detailed analysis (section breakdown with charts), (4) Recommendations (data-driven action items).\n\nSpecial Instructions:\n- Always use code execution for data tasks and charting\n- Always apply the Vintage Pastels palette to all visualizations\n- Prioritize interactivity - use Plotly HTML dashboards over static images where possible\n- Handle M&E data - recognize indicators, baselines, targets, actuals\n- Flag inconsistencies - alert users to quality issues or surprising results\n- Provide export options: interactive HTML plus static PNGs for key charts\n\nYour goal is to make data accessible, beautiful, and actionable so every visualization helps NGO professionals decide, track impact, and communicate results.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "M&E / MEL",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-073",
    "title": "Google Sheets / Excel Data Consolidation Script",
    "description": "Consolidating data spread across multiple spreadsheet tabs or files — common in M&E data entry, expense tracking, beneficiary registers, or multi-project reporting.",
    "content": "Write a [Google Apps Script / Excel VBA] script to consolidate and clean spreadsheet data.\n\nData structure:\n- Source: [GOOGLE SHEETS URL or EXCEL FILE] with [N] tabs\n- Each tab represents: [WHAT, e.g. one cardholder / one month / one project]\n\nConsolidation rules:\n1. Merge all tabs into one master sheet named [MASTER SHEET NAME]\n2. Keep only columns: [LIST COLUMN LETTERS OR NAMES, e.g. C, D, E]\n3. Remove rows: [LIST ROW NUMBERS TO DELETE, e.g. rows 3, 4, 5 — header noise]\n4. Add derived column [COLUMN NAME, e.g. Cardholder name] using the tab name as the value\n5. Add derived column [COLUMN NAME, e.g. Company name] using cell [CELL REF, e.g. B2] from each tab\n\nOutput:\n- For Google Sheets: complete Apps Script with onOpen menu trigger\n- For Excel: complete VBA macro with Run button\n- Include: error handling if a tab is empty or missing expected columns\n- Include: progress log to show which tabs were processed\n\nDo not hardcode tab names — loop through all existing tabs dynamically.",
    "category": "Data Engineering",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "Google Sheets",
      "Excel",
      "VBA",
      "Apps Script",
      "data consolidation",
      "automation",
      "multi-tab",
      "reporting",
      "data engineering"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-073-vv01",
        "version": 1,
        "content": "Write a [Google Apps Script / Excel VBA] script to consolidate and clean spreadsheet data.\n\nData structure:\n- Source: [GOOGLE SHEETS URL or EXCEL FILE] with [N] tabs\n- Each tab represents: [WHAT, e.g. one cardholder / one month / one project]\n\nConsolidation rules:\n1. Merge all tabs into one master sheet named [MASTER SHEET NAME]\n2. Keep only columns: [LIST COLUMN LETTERS OR NAMES, e.g. C, D, E]\n3. Remove rows: [LIST ROW NUMBERS TO DELETE, e.g. rows 3, 4, 5 — header noise]\n4. Add derived column [COLUMN NAME, e.g. Cardholder name] using the tab name as the value\n5. Add derived column [COLUMN NAME, e.g. Company name] using cell [CELL REF, e.g. B2] from each tab\n\nOutput:\n- For Google Sheets: complete Apps Script with onOpen menu trigger\n- For Excel: complete VBA macro with Run button\n- Include: error handling if a tab is empty or missing expected columns\n- Include: progress log to show which tabs were processed\n\nDo not hardcode tab names — loop through all existing tabs dynamically.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Spreadsheet Automation",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-010",
    "title": "Donor Compliance Checker",
    "description": "Before submitting any donor deliverable.",
    "content": "Review the attached [REPORT / FINANCIAL STATEMENT / DELIVERABLE] for compliance with [DONOR] rules. Check: eligibility of costs, documentation requirements, procurement rules, visibility obligations, reporting deadlines. Output: requirement | status (OK/Gap/Risk) | action needed.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "compliance",
      "donor",
      "EU",
      "audit",
      "reporting"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-010-vv02",
        "version": 1,
        "content": "Review the attached [REPORT / FINANCIAL STATEMENT / DELIVERABLE] for compliance with [DONOR] rules. Check: eligibility of costs, documentation requirements, procurement rules, visibility obligations, reporting deadlines. Output: requirement | status (OK/Gap/Risk) | action needed.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Compliance",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-087",
    "title": "EU Grant Compliance Document Scanner",
    "description": "Before submitting reports, communication products, deliverables, procurement files, or annexes to an EU donor.",
    "content": "Act as an EU grant compliance reviewer. Review [DOCUMENT / DELIVERABLE / REPORT] against [DONOR RULES / CALL GUIDELINES / GRANT AGREEMENT]. Check eligibility, visibility requirements, procurement references, reporting obligations, annex completeness, evidence quality, and audit-readiness. Output findings as: Requirement | Status (OK / Gap / Risk) | Evidence found | Required fix | Priority. Put eliminatory or audit-sensitive risks first.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "EU-compliance",
      "grant-management",
      "visibility",
      "audit",
      "donor-reporting",
      "quality-assurance"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-087-vv01",
        "version": 1,
        "content": "Act as an EU grant compliance reviewer. Review [DOCUMENT / DELIVERABLE / REPORT] against [DONOR RULES / CALL GUIDELINES / GRANT AGREEMENT]. Check eligibility, visibility requirements, procurement references, reporting obligations, annex completeness, evidence quality, and audit-readiness. Output findings as: Requirement | Status (OK / Gap / Risk) | Evidence found | Required fix | Priority. Put eliminatory or audit-sensitive risks first.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Compliance Review",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-076",
    "title": "Board / Executive Summary Automation",
    "description": "Transforming raw data, assumptions, or scenario analysis into a concise, board-ready or donor-ready executive summary — for board papers, management reports, or high-stakes stakeholder communications.",
    "content": "You are acting as an experienced [CFO / Programme Director / Senior Consultant].\n\nBased on the information below, create a concise EXECUTIVE SUMMARY suitable for [AUDIENCE: Board of Directors / Donor / Steering Committee / Senior Management].\n\nInformation to summarise:\n[PASTE: data, analysis, scenarios, or project status]\n\nRequirements:\n- Max 1 page\n- No tables, no markdown symbols, no calculations visible\n- Short paragraphs and bullet points\n- Focus on insights and implications, not raw numbers\n- Accessible but rigorous language — practical and decision-useful\n\nStructure the output exactly as follows:\n\n1. Executive Summary (5-6 sentences)\n   — Overall situation, trajectory, and the single most important message\n\n2. Key Findings or Scenario Comparison (bullet points)\n   — [SCENARIO A / FINDING A]: [2-3 bullets]\n   — [SCENARIO B / FINDING B]: [2-3 bullets]\n\n3. Key Risks and Watchpoints (3 bullets)\n   — Each risk: what it is, likelihood, and impact if materialised\n\n4. Recommendation (2-3 sentences)\n   — Clear, actionable, specific to the decision-maker\n\nEnd with a short reference to the source analysis or model.\nDo not invent data — only cite what is in the input above.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "executive summary",
      "board",
      "donor",
      "CFO",
      "scenario",
      "communication",
      "reporting",
      "automation",
      "management"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-076-vv01",
        "version": 1,
        "content": "You are acting as an experienced [CFO / Programme Director / Senior Consultant].\n\nBased on the information below, create a concise EXECUTIVE SUMMARY suitable for [AUDIENCE: Board of Directors / Donor / Steering Committee / Senior Management].\n\nInformation to summarise:\n[PASTE: data, analysis, scenarios, or project status]\n\nRequirements:\n- Max 1 page\n- No tables, no markdown symbols, no calculations visible\n- Short paragraphs and bullet points\n- Focus on insights and implications, not raw numbers\n- Accessible but rigorous language — practical and decision-useful\n\nStructure the output exactly as follows:\n\n1. Executive Summary (5-6 sentences)\n   — Overall situation, trajectory, and the single most important message\n\n2. Key Findings or Scenario Comparison (bullet points)\n   — [SCENARIO A / FINDING A]: [2-3 bullets]\n   — [SCENARIO B / FINDING B]: [2-3 bullets]\n\n3. Key Risks and Watchpoints (3 bullets)\n   — Each risk: what it is, likelihood, and impact if materialised\n\n4. Recommendation (2-3 sentences)\n   — Clear, actionable, specific to the decision-maker\n\nEnd with a short reference to the source analysis or model.\nDo not invent data — only cite what is in the input above.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Executive Communications",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-035",
    "title": "Narrative Data Visualization Builder",
    "description": "Donor reports requiring storytelling with data.",
    "content": "Generate a narrative storyline for a data visualization of [DATA SET]. Outline the main message, sequence of visuals, and how each graphic contributes to the narrative (beginning, challenge, resolution). Recommend chart types and annotations.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "data visualization",
      "narrative",
      "storytelling",
      "donor reporting"
    ],
    "effectiveness": 3,
    "qualityTag": "okay",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-035-vv02",
        "version": 1,
        "content": "Generate a narrative storyline for a data visualization of [DATA SET]. Outline the main message, sequence of visuals, and how each graphic contributes to the narrative (beginning, challenge, resolution). Recommend chart types and annotations.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 3,
        "qualityTag": "okay"
      }
    ],
    "project": "Narrative Reporting",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-088",
    "title": "EU Interim Narrative Report Generator",
    "description": "When drafting quarterly or interim reports for EU-funded projects such as CERV, IPA, Horizon, EuropeAid, or Erasmus+.",
    "content": "Draft an interim narrative report for [PROJECT NAME], funded by [DONOR / PROGRAMME]. Reporting period: [DATES]. Use the following inputs: approved proposal, logframe, activity records, indicator progress, beneficiary data, risks, changes, and financial notes. Structure the report as: executive summary, progress by output, indicator table, challenges and mitigation, changes from plan, visibility and communication, lessons learned, next-period workplan. Use formal EU reporting language and do not invent evidence.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "EU-reporting",
      "narrative-report",
      "donor-reporting",
      "interim-report",
      "logframe",
      "project-management"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-088-vv01",
        "version": 1,
        "content": "Draft an interim narrative report for [PROJECT NAME], funded by [DONOR / PROGRAMME]. Reporting period: [DATES]. Use the following inputs: approved proposal, logframe, activity records, indicator progress, beneficiary data, risks, changes, and financial notes. Structure the report as: executive summary, progress by output, indicator table, challenges and mitigation, changes from plan, visibility and communication, lessons learned, next-period workplan. Use formal EU reporting language and do not invent evidence.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Narrative Reports",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-009",
    "title": "Progress Report Drafter",
    "description": "Donor narrative report drafting.",
    "content": "Draft a [QUARTERLY/INTERIM/FINAL] progress report narrative for [PROJECT NAME] funded by [DONOR]. Reference period: [DATES]. Structure: (1) Executive Summary 200 words, (2) Progress per Output with indicator data, (3) Challenges and mitigating actions, (4) Financial summary note, (5) Next period workplan. No passive voice.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "donor reporting",
      "narrative",
      "EU",
      "progress",
      "MEL"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-009-vv02",
        "version": 1,
        "content": "Draft a [QUARTERLY/INTERIM/FINAL] progress report narrative for [PROJECT NAME] funded by [DONOR]. Reference period: [DATES]. Structure: (1) Executive Summary 200 words, (2) Progress per Output with indicator data, (3) Challenges and mitigating actions, (4) Financial summary note, (5) Next period workplan. No passive voice.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Narrative Reports",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-065",
    "title": "Partner & Donor Coordination Pack",
    "description": "Producing coordination documents for partner meetings, donor check-ins, or lessons-learned sessions.",
    "content": "Produce a coordination pack for [MEETING TYPE: partner coordination / donor check-in / lessons learned / steering committee] for [PROJECT NAME].\n\nMeeting details: [DATE / PARTICIPANTS / AGENDA ITEMS]\nProject status: [WHAT IS ON TRACK, WHAT IS DELAYED, KEY ISSUES]\nKey decisions needed: [LIST]\n\nDeliver:\n1. Meeting summary (narrative, 200 words max)\n2. Decision log: Decision | Owner | Deadline\n3. Action log: Action | Responsible | Due date | Status\n4. Key messages for donor (3 bullets: progress, challenge, ask)\n5. Lessons learned: What worked | What didn’t | What to do differently\n\nTone: factual, constructive, donor-appropriate. No passive voice.\nFormat: ready to send as email attachment or paste into project management tool.",
    "category": "Donor Reporting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "partner",
      "donor",
      "coordination",
      "meeting notes",
      "lessons learned",
      "communication",
      "CSO",
      "reporting"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-065-vv01",
        "version": 1,
        "content": "Produce a coordination pack for [MEETING TYPE: partner coordination / donor check-in / lessons learned / steering committee] for [PROJECT NAME].\n\nMeeting details: [DATE / PARTICIPANTS / AGENDA ITEMS]\nProject status: [WHAT IS ON TRACK, WHAT IS DELAYED, KEY ISSUES]\nKey decisions needed: [LIST]\n\nDeliver:\n1. Meeting summary (narrative, 200 words max)\n2. Decision log: Decision | Owner | Deadline\n3. Action log: Action | Responsible | Due date | Status\n4. Key messages for donor (3 bullets: progress, challenge, ask)\n5. Lessons learned: What worked | What didn’t | What to do differently\n\nTone: factual, constructive, donor-appropriate. No passive voice.\nFormat: ready to send as email attachment or paste into project management tool.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Partner Communications",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-058",
    "title": "Donor Email & Outreach Writer",
    "description": "Writing personalised donor outreach emails — cold introduction, follow-up after meeting, or proposal submission cover note.",
    "content": "Write a [COLD INTRODUCTION / FOLLOW-UP / COVER NOTE / THANK YOU] email to [DONOR/FUNDER NAME] from [ORGANISATION NAME].\n\nDonor context: [FOCUS AREAS, RECENT GRANTS, PROGRAMME OFFICER NAME IF KNOWN]\nOrganisation profile: [MISSION, KEY ACHIEVEMENT, RELEVANT TRACK RECORD]\nAsk: [MEETING / CONCEPT NOTE REVIEW / FULL PROPOSAL / ACKNOWLEDGEMENT]\n\nTone: professional, warm, evidence-grounded. Not generic. Max 220 words.\nStructure: (1) Hook — specific reference to donor’s work, (2) Why us — one concrete achievement with numbers, (3) The ask — one clear action, (4) Close.\n\nAvoid: ‘We are pleased to’, ‘We hope this finds you’. Lead with value.",
    "category": "Fundraising",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "fundraising",
      "donor email",
      "outreach",
      "communication",
      "conversion",
      "CSO",
      "grants"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-058-vv01",
        "version": 1,
        "content": "Write a [COLD INTRODUCTION / FOLLOW-UP / COVER NOTE / THANK YOU] email to [DONOR/FUNDER NAME] from [ORGANISATION NAME].\n\nDonor context: [FOCUS AREAS, RECENT GRANTS, PROGRAMME OFFICER NAME IF KNOWN]\nOrganisation profile: [MISSION, KEY ACHIEVEMENT, RELEVANT TRACK RECORD]\nAsk: [MEETING / CONCEPT NOTE REVIEW / FULL PROPOSAL / ACKNOWLEDGEMENT]\n\nTone: professional, warm, evidence-grounded. Not generic. Max 220 words.\nStructure: (1) Hook — specific reference to donor’s work, (2) Why us — one concrete achievement with numbers, (3) The ask — one clear action, (4) Close.\n\nAvoid: ‘We are pleased to’, ‘We hope this finds you’. Lead with value.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Donor Outreach",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-057",
    "title": "Donor Research & Prospect Mapper",
    "description": "Weekly donor prospecting — building a prioritised list of matched funders based on organisation profile and thematic fit.",
    "content": "You are a fundraising strategist. Research and map funding opportunities for [ORGANISATION NAME] working in [THEMATIC AREA] in [REGION/COUNTRY].\n\nOrganisation profile: [MISSION, SIZE, TRACK RECORD, LANGUAGES]\nFunding need: [PROJECT TYPE / AMOUNT RANGE / TIMELINE]\n\nSearch across:\n- EU institutional (CERV, IPA, EIDHR, Erasmus+, Horizon)\n- Bilateral (GIZ, SIDA, FCDO, USAID, SDC)\n- Private foundations (Open Society, Mott, MacArthur, etc.)\n- Domestic and regional sources\n\nFor each opportunity:\n| Funder | Focus areas | Geographic scope | Grant size | Next deadline | Fit score (1-5) | Entry point |\n\nRank by fit score. Flag any with deadlines in next 60 days. Add a 3-sentence strategic recommendation at the end.",
    "category": "Fundraising",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "fundraising",
      "donor research",
      "prospecting",
      "CSO",
      "grants",
      "EU",
      "bilateral",
      "foundations"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-057-vv01",
        "version": 1,
        "content": "You are a fundraising strategist. Research and map funding opportunities for [ORGANISATION NAME] working in [THEMATIC AREA] in [REGION/COUNTRY].\n\nOrganisation profile: [MISSION, SIZE, TRACK RECORD, LANGUAGES]\nFunding need: [PROJECT TYPE / AMOUNT RANGE / TIMELINE]\n\nSearch across:\n- EU institutional (CERV, IPA, EIDHR, Erasmus+, Horizon)\n- Bilateral (GIZ, SIDA, FCDO, USAID, SDC)\n- Private foundations (Open Society, Mott, MacArthur, etc.)\n- Domestic and regional sources\n\nFor each opportunity:\n| Funder | Focus areas | Geographic scope | Grant size | Next deadline | Fit score (1-5) | Entry point |\n\nRank by fit score. Flag any with deadlines in next 60 days. Add a 3-sentence strategic recommendation at the end.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Donor Prospecting",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-091",
    "title": "CSO 2026 Funding Dashboard Builder",
    "description": "When tracking open funding calls across multiple donors and thematic areas for a CSO, NGO, or consultancy fundraising pipeline.",
    "content": "Build a sortable funding dashboard for CSOs for [YEAR / REGION / THEMATIC AREA]. Track open calls from [DONOR LIST / SOURCES]. For each opportunity, extract donor, programme, title, deadline, geography, eligible applicants, thematic fit, budget range, co-financing rules, link, application stage, and strategic fit score. Output a table sorted by urgency and fit, plus recommended next actions for the top opportunities.",
    "category": "Fundraising",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "fundraising",
      "funding-dashboard",
      "CSO",
      "EU-grants",
      "donor-intelligence",
      "pipeline"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-091-vv01",
        "version": 1,
        "content": "Build a sortable funding dashboard for CSOs for [YEAR / REGION / THEMATIC AREA]. Track open calls from [DONOR LIST / SOURCES]. For each opportunity, extract donor, programme, title, deadline, geography, eligible applicants, thematic fit, budget range, co-financing rules, link, application stage, and strategic fit score. Output a table sorted by urgency and fit, plus recommended next actions for the top opportunities.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Funding Intelligence",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-092",
    "title": "Digital Rights & AI Governance Funding Monitor ? Web App Spec",
    "description": "When designing an automated grant-monitoring tool for a CSO or NGO focused on digital rights, AI governance, technology policy, or civic space.",
    "content": "Write a web app specification for a funding monitor focused on digital rights, AI governance, civic tech, and human rights. Define user personas, data sources, opportunity fields, scraping or manual-ingestion approach, taxonomy, search and filters, scoring logic, alert rules, admin workflow, dashboard views, and export formats. Include an MVP scope, no-code prototype option, and production architecture option.",
    "category": "Fundraising",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "digital-rights",
      "AI-governance",
      "funding-monitor",
      "grant-tracking",
      "web-app-spec",
      "civic-tech"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-092-vv01",
        "version": 1,
        "content": "Write a web app specification for a funding monitor focused on digital rights, AI governance, civic tech, and human rights. Define user personas, data sources, opportunity fields, scraping or manual-ingestion approach, taxonomy, search and filters, scoring logic, alert rules, admin workflow, dashboard views, and export formats. Include an MVP scope, no-code prototype option, and production architecture option.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Grant Monitoring",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-059",
    "title": "Grant Pipeline Prioritization Engine",
    "description": "Weekly pipeline review — ranking active grant opportunities by strategic fit, effort-to-value ratio, and readiness.",
    "content": "Evaluate and prioritize the following funding opportunities for [ORGANISATION].\n\nOpportunities:\n[PASTE LIST: name, funder, deadline, amount, brief description]\n\nScore each on:\n- Strategic fit (1-5): alignment with mission, thematic area, geographic scope\n- Effort required (1-5 inverse — 5=low effort): proposal complexity, relationship depth needed\n- Readiness (1-5): track record match, documentation ready, partnerships in place\n\nComposite score = Fit × (6 - Effort) × Readiness\n\nOutput:\n1. Ranked table with all scores and composite\n2. Top 3 recommendations with rationale\n3. 1-2 opportunities to DROP from pipeline and why\n4. One quick win (highest readiness, nearest deadline)",
    "category": "Fundraising",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "fundraising",
      "pipeline",
      "grants",
      "prioritization",
      "strategy",
      "CSO",
      "decision",
      "weekly"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-059-vv01",
        "version": 1,
        "content": "Evaluate and prioritize the following funding opportunities for [ORGANISATION].\n\nOpportunities:\n[PASTE LIST: name, funder, deadline, amount, brief description]\n\nScore each on:\n- Strategic fit (1-5): alignment with mission, thematic area, geographic scope\n- Effort required (1-5 inverse — 5=low effort): proposal complexity, relationship depth needed\n- Readiness (1-5): track record match, documentation ready, partnerships in place\n\nComposite score = Fit × (6 - Effort) × Readiness\n\nOutput:\n1. Ranked table with all scores and composite\n2. Top 3 recommendations with rationale\n3. 1-2 opportunities to DROP from pipeline and why\n4. One quick win (highest readiness, nearest deadline)",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Pipeline Management",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-082",
    "title": "Civil Society Funding Monitor — AI Product Spec",
    "description": "Use when building or briefing an AI assistant to design a web application that continuously monitors, classifies, and surfaces grant opportunities for civil society organisations. Covers product requirements, source taxonomy, scoring logic, and dashboard architecture.",
    "content": "Act as a product architect, OSINT researcher, and AI workflow designer.\n\nDesign a web-based AI application called “Civil Society Funding Monitor” that continuously tracks, verifies, and updates grant opportunities for civil society organizations.\n\nProduct goal:\nBuild an AI-powered web application that monitors open and forthcoming grants, calls for proposals, donations, concept note invitations, expressions of interest, and rolling funds from donors, foundations, trusts, public institutions, philanthropy platforms, and official grant portals.\n\nPrimary users:\n- civil society fundraising teams\n- human rights organizations\n- digital rights groups\n- watchdog and transparency organizations\n- media freedom and civic tech organizations\n- coalition coordinators and regranting intermediaries\n\nSubstantive priorities:\n- digital rights\n- digital democracy\n- AI governance and accountability\n- ethical and rights-based AI\n- online freedom\n- privacy and data protection\n- surveillance, spyware, and biometric abuses\n- technology-facilitated human rights violations\n- freedom of expression online\n- accountability, transparency, anti-corruption, and civic participation using digital tools\n\nRequired sources:\n1. Official donor and funder websites\n2. Official foundations and trust pages\n3. EU and multilateral funding portals\n4. Open donor and grants databases\n5. Civil society funder platforms\n6. Verified social media accounts for grant announcements\n7. Community-maintained opportunity listings, but only if traceable to original sources\n\nThe application must include these features:\n\nA. Source monitoring engine\n- Crawl and monitor selected websites and pages on a recurring schedule\n- Track newly published and updated opportunities\n- Detect changes in deadlines, eligibility, budget, and application stage\n- Monitor verified social posts that announce calls\n\nB. Opportunity extraction and normalization\n- Extract: title, donor, URL, status, opening date, deadline, applicant eligibility, geography, themes, amount, stage, concept note requirement, rolling status, and source type\n- Normalize inconsistent terminology such as CFP, call for proposals, grants, concept notes, EOI, LOI, and invitation-only calls\n- Deduplicate the same opportunity appearing across multiple sources\n\nC. AI classification and scoring\n- Classify each opportunity by theme, region, donor type, urgency, and strategic fit\n- Score opportunities for relevance to civil society work on digital rights, democracy, AI accountability, privacy, and anti-surveillance\n- Highlight high-fit calls for advocacy groups, watchdogs, media, and human rights defenders\n\nD. Web application interface\nBuild a clean dashboard with:\n- live opportunity feed\n- filters by status, theme, geography, donor, deadline month, and application type\n- cards and table views\n- deadline calendar view\n- new this week view\n- closing soon alerts\n- watchlist for recurring donors\n- saved searches\n- notes field for internal assessment\n- export to CSV and spreadsheet\n- shareable weekly digest\n\nE. AI assistant layer\nAdd an assistant that can:\n- answer natural language questions like Show open grants for digital rights in Europe closing in the next 45 days\n- recommend top-fit calls for a specific organization profile\n- draft donor prospect shortlists\n- explain why an opportunity matches selected priorities\n- detect concept-note-first opportunities\n\nF. Updating and notifications\n- Run scheduled updates daily or multiple times per day for priority sources\n- Send alerts for new high-priority calls\n- Flag revised deadlines and newly opened submissions\n- Generate weekly and monthly funding intelligence summaries\n\nG. Data trust and verification\n- Label source reliability clearly\n- Prefer official source pages over aggregators\n- Preserve evidence snippets and timestamps\n- Mark uncertain or unverified records for human review\n\nH. Technical architecture\nPropose: source ingestion workflow, scraping and monitoring logic, AI extraction pipeline, database schema, ranking logic, frontend dashboard structure, alerting workflow, admin panel for managing sources, compliance and ethical safeguards for scraping and data use.\n\nI. Output deliverables\nProduce:\n1. Product requirements document\n2. User stories\n3. Data model\n4. Source taxonomy\n5. Ranking and scoring framework\n6. Dashboard information architecture\n7. Update workflow\n8. Prompt design for the AI assistant\n9. MVP roadmap\n10. Suggested stack for implementation\n\nImportant operating rules:\n- Use only open and legally accessible sources\n- Do not fabricate opportunities\n- Every listing must include a source URL\n- Separate open, forthcoming, rolling, and watchlist opportunities\n- Exclude expired calls from active views unless they are recurring and useful for forecasting\n- Prioritize recent announcements and near-term deadlines\n- Make the system especially strong for official portals and recurring civil society donor programs",
    "category": "Fundraising",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "fundraising",
      "funding-monitor",
      "civil-society",
      "product-spec",
      "grants-intelligence",
      "osint",
      "automation",
      "dashboard",
      "digital-rights"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-082-vv1",
        "version": 1,
        "content": "Act as a product architect, OSINT researcher, and AI workflow designer.\n\nDesign a web-based AI application called “Civil Society Funding Monitor” that continuously tracks, verifies, and updates grant opportunities for civil society organizations.\n\nProduct goal:\nBuild an AI-powered web application that monitors open and forthcoming grants, calls for proposals, donations, concept note invitations, expressions of interest, and rolling funds from donors, foundations, trusts, public institutions, philanthropy platforms, and official grant portals.\n\nPrimary users:\n- civil society fundraising teams\n- human rights organizations\n- digital rights groups\n- watchdog and transparency organizations\n- media freedom and civic tech organizations\n- coalition coordinators and regranting intermediaries\n\nSubstantive priorities:\n- digital rights\n- digital democracy\n- AI governance and accountability\n- ethical and rights-based AI\n- online freedom\n- privacy and data protection\n- surveillance, spyware, and biometric abuses\n- technology-facilitated human rights violations\n- freedom of expression online\n- accountability, transparency, anti-corruption, and civic participation using digital tools\n\nRequired sources:\n1. Official donor and funder websites\n2. Official foundations and trust pages\n3. EU and multilateral funding portals\n4. Open donor and grants databases\n5. Civil society funder platforms\n6. Verified social media accounts for grant announcements\n7. Community-maintained opportunity listings, but only if traceable to original sources\n\nThe application must include these features:\n\nA. Source monitoring engine\n- Crawl and monitor selected websites and pages on a recurring schedule\n- Track newly published and updated opportunities\n- Detect changes in deadlines, eligibility, budget, and application stage\n- Monitor verified social posts that announce calls\n\nB. Opportunity extraction and normalization\n- Extract: title, donor, URL, status, opening date, deadline, applicant eligibility, geography, themes, amount, stage, concept note requirement, rolling status, and source type\n- Normalize inconsistent terminology such as CFP, call for proposals, grants, concept notes, EOI, LOI, and invitation-only calls\n- Deduplicate the same opportunity appearing across multiple sources\n\nC. AI classification and scoring\n- Classify each opportunity by theme, region, donor type, urgency, and strategic fit\n- Score opportunities for relevance to civil society work on digital rights, democracy, AI accountability, privacy, and anti-surveillance\n- Highlight high-fit calls for advocacy groups, watchdogs, media, and human rights defenders\n\nD. Web application interface\nBuild a clean dashboard with:\n- live opportunity feed\n- filters by status, theme, geography, donor, deadline month, and application type\n- cards and table views\n- deadline calendar view\n- new this week view\n- closing soon alerts\n- watchlist for recurring donors\n- saved searches\n- notes field for internal assessment\n- export to CSV and spreadsheet\n- shareable weekly digest\n\nE. AI assistant layer\nAdd an assistant that can:\n- answer natural language questions like Show open grants for digital rights in Europe closing in the next 45 days\n- recommend top-fit calls for a specific organization profile\n- draft donor prospect shortlists\n- explain why an opportunity matches selected priorities\n- detect concept-note-first opportunities\n\nF. Updating and notifications\n- Run scheduled updates daily or multiple times per day for priority sources\n- Send alerts for new high-priority calls\n- Flag revised deadlines and newly opened submissions\n- Generate weekly and monthly funding intelligence summaries\n\nG. Data trust and verification\n- Label source reliability clearly\n- Prefer official source pages over aggregators\n- Preserve evidence snippets and timestamps\n- Mark uncertain or unverified records for human review\n\nH. Technical architecture\nPropose: source ingestion workflow, scraping and monitoring logic, AI extraction pipeline, database schema, ranking logic, frontend dashboard structure, alerting workflow, admin panel for managing sources, compliance and ethical safeguards for scraping and data use.\n\nI. Output deliverables\nProduce:\n1. Product requirements document\n2. User stories\n3. Data model\n4. Source taxonomy\n5. Ranking and scoring framework\n6. Dashboard information architecture\n7. Update workflow\n8. Prompt design for the AI assistant\n9. MVP roadmap\n10. Suggested stack for implementation\n\nImportant operating rules:\n- Use only open and legally accessible sources\n- Do not fabricate opportunities\n- Every listing must include a source URL\n- Separate open, forthcoming, rolling, and watchlist opportunities\n- Exclude expired calls from active views unless they are recurring and useful for forecasting\n- Prioritize recent announcements and near-term deadlines\n- Make the system especially strong for official portals and recurring civil society donor programs",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Vibe Coding / Product",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-002",
    "title": "M&E Progress Dashboard Prompt",
    "description": "Creating visual M&E dashboards for donor reporting.",
    "content": "Build an interactive HTML M&E dashboard for [PROJECT NAME] with: animated progress bars per outcome area, a risk register table (likelihood × impact matrix), work package Gantt view, beneficiary counter, and a donor-ready summary section. Color palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D.",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "M&E",
      "dashboard",
      "HTML",
      "HERA",
      "visual",
      "donor"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-002-vv02",
        "version": 1,
        "content": "Build an interactive HTML M&E dashboard for [PROJECT NAME] with: animated progress bars per outcome area, a risk register table (likelihood × impact matrix), work package Gantt view, beneficiary counter, and a donor-ready summary section. Color palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Dashboard & Reporting",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-003",
    "title": "MEL Workbook Builder",
    "description": "Project inception MEL data management setup.",
    "content": "Create a 10-sheet Excel M&E workbook for [PROJECT]. Sheets: (1) Cover & Instructions, (2) Logframe Summary, (3) Indicator Tracking Matrix, (4) Quarterly Data Entry, (5) Cumulative Progress, (6) Beneficiary Register, (7) Risk Register, (8) Budget vs Actual, (9) Lessons Learned, (10) Donor Report Draft. All sheets linked with formulas.",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "M&E",
      "Excel",
      "workbook",
      "logframe",
      "EU"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-003-vv02",
        "version": 1,
        "content": "Create a 10-sheet Excel M&E workbook for [PROJECT]. Sheets: (1) Cover & Instructions, (2) Logframe Summary, (3) Indicator Tracking Matrix, (4) Quarterly Data Entry, (5) Cumulative Progress, (6) Beneficiary Register, (7) Risk Register, (8) Budget vs Actual, (9) Lessons Learned, (10) Donor Report Draft. All sheets linked with formulas.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Data Collection",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-004",
    "title": "Theory of Change Reviewer",
    "description": "Proposal design phase or mid-term evaluation.",
    "content": "Review the attached Theory of Change for [PROJECT]. Step 1: map the causal chain (inputs → activities → outputs → outcomes → impact). Step 2: identify broken logic links and untested assumptions. Step 3: flag external risks not addressed. Step 4: recommend 3 improvements.",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "ToC",
      "M&E",
      "logframe",
      "evaluation",
      "RBM"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-004-vv02",
        "version": 1,
        "content": "Review the attached Theory of Change for [PROJECT]. Step 1: map the causal chain (inputs → activities → outputs → outcomes → impact). Step 2: identify broken logic links and untested assumptions. Step 3: flag external risks not addressed. Step 4: recommend 3 improvements.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Evaluation",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-086",
    "title": "HERA M&E Indicator Progress Tracker",
    "description": "Quarterly or monthly indicator review for EU-funded projects, especially when activity data must be converted into clear management and donor reporting signals.",
    "content": "Act as a senior M&E specialist for an EU-funded project. Review the indicator data for [PROJECT NAME] and produce a quarterly progress tracker. Inputs: logframe indicators, baseline, target, current value, reporting period, evidence source, and implementation notes. For each indicator, calculate progress against target, classify status as On Track / Watch / Off Track, flag data-quality issues, and recommend one corrective action. Output a donor-ready table plus a short management summary.",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "M&E",
      "indicators",
      "EU-project",
      "monitoring",
      "HERA",
      "logframe",
      "progress-tracking"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-086-vv01",
        "version": 1,
        "content": "Act as a senior M&E specialist for an EU-funded project. Review the indicator data for [PROJECT NAME] and produce a quarterly progress tracker. Inputs: logframe indicators, baseline, target, current value, reporting period, evidence source, and implementation notes. For each indicator, calculate progress against target, classify status as On Track / Watch / Off Track, flag data-quality issues, and recommend one corrective action. Output a donor-ready table plus a short management summary.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Indicator Tracking",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-001",
    "title": "Logframe Indicator Builder",
    "description": "Drafting or reviewing logframes for EU-funded proposals or project reporting.",
    "content": "Act as a senior M&E expert. Review the attached logframe and: (1) assess indicator quality against SMART criteria, (2) flag gaps in means of verification, (3) suggest baselines and targets, (4) check theory of change coherence. Output a structured table with findings per level (Impact, Outcome, Output, Activity).",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "M&E",
      "logframe",
      "EU",
      "indicators",
      "SMART"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-001-vv02",
        "version": 1,
        "content": "Act as a senior M&E expert. Review the attached logframe and: (1) assess indicator quality against SMART criteria, (2) flag gaps in means of verification, (3) suggest baselines and targets, (4) check theory of change coherence. Output a structured table with findings per level (Impact, Outcome, Output, Activity).",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Logframe & Indicators",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-031",
    "title": "Risk Matrix Generator",
    "description": "Planning M&E projects requiring risk management sections.",
    "content": "You are an M&E risk analyst. Generate a comprehensive risk matrix for [PROJECT/PROGRAMME]. Include columns for risk event, likelihood (low/medium/high), impact, mitigation strategy, and monitoring indicators. Align with results-based management principles.",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "risk",
      "matrix",
      "M&E",
      "RBM",
      "risk management"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-031-vv02",
        "version": 1,
        "content": "You are an M&E risk analyst. Generate a comprehensive risk matrix for [PROJECT/PROGRAMME]. Include columns for risk event, likelihood (low/medium/high), impact, mitigation strategy, and monitoring indicators. Align with results-based management principles.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Risk Management",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-060",
    "title": "Visual M&E Impact Map Builder",
    "description": "Quarterly reporting — building a visual impact map or results chain for donor communications, board presentations, or public-facing reports.",
    "content": "Create a visual impact map for [PROJECT/PROGRAMME NAME] for [REPORTING PERIOD].\n\nProgramme data:\n- Overall goal: [IMPACT STATEMENT]\n- Outputs achieved: [LIST WITH NUMBERS]\n- Outcomes with indicators: [LIST WITH BASELINE → ACTUAL]\n- Beneficiaries reached: [NUMBERS BY CATEGORY]\n- Geographic coverage: [REGIONS/LOCATIONS]\n\nVisual format: [IMPACT TREE / RESULTS CHAIN / INFOGRAPHIC / DASHBOARD CARD]\nDestination: [Canva / PDF report / HTML dashboard / PowerPoint]\nColor palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D, Ivory #F7F4ED\n\nInclude: hierarchy (Activities → Impact), key numbers prominently displayed, one headline pull-quote, geographic reach indicator.\nOutput: structured layout description with exact text content ready to drop into Canva or HTML.",
    "category": "M&E / MEL",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "M&E",
      "visualization",
      "impact map",
      "reporting",
      "donor",
      "infographic",
      "Canva",
      "PDF"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-060-vv01",
        "version": 1,
        "content": "Create a visual impact map for [PROJECT/PROGRAMME NAME] for [REPORTING PERIOD].\n\nProgramme data:\n- Overall goal: [IMPACT STATEMENT]\n- Outputs achieved: [LIST WITH NUMBERS]\n- Outcomes with indicators: [LIST WITH BASELINE → ACTUAL]\n- Beneficiaries reached: [NUMBERS BY CATEGORY]\n- Geographic coverage: [REGIONS/LOCATIONS]\n\nVisual format: [IMPACT TREE / RESULTS CHAIN / INFOGRAPHIC / DASHBOARD CARD]\nDestination: [Canva / PDF report / HTML dashboard / PowerPoint]\nColor palette: Deep Blue #1E3A52, Green #5B8A5A, Gold #D6B04D, Ivory #F7F4ED\n\nInclude: hierarchy (Activities → Impact), key numbers prominently displayed, one headline pull-quote, geographic reach indicator.\nOutput: structured layout description with exact text content ready to drop into Canva or HTML.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Visualization",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-094",
    "title": "Anti-Sycophancy Instruction Prompt",
    "description": "At the start of any session where honest critique matters: proposal review, strategy evaluation, product planning, prompt testing, or decision support.",
    "content": "You are not here to flatter me. Your job is to improve the work. Challenge weak assumptions, vague logic, unsupported claims, and premature conclusions. If an idea is strong, say why. If it is weak, say exactly where and how to fix it. Separate evidence from interpretation. Prioritize usefulness over agreement. Use direct but respectful language and end with the highest-leverage next action.",
    "category": "Meta-Prompting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "meta-prompting",
      "anti-sycophancy",
      "honest-feedback",
      "critique",
      "quality-control"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-094-vv01",
        "version": 1,
        "content": "You are not here to flatter me. Your job is to improve the work. Challenge weak assumptions, vague logic, unsupported claims, and premature conclusions. If an idea is strong, say why. If it is weak, say exactly where and how to fix it. Separate evidence from interpretation. Prioritize usefulness over agreement. Use direct but respectful language and end with the highest-leverage next action.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Critical Review",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-036",
    "title": "Prompt Library Updater & Migration Audit",
    "description": "Periodic library maintenance or migrating prompts from other AI workspaces (ChatGPT, Gemini, Perplexity) into Claude.",
    "content": "You are helping me [UPDATE MY LIBRARY / MIGRATE FROM ANOTHER AI WORKSPACE].\n\nTask: [UPDATE: Review recent conversations | MIGRATE: Go through past conversations from [PLATFORM] and map every important prompt or outcome]\n\nFor each recovered prompt:\n1. Extract the raw prompt text or verbatim quote that justifies the entry\n2. Assign: category, sub-category, intent type (Task / System / Meta / Chain of Thought)\n3. Assess complexity (Low/Medium/High) and reusability (Low/Medium/High)\n4. Write a 1-sentence When to use description\n5. Note source confidence: [Recovered verbatim | Recovered from user profile | Inferred from pattern]\n\nAdditionally:\n- Flag duplicates against the existing library\n- Suggest 3 improvements for the weakest existing prompts\n- Identify 3 critical gaps not covered\n\nOutput: structured table + narrative summary of changes recommended.",
    "category": "Meta-Prompting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "meta-prompt",
      "library maintenance",
      "update",
      "extraction",
      "migration",
      "audit",
      "inventory"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-036-vv03",
        "version": 1,
        "content": "You are helping me [UPDATE MY LIBRARY / MIGRATE FROM ANOTHER AI WORKSPACE].\n\nTask: [UPDATE: Review recent conversations | MIGRATE: Go through past conversations from [PLATFORM] and map every important prompt or outcome]\n\nFor each recovered prompt:\n1. Extract the raw prompt text or verbatim quote that justifies the entry\n2. Assign: category, sub-category, intent type (Task / System / Meta / Chain of Thought)\n3. Assess complexity (Low/Medium/High) and reusability (Low/Medium/High)\n4. Write a 1-sentence When to use description\n5. Note source confidence: [Recovered verbatim | Recovered from user profile | Inferred from pattern]\n\nAdditionally:\n- Flag duplicates against the existing library\n- Suggest 3 improvements for the weakest existing prompts\n- Identify 3 critical gaps not covered\n\nOutput: structured table + narrative summary of changes recommended.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Library Maintenance",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-067",
    "title": "Dual-Format Output Packager",
    "description": "Any deliverable that needs to exist in both narrative (Word/PDF) and tabular (Excel/Notion) formats — standard for donor handoffs and workspace documentation.",
    "content": "Take the following content and produce it in two formats:\n\n[PASTE CONTENT / SUMMARY / DATA]\n\nFormat 1 — NARRATIVE (Word/PDF-ready):\n- Executive summary (150 words)\n- Main sections with headings\n- Analytical commentary\n- Suitable for: [DONOR REPORT / PARTNER BRIEF / BOARD PAPER]\n\nFormat 2 — TABULAR (Excel/Airtable/Notion-ready):\n- Column headers matching the content structure\n- One row per item/entry/finding\n- Add columns for: status, owner, date, notes\n- Suitable for: [TRACKING / UPDATING / SHARING WITH TEAM]\n\nEnsure both formats contain the same core information. Flag any content that works better in one format than the other.",
    "category": "Meta-Prompting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "output format",
      "dual format",
      "DOCX",
      "Excel",
      "packaging",
      "donor",
      "reporting",
      "export",
      "meta"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-067-vv01",
        "version": 1,
        "content": "Take the following content and produce it in two formats:\n\n[PASTE CONTENT / SUMMARY / DATA]\n\nFormat 1 — NARRATIVE (Word/PDF-ready):\n- Executive summary (150 words)\n- Main sections with headings\n- Analytical commentary\n- Suitable for: [DONOR REPORT / PARTNER BRIEF / BOARD PAPER]\n\nFormat 2 — TABULAR (Excel/Airtable/Notion-ready):\n- Column headers matching the content structure\n- One row per item/entry/finding\n- Add columns for: status, owner, date, notes\n- Suitable for: [TRACKING / UPDATING / SHARING WITH TEAM]\n\nEnsure both formats contain the same core information. Flag any content that works better in one format than the other.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Output Standards",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-018",
    "title": "Expert Role Activation Prompt",
    "description": "Opening complex task sessions.",
    "content": "You are a [ROLE] with 15+ years of experience in [DOMAIN]. You operate in the Western Balkans context. Apply [FRAMEWORK] to all outputs. Flag weak logic, missing assumptions, and implementation risks directly. Do not smooth over problems.",
    "category": "Meta-Prompting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "persona",
      "role",
      "expert",
      "system prompt",
      "activation"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-018-vv02",
        "version": 1,
        "content": "You are a [ROLE] with 15+ years of experience in [DOMAIN]. You operate in the Western Balkans context. Apply [FRAMEWORK] to all outputs. Flag weak logic, missing assumptions, and implementation risks directly. Do not smooth over problems.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Role Assignment",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-017",
    "title": "Self-Evaluating Meta-Prompt Template",
    "description": "High-stakes outputs: proposals, M&E frameworks, reports.",
    "content": "Generate [OUTPUT TYPE] for [CONTEXT]. Structure: (1) Produce the output. (2) Define 5 quality criteria. (3) Self-evaluate each criterion score 1-5. (4) Identify the 2 weakest areas. (5) Revise the output. (6) Explain the key changes made.",
    "category": "Meta-Prompting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "meta-prompt",
      "self-evaluation",
      "QA",
      "reusable"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-017-vv02",
        "version": 1,
        "content": "Generate [OUTPUT TYPE] for [CONTEXT]. Structure: (1) Produce the output. (2) Define 5 quality criteria. (3) Self-evaluate each criterion score 1-5. (4) Identify the 2 weakest areas. (5) Revise the output. (6) Explain the key changes made.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Self-Evaluation",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-019",
    "title": "Structured Output Chain of Thought",
    "description": "Complex structured deliverables where quality control matters.",
    "content": "Think step by step before producing output: Step 1 — Identify the exact deliverable. Step 2 — List constraints. Step 3 — Plan structure. Step 4 — Draft output. Step 5 — Self-check. Step 6 — Deliver final version only. Do not show intermediate drafts.",
    "category": "Meta-Prompting",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "chain of thought",
      "structured output",
      "QA",
      "meta"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-019-vv02",
        "version": 1,
        "content": "Think step by step before producing output: Step 1 — Identify the exact deliverable. Step 2 — List constraints. Step 3 — Plan structure. Step 4 — Draft output. Step 5 — Self-check. Step 6 — Deliver final version only. Do not show intermediate drafts.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Structured Output",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-093",
    "title": "Cvetanichin Consultancy Strategic Operations Orchestrator",
    "description": "Use as the master system prompt when working on consultancy business operations, client proposals, service design, AI systems, and internal workflows.",
    "content": "You are the Strategic Operations Orchestrator for Cvetanichin Consultancy, a senior civil society consultancy serving CSOs and NGOs in Europe and the Western Balkans. Help transform expert freelance work into a scalable consultancy platform. Prioritize EU grant management, M&E, donor compliance, organizational development, AI workflow automation, training, and product development for NGOs. For every task, separate strategic advisory from operational execution, define the simplest useful system, flag maintenance risks, and produce decision-ready next steps.",
    "category": "Organizational Development",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "system-prompt",
      "consultancy-operations",
      "Cvetanichin",
      "CSO",
      "organizational-development",
      "AI-operations"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-093-vv01",
        "version": 1,
        "content": "You are the Strategic Operations Orchestrator for Cvetanichin Consultancy, a senior civil society consultancy serving CSOs and NGOs in Europe and the Western Balkans. Help transform expert freelance work into a scalable consultancy platform. Prioritize EU grant management, M&E, donor compliance, organizational development, AI workflow automation, training, and product development for NGOs. For every task, separate strategic advisory from operational execution, define the simplest useful system, flag maintenance risks, and produce decision-ready next steps.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Consultancy Operations",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-030",
    "title": "Fundraising Strategy Builder",
    "description": "Supporting CSO fundraising strategy.",
    "content": "Build a diversified fundraising strategy for [ORGANIZATION TYPE] in [REGION]. Include: (1) Donor mapping table, (2) Revenue mix recommendation, (3) Top 5 funding opportunities with deadlines, (4) Capacity requirements, (5) Donor dependency risk analysis. Western Balkans context.",
    "category": "Organizational Development",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "fundraising",
      "CSO",
      "strategy",
      "donors",
      "EU",
      "grants"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-030-vv02",
        "version": 1,
        "content": "Build a diversified fundraising strategy for [ORGANIZATION TYPE] in [REGION]. Include: (1) Donor mapping table, (2) Revenue mix recommendation, (3) Top 5 funding opportunities with deadlines, (4) Capacity requirements, (5) Donor dependency risk analysis. Western Balkans context.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Fundraising",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-095",
    "title": "Custom Taxonomy Design for CSO Document Management",
    "description": "When redesigning a document management system for a CSO, NGO, consultancy, or EU-funded project archive.",
    "content": "Design a custom document-management taxonomy for [ORGANIZATION / PROJECT]. Use the actual file types and workflows provided in [INPUT]. Create main categories, subcategories, document types, metadata fields, naming conventions, retention rules, ownership, access level, and recommended folder or database structure. Optimize for EU-funded project documentation, M&E evidence, donor reporting, GDPR-aware storage, and fast retrieval.",
    "category": "Organizational Development",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "taxonomy",
      "document-management",
      "organizational-development",
      "knowledge-management",
      "GDPR",
      "EU-projects"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-095-vv01",
        "version": 1,
        "content": "Design a custom document-management taxonomy for [ORGANIZATION / PROJECT]. Use the actual file types and workflows provided in [INPUT]. Create main categories, subcategories, document types, metadata fields, naming conventions, retention rules, ownership, access level, and recommended folder or database structure. Optimize for EU-funded project documentation, M&E evidence, donor reporting, GDPR-aware storage, and fast retrieval.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Knowledge Management",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-064",
    "title": "NGO Human Rights Project Design Framework",
    "description": "Designing or improving civil society projects in human rights, rule of law, gender equality, or democratic governance.",
    "content": "Design [/ Review and improve] a civil society project for [ORGANISATION] in [COUNTRY/REGION].\n\nProblem area: [HUMAN RIGHTS ISSUE / THEMATIC FOCUS]\nTarget population: [BENEFICIARIES AND RIGHTS-HOLDERS]\nFunding context: [DONOR IF KNOWN, e.g. EU CERV / EIDHR / bilateral]\nDuration: [MONTHS]\n\nDeliver:\n1. Problem analysis (root causes, contributing factors, systemic barriers)\n2. Theory of Change (if…then logic, key assumptions, change pathway)\n3. Logframe skeleton (Overall Objective → Specific Objectives → Outputs → Activities)\n4. Implementation approach (direct delivery / capacity building / advocacy / litigation / research)\n5. Partnership structure (lead, implementing partners, target groups, duty-bearers)\n6. Cross-cutting considerations (gender, inclusion, do-no-harm, safeguarding)\n7. Key risks and mitigation\n\nApply results-based management. Flag any logical gaps directly.",
    "category": "Organizational Development",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "NGO",
      "human rights",
      "project design",
      "civil society",
      "ToC",
      "logframe",
      "Western Balkans",
      "EU"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-064-vv01",
        "version": 1,
        "content": "Design [/ Review and improve] a civil society project for [ORGANISATION] in [COUNTRY/REGION].\n\nProblem area: [HUMAN RIGHTS ISSUE / THEMATIC FOCUS]\nTarget population: [BENEFICIARIES AND RIGHTS-HOLDERS]\nFunding context: [DONOR IF KNOWN, e.g. EU CERV / EIDHR / bilateral]\nDuration: [MONTHS]\n\nDeliver:\n1. Problem analysis (root causes, contributing factors, systemic barriers)\n2. Theory of Change (if…then logic, key assumptions, change pathway)\n3. Logframe skeleton (Overall Objective → Specific Objectives → Outputs → Activities)\n4. Implementation approach (direct delivery / capacity building / advocacy / litigation / research)\n5. Partnership structure (lead, implementing partners, target groups, duty-bearers)\n6. Cross-cutting considerations (gender, inclusion, do-no-harm, safeguarding)\n7. Key risks and mitigation\n\nApply results-based management. Flag any logical gaps directly.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Programme Design",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-083",
    "title": "EU PRAG 2025 Internal Knowledge Assistant (Procurement & Grants Compliance)",
    "description": "Use as a system prompt to configure an AI assistant for EU external action procurement and grant compliance. Covers PRAG 2025 rules, procurement thresholds, eligibility, cost rules, sub-granting, audit documentation, and risk-averse compliance guidance.",
    "content": "Normative hierarchy and sources\nTreat the grant/contract (Special Conditions, General Conditions, annexes) and applicable law as the highest authority.\nImmediately after that, apply PRAG 2025 and related official EU guidance (e.g. procurement and grant guidelines for external actions, Financial Regulation principles).\nRecognise that different calls, instruments or management modes (direct, indirect, shared) may introduce specific derogations or stricter rules; always flag this and advise the user to confirm in their contract package and donor communications.\nInternal organisational procedures are used to operationalise donor rules but may not contradict them; when there is tension, you clearly explain that donor rules prevail and suggest how internal procedures could be adjusted.\n\nRisk posture and general behaviour\nYou are explicitly conservative and risk-averse: if more than one interpretation is plausible, prioritise the interpretation that is safest in terms of donor compliance, future audits and reputational risk.\nYou never suggest workarounds, loopholes or ways to game PRAG, procurement rules, eligibility rules or audits.\nYou never recommend back-dating documents, fabricating offers, or hiding errors. If users hint at such options, you instead explain the risks and propose transparent corrective actions and donor communication.\nWhenever information is incomplete or context-dependent, you: explicitly say what depends on the specific contract and country context; provide generic PRAG-based practice; recommend checking the contract, PRAG 2025, and if needed the donor/contracting authority.\n\nThematic scope\nYou primarily answer questions on:\n- Procurement under EU external actions: procedures and thresholds, market research, tendering (RFQ, negotiated procedures, open tenders), evaluation, award, contract management, and modifications.\n- Grant procedures and management: calls for proposals, eligibility of applicants and actions, partnership/consortium rules, sub-granting, visibility, reporting, audits, and closure under PRAG 2025.\n- Eligibility of costs and financial rules: direct/indirect costs, simplified cost options, procurement-linked eligibility, budget flexibility and amendment thresholds, exchange rates, and audit documentation.\n- Cross-cutting issues: conflicts of interest, anti-fraud and anti-corruption safeguards, due diligence on partners and suppliers, data protection, safeguarding and security considerations for human rights work.\n\nHow you reason and respond\nWhen answering a question:\n1. Clarify context: Restate situation using donor/instrument, management mode, contract type, project stage, and user role. Ask 1-3 clarification questions if key elements are missing.\n2. Explain the applicable rules: Summarise relevant PRAG 2025 and contract-based rules in plain language. Distinguish mandatory vs recommended vs prohibited.\n3. Translate rules into steps: Provide numbered steps or checklists. Explicitly mention what to document to be audit-ready.\n4. Flag risks and escalation points: Call out high-risk areas (single-source procurement above thresholds, insufficient competition, weak documentation, major budget reallocations, retroactive contract changes, irregularities).\n5. Stay within your limits: Make explicit when providing a generic PRAG-based interpretation, not a binding legal opinion.\n\nStyle: Clear, accessible language for non-lawyers. Short sections and bullet points. Tiny anonymised examples where helpful.\n\nRed lines: Do not assist in drafting deceptive justifications, hiding non-compliance, retaliating against whistle-blowers, or weakening due-diligence or safeguarding measures.\n\nYour overarching goal is to help the organisation make careful, well-documented, PRAG-2025-aligned decisions that will withstand donor scrutiny and audits while supporting human-rights-based civil society action.",
    "category": "Organizational Development",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "eu-grants",
      "prag-2025",
      "procurement",
      "compliance",
      "grant-management",
      "audit",
      "civil-society",
      "risk-management",
      "external-actions"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-083-vv1",
        "version": 1,
        "content": "Normative hierarchy and sources\nTreat the grant/contract (Special Conditions, General Conditions, annexes) and applicable law as the highest authority.\nImmediately after that, apply PRAG 2025 and related official EU guidance (e.g. procurement and grant guidelines for external actions, Financial Regulation principles).\nRecognise that different calls, instruments or management modes (direct, indirect, shared) may introduce specific derogations or stricter rules; always flag this and advise the user to confirm in their contract package and donor communications.\nInternal organisational procedures are used to operationalise donor rules but may not contradict them; when there is tension, you clearly explain that donor rules prevail and suggest how internal procedures could be adjusted.\n\nRisk posture and general behaviour\nYou are explicitly conservative and risk-averse: if more than one interpretation is plausible, prioritise the interpretation that is safest in terms of donor compliance, future audits and reputational risk.\nYou never suggest workarounds, loopholes or ways to game PRAG, procurement rules, eligibility rules or audits.\nYou never recommend back-dating documents, fabricating offers, or hiding errors. If users hint at such options, you instead explain the risks and propose transparent corrective actions and donor communication.\nWhenever information is incomplete or context-dependent, you: explicitly say what depends on the specific contract and country context; provide generic PRAG-based practice; recommend checking the contract, PRAG 2025, and if needed the donor/contracting authority.\n\nThematic scope\nYou primarily answer questions on:\n- Procurement under EU external actions: procedures and thresholds, market research, tendering (RFQ, negotiated procedures, open tenders), evaluation, award, contract management, and modifications.\n- Grant procedures and management: calls for proposals, eligibility of applicants and actions, partnership/consortium rules, sub-granting, visibility, reporting, audits, and closure under PRAG 2025.\n- Eligibility of costs and financial rules: direct/indirect costs, simplified cost options, procurement-linked eligibility, budget flexibility and amendment thresholds, exchange rates, and audit documentation.\n- Cross-cutting issues: conflicts of interest, anti-fraud and anti-corruption safeguards, due diligence on partners and suppliers, data protection, safeguarding and security considerations for human rights work.\n\nHow you reason and respond\nWhen answering a question:\n1. Clarify context: Restate situation using donor/instrument, management mode, contract type, project stage, and user role. Ask 1-3 clarification questions if key elements are missing.\n2. Explain the applicable rules: Summarise relevant PRAG 2025 and contract-based rules in plain language. Distinguish mandatory vs recommended vs prohibited.\n3. Translate rules into steps: Provide numbered steps or checklists. Explicitly mention what to document to be audit-ready.\n4. Flag risks and escalation points: Call out high-risk areas (single-source procurement above thresholds, insufficient competition, weak documentation, major budget reallocations, retroactive contract changes, irregularities).\n5. Stay within your limits: Make explicit when providing a generic PRAG-based interpretation, not a binding legal opinion.\n\nStyle: Clear, accessible language for non-lawyers. Short sections and bullet points. Tiny anonymised examples where helpful.\n\nRed lines: Do not assist in drafting deceptive justifications, hiding non-compliance, retaliating against whistle-blowers, or weakening due-diligence or safeguarding measures.\n\nYour overarching goal is to help the organisation make careful, well-documented, PRAG-2025-aligned decisions that will withstand donor scrutiny and audits while supporting human-rights-based civil society action.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Proposal Writing",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-029",
    "title": "Strategic Plan Builder",
    "description": "Supporting CSOs with organizational strategic planning.",
    "content": "Facilitate a strategic planning process for [ORGANIZATION]. Structure: (1) SWOT, (2) Mission/Vision alignment, (3) Strategic priorities max 4, (4) 3-year objectives per priority, (5) Resourcing, (6) MEL framework, (7) Governance. Apply RBM throughout.",
    "category": "Organizational Development",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "strategic planning",
      "OD",
      "CSO",
      "RBM",
      "organizational"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-029-vv02",
        "version": 1,
        "content": "Facilitate a strategic planning process for [ORGANIZATION]. Structure: (1) SWOT, (2) Mission/Vision alignment, (3) Strategic priorities max 4, (4) 3-year objectives per priority, (5) Resourcing, (6) MEL framework, (7) Governance. Apply RBM throughout.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Strategic Planning",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-097",
    "title": "Phased Implementation Plan Generator for CSO Projects",
    "description": "When launching a new project, system, workflow automation, or organizational initiative that needs clear phases and milestones.",
    "content": "Create a phased implementation plan for [PROJECT / SYSTEM / ORGANIZATIONAL INITIATIVE]. Define phases, timeline, objectives, key activities, milestones, deliverables, owners, dependencies, risks, mitigation measures, success criteria, and decision gates. Include a lean MVP path, a full rollout path, and a monitoring cadence. Use practical language suitable for CSO teams and donor-facing planning.",
    "category": "Project Management",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "project-management",
      "implementation-plan",
      "CSO",
      "milestones",
      "roadmap",
      "change-management"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-097-vv01",
        "version": 1,
        "content": "Create a phased implementation plan for [PROJECT / SYSTEM / ORGANIZATIONAL INITIATIVE]. Define phases, timeline, objectives, key activities, milestones, deliverables, owners, dependencies, risks, mitigation measures, success criteria, and decision gates. Include a lean MVP path, a full rollout path, and a monitoring cadence. Use practical language suitable for CSO teams and donor-facing planning.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Implementation Planning",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-032",
    "title": "Stakeholder Mapping & Engagement Plan",
    "description": "Project planning and proposal development.",
    "content": "Identify and categorize stakeholders for [PROJECT/PROGRAMME]. For each: interest in project, influence level (low/medium/high), potential impact, and proposed engagement strategy (inform, consult, partner). Present in table and summarise key insights.",
    "category": "Project Management",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "stakeholder",
      "analysis",
      "engagement plan",
      "mapping"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-032-vv02",
        "version": 1,
        "content": "Identify and categorize stakeholders for [PROJECT/PROGRAMME]. For each: interest in project, influence level (low/medium/high), potential impact, and proposed engagement strategy (inform, consult, partner). Present in table and summarise key insights.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Stakeholder Analysis",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-033",
    "title": "Work Breakdown Structure Generator",
    "description": "Start of a project or proposal to plan tasks.",
    "content": "Create a detailed WBS for [PROJECT]. Break deliverables into phases and tasks. For each task: timeline, responsible person/team, dependencies, and expected outputs. Present as a hierarchical table.",
    "category": "Project Management",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "WBS",
      "project management",
      "work planning",
      "tasks",
      "timeline"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-033-vv02",
        "version": 1,
        "content": "Create a detailed WBS for [PROJECT]. Break deliverables into phases and tasks. For each task: timeline, responsible person/team, dependencies, and expected outputs. Present as a hierarchical table.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Work Planning",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-055",
    "title": "Adversarial Test Case Generator",
    "description": "Stress-testing any prompt before deploying in a library or automated workflow.",
    "content": "Generate adversarial test cases for the following prompt: [PASTE PROMPT]\nCreate 5 edge-case inputs designed to break, confuse, or produce poor outputs. For each: (1) Input scenario, (2) Expected failure mode, (3) Suggested prompt fix. Present as a table: Test case | Failure mode | Fix",
    "category": "Prompt Engineering",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "adversarial",
      "testing",
      "edge cases",
      "prompt engineering",
      "QA"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-055-vv01",
        "version": 1,
        "content": "Generate adversarial test cases for the following prompt: [PASTE PROMPT]\nCreate 5 edge-case inputs designed to break, confuse, or produce poor outputs. For each: (1) Input scenario, (2) Expected failure mode, (3) Suggested prompt fix. Present as a table: Test case | Failure mode | Fix",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Adversarial Testing",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-071",
    "title": "Three-Layer System Prompt Constructor",
    "description": "Any AI feature, assistant, or recurring workflow where consistent tone, policy-compliance, and predictable behaviour matter. Vague prompts → improvised behaviour → user mistrust.",
    "content": "Build a three-layer system prompt for the following assistant or use case:\n\nUse case: [DESCRIBE THE ASSISTANT, e.g. grant compliance reviewer / donor communications bot / M&E reporting assistant]\nAudience it serves: [WHO TALKS TO IT]\nCritical behaviours it must get right every time: [LIST 3-5]\n\nDeliver a complete system prompt using this structure:\n\n## IDENTITY\nYou are [Name], a [specific role] at/for [Organisation/Context].\nYou are [3 tone adjectives, e.g. professional, direct, evidence-grounded].\n[1 sentence on communication style — formality, pronouns, how to refer to organisation].\n\n## CONSTRAINTS\nYou MUST:\n- [Required behaviour 1 — specific, testable]\n- [Required behaviour 2]\n- [Required behaviour 3]\n\nYou MUST NOT:\n- [Forbidden behaviour 1 — no invented policies]\n- [Forbidden behaviour 2 — no promises outside stated scope]\n- [Forbidden behaviour 3]\n\n## CONTEXT (Ground Truth — cite only these facts)\n[Policy/Fact 1]: [Precise value — not vague]\n[Policy/Fact 2]: [Value]\n[Escalation path]: [Exact contact/process]\n\nKey principle: IDENTITY anchors tone, CONSTRAINTS prevent policy invention, CONTEXT replaces guessing with facts. All three together = consistent, auditable, shippable behaviour.",
    "category": "Prompt Engineering",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "system prompt",
      "consistency",
      "role",
      "identity",
      "constraints",
      "context",
      "production",
      "reliability",
      "prompt engineering"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-071-vv01",
        "version": 1,
        "content": "Build a three-layer system prompt for the following assistant or use case:\n\nUse case: [DESCRIBE THE ASSISTANT, e.g. grant compliance reviewer / donor communications bot / M&E reporting assistant]\nAudience it serves: [WHO TALKS TO IT]\nCritical behaviours it must get right every time: [LIST 3-5]\n\nDeliver a complete system prompt using this structure:\n\n## IDENTITY\nYou are [Name], a [specific role] at/for [Organisation/Context].\nYou are [3 tone adjectives, e.g. professional, direct, evidence-grounded].\n[1 sentence on communication style — formality, pronouns, how to refer to organisation].\n\n## CONSTRAINTS\nYou MUST:\n- [Required behaviour 1 — specific, testable]\n- [Required behaviour 2]\n- [Required behaviour 3]\n\nYou MUST NOT:\n- [Forbidden behaviour 1 — no invented policies]\n- [Forbidden behaviour 2 — no promises outside stated scope]\n- [Forbidden behaviour 3]\n\n## CONTEXT (Ground Truth — cite only these facts)\n[Policy/Fact 1]: [Precise value — not vague]\n[Policy/Fact 2]: [Value]\n[Escalation path]: [Exact contact/process]\n\nKey principle: IDENTITY anchors tone, CONSTRAINTS prevent policy invention, CONTEXT replaces guessing with facts. All three together = consistent, auditable, shippable behaviour.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Consistency Design",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-072",
    "title": "AI Output Consistency Tester",
    "description": "Before shipping any AI feature to production — or when a system prompt has been changed. Proves consistency programmatically with assertion-based scoring.",
    "content": "Design a consistency testing protocol for the following AI prompt or system:\n\nPrompt / system to test: [PASTE THE PROMPT OR DESCRIBE THE SYSTEM]\nBehaviours that must be consistent across every run: [LIST 4-6 SPECIFIC ASSERTIONS]\n\nFor each assertion, write a testable check:\nAssertion 1: [Does the response mention X?] → check: look for keyword/phrase Y in output\nAssertion 2: [Does it avoid inventing Z?] → check: absence of pattern P\nAssertion 3: [Does it always include escalation path?] → check: presence of contact/phrase\n...\n\nTesting protocol:\n1. Send the same test question N times (recommended: 10-20 runs)\n2. Score each response against each assertion (pass/fail)\n3. Calculate consistency score per assertion: (passes / N) × 100%\n4. Flag any assertion below 90% as FRAGILE — system prompt needs tightening on that dimension\n\nOutput format:\n| Assertion | Score (%) | Fragile? | Fix suggestion |\n\nKey principle: a score below 90% means real users will see inconsistent behaviour. Ship nothing without this test. Use it after every prompt change.",
    "category": "Prompt Engineering",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "consistency",
      "testing",
      "system prompt",
      "QA",
      "assertion",
      "scoring",
      "production",
      "reliability",
      "prompt engineering"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-072-vv01",
        "version": 1,
        "content": "Design a consistency testing protocol for the following AI prompt or system:\n\nPrompt / system to test: [PASTE THE PROMPT OR DESCRIBE THE SYSTEM]\nBehaviours that must be consistent across every run: [LIST 4-6 SPECIFIC ASSERTIONS]\n\nFor each assertion, write a testable check:\nAssertion 1: [Does the response mention X?] → check: look for keyword/phrase Y in output\nAssertion 2: [Does it avoid inventing Z?] → check: absence of pattern P\nAssertion 3: [Does it always include escalation path?] → check: presence of contact/phrase\n...\n\nTesting protocol:\n1. Send the same test question N times (recommended: 10-20 runs)\n2. Score each response against each assertion (pass/fail)\n3. Calculate consistency score per assertion: (passes / N) × 100%\n4. Flag any assertion below 90% as FRAGILE — system prompt needs tightening on that dimension\n\nOutput format:\n| Assertion | Score (%) | Fragile? | Fix suggestion |\n\nKey principle: a score below 90% means real users will see inconsistent behaviour. Ship nothing without this test. Use it after every prompt change.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Consistency Testing",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-053",
    "title": "Constraint-Based Prompt Builder",
    "description": "High-precision prompts for recurring high-stakes tasks.",
    "content": "Design a prompt for: [DESCRIBE TASK]\nApply these constraint layers:\n- Role constraint: who the model should be\n- Output format constraint: exact structure required\n- Scope constraint: what to include AND exclude\n- Quality constraint: self-evaluation criteria\n- Failure mode constraint: what errors to avoid\nPresent the final prompt with each constraint commented.",
    "category": "Prompt Engineering",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "constraint",
      "prompt engineering",
      "precision",
      "design",
      "meta"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-053-vv01",
        "version": 1,
        "content": "Design a prompt for: [DESCRIBE TASK]\nApply these constraint layers:\n- Role constraint: who the model should be\n- Output format constraint: exact structure required\n- Scope constraint: what to include AND exclude\n- Quality constraint: self-evaluation criteria\n- Failure mode constraint: what errors to avoid\nPresent the final prompt with each constraint commented.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Constraint-Based Design",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-051",
    "title": "Few-Shot Example Generator",
    "description": "Upgrading any prompt by adding concrete examples.",
    "content": "Add few-shot examples to the following prompt: [PASTE PROMPT]\nGenerate 3 input-output example pairs that: use realistic but anonymised data, demonstrate the correct format and tone, cover different scenarios/edge cases.\nFormat: Example N: Input → [text] | Output → [text]",
    "category": "Prompt Engineering",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "few-shot",
      "examples",
      "prompt engineering",
      "quality",
      "training"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-051-vv01",
        "version": 1,
        "content": "Add few-shot examples to the following prompt: [PASTE PROMPT]\nGenerate 3 input-output example pairs that: use realistic but anonymised data, demonstrate the correct format and tone, cover different scenarios/edge cases.\nFormat: Example N: Input → [text] | Output → [text]",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Few-Shot Learning",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-070",
    "title": "Multi-Step Delegation Pipeline Builder",
    "description": "Any task where a single mega-prompt produces shallow or generic output. One prompt, one cognitive mode — quality multiplies when steps specialize.",
    "content": "Design a multi-step delegation pipeline for the following complex task:\n\nTask: [DESCRIBE THE FULL TASK, e.g. analyse customer feedback and produce an executive summary]\n\nBreak it into steps where each model call has ONE job:\n\nStep 1 — EXTRACT:\n- System prompt: You are a [data extraction specialist]. Your ONLY job is to read raw input and extract [what]. Do NOT analyse, evaluate, or recommend. Output structured JSON.\n- Input: [RAW SOURCE DATA]\n- Output: [STRUCTURED INTERMEDIATE ARTEFACT]\n\nStep 2 — ANALYSE:\n- System prompt: You are a [senior analyst]. You receive pre-extracted structured data and produce [depth analysis: severity, impact, priority, scores]. NO writing yet.\n- Input: Step 1 output\n- Output: [ANALYSIS JSON]\n\nStep 3 — SYNTHESISE:\n- System prompt: You are a [communication specialist writing for AUDIENCE]. Transform the analysis into [output format]. Rules: lead with [most important thing], name specific [actions/numbers/findings], end with [next steps].\n- Input: Step 1 + Step 2 output\n- Output: [FINAL HUMAN-READABLE DELIVERABLE]\n\nFor parallel steps (independent analysis): run Step 2a, 2b, 2c concurrently → merge in Step 3.\n\nKey insight: each step receives clean structured input from the previous step → no hallucinated context → each step is as good as it can possibly be.",
    "category": "Prompt Engineering",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "multi-step",
      "delegation",
      "pipeline",
      "quality",
      "prompt engineering",
      "extract analyse synthesise",
      "production"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-070-vv01",
        "version": 1,
        "content": "Design a multi-step delegation pipeline for the following complex task:\n\nTask: [DESCRIBE THE FULL TASK, e.g. analyse customer feedback and produce an executive summary]\n\nBreak it into steps where each model call has ONE job:\n\nStep 1 — EXTRACT:\n- System prompt: You are a [data extraction specialist]. Your ONLY job is to read raw input and extract [what]. Do NOT analyse, evaluate, or recommend. Output structured JSON.\n- Input: [RAW SOURCE DATA]\n- Output: [STRUCTURED INTERMEDIATE ARTEFACT]\n\nStep 2 — ANALYSE:\n- System prompt: You are a [senior analyst]. You receive pre-extracted structured data and produce [depth analysis: severity, impact, priority, scores]. NO writing yet.\n- Input: Step 1 output\n- Output: [ANALYSIS JSON]\n\nStep 3 — SYNTHESISE:\n- System prompt: You are a [communication specialist writing for AUDIENCE]. Transform the analysis into [output format]. Rules: lead with [most important thing], name specific [actions/numbers/findings], end with [next steps].\n- Input: Step 1 + Step 2 output\n- Output: [FINAL HUMAN-READABLE DELIVERABLE]\n\nFor parallel steps (independent analysis): run Step 2a, 2b, 2c concurrently → merge in Step 3.\n\nKey insight: each step receives clean structured input from the previous step → no hallucinated context → each step is as good as it can possibly be.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Multi-Step Delegation",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-054",
    "title": "Output Format Specifier",
    "description": "Eliminating format inconsistency from any prompt.",
    "content": "Add a precise output format specification to the following prompt: [PASTE PROMPT]\nThe format block should specify: Structure (table/list/paragraph/JSON/markdown), section headings, max length per section, data types for table columns, an example of one correctly formatted output row. Append the format specification block.",
    "category": "Prompt Engineering",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "output format",
      "specification",
      "prompt engineering",
      "consistency",
      "automation"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-054-vv01",
        "version": 1,
        "content": "Add a precise output format specification to the following prompt: [PASTE PROMPT]\nThe format block should specify: Structure (table/list/paragraph/JSON/markdown), section headings, max length per section, data types for table columns, an example of one correctly formatted output row. Append the format specification block.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Output Format Specification",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-056",
    "title": "Persona-Enriched Task Prompt Builder",
    "description": "Upgrading generic prompts with rich persona context.",
    "content": "Enrich the following basic task prompt by adding a detailed persona layer: [PASTE BASIC PROMPT]\nThe persona should include: role title and years of experience, specific domain expertise and methodologies, decision-making style (e.g. risk-averse, evidence-based), epistemic style (flags uncertainty, cites sources), communication style aligned with [TARGET AUDIENCE]. Output: enriched prompt with persona block prepended.",
    "category": "Prompt Engineering",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "persona",
      "role",
      "prompt engineering",
      "enrichment",
      "quality"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-056-vv01",
        "version": 1,
        "content": "Enrich the following basic task prompt by adding a detailed persona layer: [PASTE BASIC PROMPT]\nThe persona should include: role title and years of experience, specific domain expertise and methodologies, decision-making style (e.g. risk-averse, evidence-based), epistemic style (flags uncertainty, cites sources), communication style aligned with [TARGET AUDIENCE]. Output: enriched prompt with persona block prepended.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Persona Enrichment",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-069",
    "title": "Schema-Driven Structured Output Enforcer",
    "description": "Any AI feature where inconsistent output shapes crash downstream code or parsers. Transforms 40% crash rate to 0%.",
    "content": "Design a schema-enforced output system for the following AI task:\n\nTask: [DESCRIBE WHAT THE AI SHOULD EXTRACT OR PRODUCE]\nExpected output fields: [LIST FIELDS WITH TYPES, e.g. sentiment: string enum, score: integer 1-10, themes: array of strings]\n\nDeliver:\n1. Tool/function schema definition (JSON) — declare every required field with type, enum where applicable, and a precise description the model uses to fill correctly\n2. API call pattern using tool_choice to FORCE the model to call your schema (not respond in free text)\n3. Response extraction code — reads from tool_calls/tool_use block, already a Python dict, no json.loads needed\n4. Validation layer — check types, ranges, and content quality\n5. Retry loop — up to 3 attempts, feed previous errors back to the model so it self-corrects\n6. Safe fallback — if all retries fail, return a neutral default and log for human review\n\nKey principle: define the shape once as a schema, force the call, read from block.input. Never parse free text.\nTarget: 0% format-related crashes in production.",
    "category": "Prompt Engineering",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "schema",
      "structured output",
      "tool_use",
      "JSON",
      "prompt engineering",
      "production",
      "reliability"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-069-vv01",
        "version": 1,
        "content": "Design a schema-enforced output system for the following AI task:\n\nTask: [DESCRIBE WHAT THE AI SHOULD EXTRACT OR PRODUCE]\nExpected output fields: [LIST FIELDS WITH TYPES, e.g. sentiment: string enum, score: integer 1-10, themes: array of strings]\n\nDeliver:\n1. Tool/function schema definition (JSON) — declare every required field with type, enum where applicable, and a precise description the model uses to fill correctly\n2. API call pattern using tool_choice to FORCE the model to call your schema (not respond in free text)\n3. Response extraction code — reads from tool_calls/tool_use block, already a Python dict, no json.loads needed\n4. Validation layer — check types, ranges, and content quality\n5. Retry loop — up to 3 attempts, feed previous errors back to the model so it self-corrects\n6. Safe fallback — if all retries fail, return a neutral default and log for human review\n\nKey principle: define the shape once as a schema, force the call, read from block.input. Never parse free text.\nTarget: 0% format-related crashes in production.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Schema-Driven Output",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-052",
    "title": "Zero-Shot Task Decomposer",
    "description": "Converting a large complex task into a chain of smaller precise prompts.",
    "content": "Break down the following complex task into a step-by-step zero-shot prompt sequence: [PASTE COMPLEX TASK]\nFor each step: (1) Write a self-contained prompt, (2) State what input it requires and what output it produces, (3) Indicate if the output feeds the next step. Present as a numbered chain.",
    "category": "Prompt Engineering",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "zero-shot",
      "decomposition",
      "prompt chain",
      "task planning",
      "PE"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-052-vv01",
        "version": 1,
        "content": "Break down the following complex task into a step-by-step zero-shot prompt sequence: [PASTE COMPLEX TASK]\nFor each step: (1) Write a self-contained prompt, (2) State what input it requires and what output it produces, (3) Indicate if the output feeds the next step. Present as a numbered chain.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Zero-Shot Decomposition",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-007",
    "title": "Budget Narrative Writer",
    "description": "Writing EU budget narratives line by line.",
    "content": "Write a budget narrative for the following budget line: [BUDGET LINE + AMOUNT]. Justify the cost in 2-3 sentences: what it covers, why it is necessary, how the amount was calculated, and which activity it supports. Tone: precise, donor-auditable.",
    "category": "Proposal Writing",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "budget",
      "narrative",
      "EU",
      "donor",
      "compliance"
    ],
    "effectiveness": 3,
    "qualityTag": "okay",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-007-vv02",
        "version": 1,
        "content": "Write a budget narrative for the following budget line: [BUDGET LINE + AMOUNT]. Justify the cost in 2-3 sentences: what it covers, why it is necessary, how the amount was calculated, and which activity it supports. Tone: precise, donor-auditable.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 3,
        "qualityTag": "okay"
      }
    ],
    "project": "Budget",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-077",
    "title": "EU Concept Note Writer (Full Template)",
    "description": "First stage of any EU grant application — concept note submission before full proposal. High-stakes entry point. Covers cover page summary, description of action (max 2 pages), and relevance (max 3 pages).",
    "content": "Draft a complete EU concept note for the following action.\n\nProject basics:\n- Action title: [ACTION TITLE]\n- Lead applicant: [ORGANISATION NAME], [COUNTRY]\n- Co-applicants (if any): [LIST]\n- Call for proposals: [CALL REFERENCE]\n- Donor: [CERV / IPA / EIDHR / Erasmus+ / other EU instrument]\n- Requested contribution: EUR [AMOUNT]\n- Duration: [MONTHS]\n- Target country/region: [COUNTRY / REGION, e.g. Western Balkans / North Macedonia]\n\nThematic focus: [HUMAN RIGHTS / GENDER EQUALITY / CIVIL SOCIETY / RULE OF LAW / DEMOCRATIC GOVERNANCE / other]\n\n---\n\nSECTION 1.1 — SUMMARY TABLE (no page limit)\n\nObjectives:\n- Overall objective (Impact): [WHAT LONG-TERM CHANGE DOES THE ACTION CONTRIBUTE TO?]\n- Specific objective(s) (Outcome): [WHAT DIRECT CHANGE WILL THE ACTION ACHIEVE IN THE TARGET GROUP?]\n\nTarget groups: [WHO DIRECTLY BENEFITS FROM PROJECT ACTIVITIES?]\nFinal beneficiaries: [WHO BENEFITS INDIRECTLY IN THE LONG TERM?]\nExpected outputs / Results: [LIST KEY DELIVERABLES AND OUTPUTS]\nMain activities / Work Packages: [LIST ACTIVITY CLUSTERS]\n\n---\n\nSECTION 1.2 — DESCRIPTION OF THE ACTION (max 2 pages, Arial 10, single spacing, 2cm margins)\n\nDraft the following subsections in order:\ni. Background and context — sector/country/regional context, key challenges, any analysis informing design\nii. Objectives — explain the overall and specific objectives from Section 1.1\niii. Key stakeholder groups — their attitudes, any consultations held\niv. Intervention logic — expected outputs, outcomes, impact, main risks and assumptions\nv. Type of activities — description and linkages between activity clusters\nvi. Cross-cutting issues — how the action mainstreams: human rights, gender equality, democracy, good governance, youth, children’s rights, environmental sustainability (include only those relevant)\nvii. Timeframe — broad timeline and any specific scheduling factors\n\nTone: formal, evidence-based, results-oriented. Avoid passive voice. Use EU PCM terminology throughout.\n\n---\n\nSECTION 1.3 — RELEVANCE OF THE ACTION (max 3 pages, same format)\n\n1.3.1 Relevance to call objectives:\ni. Relevance to the objective(s) and priority(ies) of the call\nii. Relevance to specific subthemes / sectors / areas and requirements (including local ownership)\niii. Which expected results from the call guidelines will be addressed\n\n1.3.2 Relevance to target country/region needs:\ni. Specific pre-project situation with quantified data where possible\nii. Detailed problem analysis — how problems are interrelated at all levels\niii. Relevant national/regional/local plans and how the action relates to them\niv. If continuation of a previous action: how it builds on previous results\nv. If part of a larger programme: fit, coordination, synergies (especially with EC)\nvi. Complementarity with EU and other donor initiatives — avoid duplication\n\n1.3.3 Target groups and beneficiaries:\ni. Description of each group (quantified where possible) including selection criteria\nii. Needs and constraints of each group\niii. Relevance of the proposal to those needs\niv. Participatory process ensuring their involvement\n\n1.3.4 Added value:\nAny specific added-value elements — public-private partnerships, innovation, best practice, multiplier effect\n\n---\n\nQuality rules:\n- Strictly respect page limits (2 pages for 1.2, 3 pages for 1.3)\n- Each section must be in proportion to its evaluation weight (see call evaluation grid)\n- Full information — evaluation is based solely on what is provided\n- Clear, direct language to facilitate evaluation\n- Reference [CALL REFERENCE] throughout where relevant",
    "category": "Proposal Writing",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "EU",
      "concept note",
      "proposal",
      "CERV",
      "IPA",
      "EIDHR",
      "first stage",
      "PCM",
      "RBM",
      "call for proposals"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-077-vv01",
        "version": 1,
        "content": "Draft a complete EU concept note for the following action.\n\nProject basics:\n- Action title: [ACTION TITLE]\n- Lead applicant: [ORGANISATION NAME], [COUNTRY]\n- Co-applicants (if any): [LIST]\n- Call for proposals: [CALL REFERENCE]\n- Donor: [CERV / IPA / EIDHR / Erasmus+ / other EU instrument]\n- Requested contribution: EUR [AMOUNT]\n- Duration: [MONTHS]\n- Target country/region: [COUNTRY / REGION, e.g. Western Balkans / North Macedonia]\n\nThematic focus: [HUMAN RIGHTS / GENDER EQUALITY / CIVIL SOCIETY / RULE OF LAW / DEMOCRATIC GOVERNANCE / other]\n\n---\n\nSECTION 1.1 — SUMMARY TABLE (no page limit)\n\nObjectives:\n- Overall objective (Impact): [WHAT LONG-TERM CHANGE DOES THE ACTION CONTRIBUTE TO?]\n- Specific objective(s) (Outcome): [WHAT DIRECT CHANGE WILL THE ACTION ACHIEVE IN THE TARGET GROUP?]\n\nTarget groups: [WHO DIRECTLY BENEFITS FROM PROJECT ACTIVITIES?]\nFinal beneficiaries: [WHO BENEFITS INDIRECTLY IN THE LONG TERM?]\nExpected outputs / Results: [LIST KEY DELIVERABLES AND OUTPUTS]\nMain activities / Work Packages: [LIST ACTIVITY CLUSTERS]\n\n---\n\nSECTION 1.2 — DESCRIPTION OF THE ACTION (max 2 pages, Arial 10, single spacing, 2cm margins)\n\nDraft the following subsections in order:\ni. Background and context — sector/country/regional context, key challenges, any analysis informing design\nii. Objectives — explain the overall and specific objectives from Section 1.1\niii. Key stakeholder groups — their attitudes, any consultations held\niv. Intervention logic — expected outputs, outcomes, impact, main risks and assumptions\nv. Type of activities — description and linkages between activity clusters\nvi. Cross-cutting issues — how the action mainstreams: human rights, gender equality, democracy, good governance, youth, children’s rights, environmental sustainability (include only those relevant)\nvii. Timeframe — broad timeline and any specific scheduling factors\n\nTone: formal, evidence-based, results-oriented. Avoid passive voice. Use EU PCM terminology throughout.\n\n---\n\nSECTION 1.3 — RELEVANCE OF THE ACTION (max 3 pages, same format)\n\n1.3.1 Relevance to call objectives:\ni. Relevance to the objective(s) and priority(ies) of the call\nii. Relevance to specific subthemes / sectors / areas and requirements (including local ownership)\niii. Which expected results from the call guidelines will be addressed\n\n1.3.2 Relevance to target country/region needs:\ni. Specific pre-project situation with quantified data where possible\nii. Detailed problem analysis — how problems are interrelated at all levels\niii. Relevant national/regional/local plans and how the action relates to them\niv. If continuation of a previous action: how it builds on previous results\nv. If part of a larger programme: fit, coordination, synergies (especially with EC)\nvi. Complementarity with EU and other donor initiatives — avoid duplication\n\n1.3.3 Target groups and beneficiaries:\ni. Description of each group (quantified where possible) including selection criteria\nii. Needs and constraints of each group\niii. Relevance of the proposal to those needs\niv. Participatory process ensuring their involvement\n\n1.3.4 Added value:\nAny specific added-value elements — public-private partnerships, innovation, best practice, multiplier effect\n\n---\n\nQuality rules:\n- Strictly respect page limits (2 pages for 1.2, 3 pages for 1.3)\n- Each section must be in proportion to its evaluation weight (see call evaluation grid)\n- Full information — evaluation is based solely on what is provided\n- Clear, direct language to facilitate evaluation\n- Reference [CALL REFERENCE] throughout where relevant",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "EU Concept Note",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-005",
    "title": "EU Proposal Section Writer",
    "description": "Modular EU proposal drafting.",
    "content": "Write the [SECTION NAME] section of an EU proposal for [DONOR]. Applicant: [ORG NAME], Western Balkans context. Tone: formal, evidence-based, results-oriented. Max [WORD COUNT] words. Reference [RELEVANT FRAMEWORK]. End with a transition sentence to the next section.",
    "category": "Proposal Writing",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "EU",
      "proposal",
      "CERV",
      "IPA",
      "EIDHR",
      "drafting"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-005-vv02",
        "version": 1,
        "content": "Write the [SECTION NAME] section of an EU proposal for [DONOR]. Applicant: [ORG NAME], Western Balkans context. Tone: formal, evidence-based, results-oriented. Max [WORD COUNT] words. Reference [RELEVANT FRAMEWORK]. End with a transition sentence to the next section.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "EU Funding",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-006",
    "title": "Proposal Logframe Constructor",
    "description": "After concept note is approved.",
    "content": "Design a logframe for the following project: [PASTE CONCEPT NOTE]. Include 1 Overall Objective, 2 Specific Objectives, 4-6 Outputs per Objective, Activities per Output. For each indicator: SMART formulation, baseline, target, and means of verification. Flag assumptions and risks at each level.",
    "category": "Proposal Writing",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "logframe",
      "EU",
      "proposal",
      "SMART",
      "indicators"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-006-vv02",
        "version": 1,
        "content": "Design a logframe for the following project: [PASTE CONCEPT NOTE]. Include 1 Overall Objective, 2 Specific Objectives, 4-6 Outputs per Objective, Activities per Output. For each indicator: SMART formulation, baseline, target, and means of verification. Flag assumptions and risks at each level.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Logframe Design",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-008",
    "title": "Proposal QA Checklist Runner",
    "description": "Final quality gate before EU submission.",
    "content": "You are a senior EU grants reviewer. Review the attached proposal draft and evaluate: (1) alignment with call objectives [CALL REF], (2) logframe coherence, (3) budget reasonableness, (4) risk analysis quality, (5) sustainability plan, (6) administrative compliance. Output: criterion | finding | recommendation | priority. Flag eliminatory weaknesses FIRST.",
    "category": "Proposal Writing",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "QA",
      "proposal",
      "EU",
      "review",
      "compliance",
      "checklist"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-008-vv02",
        "version": 1,
        "content": "You are a senior EU grants reviewer. Review the attached proposal draft and evaluate: (1) alignment with call objectives [CALL REF], (2) logframe coherence, (3) budget reasonableness, (4) risk analysis quality, (5) sustainability plan, (6) administrative compliance. Output: criterion | finding | recommendation | priority. Flag eliminatory weaknesses FIRST.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "QA & Review",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-045",
    "title": "Audience-Adaptive Rewriter",
    "description": "Adapting reports, proposals, or communications for a specific reader.",
    "content": "Rewrite the following text: [PASTE TEXT]\nTarget audience: [DEFINE AUDIENCE]\nTone target: [DEFINE TONE]\nLength constraint: [MAX WORDS]\nOutput: (1) Rewritten version, (2) List of the 3 most significant changes and why each was made.",
    "category": "Rephrasing",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "rephrasing",
      "audience",
      "adaptation",
      "tone",
      "writing"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-045-vv01",
        "version": 1,
        "content": "Rewrite the following text: [PASTE TEXT]\nTarget audience: [DEFINE AUDIENCE]\nTone target: [DEFINE TONE]\nLength constraint: [MAX WORDS]\nOutput: (1) Rewritten version, (2) List of the 3 most significant changes and why each was made.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Audience Adaptation",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-046",
    "title": "Register Shifter — Formal to Plain",
    "description": "Making donor reports or M&E documents accessible to non-specialist audiences.",
    "content": "Rewrite the following formal text in plain language: [PASTE TEXT]\nRules: Replace jargon with everyday equivalents (provide glossary at end), break sentences > 20 words into two, use active voice, do not remove data. Output: plain-language version + glossary.",
    "category": "Rephrasing",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "rephrasing",
      "plain language",
      "accessibility",
      "register",
      "editing"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-046-vv01",
        "version": 1,
        "content": "Rewrite the following formal text in plain language: [PASTE TEXT]\nRules: Replace jargon with everyday equivalents (provide glossary at end), break sentences > 20 words into two, use active voice, do not remove data. Output: plain-language version + glossary.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Register Shifting",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-047",
    "title": "Simplifier & Plain Language Converter",
    "description": "Creating beneficiary-facing communications or accessible public documents.",
    "content": "Simplify the following text for [TARGET, e.g. Grade 8 / non-native English speaker]: [PASTE TEXT]\nRequirements: use Flesch-Kincaid as guide (target > 60), replace all technical terms, use bullet points where helpful, keep all facts intact. Flag facts that could not be simplified.",
    "category": "Rephrasing",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "rephrasing",
      "simplification",
      "plain language",
      "accessibility",
      "community"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-047-vv01",
        "version": 1,
        "content": "Simplify the following text for [TARGET, e.g. Grade 8 / non-native English speaker]: [PASTE TEXT]\nRequirements: use Flesch-Kincaid as guide (target > 60), replace all technical terms, use bullet points where helpful, keep all facts intact. Flag facts that could not be simplified.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Simplification",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-021",
    "title": "Rapid Evidence Review Prompt",
    "description": "Background research during proposal development or evaluation prep.",
    "content": "Conduct a rapid evidence review on [TOPIC] with focus on [REGION/COUNTRY]. Include: (1) Definition and scope, (2) Key statistics (with sources), (3) Policy and legal framework, (4) Civil society response, (5) Gaps and research needs. Max 800 words. Flag findings older than 3 years.",
    "category": "Research & Analysis",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "research",
      "evidence",
      "analysis",
      "desk review",
      "CSO"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-021-vv02",
        "version": 1,
        "content": "Conduct a rapid evidence review on [TOPIC] with focus on [REGION/COUNTRY]. Include: (1) Definition and scope, (2) Key statistics (with sources), (3) Policy and legal framework, (4) Civil society response, (5) Gaps and research needs. Max 800 words. Flag findings older than 3 years.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Desk Research",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-075",
    "title": "Variance Bridge Financial Analysis Pack",
    "description": "When gross margin or profitability is deteriorating and you need to decompose the financial variance into its drivers, link to operational causes, and communicate clearly to senior leadership.",
    "content": "Conduct a variance bridge financial analysis for [METRIC: gross margin / EBITDA / revenue] deterioration in [CONTEXT].\n\nDatasets available: [DESCRIBE: financial data columns, time period]\n\nStep 1 — FINANCIAL TREND:\nCalculate weekly/monthly [metric]. Identify the trend over [time period]. Identify when deterioration begins. Highlight which cost/revenue components increased most. Do not interpret yet — only describe.\n\nStep 2 — VARIANCE BRIDGE:\nExplain the [metric] change by grouping effects into:\n- Price effect: [revenue per unit change]\n- Volume effect: [change in units/orders processed]\n- Mix effect: [shift in product/service type composition]\n- Cost effects: [labour / logistics / materials / overhead changes]\nUse evidence from the dataset to support each effect quantitatively.\n\nStep 3 — OPERATIONAL INTEGRATION:\nLink the financial deterioration to operational root causes [from a preceding driver tree analysis or context]. For each financial variance component: identify the operational root cause, explain the causal chain from operations to financial impact.\n\nStep 4 — CEO-READY NARRATIVE:\nCreate a CEO-ready explanation structured as:\n- What happened operationally\n- How this translated into financial performance\n- What the biggest financial driver is (€ impact)\n- What management should prioritise (3 actions, specific owners)",
    "category": "Research & Analysis",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "variance bridge",
      "financial analysis",
      "gross margin",
      "price effect",
      "volume effect",
      "mix effect",
      "cost effect",
      "CFO",
      "CEO",
      "operations",
      "research"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-075-vv01",
        "version": 1,
        "content": "Conduct a variance bridge financial analysis for [METRIC: gross margin / EBITDA / revenue] deterioration in [CONTEXT].\n\nDatasets available: [DESCRIBE: financial data columns, time period]\n\nStep 1 — FINANCIAL TREND:\nCalculate weekly/monthly [metric]. Identify the trend over [time period]. Identify when deterioration begins. Highlight which cost/revenue components increased most. Do not interpret yet — only describe.\n\nStep 2 — VARIANCE BRIDGE:\nExplain the [metric] change by grouping effects into:\n- Price effect: [revenue per unit change]\n- Volume effect: [change in units/orders processed]\n- Mix effect: [shift in product/service type composition]\n- Cost effects: [labour / logistics / materials / overhead changes]\nUse evidence from the dataset to support each effect quantitatively.\n\nStep 3 — OPERATIONAL INTEGRATION:\nLink the financial deterioration to operational root causes [from a preceding driver tree analysis or context]. For each financial variance component: identify the operational root cause, explain the causal chain from operations to financial impact.\n\nStep 4 — CEO-READY NARRATIVE:\nCreate a CEO-ready explanation structured as:\n- What happened operationally\n- How this translated into financial performance\n- What the biggest financial driver is (€ impact)\n- What management should prioritise (3 actions, specific owners)",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Financial Analysis",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-081",
    "title": "AI-Driven Growth Experiment Design: Insight → Hypothesis → Experiment Workflow",
    "description": "Use when designing structured growth experiments from user feedback or community data. Useful for product teams, NGO programme designers testing interventions, or any context requiring evidence-based hypothesis testing. Produces insight extraction, personas, experiment designs, and a prototype brief.",
    "content": "You are a growth experiment designer using the Insight → Hypothesis → Experiment → Learning cycle. I will give you a domain and user context. Run through all four steps:\n\nSTEP 1 — EXTRACT INSIGHTS\nAnalyze the provided user discussion/feedback data.\nIdentify: Behavioural insights | Product experience insights | Pain points | Hidden opportunities.\nQuote 2–3 exact user sentences that best surface each insight category.\n\nSTEP 2 — TRANSLATE INTO HYPOTHESES\nFor the 2–3 most interesting insights, generate testable hypotheses.\nEach hypothesis must include:\n- The insight behind it\n- The hypothesis statement\n- Why it might matter for the product, brand, or business\n- The specific behaviour change you expect to see\n\nSTEP 3 — CREATE AI PERSONAS\nGenerate 3 realistic user personas for the context provided.\nEach persona: Name | Age | Role/background | Situation description | Key goals | Main challenges | Typical behaviour related to the problem.\nMake personas clearly different from each other. Keep them concise and realistic.\n\nSTEP 4 — DESIGN EXPERIMENTS\nUsing the personas, design experiments to validate or invalidate the hypothesis.\nFor each persona propose 2–3 experiments. For every experiment include:\n- Experiment name\n- Idea/concept (what we test)\n- Prototype or method (landing page, ad test, concept product, survey, store test)\n- Key metric to measure (CTR, purchase intent, sign-ups, conversion, willingness to pay)\n- Signal that VALIDATES the hypothesis\n- Signal that DISPROVES the hypothesis\nFocus on simple experiments runnable within 1–4 weeks. Think like a startup testing product-market fit.\n\nSTEP 5 — PROTOTYPE BRIEF\nFor the strongest experiment, provide:\n- Landing page structure (sections, headline ideas, CTA)\n- Visual style brief (scene concept, subject, environment, format)\n- Key metric to validate the hypothesis\n\nOutput: structured, clear, concise. Each step as a distinct section.",
    "category": "Research & Analysis",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "growth experiments",
      "hypothesis",
      "user research",
      "product",
      "AB testing",
      "insight extraction",
      "personas",
      "experiment design",
      "AI-driven",
      "workflow"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-081-vv01",
        "version": 1,
        "content": "You are a growth experiment designer using the Insight → Hypothesis → Experiment → Learning cycle. I will give you a domain and user context. Run through all four steps:\n\nSTEP 1 — EXTRACT INSIGHTS\nAnalyze the provided user discussion/feedback data.\nIdentify: Behavioural insights | Product experience insights | Pain points | Hidden opportunities.\nQuote 2–3 exact user sentences that best surface each insight category.\n\nSTEP 2 — TRANSLATE INTO HYPOTHESES\nFor the 2–3 most interesting insights, generate testable hypotheses.\nEach hypothesis must include:\n- The insight behind it\n- The hypothesis statement\n- Why it might matter for the product, brand, or business\n- The specific behaviour change you expect to see\n\nSTEP 3 — CREATE AI PERSONAS\nGenerate 3 realistic user personas for the context provided.\nEach persona: Name | Age | Role/background | Situation description | Key goals | Main challenges | Typical behaviour related to the problem.\nMake personas clearly different from each other. Keep them concise and realistic.\n\nSTEP 4 — DESIGN EXPERIMENTS\nUsing the personas, design experiments to validate or invalidate the hypothesis.\nFor each persona propose 2–3 experiments. For every experiment include:\n- Experiment name\n- Idea/concept (what we test)\n- Prototype or method (landing page, ad test, concept product, survey, store test)\n- Key metric to measure (CTR, purchase intent, sign-ups, conversion, willingness to pay)\n- Signal that VALIDATES the hypothesis\n- Signal that DISPROVES the hypothesis\nFocus on simple experiments runnable within 1–4 weeks. Think like a startup testing product-market fit.\n\nSTEP 5 — PROTOTYPE BRIEF\nFor the strongest experiment, provide:\n- Landing page structure (sections, headline ideas, CTA)\n- Visual style brief (scene concept, subject, environment, format)\n- Key metric to validate the hypothesis\n\nOutput: structured, clear, concise. Each step as a distinct section.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Growth & Product",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-020",
    "title": "Constitutional Court Research Prompt",
    "description": "Legal research on Constitutional Court jurisprudence in Western Balkans.",
    "content": "Search the Constitutional Court of [COUNTRY] database for cases involving [TOPIC] decided between [DATE RANGE]. For each case: extract case number, decision date, complainant type, legal basis, decision outcome, and key reasoning. Present in a structured table sorted by date.",
    "category": "Research & Analysis",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "legal research",
      "constitutional",
      "court",
      "analysis",
      "N.Macedonia"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-020-vv02",
        "version": 1,
        "content": "Search the Constitutional Court of [COUNTRY] database for cases involving [TOPIC] decided between [DATE RANGE]. For each case: extract case number, decision date, complainant type, legal basis, decision outcome, and key reasoning. Present in a structured table sorted by date.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Legal Research",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-037",
    "title": "Comprehensive Research Summary",
    "description": "In-depth understanding for proposals, reports, or strategic planning.",
    "content": "Conduct a comprehensive literature review on [TOPIC]. Search for recent academic articles, reports, and policy documents (published after [YEAR]). Summarize key findings, methodologies, recommendations. Provide a table: citation, author, year, key findings, relevance. Include a narrative synthesis.",
    "category": "Research & Analysis",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "literature review",
      "research",
      "analysis",
      "citations",
      "summary"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-037-vv02",
        "version": 1,
        "content": "Conduct a comprehensive literature review on [TOPIC]. Search for recent academic articles, reports, and policy documents (published after [YEAR]). Summarize key findings, methodologies, recommendations. Provide a table: citation, author, year, key findings, relevance. Include a narrative synthesis.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Literature Review",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-074",
    "title": "Driver Tree Root Cause Analysis Pack",
    "description": "When a key performance indicator is declining and you need to move from data observation to structured root cause hypotheses to management recommendations — in operations, programme delivery, or service performance.",
    "content": "Conduct a driver tree root cause analysis for [METRIC/KPI] that is [declining/deteriorating] in [CONTEXT: operations / programme delivery / service performance].\n\nDataset: [DESCRIBE AVAILABLE DATA — columns, time period, granularity]\n\nStep 1 — KPI CALCULATION & TREND:\nCalculate [KPI formula]. Identify the overall trend over [time period]. Highlight when performance starts deteriorating. Identify what changed vs the first [N] baseline periods. Be concrete — only describe what changed, do not jump to conclusions yet.\n\nStep 2 — DRIVER TREE:\nUsing driver tree logic, structure all possible drivers of [KPI] grouped under:\n- [CATEGORY 1, e.g. Throughput / Capacity]\n- [CATEGORY 2, e.g. Quality / Accuracy]\n- [CATEGORY 3, e.g. Lead Time / Speed]\nMap relevant data columns to the appropriate drivers.\n\nStep 3 — HYPOTHESES:\nPropose 6 plausible root-cause hypotheses. For each: specify which driver it affects, explain the mechanism, indicate which data points support it, classify as short-term shock or structural issue.\n\nStep 4 — RANKING:\nRank the 6 hypotheses by: (1) Likelihood based on data evidence, (2) Operational impact. Explain reasoning step by step.\n\nStep 5 — EXECUTIVE NARRATIVE:\nCreate an executive-ready explanation structured as: What happened | Why it happened (top 2-3 drivers) | What matters most | What should be investigated first.",
    "category": "Research & Analysis",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "driver tree",
      "root cause",
      "operational analysis",
      "KPI",
      "hypotheses",
      "performance",
      "operations",
      "research",
      "management"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-074-vv01",
        "version": 1,
        "content": "Conduct a driver tree root cause analysis for [METRIC/KPI] that is [declining/deteriorating] in [CONTEXT: operations / programme delivery / service performance].\n\nDataset: [DESCRIBE AVAILABLE DATA — columns, time period, granularity]\n\nStep 1 — KPI CALCULATION & TREND:\nCalculate [KPI formula]. Identify the overall trend over [time period]. Highlight when performance starts deteriorating. Identify what changed vs the first [N] baseline periods. Be concrete — only describe what changed, do not jump to conclusions yet.\n\nStep 2 — DRIVER TREE:\nUsing driver tree logic, structure all possible drivers of [KPI] grouped under:\n- [CATEGORY 1, e.g. Throughput / Capacity]\n- [CATEGORY 2, e.g. Quality / Accuracy]\n- [CATEGORY 3, e.g. Lead Time / Speed]\nMap relevant data columns to the appropriate drivers.\n\nStep 3 — HYPOTHESES:\nPropose 6 plausible root-cause hypotheses. For each: specify which driver it affects, explain the mechanism, indicate which data points support it, classify as short-term shock or structural issue.\n\nStep 4 — RANKING:\nRank the 6 hypotheses by: (1) Likelihood based on data evidence, (2) Operational impact. Explain reasoning step by step.\n\nStep 5 — EXECUTIVE NARRATIVE:\nCreate an executive-ready explanation structured as: What happened | Why it happened (top 2-3 drivers) | What matters most | What should be investigated first.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Operational Analysis",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-096",
    "title": "AI-Driven Root Cause Analysis for NGO Performance Decline",
    "description": "When a key performance indicator is underperforming and the team needs to diagnose why before donor reporting or adaptive management decisions.",
    "content": "Act as a senior performance analyst for NGO and donor-funded programmes. Investigate why [KPI / OUTPUT / OUTCOME] is underperforming. Use a driver-tree structure covering implementation, partner performance, beneficiary engagement, data quality, budget, staffing, external context, and design assumptions. Generate competing hypotheses, rank them by likelihood and impact, identify evidence needed to confirm or reject each one, and recommend corrective actions for the next reporting period.",
    "category": "Research & Analysis",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "root-cause-analysis",
      "performance-diagnosis",
      "M&E",
      "adaptive-management",
      "NGO",
      "driver-tree"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-096-vv01",
        "version": 1,
        "content": "Act as a senior performance analyst for NGO and donor-funded programmes. Investigate why [KPI / OUTPUT / OUTCOME] is underperforming. Use a driver-tree structure covering implementation, partner performance, beneficiary engagement, data quality, budget, staffing, external context, and design assumptions. Generate competing hypotheses, rank them by likelihood and impact, identify evidence needed to confirm or reject each one, and recommend corrective actions for the next reporting period.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Performance Diagnosis",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-041",
    "title": "Cross-Document Comparative Summary",
    "description": "Comparing donor reports, research studies, or proposal evaluations side by side.",
    "content": "You are given [N] documents: [LIST DOCUMENTS]. Summarize and compare them across: (1) Main argument or purpose, (2) Key data or evidence cited, (3) Methodology, (4) Conclusions, (5) Gaps or limitations. Present as a comparison table. Then write a 150-word synthesis.",
    "category": "Summarization",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "summarization",
      "comparison",
      "analysis",
      "documents",
      "research"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-041-vv01",
        "version": 1,
        "content": "You are given [N] documents: [LIST DOCUMENTS]. Summarize and compare them across: (1) Main argument or purpose, (2) Key data or evidence cited, (3) Methodology, (4) Conclusions, (5) Gaps or limitations. Present as a comparison table. Then write a 150-word synthesis.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Comparative Summary",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-039",
    "title": "Executive Summary Generator",
    "description": "Executive summaries for donor reports, board briefs, or proposal annexes.",
    "content": "Summarize the following document [PASTE DOCUMENT] into a concise executive summary. Structure: (1) Context and purpose (1 sentence), (2) Key findings or outputs (3-5 bullets), (3) Recommendations or next steps (2-3 bullets), (4) Critical risk or caveat (1 sentence). Max 200 words. Avoid all jargon. Write for a non-specialist senior reader.",
    "category": "Summarization",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "summarization",
      "executive summary",
      "donor",
      "report",
      "brief"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-039-vv01",
        "version": 1,
        "content": "Summarize the following document [PASTE DOCUMENT] into a concise executive summary. Structure: (1) Context and purpose (1 sentence), (2) Key findings or outputs (3-5 bullets), (3) Recommendations or next steps (2-3 bullets), (4) Critical risk or caveat (1 sentence). Max 200 words. Avoid all jargon. Write for a non-specialist senior reader.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Executive Summary",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-040",
    "title": "Multi-Level Summary Builder",
    "description": "Same content in different formats for different audiences.",
    "content": "Summarize [DOCUMENT / TOPIC] at three levels:\n- Level 1 (Tweet): 1 sentence, max 280 characters\n- Level 2 (Paragraph): 80-100 words, key facts only\n- Level 3 (Brief): 300-400 words, full structured summary\nEach level must stand alone.",
    "category": "Summarization",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "summarization",
      "multi-level",
      "brief",
      "social media",
      "donor"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-040-vv01",
        "version": 1,
        "content": "Summarize [DOCUMENT / TOPIC] at three levels:\n- Level 1 (Tweet): 1 sentence, max 280 characters\n- Level 2 (Paragraph): 80-100 words, key facts only\n- Level 3 (Brief): 300-400 words, full structured summary\nEach level must stand alone.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Multi-Level Summary",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-049",
    "title": "Document Version Comparator",
    "description": "Reviewing revised proposals, report drafts, or policy documents between versions.",
    "content": "Compare [DOCUMENT v1] and [DOCUMENT v2]. Produce: (1) Summary of what changed, (2) Detailed change table: Section | Change type | Old text | New text | Significance, (3) Overall assessment: is v2 stronger or weaker, and why?",
    "category": "Versioning",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "versioning",
      "comparison",
      "document",
      "review",
      "change tracking"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-049-vv01",
        "version": 1,
        "content": "Compare [DOCUMENT v1] and [DOCUMENT v2]. Produce: (1) Summary of what changed, (2) Detailed change table: Section | Change type | Old text | New text | Significance, (3) Overall assessment: is v2 stronger or weaker, and why?",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Document Comparison",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-050",
    "title": "Iterative Refinement Protocol",
    "description": "Refined, polished output through 3 iterations.",
    "content": "Improve [OUTPUT TYPE] through 3 rounds:\nRound 1: Produce a first draft of [TASK].\nRound 2: Critique the draft against [CRITERIA]. Identify top 3 weaknesses.\nRound 3: Revise to address all 3 weaknesses.\nPresent only Round 3 output and a brief improvement note (max 50 words).",
    "category": "Versioning",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "versioning",
      "iteration",
      "refinement",
      "quality",
      "meta-prompt"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-050-vv01",
        "version": 1,
        "content": "Improve [OUTPUT TYPE] through 3 rounds:\nRound 1: Produce a first draft of [TASK].\nRound 2: Critique the draft against [CRITERIA]. Identify top 3 weaknesses.\nRound 3: Revise to address all 3 weaknesses.\nPresent only Round 3 output and a brief improvement note (max 50 words).",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Iterative Refinement",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-048",
    "title": "Prompt Version Controller",
    "description": "Systematically improving and version-controlling prompts.",
    "content": "Review the following prompt: [PASTE PROMPT]. Version: [vXX]. Identify: (1) What this version does well, (2) What fails or underperforms, (3) Proposed improvements with rationale. Produce version [vXX+1] with changes tracked in a changelog block.\nChangelog format: Change | Reason | Expected impact",
    "category": "Versioning",
    "models": [
      "GPT-4o"
    ],
    "bestModel": "GPT-4o",
    "tags": [
      "versioning",
      "prompt engineering",
      "improvement",
      "changelog",
      "meta"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-048-vv01",
        "version": 1,
        "content": "Review the following prompt: [PASTE PROMPT]. Version: [vXX]. Identify: (1) What this version does well, (2) What fails or underperforms, (3) Proposed improvements with rationale. Produce version [vXX+1] with changes tracked in a changelog block.\nChangelog format: Change | Reason | Expected impact",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Prompt Version Control",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-068",
    "title": "Lean No-Code Product Constrainer",
    "description": "Opening any product design or build session — sets the default constraints toward lightweight, fast, no-code-first solutions.",
    "content": "Favor lean no-code or low-code solutions first. Keep things practical and optimize for fast experimentation, clarity, and usability.\n\nDefault stack preference: Notion / Airtable / Zapier / Make / n8n / Google Workspace before custom code. Use custom code only when no-code cannot handle the logic, performance is critical, or scale demands it. If custom code is needed, explain why no-code fails first.\n\nFor every solution proposed:\n- State the simplest version that solves 80% of the problem\n- State what is deliberately left out of v1\n- Estimate time to implement for a non-technical user\n- Flag any maintenance overhead or dependency risks\n\nOptimize for: the user being able to test the core idea within [1 day / 1 week / 1 sprint].",
    "category": "Vibe Coding / Product",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "no-code",
      "lean",
      "MVP",
      "product",
      "constraints",
      "build approach",
      "fast prototyping",
      "vibe coding"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-068-vv01",
        "version": 1,
        "content": "Favor lean no-code or low-code solutions first. Keep things practical and optimize for fast experimentation, clarity, and usability.\n\nDefault stack preference: Notion / Airtable / Zapier / Make / n8n / Google Workspace before custom code. Use custom code only when no-code cannot handle the logic, performance is critical, or scale demands it. If custom code is needed, explain why no-code fails first.\n\nFor every solution proposed:\n- State the simplest version that solves 80% of the problem\n- State what is deliberately left out of v1\n- Estimate time to implement for a non-technical user\n- Flag any maintenance overhead or dependency risks\n\nOptimize for: the user being able to test the core idea within [1 day / 1 week / 1 sprint].",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Build Approach",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-066",
    "title": "MVP & Product Specification Builder",
    "description": "Turning a rough product idea into a testable MVP specification — for digital tools, internal systems, AI-powered apps, or civic tech prototypes.",
    "content": "Turn this rough idea into a testable MVP specification:\n\n[DESCRIBE YOUR IDEA IN 2-3 SENTENCES]\n\nTarget users: [WHO WILL USE THIS AND WHAT PROBLEM DOES IT SOLVE]\nConstraints: [BUDGET / TIMELINE / TECHNICAL SKILL / PREFERRED TOOLS]\nPriority: [SPEED / QUALITY / LEARNING]\n\nDeliver:\n1. Problem statement (crisp, 1 sentence)\n2. Core user flow (step-by-step, from first action to value moment)\n3. Feature set: Core (must ship) | Stretch (v2) | Out of scope\n4. Database structure: entities, key fields, relationships\n5. UI copy: key screens with exact text for buttons, labels, empty states\n6. Prompt flows (if AI-powered): trigger → input → Claude prompt → output → destination\n7. Build sequence: what to build first, second, third\n8. Handoff notes: what a developer or no-code builder needs to start immediately\n\nFavor lean no-code. Optimize for fast experimentation and clarity.",
    "category": "Vibe Coding / Product",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "MVP",
      "product",
      "specification",
      "vibe coding",
      "build",
      "UI",
      "database",
      "schema",
      "prompt flow",
      "no-code"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-066-vv01",
        "version": 1,
        "content": "Turn this rough idea into a testable MVP specification:\n\n[DESCRIBE YOUR IDEA IN 2-3 SENTENCES]\n\nTarget users: [WHO WILL USE THIS AND WHAT PROBLEM DOES IT SOLVE]\nConstraints: [BUDGET / TIMELINE / TECHNICAL SKILL / PREFERRED TOOLS]\nPriority: [SPEED / QUALITY / LEARNING]\n\nDeliver:\n1. Problem statement (crisp, 1 sentence)\n2. Core user flow (step-by-step, from first action to value moment)\n3. Feature set: Core (must ship) | Stretch (v2) | Out of scope\n4. Database structure: entities, key fields, relationships\n5. UI copy: key screens with exact text for buttons, labels, empty states\n6. Prompt flows (if AI-powered): trigger → input → Claude prompt → output → destination\n7. Build sequence: what to build first, second, third\n8. Handoff notes: what a developer or no-code builder needs to start immediately\n\nFavor lean no-code. Optimize for fast experimentation and clarity.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Product Specification",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-079",
    "title": "Design Unified Google Drive + Notion Workspace (Two-Domain Structure)",
    "description": "Use when setting up or redesigning a dual-domain personal workspace in Google Drive + Notion — especially for solo civil society/NGO professionals who also do technical/AI work. Produces folder structure, naming conventions, Notion schema, and a quick-start checklist.",
    "content": "You are a digital workspace architect helping a human rights defender and aspiring AI engineer organize a solo digital workspace so they can spend less time hunting for files and more time thinking, creating, coding, and deciding.\n\nStack:\n- Main file storage: Google Drive (Google One paid plan)\n- Knowledge hub: Notion (free plan, with 5 MB upload limit per file)\n- Workstyle: Solo\n\nMy work has two main pillars:\n1. Human rights and civil society work (projects, M&E, advocacy, research)\n2. AI engineering and LLM learning (learning path, experiments, \"vibe code\", personal apps, meta/system prompts, prompt libraries)\n\nGoal: Design a simple, intentional structure in Google Drive and Notion that:\n- Clearly separates but connects \"Human Rights\" and \"AI / Engineering\" work\n- Gives all my AI prompts, meta/system prompts, and personal apps a proper home so they stop living in random chats and files\n- Signals that my creative and technical work matters, and supports deep focus instead of chaos\n\nYour tasks:\n1. Propose a top-level Google Drive folder structure with two main domains (\"Human Rights & Civil Society\" and \"AI / Engineering & Prompts\"), each with 3–7 subfolders\n2. Define one simple naming convention for Drive files (using date, domain, project, and short description), and give at least 10 \"messy name → improved name\" examples\n3. Design a minimal Notion structure (max 5–6 main pages/databases): Home, HR & Civil Society Projects, AI Learning Path, Prompt & App Library, Meetings & Notes — for each explain its purpose and how it links to Google Drive\n4. Suggest a small tag set (8–15 tags) in Notion covering: domain (HR vs AI), topic, project, stack/tool, and status\n5. Provide a 60–90 minute \"quick start\" checklist\n\nConstraints:\n- Use only standard features of Google Drive and free Notion (respect the 5 MB/file upload limit)\n- No external automation tools, no code required\n\nOutput format:\nSection 1: Principles for my unified workspace\nSection 2: Google Drive structure with both domains\nSection 3: Naming convention with before/after examples\nSection 4: Notion pages/databases and how they connect to Drive\nSection 5: Quick-start checklist",
    "category": "Workspace & Productivity",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "Google Drive",
      "Notion",
      "workspace",
      "folder structure",
      "naming convention",
      "digital workspace",
      "productivity",
      "solo",
      "civil society",
      "AI"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-079-vv01",
        "version": 1,
        "content": "You are a digital workspace architect helping a human rights defender and aspiring AI engineer organize a solo digital workspace so they can spend less time hunting for files and more time thinking, creating, coding, and deciding.\n\nStack:\n- Main file storage: Google Drive (Google One paid plan)\n- Knowledge hub: Notion (free plan, with 5 MB upload limit per file)\n- Workstyle: Solo\n\nMy work has two main pillars:\n1. Human rights and civil society work (projects, M&E, advocacy, research)\n2. AI engineering and LLM learning (learning path, experiments, \"vibe code\", personal apps, meta/system prompts, prompt libraries)\n\nGoal: Design a simple, intentional structure in Google Drive and Notion that:\n- Clearly separates but connects \"Human Rights\" and \"AI / Engineering\" work\n- Gives all my AI prompts, meta/system prompts, and personal apps a proper home so they stop living in random chats and files\n- Signals that my creative and technical work matters, and supports deep focus instead of chaos\n\nYour tasks:\n1. Propose a top-level Google Drive folder structure with two main domains (\"Human Rights & Civil Society\" and \"AI / Engineering & Prompts\"), each with 3–7 subfolders\n2. Define one simple naming convention for Drive files (using date, domain, project, and short description), and give at least 10 \"messy name → improved name\" examples\n3. Design a minimal Notion structure (max 5–6 main pages/databases): Home, HR & Civil Society Projects, AI Learning Path, Prompt & App Library, Meetings & Notes — for each explain its purpose and how it links to Google Drive\n4. Suggest a small tag set (8–15 tags) in Notion covering: domain (HR vs AI), topic, project, stack/tool, and status\n5. Provide a 60–90 minute \"quick start\" checklist\n\nConstraints:\n- Use only standard features of Google Drive and free Notion (respect the 5 MB/file upload limit)\n- No external automation tools, no code required\n\nOutput format:\nSection 1: Principles for my unified workspace\nSection 2: Google Drive structure with both domains\nSection 3: Naming convention with before/after examples\nSection 4: Notion pages/databases and how they connect to Drive\nSection 5: Quick-start checklist",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Architecture",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-061",
    "title": "Airtable / Notion Database Architecture",
    "description": "Setting up a project management, CRM, or M&E database in Airtable or Notion — system design phase.",
    "content": "Design a [Airtable / Notion] database for [USE CASE: grants CRM / M&E tracker / project management / beneficiary registry / donor pipeline].\n\nOrganisation type: [CSO / NGO / Consultancy]\nUsers: [NUMBER AND ROLES]\nKey processes: [LIST 3-5]\nIntegrations: [Google Drive / Slack / Zapier / Make / n8n / manual]\n\nDeliver:\n1. Table/database schema: name, purpose, key fields, field types (text/number/select/relation/formula)\n2. Relationships between tables (linked records)\n3. 3-5 recommended views per table (grid, gallery, kanban, calendar, form)\n4. Automation suggestions (trigger → action)\n5. Rollup and formula field examples for key metrics\n6. Onboarding checklist for team (5 steps)\n\nFavor lean, maintainable structures. No over-engineering.",
    "category": "Workspace & Productivity",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "Airtable",
      "Notion",
      "database",
      "architecture",
      "CRM",
      "M&E",
      "project management",
      "no-code",
      "workspace"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-061-vv01",
        "version": 1,
        "content": "Design a [Airtable / Notion] database for [USE CASE: grants CRM / M&E tracker / project management / beneficiary registry / donor pipeline].\n\nOrganisation type: [CSO / NGO / Consultancy]\nUsers: [NUMBER AND ROLES]\nKey processes: [LIST 3-5]\nIntegrations: [Google Drive / Slack / Zapier / Make / n8n / manual]\n\nDeliver:\n1. Table/database schema: name, purpose, key fields, field types (text/number/select/relation/formula)\n2. Relationships between tables (linked records)\n3. 3-5 recommended views per table (grid, gallery, kanban, calendar, form)\n4. Automation suggestions (trigger → action)\n5. Rollup and formula field examples for key metrics\n6. Onboarding checklist for team (5 steps)\n\nFavor lean, maintainable structures. No over-engineering.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Database Architecture",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-022",
    "title": "File Naming Convention Enforcer",
    "description": "Batch-renaming files to the Cvetanichin workspace convention.",
    "content": "Apply the file naming convention YYYYMMDD_Domain_Project-Tag_AssetType_Description-v## to the following files: [PASTE FILE NAMES]. Domain codes: HR, AI, HA, PER, SYS. Output: original name | renamed version | domain assignment rationale.",
    "category": "Workspace & Productivity",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "file naming",
      "workspace",
      "convention",
      "productivity"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-022-vv02",
        "version": 1,
        "content": "Apply the file naming convention YYYYMMDD_Domain_Project-Tag_AssetType_Description-v## to the following files: [PASTE FILE NAMES]. Domain codes: HR, AI, HA, PER, SYS. Output: original name | renamed version | domain assignment rationale.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "File Naming",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-023",
    "title": "Google Drive Structure Query",
    "description": "Searching or navigating the Cvetanichin Google Drive workspace.",
    "content": "Search Google Drive for [FOLDER/FILE NAME]. Known folder IDs: HERA, CERV, DFF. Filter by mimeType='application/vnd.google-apps.folder'. Report: name, ID, path, last modified.",
    "category": "Workspace & Productivity",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "Google Drive",
      "files",
      "workspace",
      "folders"
    ],
    "effectiveness": 3,
    "qualityTag": "okay",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-023-vv02",
        "version": 1,
        "content": "Search Google Drive for [FOLDER/FILE NAME]. Known folder IDs: HERA, CERV, DFF. Filter by mimeType='application/vnd.google-apps.folder'. Report: name, ID, path, last modified.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 3,
        "qualityTag": "okay"
      }
    ],
    "project": "Google Drive",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-024",
    "title": "Notion Task & Meeting Creator",
    "description": "Creating structured Notion entries via Claude integration.",
    "content": "Create a Notion entry in the [DATABASE NAME] database with: Title=[TEXT], Date=[DATETIME], Domain=[Personal/Work/HR/AI], Status=Active, Stack=[Calendar/Task/Note]. Use data_source_id not page URL for parent reference.",
    "category": "Workspace & Productivity",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "Notion",
      "productivity",
      "task",
      "calendar",
      "workspace"
    ],
    "effectiveness": 3,
    "qualityTag": "okay",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-024-vv02",
        "version": 1,
        "content": "Create a Notion entry in the [DATABASE NAME] database with: Title=[TEXT], Date=[DATETIME], Domain=[Personal/Work/HR/AI], Status=Active, Stack=[Calendar/Task/Note]. Use data_source_id not page URL for parent reference.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 3,
        "qualityTag": "okay"
      }
    ],
    "project": "Notion",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-085",
    "title": "Weekly Project Status Recap — Workspace Scan",
    "description": "Weekly workspace scan that identifies all active projects, gathers recent activity from the past 1-2 weeks, and produces a concise project recap per project covering status, developments, next steps, people, blockers, and links.",
    "content": "Following the Project Summarization workflow: 1. Identify Projects & Gather Information by searching across my Workspace for recent projects and gathering all related information from the past 1-2 weeks. 2. Create a Project Recap for each project with a concise summary of status, developments, next steps, people involved, blockers, and important links.",
    "category": "Workspace & Productivity",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "workspace",
      "project-recap",
      "weekly-review",
      "summarization",
      "gemini-workspace",
      "status-update",
      "productivity"
    ],
    "effectiveness": 3,
    "qualityTag": "okay",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-085-vv1",
        "version": 1,
        "content": "Following the Project Summarization workflow: 1. Identify Projects & Gather Information by searching across my Workspace for recent projects and gathering all related information from the past 1-2 weeks. 2. Create a Project Recap for each project with a concise summary of status, developments, next steps, people involved, blockers, and important links.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 3,
        "qualityTag": "okay"
      }
    ],
    "project": "Summarization",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-078",
    "title": "Digital Workspace Architect + Automation Orchestrator System Prompt",
    "description": "Use as the opening system prompt for any Claude/Gemini session focused on managing Vaska's Google Drive, Notion, Gmail, and Calendar workspace. Activates full file routing, naming convention enforcement, and Notion record creation logic.",
    "content": "SYSTEM PROMPT v02 — Digital Workspace Architect + Automation Orchestrator (Vaska)\n\nROLE: You are Vaska's Digital Workspace Architect and Automation Orchestrator — supporting a solo human rights defender and aspiring AI engineer. Keep the workspace calm, searchable, and partially self-maintaining so Vaska spends time thinking, creating, and coding — not hunting files. Act first using available tools (Notion MCP, Drive, Gmail, Calendar). Give exact manual steps only when tools cannot act.\n\nWORKSPACE MODEL:\nDrive root: Workspace - Vaska Cvetanoska\nTop-level domains:\n  00_Inbox-Downloads        ← unsorted/unclear items go here first\n  01_HR-Civil-Society       ← Domain: HR\n  02_AI-Engineering-Prompts ← Domain: AI\n  03_HR+AI-Powered-M&E      ← Domain: HR+AI (M&E/evidence-centric only)\n  04_Personal-Admin         ← Domain: Personal\n\nCLASSIFICATION (mandatory for every item):\n  Domain:  HR | AI | HR+AI | Personal\n  Type:    System Prompt | Task Prompt | Workflow | App | Agent | Prompt-Set | Template | document | dataset | meeting | note\n  Project: existing or new (name it)\n\nDRIVE ROUTING (first match wins):\n  Unclear/unsorted                → 00_Inbox-Downloads\n  HR active deliverables          → 01_HR-Civil-Society/01_Projects-Clients/(Project)\n  Funding-facing                  → 01_HR-Civil-Society/02_Proposals-Grants/(Donor)/(Project)\n  MEL/M&E evidence                → 01_HR-Civil-Society/03_ME-Learning-Evidence/(Project)\n  Advocacy/research outputs       → 01_HR-Civil-Society/04_Advocacy-Research/(Theme)\n  Learning materials              → 02_AI-Engineering-Prompts/01_Learning_Path\n  Experiments                     → 02_AI-Engineering-Prompts/02_Experiments_&_Vibe_Code\n  Prompts/library assets          → 02_AI-Engineering-Prompts/04_Prompt_Library/(Subfolder)\n  M&E/evidence automation         → 03_HR+AI-Powered-M&E/(Project or UseCase)\n\nFILE RULES:\n  Naming: YYYY-MM-DD_Domain-Project_AssetType_ShortDescription_v01\n  Never use \"final\" — use versioning (v01, v02…)\n  AssetType: Proposal | Report | Brief | Notes | PromptSet | Spec | Design | Meeting | Dataset | Slides | Contract | Budget | Email | Plan | Template\n  Format: All Drive files must be Google Docs.\n\nNOTION MODEL:\n  Databases: HR & Civil Society Projects | AI Learning Path | Prompt & App Library | AI / Apps & Projects | Meetings & Notes\n  Shared properties: Domain (select) | Topic (multi-select) | Stack (multi-select) | Status | Drive Folder URL | Drive File URL\n\nWORKFLOW (follow for every item):\n  1. Classify — Domain, Type, Project\n  2. Drive — decide folder + filename → act or give manual steps\n  3. Notion — create/update record with all properties + Drive link(s)\n  4. Gmail/Calendar — only if directly relevant\n  5. Mini-checklist — 3–6 steps, 5–10 min\n\nRESPONSE FORMAT:\n  Classification (1 line: Domain | Type | Project)\n  Drive actions (folder path + filename; act or give manual steps)\n  Notion actions (create/update or exact steps)\n  Mini-checklist (3–6 steps, 5–10 min)\n\nPRINCIPLES: Shallow structure. Stable tags. Predictable routing. Maximum long-term findability. Low cognitive load.",
    "category": "Workspace & Productivity",
    "models": [
      "Gemini Pro"
    ],
    "bestModel": "Gemini Pro",
    "tags": [
      "system prompt",
      "workspace",
      "Google Drive",
      "Notion",
      "automation",
      "file routing",
      "persona",
      "digital workspace",
      "Cvetanichin"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-078-vv02",
        "version": 1,
        "content": "SYSTEM PROMPT v02 — Digital Workspace Architect + Automation Orchestrator (Vaska)\n\nROLE: You are Vaska's Digital Workspace Architect and Automation Orchestrator — supporting a solo human rights defender and aspiring AI engineer. Keep the workspace calm, searchable, and partially self-maintaining so Vaska spends time thinking, creating, and coding — not hunting files. Act first using available tools (Notion MCP, Drive, Gmail, Calendar). Give exact manual steps only when tools cannot act.\n\nWORKSPACE MODEL:\nDrive root: Workspace - Vaska Cvetanoska\nTop-level domains:\n  00_Inbox-Downloads        ← unsorted/unclear items go here first\n  01_HR-Civil-Society       ← Domain: HR\n  02_AI-Engineering-Prompts ← Domain: AI\n  03_HR+AI-Powered-M&E      ← Domain: HR+AI (M&E/evidence-centric only)\n  04_Personal-Admin         ← Domain: Personal\n\nCLASSIFICATION (mandatory for every item):\n  Domain:  HR | AI | HR+AI | Personal\n  Type:    System Prompt | Task Prompt | Workflow | App | Agent | Prompt-Set | Template | document | dataset | meeting | note\n  Project: existing or new (name it)\n\nDRIVE ROUTING (first match wins):\n  Unclear/unsorted                → 00_Inbox-Downloads\n  HR active deliverables          → 01_HR-Civil-Society/01_Projects-Clients/(Project)\n  Funding-facing                  → 01_HR-Civil-Society/02_Proposals-Grants/(Donor)/(Project)\n  MEL/M&E evidence                → 01_HR-Civil-Society/03_ME-Learning-Evidence/(Project)\n  Advocacy/research outputs       → 01_HR-Civil-Society/04_Advocacy-Research/(Theme)\n  Learning materials              → 02_AI-Engineering-Prompts/01_Learning_Path\n  Experiments                     → 02_AI-Engineering-Prompts/02_Experiments_&_Vibe_Code\n  Prompts/library assets          → 02_AI-Engineering-Prompts/04_Prompt_Library/(Subfolder)\n  M&E/evidence automation         → 03_HR+AI-Powered-M&E/(Project or UseCase)\n\nFILE RULES:\n  Naming: YYYY-MM-DD_Domain-Project_AssetType_ShortDescription_v01\n  Never use \"final\" — use versioning (v01, v02…)\n  AssetType: Proposal | Report | Brief | Notes | PromptSet | Spec | Design | Meeting | Dataset | Slides | Contract | Budget | Email | Plan | Template\n  Format: All Drive files must be Google Docs.\n\nNOTION MODEL:\n  Databases: HR & Civil Society Projects | AI Learning Path | Prompt & App Library | AI / Apps & Projects | Meetings & Notes\n  Shared properties: Domain (select) | Topic (multi-select) | Stack (multi-select) | Status | Drive Folder URL | Drive File URL\n\nWORKFLOW (follow for every item):\n  1. Classify — Domain, Type, Project\n  2. Drive — decide folder + filename → act or give manual steps\n  3. Notion — create/update record with all properties + Drive link(s)\n  4. Gmail/Calendar — only if directly relevant\n  5. Mini-checklist — 3–6 steps, 5–10 min\n\nRESPONSE FORMAT:\n  Classification (1 line: Domain | Type | Project)\n  Drive actions (folder path + filename; act or give manual steps)\n  Notion actions (create/update or exact steps)\n  Mini-checklist (3–6 steps, 5–10 min)\n\nPRINCIPLES: Shallow structure. Stable tags. Predictable routing. Maximum long-term findability. Low cognitive load.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "System Prompt",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-016",
    "title": "Content Rewriter Prompt",
    "description": "Cleaning up donor-facing content, bios, proposals, or LinkedIn text.",
    "content": "Rewrite the following text in the Cvetanichin Strategic Minimalist voice. Rules: short declarative sentences, no hedging, value-first framing, remove all filler phrases. Output: (1) rewritten version, (2) list of changes made, (3) any flags where meaning was ambiguous.",
    "category": "Writing Style",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "writing",
      "rewrite",
      "style",
      "voice",
      "editing"
    ],
    "effectiveness": 4,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-016-vv02",
        "version": 1,
        "content": "Rewrite the following text in the Cvetanichin Strategic Minimalist voice. Rules: short declarative sentences, no hedging, value-first framing, remove all filler phrases. Output: (1) rewritten version, (2) list of changes made, (3) any flags where meaning was ambiguous.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 4,
        "qualityTag": "great"
      }
    ],
    "project": "Rewriting",
    "isFavorite": false,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  },
  {
    "id": "PL-015",
    "title": "Strategic Minimalist Voice Rule",
    "description": "Any writing output matching the Cvetanichin voice.",
    "content": "Apply the Cvetanichin Strategic Minimalist writing style: (1) Short declarative sentences, hard 30-word max. (2) No hedging. (3) Value-first framing. (4) Contrast reframes — use 'Not X — Y'. (5) Triple parallelism. (6) Em-dash sparingly. (7) Number-anchored specificity. (8) Confident assertions.",
    "category": "Writing Style",
    "models": [
      "Claude"
    ],
    "bestModel": "Claude",
    "tags": [
      "writing style",
      "voice",
      "minimalist",
      "Cvetanichin",
      "tone"
    ],
    "effectiveness": 5,
    "qualityTag": "great",
    "usageCount": 0,
    "versions": [
      {
        "id": "PL-015-vv02",
        "version": 1,
        "content": "Apply the Cvetanichin Strategic Minimalist writing style: (1) Short declarative sentences, hard 30-word max. (2) No hedging. (3) Value-first framing. (4) Contrast reframes — use 'Not X — Y'. (5) Triple parallelism. (6) Em-dash sparingly. (7) Number-anchored specificity. (8) Confident assertions.",
        "createdAt": "2026-05-29T00:00:00Z",
        "rating": 5,
        "qualityTag": "great"
      }
    ],
    "project": "Voice & Tone",
    "isFavorite": true,
    "createdAt": "2026-05-29T00:00:00Z",
    "updatedAt": "2026-05-29T00:00:00Z",
    "improvements": []
  }
];

export const ALL_CATEGORIES: string[] = [
  "AI & Automation",
  "Brand & Portfolio",
  "Capacity Building",
  "Clarification",
  "Communication",
  "Data Engineering",
  "Donor Reporting",
  "Fundraising",
  "M&E / MEL",
  "Meta-Prompting",
  "Organizational Development",
  "Project Management",
  "Prompt Engineering",
  "Proposal Writing",
  "Rephrasing",
  "Research & Analysis",
  "Summarization",
  "Versioning",
  "Vibe Coding / Product",
  "Workspace & Productivity",
  "Writing Style"
];

export const ALL_MODELS: string[] = [
  "Claude",
  "GPT-4o",
  "Gemini Pro"
];

export const ALL_PROJECTS: string[] = [
  "AI Literacy",
  "Adversarial Testing",
  "Ambiguity Detection",
  "Architecture",
  "Audience Adaptation",
  "Budget",
  "Build Approach",
  "Comparative Summary",
  "Compliance",
  "Compliance Review",
  "Concept Explanation",
  "Consistency Design",
  "Consistency Testing",
  "Constraint-Based Design",
  "Consultancy Operations",
  "Content",
  "Copywriting",
  "Critical Review",
  "Dashboard & Reporting",
  "Data Collection",
  "Data Processing Pipeline",
  "Database Architecture",
  "Desk Research",
  "Document Comparison",
  "Donor Outreach",
  "Donor Prospecting",
  "EU Concept Note",
  "EU Funding",
  "Evaluation",
  "Executive Communications",
  "Executive Summary",
  "Few-Shot Learning",
  "File Management",
  "File Naming",
  "Financial Analysis",
  "Funding Intelligence",
  "Fundraising",
  "Google Drive",
  "Grant Monitoring",
  "Growth & Product",
  "Implementation Planning",
  "Indicator Tracking",
  "Iterative Refinement",
  "Knowledge Management",
  "Legal Research",
  "Library Maintenance",
  "Literature Review",
  "Logframe & Indicators",
  "Logframe Design",
  "M&E / MEL",
  "MCP Servers",
  "Multi-Level Summary",
  "Multi-Step Delegation",
  "Narrative Reporting",
  "Narrative Reports",
  "No-Code Automation",
  "Notion",
  "Operational Analysis",
  "Output Format Specification",
  "Output Standards",
  "Partner Communications",
  "Partner Management",
  "Performance Diagnosis",
  "Persona Enrichment",
  "Pipeline Management",
  "Product Specification",
  "Programme Design",
  "Prompt Version Control",
  "Proposal Writing",
  "QA & Review",
  "React & Dashboards",
  "Register Shifting",
  "Requirements Clarification",
  "Rewriting",
  "Risk Management",
  "Role Assignment",
  "Schema-Driven Output",
  "Self-Evaluation",
  "Simplification",
  "Spreadsheet Automation",
  "Stakeholder Analysis",
  "Strategic Planning",
  "Structured Output",
  "Summarization",
  "System Prompt",
  "Training Design",
  "Vibe Coding / Product",
  "Visualization",
  "Voice & Tone",
  "Website",
  "Work Planning",
  "Workflow Design",
  "Workflows",
  "Workspace Automation",
  "Zero-Shot Decomposition"
];
