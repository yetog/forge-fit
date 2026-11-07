# Forge Fit — Project Context and What We Learned (Nov 7, 2026)

**Purpose:** Portable factual context for Claude Code, Codex/ChatGPT, Gemini Gem, Figma designers and human collaborators. Does not assume any agent can read the original chat. This document records the product team's observations and discussions from Nov 7, not a verbatim transcript.

## Product north star
Forge Fit / Road to Scratch is an **original, Square Enix-caliber cinematic golf progression RPG** in which real practice turns into visible improvement and meaningful progression. The goal isn't to reskin a generic golf/fitness dashboard; it's to make training feel like preparing, embarking on and completing a quest. Compare against the owner's **15-screen concept composite**.

## Technical and workflow context verified during review
- Repository: `yetog/forge-fit`, branch `feature/forge-fit-golf-v2-sprint1` holds V2 Sprint 1 changes; `main` was behind V2 by one commit at earlier inspection (could change).
- Stack: React 18, Vite, TypeScript, Tailwind/shadcn, responsive web; localStorage used for golf data/progression in early work. Native App Store/Play Store publication is a separate research task.
- Existing docs: sprint plan, golf wireframe, vision, color palette, Square Enix research, onboarding/quest/mastery specs, UX sitemap and research ideas register.
- On Nov 7 work moved across **Claude Code → ChatGPT/Codex**. The switch exposed a productive collaboration opportunity: different agent roles can specialize, but their chat histories **do not automatically transfer**.

## Day's evolution — important learning
1. **Product review:** inspected golf onboarding and V2 Player Hub. Found personalized first quest, multi-select weakness and optional calibration gaps. Identified range-video/data import, XP feedback and a returning-user loop as critical journeys.
2. **Sitemap / UX:** defined 15 visual screen concepts and 5 primary destinations. Player Hub is first after onboarding. Future scorecard and on-course guidance are ideas, not first sprint blockers.
3. **Initial Figma authoring:** created editable wireframes and a palette/token board. Structurally useful, visually **too much like a generic or vibe-coded green/gold golf app**. Do not confuse semantic layer creation with art fidelity.
4. **Second Player Hub attempt:** added basic forest/mountain illustration, quest blocks and a stricter Brand Code v1. Still not close to the original visual target.
5. **Visual DNA study:** annotated Hub, quest-panel metalwork and skill-tree states. Useful research, **not a polished art direction or finished asset kit**. Original 15-screen image was not successfully embedded in Figma; a schematic inventory is not evidence of original-level visual fidelity.
6. **Owner feedback:** The goal is explicit: “the Square Enix app of golf,” with the *Final Fantasy VII Rebirth / Final Fantasy XV* menu feel and polished image quality. Repeated Figma iterations without comparing to the source wasted review cycles.
7. **Process change:** separate art direction, UI/UX design, frontend implementation and independent QA. Each gets versioned prompts, handoff packages and approval gates. Place shared memory in GitHub; store large approved artwork separately if desired.

## Why earlier output missed
- Started with programmatic shapes/cards, missing photoreal atmospheric scenery, editorial composition, dimensional metallic panels, tailored iconography, logo refinement and emotional rewards.
- Token/code correctness was measured, but reference fidelity was **not** a pass/fail check before presentation.
- Too-early instructions locked Bebas Neue/Inter and “premium sports first, RPG second.” These were **premature creative constraints**, not approved final decisions.
- Agent role confusion: UX wireframing, branding and production artwork were attempted simultaneously.
- Shared chat context across tools was implicit instead of expressed in persistent files.

## Lessons / durable decisions
- **Do not create more generic screens until one flagship Player Hub looks like the original reference.**
- Use image generation for approved scenic/portrait/collectible assets; editable Figma/SVG/CSS for interactive product UI.
- Create visual fidelity lab and high-fidelity Player Hub before broad V2 polish.
- 2–3 quest panel variations keep the same content layout so they are comparable; art director must provide a candid source side-by-side critique.
- QA agent must see original reference and candidate output and be able to reject “looks technically fine.”
- Drive storage should be linked via manifest rather than assumed integrated.
- Brand docs v1 and early Figma are preserved as useful **provisional history**, NOT design approval.

## Core UX invariants
**New golfer:** welcome → identity / goal / weaknesses + primary focus → optional calibration → Player Hub + assigned quest → guided first practice.  
**Returning range golfer:** Hub → practice → optional swing video / measured range screenshot → confirm/edit provenance → save → one practice XP award → grounded insights → skill progress.  
**Serious golfer:** Studio / bag → import/compare → find improvement → practice priority → measurable mastery.  
No TrackMan access? Full usable experience. Practice XP ≠ evidence-based mastery. Video alone must not claim measured launch monitor values.

## 15-screen working inventory
Welcome; Create Player; Goals & Focus; Player Hub; Training/Quests; Guided Mission; Log Practice; Swing Studio; Swing Analysis; Swing Comparison; My Bag; TrackMan Import; Progress & Skill Tree; Achievements; Round Scorecard.

## Creative reference hierarchy
1. **Owner-approved Forge Fit 15-screen image** (current chat attachment; make accessible to art agents as an explicitly designated reference).
2. Curated UI examples from FFVII Rebirth / FFXV: study interactions, frame craft, cinematic compositions (no copied art).
3. High-fidelity Forge Fit variants chosen/approved later.
4. Existing Figma wireframes for **layout and logic only**.

The original composite has not been checked in as a verified canonical project asset. A project member must add an accessible, rights-reviewed reference to Drive or GitHub and register its location; do not substitute the schematic index.

## Open decisions and unknowns
- Exact source image crop at useful resolution; approved reference pack of FF menu screenshots.
- Final wordmark/emblem, typography, panel ornament, lighting/grade and asset variants.
- Asset store permissions and Gemini model/license/terms.
- Whether and how to implement scoring, Swing AI and TrackMan/Five Iron workflows; none imply official partner APIs.
- When to merge V2 and whether there is a live deployment branch. No assumption that Figma depicts live code.
- App-store path, vendor integrations and backend tech are not justified by the current visual sprint.

## Immediate next work
`VF-001` faithful Player Hub fidelity study; `VF-002` ornate quest-panel exploration; `VF-003` spatial skill-tree art study; independent QA comparison; owner artistic selection; only then UX Figma build / FE work. Keep a decision log.
