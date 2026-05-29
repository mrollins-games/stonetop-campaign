# Stonetop Campaign — GM Quick Start Guide

## Setup: Give Copilot in Teams This Prompt

When you start a new Copilot chat (or at the beginning of each session), paste this:

> You are my Stonetop TTRPG GM assistant. Your instructions, skills, and all campaign files are in `stonetop-campaign/`. Start by reading `_copilot-instructions.md` for your full behavior guide, then `skills/_skills-overview.md` for available skills. Always check `gm-notes/` for my to-dos, ideas, and house rules before answering anything. The game's full extracted text is in `reference/source-text/` — use the indexes in `reference/indexes/` to find things fast.

That's it. Copilot now knows how to:
- Answer rules and lore questions (with citations)
- Process session transcripts into structured records
- Help you prep sessions, create threats, improvise NPCs
- Surface your own to-dos and ideas at the right time

---

## Day-to-Day Usage

### Before Your First Session
1. Run `/session-zero-prep` — Copilot walks you through everything
2. Add any ideas or to-dos to `gm-notes/ideas.md` and `gm-notes/todos.md`

### After Each Session
1. Drop the Teams call transcript into the chat
2. Say: **"Process this transcript as session [N]"**
3. Copilot creates the session record, updates NPCs, threats, steading, timeline
4. Review what it produced and correct anything wrong

### Between Sessions (Prep)
1. Ask: **"Help me prep for next session"** → runs `/prep-session`
2. Or: **"What should I do next?"** → runs `/whats-next`
3. Copilot will synthesize your to-dos, ideas, active threats, and rules guidance

### During Play (Quick Reference)
- **"How does [X] work?"** → rules lookup with page citations
- **"Tell me about [location/creature]"** → full lore briefing
- **"What would [NPC] say about...?"** → NPC improvisation help
- **"Stats for [monster]?"** → instant stat block from the 172 indexed
- **"The PCs roll Know Things about [X]"** → tiered answers by roll result

---

## Available Skills (Commands)

You don't need the exact slash command — just describe what you need. But these are the skills Copilot knows:

| Say something like... | Skill triggered |
|----------------------|----------------|
| "Process this transcript" | `/process-transcript` |
| "What should I do/ask/prep?" | `/whats-next` |
| "I need a threat for [location]" | `/create-threat` |
| "Help me prep session zero" | `/session-zero-prep` |
| "Help me prep for next session" | `/prep-session` |
| "Generate an NPC" | `/npc-generator` |
| "How does [rule] work?" | `/rules-lookup` |
| "Tell me about [topic]" | `/lore-dump` |
| "Give me a recap" | `/recap` |
| "Time for Seasons Change" | `/season-change` |
| "We're heading to [place]" | `/expedition-prep` |
| "They roll Know Things about [X]" | `/know-things` |
| "What would [NPC] say/do?" | `/improv-npc` |
| "Write a love letter to [PC]" | `/love-letter` |

---

## Managing Your Notes

### To-Dos (`gm-notes/todos.md`)
Add prep tasks with context tags. Copilot will surface them when relevant.
```
| 2 | 🟡 Med | Between Sessions | Write up the crinwin threat | 2026-06-01 | ☐ |
```

### Ideas (`gm-notes/ideas.md`)
Add creative sparks with context tags. Copilot will suggest them at the right moment.
```
### 2. Homefront — The Smith's Secret
**Context:** `Homefront`, `NPC Interaction`
**Idea:** The smith has been hiding a piece of old Maker metal...
**Related:** `reference/source-text/book-ii-entries/forge-lords.md`
**Used:** ☐
```

### House Rules (`gm-notes/house-rules.md`)
Add rules modifications. Copilot checks these FIRST before giving standard rules answers.

---

## File Structure (What's Where)

```
stonetop-campaign/
├── _copilot-instructions.md   ← Copilot's brain (don't delete!)
├── _index.md                  ← Dashboard / quick links
│
├── sessions/                  ← Session-by-session records
├── characters/                ← Player character sheets
├── steading/                  ← Stonetop village stats & improvements
├── npcs/                      ← NPC index + individual writeups
├── threats/                   ← Active & resolved threats
├── world/                     ← Timeline, locations, discoveries
│
├── gm-notes/                  ← YOUR personal notes
│   ├── todos.md               ← Things to prep/read/do
│   ├── ideas.md               ← Creative sparks (tagged)
│   └── house-rules.md         ← Rule modifications
│
├── skills/                    ← Copilot's skill definitions
│   └── [14 skill files]       ← Structured workflows
│
└── reference/                 ← Full game text (extracted from PDFs)
    ├── indexes/               ← Fast-lookup tables
    │   ├── rules-index.md     ← "How does X work?" → file + page
    │   ├── lore-index.md      ← "Tell me about X" → file
    │   └── monster-index.md   ← 172 stat blocks at a glance
    └── source-text/           ← All PDF content as searchable text
        ├── book-i-chapters/   ← Rules (17 chapters)
        ├── book-ii-entries/   ← Setting guide (57 entries)
        └── handouts/          ← Player references
```

---

## Tips

- **You don't need to memorize commands.** Just talk naturally — Copilot maps your request to the right skill.
- **Cross-referencing is automatic.** When Copilot processes a transcript, it links NPCs↔sessions, threats↔locations, etc.
- **Your ideas get used.** Tag them well and Copilot will bring them up when the moment is right.
- **House rules always win.** If you override a rule, Copilot remembers and applies it.
- **Edit any file directly.** These are all plain markdown — you can open and edit them anytime.
- **Start simple.** You don't need to use every skill. Start with transcript processing and "what's next?" — the rest will feel natural.

---

## First Time? Do This:

1. ✅ Open a Copilot chat in Teams
2. ✅ Paste the setup prompt from the top of this file
3. ✅ Say: "Help me prep for session zero"
4. ✅ After your first session, drop the transcript and say "Process this as session 1"
5. ✅ Before session 2, say "Help me prep for next session"

That's the whole loop. Everything else builds on top of it.
