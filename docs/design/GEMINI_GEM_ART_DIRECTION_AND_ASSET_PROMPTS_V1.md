# Forge Fit Golf — Gemini Gem Creative Director + Asset Prompt Pack (v1)

**Date:** 2026-11-07  
**Status:** Ready to configure a Gemini Gem and begin visual A/B exploration in a **separate creative-design chat**. This is **a prompt specification**, not proof of generated or approved imagery.  
**Paired UX docs:** [Hub-first first/return journey](../UX_FIRST_VISIT_RETURNING_RANGE_JOURNEY_V1.md), [approved sitemap](../UX_SITEMAP_USER_JOURNEYS_V1.md), [UI research](../SQUARE_ENIX_UI_RESEARCH.md), [color palette](../COLOR_PALETTE.md), [Sprint 1 review](../SPRINT_1_V2_REVIEW_2026-11-07.md).

## 1. Gem setup

**Gem name:** Forge Fit — Visual Art Director  
**Short description:** Creative director for a cinematic premium golf sports RPG. Develops original UI-supporting artwork, consistent golfer characters, scene key art, achievement motifs and visual QA notes matched to the current Forge Fit UX blueprint.

**Attach/reference these Markdown docs when possible:**
1. `docs/UX_FIRST_VISIT_RETURNING_RANGE_JOURNEY_V1.md` (most recent user journey / highest priority);
2. `docs/UX_SITEMAP_USER_JOURNEYS_V1.md`;
3. `docs/RPG_VISION.md`;
4. `docs/COLOR_PALETTE.md`;
5. `docs/SQUARE_ENIX_UI_RESEARCH.md`;
6. `docs/SPRINT_1_V2_REVIEW_2026-11-07.md`;
7. `docs/specs/ONBOARDING_SPEC.md`;
8. `docs/PRODUCT_IDEAS_RESEARCH_REGISTER_2026-11-07.md`.

**Priority when docs conflict:** this Gem brief and newest approved first/return journey supersede earlier onboarding drafts specifically on the landing order: **onboarding → Player Hub first; calibration is optional from the Hub**. Treat all visuals as direction, not implemented app capabilities.

### Copy/paste: Gem system instructions

```text
You are the dedicated visual creative director and asset-development partner for Forge Fit Golf, an original mobile-first golf training experience with RPG-style progression.

PRODUCT PURPOSE
The product helps a golfer “build their golfer”: start with personal goals, return to a Player Hub, complete meaningful practice missions, record range sessions, optionally attach swing video and TrackMan screenshots, and see XP for participation and separately evidenced mastery. It must serve beginners without launch monitors as well as experienced golfers with measured data. The first screen after onboarding is always the Player Hub. Swing calibration is a dismissible invitation, not a gate.

ART DIRECTION
Premium, cinematic, mature sports RPG grounded in real golf. Core mood: charcoal/deep navy near-black, emerald/fairway green, restrained warm gold, low-key lighting, subtle atmosphere, athletic presence, editorial negative space. Use fantasy-like luminous progression motifs selectively in achievements, unlocks, and skill-tree atmosphere. Luxury sports presentation, not a cartoon, cyberpunk casino, militarized HUD, or direct recreation of Final Fantasy/Kingdom Hearts.

COLOR & TONE
Reference the attached COLOR_PALETTE.md as source of truth. Useful anchors: charcoal deep #1A1A2E, fairway #2E7D32, metallic gold #DAA520, void black #0D0D14. Avoid oversaturated neon and decorative glow everywhere. Colors should not wash out live text overlays; allow outdoor legibility.

WHAT YOU CREATE
Original golfer avatar portrait families; golf course/range hero backgrounds; achievement medallion and mastery emblem illustration concepts; subtle scene textures with negative space. Ensure cohesive camera/lens, lighting, texture, and composition across series.

WHAT YOU MUST NOT PRETEND TO MAKE
Do not propose raster images as functional app navigation, charts, XP bar labels, dynamic skill graph, video editor timeline, swing skeleton, or real metrics. Those are implemented as React/CSS/SVG/Canvas components by developers. You may produce an aesthetic moodboard/reference for them, never a flattened functioning UI.

COPYRIGHT & ORIGINALITY
Use general aesthetic principles only. Do not reproduce actual Final Fantasy, Kingdom Hearts, EA Sports, TrackMan or Five Iron characters/logos/proprietary art. Do not use real professional golfers' identities/likenesses unless licensed and specifically requested. All artwork must be original. Avoid implying vendor partnerships.

IMAGE RULES
No lettering, labels, numbers, buttons, logos, watermarks, charts, screenshot-like interfaces or fake UI text in generated art. Leave clean dark negative space in compositions for real HTML text. Keep a consistent character silhouette, composition and lighting for family sets. If transparency is not supported, request clean solid backgrounds and note masking needed.

OUTPUT WORKFLOW
For each asset request:
1. Summarize the destination screen, aspect ratio, focal point, space reserved for UI, expected mood.
2. Give 2-3 controlled variants changing one design property at a time, if A/B exploration requested.
3. Provide an image-generation prompt, optional negative constraints, crop-safe zone and target filenames.
4. When asked to generate, make original art via the connected image generator if available.
5. Review the result: consistency, readability under UI, accessibility, odd anatomy, golf equipment correctness, branded content, style drift and mobile crop.
6. Explain if the asset needs retouch/crop/vector redraw instead of asserting it is production ready.

PROJECT STAGE
We are in UX/wireframing and art-direction stage, not backend implementation. The Player Hub is the visual north star. Produce only prioritized assets and avoid building a giant unsupervised asset library.

When user asks about a screen, answer using sitemap and page responsibility. When they ask for code, output an asset handoff contract instead: file name, aspect ratio, safe area, optional transparency, usage context, and implementation notes. Ask one clarification only when asset medium or key subject is genuinely ambiguous.
```

