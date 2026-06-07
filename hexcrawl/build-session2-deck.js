const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 inches

// Style constants
const TITLE_OPTS = { fontSize: 28, bold: true, color: "1a1a1a", fontFace: "Segoe UI" };
const SUBTITLE_OPTS = { fontSize: 14, color: "4a4a4a", fontFace: "Segoe UI", italic: true };
const HEADING_OPTS = { fontSize: 18, bold: true, color: "2d4a1e", fontFace: "Segoe UI" };
const BODY_OPTS = { fontSize: 12, color: "1a1a1a", fontFace: "Segoe UI", valign: "top", wrap: true };
const READ_ALOUD_OPTS = { fontSize: 13, color: "1a1a1a", fontFace: "Georgia", italic: true, valign: "top", wrap: true };
const DISCOVERY_OPTS = { fontSize: 11, color: "2a2a2a", fontFace: "Segoe UI", valign: "top", wrap: true };
const BG_COLOR = "f5f0e8";

// ===== SLIDE 1: HEX MAP =====
let slide1 = pres.addSlide();
slide1.background = { color: "1a1a1a" };
const hexMapPath = path.join(__dirname, "HexGrid02.png");
if (fs.existsSync(hexMapPath)) {
  slide1.addImage({ path: hexMapPath, x: 0, y: 0, w: "100%", h: "100%", sizing: { type: "contain", w: 13.33, h: 7.5 } });
} else {
  slide1.addText("HexGrid02.png not found", { x: 1, y: 3, w: 11, h: 1, ...TITLE_OPTS, color: "ff0000" });
}
slide1.addText("The Great Wood — Session 2", { x: 0.3, y: 6.8, w: 5, h: 0.5, fontSize: 16, color: "ffffff", fontFace: "Segoe UI", bold: true });

// ===== SLIDE 2: SESSION OVERVIEW =====
let slide2 = pres.addSlide();
slide2.background = { color: BG_COLOR };
slide2.addText("Session 2: Into the Great Wood", { x: 0.5, y: 0.3, w: 12, h: 0.8, ...TITLE_OPTS });
slide2.addText("The party ventures into the forest to find the missing hunters.", { x: 0.5, y: 1.1, w: 12, h: 0.5, ...SUBTITLE_OPTS });
slide2.addText([
  { text: "What the PCs know:\n", options: { bold: true } },
  { text: "• Cefin returned wounded, marked with strange symbols, babbling about 'the trees are alive'\n" },
  { text: "• 4 hunters + Axel (Ted's apprentice) are still missing in the wood\n" },
  { text: "• Dilwen's party of 4 is also overdue (separate group, deeper in)\n" },
  { text: "• The Broken Contract: trees must not be felled. Something was freed at C7.\n\n" },
  { text: "Session Goals:\n", options: { bold: true } },
  { text: "• Find the missing people (B6 — Bramble Cave)\n" },
  { text: "• Investigate what happened at the logging site (C7)\n" },
  { text: "• Discover the corruption thread (B8 → D8 → D10)\n" },
  { text: "• Encounter the consequences of the Broken Contract\n" },
], { x: 0.5, y: 1.8, w: 12, h: 5.2, ...BODY_OPTS });

// ===== HEX SLIDES =====

function addHexSlide(hexId, name, terrain, readAloud, notices, discoveries) {
  let s = pres.addSlide();
  s.background = { color: BG_COLOR };
  // Header bar
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.9, fill: { color: "2d4a1e" } });
  s.addText(`${hexId} — ${name}`, { x: 0.4, y: 0.1, w: 8, h: 0.7, fontSize: 22, bold: true, color: "ffffff", fontFace: "Segoe UI" });
  s.addText(terrain, { x: 9, y: 0.2, w: 4, h: 0.5, fontSize: 12, color: "c8dbb8", fontFace: "Segoe UI", align: "right" });

  let yPos = 1.1;

  // Read Aloud
  s.addText("📖 Read Aloud:", { x: 0.4, y: yPos, w: 4, h: 0.35, ...HEADING_OPTS, fontSize: 13 });
  yPos += 0.35;
  s.addText(readAloud, { x: 0.5, y: yPos, w: 12.3, h: 1.4, ...READ_ALOUD_OPTS });
  yPos += 1.5;

  // What They Notice
  s.addText("👁 What They Notice:", { x: 0.4, y: yPos, w: 5, h: 0.35, ...HEADING_OPTS, fontSize: 13 });
  yPos += 0.35;
  s.addText(notices, { x: 0.5, y: yPos, w: 12.3, h: 1.0, ...BODY_OPTS });
  yPos += 1.1;

  // Discoveries
  s.addText("🔍 Discoveries:", { x: 0.4, y: yPos, w: 5, h: 0.35, ...HEADING_OPTS, fontSize: 13 });
  yPos += 0.35;
  s.addText(discoveries, { x: 0.5, y: yPos, w: 12.3, h: (7.5 - yPos - 0.2), ...DISCOVERY_OPTS });
}

