# Forge Fit Golf V2 — Sprint 1 Review & Team Handoff

**Date:** 2026-11-07  
**Review scope:** GitHub `yetog/forge-fit`, `feature/forge-fit-golf-v2-sprint1` versus `main`; prior onboarding and post-onboarding screen recordings; product discussions covering RPG progression, swing analysis, TrackMan, club mapping, and premium design.  
**Status:** Product/design/code-reading review. **Not** a runtime QA pass, deployed-branch verification, benchmark, or production readiness certification.  
**Audience:** Product, UX/UI, frontend, backend/data, CV/AI, QA, and creative/asset teams.  
**Repository edits made during this review:** This documentation file only.

## Executive decision

**Keep the V2 branch as the working design branch. Do not merge purely because the new screens render.** Sprint 1 should end when a new golfer can complete onboarding, see a personalized first quest, complete/log a session, receive XP, and return to saved progress, with consistent navigation and no dead-end feature entry points.

Design direction: **cinematic, mature golf/sports RPG** as the foundation (charcoal, deep emerald, restrained gold, readable typography); use richer fantasy/game elements *selectively* for the Sphere Grid, achievements, milestones, and level-ups. Inspired by the menu and progression *principles* in the Square Enix research, without copying franchise artwork or proprietary UI assets.

## 1. Repository and deployment evidence

- `main` (reviewed SHA `bc2809ac414750c22f87a292691b0742566f4e3f`) contains the preexisting Forge Fit React/TypeScript/Vite application, golf club editor, session logger, golf dashboard, and localStorage-backed GolfContext.
- `feature/forge-fit-golf-v2-sprint1` (reviewed SHA `f28ecf7df133f3d3f53e5d27e62366af75d485dc`) was one commit ahead of `main` when compared. Its seven changed/added files were `src/components/golf/GolfOnboarding.tsx`, `PlayerHub.tsx`, `src/context/GolfProgressionContext.tsx`, `src/types/golfProgression.ts`, `src/utils/progressionUtils.ts`, and updates to `src/index.css` and `src/pages/Index.tsx`.
- V2 is therefore a **partial implementation of Sprint 1**, not just wireframes. A mobile screen recording resembles V2, but we have **not verified** the hosted deployment's branch, commit, or build workflow.
- Existing foundation: React 18, TypeScript, Vite, Tailwind, shadcn/Radix components, React Router. **Do not assume React Native** just because camera reference repositories are native. Validate web/PWA upload and video editing first.
- Source-of-truth issue: `docs/SPRINT_READINESS_REVIEW.md` calls several specs missing even though `docs/specs/XP_SYSTEM_SPEC.md`, `MASTERY_SYSTEM_SPEC.md`, `QUEST_DEFINITIONS.md`, `ACHIEVEMENT_LIST.md`, and `ONBOARDING_SPEC.md` now exist. Re-audit statuses against actual code and the latest documentation; do not use old “Todo”/“Not Ready” statuses as authoritative implementation status.
- **Deployment verification task:** record the production/staging URL, host/provider, deployed branch, commit SHA, build command, environment, and preview URL; attach a screenshot of deployment settings or build log. Compare deployed UI with both branches. Never merge/overwrite production until confirmed.

## 2. UI overhaul adherence: intended vs implemented

Primary references: `docs/RPG_VISION.md`, `docs/SQUARE_ENIX_UI_RESEARCH.md`, `docs/COLOR_PALETTE.md`, `docs/UI_VISUAL_REFERENCES.md`, `docs/SPRINT_PLAN.md`, and `docs/specs/ONBOARDING_SPEC.md`.