## 2. Approved visual language

**Foundation:** cinematic athletic realism with lightly stylized editorial lighting. Modern, calm and premium; immersive but accessible. **Fantasy concentrated in progression:** level-up, quest unlock, mastery constellation, achievement reveal. **Not** a game screenshot replica.

### Color anchors
| Token | Hex | Use |
|---|---|---|
| `void` | `#0D0D14` | deepest dark |
| `charcoal-deep` | `#1A1A2E` | app canvas |
| `charcoal-mid` | `#252540` | panels |
| `fairway` | `#2E7D32` | primary athletic accent |
| `gold` | `#DAA520` | achievement and earned rewards |
| `gold-bright` | `#FFD700` | rare celebration highlights |

These reflect the repository palette, but this Gem does not prescribe exact CSS for every screen. User-facing controls remain real code.

### Visual consistency parameters
- **Portrait style:** realistic athletic editorial portrait with **slight painterly treatment**, consistent face proportions and wardrobe quality; no real celebrity lookalikes; inclusive range of age/presentation/skin tones.
- **Photography language:** 35–50mm portrait feel, cinematic soft key/rim light, grounded golf attire, authentic clubs, no distracting sponsor marks.
- **Environment language:** believable public golf range/course; early morning or golden hour; fine atmosphere; detail remains secondary to overlaid interface.
- **Lighting:** subtle emerald/gold reflected accent; skin and products should not become unnatural green.
- **Type:** not rendered in assets. Developers create typography through the design system.
- **Safe areas:** specify negative-space location for each target view and account for mobile crop + sticky tab bar.

## 3. Page-to-asset matrix

| Page / moment | Generated artwork | Code-owned visuals | Priority |
|---|---|---|---|
| Welcome | 1 cinematic golf course/range hero, portrait-first safe area | Logo/type/CTA/progress | First batch |
| Avatar selection | 6 original golfer portrait options, consistent crop | Grid, selection ring, avatar IDs, labels | First batch |
| Player Hub (first & returning) | **1** shared environment/key art with dark negative space | XP, avatar frame, quest, stats, calibration hint and buttons | **North star** |
| Calibration hint | Usually no new art; optional small understated golf camera illustration | Dismiss, CTA, state | Code-first |
| Training mission | Reuse scene or subtle practice range texture | Checklist, timer, practice objectives and drill info | After wireframe |
| My Bag / Club detail | Optional club still-life art or background only | Club list, typical carries, gapping, charts, tags | Code-first |
| Swing Studio | No fake swing footage; use real user video | Trimming, overlay, skeleton, confidence and metadata | Code-first |
| TrackMan import | No generated imitation of official screen | Actual uploaded screenshot, editable measurements, source | Code-first |
| Skill Tree | Ambient star-chart/constellation background optional | Interactive SVG nodes/paths/state/tooltips | Second batch |
| Achievement reveal | 4 original medallion motifs + rare celebration scene | XP counts, earned dates, badge state, animation | First/second batch |
| Session complete / return | Reuse Hub art + optional light gold flare | Evidence, reward, mastery, next quest | Code-first |

**Explicit production rule:** artwork is never the sole carrier of critical instructions or quantitative data.

## 4. Prioritized first asset pack

**Batch 0 — Style test before mass creation**
1. Player Hub cinematic environment: portrait mobile and wide source.
2. Single exemplar character portrait for style calibration.
3. Single mastery medallion sample.

Review the three together in actual screen layouts before scaling.

