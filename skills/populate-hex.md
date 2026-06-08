# Skill: /populate-hex

> Helps the GM populate a hex with terrain, atmosphere, POIs, discoveries, dangers, and cross-references to canon.

## When to Use
- User says "populate hex [X]" / "develop hex [X]" / "what's in [X]?"
- When prepping a hex the PCs are approaching or might enter next session
- When filling in a blank hex from the POI index

## Procedure

### Step 1: Determine Context
Gather:
- **Hex ID** — e.g., D6, E7
- **Neighboring hexes** — what's already established adjacent (check `hexcrawl/poi-index.md`)
- **River path** — is the stream/river here? Where in the corruption gradient?
- **Canon constraints** — from `hexcrawl/session-resume/canon-summary.md` (e.g., Fae territory, corruption, bound spirits)
- **Existing POI notes** — does `poi-index.md` already have a stub for this hex?
- **Current session state** — where are the PCs? What are they looking for?

### Step 2: Determine Hex Terrain
**Prompt the GM** with the terrain options from the Great Wood table (Book II p.202):

> "What terrain does this hex have? Options from the source:"
> 1. Pond, wetland, or lake
> 2. Creek, stream, or river
> 3. Rocky outcropping, cave(s)
> 4-5. Clearing, meadow, sparse trees
> 6-7. Dense thicket
> 8-9. Swath of one type of tree
> 10. Briars, thorns, nettles
> 11. Slope, hill, ridge, ravine
> 12. Single, notable tree
>
> "You can combine 2 for variety. What fits your vision?"

Wait for GM's answer before proceeding.

### Step 3: Write Entry Description
Write a **read-aloud box** for when PCs enter the hex. Include:
- Sensory impressions (sight, sound, smell)
- Season-appropriate details
- Anything visible from the POI index "Visible?" column
- Tone/atmosphere that fits the hex's position (edge vs. deep wood, corrupted vs. clean)

Format:
```
> [2-4 sentences of atmospheric description. What hits them first. What they notice as they move through.]
```

### Step 4: POI Table
List all points of interest in the hex:

```markdown
| POI | Type | Visible? |
|-----|------|----------|
| [Name] | [terrain/flora/structure/creature/artifact/ruin] | YES/NO |
| [Name] | [type] | YES/NO |
```

Types: terrain feature, flora, fauna, structure (built), ruin, artifact, creature lair, spirit, corruption, trail/path

### Step 5: Develop Each POI
For each POI, write:

**[POI Name]**
- **Description:** 2-3 sentences of what it looks like up close
- **Discoveries table:**

| # | Discovery | Move/Trigger |
|---|-----------|--------------|
| 1 | [What they find] | [Free / Seek Insight / Know Things / Defy Danger] |
| 2 | [What they find] | [Move + result tier if applicable] |
| 3 | [What they find] | [Move + result tier if applicable] |

- **Dangers/Hazards:**

| Danger | Trigger | Consequence |
|--------|---------|-------------|
| [What] | [When/how] | [What happens] |

- **Connections:** Links to other hexes, NPCs, threats, or lore

### Step 6: Cross-Reference with Canon
Check each POI and the hex overall against:
- `hexcrawl/session-resume/canon-summary.md` — does it align with established lore?
- `hexcrawl/poi-index.md` — does it fit with adjacent hex content?
- `threats/_threat-tracker.md` — does an active threat touch this hex?
- Relevant Book II entries — does the source material suggest/support this content?

Flag any contradictions. Note connections to:
- The river/corruption path (is this hex downstream of D10?)
- Fae territory markers (is this near the E7/E9 border?)
- Forest Folk presence (should there be glyphs, artifacts, ruins?)
- Active threats (The Broken Contract, Crinwin expansion, missing parties)

### Step 7: Passive Ability Triggers
Review the hex for content that triggers party passive abilities. For each, declare what the PC senses upon entering or investigating.

**Always-on detection (declare on hex entry):**

| Passive | PC | Question to Answer |
|---------|----|--------------------|
| **Spirit Tongue** | Wolfram | "What spirits are active here?" — Must answer honestly. Includes: bound spirits in trees, free spirits, corrupted emanations, spirits of the wild. |
| **Vessel sense** | Wolfram | Does he feel mystic power in plants/stones/soil? Does he feel the Earth Mother's wrath at corruption? Describe the sensation. |
| **Azure Hand energy sense** | Gareth | What sources, currents, or reservoirs of magical energy are present? Includes: ley lines, ward-glyphs, binding networks, corruption flow, arcana, waystones. |
| **Fire Within (darkvision)** | Halpin | Is there darkness? He always sees. Note what he sees that others cannot (in caves, dense canopy at night, underground). |
| **Consecrated Flame (creature reaction)** | Halpin | Are creatures of darkness present? If his holy light is active, they react visibly — note how. |

**Triggered on moves (prepare answers):**

