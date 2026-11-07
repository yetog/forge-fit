# Forge Fit — Player Hub + First Mission | Low-Fidelity UX v1

**Date:** 2026-11-07  
**Design stage:** Low-fidelity wireframes; user review required before high-fidelity art or code implementation.  
**Platform:** Mobile-first responsive web/PWA. Suggested reference viewport: 390×844 CSS px; adapt desktop later.  
**Source:** [Approved Sitemap](../UX_SITEMAP_USER_JOURNEYS_V1.md), [Hub-First User Journey](../UX_FIRST_VISIT_RETURNING_RANGE_JOURNEY_V1.md), [RPG Vision](../RPG_VISION.md), [Quest Definitions](../specs/QUEST_DEFINITIONS.md), [Sprint 1 Review](../SPRINT_1_V2_REVIEW_2026-11-07.md).  
**Priority:** Player Hub first after onboarding. Swing calibration is an optional, dismissible CTA **inside Hub**. No graphics generated in this document.

## 1. First-visit journey map

```text
Onboarding completed
   ↓
Level 1 reveal (brief; skip animation)
   ↓
[H01] PLAYER HUB — first-run
   │  ├── Primary: START FIRST MISSION ──────┐
   │  ├── Secondary: Analyze Swing (optional) │
   │  ├── Optional: My Bag / Range Data       │
   │  └── Dismiss calibration hint            │
   │                                        ↓
   │                                  [T03] MISSION BRIEF
   │                                  What / why / time / equipment
   │                                        ↓
   │                                  [T04] GUIDED SESSION
   │                                  Steps & practice timer
   │                                        ↓
   │                                  [T05] SESSION REVIEW
   │                                  Reflections; optional media
   │                                        ↓
   └─────────────────────────────── [T06] COMPLETION
                                   XP once; mastery evidence status
                                             ↓
                                        [H01] HUB
                                        Next clear action
```

## 2. H01 — Player Hub (first entry)

**What users should feel:** “I have a golfer, a goal, and one achievable action.” Avoid a metric-dense wall. Main CTA must appear without scrolling at the reference mobile size.

```text
┌────────────────────────────────────────┐
│ FORGE FIT  /  GOLF                 [⚙]  │   ← app identity / settings
│                                        │
│ [avatar]  LEVEL 01 — ROOKIE            │   ← identity hero
│           [████░░░░░░]  XP progress    │
│           Your goal: Break 100         │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │  TODAY'S FIRST MISSION             │ │
│ │  Contact Fundamentals              │ │
│ │  “Build repeatable center strike”  │ │
│ │  ⏱ 15 min    ◉ Beginner-friendly  │ │
│ │                                    │ │
│ │  [       START MISSION        ]    │ │   ← only visually dominant CTA
│ └────────────────────────────────────┘ │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │  🎥 WHAT'S YOUR SWING LIKE?     [×]│ │   ← never mandatory
│ │  Upload a clip for a starting point│ │
│ │  [Analyze Swing]   [Maybe Later]   │ │
│ └────────────────────────────────────┘ │
│                                        │
│  QUICK PATHS                           │
│  [Log Practice]   [My Bag]             │
│  [Import Data]    [View Progress]      │
│                                        │
│ Home    Train    Studio    Play Profile│   ← persistent tab bar
└────────────────────────────────────────┘
```

**Hierarchy:** primary quest = 1st; identity/XP = 2nd; swing hint = 3rd; quick shortcuts = 4th. On a short phone, push quick paths below fold rather than shrinking primary CTA or body type.

**Content rules:**
- Dynamic name/goal/quest from onboarding; example text not universally hard-coded.
- First mission assigned immediately. If quest assignment fails, recovery CTA “Choose your first mission”, not a blank card.
- XP progress counts actual awarded events; do not show fabricated mastery gains.
- Swing hint dismissal persists; Studio remains accessible in navigation; reminder can return contextually later, never nag constantly.
- All actions are accessible by large tap targets and screen reader labels.

### H01 state variants

| State | Hero content | Main CTA | Supporting UX |
|---|---|---|---|
| First-ever Hub | First quest created | **Start Mission** | Swing hint visible unless dismissed |
| Returning, quest incomplete | Current quest, next task | **Continue Mission** | Show last saved progress, not onboarding |
| Returned from range without log | Current quest + log reminder | **Log Past Session** contextual secondary; current quest primary | No forced timer; custom past date |
| Session draft exists | In-progress draft summary | **Resume Draft** when appropriate | Discard confirmation |
| Quest completed | Achievement/last mission summary + next quest | **Next Mission** | XP history remains available |
| Swing analysis pending | Small per-video status | Quest action unaffected | “Review once ready” |
| Error retrieving data | Recovery UI | **Retry / Continue Offline** | Never blank screen |

