# Forge Fit Golf — First Visit, Player Hub & Returning Range Journey (UX v1)

**Decision date:** 2026-11-07  
**Status:** UX design specification / proposal; not implemented or QA verified.  
**Overrides:** The calibration-before-Hub ordering in `UX_SITEMAP_USER_JOURNEYS_V1.md`. **The Player Hub is the FIRST screen after onboarding. Calibration is optional and initiated from the Hub.** Preserve the rest of the five-tab sitemap.  
**Product intention:** “Build your golfer.” Create an enjoyable loop of **practice → evidence → feedback → progress → next mission**, equally usable without a launch monitor.

## 1. Locked experience decisions

1. **Navigation:** Home (Player Hub) / Train / Studio / Play / Profile. My Bag and history are nested views and contextual shortcuts.
2. **First landing:** Onboarding ends with a light Level 1 welcome and automatically assigned **provisional personalized quest**, then enters **Player Hub**. Never force video or launch-monitor calibration to see the Hub.
3. **First-use hint:** On the Hub, an unobtrusive, dismissible card: “**What's your swing like?** Add a quick clip to see what you can work on.” Actions: **Analyze a Swing** (Studio upload), **Maybe Later**; nearby contextual shortcuts for **Map My Bag** and **Import Range Data**. Not a blocking modal.
4. **Personalization:** long-term score goal + multiple self-reported concerns + one primary focus + practice frequency. First quest uses these as preferences, not verified swing diagnosis.
5. **Data value:** range sessions may include **practice log, one or more videos, launch-monitor screenshots, club-level readings, user notes, and drills**—each optional and independently useful.
6. **Progression:** XP recognizes completed meaningful practice and follow-through. **No XP farming through duplicate uploads**. Mastery represents evidence-backed repeatable performance, never arbitrary subjective AI scores.
7. **Data integrity:** app should allow users to label an import as one shot, several shots, or a session summary; don't attach a screenshot automatically to an individual swing without reliable match metadata.
8. **Design tone:** premium, cinematic sports RPG; subtle fantasy only for XP, quests, nodes and milestones. Sunlight legibility and one-handed operation.

## 2. End-to-end journey A — first-time player

### Story
A new or intermediate golfer wants to improve, has limited time, and may have no footage or range measurements. They finish onboarding and understand exactly what to do next without feeling required to feed an AI.

```text
A01 Welcome
 → A02 Score goal (Break 100 / 90 / 80 / Scratch)
 → A03 Practice cadence
 → A04 Multi-select skill concerns
 → A05 Choose ONE primary focus
 → A06 Profile (display name, handedness, experience/handicap, optional avatar)
 → A07 Optional notifications (not a gate)
 → A08 “Your golfer is ready” / Level 1 reveal
 → A09 PLAYER HUB [always first landing]
        ├─ Featured: Today's Mission — Start Training
        ├─ Dismissible hint: “What's your swing like?” → Studio upload/trim
        ├─ Map Your Bag → My Bag
        ├─ Import Range Data → screenshot review
        └─ Do later (all optional)
 → A10 Start guided first mission
 → A11 Guided drill/session; no data hardware required
 → A12 Log duration, clubs, misses, feel, optional media
 → A13 Summary: practice XP and evidence status
 → A14 Player Hub updated with Next Mission
```

**First visit success:** user starts and completes a useful mission with no video, TrackMan or club distances; Hub shows real progress. The initial quest should be immediately actionable even if all calibration is skipped.

**Suggested Hub hero content (UX copy candidate):**
- Player: `LEVEL 01 · Your Journey` (dynamic, not hard-coded)
- Title: `Today's Mission: Contact Fundamentals` (example only; conditional on primary concern)
- Explanation: `You selected Poor Contact. Start with 15 minutes of center-strike practice.`
- Primary CTA: **Start Mission**
- Secondary lightweight card: `What's your swing like?` / `Analyze a Swing` / `Later`
- Lower actions: **Log Practice**, **My Bag**, **Import Range Data**, **View Skill Tree**
- No “No active quest” after successful onboarding unless user explicitly opts out; offer Create Quest fallback.

### Proposed onboarding field changes

