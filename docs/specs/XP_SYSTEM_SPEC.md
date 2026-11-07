# XP System Specification

> Detailed XP values, level curve, and progression rules for Forge Fit Golf.
> Status: Ready for Implementation

---

## Philosophy

**XP rewards participation and consistency, not skill.**

A golfer can be Level 30 while still being a beginner at driving accuracy. XP shows commitment to improvement, not actual improvement (that's Mastery).

---

## XP Values by Activity

### Practice Sessions

| Activity | XP | Notes |
|----------|-----|-------|
| Log a practice session | 50 | Base reward for showing up |
| Per 15 minutes practiced | +25 | Bonus: 30 min = +50, 60 min = +100 |
| Add reflection/notes | +25 | Encourages journaling |
| Complete session with all fields | +25 | Duration, focus area, notes, cue |

**Example:** 60-minute session with notes = 50 + 100 + 25 + 25 = **200 XP**

### Drills

| Activity | XP | Notes |
|----------|-----|-------|
| Complete a drill | 30 | Any drill from library |
| Complete 3+ drills in session | +50 | Bonus for variety |
| First time completing a drill | +20 | Discovery bonus |

### Swings & Analysis

| Activity | XP | Notes |
|----------|-----|-------|
| Record a swing | 20 | Basic recording |
| Complete AI analysis | 40 | Full analysis pipeline |
| Do side-by-side comparison | 30 | Compare to reference |
| Save swing to library | 10 | Organization reward |

### Rounds

| Activity | XP | Notes |
|----------|-----|-------|
| Log a round (9 holes) | 100 | Base for playing golf |
| Log a round (18 holes) | 200 | Full round bonus |
| Complete all stats (GIR/FIR/Putts) | +50 | Detailed tracking |
| Add round reflection | +25 | Post-round notes |
| Record round clips | +10 per clip | Max 50 XP from clips |

**Example:** 18-hole round with full stats, reflection, and 3 clips = 200 + 50 + 25 + 30 = **305 XP**

### Quests

| Activity | XP | Notes |
|----------|-----|-------|
| Complete daily mission | 75 | Per day of quest |
| Complete full 5-day quest | 500 | Weekly quest bonus |
| Perfect week (all 5 days) | +250 | No missed days |

**Example:** Perfect quest week = (75 × 5) + 500 + 250 = **1,125 XP**

### Streaks

| Streak Length | Daily Bonus |
|---------------|-------------|
| 2-6 days | +10 XP/day |
| 7-13 days | +25 XP/day |
| 14-29 days | +50 XP/day |
| 30+ days | +100 XP/day |

### Achievements

| Achievement Type | XP |
|------------------|-----|
| Minor achievement | 100 |
| Standard achievement | 250 |
| Major achievement | 500 |
| Legendary achievement | 1,000 |

---

## Level Curve

### Formula

Using a gentle exponential curve that starts easy and gradually increases:

```
XP for Level N = 100 × N × (1 + (N - 1) × 0.1)
```

Simplified: Each level requires about 10% more XP than the previous.

### Level Table

| Level | XP Required | Cumulative XP | Typical Activity |
|-------|-------------|---------------|------------------|
| 1 | 0 | 0 | Starting point |
| 2 | 100 | 100 | One good practice session |
| 3 | 220 | 320 | ~2 sessions |
| 4 | 360 | 680 | ~3-4 sessions |
| 5 | 520 | 1,200 | First week of practice |
| 10 | 1,900 | 7,600 | ~3 weeks consistent |
| 15 | 4,050 | 22,050 | ~2 months |
| 20 | 7,600 | 51,000 | ~4 months |
| 25 | 12,750 | 102,000 | ~6-8 months |
| 30 | 19,800 | 186,000 | ~1 year dedicated |
| 40 | 39,600 | 480,000 | ~2 years |
| 50 | 67,500 | 975,000 | Long-term player |

### Level Milestones

| Level | Title | Unlocks |
|-------|-------|---------|
| 1 | Rookie | App access |
| 5 | Beginner | Basic skill tree |
| 10 | Novice | Quest system |
| 15 | Apprentice | Advanced drills |
| 20 | Competitor | Leaderboard access |
| 25 | Dedicated | Custom quests |
| 30 | Devoted | Pro comparisons |
| 40 | Expert | Beta features |
| 50 | Master | All features |

---

## Max Level & Prestige

**Max Level:** 50

**Prestige System:** Not for MVP. Consider for future:
- At Level 50, option to "prestige" and restart at Level 1
- Prestige badge shows number of times completed
- Small permanent bonuses per prestige

---

## Weekly XP Targets

### Casual Player (2-3 sessions/week)
- 2 practice sessions (60 min each): ~400 XP
- 1 round logged: ~250 XP
- Streak bonuses: ~50 XP
- **Weekly total: ~700 XP**

### Active Player (5 sessions/week)
- 5 practice sessions: ~800 XP
- Quest completion: ~875 XP
- 1-2 rounds: ~400 XP
- Streak bonuses: ~125 XP
- **Weekly total: ~2,200 XP**

### Dedicated Player (daily)
- 7 sessions: ~1,200 XP
- Perfect quest: ~1,125 XP
- 2 rounds: ~500 XP
- Streak (7 days): ~175 XP
- Swing analysis: ~300 XP
- **Weekly total: ~3,300 XP**

---

## Implementation Notes

### Storage
```typescript
interface PlayerProgression {
  currentXP: number;
  totalXPEarned: number;
  level: number;
  streakDays: number;
  lastActivityDate: string;
}
```

### XP Award Function
```typescript
function awardXP(amount: number, source: XPSource): void {
  // Add to current XP
  // Check for level up
  // Trigger animation if level up
  // Log to history
}
```

### Level Up Check
```typescript
function getLevel(totalXP: number): number {
  let level = 1;
  let xpRequired = 0;
  while (totalXP >= xpRequired) {
    level++;
    xpRequired += Math.floor(100 * level * (1 + (level - 1) * 0.1));
  }
  return level - 1;
}
```

---

## Balancing Notes

- **First session should feel rewarding:** ~150-200 XP gets player close to Level 2
- **Weekly quest is the biggest XP source:** Encourages structured practice
- **Streaks compound quickly:** 30-day streak = 100 XP/day bonus
- **Rounds are valuable but not required:** Can level up without playing rounds
- **Analysis features reward engagement:** Not just logging, but using tools

---

## Open Questions (Resolved)

| Question | Decision |
|----------|----------|
| Linear or exponential? | Gentle exponential (10% increase per level) |
| Max level? | 50 for MVP |
| Prestige? | Not for MVP |
| Can XP be lost? | No, XP only increases |
| Streak reset? | Missing a day resets to 0 |

