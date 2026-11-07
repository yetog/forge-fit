# UI Sources & Integration Guide

> Quick reference for borrowing UI patterns to accelerate Forge Fit development.

---

## Reference Repos (Already Cloned)

All repos are in `reference-repos/` and gitignored.

### 1. shadcn-dashboard (Best for user journey)
**Path:** `reference-repos/shadcn-dashboard/`
**Stack:** Next.js, shadcn/ui, Tailwind, TypeScript

| Feature | Path | Use For |
|---------|------|---------|
| Auth Forms | `src/features/auth/components/` | Login, signup, OAuth buttons |
| Profile Page | `src/features/profile/components/` | User profile layout |
| Data Tables | `src/components/data-table/` | Workout history, session logs |
| Nav/Layout | `src/components/layout/` | App shell, sidebar, header |
| Forms | `src/features/forms/` | Input patterns, validation |
| User Avatar | `src/components/nav-user.tsx` | Profile dropdown |
| Notifications | `src/features/notifications/` | Toast, alerts |
| Kanban | `src/features/kanban/` | Workout planner drag/drop |

**How to use:**
```bash
# Copy a component
cp reference-repos/shadcn-dashboard/src/features/auth/components/sign-in-view.tsx src/pages/Login.tsx

# Adapt imports (change @/ paths to your structure)
```

---

### 2. fitness-ui-react (Fitness dashboard patterns)
**Path:** `reference-repos/fitness-ui-react/`
**Stack:** React, CSS

| Component | Path | Use For |
|-----------|------|---------|
| ActivityCards | `src/components/ActivityCards.js` | Workout summary cards |
| DonutChart | `src/components/DonutChart.js` | Progress visualization |
| FriendsList | `src/components/FriendsList.js` | Social/leaderboard |
| Overview | `src/components/Overview.js` | Dashboard stats |
| Sidebar | `src/components/Sidebar.js` | Navigation pattern |

**Note:** Uses plain CSS, convert to Tailwind classes.

---

### 3. swingessentialsapp (Golf video patterns)
**Path:** `reference-repos/swingessentialsapp/`
**Stack:** React Native (adapt patterns, not code)

| Component | Path | Steal For |
|-----------|------|-----------|
| CountDown | `src/components/videos/CountDown.tsx` | Pre-recording timer |
| RecordButton | `src/components/videos/RecordButton.tsx` | Video capture UI |
| VideoTimer | `src/components/videos/VideoTimer.tsx` | Recording duration |
| SwingVideo | `src/components/videos/SwingVideo.tsx` | Video playback |
| LessonCard | `src/components/videos/LessonCard.tsx` | Tip/lesson display |
| Tutorials | `src/components/tutorials/` | Onboarding flow |

**Adaptation needed:** React Native → React Web (different primitives).

---

### 4. TopShots (Competition/leaderboard patterns)
**Path:** `reference-repos/TopShots/`
**Stack:** React Native, Firebase

| Component | Path | Steal For |
|-----------|------|-----------|
| Leaderboard | `components/Leaderboard.js` | Ranking display logic |
| CompetitionEnter | `components/CompetitionEnter.js` | Contest entry flow |
| Profile | `components/Profile.js` | User stats layout |

---

## Online Resources

### shadcn/ui Official
- **Blocks:** https://ui.shadcn.com/blocks
- **Charts:** https://ui.shadcn.com/charts (Recharts wrappers)
- **Forms:** https://ui.shadcn.com/docs/components/form

### Fitness-Specific
- [Shadcn Fitness Widgets](https://shadcnuikit.com/dashboard/widgets/fitness)
- [Profile Fitness Tracker Block](https://www.shadcn.io/blocks/profile-fitness-tracker)

### Dashboard Templates
- [next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) (6k+ stars)
- [shadcn-admin](https://github.com/satnaing/shadcn-admin) (2.8k+ stars)

---

## Quick Copy Commands

### Auth Flow
```bash
# Sign in page
cp reference-repos/shadcn-dashboard/src/features/auth/components/sign-in-view.tsx src/pages/SignIn.tsx
cp reference-repos/shadcn-dashboard/src/features/auth/components/user-auth-form.tsx src/components/auth/
```

### Dashboard Layout
```bash
# App shell with sidebar
cp reference-repos/shadcn-dashboard/src/components/layout/* src/components/layout/
cp reference-repos/shadcn-dashboard/src/components/nav-*.tsx src/components/
```

### Data Tables
```bash
# Sortable, filterable tables
cp -r reference-repos/shadcn-dashboard/src/components/data-table src/components/
```

### Fitness Cards
```bash
# Activity cards (convert CSS to Tailwind)
# Reference: reference-repos/fitness-ui-react/src/components/ActivityCards.js
```

---

## Integration Priority

### Phase 1: Auth & Onboarding (Week 1)
1. Copy `sign-in-view.tsx` and `sign-up-view.tsx`
2. Add `user-auth-form.tsx` with Supabase integration
3. Create onboarding wizard (adapt from tutorials folder)

### Phase 2: Dashboard Shell (Week 1-2)
1. Copy layout components (sidebar, header, nav)
2. Integrate with existing React Router
3. Add user avatar dropdown

### Phase 3: Fitness Features (Week 2-3)
1. Activity cards with Tailwind
2. Progress charts (already have Recharts)
3. Workout history data table

### Phase 4: Golf Features (Week 3-4)
1. Video recording UI (adapt from swingessentialsapp patterns)
2. Leaderboard (adapt from TopShots)
3. Session tracking tables

---

## Notes

- **Don't copy React Native code directly** — adapt the UX patterns
- **shadcn components are already in Forge Fit** — just add new ones with `npx shadcn@latest add [component]`
- **Keep reference-repos/ gitignored** — they're for reference only
- **Convert CSS → Tailwind** when copying from fitness-ui-react

---

## Adding New shadcn Components

```bash
# Add missing components as needed
npx shadcn@latest add avatar
npx shadcn@latest add calendar
npx shadcn@latest add chart
npx shadcn@latest add sidebar
```
