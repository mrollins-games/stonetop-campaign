// Generate SVG hex grid for import into PPT
const fs = require('fs');

const HEX_SIZE = 60; // pixels (radius)
const HEX_W = HEX_SIZE * 2;
const HEX_H = HEX_SIZE * Math.sqrt(3);
const COL_SPACING = HEX_W * 0.75;
const ROW_SPACING = HEX_H;
const COLS = 6;
const ROWS = 5;
const PADDING = 20;

const width = PADDING * 2 + (COLS - 1) * COL_SPACING + HEX_W;
const height = PADDING * 2 + (ROWS - 1) * ROW_SPACING + HEX_H + ROW_SPACING / 2;

function hexPoints(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i);
    pts.push(`${(cx + size * Math.cos(angle)).toFixed(1)},${(cy + size * Math.sin(angle)).toFixed(1)}`);
  }
  return pts.join(' ');
}

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n`;
svg += `  <style>\n    .hex { fill: none; stroke: #8B4513; stroke-width: 2; }\n    .label { font-family: Arial; font-size: 11px; font-weight: bold; fill: #8B4513; text-anchor: middle; dominant-baseline: middle; }\n  </style>\n`;

let hexNum = 1;
for (let col = 0; col < COLS; col++) {
  for (let row = 0; row < ROWS; row++) {
    const cx = PADDING + HEX_SIZE + col * COL_SPACING;
    const cy = PADDING + HEX_H/2 + row * ROW_SPACING + (col % 2 === 1 ? ROW_SPACING/2 : 0);
    
    const label = `GW-${String(hexNum).padStart(2, '0')}`;
    svg += `  <polygon class="hex" points="${hexPoints(cx, cy, HEX_SIZE)}" />\n`;
    svg += `  <text class="label" x="${cx}" y="${cy}">${label}</text>\n`;
    hexNum++;
  }
}

svg += `</svg>\n`;
fs.writeFileSync('hexcrawl/hex-grid-overlay.svg', svg);
console.log('DONE: hexcrawl/hex-grid-overlay.svg');
console.log(`Grid: ${COLS}x${ROWS} = ${(hexNum-1)} hexes, ${width}x${height}px`);
