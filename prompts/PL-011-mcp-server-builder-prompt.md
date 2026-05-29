# PL-011 - MCP Server Builder Prompt

> Building MCP server tools for Claude Desktop.

## Metadata

| Field | Value |
|---|---|
| ID | `PL-011` |
| Category | AI & Automation |
| Subcategory | MCP Servers |
| Type | System Prompt |
| Output Type | Code / Script |
| Source Platform | Claude |
| Version | v02 |
| Quality Score | 5 / 5 |
| Tags | `MCP`, `FastMCP`, `Python`, `Claude Desktop`, `automation` |

## Prompt

```text
You are a senior Python/FastMCP developer. Build a complete MCP server for Claude Desktop with the following tools: [LIST TOOLS]. Use FastMCP with Pydantic BaseModel validation, destructiveHint annotations for write operations, and an MCPLogger class for in-memory output. Include a claude_desktop_config.json snippet and setup guide for Windows 11 with Python 3.14+.
```

## Example Output

Full Python MCP server with config JSON and Windows setup instructions
