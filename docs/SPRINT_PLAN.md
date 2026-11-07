# Forge Fit Golf - Sprint Plan

> Project management roadmap for RPG-style golf development platform.
> Last Updated: November 2026

---

## Overview

**Vision:** "Golf is the RPG of sports" — Build an RPG-style golf development platform where every practice session, swing analysis, lesson, and round contributes to the golfer's progression.

**Current State:** 5 pages, ~2,200 lines, localStorage only
**Target State:** RPG progression system with swing studio, quests, and cloud sync

**Core Documents:**
- `RPG_VISION.md` - Product philosophy and screen designs
- `SWING_AI_ANALYSIS.md` - Competitor UX patterns to adopt
- `GOLF_WIREFRAME.md` - Current architecture reference
- `PRODUCT_BRAINSTORM.md` - User journeys, features, pitch deck outline
- `SQUARE_ENIX_UI_RESEARCH.md` - FF10 Sphere Grid, FF15, Kingdom Hearts UI patterns

---

## Three Interconnected Systems

| System | Focus | Key Features |
|--------|-------|--------------|
| Player Experience | User journey | Onboarding, progression, skill tree, challenges |
| Swing Studio | Video analysis | Recording, trimming, AI analysis, comparisons |
| Intelligence Infrastructure | Backend | Pose estimation, pipelines, storage, cost controls |

---

## Revised Epics (RPG Direction)

| Epic | Priority | Effort | Description |
|------|----------|--------|-------------|
| E1: Player Hub | P0 | Medium | Command center dashboard with XP, quests, stats |
| E2: Skill Tree | P0 | Medium | Mastery branches for each golf discipline |
| E3: Training Quests | P1 | Medium | 5-day practice system as guided missions |
| E4: Swing Studio | P1 | Large | Video capture, comparison, AI analysis |
| E5: Rounds & Achievements | P1 | Medium | Score tracking, handicap, badges |
| E6: Onboarding Journey | P0 | Small | Character creation, goal selection |
| E7: Backend & Auth | P2 | Large | Supabase integration, cloud sync |
| E8: Progression System | P0 | Medium | XP, levels, mastery tracking |

---

## Design Sprint 1: Product Experience
**Focus:** User journeys, navigation, RPG progression rules, design system
**Acceptance:** A golfer can understand what to do next without explanation

### E6: Onboarding Journey
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E6-1 | Create character/profile screen with avatar | 3 | Todo |
| E6-2 | Build goal selection (Break 90/80/Scratch) | 2 | Todo |
| E6-3 | Add handicap/skill assessment flow | 3 | Todo |
| E6-4 | Create "What's your struggle?" screen | 2 | Todo |
| E6-5 | Build coaching profile (handedness, favorite club, typical miss) | 2 | Todo |
| E6-6 | Add notification permission with value prop | 1 | Todo |

### E8: Progression System
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E8-1 | Design XP system (participation rewards) | 3 | Todo |
| E8-2 | Design Mastery system (demonstrated improvement) | 5 | Todo |
| E8-3 | Create level progression with thresholds | 3 | Todo |
| E8-4 | Build progress persistence layer | 3 | Todo |

### Design System (Square Enix Inspired)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| DS-1 | Define color palette (charcoal #1A1A2E, muted green #2E7D32, gold #FFD700) | 2 | Todo |
| DS-2 | Create RPG-style component variants (glowing borders, metallic effects) | 3 | Todo |
| DS-3 | Build progress bar and XP display components | 2 | Todo |
| DS-4 | Design node states for skill tree (available, activated, locked) | 3 | Todo |
| DS-5 | Create achievement/unlock animations (particle effects) | 2 | Todo |

**Sprint 1 Total:** 39 points

---

## Design Sprint 2: High-Fidelity Prototype
**Focus:** Build the five core screens
**Acceptance:** Complete clickable flow from onboarding to first completed mission

### E1: Player Hub (Home)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E1-1 | Create Player Hub layout with avatar, level, XP bar | 5 | Todo |
| E1-2 | Build current quest card with progress | 3 | Todo |
| E1-3 | Add stats section (handicap, sessions, streak, best round) | 3 | Todo |
| E1-4 | Create "Today's Mission" with CTA | 2 | Todo |
| E1-5 | Implement "Continue Training" primary action | 2 | Todo |

