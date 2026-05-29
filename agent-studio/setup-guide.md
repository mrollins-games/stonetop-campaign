# Copilot Studio Agent — Setup Guide

## Step-by-Step Setup

### 1. Open Copilot Studio
- Go to: https://copilotstudio.microsoft.com
- Sign in with your Microsoft account

### 2. Create New Agent
- Click **Create** → **New agent**
- Name: `Stonetop GM Assistant`
- Description: "Campaign management assistant for a Stonetop TTRPG game. Answers rules, lore, and campaign questions from the knowledge base."

### 3. Add Instructions
- Paste the contents from `system-prompt.md` (the text between the --- lines)

### 4. Add Knowledge Source
Your campaign files need to be accessible to the agent. Options:

#### Option A: Manual Upload (Simplest — start here)
1. Go to your repo: https://github.com/mrollins-games/stonetop-campaign
2. Click **Code** → **Download ZIP**
3. Extract the ZIP
4. In CP Studio, go to **Knowledge** → **Add knowledge**
5. Choose **Files** and upload key folders:
   - `reference/indexes/` (all index files)
   - `reference/source-text/book-ii-entries/` (lore entries)
   - `npcs/` (NPC records)
   - `threats/` (threat records)
   - `characters/playbooks/` (PC sheets)
   - `steading/` (steading playbook)
   - `gm-notes/` (house rules, todos, ideas)
   - `sessions/` (session records once they exist)
   - `skills/` (skill procedures)
   - `world/` (locations, timeline, discoveries)

Note: CP Studio has file count/size limits. Prioritize indexes and campaign canon over raw source text. The `reference/source-text/book-i-chapters/` are large (78KB avg) — upload only if under limits.

#### Option B: SharePoint Sync (Auto-updating)
1. Install GitHub Desktop or set up a scheduled `git pull` to a OneDrive folder
2. That folder syncs to SharePoint automatically
3. Point CP Studio Knowledge at the SharePoint site/folder
4. Benefit: Push from CLI → auto-appears in agent's knowledge

#### Option C: Website/URL (if supported)
- Some CP Studio tiers allow pointing at a URL
- Try: https://github.com/mrollins-games/stonetop-campaign
- May need GitHub Pages or a public-facing mirror (not ideal for private repo)

### 5. Configure Topics (Optional)
You can create guided conversation flows:

| Topic | Trigger Phrases | Action |
|-------|----------------|--------|
| Rules Lookup | "how does X work", "what's the rule for" | Search rules-index.md |
| Monster Stats | "stats for", "stat block" | Search monster-index.md |
| NPC Info | "who is", "tell me about [name]" | Search _npc-index.md |
| Session Recap | "what happened in session" | Search sessions/ |
| Lore Question | "what do we know about", "tell me about [place]" | Search lore-index.md |

### 6. Test
- Use the **Test** panel on the right side of CP Studio
- Try these queries:
  - "What are the rules for Defy Danger?"
  - "Who are the residents of Stonetop?"
  - "What's the stat block for a troll?"
  - "What house rules do we have?"
  - "What god does the Lightbearer serve?"

### 7. Publish & Deploy to Teams
1. Click **Publish** (top right)
2. Go to **Channels** → **Microsoft Teams**
3. Toggle Teams on
4. Click **Open in Teams** to test
5. Pin the bot in Teams for quick access

## Maintenance
- After each session is processed (via CLI), re-upload changed files or rely on SharePoint sync
- Update the system prompt if house rules or player info changes
- The agent is read-only — it cannot modify your campaign files

## Limitations to Be Aware Of
- **Token/file size limits:** Large source text files may be truncated
- **No write-back:** Agent cannot update GitHub — use CLI for that
- **Knowledge refresh:** Manual uploads need manual re-uploads after changes
- **Context window:** Agent may not hold entire monster index in memory at once — be specific in queries
