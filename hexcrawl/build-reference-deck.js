const PptxGenJS = require('pptxgenjs');
const fs = require('fs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';

const TITLE_OPTS = { x: 0.5, y: 0.2, w: 12, h: 0.8, fontSize: 28, bold: true, color: '1a1a2e' };
const BODY_OPTS = { x: 0.5, y: 1.2, w: 12, h: 5.8, fontSize: 11, color: '222222', valign: 'top' };

// SLIDE 1: Title
let slide = pptx.addSlide();
slide.addText('Great Wood Hexcrawl \u2014 Reference Deck', TITLE_OPTS);
slide.addText('For PPT Copilot: maps, mechanics, POIs, creatures, encounter tables\nStonetop Campaign \u2014 GM Reference\nHex size: 2 hours edge-to-edge\nStyle inspiration: Hot Springs Island', { ...BODY_OPTS, fontSize: 14 });

// SLIDE 2: Vicinity Map
slide = pptx.addSlide();
slide.addText('Vicinity Map (Stonetop)', { ...TITLE_OPTS, fontSize: 22 });
slide.addImage({ path: 'assets/art/maps/map-vicinity-full.png', x: 0.3, y: 1.1, w: 12.5, h: 6.1, sizing: { type: 'contain' } });

// SLIDE 3: Great Wood Map
slide = pptx.addSlide();
slide.addText('Great Wood Area Map', { ...TITLE_OPTS, fontSize: 22 });
slide.addImage({ path: 'assets/art/maps/map-great-wood.png', x: 0.3, y: 1.1, w: 12.5, h: 6.1, sizing: { type: 'contain' } });

// SLIDE 4: Village Map
slide = pptx.addSlide();
slide.addText('Stonetop Village Map', { ...TITLE_OPTS, fontSize: 22 });
slide.addImage({ path: 'assets/art/maps/village-map.png', x: 0.3, y: 1.1, w: 12.5, h: 6.1, sizing: { type: 'contain' } });

// SLIDE 5: HSI Cool Map
slide = pptx.addSlide();
slide.addText('INSPIRATION: Hot Springs Island Map', { ...TITLE_OPTS, fontSize: 22 });
slide.addImage({ path: 'assets/noncannon/Cool Map.jpg', x: 0.3, y: 1.1, w: 12.5, h: 6.1, sizing: { type: 'contain' } });

// SLIDE 6: Mechanic Reconciliation
slide = pptx.addSlide();
slide.addText('Mechanic Reconciliation: HSI + Stonetop', { ...TITLE_OPTS, fontSize: 20 });
const mechRows = [
  [{ text: 'HSI Mechanic', options: { bold: true } }, { text: 'Stonetop Mechanic', options: { bold: true } }, { text: 'Our Resolution', options: { bold: true } }],
  ['WATCH (4hr) = 1 action', 'Legs of travel (narrative)', 'Use 2-HOUR HEXES as time unit. Travel 1 hex = 1 watch (2hr). GM frames narratively per Stonetop.'],
  ['Explore hex (1 watch)', 'Present a discovery (GM move)', 'Exploring = spending 2hr. Roll discovery table or reveal POI. Narrate as Stonetop exploration move.'],
  ['Travel to adjacent (1 watch)', 'Leg of travel', 'Moving 1 hex = 2hr. Stonetop legs = hex-to-hex.'],
  ['Investigate a POI (1 watch)', 'Seek Insight / Know Things', 'HSI investigate = Stonetop player moves. Keep dice.'],
  ['Encounter tables (3d6)', 'Dangers/Discoveries (Die of Fate)', 'Create tables per terrain type with Stonetop creatures + perilous rules.'],
  ['Poker chips (6/day)', 'Supplies (uses/day)', 'Use chips to track watches. 12 chips = 24hr. ~5-6 for action before camp.'],
  ['N/A', 'Chart a Course', 'KEEP. PCs Chart a Course before entering wood.'],
  ['N/A', 'Forage (2d6+WIS)', 'KEEP. Foraging = 1 watch (2hr, half-speed).'],
  ['N/A', 'Make Camp', 'KEEP. Costs 1 watch min. GM asks per rules.'],
  ['N/A', 'Struggle as One', 'KEEP. Difficult terrain hexes or forced marches.'],
  ['N/A', 'Keep Company', 'KEEP. Camp or uneventful watches.'],
  ['THE DARK (hidden info)', 'GM notes/threats', 'Adopt THE DARK format per POI.'],
];
slide.addTable(mechRows, { x: 0.2, y: 1.1, w: 12.9, h: 6.2, fontSize: 8, border: { type: 'solid', pt: 0.5, color: '999999' }, colW: [2.5, 2.5, 7.9], autoPage: false });

// SLIDE 7: Travel Time Calibration
slide = pptx.addSlide();
slide.addText('Travel Time Calibration (2-Hour Hexes)', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'From Stonetop Book I examples:\n\n' +
  '\u2022 Stonetop to Stream: "a few minutes" = same hex edge\n' +
  '\u2022 Stream to first notable Wood: ~1 hour = half a hex\n' +
  '\u2022 Following a trail: 4-5 hours per leg = 2-3 hexes\n' +
  '\u2022 Hunters venture "a day or two" max = 6-12 hexes deep\n' +
  '\u2022 Swyn lair (example): ~1.5-2 days = 9-12 hexes from town\n' +
  '\u2022 Vor Svetelik: deep in Wood = 10+ hexes\n\n' +
  'CONCLUSION: 2-hour hexes fit perfectly.\n' +
  '\u2022 Near wood (logging site, Red Grove) = 2-4 hexes from edge\n' +
  '\u2022 Mid-depth (threats) = 4-7 hexes from edge\n' +
  '\u2022 Deep wood (Vor Svetelik) = 8+ hexes, multi-day\n\n' +
  'Daily budget: 5-6 hexes pure travel (10-12 hrs).\n' +
  'With exploration + Forage + Camp = ~3-4 hexes progress/day.',
  BODY_OPTS
);

// SLIDE 8: Known POIs
slide = pptx.addSlide();
slide.addText('Known/Established Points of Interest', { ...TITLE_OPTS, fontSize: 20 });
const poiRows = [
  [{ text: 'POI', options: { bold: true } }, { text: 'Source', options: { bold: true } }, { text: 'Hex Range', options: { bold: true } }, { text: 'Map Visible?', options: { bold: true } }, { text: 'Notes', options: { bold: true } }],
  ['The Stream', 'Book II p.396', 'Edge (row 1)', 'YES', 'Boundary. First landmark.'],
  ['The Logging Site', 'Session 1', '2-3 hexes in', 'YES (stumps)', 'Axel felled trees. Spirit site.'],
  ['The Maw', 'Book II p.281', '1-2 hexes', 'YES (cave)', 'Cave, bones, strange noises.'],
  ['Red Groves', 'Book II p.314', '3-4 hexes', 'YES (red trees)', 'Blood-red trees. Sacred/dangerous.'],
  ['Vor Svetelik', 'Book II p.468', '10+ hexes', 'NO', 'Green Lord ruins. Multi-session.'],
  ['Golden Oak', 'Book II p.186', 'Fae paths', 'NO', 'Only via waystone. Not on grid.'],
  ['Fay Markers', 'Canon', '1-2 hexes', 'YES (stones)', 'Contract boundary stones.'],
  ['Old Crinwin Nest', 'Book I ex.', '5-7 hexes', 'NO', 'Torn apart nest.'],
  ['Makers Ruin', 'Book I ex.', '7-9 hexes', 'NO', 'Buried. Forest Folk glyphs.'],
];
slide.addTable(poiRows, { x: 0.2, y: 1.1, w: 12.9, h: 6.0, fontSize: 9, border: { type: 'solid', pt: 0.5, color: '999999' }, colW: [2.0, 1.5, 1.8, 1.8, 5.8], autoPage: false });

// SLIDE 9: POIs to Create
slide = pptx.addSlide();
slide.addText('POIs To Create (from Book II)', { ...TITLE_OPTS, fontSize: 20 });
const poi2Rows = [
  [{ text: 'POI Concept', options: { bold: true } }, { text: 'Source', options: { bold: true } }, { text: 'Visible?', options: { bold: true } }, { text: 'Description', options: { bold: true } }],
  ['Crinwin Nest (active)', 'GW dangers', 'NO', 'Giant wasp-hive in canopy. Spiders nearby.'],
  ['Fae Waystone', 'Fae/Waystones', 'YES', 'Standing stone. Portal to Fae paths.'],
  ['Forest Folk Ruins', 'Forest Folk', 'NO', 'Overgrown dwelling. Glyphs. Artifacts.'],
  ['Dool Tree Copse', 'GW dangers', 'NO', 'Bound spirits in sick trees. Pale Hunter avoids.'],
  ['Hagr Domain', 'GW p.208', 'YES', 'Obsessively stacked logs. Evil eye creature.'],
  ['Green Lord Barrow', 'GW/Vor Svet.', 'NO', 'Burial mound. Swyn lair or sealed artifacts.'],
  ['Gylglyd Vine Grove', 'GW p.207', 'YES', 'Beautiful clearing. Euphoric. Bones under.'],
  ['Nailadd Web Canopy', 'GW p.208', 'NO', 'Giant spider territory. Paralytic venom.'],
  ['Sacred Spirit Clearing', 'Spirits', 'NO', 'Spirit of the wild. Primal, territorial.'],
  ['Corrupted Hollow', 'Things Below', 'YES', 'Dead vegetation ring. Corruption seeps.'],
  ['Freed Spirit Trees', 'Campaign', 'YES', 'More felled trees. More spirits freed?'],
  ['Pale Hunter Crossing', 'Pale Hunter', 'NO', 'Trail on certain nights. Silver hoof-prints.'],
];
slide.addTable(poi2Rows, { x: 0.2, y: 1.1, w: 12.9, h: 6.0, fontSize: 9, border: { type: 'solid', pt: 0.5, color: '999999' }, colW: [2.5, 1.8, 1.2, 7.4], autoPage: false });

// SLIDE 10: Terrain Table
slide = pptx.addSlide();
slide.addText('Great Wood Terrain Table (Book II p.202)', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'Roll 1d12 for hex terrain type:\n\n' +
  '1   \u2014 Pond, wetland, or lake\n' +
  '2   \u2014 Creek, stream, or river\n' +
  '3   \u2014 Rocky outcropping, cave(s)\n' +
  '4-5 \u2014 Clearing, meadow, sparse trees\n' +
  '6-7 \u2014 Dense thicket\n' +
  '8-9 \u2014 Swath of one type of tree\n' +
  '10  \u2014 Briars, thorns, nettles\n' +
  '11  \u2014 Slope, hill, ridge, ravine\n' +
  '12  \u2014 Single, notable tree\n\n' +
  'Roll 1d6 for size/scope/intensity.\n\n' +
  'Each hex: PRIMARY terrain + 1-2 secondary features.',
  BODY_OPTS
);

// SLIDE 11: Discovery Table
slide = pptx.addSlide();
slide.addText('Great Wood Discovery Table (Book II p.203)', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'DISCOVERIES (1d6):\n' +
  '1 \u2014 Terrain change + roll again\n' +
  '2 \u2014 Insight into a threat (tracks, signs)\n' +
  '3 \u2014 Game (see below)\n' +
  '4 \u2014 Useful or valuable flora\n' +
  '5 \u2014 Crinwin, Fae, or spirit (curious/indifferent)\n' +
  '6 \u2014 Point of interest (see below)\n\n' +
  'GAME (1d6):\n' +
  '1-3 \u2014 Harmless: deer, fowl, rabbits\n' +
  '4-5 \u2014 Big, dangerous if provoked: boars, wisents, tal gerdwyr\n' +
  '6   \u2014 Deadly: cave bears, ceirwmawr, raselbaedd\n\n' +
  'POINTS OF INTEREST (1d6):\n' +
  '1 \u2014 Corrupted by Things Below or Fomoraij\n' +
  '2 \u2014 Haunted by death and the undying\n' +
  '3 \u2014 Traces of Forest Folk\n' +
  '4 \u2014 Sacred to spirits of the wild\n' +
  '5 \u2014 Fae domain or waystone\n' +
  '6 \u2014 Ruin or artifact of the Green Lords\n\n' +
  'If 10+ years old, likely marked by Forest Folk glyphs.',
  BODY_OPTS
);

// SLIDE 12-14: Creatures
slide = pptx.addSlide();
slide.addText('Great Wood Creatures \u2014 Part 1', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'BOAR \u2014 Group, gluttonous. HP 10, Armor 0. gore d8 (hand, messy, 1p). Protect territory.\n' +
  '\u2022 Relentlessly charge \u2022 Eat anything \u2022 Ignore pain\n\n' +
  'BUTCHERBIRD \u2014 Horde, tiny, organized. HP 1, Armor 1. peck d6-2 (hand, messy, 2p). Feast on meat.\n' +
  '\u2022 Grab+stab \u2022 Scent blood from miles \u2022 Own blood = repellent\n\n' +
  'CAVE BEAR \u2014 Solitary, large, cautious. HP 16, Armor 1. d10+4 (hand, close, forceful, messy, 1p). Fill belly.\n' +
  '\u2022 Rend/maul/crush \u2022 Surprising speed \u2022 Sniff food/trouble\n\n' +
  'CEIRWMAWR \u2014 Solitary, large, terrifying, fearless. HP 16, Armor 0. hoof d10+1, antlers d10+3 (reach, forceful). No disrespect.\n' +
  '\u2022 Toss aside \u2022 Ignore harm \u2022 Only Pale Hunter hunts them\n\n' +
  'COUGAR \u2014 Solitary, stealthy, cautious, athletic. HP 12, Armor 0. bite d10 (hand, grabby). Catch unawares.\n' +
  '\u2022 Silent position \u2022 Pounce+drag \u2022 Waits for stragglers',
  { ...BODY_OPTS, fontSize: 10 }
);

slide = pptx.addSlide();
slide.addText('Great Wood Creatures \u2014 Part 2', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'CWISARFF (tree adder) \u2014 Solitary, small, stealthy. HP 10, Armor 0. venom d10 (close). Defend spot.\n' +
  '\u2022 Wait to spring \u2022 Quick bite \u2022 Debility + cant heal until treated\n\n' +
  'CYNDDARAIG (rage drake) \u2014 Solitary, large, terrifying, fearless. HP 20, Armor 2. teeth d10+3 (3p, advantage). Dominate.\n' +
  '\u2022 Roar+quills \u2022 Bite limb off \u2022 Primal fury \u2022 ~6 in entire Wood. Offering may calm.\n\n' +
  'FEATHERED DRAKE \u2014 Group, stealthy, organized. HP 6, Armor 1. crest d8+2, talons d8+2 (1p). Spring on unwary.\n' +
  '\u2022 Burst from brush \u2022 Bash to ground \u2022 Rend \u2022 Follow for days. Feathers Value 3.\n\n' +
  'GYLGLYD VINES \u2014 Damage d6 (hand, grabby). Lure prey.\n' +
  '\u2022 Ensnare senses \u2022 Euphoric scents \u2022 Slowly entwine \u2022 Bones under. Musk counters.\n\n' +
  'NAILADD (spider) \u2014 Group, cunning, stealthy. HP 6, Armor 2. venom d8 (hand). Capture+consume.\n' +
  '\u2022 Leap+prone \u2022 Paralytic venom \u2022 Drag to canopy \u2022 Hound-sized. Venom Value 1.',
  { ...BODY_OPTS, fontSize: 10 }
);

slide = pptx.addSlide();
slide.addText('Great Wood Creatures \u2014 Part 3', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'HAGR \u2014 Solitary, large, terrifying. HP 16, Armor 1. hands d10+3, trunk d10+5, thrown d10+3. Shape environment.\n' +
  '\u2022 Evil eye (fear) \u2022 Pluck weightlessly \u2022 Stack obsessively \u2022 Tantrums\n\n' +
  'RASELBAEDD (iron boar) \u2014 Solitary, large. HP 20, Armor 4. gore d10+5 (3p). Hold a grudge.\n' +
  '\u2022 Rip apart \u2022 Never backs off \u2022 Recovers mortal wounds \u2022 Weapons <=2dmg shatter \u2022 Fears fire\n\n' +
  'TAL GERDWYR \u2014 Group, huge. HP 14, Armor 2. trample d8+5, tail d8+5 (area). Get annoyed.\n' +
  '\u2022 Bellow \u2022 Smash barriers \u2022 Reach very high \u2022 Deep forest only\n\n' +
  'WISENT \u2014 Group, large, cautious. HP 10, Armor 0. d8+3 (forceful). Protect herd.\n' +
  '\u2022 Shield young \u2022 Stampede \u2022 Leap surprising heights \u2022 Herds of 20\n\n' +
  'WOLF \u2014 Group, organized, cautious. HP 6, Armor 0. bite d8 (grabby). Weakest prey.\n' +
  '\u2022 Follow for miles \u2022 Surround/flank \u2022 Crush bone',
  { ...BODY_OPTS, fontSize: 10 }
);

// SLIDE 15: Pale Hunter
slide = pptx.addSlide();
slide.addText('The Pale Hunter (Book II)', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'Solitary, large, athletic, cunning, magical, terrifying, tireless\n' +
  'HP 26; Armor 4 (resilience)\n' +
  'Damage: silver spear d12+3 w/adv; antlers d12+5 w/adv; grapple d10+3 w/adv\n' +
  'Special: mist, grapple undead spirits, keen senses, uncanny reflexes\n' +
  'Instinct: hunt worthy prey\n\n' +
  'MOVES: Feat of prowess \u2022 Disperse into mist \u2022 Summon spear \u2022 Call hounds \u2022 Claim soul\n\n' +
  'GHOSTLY HOUNDS \u2014 Horde, spirit, terrifying. HP 10, Armor 1. bite d6 w/adv.\n' +
  'Only harmed by salt or while biting. Manifest from mist. Call pack + Hunter.\n\n' +
  'BEHAVIOR: Hunts certain nights. Values worthy prey. Especially hunts UNDEAD.\n' +
  'Won\'t follow into: dool trees, glyph sites, red groves, waystones, caves, corrupted sites.\n\n' +
  'CAMPAIGN HOOK: The freed tree-spirits are undead \u2014 he may come hunting them!',
  { ...BODY_OPTS, fontSize: 11 }
);

// SLIDE 16: Impressions
slide = pptx.addSlide();
slide.addText('Great Wood \u2014 Seasonal Impressions', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'ALWAYS: Massive trunks bigger than houses. Pale sky through canopy. Bending/creaking/rustling.\n' +
  'Skittering in distance. Sense of smallness, swallowed by something ancient and vast.\n\n' +
  'SPRING: Mud, rotting leaves. Drip of snowmelt/rain/mist. Pale buds (blue, yellow, violet). Birdsong.\n\n' +
  'SUMMER: Brilliant green. Insects buzzing, birds chirping. Oppressive heat and humidity.\n\n' +
  'AUTUMN: Aflame with reds and golds. Crunch of needles. Long shadows. Sharp cold damp air.\n\n' +
  'WINTER: Frosty stillness. Shocking white snow. Trees like boney fingers. Chirp of finches.\n\n' +
  'TERRAIN: Hilly, rugged, small streams, ponds. Mixed deciduous/evergreen.\n' +
  'Varies: tight trees + thick brush (barely walk) OR massive old-growth with sparse open space.',
  BODY_OPTS
);

// SLIDE 17: Campaign Threats
slide = pptx.addSlide();
slide.addText('Campaign Threats in the Great Wood', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'THE BROKEN CONTRACT (Active \ud83d\udd34 \u2014 Stage 2/5)\n' +
  '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n' +
  'Trees BIND undead spirits. Fay contract protects trees from disturbance.\n' +
  'Axel felled trees \u2192 spirits freed \u2192 one attacked Cefin\'s party.\n' +
  'Party defeated one spirit at logging site (Session 1).\n\n' +
  'GRIM PORTENTS:\n' +
  '1. \u2611 Axel fells sacred trees\n' +
  '2. \u2611 Freed spirit possesses Cefin\n' +
  '3. \u2610 More spirits freed from additional felled trees\n' +
  '4. \u2610 Fay retribution \u2014 forest turns hostile\n' +
  '5. \u2610 Impending doom (TBD)\n\n' +
  'MISSING: Dilwen + 3 hunters, Axel\n\n' +
  'OPEN: How many trees felled? How many spirits free? Fay retribution? Rebind possible?',
  { ...BODY_OPTS, fontSize: 11 }
);

// SLIDE 18: Grid Design Notes
slide = pptx.addSlide();
slide.addText('Hex Grid Design Notes', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'TARGET: ~25-30 hexes (like HSI\u2019s 25)\n\n' +
  'LAYOUT (working estimate):\n' +
  '\u2022 Row 1 (forest edge): 5-6 hexes \u2014 Stream, bluff, Maw\n' +
  '\u2022 Row 2-3 (near wood): 6-7 each \u2014 logging site, markers, Red Grove\n' +
  '\u2022 Row 4-5 (mid wood): 5-6 each \u2014 deeper threats, crinwin\n' +
  '\u2022 Row 6+ (deep wood): 3-4 \u2014 trails toward Vor Svetelik\n\n' +
  'NUMBERING: GW-01, GW-02, etc.\n\n' +
  'POI DENSITY: 2-3 per hex (one on entry, others need Explore)\n\n' +
  'VISIBILITY FLAGS:\n' +
  '\u2022 VISIBLE = on player-facing map\n' +
  '\u2022 HIDDEN = discoverable through exploration only\n' +
  '\u2022 SECRET = in THE DARK, needs specific action\n\n' +
  'NEXT: Mockup with cropped vicinity map + hex overlay to test fit.',
  BODY_OPTS
);

// SLIDE 19: Vor Svetelik
slide = pptx.addSlide();
slide.addText('Vor Svetelik \u2014 Deep Wood Goal', { ...TITLE_OPTS, fontSize: 20 });
slide.addText(
  'Green Lords\u2019 "Great White City." Learning center turned war-ground turned blight.\n' +
  'Deep in Great Wood. Multi-session expedition.\n\n' +
  'FEATURES: Surface ruins, undercity, battlefields, sealed wards, corrupted growths, undead, relics.\n\n' +
  'CREATURES:\n' +
  '\u2022 Nemurvojak \u2014 Horde, construct, undead. HP 11, Armor 4 (0 vs bronze). Spears d6 w/adv. Shuns light.\n' +
  '\u2022 Plasmic Horror \u2014 Solitary, large, amorphous. HP 19, Armor 2. Pseudopod d10+3, engulf d10+5. Child-like mind.\n\n' +
  'SITES: Conservatory, Menagerie, Great Library, Necropolis, Hallow Tree.\n\n' +
  'Beyond immediate hexcrawl scope but serves as long-term goal.\n' +
  'Place hints and glyph-trails in mid-wood hexes pointing toward it.',
  { ...BODY_OPTS, fontSize: 11 }
);

pptx.writeFile({ fileName: 'hexcrawl/great-wood-hexcrawl-reference.pptx' })
  .then(() => console.log('DONE: hexcrawl/great-wood-hexcrawl-reference.pptx'))
  .catch(e => console.error(e));
