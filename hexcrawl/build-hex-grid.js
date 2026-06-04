const PptxGenJS = require('pptxgenjs');
const fs = require('fs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5

// Hex grid parameters - FLAT-TOP hexes (like HSI)
// Flat-top: width = 2*size, height = sqrt(3)*size
// For a hex grid that covers the forested area of the vicinity map
// Target: ~6 cols x 5 rows = 30 hexes

const HEX_SIZE = 0.85; // inches (radius, center to vertex)
const HEX_W = HEX_SIZE * 2; // 1.7" wide
const HEX_H = HEX_SIZE * Math.sqrt(3); // ~1.47" tall

// Flat-top hex spacing:
// horizontal spacing = 1.5 * HEX_W / 2 = 0.75 * width
// vertical spacing = HEX_H
const COL_SPACING = HEX_W * 0.75; // 1.275"
const ROW_SPACING = HEX_H; // 1.47"

// Grid origin (top-left hex center) - positioned over the forest area
const ORIGIN_X = 3.8; // start from middle of slide (forest begins here)
const ORIGIN_Y = 1.5; // top margin

const COLS = 6;
const ROWS = 5;

// Generate flat-top hex vertices (6 points)
function hexPoints(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i);
    pts.push({
      x: cx + size * Math.cos(angle),
      y: cy + size * Math.sin(angle)
    });
  }
  return pts;
}

// --- SLIDE 1: Hex grid overlay (transparent, for copying) ---
let slide = pptx.addSlide();
slide.addText('HEX GRID OVERLAY - Copy these shapes to your map slide', {
  x: 0.2, y: 0.1, w: 6, h: 0.4, fontSize: 12, bold: true, color: '333333'
});
slide.addText('Flat-top hexes, 6x5 grid, GW-01 through GW-30. Each = 2 hours travel.', {
  x: 0.2, y: 0.4, w: 8, h: 0.3, fontSize: 9, color: '666666'
});

let hexNum = 1;
const hexCenters = [];

for (let col = 0; col < COLS; col++) {
  for (let row = 0; row < ROWS; row++) {
    // Flat-top: odd columns offset down by half height
    const cx = ORIGIN_X + col * COL_SPACING;
    const cy = ORIGIN_Y + row * ROW_SPACING + (col % 2 === 1 ? ROW_SPACING / 2 : 0);
    
    // Skip hexes that would be off-slide
    if (cy + HEX_H/2 > 7.3) continue;
    
    const label = 'GW-' + String(hexNum).padStart(2, '0');
    hexCenters.push({ col, row, cx, cy, label, num: hexNum });
    
    // Draw hex as a freeform shape
    const pts = hexPoints(cx, cy, HEX_SIZE);
    
    // Convert to path points relative to bounding box
    const minX = Math.min(...pts.map(p => p.x));
    const minY = Math.min(...pts.map(p => p.y));
    const maxX = Math.max(...pts.map(p => p.x));
    const maxY = Math.max(...pts.map(p => p.y));
    const bw = maxX - minX;
    const bh = maxY - minY;
    
    // Use a custom shape via addShape with points
    // Actually pptxgenjs doesn't support freeform easily, use addShape with a regular hexagon
    slide.addShape('hexagon', {
      x: cx - HEX_W/2,
      y: cy - HEX_H/2,
      w: HEX_W,
      h: HEX_H,
      fill: { type: 'none' },
      line: { color: '8B4513', width: 1.5, dashType: 'solid' },
      rotate: 0, // flat-top
    });
    
    // Add label
    slide.addText(label, {
      x: cx - 0.4,
      y: cy - 0.12,
      w: 0.8,
      h: 0.24,
      fontSize: 7,
      bold: true,
      color: '8B4513',
      align: 'center',
      valign: 'middle',
    });
    
    hexNum++;
  }
}

// --- SLIDE 2: Same grid but with semi-transparent fill (for player fog-of-war) ---
slide = pptx.addSlide();
slide.addText('FOG OF WAR VERSION - Opaque hexes to delete as players explore', {
  x: 0.2, y: 0.1, w: 8, h: 0.4, fontSize: 12, bold: true, color: '333333'
});

hexNum = 1;
for (let col = 0; col < COLS; col++) {
  for (let row = 0; row < ROWS; row++) {
    const cx = ORIGIN_X + col * COL_SPACING;
    const cy = ORIGIN_Y + row * ROW_SPACING + (col % 2 === 1 ? ROW_SPACING / 2 : 0);
    if (cy + HEX_H/2 > 7.3) continue;
    
    const label = 'GW-' + String(hexNum).padStart(2, '0');
    
    slide.addShape('hexagon', {
      x: cx - HEX_W/2,
      y: cy - HEX_H/2,
      w: HEX_W,
      h: HEX_H,
      fill: { color: '2d2d2d', transparency: 15 },
      line: { color: '1a1a1a', width: 1.0 },
    });
    
    slide.addText(label, {
      x: cx - 0.4,
      y: cy - 0.12,
      w: 0.8,
      h: 0.24,
      fontSize: 7,
      bold: true,
      color: 'cccccc',
      align: 'center',
      valign: 'middle',
    });
    
    hexNum++;
  }
}

// --- SLIDE 3: Hex key (one-line descriptions) ---
slide = pptx.addSlide();
slide.addText('Hex Key \u2014 One-Line Descriptions (Draft)', {
  x: 0.3, y: 0.1, w: 8, h: 0.5, fontSize: 18, bold: true, color: '1a1a2e'
});