```ts
type SelfReportedConcern =
  | "slice" | "hook" | "contact" | "distance"
  | "shortgame" | "putting" | "mental" | "consistency";

interface OnboardingPreferences {
  scoreGoal: "break100" | "break90" | "break80" | "scratch";
  selectedConcerns: SelfReportedConcern[];  // multi-select
  primaryConcern: SelfReportedConcern;      // must be selected
  practiceFrequency: string;
  dominantHand?: "left" | "right";
  handicapRange?: string;
  displayName?: string;
  avatarId?: string;
}
```

**Design rule:** if the user picks three concerns, do not produce three simultaneous main quests. Lead with the primary concern; show others as future progression areas. Allow change after onboarding.

### Onboarding/Hub page specifications

| ID | Page | Player question | Main action | Required states |
|---|---|---|---|---|
| A01 | Welcome | What is this app? | Begin Journey | Fresh, returning, interrupted |
| A02–A05 | Goals/concerns | Where am I headed and what holds me back? | Continue; rank primary | No selection, selected, disabled, backward navigation |
| A06 | Player identity | Who am I as a golfer? | Finish Profile | Skip avatar/handicap, validation, resume |
| A07 | Notification permission | Will reminders help me? | Enable / Not Now | Denied, allowed, unsupported browser |
| A08 | Level 1 intro | What did I unlock? | Enter Player Hub | Animation reduced-motion fallback |
| A09 | Player Hub | What should I do right now? | Start Mission | First-run, returning, quest paused, completed, no quest recovery |
| A10–A11 | Guided mission | What do I physically do? | Start/Pause/Complete drill | Session interrupted, offline, short session |
| A12 | Session review | What really happened? | Complete Session | Draft, missing data, attached media, save error |
| A13 | Reward | What did I earn? What improved? | Next Mission / Back to Hub | Reward issued once, not duplicated on reload |

## 3. End-to-end journey B — returning from range (realistic user story)

### Story
A golfer visits a range, records 2–4 swings, optionally takes a screenshot of the TrackMan screen, practices with several clubs, and later opens Forge Fit. The app should feel like **one practice record**, not disconnected AI analyses and club data.

```text
B01 Open Forge Fit → Player Hub
      ├─ Continue an in-progress session
      └─ “Log range session” (for already-completed real-world practice)
 → B02 Session draft
      Date/time; range/location optional; focus; clubs; duration; notes
 → B03 Add evidence (optional, any order)
      ├─ Add video(s) → select → trim → club/view tag → attach
      ├─ Add launch-monitor screenshot(s) → extract → verify/correct
      │   → tag source + units + shot/summary + club → attach
      ├─ Add per-club carry sample / bag info
      └─ Skip imports; log manually
 → B04 Review Session summary
      Practice, drills, misses, media and measurement provenance
 → B05 Save session / Complete relevant quest milestone
 → B06 Reward panel (practice XP once; explain sources)
 → B07 Feedback page (optional now or later)
      Swing summary → confidence / 2–3 actionable observations
      → drill(s) → swing thought(s) → Retest invitation
 → B08 Player Hub / Session detail / Next Mission
 → B09 Return after later session
      Compare own earlier video to new video when comparable
      → view trends, change of skill evidence, next quest
```

**Return success:** golfer can save session **even when AI processing fails**, optionally process video later, and can review everything attached to that dated session. They earn practice XP only when they substantively log/complete practice, not for reuploading files.

### Make video + data useful together without false precision

- A session is a **container** holding `videos[]`, `measurements[]`, `clubsUsed[]`, `reflections`, `questLink?`, and `drills[]`.
- Each video stores club, camera angle (down-the-line/face-on/unknown), approximate capture time, trim boundaries, optional phase markers, and analysis state.
- Each imported measurement stores `source = TrackMan screenshot / other / manual`, source image, metric, units, confidence, correction history, timestamp if known, and granularity (shot, club group, session average).
- Pair **specific video to specific shot** only when the golfer deliberately links them or dependable identifiers/time correlation exist. Default to association with session.
- Clear difference: **measured** (user-confirmed launch-monitor data), **estimated** (pose geometry), and **self-reported** (reflection).
- Swing analysis should focus on valid observable positions and changes; 2D body pose does **not** measure true clubface angle, club path, spin or launch.
- If AI is pending: `Session saved. Swing feedback is processing.` If unsupported: `Your session is saved; add manual notes or retry analysis.` No silent data loss.