**Batch 1 — Approved design family**
4. Five additional golfer portrait designs to make six.
5. Welcome environment distinct from Hub, but lighting-consistent.
6. Three more achievement motifs (total four).
7. Optional wide/portrait crops of Hub background if needed.

**Do not generate all 12 portraits or all branch badges before finalizing screen dimensions and first Player Hub mockup.**

## 5. Ready-to-use example generation prompts

All prompts request **original artwork** and are meant to be run in the asset-focused chat/Gem after approving the screen placement. No images have been generated with this document.

### P01 — Player Hub hero environment (primary visual north star)

```text
Create an ORIGINAL premium cinematic background illustration for a modern golf sports-RPG mobile Player Hub. Realistic early-morning golf practice range opening onto a manicured fairway, distant tree line, subtle atmospheric mist and beautiful natural depth, sophisticated sports editorial photography feel, charcoal/navy shadows, understated emerald green fairway tones, a few warm metallic-gold light accents. Rich but restrained, serene focus and anticipation of progress, elegant and expensive rather than flashy fantasy. Compose vertically 9:16. The upper central and lower middle portions should stay relatively dark and uncluttered so real UI elements (player identity, XP bar, quest card, primary CTA) can be overlaid in code. Place scenic focal interest toward the far right edge and middle distance. No people in foreground, no type, no numbers, no buttons, no interface panels, no logos, no watermark, no trademarked designs.
```

**A/B variant suggestion:** A = atmospheric early morning; B = warm dusk, **same framing and copy**, compare perceived premium quality and text readability. Avoid confounding with changing layout simultaneously.

### P02 — Welcome hero

```text
Original cinematic golf landscape for the welcome screen of Forge Fit, a premium sports progression experience. Wide, inviting championship-like public golf fairway viewed from low eye level, quiet rising sunlight behind distant pines, subtle emerald and charcoal palette, refined photographic realism with a slightly illustrative touch, natural atmospheric depth, aspirational but accessible to a beginner golfer. Vertical 9:16 with dark uncluttered central/top negative space for overlaid headline and CTA in code; keep subject and highlights away from the text safe area. No text, interface, badges, logos, watermarks or people in recognizable team clothing.
```

### P03 — First avatar exemplar

```text
Original fictional golfer character portrait for a cinematic premium sports RPG avatar selection interface. Adult recreational golfer with confident, approachable expression, modern unbranded golf clothing, upper-torso framing, subtle warm studio key light and emerald rim light, charcoal backdrop, realistic editorial portrait with subtle painterly polish, natural anatomy, authentic golf attitude, refined premium look, not a cartoon or game character copy. Centered square 1:1 composition with consistent shoulder and head margins suitable for a circular UI crop; no text, logo, badge, team brand, UI, watermark or exaggerated fantasy armor.
```

**Scale-up prompt for six:** “Make six distinct original adult fictional golfers spanning different appearances, ages and attire while keeping identical framing, lens feel, direction of light, backdrop, head scale, and visual finish. Deliver independent square images, not one collage. Never base a face on a real athlete.” Review each output for true consistency.

### P04 — Achievement medallion prototype

```text
Original collectible golf-progression achievement medallion, premium engraved medal concept for a sophisticated sports RPG. Center motif: a stylized fairway target and small golf-ball dimple pattern, precise embossed metalwork, restrained antique gold and dark enamel, fine edge detailing, clean iconic silhouette, elegant high contrast against a dark neutral backdrop, centered square 1:1, suitable for later masking and tier recoloring. No letters, no numbers, no labels, no logo, no watermark, no imitation of any known game's item icon.
```

**Variant family:** First Practice (target/footstep), Bag Calibrated (abstract iron head), First Swing Analysis (subtle motion arc), Consistency (linked repeating rings). A designer may need to vectorize refined silhouettes for small-screen legibility.

### P05 — Skill Tree atmospheric backdrop (optional, code-owned graph)

```text
Original extremely subtle ambient background texture for an interactive golf mastery skill tree. Deep charcoal and midnight blue-black canvas, faint emerald-to-gold light haze and delicate out-of-focus constellation ambience, sophisticated, minimal, spacious and low contrast. Leave the whole center clear for real SVG skill nodes, connecting paths and labels drawn programmatically. Wide 16:9 plus mobile-safe composition. NO visible nodes, NO real chart lines, NO interface panels, NO typography, NO numbers, NO icons or trademarks. The image must not be mistaken for the functional skill tree itself.
```

### P06 — Training mission scene

```text
Original quiet cinematic scene of an empty golf practice tee with a neat bucket of balls and alignment sticks at sunrise, realistic unbranded gear, calm disciplined athletic mood, deep charcoal shadows with restrained fairway green and soft warm-gold highlights, refined editorial sport composition. Vertical mobile crop, leave clear shadowed negative space above and below for the real mission checklist and controls. No UI, letters, logos, numbers or watermark.
```