## 3. T03 — Mission Brief (first mission)

**Goal:** express a physically doable instruction without long instructions; no launch monitor needed.

```text
┌────────────────────────────────────────┐
│ [← Hub]    MISSION 01 / CONTACT        │
│                                        │
│ CONTACT FUNDAMENTALS                   │
│ Why? You chose Poor Contact.          │
│                                        │
│ ⏱ About 15 min   ⛳ Range or practice │
│ Equipment: Any short iron; balls      │
│                                        │
│ OBJECTIVE                              │
│ Track your contact on 10 easy swings  │
│ — aim for repeatability, not power.   │
│                                        │
│ TODAY'S STEPS                          │
│ □  1. Warm up & rehearse (3 min)      │
│ □  2. Controlled contact set (8 min)  │
│ □  3. Reflection & retest (4 min)     │
│                                        │
│ [          BEGIN SESSION          ]    │
│ [Save for Later]                       │
│                                        │
│ Home    Train    Studio    Play Profile│
└────────────────────────────────────────┘
```

**Avoid unqualified biomechanical assertions:** this starter task is a provisional training activity, not a medical/coach diagnosis. The actual drill library and coach review should validate technique details.

## 4. T04 — Guided Mission (active)

```text
┌────────────────────────────────────────┐
│ [×]  CONTACT FUNDAMENTALS    Step 2/3  │
│ [████████░░░░░]  PROGRESS               │
│                                        │
│  CONTROLLED CONTACT SET                │
│  Hit 10 comfortable short-iron shots.  │
│  Notice contact quality and direction. │
│                                        │
│  TIMER  06:24                  [Pause] │
│                                        │
│  SHOTS COMPLETED                       │
│       [ − ]      6 / 10      [ + ]    │
│                                        │
│  OPTIONAL QUICK NOTES                  │
│  [Solid]  [Thin]  [Heavy]  [Other]     │
│  [Add a thought / voice note later]    │
│                                        │
│ [          NEXT STEP              ]    │
│ [Skip / Shorten Session]               │
│                                        │
│ [Saved locally / pending sync]         │
└────────────────────────────────────────┘
```

**Usability:** support non-timed practice and pause/resume. Do not conflate pressing “Next Step” with completing a real session; reward follows explicit completion/review. A golfer can leave the range mid-session and resume later. Drafts should survive ordinary navigation; show true save state.

## 5. T05 — Session Review / Log Practice

```text
┌────────────────────────────────────────┐
│ [←]  REVIEW YOUR PRACTICE              │
│                                        │
│ Contact Fundamentals · Today            │
│ Duration  [15 min ▾]   Clubs [7 iron ▾]│
│                                        │
│ What felt better today?                │
│ [ Brief answer...                    ] │
│                                        │
│ Most common miss?  [Thin ▾]            │
│ Confidence?         [1 ··· 10]        │
│                                        │
│ OPTIONAL EVIDENCE                      │
│ [+ Add Swing Video]   [+ TrackMan Pic] │
│ [+ Bag Carry Sample]                   │
│ “You can add these later.”             │
│                                        │
│ [        COMPLETE PRACTICE        ]    │
│ [Save as Draft]                        │
└────────────────────────────────────────┘
```

**Required for practice XP:** meaningful completion criteria established in XP spec; do not gate basic training credit on uploading video/screenshots. Edits preserve previously recorded fields. A past-session entry uses selectable date/time and same review model.

## 6. T06 — Completion / Reward

```text
┌────────────────────────────────────────┐
│                ✦                       │
│          PRACTICE COMPLETE             │
│                                        │
│ CONTACT FUNDAMENTALS · Session 1       │
│ + [XP from official XP spec]            │
│                                        │
│ TRAINING PROGRESS                      │
│ ✓ Session saved                        │
│ ◌ Mastery baseline: Needs more tests   │
│                                        │
│ NEXT RECOMMENDATION                    │
│ Repeat this test / Continue next quest │
│                                        │
│ [           RETURN TO HUB         ]    │
│ [View Session Details]                 │
└────────────────────────────────────────┘
```

Use one idempotent XP award per qualifying event. Mastery does not rise just because the user pressed Complete. Avoid claiming that AI verified technique without actual supported evidence.

## 7. H01 — Returning golfer after the range

