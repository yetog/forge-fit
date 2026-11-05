# User Feedback & Requested Improvements

> Collected: November 2026
> Status: Tracking feature requests for next sprint

---

## High Priority Requests

### 1. YouTube Workout Video Database

**Request:** Create a database of YouTube Shorts or videos that demonstrate each workout exercise, allowing users to quickly look up proper form.

**User Pain Point:** Users don't know how to perform exercises correctly and need visual guidance.

**Implementation Ideas:**
- Add `videoUrl` field to each exercise in `exercises.ts`
- Create VideoModal component for in-workout playback
- Curate or create short-form videos (15-60 seconds)
- Consider: YouTube embeds vs. self-hosted on S3
- Add "How to" button next to each exercise

**Data Structure:**
```typescript
interface Exercise {
  id: string;
  name: string;
  // ... existing fields
  videoUrl?: string;        // YouTube/S3 URL
  videoThumbnail?: string;  // Preview image
  formCues?: string[];      // Quick text tips
}
```

**Priority:** High - Direct user request
**Effort:** Medium (data entry + UI component)

---

### 2. Live Account Testing & Analytics

**Request:** Add real user accounts with tracking for beta testing - collect usage insights over 1-2 months.

**User Pain Point:** Currently all data is local (localStorage). No way to:
- Track user engagement metrics
- Gather usage patterns
- Perform A/B testing
- Collect feedback systematically

**Implementation Ideas:**

**Phase 1: Anonymous Analytics**
- Add Mixpanel/PostHog/Plausible for event tracking
- Track: workouts completed, exercises used, session duration
- No PII required initially

**Phase 2: User Accounts**
- Add Supabase/Firebase authentication
- Cloud sync for workout data
- User profiles with avatars
- Optional: Social features

**Phase 3: Beta Testing Program**
- Invite system for beta testers
- In-app feedback forms
- Usage dashboards for admins
- Session replay (optional)

**Data to Collect:**
```typescript
interface UsageEvent {
  eventType: 'workout_started' | 'workout_completed' | 'exercise_viewed' | 'golf_session';
  timestamp: Date;
  userId?: string;  // Anonymous ID initially
  metadata: {
    duration?: number;
    exerciseCount?: number;
    completionRate?: number;
  };
}
```

**Priority:** High - Critical for product development
**Effort:** Large (requires backend infrastructure)

---

## Integration with Road to Scratch Vision

The Google Doc "Road to Scratch" outlines an ambitious golf app vision. Key additions not in current Forge Fit:

### From the Vision Doc

| Feature | Current Status | Priority |
|---------|---------------|----------|
| Shot Tracing (3-point Bezier) | Not implemented | High |
| Swing Video Recording | Not implemented | High |
| MediaPipe Pose Integration | Not implemented | Medium |
| Social "Yaps" (post-round videos) | Not implemented | Medium |
| GPS Scorecard | Not implemented | Medium |
| Course Database (OpenCourseData) | Not implemented | Low |
| Auto-stitched Highlight Reels | Not implemented | Low |

### Reference Repositories to Analyze

1. **HeleenaRobert/golf-swing-analysis**
   - MediaPipe Pose + OpenCV
   - Joint angle calculations
   - Swing phase detection

2. **cavanaulton/Pose2Par**
   - 3D biomechanical modeling
   - X-Factor analysis
   - OpenSim integration

3. **joebochill/swingessentialsapp**
   - React Native patterns
   - Video upload workflows
   - Camera guide overlays

4. **Pieter-stack/TopShots**
   - Scorecard UI
   - Leaderboards
   - Course directories

---

## MVP Roadmap (Updated)

### Sprint 1: Quick Wins (2 weeks)
- [ ] Add video URLs to exercise database
- [ ] Create VideoModal component
- [ ] Implement anonymous analytics (Plausible/PostHog)
- [ ] Add feedback form in settings

### Sprint 2: User Accounts (3 weeks)
- [ ] Set up Supabase backend
- [ ] Add authentication flow
- [ ] Implement cloud sync
- [ ] Create admin dashboard

### Sprint 3: Golf Enhancements (4 weeks)
- [ ] Port MediaPipe pose logic from reference repos
- [ ] Build basic swing recording feature
- [ ] Add 3-point manual shot tracer
- [ ] Integrate with RPG XP system

### Sprint 4: Social Features (4 weeks)
- [ ] Build "Yaps" recording system
- [ ] Create social feed
- [ ] Add sharing to external platforms
- [ ] Implement progression milestones

---

## Technical Decisions Needed

1. **Analytics Platform:** Plausible (privacy-first) vs. PostHog (feature-rich) vs. Mixpanel (industry standard)

2. **Backend:** Supabase (quick setup) vs. Firebase (Google ecosystem) vs. Custom Node.js

3. **Video Hosting:** YouTube embeds (free) vs. S3 (control) vs. Mux (professional)

4. **Mobile:** Keep PWA vs. React Native port for camera access

---

## Notes

- Users want **immediate value** - workout videos are a quick win
- **Beta testing** requires minimal viable backend first
- **Golf features** should leverage existing open-source work
- Consider **phased rollout** - don't try to build everything at once
