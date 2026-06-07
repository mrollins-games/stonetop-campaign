# Session Resume Package
## How to resume this work on another PC

This folder contains everything needed for a new Copilot CLI session to pick up where we left off on the Great Wood Hexcrawl for Session 2.

### Quick Start
1. Clone the repo: `git clone https://github.com/mrollins-games/stonetop-campaign.git`
2. Open a Copilot CLI session in the repo root
3. Tell Copilot: "Read `hexcrawl/session-resume/README.md` and `hexcrawl/session-resume/canon-summary.md` to understand where we are, then read `hexcrawl/poi-index.md` for all hex content."
4. Follow `_copilot-instructions.md` for overall behavior rules

### Key Files
| File | Purpose |
|------|---------|
| `_copilot-instructions.md` | Master GM assistant instructions |
| `hexcrawl/poi-index.md` | PRIMARY working doc — all hex POIs, river path, lore |
| `hexcrawl/session2.pptx` | Generated Session 2 GM deck |
| `hexcrawl/great-wood-hexcrawl-reference.pptx` | Visual reference (DO NOT OVERWRITE) |
| `hexcrawl/The Great Wood Hexcrawl Sesson 2.jpg` | Map image (8192x4608) |
| `hexcrawl/HexGrid02.png` | Hex grid overlay with labels |
| `threats/the-broken-contract.md` | Active threat — Forest Folk corruption lore |
| `hexcrawl/image-gen-instructions.md` | Art generation style guide |
| `hexcrawl/hex-tile-prompts.md` | Per-hex image prompts |

### Git Push (Enterprise Workaround)
The enterprise account (`v-mrollins_microsoft`) lacks write access. Push with personal token:
```powershell
$token = (gh auth token --user mrollins-games)
git -c http.extraHeader="Authorization: Basic $([Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("mrollins-games:$token")))" push --quiet 2>&1
```

### What NOT to do
- Do NOT overwrite `great-wood-hexcrawl-reference.pptx` (user has manual edits)
- Do NOT add barrow-builder content to this area (removed by GM decision)
- Do NOT change hex numbering system (flat-top, letter=column W→E, number=row S→N)
