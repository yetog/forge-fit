# Forge Fit Golf - Product Brainstorm

> Comprehensive vision document capturing product direction, features, and design inspiration.
> Session Date: November 2026

---

## Core Vision Statement

**A golf improvement platform where you can:**
- Review, edit, and use AI analysis on swing footage
- Do side-by-side comparisons
- Map your practice and progression
- Feel like you're in a Square Enix game (Final Fantasy, Kingdom Hearts)

---

## Design Inspiration: Square Enix

### Target Aesthetic
The UI should feel like playing a Square Enix RPG - specifically:

| Game | What to Steal |
|------|---------------|
| **Final Fantasy 7 Rebirth** | Menu systems, character stats, materia/skill UI |
| **Final Fantasy 15** | Modern/sleek HUD, map interface, quest tracking |
| **Final Fantasy 10** | Sphere Grid (skill tree) - already using in Dev Quest |
| **Kingdom Hearts** | Ability menus, synthesis systems, world navigation |

### Square Enix UI Patterns to Research
- [ ] Menu transitions and animations
- [ ] Stat display cards
- [ ] Skill tree/sphere grid layouts
- [ ] Quest log interfaces
- [ ] Character profile screens
- [ ] Progress bars and level indicators
- [ ] Achievement/trophy displays
- [ ] Map/navigation systems

### Visual Elements
- Dark backgrounds with glowing accents
- Geometric patterns and borders
- Smooth transitions between screens
- Particle effects for achievements
- Metallic/crystalline textures
- Dynamic lighting effects on UI elements

---

## User Journeys

### Journey 1: The Practice Logger
**Persona:** Golfer who practices 2-3x/week at the range
**Goal:** Track what they're working on, see improvement over time

```
Open App → See Today's Mission → Go to Range →
Log Session (clubs, drills, notes) → Review Progress →
Check Skill Tree Growth → Close App
```

**Key Features:**
- Quick session logging
- Drill recommendations
- Progress visualization
- Streak tracking

---

### Journey 2: The Swing Analyst
**Persona:** Golfer obsessed with swing mechanics
**Goal:** Record swings, compare to pros/previous, get AI feedback

```
Open App → Go to Swing Studio → Record Swing →
Trim Video → Run AI Analysis → Compare Side-by-Side →
Save to Library → Review Assessment → Practice Drill
```

**Key Features:**
- Video recording/upload
- AI pose estimation
- Side-by-side comparison
- Phase markers (address, top, impact, finish)
- Assessment categories
- Drill recommendations

---

### Journey 3: The Round Tracker
**Persona:** Golfer who plays 1-2 rounds/week
**Goal:** Log scores, track stats, see handicap trend

```
Open App → Start New Round → Log Hole-by-Hole →
(Insert Shot Clips per Hole) → Complete Round →
View Stats → Watch Round Highlight Reel → Share to Social
```

**Key Features:**
- Hole-by-hole scoring
- GIR/FIR/Putts tracking
- Shot clipping during round
- Auto-compiled highlight reel
- Handicap calculation
- Social sharing

---

### Journey 4: The Lesson Taker
**Persona:** Golfer working with a coach
**Goal:** Track lessons, practice assigned drills, show progress to coach

```
Open App → View Coach's Assignment → Practice Assigned Drills →
Record Swing for Coach Review → Submit for Feedback →
Receive Coach Notes → Track Improvement
```

**Key Features:**
- Coach connection
- Assigned drill tracking
- Video submission for review
- Coach annotation tools
- Progress sharing

---

### Journey 5: The Competitor
**Persona:** Golfer who wants to compete and compare
**Goal:** See how they stack up, complete challenges, earn achievements

```
Open App → Check Leaderboards → Join Weekly Challenge →
Complete Challenge Requirements → Earn XP + Badge →
Share Achievement → Climb Leaderboard
```

**Key Features:**
- Leaderboards
- Weekly/monthly challenges
- Achievement badges
- Social sharing
- Friend comparisons

---

## Feature Categories

### 1. Swing Studio (Core Differentiator)
| Feature | Priority | Notes |
|---------|----------|-------|
| Video recording | P0 | In-app camera |
| Video upload | P0 | From gallery |
| Video trimming | P0 | Select swing interval |
| AI pose estimation | P0 | MediaPipe landmarks |
| Side-by-side comparison | P0 | My swing vs reference |
| Phase markers | P1 | Address, Top, Impact, Finish |
| Slow motion playback | P1 | 0.25x, 0.5x, 1x |
| Skeleton overlay | P1 | Visual feedback |
| Assessment report | P1 | 8 categories |
| Drill recommendations | P1 | Based on issues |
| **Shot tracing** | P2 | Draw ball flight on video |
| Coach annotations | P2 | Drawing tools |

### 2. Round Tracking
| Feature | Priority | Notes |
|---------|----------|-------|
| Hole-by-hole scoring | P0 | Par, score, putts |
| GIR/FIR tracking | P0 | Per hole |
| Round history | P0 | All rounds logged |
| Basic stats | P0 | Avg score, GIR%, etc |
| Handicap calculation | P1 | USGA formula |
| **Round clipping** | P1 | Insert clips per hole |
| **Auto highlight reel** | P1 | Compile clips into video |
| Course database | P2 | Pull course info |
| GPS/rangefinder | P3 | Future integration |

### 3. Practice & Progression
| Feature | Priority | Notes |
|---------|----------|-------|
| Session logging | P0 | Duration, focus, notes |
| Drill library | P0 | Searchable drills |
| Drill execution | P1 | Timer, rep counter |
| 5-day practice system | P1 | As quests |
| Skill tree visualization | P1 | FF10 sphere grid style |
| XP system | P1 | Participation rewards |
| Mastery system | P1 | Demonstrated improvement |
| Streaks | P1 | Consecutive days |
| Custom drills | P2 | User-created |

