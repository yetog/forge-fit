# Forge Fit Golf - Investor Deck

Marp-based presentation for investor conversations.

## Files

- `INVESTOR_DECK.md` - 12-slide investor pitch deck

## Viewing the Presentation

### Option 1: VS Code Extension (Recommended for Editing)

1. Install the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension
2. Open `INVESTOR_DECK.md`
3. Click the preview icon (or `Cmd+Shift+V` / `Ctrl+Shift+V`)
4. Use the Marp sidebar to export to PDF/PPTX/HTML

### Option 2: Marp CLI

Install Marp CLI globally:

```bash
npm install -g @marp-team/marp-cli
```

#### Preview in Browser

```bash
cd /var/www/zaylegend/apps/staging/forge-fit/docs/slides
marp --preview INVESTOR_DECK.md
```

#### Export to PDF

```bash
marp INVESTOR_DECK.md --pdf -o INVESTOR_DECK.pdf
```

#### Export to PowerPoint (PPTX)

```bash
marp INVESTOR_DECK.md --pptx -o INVESTOR_DECK.pptx
```

#### Export to HTML

```bash
marp INVESTOR_DECK.md --html -o INVESTOR_DECK.html
```

### Option 3: Docker (No Installation Required)

```bash
cd /var/www/zaylegend/apps/staging/forge-fit/docs/slides

# PDF export
docker run --rm -v "$PWD":/home/marp/app marpteam/marp-cli INVESTOR_DECK.md --pdf -o INVESTOR_DECK.pdf

# PPTX export
docker run --rm -v "$PWD":/home/marp/app marpteam/marp-cli INVESTOR_DECK.md --pptx -o INVESTOR_DECK.pptx

# HTML export
docker run --rm -v "$PWD":/home/marp/app marpteam/marp-cli INVESTOR_DECK.md --html -o INVESTOR_DECK.html
```

## Slide Outline

| # | Title | Content |
|---|-------|---------|
| 1 | Title | Forge Fit Golf: The RPG of Golf Improvement |
| 2 | Problem | Fragmented tools, aimless practice, invisible progress |
| 3 | Solution | RPG progression + Swing Studio + Quest-based practice |
| 4 | Key Features | Swing Studio, Skill Tree, Training Quests, Round Clipping |
| 5 | Differentiators | Square Enix UI, Round Clipping, XP vs Mastery |
| 6 | User Journeys | 5 personas with their flows |
| 7 | Market | Golf app opportunity, competitive landscape |
| 8 | Business Model | Freemium + Pro subscription ($9.99-14.99/mo) |
| 9 | Technology | React Native, MediaPipe, Supabase, ~$32/mo at 1K users |
| 10 | Roadmap | 4 design sprints, 18 weeks to beta |
| 11 | Team | Background and credibility |
| 12 | Ask | $150K seed, milestones |

## Theme Customization

The deck uses a custom dark theme inspired by the Square Enix aesthetic:

- **Background**: `#1A1A2E` (deep charcoal)
- **Text**: `#FFFFFF` (white)
- **H1 Accent**: `#FFD700` (gold)
- **H2 Accent**: `#2E7D32` (muted green)
- **H3 Accent**: `#90CAF9` (light blue)

To modify the theme, edit the YAML frontmatter in `INVESTOR_DECK.md`.

## Speaker Notes

Speaker notes are included as HTML comments (`<!-- -->`) above each slide. These are visible in presenter mode:

```bash
marp --preview --watch INVESTOR_DECK.md
```

In the browser preview, press `p` to toggle presenter view with notes.

## Related Documents

- `../PRODUCT_BRAINSTORM.md` - Full feature list and pitch deck outline
- `../RPG_VISION.md` - Product philosophy and screen designs
- `../SPRINT_PLAN.md` - Development roadmap details
- `../SQUARE_ENIX_UI_RESEARCH.md` - Design inspiration