### E2: Skill Tree (FF10 Sphere Grid Style)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E2-1 | Design skill tree data structure (nodes, connections, states) | 3 | Todo |
| E2-2 | Build visual skill tree with pan/zoom canvas | 5 | Todo |
| E2-3 | Create mastery percentage display per skill | 2 | Todo |
| E2-4 | Add drill/milestone links within each branch | 3 | Todo |
| E2-5 | Implement path highlighting (available routes) | 3 | Todo |
| E2-6 | Add current position marker with glow effect | 2 | Todo |

### E3: Training Quests
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E3-1 | Create active quest card with day-by-day progress | 3 | Todo |
| E3-2 | Build weekly schedule display (Mon-Fri) | 3 | Todo |
| E3-3 | Add "Start Today's Mission" flow | 3 | Todo |
| E3-4 | Display quest rewards (XP, mastery unlocks) | 2 | Todo |
| E3-5 | Integrate 5-day practice system as quests | 5 | Todo |

### E5: Rounds & Achievements
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E5-1 | Create round entry form (course, date, tees) | 3 | Todo |
| E5-2 | Build hole-by-hole score entry | 5 | Todo |
| E5-3 | Add GIR/FIR/putts tracking per hole | 3 | Todo |
| E5-4 | Display personal records section | 2 | Todo |
| E5-5 | Build achievement badges (locked/unlocked states) | 3 | Todo |
| E5-6 | Add handicap calculation and display | 3 | Todo |

### E9: Round Clipping (Differentiator)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E9-1 | Create quick-record button during active round | 3 | Todo |
| E9-2 | Build clip tagging system (auto-tag to current hole) | 3 | Todo |
| E9-3 | Implement clip bucket storage per round | 3 | Todo |
| E9-4 | Create end-of-round clip compilation | 5 | Todo |
| E9-5 | Build highlight reel export/share | 3 | Todo |

### Navigation
| ID | Story | Points | Status |
|----|-------|--------|--------|
| NAV-1 | Build bottom navigation (Home, Train, Studio, Play, Profile) | 3 | Todo |
| NAV-2 | Add active state and transitions | 2 | Todo |

**Sprint 2 Total:** 65 points

---

## Design Sprint 3: Functional Vertical Slice
**Focus:** Upload → Trim → Analyze → Compare → Save
**Acceptance:** Real video completes the process with observable performance and errors

### E4: Swing Studio
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E4-1 | Create Swing Studio layout with dual video panels | 5 | Todo |
| E4-2 | Build video upload/record interface | 5 | Todo |
| E4-3 | Implement video trimming tool | 5 | Todo |
| E4-4 | Create playback controls with scrubber | 3 | Todo |
| E4-5 | Add slow motion playback (0.25x, 0.5x) | 2 | Todo |
| E4-6 | Build swing phase markers (Address, Top, Impact, Finish) | 3 | Todo |
| E4-7 | Create side-by-side comparison view | 5 | Todo |
| E4-8 | Add comparison mode selector (Previous/Pro/Coach) | 2 | Todo |
| E4-9 | Implement synchronized playback | 5 | Todo |
| E4-10 | Build video storage (local first) | 3 | Todo |

### AI Analysis Pipeline
| ID | Story | Points | Status |
|----|-------|--------|--------|
| AI-1 | Integrate MediaPipe pose detection | 8 | Todo |
| AI-2 | Draw skeleton overlay on video | 5 | Todo |
| AI-3 | Detect swing phases automatically | 5 | Todo |
| AI-4 | Calculate joint angles at key positions | 3 | Todo |
| AI-5 | Generate swing assessment (8 categories from Swing AI) | 5 | Todo |
| AI-6 | Create practice plan from analysis | 3 | Todo |
| AI-7 | Generate swing thoughts (3 mental cues) | 2 | Todo |

