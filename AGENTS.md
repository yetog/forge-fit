# Forge Fit: Repository Agent Guardrails

> **Mandatory for all coding, image-generation, product-design, documentation, UX, and UI agents.**

## Before creating or changing ANY Forge Fit visual output

1. Read [docs/brand/BRAND_CODE_V1.md](docs/brand/BRAND_CODE_V1.md) in full.
2. Load [docs/brand/brand.tokens.json](docs/brand/brand.tokens.json) as the canonical palette, typography and navigation definition.
3. Review the approved premium Player Hub in [Figma](https://www.figma.com/design/F3xK2e2i2lFYBt1rZZ1p5J?node-id=4-18). Original generated mood boards are inspiration, **not** implementation-ready UI.
4. Check [docs/SPRINT_PLAN.md](docs/SPRINT_PLAN.md) and the current V2 user journey before adding new functionality.

## Visual identity — never compromise silently

- Identity: **cinematic professional golf** first, **earned RPG** progression second.
- Use only named approved design tokens; no invented hex colors, gradients, random typefaces, alternative emblems, random UI illustrations, or gold-on-gold treatments.
- Use Bebas Neue for large display headings, Inter for interface copy, and token-based sizing.
- Golf imagery must be original and photorealistic or editorial, grounded in actual golf; avoid lifted Square Enix/TrackMan/5 Iron assets.
- All functional UI (text, buttons, progress, XP, skill tree, video overlays, charts) must be semantic/accessible code or editable Figma layers; never one flattened generated image.
- State-driven components must cover default, active/selected, locked/disabled, loading, error and complete when relevant.
- Reconcile any conflicts with legacy style docs in favor of the brand code for V2 screens, and document migrations.

## Product truthfulness

- Practice XP rewards activity/completed objectives; mastery requires evidence of improvement.
- Data imported from TrackMan or video requires clear source labels, user confirmation, uncertainty where relevant; never hallucinate measured data.
- Player Hub is the first post-onboarding destination, with an actionable first quest.
- Calibration with video/TrackMan/bag is optional. Users without premium hardware must receive full meaningful journeys.

## Required self-review for submissions

In PR description/design handoff include: (1) branding compliance statement, (2) screenshots at 390 px and 320 px where applicable, (3) token/color audit, (4) component states, (5) accessibility/contrast, (6) first-time and returning player journeys, (7) original asset source/rights and placements, (8) evidence/XP correctness.

**Stop and flag approval needed** rather than silently overriding approved brand colors, icons, imagery style, or information architecture.

The canonical document and tokens are versioned. Updating them is a separate product/design approval, not an incidental component change.