| Principle in docs | Evidence in V2 | Assessment / action |
|---|---|---|
| Modern cinematic menus / premium RPG hierarchy | V2 uses dark cards, gold/fairway accents, gradients, Orbitron/Rajdhani typography | **Partly met.** Needs unified spacing, typography scale, outdoor contrast, purposeful primary CTA and less repeated equal-weight cards. |
| FFX-inspired Sphere Grid | Research specifies node types, links, pan/zoom, cursor, branch and lock states | **Not demonstrated as complete in V2 diff.** Design and build an interactive vector/canvas graph, not a background image. |
| FFXV-inspired quest tracking | `PlayerHub.tsx` contains a current-quest card | **Partial.** Explicit `No active quest` placeholder is a broken first-run experience after personalized onboarding. |
| Character identity | Onboarding/player UI; Player Hub uses a Lucide `User` silhouette | **Partial.** Original avatar portrait system and level frames needed. |
| XP/level/mastery | `GolfProgressionContext.tsx`, `progressionUtils.ts`, CSS XP bar and mastery colors | **Good structural start.** Validate consistency, one-time events, real evidence, and persistence semantics. XP must never imply measured swing skill. |
| Premium game motion | CSS glow and level-up treatments | **Partial.** Define motion rules, reduced-motion behavior, and performance budget. |
| Cohesive art assets | `public/avatars/placeholder.txt` in main and generic iconography visible | **Not delivered yet.** See asset plan below. |

**Design rule:** meaningful visual hierarchy beats maximal glow. Outdoor legibility and touch targets take precedence over decorative complexity.

## 3. Recording-derived UX findings

### First-run/onboarding

Observed V2 flow: welcome (“Forge Your Game”) → target milestone (Break 100/90/80/Scratch) → practice frequency → weakness → profile/avatar/handedness/handicap → notifications → level-one welcome → Player Hub.

1. **Weaknesses must be multi-select:** allow selecting multiple issues, then choose **one primary focus** and optional secondary goals. Keep a single long-term *score* mission (Break 90, etc.) separate from multiple *skill concerns*. The current `ONBOARDING_SPEC.md` and V2 code model a singular `struggle` field; schema, components, persistence, and recommendation mapping all need updating.
2. **Don't claim to diagnose from survey answers:** onboarding creates a provisional coaching profile, not evidence-backed biomechanical mastery.
3. **Offer optional baseline calibration immediately afterward:** (a) upload a swing, (b) import launch monitor screenshot/CSV where available, (c) map bag, or (d) start a beginner fundamentals quest with no data. No hardware requirement or punitive paywall for first value.
4. **Assign first quest automatically:** selection of long-term score goal + primary skill concern + practice frequency should create a visible, explainable mission. Example: Break 100 + Poor Contact → Contact Fundamentals Session 1. Provide edit/skip controls. Do not leave “No active quest” after successful onboarding.
5. **Delay optional permissions** until needed; notifications should remain skippable and not block training.
6. **Avatar UX:** show consistent original portraits, selection states, and a preview rather than a generic icon; preserve accessible non-illustrated alternative.

### Post-onboarding

- In the recorded Player Hub, XP, mastery, stats, current quest, and quick actions are visible, but some menu destinations/feature paths were blank, incomplete, or difficult to interpret. Treat these as **QA observations needing reproduction**, not proven universal failures.
- Existing `GolfSessions.tsx` already supports duration, focus, clubs used, miss counts, confidence, reflections, and an XP result. Extend it rather than replace it. Add quest linkage, evidence attachments, and session resume.
- Existing `GolfClubs.tsx` already edits distances, half-swing distances, confidence, common misses, and notes. Extend toward proper bag setup, club selection, and repeated carry-distance samples rather than treating a single max distance as a calibrated club yardage.
- Every dashboard CTA must have meaningful destination, loading/empty/error state, recoverable back action, and analytics event.

## 4. Sprint 1 scope change and acceptance criteria

**Sprint 1's job is to connect onboarding to a usable first practice loop, not deliver the entire AI product.**

| Priority | Ticket | Deliverable | Acceptance |
|---|---|---|---|
| P0 | S1-01 Branch/deploy reconciliation | Document deployed SHA and V1/V2 routing | Team knows which commit is live and how to preview V2 |
| P0 | S1-02 Design system reference screen | High-fidelity Player Hub + reusable tokens/components | Mobile 390px and desktop reviewed; primary CTA/contrast legible |
| P0 | S1-03 Multi-concern onboarding | Array of selected concerns + one primary concern | User selects >1; can edit; selections persist |
| P0 | S1-04 First quest assignment | Rule-based initial quest from goals/concerns/frequency | No first-run empty quest unless user explicitly opts out |
| P0 | S1-05 Training session integration | Quest → guided task → existing session logger → reward → hub | Completing a session advances correct quest once, survives reload |
| P0 | S1-06 Integrity/persistence | One-time XP events, quest and profile save, migration strategy | No double XP on refresh/retry; legacy records survive upgrade |
| P0 | S1-07 Navigation audit | Audit every link from hub, sports, sessions, clubs, training path | No blank/unhandled screens; intentional placeholders where not built |
| P1 | S1-08 Calibration-choice UI | Swing / TrackMan / Bag / Skip choices | New and returning users can calibrate later |
| P1 | S1-09 Art direction and asset pack | Approved asset specs + first curated batch | Consistent typography/colors, usage rights and optimization guidance |
| P1 | S1-10 Event instrumentation | Onboarding/quest/session/calibration funnel | Event names and privacy/data retention documented |

