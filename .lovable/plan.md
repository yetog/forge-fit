

# ForgeFit Enhancement Plan

## Overview

Four major additions plus integrating your Ivy.xlsx training program (a structured 3-phase periodization plan) into the app as a full program system.

---

## What's in the Excel (Ivy.xlsx)

Your spreadsheet contains a serious, periodized training program with 3 phases:

| Phase | Focus | Duration | Structure |
|-------|-------|----------|-----------|
| Phase 1 - Hypertrophy | Muscle building | 2 weeks | 6-day Upper/Lower split |
| Phase 2 - Strength | Heavy compound lifts | 5 weeks (incl. deload) | 4-day Upper/Lower split + conditioning |
| Phase 3 - Power | Max effort & dynamic effort | 3 weeks | 4-day split + conditioning + agility |

Each phase has progressive overload with sets, reps, rest periods, weights, and % of 1RM tracked per week. This is a full 10-week program.

---

## Feature 1: Bodyweight / At-Home Workout Template

Add a new workout type `Bodyweight` with exercises requiring zero equipment -- perfect for hotel rooms or no-gym days.

**New exercises to add:**
- Bodyweight squats, jump squats, burpees, mountain climbers, high knees
- Diamond push-ups, pike push-ups, tricep dips (chair)
- Superman holds, glute bridges, wall sits
- Bicycle crunches, flutter kicks

**New template:** "Bodyweight Blast" (~25-30 min full body, no equipment)

**Changes:**
- `src/types/workout.ts` -- Add `'Bodyweight'` to `WorkoutType`
- `src/data/exercises.ts` -- Add ~12 bodyweight exercises
- `src/data/workoutTemplates.ts` -- Add bodyweight template
- `src/pages/WorkoutPage.tsx` -- Add Bodyweight section to grouped view
- `src/pages/WorkoutDashboard.tsx` -- Add to quick start options

---

## Feature 2: Goals Section in Profile

Add a small goals area where users can set and track personal targets.

**Goal types:** Target weight, weekly workout count, specific lift PRs, custom text goals

**Changes:**
- `src/types/workout.ts` -- Add `Goal` interface with id, title, target, current, unit, deadline
- `src/context/WorkoutContext.tsx` -- Add goals state, addGoal, updateGoal, deleteGoal
- `src/pages/ProfilePage.tsx` -- Add goals section below stats with progress bars and add/edit forms
- `src/utils/workoutStorage.ts` -- Add goals storage key

---

## Feature 3: Onboarding Tutorial

A brief, swipeable tutorial shown once after creating a profile.

**Screens (3-4 steps):**
1. "Welcome to ForgeFit" -- Overview of the app
2. "Choose Your Workout" -- Explains the workout types (Light, Isometric, Full Body, Bodyweight, Programs)
3. "Track Your Progress" -- How logging and streaks work
4. "Let's Go!" -- Dismiss and start

**Changes:**
- Create `src/components/OnboardingTutorial.tsx` -- Step-based modal/overlay with dots navigation
- `src/pages/Index.tsx` -- Show tutorial after first profile creation
- `src/utils/workoutStorage.ts` -- Add `onboarding-complete` flag

---

## Feature 4: Exercise Swapping

Allow users to swap exercises within an active workout for alternatives targeting the same muscle group.

**How it works:**
- Each exercise in the active workout gets a small swap icon button
- Tapping it shows a modal/drawer listing alternative exercises for the same muscle group
- User picks a replacement, and it swaps in with default sets/reps
- Original template is unchanged -- swap only affects the active session

**Changes:**
- `src/data/exercises.ts` -- Add `alternates` field or rely on `muscleGroup` matching
- Create `src/components/ExerciseSwapModal.tsx` -- Modal showing alternatives filtered by muscle group
- `src/pages/WorkoutPage.tsx` -- Add swap button per exercise in ActiveWorkoutView, handle swap logic
- `src/context/WorkoutContext.tsx` -- Add `swapExercise(exerciseIndex, newExerciseId)` method

---

## Feature 5: Ivy Program Integration

Import the full 3-phase program from your spreadsheet as a structured "Program" system -- separate from the quick workout templates.

### Data Model

```text
Program
  +-- id, name, description, phases[]
  
Phase
  +-- id, name, weeks, days[]

ProgramDay
  +-- dayNumber, label (e.g. "Lower Body"), exerciseBlocks[]

ExerciseBlock
  +-- label (A1, B2...), exerciseId, sets, reps, rest, weight, percentOf1RM
  +-- weeklyProgression[] (different sets/reps/weight per week)
```

### New exercises needed from the spreadsheet
- Front Squat, Deadlift (Trap Bar), RFESS, RDL (Barbell), SLDL, Walking Lunge
- CGBP, OHP, Incline Bench (BB), Inverted Row, Lat Pulldown, Pec Fly
- Band Pull-apart, Woodchop, Depth Drop
- Sprints, Agility drills (Five Cone, L Drill, Ladder, Pro Agility)

### Changes
- `src/types/workout.ts` -- Add `Program`, `Phase`, `ProgramDay`, `ExerciseBlock` interfaces
- Create `src/data/programs.ts` -- Ivy program data with all 3 phases hardcoded from spreadsheet
- `src/data/exercises.ts` -- Add ~20 new exercises from the spreadsheet
- Create `src/pages/ProgramPage.tsx` -- Browse programs, view phases/weeks/days, start a program day as a workout
- `src/pages/WorkoutDashboard.tsx` -- Add "Programs" section
- `src/components/WorkoutNavbar.tsx` -- Optionally add Programs as a sub-section of Workouts
- `src/context/WorkoutContext.tsx` -- Add active program tracking, program day completion

---

## Implementation Order

1. **Bodyweight exercises and template** (quick win, new workout type)
2. **Exercise swapping** (improves all workouts immediately)
3. **New exercises from Ivy.xlsx** (expand exercise database)
4. **Program data model and Ivy program** (structured training)
5. **Goals in profile** (small, self-contained)
6. **Onboarding tutorial** (finishing touch)

---

## Technical Notes

- All new data stays in localStorage following existing patterns
- No new dependencies needed
- Exercise swap uses existing `muscleGroup` field for filtering alternatives
- Program system is additive -- existing quick workout templates remain unchanged
- The Ivy program data will be hardcoded from the spreadsheet (not dynamically parsed)