// --- C7: THE LOGGING SITE ---
addHexSlide("C7", "The Logging Site", "River, forest/bluff",
  `The stream bends here around a muddy flat on the south bank. Fresh stumps — maybe a dozen — dot the clearing, pale wood still oozing sap. Sawdust and woodchips carpet the ground. The air smells of cut pine and something else... something electric, like the moment before a storm. One stump near the center is different: the tree didn't fall — it shattered. Splinters radiate outward in a star pattern, and the heartwood is scorched black.`,
  `• Fresh stumps (some days old, some recent) — clearly an active logging operation\n• One shattered stump with scorched heartwood — this is where the spirit was freed\n• Boot prints, drag marks, and broken branches leading NORTHWEST toward B6\n• A dropped waterskin half-buried in mud (still has water in it)\n• The stream crossing is easy here — knee-deep, rocky bottom`,
  `1. The shattered stump (Investigate): The binding roots below are torn apart. Dark residue coats the inner wood. On 7-9: "Something was trapped here. It broke free violently." On 10+: "This was a prison. The roots held a corrupted spirit — a Forest Folk person, twisted by Things Below. Felling the tree broke the cage."\n\n2. The trail of flight: Following the broken branches NW leads to B6 (the Bramble Cave). Obvious panic — people ran without looking back. Takes ~1 hour to follow.\n\n3. Axel's camp: A bedroll, hatchet, and marking cord behind a boulder. Ted's cooper's mark on the hatchet. He was working alone, felling trees for barrel staves.`
);

// --- B8: THE BEND ---
addHexSlide("B8", "The Bend", "River bend, exposed strata",
  `The stream curves sharply here, cutting deep into the outer bank. Layers of earth and stone are exposed in the cut — dark loam, then clay, then pale rock streaked with something that catches the light. On the inner bank, a gravel bar collects debris. The water is clear but the fish... the fish are wrong. Trout drift in the shallows with milky, filmed-over eyes. A pike near the bank has a second row of fins along its belly, twitching independently. You can see crayfish on the bottom with too many legs, moving in jerky spirals.`,
  `• Corrupted fish — milky eyes, extra appendages, sluggish but snap if disturbed\n• Deep undercut outer bank with exposed rock strata\n• Gravel bar on inner bank collecting flotsam (some of it man-made)\n• Submerged stone V-shape in the shallows (the old weir)\n• Faded leather strips tied to trees on the inner bank`,
  `1. The flotsam eddy: Among driftwood on the gravel bar — a leather belt with a bronze buckle, a child's carved toy (waterlogged), a scrap of woven cloth. Belongings of missing people, washed downstream over years.\n\n2. The fish weir (Investigate — Know Things): Submerged V-shaped stone wall. Glyphs carved underwater.\n   • 7-9: "Tainted water." "Purification upstream." "Do not drink from the deep."\n   • 10+: Full picture — corruption flows from D10, Forest Folk built a warded cistern at D8 to purify river water. The weir caught fish before they swam too close to D10. System collapsed when the Forest Folk were corrupted.\n\n3. Bound tree roots: Roots of trees on the outer bank reach into the water. Investigating reveals roots wrapped tight around dark shapes that pulse faintly — the binding network extends underground.\n\n4. Mineral deposit: Unusual blue-grey clay in the exposed strata. Useful for crafting or trade.\n\n5. Natural ford: The gravel bar is the safest crossing for miles. Animal tracks converge here.\n\n6. Leather strip trail: Forest Folk path markers. Following them leads deeper into the wood toward D8.`
);

