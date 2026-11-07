# FORGE FIT · BRAND CODE V1.0
> **Status:** Enforced design direction for Forge Fit Golf / Road to Scratch.  
> **Source of truth:** This document for visual identity; [brand.tokens.json](./brand.tokens.json) for machine-readable tokens.  
> **Design file:** https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J  
> **Owner:** Product/design. Change only through an explicit visual-quality review.

## 1. Brand contract
**Promise:** Turn real golf practice into visible progress—from the first range session to scratch.

**Positioning:** Premium, cinematic golf performance product with **earned** RPG progression. Serious about the game, approachable to new golfers. We do not make a fantasy combat game with golf labels.

**Brand pillars (all four must show up in core UX):** Progression · Mastery · Focus · Performance.

**Voice:** Direct, encouraging, precise and calm. Prefer “Own the Fairway,” “Start your session,” “Analyze your swing,” “+100 practice XP.” Avoid childish fantasy language, hyperbolic AI claims, or judgmental coaching.

**Visual inspiration:** FFX sphere-grid connected mastery, FFXV restrained HUD, FFVII Rebirth menu hierarchy, Kingdom Hearts state feedback. These are *interaction/design principles*, NOT licenses to replicate intellectual property. All logos, heroes, medals, environments, illustrations and symbols MUST be original.

## 2. Design-token authority
**NEW canonical tokens** are in `brand.tokens.json`, with companion variables in Figma collection **Forge Fit · Brand v1**. These supersede the historical exploratory palette in `docs/COLOR_PALETTE.md` for **new premium Player Hub and subsequent V2 screens**. Retain legacy skill-discipline colors as *limited, semantic chart/skill-tree accents* pending explicit mapping review; do not mix the historical purple/blue-black global surfaces with the new forest-green shell.

| Token | Hex | Contract |
|---|---|---|
| brand.bg | `#0B1F17` | Primary app shell / night forest |
| brand.deep | `#081611` | Immersive hero / bottom navigation |
| brand.surface | `#123428` | Cards / menus |
| brand.raised | `#174333` | Selected or elevated surfaces |
| brand.gold | `#D4AF37` | CTAs, achievements, unlocked moments |
| brand.goldLite | `#F1D47A` | Metallic edge / highlight only |
| brand.sand | `#F5E6C8` | Warm supporting foreground |
| brand.white | `#F8F4E8` | Main content text |
| brand.muted | `#B6C8BB` | Secondary text |
| brand.line | `#426250` | Dividers / control outlines |
| brand.success | `#2ECC71` | Verified completion |
| brand.warning | `#F5A623` | Attention, not mastery |
| brand.danger | `#EF4444` | Errors / critical state |
| brand.ink | `#06140E` | Text over gold CTAs |
| brand.slate | `#1E2A27` | Disabled / locked / inactive |

No ad hoc color hexes in new UI components. Define tokens first; use a semantics layer for contexts. Gold is **not** for paragraphs, generic dividers, or every icon.

**Typography:** `Bebas Neue Regular` for major display headlines/level callouts only; `Inter Regular/Semi Bold/Bold` for UI, buttons, stats and instructional text. Treat existing Orbitron/Rajdhani styles as legacy until migrated. Scale: hero 36–44, section heading 22–28, card title 16–20, body 14–16, helper 12–13; absolute minimum 11 for non-critical metadata. Prefer sentence case for guidance, concise uppercase only for RPG labels.

**Layout:** 8-point spacing system (4 for micro alignments). Mobile baseline 390×844; design also for 320 px width, content safe areas, and large dynamic text. Primary CTAs minimum 48 px height, 44×44 tap target for icons. App chrome and data controls remain native-coded and readable in daylight. Rounded cards 12–16 px; avoid indiscriminate glow, glassmorphism and gradients.

## 3. Composition and imagery
**Approved art:** Original realistic golfers, swing poses, golf-course landscapes, warm dusk or atmospheric daylight, subtle cinematic haze, tactile gold hardware accents, symbolic achievement medallions.

**Image composition:**
- Hero course imagery: provide 9:16 and 4:5 variants, dark negative space for text; focal subject must not obscure buttons, XP, or accessibility labels.
- Portraits: diverse original adult golfers with realistic anatomy, correct club grip/swing biomechanics; consistent lighting and character continuity. Never imply portraits are actual users.
- Badges: original circular/hexagonal metal emblems on transparent background, visual tiers readable at small sizes; no text embedded when code can render text.
- Do NOT generate a whole app screen and ship it as a single image. UI screenshot concepts are reference only. Figma/code screens must be editable, semantic layers.
- No logos from TrackMan, Five Iron Golf, Square Enix or other third parties without granted rights; product names may appear as plain text where accurate.
- No copied characters, HUDs, logos, anime aesthetics, magical spell VFX, neon-cyberpunk rainbow, generic SaaS purple gradients, or randomly invented golf telemetry.

**Asset responsibilities**
| Asset | Produce through | Rationale |
|---|---|---|
| Hero golf course / atmospheric valley | Image generation, approved and optimized | Cinematic, raster-rich |
| Player portrait / onboarding golfer | Image generation (optional) | Original human imagery |
| Trophy and achievement art | Image generation + cleanup | Collectible feel |
| Logo master and app mark | Original vector/logo process, reviewed | Needs precise scalable identity |
| Navigation / actionable icons | Lucide or custom SVG code | Crisp, accessible |
| Quest cards, stats, XP bars, buttons | React/CSS with Figma components | Dynamic data/states |
| Skill tree / connection paths | SVG/React code | Interactive and responsive |
| Swing video annotations / angles | SVG/canvas code backed by measurements | Explainable and grounded |
| TrackMan screenshot parser | Product flow/vision backend, not art | User-confirmed structured evidence |
| Performance charts / historical data | Code-driven charts | Accessible real data |

