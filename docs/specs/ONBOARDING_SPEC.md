# Onboarding Specification

> Complete onboarding flow with screens, copy, avatars, and assessment.
> Status: Ready for Implementation

---

## Flow Overview

```
Welcome → Goals → Frequency → Struggle → Profile → Notification → Ready
   1        2         3          4          5           6           7
```

**Total screens:** 7
**Target completion time:** < 2 minutes

---

## Screen 1: Welcome

### Visual
- App logo with subtle glow
- Tagline centered
- Dark background with green accent

### Copy

**Headline:**
> Forge Your Game

**Subhead:**
> The RPG of golf improvement.
> Every practice session. Every round. Every swing.
> They all count toward becoming the golfer you want to be.

**CTA Button:**
> Begin Your Journey

---

## Screen 2: Goal Selection

### Visual
- 2-column grid of goal cards
- Selected state: white fill + green checkmark
- Single select (radio behavior)

### Copy

**Headline:**
> What's your mission?

**Subhead:**
> Choose the goal that drives you. You can change this anytime.

### Options

| Option | Description |
|--------|-------------|
| **Break 100** | "I'm new to golf and want to get comfortable on the course." |
| **Break 90** | "I can play, but I want to be consistently in the 80s." |
| **Break 80** | "I'm ready to take my game to the next level." |
| **Scratch** | "Single digits or bust. I'm here to compete." |

**CTA Button:**
> Continue

---

## Screen 3: Practice Frequency

### Visual
- Vertical list of options
- Selected state: highlighted card with checkmark
- Single select

### Copy

**Headline:**
> How often do you practice?

**Subhead:**
> Be honest — we'll build a plan that fits your life.

### Options

| Option | Internal Value |
|--------|----------------|
| Every day | `daily` |
| 4-5 times per week | `frequent` |
| 2-3 times per week | `regular` |
| Once a week | `weekly` |
| A few times a month | `occasional` |

**CTA Button:**
> Continue

---

## Screen 4: Biggest Struggle

### Visual
- 2-column grid (3 rows)
- Icons for each struggle type
- Single select with contextual response

### Copy

**Headline:**
> What's holding you back?

**Subhead:**
> Everyone has something. Let's work on yours.

### Options

| Struggle | Icon | Response Message |
|----------|------|------------------|
| **Slice** | ↗️ | "You're not alone. We'll get that ball flight straightened out." |
| **Hook** | ↙️ | "A hook means you have speed. Let's get it under control." |
| **Poor Contact** | 💥 | "Center contact is everything. We'll build it." |
| **No Distance** | 📏 | "Distance comes from efficiency. We'll find your power." |
| **Short Game** | 🏌️ | "This is where scores are made. Let's sharpen it." |
| **Putting** | 🕳️ | "The flatstick. Where rounds are won and lost." |
| **Mental Game** | 🧠 | "Golf is 90% mental. We'll work on the headspace." |
| **Consistency** | 🎯 | "Some days great, some days chaos? We'll fix that." |

**After selection, show response message for 1.5 seconds, then auto-advance or show Continue.**

**CTA Button:**
> Continue

---

## Screen 5: Player Profile

### Visual
- Clean form with three inputs
- Avatar selection at top
- Input fields below

### Copy

**Headline:**
> Set up your profile

**Subhead:**
> The basics. Takes 30 seconds.

### Avatar Selection

**8 avatar options (lightweight, illustrated 2D):**

| # | Style | Description |
|---|-------|-------------|
| 1 | Silhouette (neutral) | Generic golfer outline, gray |
| 2 | Silhouette (green) | Golfer outline, green tint |
| 3 | Silhouette (blue) | Golfer outline, blue tint |
| 4 | Initials circle | User's initials on colored background |
| 5 | Golf ball | Stylized golf ball with face |
| 6 | Flag | Golf flag icon |
| 7 | Driver | Club head silhouette |
| 8 | Abstract | Geometric golf-inspired pattern |

**Implementation:** Simple SVG icons with color variants. No 3D, no photos for MVP.

**Future:** Allow custom photo upload.

### Form Fields

| Field | Type | Placeholder | Required |
|-------|------|-------------|----------|
| **Display Name** | Text | "What should we call you?" | Yes |
| **Dominant Hand** | Toggle | Right / Left | Yes (default: Right) |
| **Current Handicap** | Number/Select | "Estimate or 'New to golf'" | No |