**Move minimal persistence architecture and event integrity forward** from late sprint work. Full OAuth/offline sync may remain later; choose intentional local-first now with a migration contract to Supabase.

**Definition of done:** walkthrough on mobile browser; no console errors on core path; accessible input labels and focus; empty/loading/error cases; QA screenshots; accepted asset licenses; project docs updated. Goal: a golfer knows what to do next without assistance.

## 5. Production assets: image generation vs code

**Create original assets with text-to-image tools only when a rendered illustration is the actual deliverable.** Treat these as authored original art, not copies of Final Fantasy/Square Enix characters, logos or proprietary game UI.

| Asset | Production method | Count / format | Where used | Phase |
|---|---|---|---|---|
| Golfer avatar portraits | **Text-to-image** original consistent series | 6–12 portraits, square transparent or cutout WebP/PNG + 2x exports | Onboarding, Player Hub, profiles | Sprint 1 |
| Cinematic course key art | **Text-to-image** original dark golf landscapes, clean empty region for overlays | 2–3 wide compositions + mobile crops, AVIF/WebP | Welcome, Hub/chapters, milestones | Sprint 1 |
| Achievement medallion artwork | **Text-to-image** original base illustration motifs; standardized crop and tier styling | 4–6 motifs, transparent if viable | Achievements, milestone celebrations | Sprint 1–2 |
| Skill discipline emblem illustrations | **Text-to-image** optional small asset family after UI proof | Driving, irons, woods, short game, putting, strategy | Skill branch identity | Sprint 2 |
| Decorative illustrated frames/textures | **Text-to-image** only when code gradients insufficient | Small background textures, not text-bearing screenshots | Header and scene atmosphere | Optional |
| Sphere Grid itself, nodes/edges, lock states, cursor | **Code** (SVG/Canvas/React Flow after evaluating dependencies) | Dynamic graph + reusable node components | Interactive skill tree | Sprint 2 |
| XP bars, stats, distance charts, bag dispersion, shot data HUD | **Code** (React, CSS, SVG/chart lib) | Responsive data-driven UI | Player Hub, My Bag, Studio | Sprint 1–3 |
| Navigation, onboarding choice cards, dropdowns, CTAs, accessibility | **Code** using existing shadcn/Radix/Tailwind | Stateful components | All screens | Sprint 1 |
| Level-up particles, badges states, glow, menu transitions | **Code** (CSS/Web Animations/motion library; reduced-motion) | Stateful effects | Milestones and interactions | Sprint 1–2 |
| Swing skeleton, angle overlays, video scrubber and trim handles | **Code** (SVG/Canvas + video processing) | Interactive data-driven overlay | Swing Studio | Sprint 3 |
| Club icons and simple utility symbols | **Code** (Lucide/custom SVG) | Scalable vector assets | Bag, forms, navigation | Sprint 1–2 |

**Asset creation workflow:** approve one **Player Hub art direction** first → design avatar/style guide → generate consistent original asset family → select finalists → crop/optimize → assign descriptive filenames and metadata → integrate with actual screens → audit file size, accessibility, and low-light/outdoor legibility. Never place labels, score numbers, or UI buttons inside generated imagery.

**Suggested initial generated asset brief:** “Premium cinematic golf adventure, mature sports RPG; near-black/charcoal #1A1A2E, emerald greens, restrained warm metallic gold, realistic athletic atmosphere, subtle ambient mist and light, elegant negative space for legible UI, original characters, no copyrighted game visual elements, no letters/UI text, consistent lighting across series.” All final assets require design review and explicit approval before implementation.

