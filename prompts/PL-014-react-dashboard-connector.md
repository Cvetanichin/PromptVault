# PL-014 - React Dashboard Connector

> Connecting a Python backend pipeline to a React frontend.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-014` |
| Category | AI & Automation |
| Subcategory | React & Dashboards |
| Type | Task Prompt |
| Output Type | Code / Script |
| Source Platform | Claude |
| Version | v02 |
| Quality Score | 4 / 5 |
| Tags | `React`, `FastAPI`, `SSE`, `dashboard`, `Python` |

## Prompt

```text
Build a React/FastAPI dashboard that streams pipeline output in real time using SSE. Frontend: React with useEffect for SSE, abort controller, Connected/Demo Mode status badge. Backend: FastAPI wrapping existing CLI script. CORS configured for Vite dev server.
```

## Example Output

Full-stack app with live streaming, status badge, and demo fallback mode
