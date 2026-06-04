# Hex-by-Hex Image Generation Instructions

## Approach
Generate one square image per hex. Crop to hexagon shape in PPT using "Crop to Shape > Hexagon."
Assemble all hex tiles into the map grid on the slide.

## Consistent Style Prefix (prepend to EVERY prompt)
```
Flat overhead top-down view looking straight down. Ink line art with watercolor fill. Fantasy RPG map style. Trees appear as round canopy blobs from above. Muted earth tones. No text, no people, no grid. Square format.
```

## Edge Matching Rules
- All "interior forest" edges should be dense green canopy — this lets hexes blend
- River hexes: the stream should exit toward the correct edge (matching the flow path)
- Bluff hexes: the cliff edge should align on the west side
- Keep landmarks CENTERED in the hex so edges remain generic forest

---

## GENERIC TILES (use for all non-POI hexes)

### Generic Forest — Light (Near Wood, columns E-F)
```
[STYLE PREFIX] Dense forest canopy from directly above. Mixed deciduous and coniferous treetops — varied greens, some lighter clearings between clusters. A few tiny gaps showing dark forest floor. Dappled, organic. Lighter overall green tone.
```

### Generic Forest — Medium (Mid Wood, column G)
```
[STYLE PREFIX] Dense old-growth forest canopy from directly above. Larger tree crowns, darker green. Very few gaps. Canopy almost completely closed. Some variation in tree size. Darker overall tone than near wood.
```

### Generic Forest — Dark (Deep Wood, columns H-J)
```
[STYLE PREFIX] Ancient primeval forest canopy from directly above. Massive tree crowns, very dark green, nearly black in shadows. No gaps in canopy. Oppressive density. Occasional purple-dark undertone.
```

### Generic Plateau (columns A-B, non-river)
```
[STYLE PREFIX] Open grassland plateau from directly above. Short grass in tans and pale greens. Scattered shrubs. A few lone trees casting small shadows. Rocky patches. Lighter and more open than forest hexes.
```

---

## POI TILES (one per hex with visible landmarks)

### C5 — STONETOP (Village)
```
[STYLE PREFIX] Small medieval village on a plateau from directly above. Cluster of ~15-20 tiny thatched rooftops arranged inside a wooden palisade (oval shape). A few garden plots (brown/green rectangles). Paths radiating out. Open grassland and scattered trees around the village. The eastern edge transitions to forest canopy.
```

### D4 — Switchback Path & Stream Ford
```
[STYLE PREFIX] Rocky bluff edge running north-south (textured gray-brown band on west side). A thin zigzag path (switchback) carved into the bluff face, visible as a pale line. At the base, a thin blue-silver stream with a shallow ford (lighter water color = shallow). East side: forest canopy beginning. West side: open plateau.
```

### D6 — Fay Boundary Marker
```
[STYLE PREFIX] Forest edge from above. West side: open ground transitioning to trees. East side: dense canopy. In the center, one small standing stone (gray dot with shadow) at the tree line. A faint path leads from the west toward the stone and into the forest. The boundary between open and forest is clear.
```

### C7 — Logging Site (south side, hugging bluff)
```
[STYLE PREFIX] River hex from above. A thin blue stream crosses the lower portion (flowing SE). West/south edge: rocky bluff face (gray-brown textured band). Near the bluff base along the stream: a small clearing with visible tree stumps (brown dots in a cluster — 8-10 stumps). Felled logs nearby (thin brown lines). North/east: dense forest canopy. The bluff blocks view from the northwest.
```

### B8 — Deep Stream Pool (Quiet Twins)
```
[STYLE PREFIX] River hex from above. A thin blue-silver stream widens into a dark oval pool (deeper blue/black center). Forest canopy surrounds the pool on all sides. Rocky banks visible (tiny gray edges around water). The stream continues SE out of the hex. Atmosphere: slightly eerie, still water reflecting dark canopy.
```

### C9 — Stream Narrows
```
[STYLE PREFIX] River hex from above. Stream narrows between rocks — visible as thin blue line squeezing between gray boulders (cluster of gray dots). Forest on both sides. Rocky terrain more visible here — less canopy directly over the water. Stream enters from NW, exits SE.
```

### B10 — The Maw (Cave Entrance)
```
[STYLE PREFIX] Hillside/high ground from above. Mostly forest canopy but one dark black oval opening in the terrain (cave entrance). Scattered white/gray specks near the opening (bones). Rocky ground visible around the cave (gray patches breaking through green). Slightly elevated terrain — trees smaller here due to thin soil on rock.
```

