# PL-080 - Google Workspace Automation & Local-Cloud Integration Architecture

> Use when setting up or improving automations between local files and Google Workspace (Drive, Gmail, Calendar, Keep). Produces a connected architecture with workflow maps, automation triggers, and a phased implementation checklist.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-080` |
| Category | AI & Automation |
| Subcategory | Workspace Automation |
| Type | Task Prompt |
| Output Type | Framework |
| Source Platform | Gemini |
| Version | v01 |
| Quality Score | 4 / 5 |
| Tags | `Google Drive`, `Gmail`, `Google Calendar`, `automation`, `workspace`, `local drive`, `integration`, `workflow`, `Gemini`, `productivity`, `filing` |

## Prompt

```text
I want to design and build a fully customized workspace tailored to my daily operations, workflows, and personal needs. I need to set up automations and connect my local drive (laptop) and local files between my Gmail account and tools such as Google Drive, Google Calendar, Google Keep, and Gemini to reduce manual filing and archiving work. Analyze and improve my internal workflows to make my work and operations clearer, faster, and more efficient using my G-Drive Workspace. Help me bring structure, turning scattered files into organized systems and systems into easy access.

Provide a Unified Digital Workspace Architecture prompt that will:
1. Connect my local files with my G-Drive workspace using clear naming and categorization methods
2. Design automations between Gmail, Calendar, Drive, and Keep to reduce manual work
3. Map my daily operational workflows and identify friction points
4. Suggest a phased implementation plan: manual setup first → automation layer second
5. Include a maintenance routine (weekly/monthly) to keep the workspace self-managing

My context:
- Solo professional, two work domains: civil society/HR work and AI/technical learning
- Main tools: Google Drive, Notion, Gmail, Google Calendar, Gemini AI
- Goal: Reduce time hunting files; increase time thinking, creating, coding

Output: Architecture diagram (described), workflow map, automation trigger list, phased checklist.
```

## Example Output

Architecture: local sync via Drive for Desktop (Mirror for active, Stream for archive). Automations: Gmail label → Drive auto-folder rule. Workflow map: Inbox → Tag → File → Notion record. Phased checklist: Week 1 manual setup, Week 2 automation layer.
