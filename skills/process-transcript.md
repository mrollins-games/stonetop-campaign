# Skill: /process-transcript

> Process a Teams call transcript into campaign records.
> This is the primary post-session workflow.

## When to Use
- User provides a session transcript
- User says "process this transcript" or "update records from session"

## Procedure

### Step 1: Create Session File
- Determine session number (next after highest in `sessions/`)
- Create `sessions/session-NNN.md` from `sessions/_session-template.md`
- Fill in: date, players present, in-game season

### Step 2: Extract Narrative
Read the transcript and write a **narrative summary** (not a transcription):
- What happened in the story?
- What decisions did the PCs make?
- What was the outcome?
- Where did we leave off?

### Step 3: Extract Game State Changes
Scan for:

| Look For | Update File |
|----------|-------------|
| NPC names mentioned | `npcs/_npc-index.md` + individual files |
| New NPCs introduced | Create new NPC file |
| Stat changes (HP, XP, gear) | `characters/[name].md` |
| Steading stat changes | `steading/stonetop.md` |
| Surplus gained/spent | `steading/stonetop.md` |
| Improvements progress | `steading/improvements.md` |
| Threats introduced/advanced | `threats/_threat-tracker.md` + individual |
| Locations visited | `world/locations/_location-index.md` |
| Arcana/items found | `world/discoveries/arcana.md` |
| Season changed | `world/timeline.md` |
| Dice rolls (especially 6-) | Session file Moves table |
| Content safety decisions | `steading/stonetop.md` (Content Safety) |

### Step 4: Cross-Reference
For every entity mentioned:
- Add session link to the entity's "Session Appearances" table
- Add entity to the session file's relevant section (NPCs, Threats, etc.)

### Step 5: Identify Hooks & Loose Ends
Note anything unresolved that could become:
- A to-do → suggest adding to `gm-notes/todos.md`
- A future threat → note in session file
- An idea → suggest adding to `gm-notes/ideas.md`

### Step 6: Present Summary
Show the user:
```markdown
## Session [N] Processed

### Narrative Summary
[3–5 paragraphs]

### Records Updated
- NPCs: [list of NPCs added/updated]
- Threats: [changes]
- Steading: [changes]
- Characters: [changes]
- Timeline: [season/events]

### Loose Ends to Track
- [unresolved thing 1]
- [unresolved thing 2]

### Suggested To-Dos
- [ ] [prep item for next session]
```

## Important Notes
- Do NOT invent details not in the transcript
- Mark uncertain interpretations with [?]
- If game mechanics were discussed but results unclear, flag for GM confirmation
- Distinguish between in-character fiction and out-of-character table talk
