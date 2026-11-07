# Quest Definitions

> 5-day practice system structured as RPG quests.
> Based on golf notes from docs/golf/01-FIVE-DAY-PRACTICE-SYSTEM.md
> Status: Ready for Implementation

---

## Quest Structure

Each week is a **Quest** containing 5 **Daily Missions**.

```
QUEST: "Driving Consistency" (Week 1)
├── Monday: Swing Lab (60 min)
├── Tuesday: Scoring Lab (30 min)
├── Wednesday: Build the Bag (60 min)
├── Thursday: Calibration Day (30 min)
└── Friday: Play Golf (60 min)
```

---

## Daily Mission Types

### Monday — Swing Lab
**Duration:** 60 minutes
**Purpose:** Technical day. Experiment with mechanics.

| Segment | Duration | Activity |
|---------|----------|----------|
| Movement | 10 min | Slow rehearsals: SPACE → CHARGE → DROP → TURN → BALANCE |
| Path Calibration | 15 min | 7i/4i half swings to full swings |
| Driver Laboratory | 15 min | 70% speed, monitor path/attack/speed |
| Face/Contact | 10 min | Impact location awareness |
| Transfer | 10 min | Targets only, no numbers |

**Completion Criteria:**
- [x] Log session with "Swing Lab" focus
- [x] Minimum 45 minutes duration
- [x] Add at least one observation note

**Rewards:**
- 75 XP (daily mission)
- 4 MP toward Driving (if driver work done)
- 2 MP toward Irons (if iron work done)

---

### Tuesday — Scoring Lab
**Duration:** 30 minutes
**Purpose:** Short game and scoring. No swing mechanics.

| Segment | Duration | Activity |
|---------|----------|----------|
| Putting Speed | 5 min | Lag putting, distance control |
| Chips/Pitches | 10 min | Various distances around green |
| Wedge Targets | 10 min | 30/50/70/90 yard targets |
| Random Challenge | 5 min | Different target, distance, club each shot |

**Completion Criteria:**
- [x] Log session with "Scoring Lab" focus
- [x] Minimum 25 minutes duration
- [x] Record proximity metric or success rate

**Rewards:**
- 75 XP (daily mission)
- 4 MP toward Short Game
- 2 MP toward Putting

---

### Wednesday — Build the Bag
**Duration:** 60 minutes
**Purpose:** Find where your pattern breaks down across club lengths.

| Segment | Duration | Activity |
|---------|----------|----------|
| Warm-up | 10 min | Wedge through 7i |
| Climb the Bag | 35 min | Wedge → 9i → 7i → 5i → 4i → wood → driver (3-5 balls each) |
| Descend | 10 min | Driver → 4i → 7i → wedge |
| Random Clubs | 5 min | No rhythm from same club repeatedly |

**Completion Criteria:**
- [x] Log session with "Build the Bag" focus
- [x] Minimum 45 minutes duration
- [x] Note which club the pattern deteriorates

**Rewards:**
- 75 XP (daily mission)
- 2 MP toward each category practiced (Driving, Irons, Woods)

---

### Thursday — Calibration Day
**Duration:** 30 minutes
**Purpose:** Precision day. Low intensity, high focus.

| Segment | Duration | Activity |
|---------|----------|----------|
| Half Swings | 10 min | Center contact focus |
| Deliberate Motion | 10 min | 5-stage motion with pauses |
| Scoring Test | 10 min | 10 balls to one target, score 0-2 per shot |

**Scoring System:**
- 2 points: Target window
- 1 point: Playable miss
- 0 points: Big miss
- Maximum: 20 points

**Completion Criteria:**
- [x] Log session with "Calibration" focus
- [x] Minimum 25 minutes duration
- [x] Record calibration score (0-20)

**Rewards:**
- 75 XP (daily mission)
- Bonus 25 XP if score ≥ 15
- Mastery points based on performance

---

### Friday — Play Golf
**Duration:** 60 minutes
**Purpose:** Performance mode. No swing lab. Play imaginary holes.

| Segment | Duration | Activity |
|---------|----------|----------|
| Course Simulation | 50 min | Play 6-9 imaginary holes |
| Review | 10 min | Note what transferred, what didn't |

**Rules:**
- One ball per shot (no mulligans)
- Don't look at TrackMan numbers
- Pre-shot: Target → SPACE → rehearsal → GO
- Accept every result

**Completion Criteria:**
- [x] Log session with "Play Golf" focus OR log actual round
- [x] Minimum 45 minutes duration
- [x] Add reflection notes

**Rewards:**
- 75 XP (daily mission)
- Bonus 50 XP if actual round logged
- Course Management mastery points

---

## Quest Completion

### Requirements
Complete at least 4 of 5 daily missions to complete the quest.

### Rewards

| Completion | XP Reward |
|------------|-----------|
| 3/5 days | 0 XP (quest failed) |
| 4/5 days | 500 XP (quest complete) |
| 5/5 days | 750 XP (perfect week bonus) |

### Mastery Impact
- Quest completion adds consistency points to all practiced categories
- Perfect week adds 3 MP to primary focus category

