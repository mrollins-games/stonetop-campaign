const fs = require('fs');

const HEX_SIZE = 50; // px radius for SVG (will scale in PPT)
const HEX_W = HEX_SIZE * 2;
const HEX_H = HEX_SIZE * Math.sqrt(3);
const COL_SPACING = HEX_W * 0.75;
const ROW_SPACING = HEX_H;
const COLS = 12;
const ROWS = 6;
const PAD = 10;

const width = PAD * 2 + (COLS - 1) * COL_SPACING + HEX_W;
const height = PAD * 2 + (ROWS - 1) * ROW_SPACING + HEX_H + ROW_SPACING / 2;

function hexPoints(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i);
    pts.push(`${(cx + size * Math.cos(angle)).toFixed(1)},${(cy + size * Math.sin(angle)).toFixed(1)}`);
  }
  return pts.join(' ');
}

// Stonetop is hex GW-23 (col 3 zero-indexed, row 4 zero-indexed based on the calc)
// Actually from the output: col index that gives cx=5.04 when origin=0.72, colSpacing=1.08
// (5.04 - 0.72) / 1.08 = 4.0 -> col 4 (0-indexed)
// row: (4.06 - 0.32) / 1.25 = 2.99 -> row 3 (0-indexed), but odd col offsets by half
// Let me just mark hex 23

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(width)}" height="${Math.round(height)}" viewBox="0 0 ${Math.round(width)} ${Math.round(height)}">\n`;
svg += `<style>\n  .hex { fill: none; stroke: #6B3A0A; stroke-width: 1.5; }\n  .hex-stonetop { fill: #FFD70066; stroke: #B8860B; stroke-width: 2.5; }\n  .label { font-family: Arial; font-size: 9px; font-weight: bold; fill: #6B3A0A; text-anchor: middle; dominant-baseline: middle; }\n</style>\n`;

let hexNum = 1;
for (let col = 0; col < COLS; col++) {
  for (let row = 0; row < ROWS; row++) {
    const cx = PAD + HEX_SIZE + col * COL_SPACING;
    const cy = PAD + HEX_H/2 + row * ROW_SPACING + (col % 2 === 1 ? ROW_SPACING/2 : 0);
    if (cy + HEX_H/2 > height) continue;
    
    const label = `GW-${String(hexNum).padStart(2, '0')}`;
    const cls = hexNum === 23 ? 'hex-stonetop' : 'hex';
    svg += `  <polygon class="${cls}" points="${hexPoints(cx, cy, HEX_SIZE)}" />\n`;
    svg += `  <text class="label" x="${cx}" y="${cy}">${label}</text>\n`;
    hexNum++;
  }
}
svg += `</svg>\n`;

fs.writeFileSync('hexcrawl/hex-grid-fullslide.svg', svg);
console.log(`DONE: ${COLS}x${ROWS} = ${hexNum-1} hexes, ${Math.round(width)}x${Math.round(height)}px`);
console.log('GW-23 highlighted as Stonetop');