| Passive | PC | Trigger | What to Prepare |
|---------|----|---------|--------------------|
| **Attuned** | Gareth | Any Seek Insight roll | Answer "What here is infused with magic?" — always, even on 6-. |
| **Well-Versed (Fae/Makers)** | Gareth | Know Things about Fae or Makers | He always gets a follow-up question, even on 6-. Prepare extra lore. |
| **Destined (session-start)** | Filberta | Start of session | Prepare a vision/portent related to her destiny (Fae, Stone, blood, discovery). |

**For each hex, write a "Passive Declarations" section:**

```markdown
#### Passive Declarations
- **Wolfram (spirits):** [What he senses — e.g., "A faint presence, old and dormant, deep in the roots of the largest oak. Not hostile — sleeping."]
- **Wolfram (vessel):** [What he feels — e.g., "The soil here feels wrong. Something cold underneath, pushing up."]
- **Gareth (energy):** [What the Azure Hand tells him — e.g., "A current runs through the ground here, faint but steady, flowing east toward the deeper wood."]
- **Halpin (darkness):** [Only if relevant — e.g., "In the cave mouth, where others see nothing, you see damp stone walls and something scratched into the back wall."]
- **Halpin (holy light):** [Only if creatures of darkness present — e.g., "Your consecrated lantern flickers. Something in the canopy shifts away from it."]
```

### Step 8: Active Ability Interactions
Identify POIs or situations where player **active moves** could produce interesting results. Prepare outcomes for likely triggered moves.

**Moves to check against hex content:**

| Move | PC | Check For |
|------|----|-----------| 
| **Call the Spirits** (spend Stock, rite) | Wolfram | Is there a spirit here he could summon/speak to? What would it say? What does it want? |
| **Danu's Grasp** (bind spirit/perversion) | Wolfram | Are there spirits or corrupted beings that could be bound? What happens? |
| **Invoke the Sun God** (Invocations) | Halpin | Would Healing Light, Cleansing Light, Cold Light of Day, or Blinding Light be useful here? Against what? |
| **Azure Hand discharge** (gather/release energy) | Gareth | Is there energy to gather here? What happens if he discharges into a binding, a spirit, a corrupted thing? |
| **Know Things** (any PC, +WIS) | Any | What questions could they ask? Prepare 7-9 and 10+ answers for likely topics (glyphs, corruption, flora, history). |
| **Seek Insight** (+WIS, study situation) | Any | What's the most useful thing to notice? What's dangerous? What's not what it seems? |
| **Anger is a Gift** (righteous anger) | Filberta | Is there injustice, oppression, or destruction of beauty here that would trigger her anger? |
| **Aegis of Faith** (shield vs magic) | Ted | Are there magical effects or insubstantial attacks that his shield could block? |
| **Polyglot / Chronicler** | Ted | Are there scripts, languages, or records here? Could he read Forest Folk glyphs? |

**For each hex, write an "Active Interactions" section:**

```markdown
#### Active Interactions
- **Wolfram — Call the Spirits:** [What manifests, what it knows, what it wants]
- **Gareth — Azure Hand:** [Energy available, risks of discharge, what he senses if he focuses]
- **Halpin — Invocations:** [Which invocations are relevant, what they reveal or affect]
- **Ted — Chronicler/Polyglot:** [What he can read, what the Chronicle says about this place]
- **Filberta — Anger trigger:** [What here might provoke righteous anger]
- **Know Things (likely topics):** [7-9 answer] / [10+ answer]
- **Seek Insight (likely questions):** [Answers to "what's not what it seems," "what's dangerous," "what's magic"]
```

### Step 9: Output Format
Final hex entry should match `poi-index.md` format:

```markdown
| Hex | Terrain | POI | Visible? |
|-----|---------|-----|----------|
| [ID] | [terrain summary] | **[POI NAME]** — [full description with discoveries, dangers, atmosphere inline] | YES/NO |
```

Plus a separate **expanded GM reference** with:
- Entry description (read-aloud)
- POI table + full development (discoveries, dangers, connections)
- Passive Declarations section
- Active Interactions section
- Canon cross-references

## Canon Rules (NEVER violate)
- Do NOT add barrow-builder content
- Do NOT change hex numbering (flat-top, letter=col W→E, number=row S→N)
- Do NOT overwrite `great-wood-hexcrawl-reference.pptx`
- Do NOT place Fae content outside established Fae territory (east of D8 boundary markers)
- Corruption gradient follows the river: D10 → C9 → B8 → C7 → D6 → D4 → E3 → F2 → G1
- All Forest Folk are bound in trees — do NOT place living/free Forest Folk
- The Compact: Stonetop ancestors promised never to fell Great Wood trees

## Reference Files
- Terrain/discoveries/dangers: `reference/source-text/book-ii-entries/the-great-wood.md` (p.200-209)
- Forest Folk sites/artifacts: `reference/source-text/book-ii-entries/forest-folk.md` (p.150-155)
- Green Lord remnants: `reference/source-text/book-ii-entries/green-lords.md` (p.210-220)
- Fae domains: `reference/source-text/book-ii-entries/fae.md` (p.94-114)
- Spirits: `reference/source-text/book-ii-entries/spirits-of-the-wild.md`
- Flora: `reference/source-text/book-ii-entries/useful-flora.md`
- Corruption: `reference/source-text/book-ii-entries/the-things-below.md`
