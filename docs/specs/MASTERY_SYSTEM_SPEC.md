# Mastery System Specification

> How golf skill mastery is calculated and displayed in Forge Fit Golf.
> Status: Ready for Implementation

---

## Philosophy

**Mastery represents demonstrated improvement, not participation.**

Unlike XP (which rewards showing up), Mastery requires evidence:
- Completing skill-specific drills
- Passing standardized challenges
- Achieving performance milestones
- Demonstrating consistency over time

A Level 30 player might have 20% Putting Mastery if they've focused on driving. The numbers are honest.

---

## Six Mastery Categories

| Category | Color | Focus Areas |
|----------|-------|-------------|
| **Driving** | Red (#C62828) | Distance, accuracy, tee shots |
| **Irons** | Blue (#1565C0) | Ball striking, trajectory, approach shots |
| **Woods** | Green (#2E7D32) | Fairway woods, hybrids, long shots |
| **Short Game** | Purple (#7B1FA2) | Chipping, pitching, bunker play |
| **Putting** | Yellow (#F9A825) | Speed control, read, stroke |
| **Course Management** | Orange (#EF6C00) | Strategy, club selection, decision making |

---

## Mastery Points System

Each category has a maximum of **100 Mastery Points (MP)**.

Mastery percentage = MP / 100

### How to Earn Mastery Points

#### 1. Drill Completion (Max 40 MP per category)

| Drill Difficulty | MP Earned | Max per Category |
|------------------|-----------|------------------|
| Beginner drill | 2 MP | - |
| Intermediate drill | 4 MP | - |
| Advanced drill | 6 MP | - |
| **Category cap** | - | 40 MP |

*Note: Same drill can be completed multiple times but gives diminishing returns (50% on 2nd completion, 25% on 3rd, 0 after).*

#### 2. Challenge Completion (Max 30 MP per category)

Each category has 6 standardized challenges worth 5 MP each.

**Driving Challenges:**
1. Hit 5/10 fairways at the range (target window)
2. Achieve 3 consecutive center strikes
3. Complete "Build the Bag" up sequence without right miss
4. Record swing with <5° path variance over 5 shots
5. Score 15+ on Thursday calibration test (driver only)
6. Complete Friday simulation with 0 OB drives

**Irons Challenges:**
1. Hit 5/10 greens at target distance
2. Achieve consistent trajectory (3 shots same height)
3. Complete "Build the Bag" 7i-5i without pattern change
4. Score 15+ on calibration test (7 iron)
5. Land 3 consecutive approach shots within 30 feet
6. Complete distance ladder (50/75/100/125/150)

**Short Game Challenges:**
1. Up and down 3/5 from 20 yards
2. Land 5 consecutive chips on green
3. Complete distance control drill (10/20/30/40/50 yards)
4. Get up and down from bunker
5. Flop shot to tight pin (within 10 feet)
6. Score 15+ on Tuesday scoring lab

**Putting Challenges:**
1. Make 5/10 from 6 feet
2. 3-putt or better from 30+ feet (5 attempts)
3. Lag 5 consecutive putts within 3 feet
4. Complete speed control drill (uphill/downhill/sidehill)
5. Read and execute a double-breaker
6. Make 3 consecutive putts under pressure (after miss)

**Woods Challenges:**
1. Hit 3/5 fairways with 3-wood
2. Advance ball 200+ yards from fairway
3. Hit hybrid to target within 20 yards
4. Complete "Build the Bag" through woods
5. Execute punch shot under trees
6. Fade and draw on command

**Course Management Challenges:**
1. Play 3 simulated holes without double bogey
2. Successfully lay up when required
3. Choose correct club for 5 approach shots
4. Identify and avoid trouble on 3 holes
5. Score within 2 strokes of expected on 9 holes
6. Execute pre-shot routine 10 times perfectly

#### 3. Round Performance (Max 20 MP per category)

Based on actual round statistics when logged.

**Driving:**
- FIR 50%+: 5 MP
- FIR 65%+: 10 MP (replaces 5)
- FIR 75%+: 15 MP (replaces 10)
- FIR 85%+: 20 MP (replaces 15)

**Irons (GIR as proxy):**
- GIR 25%+: 5 MP
- GIR 40%+: 10 MP
- GIR 55%+: 15 MP
- GIR 70%+: 20 MP

**Putting:**
- <36 putts/round: 5 MP
- <33 putts/round: 10 MP
- <30 putts/round: 15 MP
- <28 putts/round: 20 MP

**Short Game (Up & Down % if tracked):**
- 25%+: 5 MP
- 40%+: 10 MP
- 55%+: 15 MP
- 70%+: 20 MP

**Course Management (Score vs Handicap):**
- Within handicap: 5 MP
- 2 under handicap: 10 MP
- 5 under handicap: 15 MP
- Best round ever: 20 MP

*Woods mastery from rounds is calculated from fairway wood/hybrid performance when tracked.*

#### 4. Consistency Bonus (Max 10 MP per category)

Awarded for demonstrating skill over time:

| Achievement | MP |
|-------------|-----|
| Practice this skill 5 times | 2 MP |
| Practice this skill 10 times | 2 MP |
| Practice this skill 25 times | 3 MP |
| Maintain 50%+ success rate over 10 sessions | 3 MP |

---

## Mastery Calculation

```typescript
interface CategoryMastery {
  category: MasteryCategory;
  drillPoints: number;      // Max 40
  challengePoints: number;  // Max 30
  roundPoints: number;      // Max 20
  consistencyPoints: number; // Max 10
  totalPoints: number;      // Max 100
  percentage: number;       // 0-100
}

function calculateMastery(category: MasteryCategory): CategoryMastery {
  const drillPoints = Math.min(40, sumDrillPoints(category));
  const challengePoints = Math.min(30, sumChallengePoints(category));
  const roundPoints = Math.min(20, sumRoundPoints(category));
  const consistencyPoints = Math.min(10, sumConsistencyPoints(category));

  const totalPoints = drillPoints + challengePoints + roundPoints + consistencyPoints;

  return {
    category,
    drillPoints,
    challengePoints,
    roundPoints,
    consistencyPoints,
    totalPoints,
    percentage: totalPoints
  };
}
```

---

## Mastery Tiers

| Percentage | Tier | Badge |
|------------|------|-------|
| 0-19% | Novice | Gray |
| 20-39% | Beginner | Bronze |
| 40-59% | Intermediate | Silver |
| 60-79% | Advanced | Gold |
| 80-99% | Expert | Platinum |
| 100% | Master | Diamond |

---

## Overall Mastery

**Overall Golf Mastery** = Average of all 6 categories

Display as: "Overall Mastery: 47%"

Or weighted by importance:
- Driving: 20%
- Irons: 20%
- Putting: 20%
- Short Game: 15%
- Woods: 15%
- Course Management: 10%

---

## Skill Tree Integration

Each skill tree node corresponds to mastery milestones:

```
[Driving]
    ├── [Distance] — Unlocks at 20% Driving Mastery
    │   ├── Power Drill — 5 MP
    │   └── Speed Training — 5 MP
    ├── [Accuracy] — Unlocks at 40% Driving Mastery
    │   ├── Target Practice — 5 MP
    │   └── Fairway Finder — 5 MP
    └── [Consistency] — Unlocks at 60% Driving Mastery
        ├── Repeatable Motion — 5 MP
        └── Pressure Test — 5 MP
```

---

## Display Examples

### Skill Tree Node
```
┌─────────────────┐
│   🔴 DRIVING    │
│     ████░░      │
│      67%        │
├─────────────────┤
│ Drills:    32/40│
│ Challenges: 20/30│
│ Rounds:    10/20│
│ Consistency: 5/10│
└─────────────────┘
```

### Player Hub Summary
```
┌─────────────────────────────────┐
│ MASTERY                         │
├─────────────────────────────────┤
│ 🔴 Driving     ████████░░  67%  │
│ 🔵 Irons       █████░░░░░  45%  │
│ 🟢 Woods       ███░░░░░░░  28%  │
│ 🟣 Short Game  ██████░░░░  55%  │
│ 🟡 Putting     ████░░░░░░  40%  │
│ 🟠 Course Mgmt ██░░░░░░░░  20%  │
├─────────────────────────────────┤
│ Overall: 42% (Intermediate)     │
└─────────────────────────────────┘
```

---

## Mastery vs XP

| Aspect | XP | Mastery |
|--------|-----|---------|
| Rewards | Participation | Demonstrated skill |
| Can decrease? | No | No (but progress can stall) |
| Affected by rounds | Slightly | Significantly |
| Max value | Level 50 | 100% per category |
| Display | Level badge | Percentage bars |
| Reset option | Prestige (future) | Never resets |

---

## Implementation Notes

### Storage
```typescript
interface PlayerMastery {
  driving: CategoryMastery;
  irons: CategoryMastery;
  woods: CategoryMastery;
  shortGame: CategoryMastery;
  putting: CategoryMastery;
  courseManagement: CategoryMastery;
  overall: number;
  lastUpdated: string;
}
```

### Update Triggers
- After drill completion
- After challenge completion
- After round logged with stats
- After consistency milestone reached

---

## Future Considerations

- **Video analysis impact:** AI-detected improvements could award mastery points
- **Coach verification:** Instructor can manually award mastery for lesson progress
- **Decay system:** Consider mastery decay if skill not practiced (not for MVP)
- **Comparative mastery:** Show where player ranks vs others at same level

