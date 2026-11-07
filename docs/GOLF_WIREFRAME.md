# Golf Section Wireframe

> Complete architecture map of the current golf section in Forge Fit.
> Created: November 2026

---

## Navigation Flow

```
SportsPage
    └── GolfDashboard (main entry)
            ├── GolfSessions (log practice)
            ├── GolfClubs (manage bag)
            ├── GolfTrainingPath (progression)
            └── GolfMissCorrection (diagnose misses)
```

---

## Page-by-Page Wireframes

### 1. GolfDashboard (`/golf`)

**Purpose:** Main hub showing progress overview and quick actions.

```
┌─────────────────────────────────────────┐
│  ← GOLF TRAINING                        │
│     Phase: Contact                      │
├─────────────────────────────────────────┤
│  TODAY'S FOCUS                          │
│  ┌───────────────────────────────────┐  │
│  │ Contact                           │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐          │
│  │ 5  │ │ 3🔥│ │2h  │ │ 6  │          │
│  │Sess│ │Strk│ │Prac│ │Conf│          │
│  └────┘ └────┘ └────┘ └────┘          │
├─────────────────────────────────────────┤
│  Phase Progress                    25%  │
│  [████░░░░░░░░░░░░░░░░░░░░░░░░░░░░]    │
│  Hit straight with clean contact        │
├─────────────────────────────────────────┤
│  ⚠️ Common Miss: slice                   │
│     Open club face at impact            │
│     Cue: "Close the face, stronger grip"│
├─────────────────────────────────────────┤
│  [    Log Practice Session         →]   │
│                                         │
│  [My Clubs       →] [Training Path  →]  │
│                                         │
│  [    Miss Corrections             →]   │
├─────────────────────────────────────────┤
│  RECENT SESSIONS                        │
│  ┌───────────────────────────────────┐  │
│  │ Contact                    +30 XP │  │
│  │ Nov 5 • 60 min • Range           │  │
│  │ Improved: Better tempo            │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ Half Swings               +25 XP │  │
│  │ Nov 3 • 45 min                   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Data Used:**
- `profile.currentPhase`, `profile.currentFocus`
- `profile.totalSessions`, `profile.currentStreak`
- `getTotalPracticeTime()`, `getClubConfidenceAverage()`
- `trainingProgress[currentPhase].progress`
- `getMostCommonMiss()` → `getMissCorrection()`
- `getRecentSessions(3)`

---

### 2. GolfSessions (`/golf/sessions`)

**Purpose:** Log practice sessions with detailed reflections.

#### Session List View
```
┌─────────────────────────────────────────┐
│  ← SESSIONS              [+ Log Session]│
│     Practice history & logging          │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │ Contact                    +30 XP │  │
│  │ Mon, Nov 5 • 60 min • Range      │  │
│  │ [PW] [9I] [8I] [7I]              │  │
│  │ ─────────────────────────────────│  │
│  │ Good: Clean contact on wedges    │  │
│  │ Improved: Better tempo           │  │
│  │ Cue: "Smooth transition"         │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Half Swings               +25 XP │  │
│  │ Sat, Nov 3 • 45 min              │  │
│  │ Confidence: 6/10                 │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

#### Session Form View
```
┌─────────────────────────────────────────┐
│  ← LOG SESSION                          │
│     Record your practice                │
├─────────────────────────────────────────┤
│  SESSION INFO                           │
│  ┌───────────────────────────────────┐  │
│  │ Location (optional)               │  │
│  │ [Driving range, Course name    ]  │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Duration                       60 min  │
│  [●───────────────────────────────────] │
│                                         │
│  Session Focus                          │
│  [ Contact                          ▼]  │
├─────────────────────────────────────────┤
│  CLUBS USED                             │
│  [PW] [AW] [9I] [8I] [7I] [6I] [5I]    │
│  [5H] [4H] [5W] [3W] [DR] [PT]          │
├─────────────────────────────────────────┤
│  MISS TRACKING                          │
│  ┌────────────┐  ┌────────────┐        │
│  │ slice  [-] 2 [+] │ hook   [-] 0 [+]│
│  │ thin   [-] 1 [+] │ chunk  [-] 0 [+]│
│  │ push   [-] 0 [+] │ pull   [-] 0 [+]│
│  │ top    [-] 0 [+] │ shank  [-] 0 [+]│
│  └────────────┘  └────────────┘        │
├─────────────────────────────────────────┤
│  REFLECTIONS                            │
│  What felt good?                        │
│  [Describe what went well...        ]   │
│                                         │
│  Biggest miss pattern?                  │
│  [e.g., Thin shots with irons       ]   │
│                                         │
│  What improved today?                   │
│  [Notice any improvements...        ]   │
│                                         │
│  Best cue / swing thought?              │
│  [e.g., Stay level                  ]   │
│                                         │
│  Overall Confidence                5/10 │
│  [●────────────────────────────────────]│
│                                         │
│  Additional Notes                       │
│  [Any other thoughts...             ]   │
├─────────────────────────────────────────┤
│  [      ✓ Complete Session           ]  │
└─────────────────────────────────────────┘
```

