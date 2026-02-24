

# Workout Tracker App - Full Rebuild Plan

This is a significant pivot from the RPG quest tracker to a **fitness/workout tracker** with a premium dark fantasy aesthetic (black, silver, gold). We'll restructure the app while reusing the existing infrastructure (PWA, routing, UI components, localStorage patterns, achievement system).

---

## Design Vision

- **Color palette**: Black background, silver accents, gold highlights -- replacing the current purple/blue RPG theme
- **Aesthetic**: Dark mode, futuristic Apple Silicon feel with Square Enix-inspired visual polish
- **Tone**: Premium, immersive, game-like experience applied to fitness

---

## Core Features

### 1. Workout Types (3 modes)

| Mode | Duration | Contents |
|------|----------|----------|
| **Light** | ~30 min | Stretching, abs, pushups, run |
| **Isometric** | 30-60 min | Stretching, run, abs + focused muscle group (chest/legs/arms/shoulders/back) |
| **Full Body** | ~60 min | Shorter compound exercises hitting all groups |

### 2. Equipment Profile
Store available equipment so workouts are tailored:
- Dumbbells (20-50 lbs)
- Treadmill & Elliptical
- Smith Machine (up to ~180 lbs)
- Cable pulley machine (triceps, cable flies, seated back/shoulder work)

### 3. Workout Logging & Tracking
- Log sets, reps, and weight for each exercise
- Track progress over time per exercise
- View workout history

### 4. User Profiles
- Support for multiple profiles (you and your girlfriend)
- Each profile tracks their own workouts, progress, and achievements

### 5. Supplements & Diet Info
- Reference section with supplement recommendations
- Basic nutrition/diet guidelines for staying in shape

### 6. Achievements & Gamification
- Reuse RPG achievement system adapted for fitness milestones
- Streak tracking, PR badges, consistency rewards

---

## Technical Plan

### Phase 1: Theme & Foundation Overhaul

**Files to modify:**
- `tailwind.config.ts` -- Replace RPG color palette with black/silver/gold scheme
- `src/index.css` -- Update card styles, status bars, animations to match new aesthetic
- `src/App.tsx` -- Update routes for new pages

**New types** (`src/types/workout.ts`):
- `WorkoutType`: 'Light' | 'Isometric' | 'FullBody'
- `MuscleGroup`: 'Chest' | 'Back' | 'Legs' | 'Arms' | 'Shoulders' | 'Core' | 'Full Body'
- `Equipment`: type for available gym equipment
- `Exercise`: name, muscle group, equipment needed, sets/reps/weight
- `WorkoutPlan`: collection of exercises with type and duration
- `WorkoutLog`: completed workout record with actual weights/reps
- `UserProfile`: name, stats, workout history

### Phase 2: Core Workout Pages

**New files:**
- `src/context/WorkoutContext.tsx` -- Central state for workouts, profiles, logs (replaces CharacterContext)
- `src/data/exercises.ts` -- Exercise database with equipment mappings
- `src/data/workoutTemplates.ts` -- Pre-built Light, Isometric, and Full Body templates
- `src/pages/WorkoutDashboard.tsx` -- Home screen with today's workout, streaks, quick stats
- `src/pages/WorkoutPage.tsx` -- Active workout view with exercise list, timer, logging
- `src/pages/WorkoutHistory.tsx` -- Past workouts with progress charts (reuse recharts)
- `src/pages/ExerciseLibrary.tsx` -- Browse exercises by muscle group and equipment
- `src/components/ExerciseCard.tsx` -- Individual exercise display with set/rep/weight inputs
- `src/components/WorkoutTimer.tsx` -- Rest timer and workout duration tracker
- `src/components/MuscleGroupSelector.tsx` -- Choose focus area for isometric days

### Phase 3: Profile & Tracking

**New files:**
- `src/pages/ProfilePage.tsx` -- User profile with stats, PRs, achievements
- `src/components/ProfileSelector.tsx` -- Switch between user profiles
- `src/components/ProgressChart.tsx` -- Weight/rep progression over time per exercise
- `src/hooks/useWorkoutSystem.ts` -- Workout logging, streak tracking, PR detection
- `src/utils/workoutStorage.ts` -- localStorage helpers for workout data

### Phase 4: Supplements & Diet

**New files:**
- `src/pages/NutritionPage.tsx` -- Supplement info and diet guidelines
- `src/data/supplements.ts` -- Supplement database with descriptions and recommendations
- `src/data/dietTips.ts` -- Nutrition guidelines and meal ideas

### Phase 5: Achievements & Polish

- Adapt existing achievement system for fitness milestones (first workout, 7-day streak, new PR, etc.)
- Add sound effect toggle in settings (placeholder for Square Enix-style sounds)
- Refine animations: workout completion effects, PR celebrations
- Ensure full mobile responsiveness (keep existing PWA support)

**Files to update:**
- `src/hooks/useAchievementSystem.ts` -- New fitness achievements
- `src/components/AchievementList.tsx` -- Updated categories
- `src/pages/AchievementsPage.tsx` -- Fitness-themed achievements display

### Navigation Structure

The bottom mobile navbar will be updated with:
- **Home** (dashboard)
- **Workouts** (start/browse workouts)
- **History** (workout logs)
- **Nutrition** (supplements/diet)
- **Profile** (user profile, achievements, settings)

---

## What Gets Removed/Replaced

- RPG character creation, classes, quests, skills -- all replaced with workout equivalents
- The quest system becomes the workout system
- Character XP/HP becomes workout streaks and progress metrics
- Skills become muscle group proficiency tracking
- Coins system removed (or repurposed for gamification rewards)

---

## Implementation Order

1. New theme (black/silver/gold) and type definitions
2. Workout context and exercise data
3. Dashboard and workout execution pages
4. Workout logging and history with charts
5. Multi-profile support
6. Nutrition/supplements section
7. Achievements adaptation
8. Visual polish and sound effect placeholders

