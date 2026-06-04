# Image Gen Instructions — Great Wood Hexcrawl Map

## Goal
Generate a single large top-down illustrated map of a dense primeval forest region. This will be used as the base layer in PowerPoint, with a hex grid overlay placed on top.

## Target Tool
Microsoft PPT Copilot (Designer image generation, in-slide)

## Slide References (for PPT Copilot)
- **Slide 2** — Town layout of Stonetop (building placement, palisade shape)
- **Slide 3** — Geological features with hex grid overlay (shows terrain + hex positions)
- **Slide 4** — Same geological features WITHOUT hex overlay (cleaner view of terrain)
- **Slide 7** — Hot Springs Island map (STYLE REFERENCE — match this ink-and-watercolor look, ignore book edge/table)
- **Slide 8** — Zoomed-out terrain view (shows broader geography and scale)

## Style Reference
- **Match the style on slide 7** (ignore the book edge/table in that photo)
- **CRITICAL: TRUE TOP-DOWN / DIRECTLY OVERHEAD perspective** — like looking straight down from a drone or satellite. NOT isometric, NOT 45-degree angle, NOT perspective view. The camera is DIRECTLY ABOVE pointing DOWN.
- Ink line art with watercolor fill — NOT photorealistic painting
- Visible black outlines on terrain features (like a hand-drawn map)
- Flat map feel — this is a NAVIGABLE MAP, not a scene illustration
- Muted earth tones: deep greens, dark browns, mossy grays, occasional gold accents
- Trees appear as canopy blobs from above (circles/clusters), NOT as trunks seen from the side
- The bluff/cliff should appear as a textured edge (like contour lines), not a dramatic wall

## Visible POI by Hex (features that MUST appear on the map)
These are features players can see from a distance. Place them in the correct hex position relative to the grid on slide 3.

| Hex | Visible Feature |
|-----|----------------|
| C5 | Village on bluff — thatched roofs, wooden palisade (see slide 2 for layout) |
| D4 | Switchback path down the bluff, stream ford at the base |
| D6 | Standing stone (Fay boundary marker) at forest edge |
| C7 | Felled tree stumps along south bluff base (logging site) |
| B8 | Deep pool in the stream, darker water |
| C9 | Stream narrows between rocks |
| B10 | Dark cave entrance in hillside (The Maw), bones near opening |
| G1 | Ravine/gorge where stream drops down (visible gap in canopy) |
| G3 | Grove of BLOOD-RED trees (stark contrast against green) |
| G7 | Neat obsessive stacks of logs visible through trees (Hagr) |
| H2 | Patch of beautiful bright flowers / flowering vines (Gylglyd) |
| H4 | One MASSIVE ancient tree, taller/wider than everything around it |
| H10 | Rocky ridge with higher elevation, visible break in canopy |
| I1 | Ring of DEAD gray leafless trees (corruption, Things Below) |
| I7 | Standing stone by a small pool (Fae waystone) |
| J6/8 | THE GOLDEN OAK — enormous tree with shimmering golden canopy, towers above all |

## Non-Visible Hexes
All other hexes are dense forest canopy with no distinguishing features visible from above. They should blend naturally — varied greens, shadows, occasional clearings too small to be landmarks.

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
- **PERSPECTIVE: DIRECTLY OVERHEAD** — cannot stress enough. Previous attempts came out at 45° isometric. We need FLAT, STRAIGHT DOWN, like a satellite photo rendered in watercolor.
- **River path**: Thin winding blue-silver line starting upper-left, curving SE through the left-center of the map. Should only occupy ~5% of the image width — it's a stream, not a major river.
- **SPACING**: POIs should be SMALL and SPREAD OUT. 80% of the image should be undifferentiated green canopy. The landmarks are tiny details you'd notice on close inspection, not dominant features.
- **SCALE**: The Golden Oak should be noticeable (gold color) but NOT take up more than ~5% of the frame. The village should be TINY — maybe 20 pixels of rooftops visible among the green.
- **NO hex grid in the image** — that will be overlaid in PPT
- **NO text/labels** in the image
- **NO characters/people** in the image
- Aspect ratio: **widescreen 16:9** (to match PPT slide)
- The forest should feel VAST — mostly uniform canopy with subtle variations
- Light/dark gradient: left side (near village) slightly lighter green; right side progressively darker
- The bluff appears as a textured brown/gray band running N-S on the left ~15% of the image