**Data Used:**
- `addSession()` - creates new session
- `getRecentSessions(10)` - shows history
- `clubs` - for club selection
- `FOCUS_OPTIONS` - dropdown options
- XP calculation: `(duration/10)*5 + reflection bonus`

---

### 3. GolfClubs (`/golf/clubs`)

**Purpose:** Track distances and confidence for each club.

```
┌─────────────────────────────────────────┐
│  ← MY CLUBS                             │
│     Track distances and confidence      │
├─────────────────────────────────────────┤
│  Tap a club to update its distances,    │
│  confidence level, and notes.           │
├─────────────────────────────────────────┤
│  WEDGES                                 │
│  ┌───────────────────────────────────┐  │
│  │ [LW] Lob Wedge                    │  │
│  │      Max: 60 yds • Half: 40 yds   │  │
│  │      [slice]               7  →   │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ [SW] Sand Wedge                   │  │
│  │      No data yet                  │  │
│  │                              5  → │  │
│  └───────────────────────────────────┘  │
│  ...                                    │
├─────────────────────────────────────────┤
│  IRONS                                  │
│  ┌───────────────────────────────────┐  │
│  │ [9I] 9 Iron                       │  │
│  │      Max: 130 yds • Half: 100     │  │
│  │      [thin]                8  →   │  │
│  └───────────────────────────────────┘  │
│  ...                                    │
├─────────────────────────────────────────┤
│  HYBRIDS / WOODS / DRIVER / PUTTER     │
│  ...                                    │
└─────────────────────────────────────────┘
```

#### Edit Club Dialog
```
┌─────────────────────────────────────────┐
│  7 Iron                            [X]  │
├─────────────────────────────────────────┤
│  Max Distance (yards)                   │
│  [150                               ]   │
│                                         │
│  Half Swing Distance (yards)            │
│  [100                               ]   │
│                                         │
│  Confidence                        7/10 │
│  [●──────────────────────────────────]  │
│                                         │
│  Common Miss                            │
│  [ slice                            ▼]  │
│                                         │
│  Best Cue / Swing Thought               │
│  [Smooth tempo                      ]   │
│                                         │
│  Notes                                  │
│  [Any additional notes...           ]   │
├─────────────────────────────────────────┤
│  [ Cancel ]           [ Save ]          │
└─────────────────────────────────────────┘
```

**Data Used:**
- `clubs` - array of 16 default clubs
- `updateClub(clubId, updates)` - save changes
- `clubTypeOrder` - for sorting by type
- Groups: Wedges, Irons, Hybrids, Woods, Driver, Putter

---

### 4. GolfTrainingPath (`/golf/training`)

**Purpose:** Show progression through training phases with drills.

