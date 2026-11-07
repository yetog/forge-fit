# Forge Fit Golf - RPG Vision

> "Golf is the RPG of sports"
>
> Build an RPG-style golf development platform where every practice session,
> swing analysis, lesson, and round contributes to the golfer's progression.

---

## Core Philosophy

The experience isn't about presenting metrics and AI assessments.

It's about giving golfers a **structured, rewarding path toward becoming better golfers.**

A golfer has:
- An identity
- Strengths and weaknesses
- Current objectives
- A reason to improve
- Visible progression

---

## Three Interconnected Systems

### 1. The Player Experience
Onboarding, progression, skill development, challenges, and visual identity.

### 2. The Swing Studio
Recording, trimming, AI analysis, side-by-side comparisons, and coach feedback.

### 3. The Intelligence Infrastructure
Pose estimation, analysis pipelines, storage, model inference, and cost controls.

---

## Two Types of Progression

### XP (Experience Points)
**Rewards participation and consistency.**

A golfer gains XP for:
- Completing a planned practice
- Recording a reflection
- Finishing a challenge
- Logging a round
- Watching a lesson

### Mastery
**Represents demonstrated improvement.**

Requires evidence:
- Improved shot dispersion
- Repeating a swing outcome
- Achieving scoring milestones
- Passing standardized practice challenges

**Important:** Someone can be Level 18 (high XP) while still being a beginner at driving accuracy. The system shouldn't pretend they're a better golfer simply because they've logged more sessions.

---

## Five Core Screens

### 01. Player Hub (Home)
The command center.

```
┌─────────────────────────────────────────┐
│  [Avatar]  ZAY                          │
│  Level 12 • Road to Scratch             │
│  ████████████░░░░░░░░ 68% to Level 13   │
├─────────────────────────────────────────┤
│  🎯 CURRENT QUEST                        │
│  ┌───────────────────────────────────┐  │
│  │ Driving Consistency               │  │
│  │ 3 of 5 practice sessions          │  │
│  │ ████████████░░░░░░░ 60%           │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  📊 STATS                                │
│  Handicap: 15.2    Sessions: 47         │
│  Streak: 5 days    Best Round: 84       │
├─────────────────────────────────────────┤
│  ⚡ TODAY'S MISSION                      │
│  Record 3 driver swings, review the     │
│  differences, identify your most        │
│  repeatable movement.                   │
│                                         │
│  [    Continue Training    →]           │
└─────────────────────────────────────────┘
```

**Primary action:** "Continue Training" (not browsing a dashboard)

### 02. Skill Tree
Mastery branches for each golf discipline.

```
┌─────────────────────────────────────────┐
│  SKILL TREE                             │
├─────────────────────────────────────────┤
│                                         │
│        ┌─────────┐                      │
│        │ DRIVING │ ████░░ 67%           │
│        └────┬────┘                      │
│      ┌──────┴──────┐                    │
│  ┌───┴───┐    ┌────┴────┐              │
│  │ IRONS │    │ WOODS   │              │
│  │ ██░░  │    │ █░░░    │              │
│  └───┬───┘    └────┬────┘              │
│      └──────┬──────┘                    │
│        ┌────┴────┐                      │
│        │SHORT    │                      │
│        │GAME     │ ███░░ 55%            │
│        └────┬────┘                      │
│        ┌────┴────┐                      │
│        │PUTTING  │ ██░░░ 40%            │
│        └────┬────┘                      │
│        ┌────┴────┐                      │
│        │COURSE   │                      │
│        │MGMT     │ █░░░░ 20%            │
│        └─────────┘                      │
└─────────────────────────────────────────┘
```

Each branch includes:
- Drills to practice
- Milestones to achieve
- Baseline performance
- Challenge completion status

### 03. Swing Studio
The signature differentiating feature.