```text
┌────────────────────────────────────────┐
│ FORGE FIT / GOLF                   [⚙] │
│ [Avatar] LVL 04  XP [█████░░░░]       │
│                                        │
│ READY FOR YOUR NEXT ROUND OF WORK?     │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ NEXT QUEST: Driver Direction       │ │
│ │ [CONTINUE TRAINING]                │ │
│ └────────────────────────────────────┘ │
│                                        │
│ BACK FROM THE RANGE?                   │
│ Log practice even if you did not start │
│ a session timer.                       │
│ [LOG PAST SESSION]                     │
│                                        │
│ LAST PRACTICE                          │
│ Friday · 45 min · Driver / 7i          │
│ [Review 2 videos] [Range data: 1]     │
│                                        │
│ [My Bag] [Progress History]            │
│ Home    Train    Studio    Play Profile│
└────────────────────────────────────────┘
```

**Returning journey:** Hub → Log Past Session → add range date/duration/clubs/focus → attach trimmed videos and/or screenshots (optional, any order) → user verifies extracted data → save → practice XP once → optional analysis → drill feedback → next mission. A session saved with pending/failed analysis remains valid and reviewable. A screenshot may represent session averages, so never pretend an exact shot-to-video pairing without evidence.

## 8. Cross-screen behavior contracts

| Trigger | Destination | Return target | Failure/recovery |
|---|---|---|---|
| Start Mission | T03 → T04 | Hub/Train | Resume active draft |
| Complete session | T05 → T06 → Hub | Hub | Save error with retry; no premature XP |
| Analyze Swing hint | Studio upload flow | Hub or originating session | Unsupported format/error; can still practice |
| Log Practice quick action | Session entry/review | Hub | Draft recovery |
| Add video from Session Review | Studio trim/tag | Session draft with clip | Original draft preserved |
| Import TrackMan screenshot | Image review/confirm | Session draft or My Bag | OCR correction; manual fallback |
| My Bag | Profile > Bag | Hub or Profile | Unknown clubs/distances allowed |
| View progress | History | Hub | Explain missing evidence |

## 9. Proposed component mapping for V2

**Reuse:** `GolfOnboarding.tsx`, `PlayerHub.tsx`, `GolfProgressionContext.tsx`, `GolfSessions.tsx`, `GolfClubs.tsx`, existing Radix/Tailwind primitives.  
**Add/modify after design approval:** `FirstMissionCard`, `SwingCalibrationHint`, `MissionBrief`, `GuidedMissionStep`, `PracticeReview`, `SessionCompletion`, `ReturnFromRangeCard`, `SaveStatus`, `XPEventSummary`.

**No generated artwork required to approve low-fidelity flows.** Once layout is approved, hand off actual safe areas, ratio and art slots to [Gemini Gem brief](./GEMINI_GEM_ART_DIRECTION_AND_ASSET_PROMPTS_V1.md).

## 10. Low-fi test plan and design acceptance

### Moderated test A — beginner
Have user finish onboarding and answer “What would you do next?” without coaching; first quest CTA found quickly; optional swing calibration never blocks action; complete guided mission and return to hub; no fabricated mastery.

### Moderated test B — returning range golfer
Player returns with 3 short videos and TrackMan session screenshot, enters Log Past Session, associates footage + edited numeric data to one session, completes log, sees XP once, optionally requests AI analysis and returns to Hub. No video-to-single-shot auto-link without evidence.

### Failure states to demonstrate
- Dismiss swing hint, reload.
- Leave a mission halfway and reopen.
- Skip video import entirely.
- Import unreadable screenshot; user edits or manually enters results.
- Video upload fails while practice save succeeds.
- Complete twice/retry under slow connection; no duplicate XP.
- Navigate from Session Review to Studio and back preserving the session draft.

### Exit criteria for design signoff
1. Hub-first flow is unmistakable; one primary CTA on each screen.
2. All main paths reach meaningful screens; no dead ends.
3. Optional calibration never blocks progress.
4. Returning golfers can log real-world practice without a timer.
5. XP and mastery claims are comprehensible and trustworthy.
6. Outdoor usability and basic accessibility considered.
7. First/returning states approved before any full art-generation batch.

## 11. Decision checklist for next review

- [ ] Approve Hub content order and above-the-fold placement.
- [ ] Approve starter mission type, flexible length and expected user effort.
- [ ] Approve “What's your swing like?” copy and dismissibility.
- [ ] Approve Session Review contents and XP moment.
- [ ] Approve returning user's “Log Past Session” entry point.
- [ ] Confirm low-fi flow before high-fidelity renderings.

This file is a design artifact, not a claim that UI/code is implemented.