**First asset deliverables:** one Player Hub scene; six avatar portraits; one original mastery medallion series. Do **not** generate 30 backgrounds before component layouts are stable.

## 6. Feature notes and implementation boundaries from product discussion

### A. TrackMan screenshot import — near-term calibration feature

User flow: **Take range screenshot → select image → extract visible text/table data → review editable structured fields → associate with golf session, club, optional swing video → save as imported measurements**.

- Capture source brand, source type, session datetime, device, original image, extracted text, confidence, and user corrections. Metrics may include club speed, ball speed, smash factor, club path, swing direction, attack angle, carry, total, launch and spin **only when explicitly present**.
- Unit metadata required (mph vs km/h, yards vs meters, degrees, rpm). Distinguish **one-shot rows vs aggregate averages**, actual carry vs total, and unavailable values.
- Screenshots are imperfect and may lack exact shot/video pairing. Attach to **session by default**; link to an individual swing only by user selection or trustworthy synchronized identifiers.
- First prototype: manual confirmation mandatory, deterministic parsing for recognizable layouts + optional OCR/text extraction; don't silently fabricate missing data. The cloud/inference cost of OCR or vision APIs must be benchmarked separately.
- **Do not promise official TrackMan API access.** Screenshot import is an independent, user-supplied data workflow; research license/ToS before branded integrations.

### B. “Map Your Bag” — first useful baseline

Use existing GolfClubs page/context as starting point. Add bag setup (which clubs actually owned), loft/notes optional, carry distance samples per club, median/dispersion and confidence/sample count, optional launch monitor import and date.

- Avoid representing `maxDistance` as an accurate *typical carry*.
- Allow users to start with unknown distances and fill in later; support half/three-quarter/full swing notes for wedges.
- Suggested My Bag view: each owned club, typical carry (or “not calibrated”), confidence, common miss, recent trend, **Calibrate** action.
- Onboarding calibration can award engagement XP but **not mastery** without evidence.

### C. Swing Studio — functional vertical slice after core loop

- Record/upload → quick trim with thumbnails and start/end handles → preview/scrub → choose club and camera view → analyze → results/drills/thoughts → save to session → compare.
- Comparisons: same user's before/after first; optional coach reference; professional library only where rights/permission exist.
- Synchronize at identifiable *swing phases* (address/top/impact/finish) rather than blindly aligning timestamps; camera angle, handedness, perspective, club and frame rate should be matched or warned about.
- MediaPipe/2D landmarks may support observable angles and displacement, but **cannot directly measure actual TrackMan club path/clubface/spin or guarantee a correct diagnosis**. Show model/metric confidence and limitations.
- First build an uploaded-video comparison and manual phase markers before expensive GPU biomechanics.

### D. RPG progression and quests

- **XP = participation/consistency**, with idempotent XP ledger. **Mastery = verified improvement** from repeatable tests, measured ranges and scoring—not simply uploads or check-ins.
- Map the five-day golf practice system from `docs/golf/01-FIVE-DAY-PRACTICE-SYSTEM.md`: Monday mechanics 60m; Tuesday short game 30m; Wednesday bag progression 60m; Thursday calibration 30m; Friday course simulation 60m.
- Make missions specific to the player's top concern. Example for slice: baseline shot pattern, controlled drill, retest, log dispersion and one swing thought.
- Separate **performance mode** (one compact cue on course) from **lab mode** (analysis, measurement and reflection at practice). Preserve instructor notes and user corrections.

### E. Future feature backlog (do not block Sprint 1)

Manual/AI shot tracing; scorecard + GPS/round clips; creator-style post-round recaps; social feed, friends, badges, competitions and leaderboards; advanced cloud biomechanics; professional swing library; wearable integrations. Keep clear opt-in sharing and rights protections.

## 7. Reuse strategy: what to take from other projects

