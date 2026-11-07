# Forge Fit Golf — Master UX Sitemap & User Journeys (Approved v1)

**Approved:** 2026-11-07 | **Branch:** `feature/forge-fit-golf-v2-sprint1` | **Status:** UX specification for design and implementation planning, **not** authorization to alter application code or backend.  
**Source:** Approved 326-line Forge Fit Master UX Blueprint v1.0 prepared from V2 source, `RPG_VISION.md`, `GOLF_WIREFRAME.md`, `SPRINT_PLAN.md`, onboarding/quest specs, and three user-supplied screen recordings. This repository edition preserves the approved information architecture, screen list, nine journeys, experience principles, and design gates in a team-oriented form. The original full-length blueprint remains available as the separately delivered review artifact.

## 0. Product north star

**“Build your golfer.”** Premium cinematic sports RPG: premium real-world sport UX in Home/Train/Studio/Play; expressive RPG moments in the skill tree, level-ups and achievements. **XP reflects participation; mastery reflects evidenced performance**, not video uploads or questionnaire answers. Support golfers without TrackMan, a swing video, or measured club distances. No artwork generation during this workstream.

Principles: one clear primary action per page; optional progressive calibration; provenance and uncertainty shown for imported/AI metrics; usable outdoors and one-handed; preserve club/session/quest/video context; every path has loading, empty, error, denied and retry states; never offer a dead-end CTA.

## 1. Primary IA and route groups

**Persistent mobile bottom navigation: Home | Train | Studio | Play | Profile.** Avoid crowding primary navigation with My Bag, calibration and history; expose them as contextual destinations and deep links.

```text
Forge Fit (existing wider fitness product)
└── Golf mode
    ├── First-run / Entry (outside main tab shell)
    │   ├── Welcome
    │   ├── Mission / score goal
    │   ├── Frequency
    │   ├── Multiple improvement concerns → primary focus
    │   ├── Player identity, avatar, handedness, experience/handicap
    │   ├── Optional notifications
    │   ├── Calibration choice: Swing / TrackMan / Map Bag / Skip
    │   └── First-quest reveal → Player Hub
    ├── HOME
    │   ├── Player Hub (level, XP, today’s quest, progress, CTA)
    │   ├── Quest summary and relevant next action
    │   └── Recent history / milestone detail
    ├── TRAIN
    │   ├── Training overview / weekly plan
    │   ├── Quest Log → Quest detail → Today’s Mission
    │   ├── Guided Session → Drill / task detail → Log/reflect → Completion
    │   ├── Drill Library → Drill detail
    │   └── Skill Tree → Skill node → Evidence and unlock requirements
    ├── STUDIO
    │   ├── Swing Library
    │   ├── Record / Upload → Trim → Video preview / club / camera view
    │   ├── Analyze → Results (Analysis / Drills / Thoughts)
    │   ├── Compare (before/after, coach, licensed pro references)
    │   └── TrackMan screenshot import → Review & correct → Link data
    ├── PLAY
    │   ├── Rounds / history
    │   ├── Start round → Active scorecard → Hole detail / optional clip
    │   └── Round completion → Reflection / achievements
    └── PROFILE
        ├── Character / goals / skill summary
        ├── My Bag → Bag setup → Club detail → Calibrate club
        ├── Progress history (quests, sessions, swings, metrics, XP)
        ├── Achievements
        └── Settings / privacy / media / notifications
```

The navigation tree is the **target experience**, not a claim that each route currently exists.

## 2. Screen inventory and phase gates

**Key:** V2=known from reviewed branch, LEGACY=existing golf UI, DESIGN=proposed not verified implemented. States/variants are not necessarily separate routes.

| ID | Screen / state | Zone | Source status | Design priority |
|---|---|---|---|---|
| O01 | Welcome | Entry | V2 | P0 |
| O02 | Score mission selection | Entry | V2 | P0 |
| O03 | Practice frequency | Entry | V2 | P0 |
| O04 | Multi-select concerns and primary concern | Entry | V2 single-select; revise | P0 |
| O05 | Avatar/profile/handedness/handicap | Entry | V2 | P0 |
| O06 | Notification prompt | Entry | V2 | P1 |
| O07 | First quest reveal | Entry | V2 welcome; connection incomplete | P0 |
| C01 | Calibration choice (swing / data / bag / skip) | Entry | DESIGN | P0 |
| H01 | Player Hub | Home | V2 `PlayerHub.tsx` | P0 |
| H02 | Recent activity / milestone details | Home | V2 summary; details DESIGN | P1 |
| T01 | Training home / weekly schedule | Train | DESIGN + legacy training | P0 |
| T02 | Quest Log | Train | V2 context; complete page DESIGN | P0 |
| T03 | Quest detail / mission schedule | Train | DESIGN | P0 |
| T04 | Guided mission | Train | DESIGN | P0 |
| T05 | Session log and reflection | Train | LEGACY `GolfSessions.tsx` | P0 |
| T06 | Session complete / XP and evidence | Train | DESIGN | P0 |
| T07 | Drill library / detail | Train | DESIGN | P1 |
| T08 | Skill Tree / node detail | Train | Vision only for full sphere grid | P1 |
| S01 | Swing Library / Studio landing | Studio | DESIGN | P1 |
| S02 | Upload / record | Studio | DESIGN | P1 |
| S03 | Trim / preview and metadata | Studio | DESIGN | P1 |
| S04 | Processing/status/errors | Studio | DESIGN | P1 |
| S05 | Analysis / drills / thoughts | Studio | Competitor flow analyzed; DESIGN | P1 |
| S06 | Swing comparison | Studio | DESIGN | P1 |
| S07 | TrackMan screenshot review | Studio | DESIGN | P1 |
| P01 | Rounds landing | Play | DESIGN | P1 |
| P02 | Round setup | Play | DESIGN | P1 |
| P03 | Active scorecard and hole view | Play | DESIGN | P1 |
| P04 | Finish / round reflection | Play | DESIGN | P1 |
| R01 | Character / golfer profile | Profile | V2 data + existing screens | P0 |
| R02 | My Bag list / setup | Profile | LEGACY `GolfClubs.tsx` | P0 design / P1 functional |
| R03 | Club detail and distance samples | Profile | LEGACY editing; extend | P1 |
| R04 | Progress / history | Profile | Existing partial logging | P1 |
| R05 | Achievements | Profile | Existing/vision partial | P1 |
| R06 | Settings, privacy, export | Profile | Existing general settings; golf needs review | P1 |