```
┌─────────────────────────────────────────┐
│  SWING STUDIO                           │
├─────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐      │
│  │ MY SWING    │  │ COMPARISON  │      │
│  │             │  │             │      │
│  │  [Video]    │  │  [Video]    │      │
│  │             │  │             │      │
│  └─────────────┘  └─────────────┘      │
│                                         │
│  ▶ ══════●════════════════════ 2.3s    │
│                                         │
│  SWING PHASE                            │
│  [Address] [Top] [●Impact] [Finish]     │
│                                         │
│  COMPARE AGAINST                        │
│  ○ My Previous Swing                    │
│  ○ Professional Reference               │
│  ○ Coach's Model                        │
├─────────────────────────────────────────┤
│  [Record New] [Upload] [Analyze]        │
└─────────────────────────────────────────┘
```

Three comparison modes:
1. **My swing vs. my previous swing** - Track improvement
2. **My swing vs. professional** - Learn from the best
3. **My swing vs. coach reference** - Follow instruction

Features:
- Synchronized playback
- Independent scrubbing
- Adjustable overlays
- Slow motion
- Annotations
- Phase alignment (not timestamp)

### 04. Training Quests
The 5-day practice system as guided missions.

```
┌─────────────────────────────────────────┐
│  TRAINING QUESTS                        │
├─────────────────────────────────────────┤
│  ACTIVE QUEST                           │
│  ┌───────────────────────────────────┐  │
│  │ 🎯 Driving Consistency            │  │
│  │    Build a repeatable driver      │  │
│  │                                   │  │
│  │    Progress: ████████░░░░ 60%     │  │
│  │                                   │  │
│  │    TODAY: Wednesday - Build Bag   │  │
│  │    Climb from wedge to driver,    │  │
│  │    find where your pattern        │  │
│  │    deteriorates.                  │  │
│  │                                   │  │
│  │    [  Start Today's Mission  ]    │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  THIS WEEK                              │
│  ✓ Mon - Swing Lab (completed)         │
│  ✓ Tue - Scoring Lab (completed)       │
│  → Wed - Build the Bag (today)         │
│  ○ Thu - Calibration Day               │
│  ○ Fri - Play Golf                     │
├─────────────────────────────────────────┤
│  REWARDS                                │
│  Complete quest: +500 XP               │
│  Mastery unlock: Driver Consistency    │
└─────────────────────────────────────────┘
```

### 05. Rounds & Achievements
Where practice connects to actual golf.

```
┌─────────────────────────────────────────┐
│  ROUNDS & ACHIEVEMENTS                  │
├─────────────────────────────────────────┤
│  RECENT ROUNDS                          │
│  ┌───────────────────────────────────┐  │
│  │ Nov 5 • Pine Valley               │  │
│  │ Score: 87 (+15)                   │  │
│  │ GIR: 6/18 • FIR: 8/14 • Putts: 34│  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  PERSONAL RECORDS                       │
│  Best Round: 84 (Oct 22)               │
│  Best Front 9: 41                      │
│  Most GIR: 9                           │
├─────────────────────────────────────────┤
│  ACHIEVEMENTS                           │
│  🏆 First Round Logged                  │
│  🏆 5-Day Practice Streak              │
│  🏆 Broke 90                           │
│  🔒 Broke 85 (locked)                  │
│  🔒 Single-Digit Handicap (locked)     │
├─────────────────────────────────────────┤
│  [  Log New Round  ]                    │
└─────────────────────────────────────────┘
```

---

## Navigation Structure

```
Bottom Navigation:
┌─────┬─────┬─────┬─────┬─────┐
│Home │Train│Studio│Play │Profile│
└─────┴─────┴─────┴─────┴─────┘
  │      │      │      │      │
  │      │      │      │      └── Settings, stats, export
  │      │      │      └── Rounds, achievements
  │      │      └── Swing Studio (record, analyze, compare)
  │      └── Training Quests, Skill Tree
  └── Player Hub (dashboard)
```

Skill Tree accessible from both Home and Train.

---

## Visual Identity

### Aesthetic
- Restrained sports-game feel (not full fantasy)
- Deep charcoal backgrounds
- Muted greens for golf context
- Warm metallic accents for achievements
- Subtle motion and transitions
- Very legible performance data

