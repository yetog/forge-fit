# Forge Fit Golf - Sprint Plan

> Project management roadmap for golf section improvements.
> Last Updated: November 2026

---

## Overview

**Goal:** Transform Forge Fit's golf section from a basic practice logger into a comprehensive golf improvement platform.

**Current State:** 5 pages, ~2,200 lines, localStorage only
**Target State:** Full user journey with video analysis, round tracking, and cloud sync

---

## Epics

| Epic | Priority | Effort | Description |
|------|----------|--------|-------------|
| E1: Onboarding | P0 | Medium | First-time user experience |
| E2: Quick Logging | P0 | Small | Faster session entry |
| E3: Drill System | P1 | Medium | Active drill execution |
| E4: Yardage Tools | P1 | Small | Club distance utilities |
| E5: Round Tracking | P1 | Large | Score tracking & handicap |
| E6: Video Analysis | P2 | Large | Swing video capture/review |
| E7: Backend & Auth | P2 | Large | Supabase integration |
| E8: Social & Compete | P3 | Medium | Leaderboards, sharing |

---

## Sprint 1: Foundation & Quick Wins
**Focus:** Improve existing UX, add onboarding
**Duration:** 2 weeks

### E1: Onboarding
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E1-1 | Create welcome screen with app intro | 2 | Todo |
| E1-2 | Build handicap/skill level selector | 2 | Todo |
| E1-3 | Add initial club bag setup wizard | 3 | Todo |
| E1-4 | Create "What's your goal?" screen | 1 | Todo |
| E1-5 | Add skip option for returning users | 1 | Todo |

### E2: Quick Logging
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E2-1 | Add "Quick Log" button on dashboard | 1 | Todo |
| E2-2 | Create minimal session form (duration + focus only) | 2 | Todo |
| E2-3 | Add "Log from template" option | 2 | Todo |
| E2-4 | Implement swipe-to-log recent session | 2 | Todo |

### E4: Yardage Tools (partial)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E4-1 | Build club distance chart visualization | 3 | Todo |
| E4-2 | Create "What club for X yards?" calculator | 2 | Todo |

**Sprint 1 Total:** 21 points

---

## Sprint 2: Drill System & Training
**Focus:** Make drills interactive and trackable
**Duration:** 2 weeks

### E3: Drill System
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E3-1 | Create drill execution screen | 3 | Todo |
| E3-2 | Add rep counter with tap-to-count | 2 | Todo |
| E3-3 | Build drill timer component | 2 | Todo |
| E3-4 | Add "complete drill" with feedback | 2 | Todo |
| E3-5 | Track drill history per session | 2 | Todo |
| E3-6 | Create custom drill builder | 3 | Todo |
| E3-7 | Add drill recommendations based on misses | 3 | Todo |

### E4: Yardage Tools (continued)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E4-3 | Add gap analysis between clubs | 2 | Todo |
| E4-4 | Create distance tracking over time | 3 | Todo |

**Sprint 2 Total:** 22 points

---

## Sprint 3: Round Tracking
**Focus:** Log actual golf rounds, not just practice
**Duration:** 2 weeks

### E5: Round Tracking
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E5-1 | Create round entry form (course, date, tees) | 3 | Todo |
| E5-2 | Build hole-by-hole score entry | 5 | Todo |
| E5-3 | Add GIR/FIR tracking per hole | 3 | Todo |
| E5-4 | Implement putt counting per hole | 2 | Todo |
| E5-5 | Calculate and display round stats | 3 | Todo |
| E5-6 | Build round history list | 2 | Todo |
| E5-7 | Add handicap calculation (basic) | 3 | Todo |
| E5-8 | Create scoring trends chart | 3 | Todo |

**Sprint 3 Total:** 24 points

---

## Sprint 4: Video Foundations
**Focus:** Basic video capture and playback
**Duration:** 2 weeks

### E6: Video Analysis (Phase 1)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E6-1 | Add video upload to session form | 3 | Todo |
| E6-2 | Create video player component | 3 | Todo |
| E6-3 | Build frame-by-frame scrubber | 5 | Todo |
| E6-4 | Add video thumbnail to session cards | 2 | Todo |
| E6-5 | Implement video storage (local first) | 3 | Todo |
| E6-6 | Create side-by-side comparison view | 5 | Todo |

**Sprint 4 Total:** 21 points

---

## Sprint 5: Backend & Authentication
**Focus:** Move from localStorage to cloud
**Duration:** 2-3 weeks