## 4. Interaction rules
1. The **Player Hub is the first product screen** after onboarding. Show an assigned, actionable initial quest; never “No active quest” by default.
2. First-time flow: Welcome → Golfer identity → Goals → Multi-select strengths/weaknesses + primary focus → Optional calibration (video / launch monitor screenshot / bag) → Player Hub → First quest. Calibration must be skippable.
3. Returning flow: Player Hub → Start or log range practice → attach optional video/verified metrics → save → award **practice XP once** → give grounded feedback → return to progression.
4. XP rewards **participation/verified task completion**. Skill mastery reflects measured improvement, not automatic XP or model assertion. Allow users without TrackMan hardware to progress fully.
5. No AI-generated numbers presented as measured. Identify source (video inference, user-entered, launch-monitor image), confidence, and editable extraction. Explain when assessment is limited.
6. On every critical flow design: loading, empty, offline/error, completion, skipped and resumed states.
7. Round scorecards, in-round logging, coaching/reference documentation are future expansion; keep roadmap space without crowding first mission UX.

## 5. Component state contract
`PrimaryCTA`: gold with dark text; enabled, pressed, disabled, loading. Do not use gold for destructive actions.  
`SecondaryCTA`: forest surface with narrow gold outline for emphasis or neutral outline.  
`QuestCard`: category, mission title, concise purpose, completion progress, next action, reward preview. Active vs complete visually distinct.  
`XPBar`: absolute current/next-level numbers AND visible fill; never color-only progress.  
`SkillNode`: locked, available, in-progress, mastered; path lines follow same states, with motion disabled under reduce-motion.  
`Navigation`: five slots max: Home, Train, Studio, Play, Profile; current section clear via icon+label, not solely color.  
`DataCard`: distinguish measured vs estimated vs manually entered; accessible descriptions.

## 6. Quality gate — HARD STOP
A screen or generated asset **fails** review if ANY of these occur:
- Off-palette colors, unjustified fonts, or unapproved brand/logo interpretation.
- Whole UI built as a flat screenshot rather than editable semantic layers.
- Unreadable overlay on photography, text over faces, critical text below adequate contrast, touch targets under 44px.
- More than one competing primary CTA per viewport.
- Gold applied everywhere, excessive bloom, fantasy effects that obscure golf information.
- Fake AI analysis, invented launch angles, unearned mastery, duplicate XP.
- No first mission after onboarding, mandatory paid tracking equipment, or dead-end buttons.
- Missing loading/empty/error handling for a production handoff.
- Copied third-party game art or unlicensed commercial branding.

Review checklist before acceptance: **(a)** brand-token audit; **(b)** mobile readability 320–390 px; **(c)** component states; **(d)** first-time and returning user flows; **(e)** real/estimated data provenance; **(f)** screenshots against approved master Player Hub; **(g)** original art/provenance and attribution; **(h)** developer implementation mapping.

## 7. AI/Gemini/Leonardo creative guardrail
**System preamble for all asset requests:** “You are the Forge Fit Golf art director. Follow BRAND_CODE_V1.md and brand.tokens.json exactly. Produce original golf-centered cinematic assets, not application UI mockups unless explicitly requested for concept approval. Maintain an elegant forest-night + tactile gold system, plausible lighting/anatomy/golf movement, clean composition, and consistent series art direction. Never invent performance values or copy protected sports/game brands. Report asset role, aspect ratio, focal point, negative space, style tags, intended screen, and review checklist.”

**Asset naming:** `ff-[area]-[role]-[variant]-vXX.webp` (or `.svg` for code/vector); examples `ff-hub-course-dusk-v01.webp`, `ff-profile-golfer-portrait-v01.webp`, `ff-achievement-first-session-gold-v01.webp`. Track prompt, model, seed (if available), rights, resolution, crop, approval status in an asset manifest.

**Prompt template:**
```
FORGE FIT | [SCREEN/AREA] | [ASSET ROLE]
Intent: [user outcome].
Subject: [golf-specific original scene/person/object].
Art direction: premium cinematic sports photography; real golf anatomy; deep forest #0B1F17; raised green #174333; selective warm metallic gold #D4AF37.
Framing: [portrait/landscape], safe negative space [top/right], focal subject [location], mobile crop first.
Lighting: restrained golden-hour side light / atmospheric pine-green dusk.
Do not include: UI controls, numerical metrics, written words, logos, unrelated fantasy characters, chromatic neon, copied art, distorted hands/clubs.
Export: [ratio, resolution, alpha if required].
Acceptance: readable behind live UI overlays, original, consistent with approved Player Hub.
```

## 8. Implementation sequencing
- Phase A: approve premium Player Hub and brand code; add original imagery in controlled layers (current Figma master has editable illustration as **art-direction placeholder**).
- Phase B: convert master into proper reusable Figma variants and React components, map typography/token CSS.
- Phase C: apply these to onboarding and first mission; make clickable prototype.
- Phase D: map training/logging, swing studio, bag/import, scorecard, achievements and mastery onto the same system.

**Important:** The previous exploratory reference docs remain useful for interaction research, but any conflicted implementation MUST use this document and `brand.tokens.json` until a new approved brand-code version is published.
