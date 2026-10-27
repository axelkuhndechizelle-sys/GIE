---
name: graphify
description: Build a knowledge graph of the repo (files, imports, Python classes/functions, Markdown links) as JSON, an interactive HTML view and a report. Use when the user types /graphify or asks to map, graph or visualize the codebase structure.
---

# graphify

1. Run `python3 .claude/skills/graphify/graphify.py [dossier]` from the repo root (default `.`; on Windows use `python` or `py` if `python3` is missing).
2. It writes to `graphify-out/` :
   - `graph.json` — nodes `{id, type}` (type: file, function, class, external, asset) and edges `{source, target, kind}`
   - `graph.html` — interactive force graph, self-contained, works offline (drag nodes, pan, wheel zoom, hover for names)
   - `GRAPH_REPORT.md` — counts, most connected nodes, orphan files
3. Read `GRAPH_REPORT.md` and summarize for the user: key hubs, isolated files, surprising dependencies.
4. If the repo is empty, say so instead of producing an empty graph.
5. Use `graph.json` afterwards to answer structural questions ("who imports X?") instead of re-grepping.