## 4. XP and mastery UX contract

**The visible reward loop must be credible:**
- **Practice XP** for completing one qualifying session or linked quest, subject to anti-duplicate logic; show reason and one credit per event. Values remain governed by `docs/specs/XP_SYSTEM_SPEC.md`, not made up here.
- **Reflection/progression XP** only for distinct meaningful achievements or documented quest events; do not give points each time a photo or video is imported.
- **Skill mastery** increases after evidence meets defined test criteria (e.g. same drill test repeated with comparable results, measured dispersion improvement across enough samples). **A single favorable frame or one launch monitor shot does not prove improvement.**
- **Confidence/skill evidence states:** `No baseline`, `Baseline recorded`, `Needs more samples`, `Improving (verified)`, `Inconsistent`. Avoid fake percentage precision.
- **Animation:** pleasant, brief XP reveal then a concrete next action. Reduced-motion alternative.
- **Auditability:** session detail shows earned XP event and source; revisiting/reimporting must not increment automatically.

### Proposed reward example (UX illustration only)

```text
PRACTICE COMPLETE
Session: Driver consistency · 45 minutes · 3 clubs
+ [XP from existing approved rules] Practice XP
Swing footage: 2 clips saved
Range data: 1 TrackMan screenshot confirmed
Mastery: Baseline captured; more comparable shots needed
NEXT: Repeat the 10-ball direction test next week
[View Session]   [Next Quest]
```

## 5. Daily and second-visit return states

### Second open, no session yet
Show: **Continue your first mission**, next suggested practice day, dismissible calibration hint (if not dismissed), and why that quest was selected. Do not re-run onboarding.

### Second open, first mission completed
Show: **Yesterday's progress**, next quest, optional view of session data and one easy **Log Practice** action. Prior XP remains visible; no duplicate celebration.

### Return after range but not during range
Show: **Log a Past Session**. Do not require a “start timer” event; allow backdated session with real date/time.

### Return while a draft is interrupted
Show: **Resume Draft** + **Discard** (with confirmation). Preserve clips and input fields wherever feasible; avoid losing videos on mobile tab suspension.

### Return when analysis is processing
Show analysis status tied to the saved video/session and an optional notification opt-in when useful; no blocking spinner across Hub.

### Return without TrackMan
Offer manual shot pattern, carry estimate with provenance, swing video, drill challenge, or a no-data reflection. Never shame users for lack of access to facilities.

## 6. Information architecture and specific screen decisions

**Home:** Primary Mission, Player identity and XP, small skill overview, resume/draft, “What's your swing like?” hint, recent practice. Keep one dominant CTA.

**Train:** Weekly quests, guided missions, short drills, active session, post-session reflection. Practice mission should work in the field without a complex form.

**Studio:** Library; **Upload/Record → Trim → Preview/Tag → Analyze → Results → Compare/Save**. A session can contain multiple clips. Allow analysis to be requested later.

**Play:** actual rounds and scoring, not required for initial training loop.

**Profile:** My Bag, statistics, achievement collection, goal editing, preferences, privacy controls.

**Data provenance:** All import/review pages show file source and date, units, raw vs corrected metrics and an explicit confirmation action.

**Navigation rules:** when exiting Studio launched from a session, return to the draft session, not an unrelated landing page. When completing a quest from Train, return to Hub with progress updated. Preserve drafts and back actions.

## 7. UX wireframe contracts (first design iteration)

### Hub — first session

```text
┌──────────────────────────────────┐
│ FORGE FIT                     ⚙  │
│ LVL 01  [avatar]   XP bar        │
│ “Your game starts here.”         │
├──────────────────────────────────┤
│ YOUR FIRST QUEST                 │
│ Contact Fundamentals             │
│ “Build repeatable center contact”│
│ Time: 15 min                     │
│ [ START MISSION ]                │
├──────────────────────────────────┤
│ What's your swing like?          │
│ Get a quick baseline from a clip │
│ [ ANALYZE SWING ]  [ LATER ]     │
├──────────────────────────────────┤
│ [ My Bag ]  [ Import Range Data ]│
│ [ Recent Practice ]              │
├──────────────────────────────────┤
│ Home  Train  Studio  Play Profile│
└──────────────────────────────────┘
```

### Hub — returning from range

