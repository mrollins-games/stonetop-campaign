# Reference Library — Lookup Guide

> This file tells Copilot how to efficiently find information in the reference library.
> DO NOT read entire source files unless necessary — use this guide to jump to the right chunk.

## File Organization

```
reference/
├── indexes/                          ← START HERE for any lookup
│   ├── rules-index.md               ← Rules questions → file + page
│   ├── lore-index.md                ← Setting/lore → file + page  
│   └── monster-index.md             ← Monster stat blocks (172 indexed)
├── source-text/
│   ├── book-i-chapters/ (17 files)  ← Rules, mechanics, GM guidance
│   ├── book-ii-entries/ (57 files)  ← Setting guide (self-contained entries)
│   ├── handouts/ (6 files)          ← Player-facing reference sheets
│   └── playbooks/ (empty - use handouts)
└── names-list.md                     ← Name pools by culture
    moves-cheatsheet.md               ← Quick move reference
```

## Lookup Strategies

### "How does [move/rule] work?"
1. Check `indexes/rules-index.md` for the topic
2. Open the referenced file in `source-text/book-i-chapters/`
3. Search for the move name or page marker (`--- PAGE N ---`)

### "Tell me about [place/creature/faction]"
1. Check `indexes/lore-index.md` for the entry
2. Open the referenced file in `source-text/book-ii-entries/`
3. Each Book II entry is a self-contained gazetteer article — read the whole file

### "What are the stats for [monster]?"
1. Check `indexes/monster-index.md` — the table has HP/Armor/Damage/Instinct
2. For full details (GM moves, lore, special behaviors), open the source file
3. Search within the file for the monster name

### "What playbook moves does [class] have?"
1. Open `source-text/handouts/copy-of-character_playbooks_(all).md`
2. Search for the playbook name (e.g., "The Blessed", "The Fox")
3. For inserts: `source-text/handouts/playbook_inserts.md`

### "What arcana exists for [type/element]?"
1. Open `source-text/handouts/handout_-_arcana.md` for the card catalog
2. For full rules on arcana: `source-text/book-i-chapters/13-discoveries.md`
3. For extended lists: `source-text/book-ii-entries/appendix-c-minor-arcana.md` and `appendix-d-major-arcana.md`

### "What gear/equipment is available?"
1. Open `source-text/handouts/handout_-_moves___gear.md`

### "What's the setting overview?"
1. Open `source-text/handouts/handout_-_setting_overview.md`

### "What improvements can Stonetop make?"
1. See `../../steading/improvements.md` (campaign file, not source-text)
2. For original rules: `source-text/handouts/playbook_-_steading_(spreads).md`

## File Sizes (for context budgeting)
| Category | Files | Total Size | Avg per File |
|----------|-------|-----------|-------------|
| Book I chapters | 17 | 1,329 KB | 78 KB |
| Book II entries | 57 | 1,077 KB | 19 KB |
| Handouts | 6 | 418 KB | 70 KB |

**Tip:** Book II entries average 19 KB — usually safe to read in full.
Book I chapters average 78 KB — prefer targeted page searches within them.

## Page Navigation Within Files
All source files use `--- PAGE N ---` markers. To find content on a specific page:
- Search for `--- PAGE 277 ---` to jump to page 277
- Content between two markers belongs to that page