```
┌─────────────────────────────────────────┐
│  ← TRAINING PATH                        │
│     Your progression journey            │
├─────────────────────────────────────────┤
│  CURRENT PHASE                          │
│  ┌───────────────────────────────────┐  │
│  │ Contact & Direction               │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │ ● PHASE 1                [Active] │  │
│  │ Contact & Direction               │  │
│  │ Hit straight with clean contact   │  │
│  │                                   │  │
│  │ Master the fundamentals: clean    │  │
│  │ strikes, stable posture...        │  │
│  │                                   │  │
│  │ Progress                     25%  │  │
│  │ [████░░░░░░░░░░░░░░░░░░░░░░░░]   │  │
│  │                                   │  │
│  │ RECOMMENDED CLUBS                 │  │
│  │ [PW] [AW] [9I] [8I] [7I]         │  │
│  │                                   │  │
│  │ SKILLS TO DEVELOP                 │  │
│  │ [Half swings] [Brush the grass]   │  │
│  │ [Stable posture] [Hold finish]    │  │
│  │                                   │  │
│  │ PRACTICE DRILLS (5)               │  │
│  │ ┌─────────────────────────────┐   │  │
│  │ │ PW Warmup                   │   │  │
│  │ │ 10 reps • "Brush the grass" │   │  │
│  │ └─────────────────────────────┘   │  │
│  │ ┌─────────────────────────────┐   │  │
│  │ │ 8 Iron Straight Shots       │   │  │
│  │ │ 10 reps • "Square face"     │   │  │
│  │ └─────────────────────────────┘   │  │
│  │ +2 more drills                    │  │
│  │                                   │  │
│  │ [✓ Complete Phase & Unlock Next]  │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🔒 PHASE 2                        │  │
│  │ Distance Control                  │  │
│  │ Understand half vs full distances │  │
│  │ (Locked - complete Phase 1 first) │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🔒 PHASE 3                        │  │
│  │ Shot Shaping                      │  │
│  │ Control ball flight and shape     │  │
│  │ (Locked)                          │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  PROGRESSION PHILOSOPHY                 │
│  Master each phase before moving on.    │
│  Contact before distance, distance      │
│  before shaping.                        │
└─────────────────────────────────────────┘
```

**Data Used:**
- `trainingProgress` - array of 3 phases
- `profile.currentPhase` - active phase
- `getDrillsByPhase(phaseId)` - drills for each phase
- `completePhase(phaseId)` - advances to next

---

### 5. GolfMissCorrection (`/golf/miss`)

**Purpose:** Reference guide for diagnosing and fixing misses.

```
┌─────────────────────────────────────────┐
│  ← MISS CORRECTIONS                     │
│     Diagnose and fix your misses        │
├─────────────────────────────────────────┤
│  ⚠️ Your Most Common Miss               │
│  ┌───────────────────────────────────┐  │
│  │ Slice                             │  │
│  │ Based on 8 occurrences            │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  🔍 [Search misses, causes, cues... ]   │
├─────────────────────────────────────────┤
│  💡 Tap on a miss type to see the       │
│     likely cause and correction cue.    │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │ Slice               [Most Common] │  │
│  │                           8 times │  │
│  │                                   │  │
│  │ LIKELY CAUSE                      │  │
│  │ Open club face at impact          │  │
│  │                                   │  │
│  │ ┌─────────────────────────────┐   │  │
│  │ │ CORRECTION CUE              │   │  │
│  │ │ "Close the face, stronger   │   │  │
│  │ │  grip"                      │   │  │
│  │ └─────────────────────────────┘   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Hook                              │  │
│  │ LIKELY CAUSE                      │  │
│  │ Closed club face, inside-out path │  │
│  │ CUE: "Weaken grip, square impact" │  │
│  └───────────────────────────────────┘  │
│  ...8 total miss patterns...            │
├─────────────────────────────────────────┤
│  REMEMBER                               │
│  • One adjustment at a time             │
│  • Focus on the feel, not the result    │
│  • Consistency comes from repetition    │
│  • Smooth swings beat violent swings    │
└─────────────────────────────────────────┘
```

**Data Used:**
- `missPatterns` - 8 miss types with causes/cues
- `getMostCommonMiss()` - from session data
- `sessions` - to calculate miss frequency
- Search filters patterns by miss/cause/cue

---

## Data Architecture

### State Management

```
GolfContext (React Context + localStorage)
├── profile: GolfProfile
│   ├── currentPhase: 'contact' | 'distance' | 'shaping'
│   ├── currentFocus: string
│   ├── totalSessions: number
│   ├── totalPracticeMinutes: number
│   ├── currentStreak: number
│   ├── longestStreak: number
│   └── lastSessionDate?: string
│
├── clubs: GolfClub[] (16 default clubs)
│   ├── id, name, type
│   ├── maxDistance, halfSwingDistance
│   ├── confidence (1-10)
│   ├── commonMiss: MissType | null
│   ├── bestCue: string
│   └── notes: string
│
├── sessions: GolfSession[]
│   ├── id, date, location, duration
│   ├── focus, clubsUsed[]
│   ├── whatFeltGood, biggestMiss, whatImproved
│   ├── bestCue, confidence, notes
│   ├── misses: { slice: n, hook: n, ... }
│   └── xpEarned: number
│
├── cues: GolfCue[] (user-defined swing thoughts)
│
└── trainingProgress: TrainingPathPhase[]
    ├── id: 'contact' | 'distance' | 'shaping'
    ├── name, goal, description
    ├── clubs[], skills[]
    ├── unlocked, completed
    └── progress: 0-100
```