**Handicap Options:**
- New to golf
- 30+
- 20-29
- 10-19
- 5-9
- 0-4 (Scratch or better)

**CTA Button:**
> Almost Done

---

## Screen 6: Notifications

### Visual
- Illustration of phone with notification
- Two buttons (Allow / Maybe Later)

### Copy

**Headline:**
> Stay on track

**Subhead:**
> We'll remind you when it's time to practice.
> No spam. Just a nudge when you need it.

**Primary CTA:**
> Allow Notifications

**Secondary CTA:**
> Maybe Later

**After selection:** Trigger native permission dialog if "Allow" selected.

---

## Screen 7: Ready

### Visual
- Celebratory feel (subtle particle animation)
- Player's avatar displayed
- Level 1 badge

### Copy

**Headline:**
> You're in, [Name].

**Subhead:**
> Level 1. The journey begins.
> Your first quest is waiting.

**Stats Preview:**
```
Level: 1
XP: 0
Goal: [Selected Goal]
```

**CTA Button:**
> Start Training

---

## Data Model

```typescript
interface OnboardingData {
  goal: 'break100' | 'break90' | 'break80' | 'scratch';
  frequency: 'daily' | 'frequent' | 'regular' | 'weekly' | 'occasional';
  struggle: 'slice' | 'hook' | 'contact' | 'distance' | 'shortgame' | 'putting' | 'mental' | 'consistency';
  displayName: string;
  dominantHand: 'right' | 'left';
  handicapRange: 'new' | '30+' | '20-29' | '10-19' | '5-9' | '0-4';
  avatarId: number; // 1-8
  notificationsEnabled: boolean;
  completedAt: string;
}
```

---

## Onboarding Analytics Events

| Event | Trigger |
|-------|---------|
| `onboarding_started` | Screen 1 loaded |
| `onboarding_goal_selected` | Goal chosen |
| `onboarding_frequency_selected` | Frequency chosen |
| `onboarding_struggle_selected` | Struggle chosen |
| `onboarding_profile_completed` | Profile form submitted |
| `onboarding_notifications_allowed` | Notifications enabled |
| `onboarding_notifications_skipped` | "Maybe Later" selected |
| `onboarding_completed` | "Start Training" tapped |
| `onboarding_abandoned` | User exits before completion |

---

## Skip/Return Flow

### Skip Option
- No skip on screens 1-4 (essential data)
- Skip available on screen 5 (profile) — use defaults
- Skip available on screen 6 (notifications) — "Maybe Later"

### Returning Users
If `onboardingCompleted === true`, skip to Player Hub.

If onboarding was abandoned, resume from last incomplete screen.

---

## Design Notes

### Colors
- Background: `#0D0D14` (Void Black)
- Cards: `#1A1A2E` (Deep Space)
- Selected state: `#2E7D32` (Fairway Green)
- Text: `#FFFFFF` primary, `#B0B0B0` secondary
- Accent: `#FFD700` (Achievement Gold) for Level 1 badge

### Typography
- Headlines: 24px, bold
- Subheads: 16px, regular, 70% opacity
- Buttons: 16px, medium

### Animations
- Screen transitions: 300ms slide
- Selection feedback: 150ms scale + color
- Final screen: Subtle particle burst on avatar

---

## Avatar Asset Requirements

| Asset | Format | Size | Variants |
|-------|--------|------|----------|
| Silhouette avatars (3) | SVG | 80x80 | Gray, Green, Blue |
| Initials avatar | SVG | 80x80 | Dynamic color based on name |
| Object avatars (4) | SVG | 80x80 | Golf ball, Flag, Driver, Abstract |

**Total: 8 SVG files**

Simple, clean, one-color silhouettes. No gradients. Scale well at small sizes.

---

## Edge Cases

| Case | Handling |
|------|----------|
| No name entered | Block continue, show inline error |
| Very long name | Truncate at 20 characters |
| Special characters in name | Allow, but sanitize for display |
| Network offline | Store locally, sync when online |
| Notification permission denied | Proceed, track as skipped |
| Back button pressed | Allow back navigation, preserve selections |