### 4. Club Management
| Feature | Priority | Notes |
|---------|----------|-------|
| Bag setup | P0 | 14 clubs |
| Distance per club | P0 | User-entered |
| Club recommendations | P1 | "What club for X yards?" |
| Gap analysis | P1 | Identify distance gaps |
| Distance tracking | P2 | Over time |

### 5. Social & Compete
| Feature | Priority | Notes |
|---------|----------|-------|
| Achievement badges | P1 | Unlockable |
| Weekly challenges | P2 | Community events |
| Leaderboards | P2 | By handicap tier |
| Social sharing | P2 | To Instagram, etc |
| Friend connections | P3 | Compare with friends |

---

## Innovative Features (Differentiators)

### 1. Round Clipping System
**Concept:** During a round, golfer can quickly insert a video clip tagged to the current hole.

```
Playing Hole 7 → Great shot → Quick record (10 sec) →
Auto-tagged "Hole 7 - Approach" → Continue playing →
End of round → All clips compiled into highlight reel
```

**Why it matters:**
- No one does this well
- Trackman has capability but doesn't offer it
- Creates shareable content automatically
- Builds engagement and retention

**Implementation:**
- Quick-record button during active round
- Auto-tagging based on hole/position
- Cloud storage for clips
- End-of-round compilation
- Export to social media

### 2. Shot Tracing
**Concept:** Draw/animate the ball flight path on recorded video.

**Options:**
- Manual drawing tool
- AI-assisted path detection
- Template overlays

### 3. Square Enix Skill Tree
**Concept:** Visual skill tree like FF10's Sphere Grid showing golf mastery.

```
         [DRIVING] ████░░ 67%
              │
      ┌───────┴───────┐
   [IRONS]        [WOODS]
   ██░░░░         █░░░░░
      │               │
      └───────┬───────┘
         [SHORT GAME]
          ███░░░ 55%
              │
         [PUTTING]
          ██░░░░ 40%
              │
        [COURSE MGMT]
          █░░░░░ 20%
```

Each node:
- Shows mastery percentage
- Links to drills
- Tracks milestones
- Unlocks at thresholds

---

## Competitive Analysis Needed

### Golf Apps to Review
| App | Focus | What to Learn |
|-----|-------|---------------|
| Swing AI | AI analysis | UX patterns (documented) |
| Golfshot | GPS/scoring | Round tracking UX |
| 18Birdies | Social/GPS | Community features |
| Arccos | Shot tracking | Data visualization |
| Hole19 | Rangefinder | Course integration |
| V1 Golf | Video analysis | Coach features |
| Skillest | Lessons | Coach marketplace |
| Trackman | Launch monitor | Data presentation |

### Questions to Answer
- What features do golfers actually use?
- What's missing from current apps?
- What frustrates golfers about existing tools?
- How do they handle video storage/bandwidth?
- What monetization models work?

---

## Investor Pitch Deck Outline

### Slide 1: Title
**Forge Fit Golf** - The RPG of Golf Improvement

### Slide 2: Problem
- Golfers lack structured improvement paths
- Video analysis tools are fragmented
- Practice feels aimless
- No gamification = no engagement

### Slide 3: Solution
- RPG-style progression system
- Integrated swing studio with AI
- Quest-based practice structure
- Beautiful, game-inspired UI

### Slide 4: Key Features
- Swing Studio (video + AI)
- Skill Tree progression
- Training Quests
- Round Tracking with Clip Compilation

### Slide 5: Differentiators
- Square Enix-inspired design
- Round clipping (unique feature)
- Honest confidence levels (no false precision)
- XP vs Mastery separation

### Slide 6: User Journeys
- Practice Logger
- Swing Analyst
- Round Tracker
- Lesson Taker
- Competitor

### Slide 7: Market
- Golf app market size
- Target demographic
- Growth trends

### Slide 8: Business Model
- Freemium base
- Pro subscription ($9.99-14.99/mo)
- Coach marketplace (future)

### Slide 9: Technology
- React Native / React
- MediaPipe pose estimation
- Supabase backend
- R2/S3 video storage
- Cost: ~$32/month at 1K users

### Slide 10: Roadmap
- Sprint 1-4 overview
- MVP timeline
- Beta launch plan

### Slide 11: Team
- Background
- Golf credibility
- Technical capability

### Slide 12: Ask
- Investment amount
- Use of funds
- Milestones

---

## Next Steps

1. **Research Square Enix UI** - Screenshots, patterns, animations
2. **Review competitor golf apps** - Document best features
3. **Define XP/Mastery rules** - Specific values and thresholds
4. **Create visual design system** - Colors, components, animations
5. **Update sprint plan** - Incorporate new features
6. **Build slide deck** - For investor conversations
7. **Prototype core screens** - Figma or code

---

## Notes for Trackman

> "They have the capabilities to be doing this but don't."

**Opportunity:** Round clipping and highlight reel compilation is a feature gap in the market. Trackman has the technology (ball tracking, video) but hasn't productized the social sharing angle.

**Our advantage:** We can build this as a mobile-first experience without requiring expensive hardware.

---

## Questions to Resolve

1. What's the MVP feature set for beta?
2. iOS-first or cross-platform from start?
3. Free tier limitations?
4. Video storage limits/costs at scale?
5. Coach marketplace timing?
6. Hardware integrations (Trackman, Garmin)?

