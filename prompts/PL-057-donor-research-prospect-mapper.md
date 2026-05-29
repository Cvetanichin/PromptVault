# PL-057 - Donor Research & Prospect Mapper

> Weekly donor prospecting — building a prioritised list of matched funders based on organisation profile and thematic fit.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-057` |
| Category | Fundraising |
| Subcategory | Donor Prospecting |
| Type | Task Prompt |
| Output Type | Table |
| Source Platform | Manual |
| Version | v01 |
| Quality Score | 5 / 5 |
| Tags | `fundraising`, `donor research`, `prospecting`, `CSO`, `grants`, `EU`, `bilateral`, `foundations` |

## Prompt

```text
You are a fundraising strategist. Research and map funding opportunities for [ORGANISATION NAME] working in [THEMATIC AREA] in [REGION/COUNTRY].

Organisation profile: [MISSION, SIZE, TRACK RECORD, LANGUAGES]
Funding need: [PROJECT TYPE / AMOUNT RANGE / TIMELINE]

Search across:
- EU institutional (CERV, IPA, EIDHR, Erasmus+, Horizon)
- Bilateral (GIZ, SIDA, FCDO, USAID, SDC)
- Private foundations (Open Society, Mott, MacArthur, etc.)
- Domestic and regional sources

For each opportunity:
| Funder | Focus areas | Geographic scope | Grant size | Next deadline | Fit score (1-5) | Entry point |

Rank by fit score. Flag any with deadlines in next 60 days. Add a 3-sentence strategic recommendation at the end.
```

## Example Output

Ranked donor list: funder, focus areas, geography, grant size, deadline, fit score, and entry point recommendation
