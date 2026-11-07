---
marp: true
theme: default
paginate: true
backgroundColor: #1A1A2E
color: #FFFFFF
style: |
  section {
    font-family: 'Inter', sans-serif;
  }
  h1 {
    color: #FFD700;
  }
  h2 {
    color: #2E7D32;
  }
  h3 {
    color: #90CAF9;
  }
  strong {
    color: #FFD700;
  }
  code {
    background-color: #2D2D44;
    color: #90CAF9;
  }
  a {
    color: #FFD700;
  }
  ul {
    line-height: 1.6;
  }
  table {
    font-size: 0.9em;
  }
  th {
    background-color: #2E7D32;
    color: #FFFFFF;
  }
  td {
    background-color: #2D2D44;
  }
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Forge Fit Golf

## The RPG of Golf Improvement

**Structured practice. Visible progression. Game-quality design.**

---

<!-- Speaker notes:
Golf is the RPG of sports - it has character stats, skill trees, progression paths, and a constant pursuit of mastery. Yet no golf app treats it that way. Forge Fit changes this with an RPG-inspired experience that makes practice feel like leveling up.
-->

# The Problem

## Golfers Lack Structured Improvement Paths

- **Fragmented tools** - Separate apps for scoring, video, practice tracking
- **Aimless practice** - No guidance on what to work on next
- **Invisible progress** - Hard to see improvement over time
- **Zero gamification** - No engagement loop, no motivation
- **Analysis paralysis** - Metrics without actionable guidance

---

<!-- Speaker notes:
Current golf apps treat improvement as a byproduct. They give you data but not direction. Players bounce between apps trying to piece together their development journey.
-->

# The Solution

## RPG Progression Meets Golf Training

```
       Sign Up           Choose Goal          First Quest
          |                   |                    |
          v                   v                    v
    [Create Profile] --> [Break 90/80/Scratch] --> [Driving Quest]
                                                       |
                              +------------------------+
                              |
                              v
                     [Record Swing] --> [AI Analysis]
                              |                |
                              v                v
                        [XP Earned]    [Mastery Progress]
                              |                |
                              +-------+--------+
                                      |
                                      v
                              [Continue Quest Chain]
```

---

<!-- Speaker notes:
We give golfers what gamers have always had: a clear path forward, visible progression, and rewards for effort. Every session contributes to their journey.
-->

# Key Features

## Four Pillars of Improvement

| Feature | What It Does |
|---------|--------------|
| **Swing Studio** | Video capture, AI pose analysis, side-by-side comparison |
| **Skill Tree** | FF10-style mastery visualization across 6 golf disciplines |
| **Training Quests** | 5-day practice system as guided missions with XP rewards |
| **Round Clipping** | Quick-record highlights per hole, auto-compile reel |

### Plus:
- Daily missions and streak tracking
- Achievement badges and unlockables
- Handicap calculation and stats dashboard

---

<!-- Speaker notes:
Swing Studio is the analytical core. Skill Tree provides the progression visualization. Training Quests give structure. Round Clipping creates shareable content - something no competitor does well.
-->

# Differentiators

## What Sets Forge Fit Apart

### 1. Square Enix-Inspired Design
Dark UI with glowing accents, game-quality animations, satisfying unlocks

### 2. Round Clipping (Market Gap)
- Quick-record shots during play
- Auto-tag to current hole
- End-of-round highlight reel
- **Trackman has capability but doesn't offer this**

### 3. XP vs Mastery Separation
- **XP** = Participation (logged sessions, watched lessons)
- **Mastery** = Demonstrated skill (improved metrics, passed challenges)
- *No false precision - honest confidence levels*

---

<!-- Speaker notes:
The visual design creates emotional engagement. Round clipping fills a genuine market gap. XP vs Mastery prevents the app from lying to users about their actual skill level.
-->

# User Journeys

## Five Core Personas

| Persona | Primary Goal | Key Features Used |
|---------|--------------|-------------------|
| **Practice Logger** | Track what they're working on | Session logging, drills, streaks |
| **Swing Analyst** | Obsess over mechanics | Swing Studio, AI analysis, comparisons |
| **Round Tracker** | Log scores, track handicap | Scoring, GIR/FIR, round clipping |
| **Lesson Taker** | Practice coach assignments | Drill tracking, video submission |
| **Competitor** | Earn badges, climb leaderboards | Achievements, challenges, social |

---

<!-- Speaker notes:
Each persona has a complete journey. The app adapts to how golfers want to improve - some want data, some want structure, some want competition. We serve all five.
-->

# Market Opportunity

## Golf App Market

- **25M+ active golfers** in the US alone
- **Golf app market**: $1.5B+ annually
- **Post-pandemic growth**: Sustained interest in golf fitness/improvement
- **Hardware costs declining**: TrackMan $20K+ vs smartphone-based analysis

