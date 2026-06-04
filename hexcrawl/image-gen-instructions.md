# Image Gen Instructions — Great Wood Hexcrawl Map

## Goal
Generate a single large top-down illustrated map of a dense primeval forest region. This will be used as the base layer in PowerPoint, with a hex grid overlay placed on top.

## Target Tool
Microsoft PPT Copilot (Designer image generation, in-slide)

## Style Reference
- **Hot Springs Island hex map** (see `assets/noncannon/Cool Map.jpg`)
- Hand-illustrated, ink-and-watercolor feel
- Top-down / bird's-eye perspective
- Rich texture, organic shapes, slightly stylized (not photorealistic)
- Muted earth tones: deep greens, dark browns, mossy grays, occasional gold accents
- Black ink outlines with watercolor fill

## Map Layout (left to right, roughly)
The image should show these zones flowing **west to east**:

### 1. LEFT EDGE — Plateau & Bluff (Columns A-D)
- A steep rocky bluff/cliff running roughly north-south on the left side
- A small village (cluster of thatched roofs, wooden palisade) sitting ON TOP of the bluff (upper-left area)
- A river/stream flowing from upper-left down through the forest, visible as a silver-blue line winding SE
- The river hugs the base of the bluff before entering the forest
- Scattered trees on the plateau edge transitioning to dense forest

### 2. CENTER-LEFT — Near Wood (Columns E-F)
- Dense mixed forest begins immediately east of the bluff
- Canopy is thick but varied — deciduous and coniferous mixed
- A few game trails visible as thin brown lines
- One or two small clearings (wildflowers, rocky outcrops)
- The river winds through this zone (bending, widening slightly)

### 3. CENTER — Mid Wood (Column G)
- Forest becomes darker, older, taller
- Canopy is nearly closed — very little ground visible
- One notable feature: a ravine/gorge cutting through (where the river goes)
- One area of blood-red trees (small grove, stands out from green)
- Subtle signs of danger: unusual shadows, twisted trunks

### 4. CENTER-RIGHT — Deep Wood (Column H)
- Ancient old-growth forest, massive trunks
- Very dark canopy
- One massive singular tree visible (bigger than everything around it)
- Rocky outcropping / cave entrance visible in one area
- Briars and thorns visible as a tangled patch

### 5. RIGHT EDGE — Deep Edge / Far Edge (Columns I-J)
- The deepest, most primeval forest
- Trees are enormous and ancient
- One area of dead/corrupted vegetation (gray, leafless, ring-shaped)
- In the far right, a single GOLDEN-CANOPIED tree, towering above all others (The Golden Oak)
- Standing stones barely visible among roots
- Faint luminescence / magical quality to the far-right area

## Important Details
- **River path**: Visible as a winding blue-silver line starting upper-left, flowing SE through the left and center of the map, entering a ravine in the center-right area
- **NO hex grid in the image** — that will be overlaid in PPT
- **NO text/labels** in the image
- **NO characters/people** in the image
- Aspect ratio: **widescreen 16:9** (to match PPT slide)
- The forest should feel VAST, ancient, and slightly threatening
- Light filters through canopy in shafts in the nearer areas; deeper areas are darker
- The bluff/cliff should be dramatic — a clear elevation change

## Prompt Template (adapt as needed)

### Version 1 — Full prompt
```
Top-down bird's-eye illustrated map of a vast primeval forest region, hand-drawn ink and watercolor style like a fantasy RPG hex map. Left side shows a rocky bluff with a small medieval village on top, a winding river flowing southeast from the bluff into dense forest. Center shows increasingly dark and ancient old-growth forest with a ravine, a grove of blood-red trees, and massive ancient trunks. Right side shows the deepest forest with one enormous golden-canopied tree towering above all others, dead gray vegetation in one area, and standing stones among roots. Muted earth tones, deep greens, dark browns, mossy grays, gold accents on the far-right tree. No text, no grid, no people. Widescreen 16:9 aspect ratio. Rich detail throughout.
```

### Version 2 — Simplified (if V1 is too complex for the AI)
```
Bird's-eye fantasy map of a vast ancient forest, ink and watercolor style. A rocky cliff with a tiny village on the left, a winding river flowing into dense dark woods. Forest gets darker and older toward the right. One enormous golden tree on the far right towers above all others. Muted greens, browns, and golds. No text, no grid, no people. 16:9 widescreen.
```

### Version 3 — Iterative approach (generate in sections)
If one image doesn't capture all details, generate LEFT HALF and RIGHT HALF separately:

**Left half:**
```
Bird's-eye fantasy map, ink and watercolor. Rocky bluff with small village on top (left edge). Winding river flows from bluff SE into dense mixed forest. Forest transitions from open edge to thick canopy. Game trails visible. Muted greens and browns. No text, no grid, no people.
```

**Right half:**
```
Bird's-eye fantasy map, ink and watercolor. Deep ancient primeval forest, massive old-growth trees. A ravine cuts through center-left. Grove of blood-red trees. One enormous golden-canopied tree dominates far right, glowing subtly. Dead gray vegetation ring in one area. Standing stones among roots. Very dark canopy. No text, no grid, no people.
```

## Post-Generation Steps
1. Place generated image as full-slide background in PPT
2. Overlay hex grid (already built — A-J columns, 1-10 rows)
3. Align C5 hex over the village
4. Verify river path matches hex assignments (D4→C7→B8→E3→F2→G1→H2)
5. Adjust POI placements if map features don't align perfectly

## Regeneration Risks & Mitigations
- **Risk**: AI reimagines entire artwork on edit requests
- **Mitigation**: Save each good generation immediately. Use PPT's "Design Ideas" rather than re-prompting if small tweaks needed.
- **Mitigation**: If major changes needed, regenerate only the half that needs changing (V3 approach) and stitch in PPT.
- **Risk**: Style inconsistency between halves
- **Mitigation**: Include "ink and watercolor, muted earth tones, deep greens" in EVERY prompt to maintain style lock.