### Analysis Results
| ID | Story | Points | Status |
|----|-------|--------|--------|
| AR-1 | Build tabbed results view (Analysis/Drills/Thoughts) | 3 | Todo |
| AR-2 | Create assessment accordion components | 3 | Todo |
| AR-3 | Add drill cards with instructions | 2 | Todo |
| AR-4 | Display confidence levels honestly | 2 | Todo |
| AR-5 | Store analysis results with session | 3 | Todo |

### Shot Tracing (Future Differentiator)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| ST-1 | Create ball flight drawing tool | 5 | Todo |
| ST-2 | Add trajectory template overlays | 3 | Todo |
| ST-3 | Implement shot trace animation playback | 5 | Todo |

**Sprint 3 Total:** 95 points

---

## Design Sprint 4: Economics & Validation
**Focus:** Processing benchmarks, usage analytics, beta feedback
**Acceptance:** Measured cost per analysis, processing latency, and repeat engagement

### E7: Backend & Auth
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E7-1 | Set up Supabase project | 2 | Todo |
| E7-2 | Create database schema (users, sessions, progress, videos) | 5 | Todo |
| E7-3 | Build sign up flow (email/password) | 3 | Todo |
| E7-4 | Build sign in flow | 2 | Todo |
| E7-5 | Add Google OAuth | 2 | Todo |
| E7-6 | Migrate localStorage to Supabase | 5 | Todo |
| E7-7 | Implement offline-first with sync | 5 | Todo |
| E7-8 | Add profile settings page | 3 | Todo |

### Infrastructure
| ID | Story | Points | Status |
|----|-------|--------|--------|
| INF-1 | Set up R2/S3 for video storage | 3 | Todo |
| INF-2 | Create video compression pipeline | 5 | Todo |
| INF-3 | Implement cost tracking per analysis | 3 | Todo |
| INF-4 | Add processing latency monitoring | 2 | Todo |
| INF-5 | Create usage analytics dashboard | 5 | Todo |

### Beta Testing
| ID | Story | Points | Status |
|----|-------|--------|--------|
| BETA-1 | Implement feature flags for beta | 2 | Todo |
| BETA-2 | Add feedback collection in-app | 3 | Todo |
| BETA-3 | Create beta user onboarding | 2 | Todo |
| BETA-4 | Build admin dashboard for metrics | 5 | Todo |

**Sprint 4 Total:** 57 points

---

## Backlog (Future)

| ID | Feature | Epic | Notes |
|----|---------|------|-------|
| B-1 | Pre-round warmup routine builder | E3 | From golf notes |
| B-2 | Lesson notes from instructor | E5 | Attach to sessions |
| B-3 | Equipment tracking (ball, glove) | E4 | Beyond clubs |
| B-4 | Course database integration | E5 | Pull course data |
| B-5 | Weather conditions logging | E5 | Wind, temp |
| B-6 | Apple Watch integration | E7 | Heart rate during round |
| B-7 | Push notifications | E7 | Practice reminders |
| B-8 | Cloud GPU analysis tier | E4 | Advanced biomechanics |
| B-9 | Tournament mode | E5 | Multi-round events |
| B-10 | LLM-powered coaching explanations | E4 | Natural language feedback |
| B-11 | Social & Compete features | - | Leaderboards, challenges, sharing |
| B-12 | Professional reference swing library | E4 | Compare against tour pros |
| B-13 | Coach marketplace | - | Connect with instructors |
| B-14 | Trackman/Garmin integration | E4 | Hardware data import |
| B-15 | AI-assisted shot tracing | ST | Auto-detect ball flight |

---

## Differentiator Features

These features set Forge Fit apart from competitors:

| Feature | Description | Priority |
|---------|-------------|----------|
| **Round Clipping** | Quick-record clips during round, auto-tag to hole, compile highlight reel | P1 |
| **Shot Tracing** | Draw/animate ball flight path on recorded video | P2 |
| **FF10 Skill Tree** | Visual mastery progression inspired by Sphere Grid | P0 |
| **XP vs Mastery** | Honest separation of participation vs demonstrated skill | P0 |
| **Square Enix UI** | Game-quality visual design with animations | P0 |

> **Trackman Note:** They have the capability for round clipping but don't offer it. This is our mobile-first opportunity.

---

## Metrics & Success Criteria

