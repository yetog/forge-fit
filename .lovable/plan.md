

# ForgeFit Architecture & UI Upgrade Plan

## 1. Rename the Program

Rename "Ivy Program" to something more fitting like **"Forge Protocol"** -- a 10-week periodized training program. This fits the ForgeFit brand and sounds premium.

## 2. Program Page UI Overhaul

The current ProgramPage is a basic nested accordion. Here's what we'll upgrade:

**Phase Cards** -- Each phase gets a hero-style card with:
- A gradient accent strip (different color per phase: blue for Hypertrophy, amber for Strength, red for Power)
- Phase number badge, focus description, and week count displayed prominently
- Progress indicator (if we track completion later)

**Day View** -- When expanding a day:
- Exercise blocks displayed as proper table rows with alternating backgrounds
- Superset pairs (A1/A2, B1/B2) visually grouped with a connecting bar or shared background
- Weight and %1RM shown as styled badges
- Weekly progression shown as a horizontal pill row (W1, W2, W3...) instead of a hidden `<details>` tag

**Overall polish:**
- Back button styled consistently
- Phase descriptions more prominent
- Better spacing, larger touch targets on mobile

## 3. New Workout Categories

Add two new workout template groups:

**Cardio Focus** (~30 min)
- Treadmill intervals, elliptical, high knees, mountain climbers, burpees, jump squats
- New `WorkoutType`: add `'Cardio'` to the union type

**Ab Burner** (~20-25 min)
- Crunches, bicycle crunches, leg raises, flutter kicks, plank, russian twists, hanging leg raises, mountain climbers
- New `WorkoutType`: add `'Core'` to the union type

Both get added to the WorkoutPage grouped view and WorkoutDashboard quick-start area.

## 4. Architecture Improvements (Before Adding More Content)

These are structural fixes to make the app scalable:

**a. Workout Template Scalability**
- Currently templates are a flat array. As we add Cardio, Core, and future custom workouts, the `WorkoutPage` grouped view and `WorkoutDashboard` need to dynamically derive categories from the data rather than hardcoding group names. We'll make the grouping data-driven.

**b. Exercise ID Validation**
- Templates reference exercise IDs as strings. If an ID is wrong, it silently fails. We'll add a dev-mode console warning when a template references a non-existent exercise.

**c. Consistent Navigation Architecture**
- The bottom navbar currently has 5 tabs. With more content types, we should ensure the nav doesn't get overcrowded. The current setup (Dashboard, Workouts, Programs, History, Profile) is solid. Nutrition stays accessible via the hamburger menu. New workout types live inside the existing Workouts tab, not as new nav items.

**d. Dashboard Section Generation**
- The dashboard currently hardcodes "Isometric Focus" as a section. We'll make it generate sections dynamically based on available workout types, so adding Cardio and Core automatically creates dashboard sections.

---

## Files to Change

| File | Changes |
|------|---------|
| `src/types/workout.ts` | Add `'Cardio'` and `'Core'` to `WorkoutType` |
| `src/data/workoutTemplates.ts` | Add Cardio and Ab Burner templates |
| `src/data/programs.ts` | Rename "Ivy Program" to "Forge Protocol" |
| `src/pages/ProgramPage.tsx` | Full UI overhaul -- phase cards with color accents, superset grouping, styled progression pills |
| `src/pages/WorkoutPage.tsx` | Make type grouping data-driven instead of hardcoded |
| `src/pages/WorkoutDashboard.tsx` | Dynamic sections for all workout types, add Cardio and Core to quick start |
| `src/index.css` | Add phase-specific accent classes and superset styling |

## Implementation Order

1. Architecture fixes (dynamic grouping, type additions)
2. New Cardio and Core templates with exercises
3. Program rename + ProgramPage UI overhaul
4. Dashboard dynamic sections update

