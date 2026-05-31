const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const pres = new pptxgen();

// Design constants
const BG_COLOR = 'F5F0E8';
const HEADING_FONT = 'Avara';
const BODY_FONT = 'IM FELL English Roman';
const ACCENT_COLOR = '2D4A3E';
const TEXT_COLOR = '1A1A1A';

pres.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 });
pres.layout = 'WIDE';

function imgExists(p) { return fs.existsSync(p); }

// ======= SLIDE 1: Title =======
let slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-cover.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-cover.png', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' }, transparency: 70 });
}
slide.addText('STONETOP', { x: 0.5, y: 2.0, w: 12, h: 2, fontSize: 72, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('Session Zero \u2014 Campaign Kickoff', { x: 0.5, y: 4.2, w: 12, h: 1, fontSize: 24, fontFace: BODY_FONT, color: TEXT_COLOR, align: 'center' });

// ======= SLIDE 2: Content Safety Section Break =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Content Safety', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('Setting boundaries so everyone can play freely', { x: 0.5, y: 4.5, w: 12, h: 1, fontSize: 18, fontFace: BODY_FONT, color: TEXT_COLOR, align: 'center', italic: true });

// ======= SLIDE 3: Survey Results =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Content Safety Survey Results', { x: 0.5, y: 0.3, w: 12, h: 0.8, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('[Survey data table \u2014 insert before session]', { x: 0.5, y: 1.5, w: 12, h: 5, fontSize: 16, fontFace: BODY_FONT, color: '666666', align: 'center', valign: 'middle' });

// ======= SLIDE 4: What Excites Us =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-village-life.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-village-life.png', x: 8.5, y: 0, w: 5, h: 7.5, sizing: { type: 'cover' }, transparency: 50 });
}
slide.addText('What Are We Excited For?', { x: 0.5, y: 0.3, w: 8, h: 0.8, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('[Player survey responses here]', { x: 0.5, y: 1.5, w: 7.5, h: 3, fontSize: 14, fontFace: BODY_FONT, color: TEXT_COLOR });
slide.addText('\u201CBecause here, in the real world, our communities are often fractured, broken, disconnected. Because maybe you want to imagine a community that works, one that pulls together and struggles together and looks out for its own. Because play is practice, and practice is how you change yourself, how you change your world.\u201D', { x: 0.5, y: 4.8, w: 7.5, h: 2.2, fontSize: 13, fontFace: BODY_FONT, color: ACCENT_COLOR, italic: true });

// ======= SLIDE 5: Premise =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Premise', { x: 0.5, y: 0.3, w: 6, h: 0.8, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText("Everyone should buy in to the game\u2019s core premise: PCs are the heroes of an isolated village in a fantasy iron age. They have roots in the village and care about its inhabitants. Adventures involve defending the village from threats or seizing opportunities for their home.", { x: 0.5, y: 1.2, w: 5.8, h: 2.5, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR });
slide.addText("No one knows how the Stone got there, or what the runes cut into its surface might mean. Few even remember how the village sprang up around it. When storms roll up and the Stone pulls lightning from the sky, outsiders cringe and cower. But us? We barely even notice.\n\nWe live here, see. This village, Stonetop\u2014it\u2019s our home. It\u2019s not a glamorous place. Far from it. But we look out for each other. We might not always get along, but we\u2019re a community. Everyone contributes. Everyone shares.\n\nAnd right now, as the first wildflowers bloom in the Flats and the trees bud in the Great Wood, trouble is a-brewing\u2026\n\nYou and me? We\u2019re the ones folk look to when they\u2019re scared. Like it or not, we\u2019re the brave ones. The clever ones. And yeah, sure, the strange ones, too.\n\nThese are good people, here in Stonetop. Our kith and our kin.\nIf we don\u2019t step up to protect them, who will?", { x: 6.8, y: 0.5, w: 6, h: 6.8, fontSize: 11, fontFace: BODY_FONT, color: TEXT_COLOR, italic: true, valign: 'middle' });

// ======= SLIDE 6: Player Principles =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Player Principles', { x: 0.5, y: 0.3, w: 12, h: 0.8, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
const principles = [
  'Begin and end with the fiction. Tell us how you do what you do, what it looks like.',
  'Connect with the other PCs. Explore your relationships. Play out scenes together.',
  "Show us what\u2019s important to you. Who and what will your character fight for?",
  "Have goals and pursue them. Don\u2019t just react to threats that the GM presents.",
  "Be bold, take risks. If you don\u2019t act like a hero, who will?",
  'Embrace difficulty, setback, and failure. Show us how your character deals with it.',
  "Participate in worldbuilding. Answer the GM\u2019s questions with color and life.",
  'Build on what others have said. Let yourself be inspired by your fellow players.',
  "Give others a chance to shine. Don\u2019t hog the spotlight. Set others up for greatness!",
  'Participate in the conversation. Pay attention, ask questions, offer suggestions.'
];
const princText = principles.map(p => '\u2022 ' + p).join('\n');
slide.addText(princText, { x: 0.5, y: 1.3, w: 12, h: 5.8, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR, valign: 'top', lineSpacingMultiple: 1.4 });

console.log('Slides 1-6 done');

// ======= SLIDE 7: Conflict Resolution =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-playing-game-opener.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-playing-game-opener.png', x: 8.5, y: 0, w: 5, h: 7.5, sizing: { type: 'cover' }, transparency: 60 });
}
slide.addText('Conflict Resolution', { x: 0.5, y: 0.2, w: 8, h: 0.7, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('Roll 2d6 + Stat Modifier (-1 to +3)', { x: 0.5, y: 0.95, w: 7, h: 0.5, fontSize: 18, fontFace: HEADING_FONT, color: TEXT_COLOR });
// Result tiers
slide.addText('10+', { x: 0.5, y: 1.6, w: 0.7, h: 0.5, fontSize: 18, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('Strong Hit \u2014 full success, you get what you wanted', { x: 1.3, y: 1.6, w: 6.5, h: 0.5, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR });
slide.addText('7\u20139', { x: 0.5, y: 2.2, w: 0.7, h: 0.5, fontSize: 18, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('Success with Complications \u2014 you succeed, but there\u2019s a cost, a hard choice, or a consequence. This is where the best fiction happens.', { x: 1.3, y: 2.2, w: 6.5, h: 0.7, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR });
slide.addText('6\u2212', { x: 0.5, y: 3.0, w: 0.7, h: 0.5, fontSize: 18, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('Miss \u2014 mark XP. The GM makes a move. This is NOT just \u201Cyou failed.\u201D Something bad happens \u2014 possibly worse than failure, possibly unrelated. The fiction moves forward dangerously.', { x: 1.3, y: 3.0, w: 6.5, h: 0.8, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR });
// Key philosophy
slide.addText('How This Changes Everything:', { x: 0.5, y: 4.0, w: 7, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('\u2022 The GM almost never rolls dice\n\u2022 Monsters don\u2019t take turns \u2014 their actions ARE the consequences of your rolls\n\u2022 On 10+, the enemy can\u2019t touch you. On 7\u20139, it gets a piece of you. On 6\u2212, it acts before/despite you.\n\u2022 Every roll moves the story forward \u2014 no wasted turns\n\u2022 Fiction first: describe what you do, then we see if it triggers a move', { x: 0.5, y: 4.4, w: 7.5, h: 2.2, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.4 });
// Advantage/disadvantage footer
slide.addText('Advantage: 3d6 keep best 2  |  Disadvantage: 3d6 keep worst 2  |  They cancel out', { x: 0.5, y: 6.8, w: 8, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: '666666', italic: true });

// ======= SLIDE 8: Moves (puzzle-column layout) =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Moves', { x: 0.5, y: 0.2, w: 12, h: 0.6, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText('You describe what you do. If it triggers a move, we roll.', { x: 0.5, y: 0.75, w: 10, h: 0.35, fontSize: 12, fontFace: BODY_FONT, color: '666666', italic: true });

// Column 1: Basic (tallest - 9 moves)
slide.addText('Basic', { x: 0.4, y: 1.2, w: 2.4, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('\u2022 Aid\n\u2022 Clash\n\u2022 Defend\n\u2022 Defy Danger\n\u2022 Interfere\n\u2022 Know Things\n\u2022 Let Fly\n\u2022 Persuade\n\u2022 Seek Insight', { x: 0.4, y: 1.6, w: 2.4, h: 4.2, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.5, valign: 'top' });

// Column 2: Expedition (9 moves)
slide.addText('Expedition', { x: 2.9, y: 1.2, w: 2.6, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('\u2022 Chart a Course\n\u2022 Outfit\n\u2022 Requisition\n\u2022 Have What You Need\n\u2022 Recover\n\u2022 Struggle as One\n\u2022 Keep Company\n\u2022 Make Camp\n\u2022 Return Triumphant', { x: 2.9, y: 1.6, w: 2.6, h: 4.2, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.5, valign: 'top' });

// Column 3: Homefront (10 moves - tallest)
slide.addText('Homefront', { x: 5.6, y: 1.2, w: 2.6, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('\u2022 Bolster\n\u2022 Convalesce\n\u2022 Deploy\n\u2022 Level Up\n\u2022 Make a Plan\n\u2022 Meet with Disaster\n\u2022 Muster\n\u2022 Pull Together\n\u2022 Seasons Change\n\u2022 Trade & Barter', { x: 5.6, y: 1.6, w: 2.6, h: 4.7, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.5, valign: 'top' });

// Column 4 top: Special (4 moves - short)
slide.addText('Special', { x: 8.3, y: 1.2, w: 2.3, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('\u2022 Advantage/Disadv.\n\u2022 Burn Brightly\n\u2022 End of Session\n\u2022 Death\u2019s Door', { x: 8.3, y: 1.6, w: 2.3, h: 2.0, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.5, valign: 'top' });

// Column 4 bottom: Follower (2 moves - shortest)
slide.addText('Follower', { x: 8.3, y: 3.9, w: 2.3, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('\u2022 Order Followers\n\u2022 Strengthen Bond', { x: 8.3, y: 4.3, w: 2.3, h: 1.2, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.5, valign: 'top' });

// Column 5: Playbook (right edge, info box)
slide.addText('Playbook', { x: 10.7, y: 1.2, w: 2.3, h: 0.4, fontSize: 14, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('\u2022 Unique to each class\n\u2022 Gained at creation\n\u2022 More on level-up\n\u2022 See your playbook sheet', { x: 10.7, y: 1.6, w: 2.3, h: 2.2, fontSize: 12, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.5, valign: 'top' });

// Footer note
slide.addText('If you\u2019re not sure if something triggers a move, just describe what you do. I\u2019ll tell you.', { x: 0.5, y: 6.8, w: 12, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: '666666', italic: true, align: 'center' });

// ======= SLIDE 9: Gear & Inventory =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-gear-equipment.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-gear-equipment.png', x: 8.5, y: 0, w: 5, h: 7.5, sizing: { type: 'cover' }, transparency: 60 });
}
slide.addText('Gear & Quantum Inventory', { x: 0.5, y: 0.3, w: 8, h: 0.8, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText("Load Levels:\n\u2022 Light (3 slots) \u2014 quick and quiet\n\u2022 Normal (4-6 slots)\n\u2022 Heavy (7-9 slots) \u2014 noisy, slow, tiring\n\nItems cost \u25C6 or \u25C6\u25C6 load slots\nMark them as you USE them, not before\n\nHave What You Need:\n\u201CI reach into my pack and pull out rope.\u201D\nYou had rope. Mark a slot.\n\n\u2022 Supplies: 4+Prosperity uses per \u25C6\n\u2022 Small items: don\u2019t count against load\n\u2022 Provisions: foraged food (spoils)", { x: 0.5, y: 1.3, w: 7.5, h: 5.5, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.3 });

// ======= SLIDE 10: Tags =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Tags', { x: 0.5, y: 0.2, w: 12, h: 0.6, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
const tagRows = [
  [{ text: 'Range', options: { bold: true } }, { text: '' }, { text: 'Weapon/Item', options: { bold: true } }, { text: '' }],
  [{ text: 'hand' }, { text: 'Tight quarters' }, { text: 'area' }, { text: 'Hits everything nearby' }],
  [{ text: 'close' }, { text: '1-2 steps' }, { text: 'forceful' }, { text: 'Knocks people around' }],
  [{ text: 'reach' }, { text: '3-4 steps' }, { text: 'messy' }, { text: 'Rips things apart' }],
  [{ text: 'near' }, { text: '~30 steps' }, { text: 'awkward' }, { text: 'Unwieldy, gets stuck' }],
  [{ text: 'far' }, { text: '100+ steps' }, { text: 'reload' }, { text: 'Takes time to reset' }],
  [{ text: '' }, { text: '' }, { text: 'slow' }, { text: 'Useless in a fight' }],
  [{ text: 'Mechanical', options: { bold: true } }, { text: '' }, { text: '' }, { text: '' }],
  [{ text: 'n armor' }, { text: 'Subtract n from damage' }, { text: 'fragile' }, { text: 'Easy to break' }],
  [{ text: '+1 armor' }, { text: 'Stacks on base' }, { text: 'crude' }, { text: 'Prone to wear out' }],
  [{ text: 'n piercing' }, { text: 'Ignore n armor' }, { text: 'warm' }, { text: 'Keeps you warm' }],
];
slide.addTable(tagRows, { x: 0.3, y: 0.9, w: 12.5, h: 6, fontSize: 11, fontFace: BODY_FONT, color: TEXT_COLOR, border: { color: 'DDDDDD', pt: 0.3 }, colW: [1.8, 3.2, 2, 5.5] });

// ======= SLIDE 11: Mechanics =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Mechanics', { x: 0.5, y: 0.3, w: 12, h: 0.7, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText("Armor & Damage\n\u2022 Armor subtracts from incoming damage (doesn\u2019t stack)\n\u2022 +Armor items (shields) DO stack on top\n\u2022 Piercing ignores that many points of armor\n\u2022 Damage based on playbook, not weapon\n\nHold\n\u2022 Some moves give you \u201Chold 3\u201D or \u201Chold 2 Readiness\u201D\n\u2022 Spend 1-for-1 on listed options\n\u2022 Unspent hold lost when situation changes\n\nHP & Death\n\u2022 Hit 0 HP \u2192 Death\u2019s Door move (not instant death)\n\u2022 Healing is slow and scarce\n\nDebilities\n\u2022 Conditions giving disadvantage on a specific stat\n\u2022 Last until you Convalesce during downtime", { x: 0.5, y: 1.1, w: 12, h: 6, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.3 });

// ======= SLIDE 12: XP =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('XP & Leveling', { x: 0.5, y: 0.3, w: 12, h: 0.7, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
slide.addText("Sources of XP:\n\u2022 Roll a 6- (miss) on any move \u2014 mark XP\n\u2022 Another PC Persuades you (on 7+) and you comply \u2014 mark XP\n\u2022 End of Session move (whole group):\n\n    \u2726 Did you demonstrate or struggle with your instinct? \u2192 XP\n    \u2726 Did a relationship with a PC/NPC/group change? \u2192 XP\n    \u2726 Did we learn more about the world or its history? \u2192 everyone XP\n    \u2726 Did we defeat a threat to Stonetop? \u2192 everyone XP\n    \u2726 Did we improve standing with neighbors? \u2192 everyone XP\n    \u2726 Did we make lasting improvement to Stonetop? \u2192 everyone XP\n\nLevel Up: when XP \u2265 6 + (2 \u00D7 current level)\nSubtract that amount, gain a level, pick a new move.\n\nBurn Brightly: Spend 2 XP after any roll to add +1 (if you have enough to level).", { x: 0.5, y: 1.1, w: 12, h: 6, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR, lineSpacingMultiple: 1.3 });

// ======= SLIDE 13: Value & Coins =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Value & Coins (Appendix)', { x: 0.5, y: 0.3, w: 12, h: 0.7, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
const valueRows = [
  [{ text: 'Value', options: { bold: true } }, { text: 'Worth roughly...', options: { bold: true } }, { text: 'Coin equivalent', options: { bold: true } }],
  [{ text: '0' }, { text: 'A favor, common item, a few days labor' }, { text: 'Purse of coppers / 1 silver' }],
  [{ text: '1' }, { text: 'Season of unskilled labor, unit of trade goods' }, { text: 'Handful of silvers' }],
  [{ text: '2' }, { text: 'Year of unskilled labor, cartload of goods, 1 Surplus' }, { text: 'Purse of silvers / 1 gold' }],
  [{ text: '3' }, { text: 'Year of skilled labor, a good horse' }, { text: 'Handful of golds' }],
  [{ text: '4' }, { text: 'A dozen horses, a \u201Cpriceless\u201D item' }, { text: 'Purse of golds' }],
];
slide.addTable(valueRows, { x: 0.5, y: 1.2, w: 12, h: 3.5, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR, border: { color: 'BBBBBB', pt: 0.5 }, colW: [1, 5.5, 5.5] });
slide.addText("Coins: individual \u2192 handful (~10) \u2192 purse (~100)\n1 silver \u2248 100 coppers  |  1 gold \u2248 100 silvers\nStonetop runs on barter, favors, and honor \u2014 coins are for outsiders.", { x: 0.5, y: 5.0, w: 12, h: 2, fontSize: 13, fontFace: BODY_FONT, color: TEXT_COLOR, italic: true });

console.log('Slides 7-13 done');

// ======= SLIDE 14: The World Section Break =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-forest-scene.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-forest-scene.png', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' }, transparency: 50 });
}
slide.addText('The World', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 54, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });

// ======= SLIDE 15: Village Map =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/maps/village-map.png')) {
  slide.addImage({ path: './assets/art/maps/village-map.png', x: 0.5, y: 0.5, w: 12, h: 6.5, sizing: { type: 'contain' } });
}

// ======= SLIDE 16: Standing Stone =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-early-art-2.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-early-art-2.png', x: 3, y: 0, w: 7, h: 7.5, sizing: { type: 'contain' } });
}

// ======= SLIDE 17: Vicinity Map =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/maps/vicinity-map.png')) {
  slide.addImage({ path: './assets/art/maps/vicinity-map.png', x: 0.5, y: 0.5, w: 12, h: 6.5, sizing: { type: 'contain' } });
}

// ======= SLIDE 18: World's End Map =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/maps/worlds-end-map.png')) {
  slide.addImage({ path: './assets/art/maps/worlds-end-map.png', x: 0.5, y: 0.5, w: 12, h: 6.5, sizing: { type: 'contain' } });
}

// ======= SLIDE 19: Dangers =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-things-below.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-things-below.png', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' }, transparency: 40 });
}
slide.addText('Dangers & Mysteries', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });

// ======= SLIDE 20: Create Character Section Break =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Create Your Character', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('Stonetop needs its heroes', { x: 0.5, y: 4.5, w: 12, h: 1, fontSize: 18, fontFace: BODY_FONT, color: TEXT_COLOR, align: 'center', italic: true });

// ======= SLIDE 21: Party Table =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Our Party', { x: 0.5, y: 0.3, w: 12, h: 0.7, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
const partyRows = [
  [{ text: 'Player', options: { bold: true } }, { text: 'Playbook', options: { bold: true } }, { text: 'Background', options: { bold: true } }],
  [{ text: 'David Fries' }, { text: 'The Judge' }, { text: 'Missionary' }],
  [{ text: 'Danny Rollins' }, { text: 'The Seeker' }, { text: 'Antiquarian' }],
  [{ text: 'James Crowder' }, { text: 'The Blessed' }, { text: 'TBD' }],
  [{ text: 'Kari Crowder' }, { text: 'The Would-Be Hero' }, { text: 'TBD' }],
  [{ text: 'Dan Garrison' }, { text: 'The Lightbearer' }, { text: 'Auspicious Birth' }],
];
slide.addTable(partyRows, { x: 1, y: 1.5, w: 11, h: 4, fontSize: 16, fontFace: BODY_FONT, color: TEXT_COLOR, border: { color: 'BBBBBB', pt: 0.5 }, colW: [3.5, 4, 3.5] });

// ======= SLIDE 22: Introductions Section Break =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Introductions', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('Tell us who you are', { x: 0.5, y: 4.5, w: 12, h: 1, fontSize: 18, fontFace: BODY_FONT, color: TEXT_COLOR, align: 'center', italic: true });

// ======= SLIDE 23: Gods Table =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('The Gods of Stonetop', { x: 0.5, y: 0.3, w: 12, h: 0.7, fontSize: 28, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
const godRows = [
  [{ text: 'God', options: { bold: true } }, { text: 'Domain', options: { bold: true } }, { text: 'PC Ties', options: { bold: true } }],
  [{ text: 'Tor' }, { text: 'Rain-Maker, Thunderhead, Slayer-of-Beasts' }, { text: '\u2014' }],
  [{ text: 'Helior' }, { text: 'The Daybringer \u2014 sun, light, hope, mercy' }, { text: 'Dan Garrison (Lightbearer)' }],
  [{ text: 'Danu' }, { text: 'The Earth Mother \u2014 nature, fertility, the wild' }, { text: 'James Crowder (Blessed)' }],
  [{ text: 'Aratis' }, { text: 'The Lawkeeper \u2014 civilization, order, truth' }, { text: 'David Fries (Judge)' }],
];
slide.addTable(godRows, { x: 0.5, y: 1.3, w: 12, h: 3.5, fontSize: 14, fontFace: BODY_FONT, color: TEXT_COLOR, border: { color: 'BBBBBB', pt: 0.5 }, colW: [2, 6, 4] });

// ======= SLIDE 24: NPC Connections =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/steading-p5.png')) {
  slide.addImage({ path: './assets/art/scenes/steading-p5.png', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' }, transparency: 50 });
}
slide.addText('NPC Connections', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });

// ======= SLIDE 25: Village Map (Homes) =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Where Do You Live?', { x: 0.5, y: 0.2, w: 12, h: 0.6, fontSize: 24, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR });
if (imgExists('./assets/art/maps/village-map.png')) {
  slide.addImage({ path: './assets/art/maps/village-map.png', x: 0.5, y: 0.9, w: 12, h: 6.2, sizing: { type: 'contain' } });
}

// ======= SLIDE 26: Let Spring Burst Forth =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
slide.addText('Let Spring Burst Forth!', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('Roll +Fortunes (2d6+1)', { x: 0.5, y: 4.5, w: 12, h: 1, fontSize: 20, fontFace: BODY_FONT, color: TEXT_COLOR, align: 'center' });

// ======= SLIDE 27: End =======
slide = pres.addSlide();
slide.background = { color: BG_COLOR };
if (imgExists('./assets/art/scenes/booki-adventure-hook.png')) {
  slide.addImage({ path: './assets/art/scenes/booki-adventure-hook.png', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' }, transparency: 60 });
}
slide.addText('See You Next Session', { x: 0.5, y: 2.5, w: 12, h: 2, fontSize: 48, fontFace: HEADING_FONT, bold: true, color: ACCENT_COLOR, align: 'center' });
slide.addText('The world is darkening. Stonetop needs its heroes.', { x: 0.5, y: 4.5, w: 12, h: 1, fontSize: 18, fontFace: BODY_FONT, color: TEXT_COLOR, align: 'center', italic: true });

console.log('All 27 slides created');
console.log('Writing file...');

pres.writeFile({ fileName: './sessions/session-zero-deck.pptx' })
  .then(() => console.log('DONE: sessions/session-zero-deck.pptx'))
  .catch(e => console.error('Write error:', e.message));
