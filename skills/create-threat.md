# Skill: /create-threat

> Helps the GM create or select threats appropriate to the current game context.

## When to Use
- User says "I need a threat" / "create a threat" / "what threats fit here?"
- After Seasons Change when a threat must be introduced
- When prepping an adventure and needing opposition

## Procedure

### Step 1: Determine Context
Gather:
- **Current location:** Where are the PCs? (Stonetop, Great Wood, Flats, etc.)
- **Current season:** From `world/timeline.md`
- **Existing threats:** From `threats/_threat-tracker.md` (avoid duplicates)
- **Recent events:** From last session file (what's been happening?)
- **NPCs in play:** From `npcs/_npc-index.md` (potential wildcards)

### Step 2: Find Canon Threats
Search the relevant Book II entry for the current location:
- Read the entry file (e.g., `book-ii-entries/the-great-wood.md`)
- Look for sections labeled "Hooks," "Threats," "Dangers," or stat blocks
- Also check `reference/source-text/book-i-chapters/09-threats.md` for threat-writing guidance

Cross-reference with:
- `reference/indexes/monster-index.md` — creatures present in this area
- `reference/indexes/lore-index.md` — factions/powers active here

### Step 3: Rank and Present Options

Present threats in tiers:

```markdown
## Threats for [Location/Context]

### From the Source Material (most → least common)
1. **[Name]** ([type]) — [1-line description] — *Source: [file]*
2. **[Name]** ([type]) — [1-line description] — *Source: [file]*
3. **[Name]** ([type]) — [1-line description] — *Source: [file]*

### Creative Suggestion (context-appropriate)
4. **[Name]** ([type]) — [original idea inspired by current events]
   - Why it fits: [connection to recent session events or NPC drama]

### Generate Custom
5. Want me to create a completely new threat? I'll need:
   - Type (villain / rabble / wildcard / magical entity / supernatural / environmental / political)
   - Approximate scale (local nuisance → existential danger)
   - Any NPCs or locations it should connect to
```

### Step 4: Build the Threat (once user picks)
Use the threat template (`threats/_threat-template.md`) and fill it:

1. **Name & Type** — from selection
2. **Instinct** — "to [verb]" — drives all their behavior
3. **Description** — 2–3 sentences of who/what and how they connect to existing fiction
4. **Grim Portents** — 3–4 escalating steps from "first signs" to "impending doom"
   - Each should be concrete and observable
   - Each worse than the last
   - Final one = what happens if PCs never intervene
5. **Stakes** — 2–3 open questions about how this plays out
6. **GM Moves** — 3–4 specific things you can do with this threat in play

### Step 5: Save and Cross-Reference
- Create `threats/[threat-name].md`
- Update `threats/_threat-tracker.md`
- If the threat involves an NPC, update their file in `npcs/`
- If location-specific, note in `world/locations/`

## Rules Reference (from Book I p.278–300)
Key principles for good threats:
- A threat is an **ongoing problem that worsens if unchecked**
- Not every monster/NPC is a threat — only if it's going to be a recurring/escalating issue
- Instinct should be a single verb phrase that drives ALL their behavior
- Grim portents should be things the PCs can discover or witness
- Stakes are questions, not answers — play to find out
- Types: Villain (evil + power), Rabble (hostile group), Wildcard (unintentional trouble), Magical Entity (supernatural being), Supernatural (curse/plague), Environmental (nature), Political (factions)