**UX acceptance:** every screen has a visible purpose, player question answered, primary CTA, secondary action, loading/empty/error and back/exit behavior, event names, and handoff data. Pages should be reachable through the intended navigation—not only by ad hoc internal state.

## 3. Screen responsibilities and visual hierarchy

- **Home:** character/level, XP-to-next-level, mission in progress, one strong Continue Training CTA, relevant mastery summary, optional stat tiles, last session. Avoid a wall of equivalent cards.
- **Train:** what/why/how long; schedule, relevant drill, completion evidence, progress, save; distinguish Practice Lab from Play mode.
- **Studio:** capture/import → trim → club/view tags → evidence-based analysis → specific drills → save/compare. Mark missing swing phases or uncertain AI results.
- **Play:** quick scoring with sunlight-ready contrast and large targets; minimizes technical prompts mid-round.
- **Profile:** player identity, goal edits, My Bag, measurements and source provenance, personal history, achievements, privacy.
- **My Bag:** owned clubs and *typical carry* with sample count and confidence. Unknown is acceptable; do not mistake maximum distance for average carry.
- **Comparison:** align by swing phase and explain limits of perspective, camera view, handedness, club and reference-footage rights.

## 4. Nine canonical journeys

### J01 — New golfer, no hardware (P0)
Welcome → score goal → multiple concerns + primary priority → profile → Calibration Choice → **Skip** → provisional **Contact Fundamentals** quest → guided mission → log results/reflection → unique XP credit → Hub next action. **Success:** first value without any TrackMan, video or bag-yardage data.

### J02 — Improving golfer with TrackMan (P1)
Onboarding/Hub → Calibration Choice → upload TrackMan screenshot → extracted values **reviewed and edited** → choose club and session → save with source/units/shot-vs-aggregate distinctions → relevant quest suggestion → view in history. Never assume screenshot identifies a specific video.

### J03 — Bag mapping without TrackMan (P0 design/P1 implementation)
Profile/Calibration → choose owned clubs → set first approximate carry or unknown → add observed samples → view typical carry and confidence → use calibrated bag for recommendations. User may calibrate one club at a time.

### J04 — Swing analysis learner (P1)
Studio → select video or capture → trim swing → select club and view → analyze → show reliability and limits → assessment / drills / swing thoughts → attach to session → schedule recommended training.

### J05 — Before/after swing comparison (P1)
Studio Library → choose two user's clips → confirm comparable views/clubs → synchronize address/top/impact/finish phase markers where possible → scrub/slow motion/annotate → save observations. Pro or coach references require authorized content.

### J06 — Guided five-day practice (P0)
Home → Today's Quest → Monday 60m mechanics, Tuesday 30m scoring, Wednesday 60m bag progression, Thursday 30m calibration, Friday 60m simulated play → complete/log evidence for each → progress updates → return to next day's quest. Allow shortened sessions/skip/reschedule; don't penalize injury/rest days.

### J07 — Round / training transfer (P1)
Play → start round → score holes with minimal taps → optional relevant clip → finish → reflection and performance summary → connect round to a goal and any proven achievement.

### J08 — Long-term progression (P1)
Home / Profile History → view score, club, swing and session trends with dates, sources and uncertainty → inspect linked evidence → prioritize next quest. XP activity and mastery outcomes must be displayed separately.

### J09 — Coach reference / lesson (P2)
Studio/Training → choose coach-owned or licensed reference → compare aligned phase, annotate instructor cues → plan drill → record retest → note improvement. No unauthorized copying of professional video libraries.

## 5. Onboarding decision logic: UX contract, not diagnostic AI

Collect: **one score mission**, **many selected concerns**, **one primary concern**, experience/handicap if known, practice cadence, handedness, avatar. Explicitly label all as **self-reported**.