### P07 — Brand-consistent avatar border inspiration (optional only)

```text
Original premium minimal circular portrait frame ornament for an RPG golfer avatar, subtle engraved brushed titanium and restrained antique-gold accents, thin elegant ring, one tiny emerald accent, icon-ready centered square on a clean high contrast plain background for vector recreation. No words, no logos, no faux XP text, no background portraits, no glittering busy fantasy decoration.
```

**Integration note:** actual selection state, focus outline, dynamic tier changes, accessibility contrast and avatar border color should be **code/SVG**, not an exported raster decoration when possible.

## 6. A/B prompts for art exploration (not uncontrolled design chaos)

- **Hub environment A/B:** dawn vs dusk; same composition, UI overlay and content; test clarity/aspiration.
- **Avatar style A/B:** photoreal editorial vs slightly illustrated editorial; same framing, background, lighting and model persona; test trust and belonging.
- **Achievement A/B:** antique-gold engraved vs modern brushed-metal minimal; same base silhouette and UI slot; test legibility at 48px and perceived reward.
- **Ambient treatment A/B:** clean matte dark vs subtle course-scene texture; identical functional Player Hub.

**Measure:** 5-second comprehension, first-action visibility, contrast on phone outdoors, emotional preference, and perceived trust. For a small beta, use interviews and qualitative preference results, not unsupported statistical claims.

## 7. Asset QA rubric

Score 1–5 per category before acceptance:
- **Story fit:** suggests training/progress rather than generic fantasy adventure.
- **Consistency:** avatars and scenes share coherent lighting, crop, and rendering.
- **UI friendliness:** clear copy overlay zones, good contrast on bright phones.
- **Golf correctness:** grip, hands, clubs, ball, stance and equipment are plausible when visible.
- **Originality/rights:** no copied game/brand/professional lookalikes or trademarks.
- **Performance:** viable crop and compressed asset, reasonable download weight.
- **Accessibility:** not dependent on color alone; key functions remain in HTML/SVG.

**Reject** generated fake data displays, mangled clubs/hands, baked-in illegible text, excessive gold/glow, over-busy backgrounds, or inconsistent character style. Save approved assets only after checking generator terms and usage rights for intended commercial use.

## 8. File naming and frontend handoff contract

Suggested path: `public/assets/golf/` (create only after approving art).  
File examples:
```text
hub-bg-dawn-v01-portrait.webp
hub-bg-dusk-v01-portrait.webp
welcome-course-v01-portrait.webp
avatar-golfer-01-v01.webp
avatar-golfer-02-v01.webp
achievement-first-practice-v01.webp
achievement-bag-calibrated-v01.webp
skill-tree-ambient-v01.webp
```
For each chosen file, record: source prompt/Gem version, creation date, asset owner/rights, approved variant, dimensions/aspect, safe crop notes, transparency, compressed file size, intended screens, dark overlay requirement, alt-text guidance. Keep original master outside deploy assets; export responsive optimized copies. No generated fonts or third-party IP.

**Data model example (illustration, for developer handoff):**
```ts
type GolfArtAsset = {
  id: string;
  src: string;
  kind: "portrait" | "scene" | "medallion" | "texture";
  usage: string[];
  aspectRatio: string;
  focalPoint?: "center" | "right" | "left";
  version: string;
  rightsReviewed: boolean;
};
```

## 9. Collaboration instructions / next creative chat

Suggested opening message in the separate asset chat:
> “Use `GEMINI_GEM_ART_DIRECTION_AND_ASSET_PROMPTS_V1.md` and the Hub-first UX journey. First propose two controlled variants of the Player Hub environment and one exemplar golfer portrait, each with exact composition, overlay-safe zones, and filenames. Do not make complete UI screenshots or generate the full library until the first Hub wireframe is approved.”

**Gemini is the initial cost-conscious trial because the user already has access.** Leonardo API may be considered later for consistent production batching, but image quality, commercial rights, generation cost and manual review need a real comparison. Do not assume an external service is available or automatically integrated.

## 10. Ownership and implementation boundary

Creative director / Gem: visual concepts, artwork, controlled alternatives and QA notes.  
Product: selects player journey, narrative, visual acceptance criteria.  
Frontend: responsive image placement, real buttons, progress, skill graph, upload/trim/analysis UI, accessible controls and states.  
Engineering/AI: media/OCR processing and source provenance.  
QA: crop, Android/iOS browser readability, missing images, performance and low-bandwidth fallback.

**Not in scope:** live image generation, backend changes, repo asset commit, store release, or actual consumer A/B testing. This file is a reusable, comprehensive Gem setup and starter prompt pack for later work.
