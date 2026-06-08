# Skills System — Overview

> Skills are structured prompts that teach Copilot to perform complex GM-aid tasks.
> Each skill file defines: when to use it, what inputs it needs, what files to consult,
> and what output to produce.

## How to Invoke Skills
In conversation with Copilot, use the skill name as a command:
- `/session-zero-prep` — Help prepare for session zero
- `/create-threat` — Create or select a threat
- `/prep-session` — Prepare for next session
- `/npc-generator` — Create a new NPC
- `/whats-next` — "What should I do/ask/prep next?"
- `/rules-lookup` — Answer a rules question with citations
- `/lore-dump` — Comprehensive briefing on a topic
- `/recap` — Summarize recent sessions
- `/season-change` — Walk through the Seasons Change procedure
- `/expedition-prep` — Help plan an expedition
- `/populate-hex` — Develop a hex with terrain, POIs, passives, and active interactions

## How Copilot Should Use Skills
When the user asks a question or requests help:
1. Check if the request maps to a skill (see skill files)
2. If yes, follow that skill's procedure
3. Always check `gm-notes/` files for relevant to-dos, ideas, and house rules
4. Cross-reference with campaign state (current session, threats, NPCs, timeline)

## Context Awareness
For any skill invocation, Copilot should first gather context:
- **Current session number** — from `sessions/` (highest numbered file)
- **Current in-game season** — from `world/timeline.md`
- **Active threats** — from `threats/_threat-tracker.md`
- **Recent events** — from the last 1–2 session files
- **GM notes** — scan `gm-notes/todos.md` and `gm-notes/ideas.md` for matching context tags
