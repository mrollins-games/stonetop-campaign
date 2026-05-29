# Skill: /npc-generator

> Create a new NPC appropriate to the current context, using the game's name lists,
> trait lists, and setting lore.

## When to Use
- User needs a new NPC on the spot or during prep
- A session calls for an unnamed NPC to become named

## Procedure

### Step 1: Determine NPC Parameters
Ask (or infer from context):
- **Home:** Stonetop / Marshedge / Gordin's Delve / Hillfolk / Lygos / Other
- **Role:** What function do they serve? (farmer, trader, warrior, leader, child, elder, etc.)
- **Importance:** Background color / recurring / major character?

### Step 2: Generate the NPC
Use the appropriate name list from `reference/names-list.md` (or `npcs/_npc-index.md` name pools).

Pick 1–3 traits from the trait list in `npcs/_npc-index.md` (NPC Trait Reference section).

Ensure the NPC:
- Has at least one trait that creates story hooks
- Doesn't duplicate an existing NPC's niche (check `_npc-index.md`)
- Fits the location's cultural flavor

### Step 3: Present the NPC

```markdown
## [Name] ([pronouns])
**Home:** [location]  
**Occupation:** [role]  
**Traits:** [trait 1], [trait 2]  
**Hook:** [one sentence about why this NPC might matter to the PCs]

### Suggested Connections
- Could be [relationship] to [existing NPC]
- Might know about [active threat or location]
- Could want [something that drives interaction]
```

### Step 4: Offer to Save
"Want me to add [Name] to the NPC index and create their file?"

If yes:
- Add row to `npcs/_npc-index.md`
- Create individual file from `npcs/_npc-template.md`
- Link to the session where they appeared

## Quick-Gen Table (for improvisation)
If the user needs multiple NPCs fast, offer a batch:

| Name | Occupation | Trait | Hook |
|------|-----------|-------|------|
| [rolled] | [contextual] | [from list] | [1 sentence] |