### E7: Backend & Auth
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E7-1 | Set up Supabase project | 2 | Todo |
| E7-2 | Create database schema (users, sessions, clubs) | 3 | Todo |
| E7-3 | Build sign up flow (email/password) | 3 | Todo |
| E7-4 | Build sign in flow | 2 | Todo |
| E7-5 | Add Google OAuth | 2 | Todo |
| E7-6 | Migrate localStorage to Supabase | 5 | Todo |
| E7-7 | Implement offline-first with sync | 5 | Todo |
| E7-8 | Add profile settings page | 3 | Todo |
| E7-9 | Create data export feature | 2 | Todo |

**Sprint 5 Total:** 27 points

---

## Sprint 6: Video Analysis Advanced
**Focus:** AI-powered swing analysis
**Duration:** 2-3 weeks

### E6: Video Analysis (Phase 2)
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E6-7 | Integrate MediaPipe pose detection | 8 | Todo |
| E6-8 | Draw skeleton overlay on video | 5 | Todo |
| E6-9 | Calculate and display joint angles | 5 | Todo |
| E6-10 | Add swing position markers (address, top, impact) | 3 | Todo |
| E6-11 | Create swing metrics dashboard | 5 | Todo |
| E6-12 | Store analysis results with session | 3 | Todo |

**Sprint 6 Total:** 29 points

---

## Sprint 7: Social & Competitions
**Focus:** Community features
**Duration:** 2 weeks

### E8: Social & Compete
| ID | Story | Points | Status |
|----|-------|--------|--------|
| E8-1 | Create public profile page | 3 | Todo |
| E8-2 | Build leaderboard component | 3 | Todo |
| E8-3 | Add weekly challenges | 5 | Todo |
| E8-4 | Implement badge/achievement system | 5 | Todo |
| E8-5 | Create share-to-social feature | 3 | Todo |
| E8-6 | Add friend connections | 5 | Todo |

**Sprint 7 Total:** 24 points

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
| B-8 | AI coaching suggestions | E6 | Based on video analysis |
| B-9 | Tournament mode | E8 | Multi-round events |
| B-10 | YouTube drill library | E3 | From user feedback |

---

## Metrics & Success Criteria

### Sprint 1 Success
- [ ] New users complete onboarding in < 2 minutes
- [ ] Quick log reduces session entry time by 50%

### Sprint 3 Success
- [ ] Users can log a full 18-hole round
- [ ] Handicap displays on dashboard

### Sprint 5 Success
- [ ] Users can sign up and sync across devices
- [ ] Offline mode works without data loss

### Sprint 6 Success
- [ ] Video analysis detects 33 pose landmarks
- [ ] Angle display updates in real-time

---

## Technical Dependencies

```
Sprint 1-2: No new dependencies (existing stack)
Sprint 3: date-fns (already have)
Sprint 4: react-player or native video
Sprint 5: @supabase/supabase-js, @supabase/auth-ui-react
Sprint 6: @mediapipe/pose, @tensorflow/tfjs
Sprint 7: (depends on backend)
```

---

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| MediaPipe performance on mobile | High | Test early, fallback to server-side |
| Supabase costs at scale | Medium | Monitor usage, implement caching |
| Video storage costs | High | Compress videos, limit retention |
| Scope creep | Medium | Strict story acceptance criteria |

---

## Summary

| Sprint | Focus | Points | Weeks |
|--------|-------|--------|-------|
| 1 | Foundation & Quick Wins | 21 | 2 |
| 2 | Drill System & Training | 22 | 2 |
| 3 | Round Tracking | 24 | 2 |
| 4 | Video Foundations | 21 | 2 |
| 5 | Backend & Auth | 27 | 2-3 |
| 6 | Video Analysis Advanced | 29 | 2-3 |
| 7 | Social & Competitions | 24 | 2 |

**Total: ~168 points across 14-16 weeks**

---

## GitHub Labels

```
epic:onboarding
epic:quick-logging
epic:drills
epic:yardage
epic:rounds
epic:video
epic:backend
epic:social
priority:p0
priority:p1
priority:p2
priority:p3
type:feature
type:bug
type:tech-debt
status:ready
status:in-progress
status:blocked
status:done
```

---

## Next Steps

1. Create GitHub Milestones for each sprint
2. Create Issues for Sprint 1 stories
3. Set up project board (Kanban)
4. Start Sprint 1