// --- B6: THE BRAMBLE CAVE ---
addHexSlide("B6", "The Bramble Cave", "Bluff edge, dense bramble",
  `Before you see it, you smell it — warm honey and fresh rain, impossibly sweet for this deep in the wood. The scent draws you toward the bluff face where dense, silvery-white thorned bushes crowd the rock. Pale lavender flowers dot the canes, and clusters of deep purple-black berries hang heavy. Near the base of the bluff, someone has hacked a path through the bramble — cut canes lie scattered, the exposed wood pale and weeping sap. Beyond the cut path, a dark opening in the rock.`,
  `• Overwhelming honey-and-rain scent (the Mêlddraenen / Honey Thorn)\n• Cut bramble at cave entrance — someone forced their way in recently\n• Silvery-white thorned canes with purple-black berries and lavender flowers\n• Faint sounds from inside the cave (voices? movement?)`,
  `1. The cave interior: 5 people sheltering inside — 4 of Cefin's hunting party + Axel. Alive but haggard. Low on food, water from dripping cave walls. One hunter (Mared) is thorn-beguiled — she wandered into the bramble in a daze, was pricked repeatedly. Now confused, babbling, doesn't recognize companions. The berries can cure her (see #3).\n\n2. Axel's account: Ted's apprentice. Was alone felling trees at C7. Cefin's party ran into him fleeing from the spirit. They all ran together, regrouped here. Cefin was caught — "the air grabbed him, lifted him, carved those marks into his arms" — but staggered free and went home alone. Axel is terrified and guilt-ridden about the trees.\n\n3. Mêlddraenen (Honey Thorn) — Flora:\n   BERRIES: Clear the mind. Use as supplies to Recover (1d6 uses). Cure Confused debility.\n   THORNS: Inflict beguilement — disorientation, suggestibility, dreamlike fog. Multiple pricks = delirium.\n   HARVEST: Defy Danger +DEX. On 7-9: get berries but take a prick (save vs. beguilement). On 6-: multiple pricks. Thick gloves grant advantage.\n\n4. Mared (thorn-beguiled hunter): Babbles about "the beautiful light" and "they're singing to me." Can be cured with Honey Thorn berries (ironic — the cure grows on the thing that hurt her).`
);

// --- D8: FOREST FOLK WATCH-POST & CISTERN ---
addHexSlide("D8", "Watch-Post & Cistern", "Forest, bluff base",
  `The canopy thickens here, old oaks pressing close. High in one ancient tree, a platform of lashed branches clings to the trunk — rotten, half-collapsed, but clearly built with purpose. Below it, partially hidden by ferns and leaf litter: a circular stone basin, waist-high, its walls lined with flat stones carved with spiraling symbols. The basin is dry now, cracked, but intact. On the eastern edge of the hex, standing stones mark a boundary — their surfaces carved with very different symbols than the basin. Something about them says: do not cross.`,
  `• Raised platform in canopy — rotting but clearly artificial (watch-post)\n• Stone cistern below — circular basin with carved glyph-stones lining the interior\n• Leather strips on trees — Forest Folk trail markers (connect to B8 trail)\n• Standing stones on eastern edge — Fae boundary markers (marking E9/E7 as Fae territory)\n• From the platform: view south toward unnaturally dark water (D10)`,
  `1. Cistern glyphs (Know Things): Ward-glyphs for purification. "The deep water feeds a hungering mouth. Carry it here to cleanse it." The Forest Folk hand-carried river water UP from the stream to purify it in this basin. The glyphs removed Daagon's corruption.\n   • 10+: The cistern could be restored — the stones are intact, only the binding magic has faded.\n\n2. Crystal knife: In a crumbling leather satchel near the platform. Hand, crude, magical. Can harm spirits (ignoring armor, +1d4 damage). Shatters on a roll of 4.\n\n3. Fae boundary markers: Eastern standing stones. Carved with Fae symbols. Mark E9 and E7 as their territory. The Forest Folk respected these borders — "Good Neighbors" arrangement. Crossing uninvited has consequences.\n\n4. View from platform: Looking south through the canopy — the water of D10's pool is visible. Unnaturally dark, unnaturally still. Something is wrong with it.\n\n5. Trail markers: Leather strips connect this site to B8 (downstream) and toward D10 (upstream patrol route). The Forest Folk monitored the corruption from here.`
);