### Must Work For
- Bright outdoor conditions (golf course)
- One-handed operation
- Quick glances between shots

---

## Analysis Infrastructure

### Three Architecture Options

| Option | Cost | Use Case |
|--------|------|----------|
| On-device (MediaPipe) | ~$0/swing | Basic pose, battery cost |
| Cloud CPU | ~$0.001/swing | Consistent cross-device |
| Cloud GPU + Models | ~$0.01+/swing | Advanced biomechanics |

### Hybrid Approach (Recommended)

```
┌──────────────────┐
│ Record/Upload    │ React Native camera
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Trim & Prepare   │ Select interval, compress, metadata
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Pose Estimation  │ MediaPipe → landmarks → confidence
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Swing Evaluation │ Phase detection, joint geometry, timing
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Coaching Recs    │ Rules first; optional LLM explanation
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Progression      │ Save session, assign quest, compare
└──────────────────┘
```

### What We Can Measure vs. What We Can't

**Can measure (2D pose):**
- Posture changes
- Head displacement
- Arm extension
- Timing patterns
- Balance at finish

**Cannot reliably measure (2D only):**
- Actual clubface orientation
- Spin axis
- Measured club path
- Club speed (without radar)

**Rule:** Don't present 2D-derived values as actual measurements.

---

## Cost Model (Illustrative)

For 1,000 monthly active users, 5 swings each:

| Component | Monthly Cost |
|-----------|--------------|
| Supabase Pro | $25 |
| R2 Storage (100GB) | $1.50 |
| CPU Analysis | $6 |
| **Total** | **~$32.50** |

GPU analysis would add ~$40-50/month at this scale.

---

## Four Design Sprints (Revised)

### Sprint 1: Product Experience
- User journeys
- Navigation map
- RPG progression rules
- Design system

**Acceptance:** A golfer can understand what to do next without explanation.

### Sprint 2: High-Fidelity Prototype
- Player Hub
- Skill Tree
- Training Quest
- Swing Studio
- Progress History

**Acceptance:** Complete clickable flow from onboarding to first completed mission.

### Sprint 3: Functional Vertical Slice
- Upload → Trim → Analyze → Compare → Save

**Acceptance:** Real video completes the process with observable performance and errors.

### Sprint 4: Economics & Validation
- Processing benchmarks
- Usage analytics
- Beta feedback

**Acceptance:** Measured cost per analysis, processing latency, and repeat engagement.

---

## The Complete User Journey

```
New golfer signs up
    │
    ▼
Create character/profile
    │
    ▼
Choose goal (Break 90, Break 80, Scratch)
    │
    ▼
Receive first quest
    │
    ▼
Upload a swing
    │
    ▼
Compare against reference
    │
    ▼
Receive feedback + drill recommendation
    │
    ▼
Earn XP + progress toward mastery
    │
    ▼
Continue quest chain
```

---

## Key Differentiators

1. **RPG Progression** - Not just metrics, but a journey
2. **Swing Comparison Studio** - Side-by-side video analysis
3. **Integrated Practice System** - 5-day routine as missions
4. **Honest Confidence Levels** - No false precision
5. **Mastery vs. Participation** - Real improvement separated from engagement

---

## Integration with Existing Forge Fit

The current golf section (GolfDashboard, GolfSessions, etc.) becomes:

| Current | Becomes |
|---------|---------|
| GolfDashboard | Player Hub |
| GolfTrainingPath | Skill Tree |
| GolfSessions | Part of Training Quests |
| GolfClubs | Equipment section in Profile |
| GolfMissCorrection | Integrated into analysis feedback |

The existing 5-day practice system from the golf notes becomes the quest structure.

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Onboarding completion | >80% |
| First swing uploaded | >60% of signups |
| Quest completion rate | >50% |
| 7-day retention | >40% |
| Cost per analysis | <$0.02 |
| Analysis latency | <30 seconds |

---

## Next Step

Build one complete vertical slice:

**New golfer → Profile → First quest → Upload swing → Compare → Feedback → XP + Progress**

This establishes product identity and can be tested with real users while benchmarking the inference pipeline.
