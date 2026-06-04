const PptxGenJS = require('pptxgenjs');
const fs = require('fs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5

// Based on the placement test image:
// - Stonetop is at ~35% from left (4.7"), ~60% down (4.5")
// - Forest fills upper 2/3 and right 2/3
// - Need to cover full slide with hexes
// - Flat-top hexes (like HSI)

// Hex sizing - aiming for ~8-10 cols, 5-6 rows to fill the slide
// Slide is 13.33 x 7.5 inches
// For flat-top hexes: 
//   col spacing = width * 0.75
//   row spacing = height
//   odd cols offset down by height/2

// Target: hexes small enough for good granularity but large enough to read labels
const HEX_SIZE = 0.72; // radius in inches
const HEX_W = HEX_SIZE * 2; // 1.44" wide
const HEX_H = HEX_SIZE * Math.sqrt(3); // 1.25" tall
const COL_SPACING = HEX_W * 0.75; // 1.08"
const ROW_SPACING = HEX_H; // 1.25"

// Calculate how many fit
const COLS = Math.floor((13.33 - HEX_W) / COL_SPACING) + 1; // ~12 cols
const ROWS = Math.floor((7.5 - HEX_H) / ROW_SPACING) + 1; // ~6 rows

// Center the grid
const GRID_W = (COLS - 1) * COL_SPACING + HEX_W;
const GRID_H = (ROWS - 1) * ROW_SPACING + HEX_H + ROW_SPACING/2; // account for offset
const ORIGIN_X = (13.33 - GRID_W) / 2 + HEX_W/2;
const ORIGIN_Y = (7.5 - GRID_H) / 2 + HEX_H/2;

console.log(`Grid: ${COLS} cols x ${ROWS} rows = ${COLS * ROWS} hexes`);
console.log(`Hex: ${HEX_W.toFixed(2)}" x ${HEX_H.toFixed(2)}"`);
console.log(`Origin: (${ORIGIN_X.toFixed(2)}", ${ORIGIN_Y.toFixed(2)}")`);

// --- SLIDE 1: Full grid overlay (transparent) ---
let slide = pptx.addSlide();
slide.addText('FULL-SLIDE HEX GRID - Place over map (Stonetop anchor)', {
  x: 0.1, y: 0.05, w: 8, h: 0.3, fontSize: 10, bold: true, color: '333333'
});

let hexNum = 1;
const hexData = [];

for (let col = 0; col < COLS; col++) {
  for (let row = 0; row < ROWS; row++) {
    const cx = ORIGIN_X + col * COL_SPACING;
    const cy = ORIGIN_Y + row * ROW_SPACING + (col % 2 === 1 ? ROW_SPACING / 2 : 0);
    
    // Skip if off-slide
    if (cx - HEX_W/2 < -0.1 || cx + HEX_W/2 > 13.5) continue;
    if (cy - HEX_H/2 < -0.1 || cy + HEX_H/2 > 7.6) continue;
    
    const label = `GW-${String(hexNum).padStart(2, '0')}`;
    hexData.push({ col, row, cx, cy, label, num: hexNum });
    
    slide.addShape('hexagon', {
      x: cx - HEX_W/2,
      y: cy - HEX_H/2,
      w: HEX_W,
      h: HEX_H,
      fill: { type: 'none' },
      line: { color: '6B3A0A', width: 1.2, dashType: 'solid' },
    });
    
    slide.addText(label, {
      x: cx - 0.35,
      y: cy - 0.1,
      w: 0.7,
      h: 0.2,
      fontSize: 6.5,
      bold: true,
      color: '6B3A0A',
      align: 'center',
      valign: 'middle',
    });
    
    hexNum++;
  }
}

console.log(`Total hexes placed: ${hexNum - 1}`);

// --- SLIDE 2: Annotated version showing which hex = Stonetop ---
slide = pptx.addSlide();
slide.addText('HEX IDENTIFICATION - Stonetop location highlighted', {
  x: 0.1, y: 0.05, w: 8, h: 0.3, fontSize: 10, bold: true, color: '333333'
});

// Stonetop is at ~35% from left (4.7"), ~60% down (4.5")
// Find the hex closest to that position
const STONETOP_X = 4.7;
const STONETOP_Y = 4.5;
let closest = null;
let closestDist = Infinity;

for (const h of hexData) {
  const dist = Math.sqrt((h.cx - STONETOP_X)**2 + (h.cy - STONETOP_Y)**2);
  if (dist < closestDist) {
    closestDist = dist;
    closest = h;
  }
}

console.log(`Stonetop hex: ${closest.label} at (${closest.cx.toFixed(2)}", ${closest.cy.toFixed(2)}")`);

for (const h of hexData) {
  const isStonetop = h.num === closest.num;
  
  slide.addShape('hexagon', {
    x: h.cx - HEX_W/2,
    y: h.cy - HEX_H/2,
    w: HEX_W,
    h: HEX_H,
    fill: isStonetop ? { color: 'FFD700', transparency: 50 } : { type: 'none' },
    line: { color: isStonetop ? 'B8860B' : '6B3A0A', width: isStonetop ? 2.5 : 1.2 },
  });
  
  slide.addText(isStonetop ? `${h.label}\nSTONETOP` : h.label, {
    x: h.cx - 0.4,
    y: h.cy - (isStonetop ? 0.15 : 0.1),
    w: 0.8,
    h: isStonetop ? 0.3 : 0.2,
    fontSize: isStonetop ? 6 : 6.5,
    bold: true,
    color: isStonetop ? 'B8860B' : '6B3A0A',
    align: 'center',
    valign: 'middle',
  });
}

// Add legend
slide.addText(
  `Grid: ${COLS}x${ROWS} = ${hexData.length} hexes | Hex size: ${HEX_W.toFixed(2)}" x ${HEX_H.toFixed(2)}" | Each = 2hr travel\n` +
  `Stonetop anchor: ${closest.label} (col ${closest.col+1}, row ${closest.row+1})`,
  { x: 0.2, y: 7.1, w: 10, h: 0.35, fontSize: 8, color: '444444' }
);

// --- SLIDE 3: Grid with zone annotations ---
slide = pptx.addSlide();
slide.addText('ZONE MAP - Forest vs Plateau', {
  x: 0.1, y: 0.05, w: 8, h: 0.3, fontSize: 10, bold: true, color: '333333'
});

for (const h of hexData) {
  // Rough zoning based on position:
  // Forest = upper portion + everything right of Stonetop
  // Plateau = lower-left (below bluff, west of Stonetop)
  const isStonetop = h.num === closest.num;
  const isForest = (h.cy < 3.5) || (h.cx > closest.cx + COL_SPACING * 0.5);
  const isBluffEdge = Math.abs(h.cy - 3.5) < ROW_SPACING && h.cx <= closest.cx + COL_SPACING;
  const isPlateau = !isForest && !isBluffEdge && !isStonetop;
  
  let fillColor = 'none';
  let fillTrans = 70;
  if (isStonetop) { fillColor = 'FFD700'; fillTrans = 40; }
  else if (isForest) { fillColor = '228B22'; fillTrans = 75; }
  else if (isBluffEdge) { fillColor = '8B7355'; fillTrans = 70; }
  else if (isPlateau) { fillColor = 'DEB887'; fillTrans = 70; }
  
  slide.addShape('hexagon', {
    x: h.cx - HEX_W/2,
    y: h.cy - HEX_H/2,
    w: HEX_W,
    h: HEX_H,
    fill: fillColor === 'none' ? { type: 'none' } : { color: fillColor, transparency: fillTrans },
    line: { color: '6B3A0A', width: 1.0 },
  });
  
  slide.addText(h.label, {
    x: h.cx - 0.35,
    y: h.cy - 0.1,
    w: 0.7,
    h: 0.2,
    fontSize: 6,
    bold: true,
    color: '6B3A0A',
    align: 'center',
    valign: 'middle',
  });
}

slide.addText(
  '\u25A0 Gold = Stonetop   \u25A0 Green = Great Wood (POIs here)   \u25A0 Brown = Bluff edge   \u25A0 Tan = Plateau (no POIs)',
  { x: 0.3, y: 7.1, w: 12, h: 0.3, fontSize: 9, color: '333333' }
);

pptx.writeFile({ fileName: 'hexcrawl/hex-grid-fullslide.pptx' })
  .then(() => console.log('DONE: hexcrawl/hex-grid-fullslide.pptx'))
  .catch(e => console.error(e));