### Competitive Landscape
| App | Focus | Gap |
|-----|-------|-----|
| Golfshot/18Birdies | GPS/Scoring | No video, no progression |
| V1 Golf/Skillest | Video lessons | No gamification, no quests |
| Arccos | Shot tracking | Hardware required, no practice |
| **Forge Fit** | **RPG Progression** | **Uncontested** |

---

<!-- Speaker notes:
No one owns the progression/gamification angle in golf. Existing apps are either GPS-focused or lesson-focused. The RPG approach is a blue ocean.
-->

# Business Model

## Freemium + Pro Subscription

### Free Tier
- 3 swing analyses per month
- Basic scoring
- Limited drill library
- Single quest active

### Pro Subscription ($9.99-14.99/month)
- Unlimited swing analyses
- Full drill library
- Unlimited quests
- Round clipping + highlight reels
- Advanced stats and trends
- Priority cloud processing

### Future Revenue
- Coach marketplace (10-20% commission)
- Hardware integrations (partnerships)

---

<!-- Speaker notes:
Freemium gets users hooked on the progression system. Pro unlocks the full experience. Coach marketplace creates a B2B revenue stream without requiring us to hire coaches.
-->

# Technology Stack

## Lean, Scalable Architecture

```
+------------------+     +------------------+     +------------------+
|   React Native   | --> |    Supabase      | --> |   R2/S3 Storage  |
|   (Mobile App)   |     |   (Auth + DB)    |     |   (Video Files)  |
+------------------+     +------------------+     +------------------+
         |
         v
+------------------+     +------------------+
|   MediaPipe      | --> |  Analysis Rules  |
|   (Pose Est.)    |     |  (Swing Eval)    |
+------------------+     +------------------+
```

### Cost Model (1,000 MAU, 5 swings each)
| Component | Monthly Cost |
|-----------|--------------|
| Supabase Pro | $25 |
| R2 Storage (100GB) | $1.50 |
| CPU Analysis | $6 |
| **Total** | **~$32/month** |

---

<!-- Speaker notes:
On-device MediaPipe keeps costs minimal. No expensive GPU inference required for MVP. Supabase provides auth, database, and real-time capabilities in one package.
-->

# Development Roadmap

## Four Design Sprints

| Sprint | Focus | Key Deliverables |
|--------|-------|------------------|
| **Sprint 1** | Product Experience | User journeys, XP/Mastery rules, design system |
| **Sprint 2** | High-Fidelity Prototype | Player Hub, Skill Tree, Training Quests, Round Clipping |
| **Sprint 3** | Functional Vertical Slice | Upload -> Trim -> Analyze -> Compare -> Save |
| **Sprint 4** | Economics & Validation | Cost benchmarks, beta feedback, usage analytics |

### Timeline
- **Sprints 1-2**: 8 weeks (Prototype)
- **Sprint 3**: 6 weeks (Functional MVP)
- **Sprint 4**: 4 weeks (Validation)
- **Beta Launch**: 18 weeks from start

---

<!-- Speaker notes:
We're not building everything at once. Sprint 3 delivers a working vertical slice that can be tested with real users. Sprint 4 validates unit economics before scaling.
-->

# Team

## Background & Credibility

### Technical Capability
- Full-stack development (React, TypeScript, Python)
- AI/ML integration experience
- Production infrastructure deployment
- Mobile-first design expertise

### Golf Domain Knowledge
- Active golfer with handicap tracking
- Understanding of practice psychology
- Connected to golf community for beta testing

### Product Philosophy
- "Don't present 2D-derived values as actual measurements"
- Honest confidence levels over false precision
- User engagement through earned rewards, not manipulation

---

<!-- Speaker notes:
We have the technical chops to build this and the golf knowledge to get the product right. The honest approach to AI limitations will build user trust.
-->

# The Ask

## Investment & Milestones

### Seeking: $150,000 Seed

| Use of Funds | Amount |
|--------------|--------|
| Development (6 months) | $90,000 |
| Design & UX | $25,000 |
| Infrastructure & Testing | $15,000 |
| Marketing & Beta Acquisition | $15,000 |
| Legal & Operations | $5,000 |

### Milestones
1. **Month 3**: Functional prototype with 100 beta testers
2. **Month 5**: MVP launch on iOS App Store
3. **Month 8**: 1,000 MAU, 10% conversion to Pro
4. **Month 12**: $10K MRR, Android launch

---

<!-- Speaker notes:
$150K gets us to a validated MVP with paying customers. The milestones are specific and measurable. We'll hit profitability at ~3,000 Pro subscribers.
-->

<!-- _class: lead -->
<!-- _paginate: false -->

# Forge Fit Golf

## Turn Practice Into Progress

**Contact:** isayahy@gmail.com

*The RPG of Golf Improvement*

---

<!-- Speaker notes:
Golf is already an RPG - we're just making it feel like one. Every practice session, every round, every swing analysis contributes to the player's progression. That's the experience no one else offers.
-->