## Prompt Template (adapt as needed)

### Version 1 — Full prompt
```
Directly-overhead top-down map of a vast primeval forest, looking STRAIGHT DOWN like a satellite image rendered in ink and watercolor. Flat perspective, no angle, no isometric. Left 15% shows a rocky plateau edge (gray-brown band running north-south) with a tiny cluster of thatched rooftops (village) barely visible among trees. A thin winding stream flows from upper-left toward lower-center, disappearing into canopy. The remaining 85% is dense forest canopy seen from directly above — mostly uniform green blobs of treetops with subtle variation. Small scattered landmarks: one tiny patch of red-leafed trees (center-left), one small golden-canopied tree (far right, glowing faintly), one small ring of gray dead trees (right side). Ink outlines, watercolor fill, muted greens and browns. Widescreen 16:9. No text, no grid, no people, no perspective angle.
```

### Version 2 — Simplified
```
Flat overhead satellite-view map of an enormous ancient forest, ink and watercolor style. Looking STRAIGHT DOWN. Tiny village on a cliff edge (far left). Thin stream winding from upper-left to center. 90% dense green canopy. Small red tree grove in center, small golden tree on far right. Ink lines, watercolor, muted earth tones. 16:9 widescreen. No text, no grid, no people, completely flat overhead view.
```

### Version 3 — Left Half
```
Flat overhead map, looking straight down. Rocky plateau/cliff edge on left (gray-brown textured band). Tiny medieval village (cluster of rooftops) on plateau top. Thin stream at base of cliff flowing southeast. Dense forest canopy fills right 60% — green tree blobs from above, varied sizes. Felled stumps near stream (tiny brown dots). One standing stone barely visible at forest edge. Ink and watercolor, flat top-down, no angle. No text, no grid.
```

### Version 3 — Right Half  
```
Flat overhead map, looking straight down. Entirely dense ancient forest canopy — green treetop blobs. Trees get larger and darker toward the right. Small patch of blood-red trees (upper-left area). One golden-glowing tree (far right, stands out from green). Small ring of gray dead trees (center-right). Rocky outcropping barely visible through canopy (center). Ink and watercolor, flat top-down satellite view, no angle. No text, no grid.
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
- **Mitigation**: Include "ink and watercolor, muted earth tones, flat overhead, no angle" in EVERY prompt.

## What Went Wrong (Round 1) — Use as correction context
Paste this when re-prompting to avoid the same mistakes:

**Problems with slides 23-26:**
1. ❌ PERSPECTIVE: All came out at ~45° isometric angle. I need FLAT OVERHEAD — camera pointing straight down, like Google Earth rendered in watercolor. No horizon, no side-view of trees/cliffs.
2. ❌ STYLE: Too photorealistic/painterly. Need visible INK OUTLINES and watercolor wash — like a hand-drawn RPG map, not a digital painting.
3. ❌ SCALE: Village, Golden Oak, and red grove are all WAY too large. They should be tiny details in a sea of green canopy. The image should be 85%+ uniform treetop canopy.
4. ❌ RIVER: Too prominent and too straight. Should be a thin winding line, not a dramatic rushing torrent. Think "stream on a topographic map."
5. ❌ TREE REPRESENTATION: Trees shown as trunks/branches (side view). In top-down, trees are round/blobby canopy shapes seen from above — like broccoli heads or cotton balls.
6. ❌ BLUFF: Shown as a dramatic cliff face (side view). In top-down, a cliff is a textured band/edge with shadow on one side — like contour lines on a topo map.

**Correction prompt to prepend:**
```
IMPORTANT: Previous attempts were at 45-degree isometric angle. This MUST be completely flat, directly overhead, looking STRAIGHT DOWN like a drone photo. Trees appear as round canopy blobs. Cliffs appear as textured edges with shadows. No horizon visible. No side-view of anything.
```