const hexKey = [
  ['GW-01', 'Forest edge. Stream crossing. Fay boundary marker (standing stone).'],
  ['GW-02', 'Steep descent from bluff. Dense brush. Path to logging site.'],
  ['GW-03', 'The Maw. Cave entrance in bluff face. Bones. Strange noises.'],
  ['GW-04', 'Mixed old-growth. Clearing with wildflowers. Game trail.'],
  ['GW-05', 'Dense thicket along stream. Muddy. Boar wallows.'],
  ['GW-06', 'Logging site. Felled stumps. River access. SPIRIT ENCOUNTER (Session 1).'],
  ['GW-07', 'Old-growth canopy. Quiet. Faint Forest Folk glyphs on rocks.'],
  ['GW-08', 'Rocky outcropping with cave. Wolf den potential.'],
  ['GW-09', 'Creek crossing. Wetland area. Useful flora (medicinal herbs).'],
  ['GW-10', 'Red Grove. Blood-red trees. Forest Folk avoided. Sacred/dangerous.'],
  ['GW-11', 'Slope and ravine. Treacherous footing. Feathered drake territory.'],
  ['GW-12', 'Massive single tree (notable). Possible bound spirit. Fay marker.'],
  ['GW-13', 'Dense evergreen. Dark canopy. Nailadd web-signs in upper branches.'],
  ['GW-14', 'Clearing with pond. Peaceful. Spirit of the wild (curious).'],
  ['GW-15', 'Briars and thorns. Difficult passage. Butcherbird flock roosts here.'],
  ['GW-16', 'Hagr domain. Obsessively stacked logs visible. Dangerous.'],
  ['GW-17', 'Old-growth. Gylglyd vine grove. Beautiful but deadly.'],
  ['GW-18', 'Hill with view. Can see deeper wood. Crinwin signs.'],
  ['GW-19', 'Stream ford. Wisent herd grazing area. Game-rich.'],
  ['GW-20', 'Corrupted hollow. Dead vegetation ring. Things Below taint.'],
  ['GW-21', 'Forest Folk ruins. Overgrown guard post. Glyphs. Artifacts.'],
  ['GW-22', 'Fae waystone. Standing stone. Portal to Fae paths (Golden Oak?).'],
  ['GW-23', 'Dool tree copse. Sick-looking trees. Bound spirits. Pale Hunter avoids.'],
  ['GW-24', 'Deep old-growth. Cougar territory. Cave bear sign.'],
  ['GW-25', 'Crinwin nest (active). Giant hive in canopy. Stolen goods.'],
  ['GW-26', 'Green Lord barrow. Burial mound. Sealed. Glyphs warn away.'],
  ['GW-27', 'Ridge line. View of deeper forest. Trail toward Vor Svetelik.'],
  ['GW-28', 'Pale Hunter crossing. Silver hoof-prints on certain nights.'],
  ['GW-29', 'Dense ancient forest. Tal gerdwyr sighting possible. Very deep.'],
  ['GW-30', 'Edge of the unknown. Forest Folk trail markers point deeper.'],
];

const keyRows = [
  [{ text: 'Hex', options: { bold: true } }, { text: 'One-Line Description (DRAFT)', options: { bold: true } }],
  ...hexKey.map(([hex, desc]) => [hex, desc])
];

slide.addTable(keyRows, {
  x: 0.2, y: 0.6, w: 12.9, h: 6.7,
  fontSize: 7.5,
  border: { type: 'solid', pt: 0.3, color: 'cccccc' },
  colW: [0.9, 12.0],
  autoPage: true,
  autoPageRepeatHeader: true,
});

// --- SLIDE 4: Hex assignment notes ---
slide = pptx.addSlide();
slide.addText('Hex Grid Layout Notes', {
  x: 0.3, y: 0.1, w: 8, h: 0.5, fontSize: 18, bold: true, color: '1a1a2e'
});
slide.addText(
  'GRID: 6 columns x 5 rows = 30 hexes (flat-top orientation)\n' +
  'Hex size: ~1.7" wide x 1.47" tall on slide\n' +
  'Each hex = 2 hours travel edge-to-edge\n\n' +
  'COLUMN LAYOUT (west to east, forest edge to deep):\n' +
  '\u2022 Col 1 (GW-01 to 05): Forest edge \u2014 Stream, bluff, Maw\n' +
  '\u2022 Col 2 (GW-06 to 10): Near wood \u2014 logging site, Red Grove\n' +
  '\u2022 Col 3 (GW-11 to 15): Mid wood \u2014 creatures, dangers\n' +
  '\u2022 Col 4 (GW-16 to 20): Mid-deep \u2014 major POIs, threats\n' +
  '\u2022 Col 5 (GW-21 to 25): Deep wood \u2014 ruins, Fae, crinwin\n' +
  '\u2022 Col 6 (GW-26 to 30): Deep edge \u2014 trails to Vor Svetelik\n\n' +
  'POSITIONING ON MAP:\n' +
  '\u2022 Column 1 starts at the forest edge (just past the Stream)\n' +
  '\u2022 Columns progress eastward into the Great Wood\n' +
  '\u2022 Odd columns are offset down (standard hex grid)\n\n' +
  'TO USE: Select all shapes from Slide 1, copy, paste onto your map slide.\n' +
  'Resize/reposition the group to fit over the forested area.\n' +
  'The grid is designed to be scaled as a unit.',
  { x: 0.3, y: 0.6, w: 12, h: 6.5, fontSize: 11, color: '222222', valign: 'top' }
);

pptx.writeFile({ fileName: 'hexcrawl/hex-grid-overlay.pptx' })
  .then(() => console.log('DONE: hexcrawl/hex-grid-overlay.pptx'))
  .catch(e => console.error(e));