// --- D10: THE DARK POOL ---
addHexSlide("D10", "The Dark Pool", "River widens to small lake",
  `The stream widens here into a pool — almost a small lake — fed by a waterfall cascading off the cliff face to the north. The water should be beautiful. It isn't. Despite the clear feed from above, the pool's center is dark. Not shadowed — dark. The water is colder than it should be, and the bottom simply... isn't visible. The banks nearest the deepest point are bare — no moss, no ferns, no grass. Just bare earth and pale, smooth stones. The silence here is wrong. Even the waterfall sounds muted.`,
  `• Waterfall from northern cliff feeds the pool (clean water entering corrupt pool)\n• Center of pool is unnaturally dark — can't see bottom\n• Bare banks around the deepest point — nothing grows\n• Fish here are severely corrupted — milky eyes, extra appendages, aggressive\n• Occasional ripples with no wind\n• Temperature drops noticeably near the deep center`,
  `1. The emanation (Do NOT reveal immediately): A tendril of Daagon, Who Waits in Deep Waters. Not Daagon itself — a lesser manifestation that burrowed up through the riverbed. A mouth in the deep mud. An eye that opens in the silt. Connected to B10 (The Maw) via the same fissure.\n\n2. Night whispers: After dark, something whispers from below — promises of power, wealth, knowledge. Anyone sleeping within earshot must Defy Danger +WIS or be drawn toward the water.\n\n3. The corruption source: All the tainted fish, the dead banks, the wrong water downstream — it all originates here. The Forest Folk knew. They built the cistern at D8 to purify water, the weir at B8 to catch fish before they swam too close. When the Forest Folk were corrupted, the system failed.\n\n4. DANGER: Swimming or wading into the deep triggers attention. The emanation offers, tempts, grabs. Instinct: to take from the surface, to never let go. Treat as a Lesser Threat (HP 12, Armor 2 — but only reachable underwater).`
);

// --- B10: THE MAW ---
addHexSlide("B10", "The Maw", "Forest edge, elevated rock",
  `The trees thin here as the ground rises into bare, grey rock. Nothing grows within thirty feet of the dark opening ahead — no bushes, no moss, not even lichen except for a sickly grey blight spreading outward in fingers from the cave mouth. Bones litter the entrance: snapped, splintered, scattered. Some are animal. Some... might not be. From inside, you can hear it — a wet, rhythmic sound. Breathing? Dripping? Something between the two.`,
  `• No vegetation in a 30-foot radius — grey lichen blight spreads from the cave\n• Bones at the entrance (broken, chewed — animal and possibly humanoid)\n• Wet rhythmic sounds from within\n• The rock itself feels wrong — faintly warm, almost vibrating\n• Hunters absolutely avoid this place`,
  `1. The truth: The Maw is the surface opening of the same fissure that Daagon's tendril pushed through at D10. Grey lichen = corruption leaking up through rock. Noises = the emanation gurgling/whispering, echoing up through underground passages.\n\n2. Connected underground to D10 via subterranean waterways. Water in the deepest part of the cave tastes of salt and something worse.\n\n3. The Forest Folk knew: Trail markers (leather strips) stop well short of this cave. Glyph-warnings on rocks at the 30-foot boundary say: "DO NOT ENTER. THE HUNGRY DARK LIVES BELOW."\n\n4. If PCs enter: Descending leads to flooded passages that eventually connect to D10's pool. The emanation is aware of anything in these tunnels. Increasingly aggressive whispers. Defy Danger +WIS to resist compulsion to go deeper.`
);

// --- C9: THE NARROWS ---
addHexSlide("C9", "The Narrows", "River, rocky terrain",
  `The stream pinches between mossy boulders here, forced narrow and fast. The water is ankle-deep but moves with surprising force over smooth stones. The banks rise steeply on both sides — good footing if you watch your step. Downstream (toward B8) the water is calmer. Upstream (toward D10) the forest gets darker, denser, quieter.`,
  `• Stream narrows between boulders — fast water, rocky footing\n• Natural chokepoint — easy to cross but easy to ambush\n• Transition zone: forest noticeably darker and quieter upstream (toward D10)\n• Fish visible but fewer than expected, and those present show early signs of corruption`,
  `1. Crossing point: Easiest ford between D10 and B8. No Defy Danger needed in normal conditions. During rain/flood — Defy Danger +DEX.\n\n2. Transition marker: Perceptive PCs notice the forest changes upstream. Trees are older, the canopy thicker, birdsong fades. This is the edge of D10's influence radius.\n\n3. Tracks: Multiple sets of boot prints in the mud near the crossing — some old (Forest Folk? small, barefoot), some recent (Cefin's party passed through fleeing toward B8).`
);