### G1 — Ravine (Stream enters gorge)
```
[STYLE PREFIX] Deep ravine from above — a dark crack/line cutting through dense forest canopy (NW to SE). The thin blue stream drops into it. The ravine is dark (shadowed). Trees on either side lean over the gap. Canopy is broken along the ravine line — you can see rocky walls (dark gray/brown). Forest dense on both sides of the crack.
```

### G3 — Red Grove
```
[STYLE PREFIX] Dense forest canopy from above, mostly dark green. In the center: a distinct cluster of BLOOD-RED tree canopies (deep crimson/scarlet blobs). The red grove is ~20% of the hex area, surrounded by normal green trees. Stark color contrast. The red trees are slightly smaller than surrounding green old-growth.
```

### G7 — Hagr Domain (Log Stacks)
```
[STYLE PREFIX] Old-growth forest canopy from above. In one area: a clearing with obsessively neat rectangular stacks of logs (brown rectangles arranged in precise rows — 4-6 stacks). The stacks are unnaturally organized compared to organic forest around them. A few broken/snapped trees nearby (pale trunks visible). Rest is dense dark canopy.
```

### H2 — Gylglyd Vine (Flowers & Bones)
```
[STYLE PREFIX] Dense forest from above. One area covered in BRIGHT colorful flowers — pinks, purples, whites — a vivid splash of color against dark green canopy (flowering vines spread over trees). Beautiful but covering ~30% of hex area. Beneath/around the flowers: scattered tiny white specks (bones, barely visible under the blooms). Dark forest surrounds the flowering area.
```

### H4 — Massive Ancient Tree
```
[STYLE PREFIX] Forest canopy from above. In the center: one ENORMOUS tree crown that dwarfs all others — its canopy is 4-5x wider than surrounding trees. Deep green, ancient, textured crown with a gnarled pattern visible even from above. A ring of slightly smaller/thinner trees around it (as if pushed back). A small gray shape at its base (standing stone / Fay marker). Rest: dark old-growth canopy.
```

### H10 — Rocky Ridge
```
[STYLE PREFIX] Elevated terrain from above. A rocky ridge cuts across the hex (exposed gray-brown stone, elongated shape). Trees are shorter/sparser on the ridge top. The ridge provides a visible break in the canopy — you can see terrain. Forest is very dark and dense on both sides of the ridge. The ridge runs roughly east-west.
```

### I1 — Corrupted Hollow (Things Below)
```
[STYLE PREFIX] Forest from above. In the center: a distinct RING of dead/gray trees (leafless, pale trunks visible as white/gray sticks from above). The ring encloses a dark patch of bare ground (brown/black). Living dark-green forest surrounds the dead ring on all sides. The contrast is stark — healthy green abruptly stops, then gray death in a circle. Unsettling.
```

### I7 — Fae Waystone
```
[STYLE PREFIX] Forest from above with a small dark pool (oval, dark blue/black water). Beside the pool: one standing stone (single gray rectangle/dot with a long shadow). The area around the pool has slightly different colored vegetation — more vibrant, almost glowing green compared to the darker forest around it. A faint ring of lighter ground around the stone. Mystical subtle quality.
```

### J6/8 — THE GOLDEN OAK (Vor Svetelik)
```
[STYLE PREFIX] Deep dark forest from above. In the center: one MASSIVE tree with a distinctly GOLDEN/AMBER colored canopy. It glows faintly — warm golden light tinting surrounding trees. Its crown is the largest in the entire map (6-8x normal tree size). Surrounding forest is very dark green/near-black, making the golden glow stand out dramatically. Subtle sparkle/luminescence in the gold canopy.
```

---

## Assembly Instructions (PPT)

1. Generate all tiles as square images (1:1 aspect ratio)
2. In PPT: Insert image → Format → Crop → Crop to Shape → Basic Shapes: Hexagon
3. Set all hexes to same size (match your existing grid overlay)
4. Arrange in A-J / 1-10 grid pattern (flat-top hexes, odd columns offset up)
5. Layer the hex images BEHIND the transparent hex grid overlay
6. Fine-tune: adjust individual hex brightness/contrast to blend edges

## Batch Strategy
Generate in this order:
1. **Generic tiles first** (4 types × 2-3 variations each = ~10 images) — reuse across empty hexes
2. **POI tiles** (16 unique hexes) — one at a time, check style consistency
3. **Edge-match fixes** — regenerate any tiles that clash with neighbors

## Tips for PPT Copilot
- Generate one image per prompt (don't ask for multiple)
- If it comes out isometric, prepend: "IMPORTANT: Camera is pointing STRAIGHT DOWN. No angle. No horizon. No side view of anything. Like a drone photo from 200m altitude."
- If trees look like trunks (side view), say: "Trees must appear as round blob shapes — we are looking DOWN at the canopy tops, not sideways at trunks."
- Reference slide 7 for style, slide 4 for terrain/geography