### Static Data

```
src/data/
├── golfClubs.ts       → 16 default clubs
├── golfDrills.ts      → 11 drills across 3 phases
├── golfMissPatterns.ts → 8 miss types with corrections
└── golfTrainingPath.ts → 3 training phases
```

### Storage Keys (localStorage)

```
forge-fit-golf-profile
forge-fit-golf-clubs
forge-fit-golf-sessions
forge-fit-golf-cues
forge-fit-golf-training-progress
```

---

## Component Relationships

```
SportsPage
  └── GolfDashboard
        ├── uses: useGolf() context
        ├── calls: getMissCorrection() from data
        └── navigates to:
              ├── GolfSessions
              │     ├── uses: useGolf()
              │     ├── calls: addSession()
              │     └── displays: getRecentSessions()
              │
              ├── GolfClubs
              │     ├── uses: useGolf()
              │     ├── calls: updateClub()
              │     └── uses: Dialog, Select, Slider
              │
              ├── GolfTrainingPath
              │     ├── uses: useGolf()
              │     ├── calls: completePhase()
              │     └── calls: getDrillsByPhase()
              │
              └── GolfMissCorrection
                    ├── uses: useGolf()
                    ├── reads: missPatterns (static)
                    └── calls: getMostCommonMiss()
```

---

## What's Missing (Gaps for Architecture Changes)

### User Journey Gaps

1. **No onboarding flow** - New users jump straight into dashboard
2. **No round tracking** - Only practice sessions, no actual golf rounds
3. **No video analysis** - Mentioned in vision docs but not implemented
4. **No user accounts** - All data is localStorage only
5. **No drill execution UI** - Drills are listed but can't be "run"
6. **No yardage lookup tool** - "What club for 150 yards?"
7. **No pre-round warmup routine** - As described in notes
8. **No putting/short game dedicated section**

### Data Gaps

1. **No round scores** - Handicap, GIR, FIR, putts
2. **No shot-by-shot data** - Only aggregated miss counts
3. **No video attachments** - Sessions can't include video
4. **No lesson notes** - From instructor sessions
5. **No equipment tracking** - Beyond basic clubs

### UX Improvements Needed

1. **Club yardage visualization** - Chart showing gaps
2. **Progress graphs over time** - Not just current stats
3. **Session calendar view** - See practice history
4. **Quick-log mode** - Faster session entry
5. **Drill timer/counter** - Active drill execution

---

## Recommended Architecture Changes

### Phase 1: Core UX
- [ ] Add onboarding flow (set handicap goal, initial clubs)
- [ ] Create quick-log mode for sessions
- [ ] Add drill execution UI with timer
- [ ] Build yardage lookup tool

### Phase 2: Round Tracking
- [ ] Add round logging (score, GIR, FIR, putts)
- [ ] Track handicap over time
- [ ] Add course management

### Phase 3: Video & Analysis
- [ ] Add video upload to sessions
- [ ] Basic swing comparison (side by side)
- [ ] Frame-by-frame scrubber

### Phase 4: Backend & Sync
- [ ] Move from localStorage to Supabase
- [ ] Add user authentication
- [ ] Enable cross-device sync

---

## File Summary

| File | Lines | Purpose |
|------|-------|---------|
| `GolfDashboard.tsx` | 228 | Main hub page |
| `GolfSessions.tsx` | 433 | Session logging |
| `GolfClubs.tsx` | 274 | Club management |
| `GolfTrainingPath.tsx` | 212 | Phase progression |
| `GolfMissCorrection.tsx` | 170 | Miss reference |
| `GolfContext.tsx` | 300 | State management |
| `golf.ts` (types) | 121 | Type definitions |
| `golfStorage.ts` | 28 | localStorage utils |
| `golfClubs.ts` | 200 | Default club data |
| `golfDrills.ts` | 131 | Drill definitions |
| `golfMissPatterns.ts` | 52 | Miss corrections |
| `golfTrainingPath.ts` | 71 | Phase definitions |

**Total: ~2,220 lines of golf-specific code**