// ===== SLIDE: CORRUPTION THREAD SUMMARY =====
let summSlide = pres.addSlide();
summSlide.background = { color: BG_COLOR };
summSlide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.9, fill: { color: "4a1e1e" } });
summSlide.addText("GM Reference: The Corruption Thread", { x: 0.4, y: 0.1, w: 10, h: 0.7, fontSize: 22, bold: true, color: "ffffff", fontFace: "Segoe UI" });
summSlide.addText([
  { text: "The Chain (upstream to downstream):\n\n", options: { bold: true, fontSize: 14 } },
  { text: "D10 (Dark Pool)", options: { bold: true } }, { text: " — Source. Daagon's tendril burrowed up through riverbed. Mouth in mud, eye in silt.\n" },
  { text: "  ↓  corruption flows downstream + underground to B10\n\n" },
  { text: "B10 (The Maw)", options: { bold: true } }, { text: " — Same fissure, surface opening. Grey lichen = corruption leaking up. Connected underground.\n" },
  { text: "  ↓  river carries taint downstream\n\n" },
  { text: "C9 (Narrows)", options: { bold: true } }, { text: " — Transition zone. Fish start showing corruption signs.\n" },
  { text: "  ↓\n\n" },
  { text: "B8 (The Bend)", options: { bold: true } }, { text: " — Visibly corrupt fish. Forest Folk weir (catch system). Glyph clues point to D8 & D10.\n" },
  { text: "  ↓\n\n" },
  { text: "D8 (Watch-Post)", options: { bold: true } }, { text: " — Forest Folk solution: cistern + purification glyphs. Hand-carried water here to cleanse it. System failed when Folk were corrupted.\n\n" },
  { text: "Resolution path: ", options: { bold: true } }, { text: "Restore the cistern glyphs → purify water → eventually seal the fissure at D10?" },
], { x: 0.5, y: 1.1, w: 12.3, h: 6.0, ...BODY_OPTS });

// ===== SLIDE: MISSING PARTIES STATUS =====
let partySlide = pres.addSlide();
partySlide.background = { color: BG_COLOR };
partySlide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.9, fill: { color: "1e3a4a" } });
partySlide.addText("GM Reference: Missing Parties", { x: 0.4, y: 0.1, w: 10, h: 0.7, fontSize: 22, bold: true, color: "ffffff", fontFace: "Segoe UI" });
partySlide.addText([
  { text: "Cefin's Party (B6 — Bramble Cave):\n", options: { bold: true, fontSize: 14 } },
  { text: "• 5 total: Cefin + 4 hunters. Cefin returned alone (possessed, marked).\n" },
  { text: "• Ran into Axel (Ted's apprentice) at C7 when spirit released.\n" },
  { text: "• All 5 fled to B6, took shelter in cave behind Honey Thorn bramble.\n" },
  { text: "• Cefin was caught by spirit's telekinesis, marked, staggered home.\n" },
  { text: "• Mared (one hunter) is thorn-beguiled. Others are scared but functional.\n" },
  { text: "• Axel: guilt-ridden, knows he broke the contract by felling trees.\n\n" },
  { text: "Dilwen's Party (location TBD — D8, E7, or E5):\n", options: { bold: true, fontSize: 14 } },
  { text: "• 4 people including Dilwen. Deeper in the wood.\n" },
  { text: "• Overdue. Separate from Cefin's group.\n" },
  { text: "• Status and exact location: GM decision pending.\n" },
], { x: 0.5, y: 1.1, w: 12.3, h: 5.5, ...BODY_OPTS });

// Save
const outPath = path.join(__dirname, "session2.pptx");
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Created: " + outPath);
}).catch(err => {
  console.error("Error:", err);
});