---

## Quest Themes

Quests rotate through different focus areas:

| Week | Quest Name | Primary Focus | Secondary Focus |
|------|------------|---------------|-----------------|
| 1 | Driving Consistency | Driving | Path calibration |
| 2 | Iron Precision | Irons | Contact quality |
| 3 | Scoring Zone | Short Game | Distance control |
| 4 | Full Bag Integration | All | Pattern consistency |
| 5 | Tournament Prep | Course Mgmt | Mental game |
| 6 | Speed & Power | Driving | Distance gains |
| 7 | Touch & Feel | Putting | Green reading |
| 8 | Recovery Shots | Woods/Irons | Trouble shots |

After Week 8, quests repeat or generate based on mastery gaps.

---

## Adaptive Quests (Future)

Based on player data, generate personalized quests:

```typescript
function generateQuest(player: Player): Quest {
  // Find weakest mastery category
  const weakest = getWeakestCategory(player.mastery);

  // Find most common miss
  const commonMiss = getMostCommonMiss(player.rounds);

  // Generate quest focused on weaknesses
  return createQuest({
    primaryFocus: weakest,
    drillsForMiss: getDrillsForMiss(commonMiss),
    adjustedDurations: getAdjustedDurations(player.frequency)
  });
}
```

---

## Quest UI Elements

### Quest Card (Home Screen)
```
┌─────────────────────────────────────┐
│  🎯 CURRENT QUEST                    │
│  ┌───────────────────────────────┐  │
│  │ Driving Consistency          │  │
│  │ Week 1 of your journey       │  │
│  │                               │  │
│  │ Progress: ████████░░░░ 60%   │  │
│  │ 3 of 5 days complete         │  │
│  └───────────────────────────────┘  │
│                                      │
│  TODAY: Wednesday - Build Bag        │
│  Climb from wedge to driver.         │
│                                      │
│  [    Start Today's Mission    →]    │
└─────────────────────────────────────┘
```

### Weekly Schedule
```
┌─────────────────────────────────────┐
│  THIS WEEK                          │
│  ✓ Mon - Swing Lab (completed)      │
│  ✓ Tue - Scoring Lab (completed)    │
│  → Wed - Build the Bag (today)      │
│  ○ Thu - Calibration Day            │
│  ○ Fri - Play Golf                  │
└─────────────────────────────────────┘
```

---

## Missed Day Handling

| Scenario | Outcome |
|----------|---------|
| Miss 1 day | Can still complete quest (4/5) |
| Miss 2 days | Quest fails, start new quest next week |
| Make up day | Cannot make up missed days |
| Skip ahead | Cannot do Thursday before Wednesday |

**Design philosophy:** The schedule exists to build habits. Allowing unlimited make-ups defeats the purpose.

---

## Data Model

```typescript
interface Quest {
  id: string;
  name: string;
  weekNumber: number;
  primaryFocus: MasteryCategory;
  missions: DailyMission[];
  startDate: string;
  status: 'active' | 'completed' | 'failed';
  completedDays: number;
  perfectWeek: boolean;
}

interface DailyMission {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
  type: 'swing-lab' | 'scoring-lab' | 'build-bag' | 'calibration' | 'play-golf';
  duration: number; // minutes
  segments: MissionSegment[];
  completionCriteria: string[];
  status: 'locked' | 'available' | 'completed' | 'missed';
  xpReward: number;
  masteryRewards: { category: MasteryCategory; points: number }[];
}

interface MissionSegment {
  name: string;
  duration: number;
  description: string;
  optional: boolean;
}
```

---

## Implementation Notes

### Quest Assignment
- New quest assigned every Monday at 12:00 AM local time
- If previous quest incomplete, mark as failed and start fresh
- Store quest history for analytics

### Day Availability
- Monday mission available Monday 12:00 AM - Tuesday 11:59 PM
- 48-hour window to complete each day
- After window closes, day is marked "missed"

### Session Linking
- When user logs a session, prompt: "Is this for today's mission?"
- Auto-detect based on focus area and duration
- Manual override available

---

## 30-Minute Templates

For busy days, offer condensed versions:

| Day | 30-Min Version |
|-----|----------------|
| Monday | 5 min warm-up, 10 min path work, 10 min driver, 5 min transfer |
| Wednesday | 5 min warm-up, 20 min climb the bag, 5 min random |
| Friday | 5 min warm-up, 20 min play holes, 5 min review |

Tuesday and Thursday are already 30 minutes.

---

## Quest Notifications

| Trigger | Notification |
|---------|--------------|
| New quest available | "Your new quest begins today: [Quest Name]" |
| Mission reminder (morning) | "Today's mission: [Mission Name]. Ready to practice?" |
| Mission reminder (evening) | "Don't forget today's mission! 3 hours left." |
| Mission completed | "Mission complete! +75 XP. [X/5] days done." |
| Quest completed | "Quest complete! +500 XP. New quest starts Monday." |
| Perfect week | "Perfect week! +750 XP total. You're on fire! 🔥" |
| Quest failed | "Quest incomplete. New quest starts Monday. You got this!" |

