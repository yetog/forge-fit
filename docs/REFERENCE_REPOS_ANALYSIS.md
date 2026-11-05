# Reference Repositories Analysis

> Analysis Date: November 5, 2026
> Purpose: Extract reusable code patterns for Forge Fit integration

---

## Table of Contents

1. [Overview](#overview)
2. [golf-swing-analysis (Python/MediaPipe)](#1-golf-swing-analysis)
3. [swingessentialsapp (React Native)](#2-swingessentialsapp)
4. [TopShots (React Native/Firebase)](#3-topshots)
5. [Code Patterns to Steal](#code-patterns-to-steal)
6. [Integration Plan](#integration-plan)

---

## Overview

| Repo | Tech Stack | Primary Value |
|------|------------|---------------|
| **golf-swing-analysis** | Python, MediaPipe, OpenCV | Pose detection & angle calculations |
| **swingessentialsapp** | React Native, TypeScript | Video recording & upload workflows |
| **TopShots** | React Native, Firebase, Expo | Scorecard, leaderboards, social |

---

## 1. golf-swing-analysis

**Location:** `reference-repos/golf-swing-analysis/`

### Architecture
```
golf-swing-analysis/
├── golf_swing_analysis.py      # Main entry (31 lines)
├── utils/
│   ├── swing_utils.py          # MediaPipe + angle logic
│   └── video_utils.py          # Video I/O
├── input/                       # Input videos
└── output/                      # Processed output
```

### Key Code to Steal

#### Angle Calculation (Most Reusable)
```python
def _calculate_angle(a, b, c):
    """Calculate angle ABC (in degrees) given three points."""
    a, b, c = np.array(a), np.array(b), np.array(c)
    ba = a - b  # Vector from B to A
    bc = c - b  # Vector from B to C
    cos_angle = np.dot(ba, bc) / (np.linalg.norm(ba) * np.linalg.norm(bc))
    angle = np.degrees(np.arccos(np.clip(cos_angle, -1.0, 1.0)))
    return angle
```

#### Coordinate Transformation
```python
def _get_point(landmarks, landmark, frame_w, frame_h):
    x = int(landmarks.landmark[landmark].x * frame_w)
    y = int(landmarks.landmark[landmark].y * frame_h)
    return (x, y)
```

#### MediaPipe Initialization
```python
with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    results = pose.process(frame_rgb)
    landmarks = results.pose_landmarks
```

### Fitness Applications

| Body Angle | Landmarks | Use Case |
|------------|-----------|----------|
| Elbow | (Shoulder, Elbow, Wrist) | Push-up/bench form |
| Knee | (Hip, Knee, Ankle) | Squat depth |
| Hip | (Shoulder, Hip, Knee) | Deadlift posture |
| Spine | (Shoulder, Hip, Ankle) | Core alignment |

### Dependencies
```
opencv-python
mediapipe
numpy
```

---

## 2. swingessentialsapp

**Location:** `reference-repos/swingessentialsapp/`

### Architecture
```
src/
├── components/
│   ├── videos/          # SwingVideo, RecordButton, CountDown, VideoTimer
│   ├── feedback/        # UploadProgressModal
│   ├── layout/          # CollapsibleHeader, Stack
│   └── common/          # SEButton, Icon, ListItem
├── screens/
│   └── lessons/         # Record.tsx, Submit.tsx, SingleLesson.tsx
├── redux/               # RTK Query API services
├── theme/               # Material Design 3
└── hooks/               # usePrevious, useCompare
```

### Key Code to Steal

#### Camera Recording Setup
```typescript
const cameraFormat = useCameraFormat(device, [
  { videoAspectRatio: 16 / 9 },
  { videoResolution: { width: 1280, height: 720 } },
  { fps: 60 },
]);

camera.current.startRecording({
  fileType: 'mp4',
  videoCodec: 'h264',
  onRecordingFinished: (video) => { /* handle */ },
  onRecordingError: (error) => { /* handle */ },
});
```

#### Upload with Progress
```typescript
const xhr = new XMLHttpRequest();
xhr.upload.onprogress = (event) => {
  setProgress((event.loaded / event.total) * 100);
};
xhr.open('POST', endpoint);
xhr.send(formData);
```

#### Video Dual-View Component
```typescript
type SwingVideoProps = {
  type: 'fo' | 'dtl';  // Face-On | Down-the-Line
  source?: ReactVideoSourceProperties;
  onSourceChange?: (source: Asset) => void;
  editable?: boolean;
};
```

#### Countdown Timer
```typescript
<CountDown startValue={3} onFinish={() => startRecording()} />
<VideoTimer visible={isRecording} />
```

#### Overlay System (4 images)
```
overlay-fo-lh.png  # Face-On, Left-Handed
overlay-fo-rh.png  # Face-On, Right-Handed
overlay-dtl-lh.png # Down-the-Line, Left-Handed
overlay-dtl-rh.png # Down-the-Line, Right-Handed
```

### Dependencies
```
react-native-vision-camera@4.6.4
react-native-video@6.12.0
react-native-image-picker@8.2.0
react-native-fs@2.20.0
@reduxjs/toolkit@2.6.1
react-native-paper@5.13.1
```

---

## 3. TopShots

**Location:** `reference-repos/TopShots/`

### Architecture
```
TopShots/
├── components/
│   ├── Homepage.js        # Competition discovery
│   ├── Golfcourse.js      # Scorecard (600+ lines)
│   ├── Leaderboard.js     # Real-time rankings (540 lines)
│   ├── CompetitionEnter.js
│   ├── Competitionreg.js
│   ├── Profile.js
│   ├── Login.js
│   └── Register.js
├── Database.js            # Firestore operations
├── firebase.js            # Config
└── hooks/useFonts.js
```

### Firebase Data Model
```
users/
  └── {uid}
      ├── name, email, handicap
      ├── rank (integer)
      ├── badges (array of URLs)
      └── profile (avatar URL)

competitions/
  └── {docid}
      ├── title, venue, date
      ├── maxplayers, currentplayers
      ├── usersentered (array of UIDs)
      ├── closed ("open" | "closed")
      └── scorecard/
          └── {scorecardid}
              ├── uid
              ├── hole1-hole18 (individual scores)
              └── finalscore
```

### Key Code to Steal

#### Real-time Scorecard
```javascript
const handleHole1 = () => {
  setHole1(hole1input);
  setFinalscore(parseInt(finalscore) + parseInt(hole1input));
  const colRef = doc(db, 'competitions', id, 'scorecard', scorecardid);
  return updateDoc(colRef, {hole1: parseInt(hole1input)}, {merge: true});
};
```

#### Triple-nested Real-time Leaderboard
```javascript
const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
  let allusers = {};
  snapshot.forEach((doc) => {allusers[doc.id] = doc.data()});

  onSnapshot(
    query(scorecardCollectionRef, orderBy("finalscore", "asc")),
    (snapshot) => {
      let scores = [];
      snapshot.forEach((doc) => {
        scores.push({
          ...allusers[doc.data().uid],
          ...doc.data(),
          scorecardid: doc.id
        });
      });
      setScores(scores);
    }
  );
});
```

#### Badge/Achievement Award System
```javascript
if(today > compEndDate && comp[0].closed === "open") {
  // Winner gets badge
  updateProfile(scores[0]?.uid, {
    rank: scores[0]?.rank + 1,
    badges: arrayUnion(currentComp.badge)
  });
  // Runners-up get rank increase
  updateProfile(scores[1]?.uid, {rank: scores[1]?.rank + 1});
  updateProfile(scores[2]?.uid, {rank: scores[2]?.rank + 1});
}
```

#### Bottom Drawer Animation
```javascript
const gesture = Gesture.Pan()
  .onUpdate((event) => {
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value, -height*0.85);
  })
  .onEnd(() => {
    if(translateY.value > -height/3) {
      translateY.value = withSpring(-height/16, {damping: 50});
    }
  });
```

### Dependencies
```
firebase@9.8.1
react-native-reanimated@3.10.1
@react-navigation/native@6.0.10
expo-blur@13.0.2
lottie-react-native@6.7.2
```

---

## Code Patterns to Steal

### Priority 1: Immediate Value

| Pattern | Source | Forge Fit Use |
|---------|--------|---------------|
| Angle calculation | golf-swing-analysis | Form checking for exercises |
| Video recording | swingessentialsapp | Golf swing capture |
| Countdown timer | swingessentialsapp | Pre-recording delay |
| Upload progress | swingessentialsapp | Video submission |
| Real-time scoring | TopShots | Workout competitions |

### Priority 2: Enhanced Features

| Pattern | Source | Forge Fit Use |
|---------|--------|---------------|
| Camera overlays | swingessentialsapp | Exercise form guides |
| Leaderboard sync | TopShots | Fitness challenges |
| Badge system | TopShots | Achievement rewards |
| Profile avatars | TopShots | User customization |
| Bottom drawer | TopShots | Scorecard UI |

### Priority 3: Future Expansion

| Pattern | Source | Forge Fit Use |
|---------|--------|---------------|
| MediaPipe pose | golf-swing-analysis | Real-time form analysis |
| Dual-view video | swingessentialsapp | Before/after comparison |
| Competition system | TopShots | Group challenges |
| Course data | TopShots | Golf course tracking |

---

## Integration Plan

### Phase 1: Video Infrastructure (Week 1-2)

**Goal:** Add video recording to Forge Fit for golf swings

**Tasks:**
1. Port `CountDown` component from swingessentialsapp
2. Port `VideoTimer` component from swingessentialsapp
3. Create `SwingRecorder` component using react-native-vision-camera patterns
4. Add overlay images for golf stance guides
5. Implement video upload with progress indicator

**Files to Create:**
```
src/components/video/
├── CountDown.tsx
├── VideoTimer.tsx
├── SwingRecorder.tsx
├── RecordButton.tsx
└── UploadProgress.tsx
```

### Phase 2: Backend & Accounts (Week 3-4)

**Goal:** Add Supabase backend for user accounts and data sync

**Tasks:**
1. Set up Supabase project (auth + database)
2. Create users table (copy TopShots schema pattern)
3. Implement auth flow (login/register)
4. Add cloud sync for workout data
5. Implement analytics events

**Database Schema:**
```sql
users (
  id uuid primary key,
  email text,
  name text,
  avatar_url text,
  rank integer default 1,
  badges text[],
  created_at timestamp
)

workouts (
  id uuid primary key,
  user_id uuid references users,
  exercises jsonb,
  total_score integer,
  created_at timestamp
)

golf_sessions (
  id uuid primary key,
  user_id uuid references users,
  video_url text,
  metrics jsonb,
  created_at timestamp
)
```

### Phase 3: Analytics & Form Analysis (Week 5-6)

**Goal:** Add pose detection for form checking

**Tasks:**
1. Port angle calculation logic from golf-swing-analysis
2. Create TypeScript version of `_calculate_angle()`
3. Integrate MediaPipe via TensorFlow.js or native bridge
4. Build form feedback overlay system
5. Add real-time angle display during exercises

**Key Functions to Port:**
```typescript
// From golf-swing-analysis
function calculateAngle(a: Point, b: Point, c: Point): number;
function getPoint(landmarks: Landmark[], index: number, frameSize: Size): Point;
function processFrame(frame: Frame, frameSize: Size): AnnotatedFrame;
```

### Phase 4: Competitions & Social (Week 7-8)

**Goal:** Add workout competitions with leaderboards

**Tasks:**
1. Create competitions table (copy TopShots pattern)
2. Build competition entry flow
3. Implement real-time leaderboard (adapt TopShots pattern)
4. Add badge/achievement awards
5. Create social sharing for results

**Competition Flow:**
```
1. Admin creates competition (title, rules, dates)
2. Users enter competition (creates scorecard)
3. Users complete workouts (scores update real-time)
4. Competition ends → top 3 get badges
5. Results posted to social feed
```

---

## Quick Reference: File Locations

```
reference-repos/
├── golf-swing-analysis/
│   ├── golf_swing_analysis.py      # Main entry
│   └── utils/swing_utils.py        # Angle calculations
│
├── swingessentialsapp/
│   └── src/
│       ├── components/videos/      # Video components
│       ├── screens/lessons/        # Recording flow
│       └── redux/                  # RTK Query
│
└── TopShots/
    ├── components/
    │   ├── Golfcourse.js           # Scorecard
    │   └── Leaderboard.js          # Rankings
    └── Database.js                 # Firebase ops
```

---

## Summary

These three repos provide a complete toolkit for building:

1. **Video Recording** (swingessentialsapp)
   - Camera setup, recording, countdown, overlays

2. **Form Analysis** (golf-swing-analysis)
   - MediaPipe pose detection, angle calculations

3. **Competitions & Social** (TopShots)
   - Real-time leaderboards, badges, scorecards

The integration plan prioritizes video infrastructure first (immediate user value), then backend/accounts (required for tracking), then analytics (differentiator), and finally social features (engagement).
