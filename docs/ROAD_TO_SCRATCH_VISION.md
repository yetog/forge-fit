# Road to Scratch: Complete Integration & Resource Directory

## Executive Summary

This document synthesizes a comprehensive development strategy for building "Road to Scratch"—a golf training and social app combining shot tracing, swing biomechanics, and gamified progression tracking.

---

## Core Technology Stack

| Layer | Technology |
|-------|------------|
| **Mobile Frontend** | React Native + TypeScript with Expo SDK 50+ |
| **Computer Vision** | MediaPipe Pose (on-device) + TensorFlow Lite |
| **Physics Engine** | libgolf (C++ trajectory calculations) |
| **Backend** | Node.js + PostgreSQL + AWS S3 |
| **Heavy Processing** | Python async services for post-round analysis |

---

## Four Primary Reference Repositories

| Repository | Purpose | Key Features |
|------------|---------|--------------|
| **HeleenaRobert/golf-swing-analysis** | Swing angle detection | MediaPipe landmarks, joint calculations |
| **cavanaulton/Pose2Par** | Advanced biomechanics | 3D modeling, X-Factor analysis |
| **joebochill/swingessentialsapp** | Mobile UI patterns | Video workflows, camera overlays |
| **Pieter-stack/TopShots** | Scorecard/social UX | Leaderboards, course directories |

---

## Key Open-Source Libraries

- **MediaPipe Pose:** On-device 3D body landmark tracking framework enabling real-time joint detection
- **OpenCV:** Video stabilization and optical flow processing
- **Ultralytics YOLO:** Custom golf ball detection model training
- **TensorFlow Lite:** Mobile-optimized neural network inference
- **react-native-vision-camera:** High-performance frame processing on mobile

---

## MVP Implementation Timeline

| Phase | Timeline | Focus |
|-------|----------|-------|
| **Phase 1** | Weeks 1-4 | Scorecard + Yaps recording system |
| **Phase 2** | Weeks 5-8 | 3-point manual tracer + video export |
| **Phase 3** | Weeks 9-12 | MediaPipe pose integration + progression dashboard |

---

## React Native Folder Architecture

```
src/
├── features/
│   ├── camera/      # Live recording & overlays
│   ├── pose/        # MediaPipe bridge
│   ├── tracer/      # Bezier curve rendering
│   ├── scorecard/   # GPS scoring
│   └── yaps/        # Audio/video recap engine
├── services/        # Native C++/WebAssembly bindings
├── store/           # State management (Zustand)
└── types/           # TypeScript interfaces
```

---

## Four-Tab UX Architecture

1. **"The 19th Hole"** – Social feed showcasing 60-second post-round video recaps
2. **Scorecard & GPS** – In-play scoring with high-contrast interface for outdoor use
3. **Swing Studio** – Real-time camera with pose skeleton overlay and tracer editor
4. **"Road to -1"** – Gamified progression dashboard tracking weaknesses and milestones

---

## Key Differentiators vs. Competitors

Unlike TheGrint's static "Yaps" or expensive TrackMan systems, "Road to Scratch" integrates:

- **Automatic shot stitching** combining traced highlights + scorecard + audio recap
- **Real-time pose feedback** during practice without hardware
- **Qualitative + quantitative fusion** linking biomechanical data to scoring patterns
- **Social content creation** with automatic Reels/TikTok export

---

## Integration Data Flow

```
On-device inference (MediaPipe)
    → Local joint angle calculations
    → Real-time mobile rendering
    ↓
Post-round async processing (Python backend)
    → Pose2Par biomechanics pipeline
    → Dashboard analytics
```

---

## Open Standards Referenced

- **OpenCourseData:** Community schema for course metadata (tees, greens, hazards)
- **OpenStreetMap (golf-tagged):** Free satellite coordinates vs. proprietary course APIs

---

## Critical Success Factors

1. **Frictionless in-play experience** – Single-handed scorecard navigation outdoors
2. **Hybrid tracing fallback** – Auto-detect for clear conditions; manual 3-tap override for poor lighting
3. **Content-first social loop** – Ready-to-export highlight reels drive engagement
4. **Progressive training insights** – Correlate swing video patterns with actual score outcomes

---

**Note:** This architecture prioritizes open-source foundations while allowing proprietary innovation in UI smoothing, mobile GPU optimization, and the training correlation engine—areas where competitors maintain their competitive moat.
