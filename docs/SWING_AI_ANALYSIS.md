# Swing AI UX Analysis

> Detailed breakdown of Swing AI app patterns from screen recordings.
> Source: Two recordings analyzed (2:40 analysis results, 3:36 onboarding)

---

## Recording 1: Analysis Results Experience (2:40)

### Screen Structure

```
Analysis Results Screen
├── Video Preview
├── Handicap Estimate (e.g., 9.2)
├── Swing AI Score (e.g., 8.9/10)
└── Three Content Tabs
    ├── Swing Analysis (8 categories)
    ├── Practice Plan (3 prioritized drills)
    └── Swing Thoughts (3 short cues)
```

### Swing Analysis Tab - 8 Assessment Categories

| Category | Sub-assessments |
|----------|-----------------|
| Setup Posture | Alignment, Ball Position, Posture/Spine Angle |
| Swing Plane | Takeaway, Top of Backswing, Downswing Plane |
| Hand Path | Backswing Hand Path, Downswing Hand Path |
| Spine Stability | Head Movement, Spine Angle/Early Extension |
| Hip Rotation | Backswing Hip Turn, Downswing Hip Turn, Weight Transfer |
| Tempo/Sequence | Overall Tempo, Transition Sequence |
| Impact Position | Impact Position, Clubface/Release |
| Finish/Balance | Balance at Finish, Finish Position |

Each assessment includes:
- Description of swing behavior
- "How to Fix It" section
- Expandable accordion interaction

### Practice Plan Tab

Three prioritized drills:
1. **Butt-to-wall drill** - for early extension
2. **Impact-pause drill** - for shaft lean
3. **Slow-motion swings** - for spine-angle maintenance

Expanded drills show:
- Instructions
- Intended improvements
- Repetitions
- Common mistakes

### Swing Thoughts Tab

Three short mental cues:
- "Chest down"
- "Hands ahead"
- "Smooth rhythm"

### Visual Design
- Off-white background
- White rounded cards
- Dark-green selected tabs
- Accordion rows
- Soft-green saved confirmation

---

## Recording 2: Onboarding Flow (3:36)

### Complete Journey Timeline

| Time | Screen | Content |
|------|--------|---------|
| 00:00-00:18 | Value Proposition | Introduction, AI swing analysis, practice/coaching |
| 00:18-00:33 | Personal Goals | 6 selectable improvement categories |
| 00:33-00:48 | Practice Motivation | Personalized message + practice frequency |
| 00:48-01:21 | Primary Weakness | Select miss type, contextual reassurance |
| 01:27-02:21 | Player Profile | Handedness, favorite club, typical miss |
| 02:21-02:33 | Notifications | Reminder invitation + native permission |
| 02:33-03:36 | Monetization | Pro benefits, pricing choices, plan sheet |

### Onboarding Screens Detail

#### 1. Value Proposition Slides
- "Improve Your Golf Swing With AI"
- "Professional Swing Analysis" (SWING LAB AI)
- "Practice With Purpose" (PRACTICE SMARTER)
- "Your Golf Assistant" (COACH AND CADDIE)
- "Every Great Golfer Starts Somewhere"

#### 2. Goal Selection (Multi-select)
- Distance
- Accuracy
- Consistency
- Short Game
- Mental Game
- Lower Scores

Visual: 2-column, 3-row grid. Selected = white fill + dark-green icon.

#### 3. Play Frequency (Single-select)
- Every Day
- Few Times Per Week
- Weekly
- Monthly
- Occasionally

#### 4. Biggest Struggle (Single-select)
- Slice
- Hook
- Poor Contact
- No Distance
- Short Game
- Course Management
- Mental Game

Triggers contextual message (e.g., "Start Hitting The Center More Often" for Poor Contact)

#### 5. Coaching Profile
- Dominant Hand: Right/Left pill selector
- Favorite Club: Text input
- Typical Miss: Text input

#### 6. Notifications
- "Never Miss Practice"
- Allow Notifications / Maybe Later
- Native iOS permission dialog

#### 7. Pricing
- Monthly: $14.99
- Yearly: $99.99
- Trial offer: $1.99 first month

### Visual System
- Full-height dark-to-lighter forest green gradient
- Subtle circular arc patterns
- White, heavy font, center-aligned headlines
- Thin horizontal progress rail
- Circular translucent icon medallions
- Wide white pill-like CTAs

---

## Key UX Patterns to Steal

### 1. Diagnosis → Drills → Cues Pattern
The app translates swing assessment into:
```
Diagnosis (what's wrong)
    → Practice Drills (how to fix)
        → Swing Thoughts (mental cues)
```

### 2. Alternating Value/Question Flow
```
Explain value → Ask question → Personalize promise → Ask question → Offer action
```

### 3. Contextual Personalization
Selected struggle triggers custom reassurance message before continuing.

### 4. Progressive Disclosure
- Accordion assessments (expandable)
- Three tabs for different depths
- Drill details hidden until expanded

---

## Recommended Improvements for Forge Fit

### 1. Make Diagnosis Actionable Immediately
Put principal swing issue and first recommended drill near the top, rather than buried in 8 assessment groups.

### 2. Connect Analysis to Training Session
User should be able to:
- Select recommended drill
- Perform drill
- Record another swing
- Compare against original

### 3. Surface Analysis Reliability
Clearly identify:
- Estimates vs. measurements
- Missing data
- Low-confidence conclusions

Don't suggest certainty when swing phases weren't reliably identified.

---

## Component Inventory for Implementation

### Onboarding Components
```
OnboardingShell.tsx       - Container with progress rail
ProgressRail.tsx          - Step indicator
OptionTile.tsx            - Multi/single select tiles
OptionRow.tsx             - Stacked radio cards
BenefitList.tsx           - Feature checkmarks
```

### Analysis Components
```
AnalysisResultsScreen.tsx - Main container
AssessmentAccordion.tsx   - Expandable category
DrillCard.tsx             - Practice drill display
SwingThoughtCard.tsx      - Mental cue display
VideoPreview.tsx          - Swing video player
TabNavigation.tsx         - Segment control
```

### Data Models
```typescript
interface OnboardingAnswers {
  goals: Goal[];
  frequency?: Frequency;
  struggle?: Struggle;
  dominantHand?: 'right' | 'left';
  favoriteClub?: string;
  typicalMiss?: string;
  notificationChoice?: 'allow' | 'later';
  offerDismissed?: boolean;
}

interface SwingAnalysis {
  videoUrl: string;
  handicapEstimate: number;
  aiScore: number;
  categories: AssessmentCategory[];
  drills: Drill[];
  swingThoughts: string[];
  confidence: number;
}
```

---

## Analytics Events

### Onboarding
- `onboarding_step_viewed`
- `onboarding_step_completed`
- `onboarding_back`
- `onboarding_abandoned`
- `goals_selected`
- `frequency_selected`
- `struggle_selected`

### Analysis
- `swing_video_selected`
- `trim_completed`
- `upload_started`
- `analysis_completed`
- `drill_expanded`
- `analysis_saved`

---

## QA Edge Cases

- No goal selected, then selecting/deselecting several
- Single-select switching updates contextual copy
- Keyboard visible at bottom of profile screen
- Back/forward restores selections
- No notification permission granted
- No paywall purchase - app remains usable
- Monthly/yearly toggle consistency
- File permission denial
- Unsupported video codec
- Short/long video validation
- Network loss during upload
- AI inference low confidence
- Bad camera angle detection