### Sprint 1 Success (Product Experience)
- [ ] A golfer can understand what to do next without explanation
- [ ] Onboarding completion rate >80%
- [ ] XP/Mastery system rules clearly documented

### Sprint 2 Success (High-Fidelity Prototype)
- [ ] Complete clickable flow: onboarding → first mission
- [ ] All five core screens navigable
- [ ] First swing uploaded >60% of signups

### Sprint 3 Success (Functional Vertical Slice)
- [ ] Real video: Upload → Trim → Analyze → Compare → Save
- [ ] Observable performance with error handling
- [ ] Analysis latency <30 seconds

### Sprint 4 Success (Economics & Validation)
- [ ] Cost per analysis measured (<$0.02 target)
- [ ] Processing latency benchmarked
- [ ] Beta user retention tracked (>40% 7-day target)
- [ ] Quest completion rate >50%

---

## Technical Dependencies

```
Sprint 1: Design tokens, shadcn/ui variants
Sprint 2: react-router-dom (existing), framer-motion (animations)
Sprint 3: react-player, @mediapipe/pose, @tensorflow/tfjs
Sprint 4: @supabase/supabase-js, @supabase/auth-ui-react, R2/S3 SDK
```

---

## Cost Model (1,000 MAU, 5 swings each)

| Component | Monthly Cost |
|-----------|--------------|
| Supabase Pro | $25 |
| R2 Storage (100GB) | $1.50 |
| CPU Analysis | $6 |
| **Total** | **~$32.50** |

GPU analysis would add ~$40-50/month at this scale.

---

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| MediaPipe performance on mobile | High | Test early, fallback to server-side |
| 2D pose limitations | High | Don't present derived values as measurements |
| Video storage costs | High | Compress videos, limit retention |
| Scope creep | Medium | Strict story acceptance criteria |
| Supabase costs at scale | Medium | Monitor usage, implement caching |
| False precision in analysis | Medium | Display confidence levels honestly |

---

## Summary

| Sprint | Focus | Points | Acceptance |
|--------|-------|--------|------------|
| 1 | Product Experience | 39 | Golfer understands what to do next |
| 2 | High-Fidelity Prototype | 87 | Complete flow: onboarding → mission + round clipping |
| 3 | Functional Vertical Slice | 95 | Real video through full pipeline + shot tracing |
| 4 | Economics & Validation | 57 | Measured costs, latency, engagement |

**Total: ~278 points across 4 design sprints**

### User Journeys Covered
1. **Practice Logger** - Log sessions, track drills, see progress
2. **Swing Analyst** - Record, analyze, compare swings
3. **Round Tracker** - Score rounds, clip highlights, share
4. **Lesson Taker** - Track coach assignments (future)
5. **Competitor** - Challenges, leaderboards (future)

---

## GitHub Labels

```
# Epics (updated for RPG direction)
epic:player-hub
epic:skill-tree
epic:training-quests
epic:swing-studio
epic:rounds-achievements
epic:onboarding
epic:backend
epic:progression

# Systems
system:player-experience
system:swing-studio
system:infrastructure

# Priority
priority:p0
priority:p1
priority:p2

# Type
type:feature
type:bug
type:tech-debt
type:design

# Status
status:ready
status:in-progress
status:blocked
status:done

# Sprint
sprint:1-product-experience
sprint:2-prototype
sprint:3-vertical-slice
sprint:4-validation
```

---

## Integration with Existing Code

| Current Component | Becomes | Notes |
|-------------------|---------|-------|
| GolfDashboard | Player Hub | Add XP, quests, level |
| GolfTrainingPath | Skill Tree | Visual branches, mastery % |
| GolfSessions | Training Quests | 5-day system as missions |
| GolfClubs | Equipment (Profile) | Part of character profile |
| GolfMissCorrection | Analysis Feedback | Integrated into Swing Studio |

---

## Next Steps

1. ~~Create GitHub Milestones for each sprint~~ (needs update)
2. Update GitHub milestones to reflect 4 design sprints
3. Close/reprioritize existing Sprint 1 issues
4. Create Sprint 1 issues for Product Experience
5. Start Sprint 1 with onboarding and progression system