```text
┌──────────────────────────────────┐
│ Welcome back   [avatar]  LVL 04  │
│ XP to next level                 │
├──────────────────────────────────┤
│ TODAY / NEXT QUEST               │
│ Driver Direction Test            │
│ [ CONTINUE TRAINING ]            │
├──────────────────────────────────┤
│ LAST RANGE VISIT                 │
│ No session logged yet            │
│ [ LOG PAST SESSION ]             │
├──────────────────────────────────┤
│ QUICK IMPORT                     │
│ [ Swing Clip ] [ TrackMan Image ]│
│ My Bag · History                 │
├──────────────────────────────────┤
│ Home  Train  Studio  Play Profile│
└──────────────────────────────────┘
```

### Session review

```text
Practice date / Location / Duration
Quest connected [change]
Club chips; focus; miss counts; notes
Clips (0..N) [Add video] [Trim]
Measurements (0..N) [Import image] [Confirm]
What felt good? / What to work on next?
[ SAVE PRACTICE & EARN XP ]
```

**The two Hub wireframes are alternate *states*, not separate navigation routes**; no added permanent tab.

## 8. UI behaviors to prototype before backend

| Interaction | Requirement | Acceptance test |
|---|---|---|
| First quest card | Dynamically relates to selected concern; never initial blank | Select “contact”, enter Hub, see contact quest |
| Swing hint | Non-blocking, dismissible and accessible later | Dismiss hint, still able to find Studio |
| Multi-concern selection | Select 2+ and rank primary | Selections persist backward/forward |
| Start mission | Provides short clear instructions | 1-tap CTA leads to actionable drill |
| Log past practice | Custom date/time, no timer required | Record yesterday's session |
| Add clips | Multiple uploads, tag and return to session | Video attached to correct draft |
| Screenshot review | Uncertain values editable; units visible | Fix misread metric before confirm |
| Complete session | XP once and no data deletion | Revisit/retry does not award extra XP |
| View AI results | Reliability states + specific drills | Pending/failed analysis does not block session |
| Next-day return | Show saved progress and relevant next action | Close/reopen, no onboarding repeat |
| Outdoor mobile use | Strong contrast, large hit targets | Usable in bright conditions and with one hand |

## 9. Suggested user testing script

Test with 3 profiles: (a) beginner no data; (b) golfer with video only; (c) range regular with TrackMan screenshot, multiple clubs, and video.
- “You just finished onboarding. What do you do now?”
- “You went to the range yesterday. Log that practice.”
- “Add one swing video and trim out the preparation time.”
- “Import this screenshot; one value is wrong—correct it.”
- “Where can you see XP earned and evidence supporting mastery?”
- “Close and reopen the prototype. What would you do next?”
Observe taps, hesitation, incomplete paths, mistaken data assertions, and perceived usefulness. Prefer moderated qualitative tests before powered A/B testing.

## 10. Feature scope and handoffs

**This UX design work is immediately actionable without server integrations**: page hierarchy, onboarding single→multi-select, Hub first, hint, session draft/review, back navigation, reward panel, loading/error placeholders, 2 Hub states.

**Future technical work:** authentication/persistence, video encoding/storage, screenshot OCR, pose model benchmarking, official hardware integration if permitted, verified mastery calculations, React mobile/PWA camera performance.

**Reuse** existing `GolfSessions.tsx`, `GolfClubs.tsx`, and V2 `GolfProgressionContext.tsx`; reconcile with planned new screen flow rather than creating parallel models. App currently uses `localStorage` for progression. Any suggested UX “save” state requires honest local storage behavior until backend is implemented.

**Related docs:** [Approved sitemap](./UX_SITEMAP_USER_JOURNEYS_V1.md), [Sprint 1 review](./SPRINT_1_V2_REVIEW_2026-11-07.md), [XP spec](./specs/XP_SYSTEM_SPEC.md), [Mastery spec](./specs/MASTERY_SYSTEM_SPEC.md), [Quest spec](./specs/QUEST_DEFINITIONS.md), [Product ideas](./PRODUCT_IDEAS_RESEARCH_REGISTER_2026-11-07.md).

**Creative follow-up:** Gemini Gem art direction and prompt pack lives in separate `docs/design/` file. **No visual assets were generated in this UX document.**