After onboarding:
1. Show immediate player identity/Level 1 acknowledgement.
2. Offer optional baseline: **Analyze Swing / Import Launch Monitor / Map My Bag / Skip for Now**.
3. Create a safe provisional quest using primary concern and available time; show why it was selected.
4. Always provide **Start Today's Mission**, **Change Focus**, and **Calibrate Later**.
5. For new players, prefer basic contact/short-game tasks; for TrackMan users, use confirmed observations. Never imply handicap or club path was computed from a questionnaire.

**Example mapping** (proposals for testing): Poor Contact → Contact Fundamentals; Slice → Directional Control; Putting → Distance Control; Short Game → Touch Around the Green; Consistency → Repeatable Pre-shot Routine. The presence of multiple concerns should not generate competing primary missions.

## 6. Shared components (code/visualization ownership only)

All interactive elements and measurements are **code-based**: shell and five-tab navigation; goal/multi-select cards; quest timeline; session checklist; XP ledger and level indicator; evidence badges; club list/yardage chart; photo upload/confirmation form; video scrubber/trim handles; pose overlay; before/after split viewer; scorecard; and Skill Tree SVG nodes/edges/pan/zoom. Generated imagery and detailed art briefs are **out of scope here** and will be created in a separate art-direction workstream.

Critical component contracts: responsive phone-first, readable outdoors, semantic labeling, stable loading/empty/retry states, no generic success feedback before save completes, analytics events for funnel analysis, and meaningful user-initiated exits.

## 7. Interaction and navigation rules

- Keep primary tab context when entering/exiting subflows; avoid nested back-button loops.
- Preserve unsaved trims, session draft, photo review, and selected clubs when interrupted; confirm before destructive discard.
- No empty Player Hub quest directly after onboarding (unless explicitly opted out). A skipped calibration still creates a mission.
- An incomplete screen should have an honest “Coming soon”/waitlist or disabled CTA—not a blank view.
- Each import shows source, measurement timestamp, units and editable accuracy review.
- Privacy: video private by default, optional sharing, clear retention/delete/export. Coach/pro comparison rights require review.
- Every data chart requires labels, units, dates, missing-value treatment and provenance.
- Support reduced-motion users; gold/glow animations celebrate milestones but do not obscure primary actions.

## 8. Success signals

Track: onboarding start/completion and drop-off by step; percentage reaching first quest; calibration option selection and skip rate; first practice session completion; day-7 retained active practice; return to second quest; screenshot review correction rate; My Bag clubs calibrated; first swing saved; first comparison created; failed/dead-end navigation.

The goal is **repeated meaningful training**, not maximizing upload volume or celebratory XP.

## 9. Design work sequence and gates

**Gate A — Sitemap approved (this document):** five tabs, entry flow, 33 screen/state groups and nine journeys.  
**Gate B — Low fidelity:** wireframe full J01 first-run loop, then J02–J06; test 1-handed outdoor use and error cases.  
**Gate C — High fidelity:** premium Player Hub as design north star and coherent component tokens; **artwork/asset prompt generation remains separate**.  
**Gate D — Clickable UX prototype:** prove no dead ends; accessible text, states and focus transitions.  
**Gate E — Implementation tickets:** reconcile V2 branch actual code vs vision, assign owner, verify deployed SHA, scope minimal persistence and analytics before heavy AI development.

**Do not treat design approval as proof of backend quality or implemented video/AI capabilities.**

## 10. Repository grounding and follow-ups

Present in V2: `GolfOnboarding.tsx`, `PlayerHub.tsx`, `GolfProgressionContext.tsx`, `progressionUtils.ts`, and CSS theme changes. Existing mainline golf UI: `GolfDashboard.tsx`, `GolfSessions.tsx`, `GolfClubs.tsx`, `GolfTrainingPath.tsx` and `GolfMissCorrection.tsx`. The full Studio, TrackMan screenshot workflow, new round UX, interactive Sphere Grid, and calibration choice are **proposed, not verified shipped**.

Related: [RPG vision](./RPG_VISION.md), [Sprint plan](./SPRINT_PLAN.md), [Sprint 1 review](./SPRINT_1_V2_REVIEW_2026-11-07.md), [Onboarding spec](./specs/ONBOARDING_SPEC.md), [Quest definitions](./specs/QUEST_DEFINITIONS.md), [Existing golf wireframe](./GOLF_WIREFRAME.md).

## 11. Open decisions (non-blocking for this push)

- Verify which branch/commit serves each live environment; GitHub does not prove production deploy source.
- Product-level decision: golf as a mode within Forge Fit vs eventually its own app; current UX assumes a golf mode.
- Mobile-first responsive web/PWA is the present codebase; native-store wrapper/React Native remains research, not a Sprint 1 dependency.
- Club and imported launch-monitor data retention, consent and potential third-party branding restrictions.
- First beta experiment: can a novice complete J01 without help? Can an intermediate golfer reach J02 without confusion?

**Approved scope boundary:** this document fixes the UX north star and page responsibilities; not backend architecture, text-to-image generation, or app-store release planning.
