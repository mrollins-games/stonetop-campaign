# Skill: /whats-next

> Contextual assistant that synthesizes what Copilot knows to suggest what the GM
> should do, ask, prepare, or remember — right now.

## When to Use
- User asks "what should I do next?" / "what else should I ask?" / "what am I forgetting?"
- User seems unsure what to prep or do
- Beginning of a prep session

## Procedure

### Step 1: Determine Current Context
Identify the situation from the user's message and campaign state:
- Are we in session zero / character creation?
- Are we mid-session (homefront or expedition)?
- Are we between sessions (prepping)?
- What's the current in-game season?

### Step 2: Gather Relevant Materials
Based on context, read:

| Context | Files to Check |
|---------|---------------|
| Always | `gm-notes/todos.md`, `gm-notes/ideas.md` |
| Session Zero | `reference/source-text/book-i-chapters/02-getting-started.md` (p.15–34) |
| Character Creation | `reference/source-text/handouts/copy-of-character_playbooks_(all).md` |
| Between Sessions | `threats/_threat-tracker.md`, last session file, `world/timeline.md` |
| Homefront | `reference/source-text/book-i-chapters/15-homefront.md`, `steading/stonetop.md` |
| Expedition | `reference/source-text/book-i-chapters/10-expeditions.md` |
| Seasons Change | `reference/source-text/book-i-chapters/15-homefront.md` (p.516–523) |

### Step 3: Filter GM Notes
From `gm-notes/todos.md` and `gm-notes/ideas.md`:
- Find entries whose **Context tags** match the current situation
- Include HIGH priority to-dos regardless of tag match
- Include any idea marked **Used: ☐** that matches current context

### Step 4: Cross-Reference Game Rules
Check the relevant rules chapter for GM instructions that apply:
- Session zero → What does the book say to ask during introductions?
- Between sessions → What does the book say about writing threats, prepping adventures?
- Homefront → What moves are available, what should GM be showing?

### Step 5: Synthesize and Present
Output a combined, prioritized list:

```markdown
## What's Next: [Context Summary]

### Must Do (from to-dos)
- [ ] [to-do item] — [why it matters now]

### From the Rulebook
- [thing the rules say to do in this situation]
- [questions the rules say to ask]

### Your Ideas (from idea bank)
- [relevant idea] — [why it fits now]

### Suggestions (Copilot-generated)
- [additional suggestion based on campaign state]
```

## Example
**User:** "What else should I ask the players during session zero?"

**Copilot would:**
1. Context = Session Zero / Character Creation
2. Read `02-getting-started.md` for the GM's session-zero checklist
3. Read each playbook's "Introductions" section for required questions
4. Check `gm-notes/ideas.md` → finds Idea #1 (gods & shrines) tagged `Session Zero`
5. Check `gm-notes/todos.md` → finds to-do about reading threats section
6. Check what's already been established (session-001.md if it exists)
7. Produce a combined list of: book-required questions not yet asked + GM ideas + suggestions