- Existing Forge Fit `GolfClubs.tsx`, `GolfSessions.tsx`, `GolfContext.tsx`, `GolfProgressionContext.tsx`: **reuse and evolve**, avoid parallel duplicate data models.
- `joebochill/swingessentialsapp`: study camera timers, capture and upload UX; native React Native dependencies are **not** drop-ins for current Vite web app.
- `HeleenaRobert/golf-swing-analysis`: reuse learnings on MediaPipe joint geometry; assess accuracy, licensing, Python-to-web boundary.
- `Pieter-stack/TopShots`: patterns for scoring/competitions, not current P0.
- `GolfPosePro`/`Pose2Par`: reference concepts for phase detection and advanced biomechanical analysis; validate licenses, model performance and costs.
- For libraries, prefer browser-native file/video inputs and code-driven overlays for web first; evaluate FFmpeg.wasm, WebCodecs, MediaPipe Tasks, and server workers based on real device benchmarks. **No blind copy/paste or license assumptions.**

## 8. Team work allocation and next PRs

| Team owner | Task | Artifact |
|---|---|---|
| Product lead | Confirm sports RPG identity, first-run baseline choice and level vs mastery rules | Approved one-page journey + success definition |
| Designer / creative | Premium Hub screen, tokens, avatar and course art direction | Figma/mockup + image generation prompts + asset naming contract |
| Frontend | Multi-select onboarding, first quest flow, navigation states, old/new golf UI reconciliation | Working mobile web demo and component tests |
| Backend/data | Future-proof schema for player, goal, concerns, quest, session, club, media, measurement imports, XP events | TypeScript interfaces + migrations/persistence plan |
| CV/AI | Spike with 5–10 user-supplied swing clips; distinguish landmark extraction vs coaching; screenshot import prototype | Quality/latency/cost benchmark and confidence report |
| QA | Onboarding/quests/blank screens; cross-device safari/chrome; recoverability and idempotence | Repro steps and pass/fail matrix |

**Suggested PR sequence:** (1) docs/status reconciliation + branch/deploy inventory, (2) tokens + high-fidelity Hub and asset scaffolding, (3) multi-select + first-quest generation + persistence integrity, (4) session/quest linkage and navigation audit, (5) calibration chooser and My Bag, (6) screenshot import and Swing Studio proof-of-concept.

## 9. Questions and explicit open decisions

1. Is production deployed from `main`, the V2 feature branch, or a detached SHA?
2. Is Forge Fit Golf a module inside the existing broader fitness product or a long-term separate experience?
3. Primary platform for MVP: responsive web/PWA first or mobile-native? Current repo is web.
4. Which club data import formats are approved besides user-provided TrackMan screenshots (CSV, manual input)?
5. Are raw swing videos retained indefinitely, briefly, or user-configurable? Define consent, deletion and storage budgets.
6. Is the initial pro-reference library limited to licensed/instructor-contributed clips?
7. Who signs off on the visual direction and image asset usage rights?
8. Which beta metrics matter most: first quest completion, second session retention, first calibrated bag, first saved swing, or AI analysis volume?

## 10. Exit checklist

- [ ] Deployment branch/commit confirmed and preview environment documented
- [ ] Sprint statuses reclassified as implemented / partial / not started / needs verification
- [ ] Updated multi-select model and primary priority shipped
- [ ] A user who completes onboarding is given a specific first quest
- [ ] Guided quest completes via session log and returns user to Hub
- [ ] XP event is unique/idempotent and persists; mastery remains evidence-driven
- [ ] All main paths tested for blank/empty/loading/error states
- [ ] Player Hub visual reference and first illustration batch approved
- [ ] Data contracts allow screenshot import, bag calibration and video attachments
- [ ] UI respects mobile outdoor readability and accessibility
- [ ] V2 deployment or merge proposed only after regression check

---

### Related repo documentation

- [Sprint plan](./SPRINT_PLAN.md)
- [Readiness review](./SPRINT_READINESS_REVIEW.md)
- [RPG vision](./RPG_VISION.md)
- [Square Enix UI research](./SQUARE_ENIX_UI_RESEARCH.md)
- [Color palette](./COLOR_PALETTE.md)
- [Onboarding spec](./specs/ONBOARDING_SPEC.md)
- [Quest definitions](./specs/QUEST_DEFINITIONS.md)
- [Mastery spec](./specs/MASTERY_SYSTEM_SPEC.md)
- [Swing AI analysis](./SWING_AI_ANALYSIS.md)

**Review caveat:** observations from the user's videos reflect those recordings, not a reproducible production QA run; implementation findings reflect code read from the named GitHub commit, not unexamined runtime state.
