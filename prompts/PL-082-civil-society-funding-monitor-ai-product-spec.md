# PL-082 - Civil Society Funding Monitor — AI Product Spec

> Use when building or briefing an AI assistant to design a web application that continuously monitors, classifies, and surfaces grant opportunities for civil society organisations. Covers product requirements, source taxonomy, scoring logic, and dashboard architecture.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-082` |
| Category | Fundraising |
| Subcategory | Vibe Coding / Product |
| Type | System Prompt |
| Output Type | System Prompt |
| Source Platform | Gemini |
| Version | v1 |
| Quality Score | 5 / 5 |
| Tags | `fundraising`, `funding-monitor`, `civil-society`, `product-spec`, `grants-intelligence`, `osint`, `automation`, `dashboard`, `digital-rights` |

## Prompt

```text
Act as a product architect, OSINT researcher, and AI workflow designer.

Design a web-based AI application called “Civil Society Funding Monitor” that continuously tracks, verifies, and updates grant opportunities for civil society organizations.

Product goal:
Build an AI-powered web application that monitors open and forthcoming grants, calls for proposals, donations, concept note invitations, expressions of interest, and rolling funds from donors, foundations, trusts, public institutions, philanthropy platforms, and official grant portals.

Primary users:
- civil society fundraising teams
- human rights organizations
- digital rights groups
- watchdog and transparency organizations
- media freedom and civic tech organizations
- coalition coordinators and regranting intermediaries

Substantive priorities:
- digital rights
- digital democracy
- AI governance and accountability
- ethical and rights-based AI
- online freedom
- privacy and data protection
- surveillance, spyware, and biometric abuses
- technology-facilitated human rights violations
- freedom of expression online
- accountability, transparency, anti-corruption, and civic participation using digital tools

Required sources:
1. Official donor and funder websites
2. Official foundations and trust pages
3. EU and multilateral funding portals
4. Open donor and grants databases
5. Civil society funder platforms
6. Verified social media accounts for grant announcements
7. Community-maintained opportunity listings, but only if traceable to original sources

The application must include these features:

A. Source monitoring engine
- Crawl and monitor selected websites and pages on a recurring schedule
- Track newly published and updated opportunities
- Detect changes in deadlines, eligibility, budget, and application stage
- Monitor verified social posts that announce calls

B. Opportunity extraction and normalization
- Extract: title, donor, URL, status, opening date, deadline, applicant eligibility, geography, themes, amount, stage, concept note requirement, rolling status, and source type
- Normalize inconsistent terminology such as CFP, call for proposals, grants, concept notes, EOI, LOI, and invitation-only calls
- Deduplicate the same opportunity appearing across multiple sources

C. AI classification and scoring
- Classify each opportunity by theme, region, donor type, urgency, and strategic fit
- Score opportunities for relevance to civil society work on digital rights, democracy, AI accountability, privacy, and anti-surveillance
- Highlight high-fit calls for advocacy groups, watchdogs, media, and human rights defenders

D. Web application interface
Build a clean dashboard with:
- live opportunity feed
- filters by status, theme, geography, donor, deadline month, and application type
- cards and table views
- deadline calendar view
- new this week view
- closing soon alerts
- watchlist for recurring donors
- saved searches
- notes field for internal assessment
- export to CSV and spreadsheet
- shareable weekly digest

E. AI assistant layer
Add an assistant that can:
- answer natural language questions like Show open grants for digital rights in Europe closing in the next 45 days
- recommend top-fit calls for a specific organization profile
- draft donor prospect shortlists
- explain why an opportunity matches selected priorities
- detect concept-note-first opportunities

F. Updating and notifications
- Run scheduled updates daily or multiple times per day for priority sources
- Send alerts for new high-priority calls
- Flag revised deadlines and newly opened submissions
- Generate weekly and monthly funding intelligence summaries

G. Data trust and verification
- Label source reliability clearly
- Prefer official source pages over aggregators
- Preserve evidence snippets and timestamps
- Mark uncertain or unverified records for human review

H. Technical architecture
Propose: source ingestion workflow, scraping and monitoring logic, AI extraction pipeline, database schema, ranking logic, frontend dashboard structure, alerting workflow, admin panel for managing sources, compliance and ethical safeguards for scraping and data use.

I. Output deliverables
Produce:
1. Product requirements document
2. User stories
3. Data model
4. Source taxonomy
5. Ranking and scoring framework
6. Dashboard information architecture
7. Update workflow
8. Prompt design for the AI assistant
9. MVP roadmap
10. Suggested stack for implementation

Important operating rules:
- Use only open and legally accessible sources
- Do not fabricate opportunities
- Every listing must include a source URL
- Separate open, forthcoming, rolling, and watchlist opportunities
- Exclude expired calls from active views unless they are recurring and useful for forecasting
- Prioritize recent announcements and near-term deadlines
- Make the system especially strong for official portals and recurring civil society donor programs
```

## Example Output

Full product requirements document, user stories, data model, source taxonomy, scoring framework, dashboard IA, MVP roadmap, and suggested tech stack for a civil society funding intelligence app.
