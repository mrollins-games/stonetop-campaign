# Skill: /prep-session

> Help the GM prepare for the next session. Synthesizes campaign state, pending hooks,
> active threats, and GM notes into an actionable prep agenda.

## When to Use
- User says "help me prep for next session" / "what should I prepare?"
- Between sessions

## Procedure

### Step 1: Review Campaign State
Read and summarize:
- `world/timeline.md` — current season, recent events
- `threats/_threat-tracker.md` — active threats and their portent stage
- Last 1–2 session files — what happened, what's unresolved
- `npcs/_npc-index.md` — who's been active recently

### Step 2: Check GM Notes
- `gm-notes/todos.md` — any pending prep tasks
- `gm-notes/ideas.md` — ideas tagged `Between Sessions` or matching current context
- `gm-notes/house-rules.md` — any rules to remember

### Step 3: Identify Prep Priorities
Based on the game rules (`reference/source-text/book-i-chapters/17-the-game-ongoing.md`), between sessions the GM should:

1. **Review notes** from last session
2. **Update threats** — advance grim portents for active threats (time passes!)
3. **Write new threats** if needed (especially after Seasons Change)
4. **Prep the next adventure** — decide on an opening, what's happening in town
5. **Think about NPCs** — what are they doing offscreen?
6. **Consider the steading** — any changes? Is a Seasons Change coming?

### Step 4: Generate Prep Agenda

```markdown
## Prep for Session [N+1]

### Campaign State
- **Season:** [current]
- **Last session ended:** [summary of where we left off]
- **Unresolved hooks:** [list]

### Threat Updates
For each active threat, suggest whether its grim portents should advance:
- [Threat] — currently at portent [N]. Should it advance? [reasoning]

### Adventure Prep
- [If PCs are mid-expedition: what's next on their path?]
- [If PCs are in town: what hook draws them out? What's happening at home?]

### NPC Prep
- [NPCs likely to appear and what they want]

### Your To-Dos
- [from gm-notes/todos.md]

### Your Ideas to Consider
- [from gm-notes/ideas.md]

### Suggested Opening Scene
[1–2 sentence suggestion for how to open the session]
```

## Reference Files
- Book I Chapter 17: The Game Ongoing (p.571–596)
- Book I Chapter 9: Threats (p.277–300) — for advancing threats
- Book I Chapter 15: Homefront (p.483–548) — for village scenes
