# ForgeFit Golf MVP - Implementation Plan

> **Scope:** 5 Core Features + Boxing Placeholder + RPG Integration
> **Theme:** Green accent for Golf section
> **Status:** Ready for implementation

---

## Overview

Add a **Sports** section to ForgeFit containing:
- **Boxing** (placeholder only)
- **Golf** (full MVP implementation)

### 5 Core Features (MVP)
1. Golf Dashboard
2. Training Path (Phases)
3. Club Tracking
4. Session Logging
5. Miss Correction Engine

---

## File Structure

```
src/
├── types/
│   └── golf.ts                    # NEW: Golf type definitions
├── context/
│   └── GolfContext.tsx            # NEW: Golf state management
├── utils/
│   └── golfStorage.ts             # NEW: Golf localStorage keys
├── data/
│   ├── golfClubs.ts               # NEW: Default club data
│   ├── golfDrills.ts              # NEW: Practice drills
│   ├── golfMissPatterns.ts        # NEW: Miss correction lookup
│   └── golfTrainingPath.ts        # NEW: Training phases
├── pages/
│   ├── SportsPage.tsx             # NEW: Sports hub (Boxing/Golf)
│   ├── GolfDashboard.tsx          # NEW: Golf home
│   ├── GolfTrainingPath.tsx       # NEW: Phase progression
│   ├── GolfClubs.tsx              # NEW: Club management
│   ├── GolfSessions.tsx           # NEW: Session logging
│   └── GolfMissCorrection.tsx     # NEW: Miss lookup
├── components/
│   ├── golf/
│   │   ├── ClubCard.tsx           # NEW: Individual club display
│   │   ├── SessionForm.tsx        # NEW: Log a session
│   │   ├── MissSelector.tsx       # NEW: Miss checkboxes
│   │   ├── PhaseCard.tsx          # NEW: Training phase display
│   │   └── GolfStats.tsx          # NEW: Stats overview
│   └── WorkoutNavbar.tsx          # MODIFY: Add Sports tab
└── pages/
    └── Index.tsx                  # MODIFY: Add sports tab rendering
```

---

## Phase 1: Types & Storage

### 1.1 Create `src/types/golf.ts`

```typescript
// Club types
export type ClubType = 'driver' | 'wood' | 'hybrid' | 'iron' | 'wedge' | 'putter';

export type MissType = 'slice' | 'hook' | 'thin' | 'chunk' | 'push' | 'pull' | 'top' | 'shank';

export type TrainingPhase = 'contact' | 'distance' | 'shaping';

// Club tracking
export interface GolfClub {
  id: string;
  name: string;                    // "8 Iron"
  type: ClubType;
  maxDistance: number;             // yards
  halfSwingDistance: number;
  confidence: number;              // 1-10
  commonMiss: MissType | null;
  bestCue: string;
  notes: string;
}

// Session logging
export interface GolfSession {
  id: string;
  date: string;
  location: string;
  duration: number;                // minutes
  clubsUsed: string[];             // club IDs
  focus: string;                   // "Contact", "Tempo", etc.

  // Reflections
  whatFeltGood: string;
  biggestMiss: string;
  whatImproved: string;
  bestCue: string;
  confidence: number;              // 1-10
  notes: string;

  // Miss tracking (counts)
  misses: {
    slice: number;
    hook: number;
    thin: number;
    chunk: number;
    push: number;
    pull: number;
    top: number;
    shank: number;
  };

  // XP awarded
  xpEarned: number;
}

// Miss correction lookup
export interface MissPattern {
  miss: MissType;
  likelyCause: string;
  correctionCue: string;
  drillId?: string;
}

// Training path
export interface TrainingPathPhase {
  id: TrainingPhase;
  name: string;
  color: 'green' | 'yellow' | 'red';
  goal: string;
  description: string;
  clubs: string[];                 // recommended clubs
  skills: string[];                // skills to develop
  unlocked: boolean;
  completed: boolean;
  progress: number;                // 0-100
}

// Practice drill
export interface GolfDrill {
  id: string;
  name: string;
  phase: TrainingPhase;
  club: string;                    // "any" or specific club
  reps: number;
  focus: string;
  cue: string;
  description: string;
}

// Personal cue
export interface GolfCue {
  id: string;
  category: string;                // "Contact", "Tempo", "Finish"
  text: string;
  effectiveness: number;           // 1-10
}

// Golf profile (extends user workout profile)
export interface GolfProfile {
  currentPhase: TrainingPhase;
  currentFocus: string;
  totalSessions: number;
  totalPracticeMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastSessionDate?: string;
}
```

### 1.2 Create `src/utils/golfStorage.ts`

```typescript
const PREFIX = 'forge-fit-golf-';

export const GOLF_KEYS = {
  PROFILE: `${PREFIX}profile`,
  CLUBS: `${PREFIX}clubs`,
  SESSIONS: `${PREFIX}sessions`,
  CUES: `${PREFIX}cues`,
} as const;

export function golfGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function golfSet(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
```

---

## Phase 2: Data Files

### 2.1 Create `src/data/golfClubs.ts`

Default clubs user can customize:

```typescript
import { GolfClub } from '@/types/golf';

export const defaultClubs: GolfClub[] = [
  // Wedges
  { id: 'pw', name: 'Pitching Wedge', type: 'wedge', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: 'aw', name: 'Approach Wedge', type: 'wedge', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: 'sw', name: 'Sand Wedge', type: 'wedge', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },

  // Irons
  { id: '9i', name: '9 Iron', type: 'iron', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: '8i', name: '8 Iron', type: 'iron', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: '7i', name: '7 Iron', type: 'iron', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: '6i', name: '6 Iron', type: 'iron', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: '5i', name: '5 Iron', type: 'iron', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },

  // Hybrids
  { id: '4h', name: '4 Hybrid', type: 'hybrid', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: '5h', name: '5 Hybrid', type: 'hybrid', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },

  // Woods & Driver
  { id: '3w', name: '3 Wood', type: 'wood', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
  { id: 'dr', name: 'Driver', type: 'driver', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },

  // Putter
  { id: 'pt', name: 'Putter', type: 'putter', maxDistance: 0, halfSwingDistance: 0, confidence: 5, commonMiss: null, bestCue: '', notes: '' },
];

export const getClubById = (id: string) => defaultClubs.find(c => c.id === id);
```

### 2.2 Create `src/data/golfMissPatterns.ts`

```typescript
import { MissPattern } from '@/types/golf';

export const missPatterns: MissPattern[] = [
  { miss: 'slice', likelyCause: 'Open club face at impact', correctionCue: 'Close the face, stronger grip' },
  { miss: 'hook', likelyCause: 'Closed club face, inside-out path', correctionCue: 'Weaken grip, square at impact' },
  { miss: 'thin', likelyCause: 'Standing up through impact', correctionCue: 'Stay level, maintain spine angle' },
  { miss: 'chunk', likelyCause: 'Weight on back foot, hitting ground first', correctionCue: 'Ball first, then brush the grass' },
  { miss: 'push', likelyCause: 'Inside-out swing path', correctionCue: 'Swing down the target line' },
  { miss: 'pull', likelyCause: 'Outside-in swing path', correctionCue: 'Start the club inside' },
  { miss: 'top', likelyCause: 'Lifting up, eye off ball', correctionCue: 'Keep head still, watch the ball' },
  { miss: 'shank', likelyCause: 'Standing too close, hosel contact', correctionCue: 'Step back, hit the toe' },
];

export const getMissCorrection = (miss: string) => missPatterns.find(m => m.miss === miss);
```

### 2.3 Create `src/data/golfTrainingPath.ts`

```typescript
import { TrainingPathPhase } from '@/types/golf';

export const trainingPhases: TrainingPathPhase[] = [
  {
    id: 'contact',
    name: 'Contact & Direction',
    color: 'green',
    goal: 'Hit straight with clean contact',
    description: 'Master the fundamentals: clean strikes, stable posture, consistent contact.',
    clubs: ['pw', 'aw', '9i', '8i', '7i'],
    skills: ['Half swings', 'Brush the grass', 'Stable posture', 'Hold finish'],
    unlocked: true,
    completed: false,
    progress: 0,
  },
  {
    id: 'distance',
    name: 'Distance Control',
    color: 'yellow',
    goal: 'Understand half vs full distances',
    description: 'Learn your distances, develop feel for power control, add longer clubs.',
    clubs: ['7i', '6i', '5i', '4h', '5h', '3w'],
    skills: ['Full swings', 'Distance awareness', 'Club selection', 'Tempo control'],
    unlocked: false,
    completed: false,
    progress: 0,
  },
  {
    id: 'shaping',
    name: 'Shot Shaping',
    color: 'red',
    goal: 'Control ball flight and shape',
    description: 'Advanced: intentional draws, fades, trajectory control.',
    clubs: ['all'],
    skills: ['Draw', 'Fade', 'High shots', 'Low shots'],
    unlocked: false,
    completed: false,
    progress: 0,
  },
];

export const getPhaseById = (id: string) => trainingPhases.find(p => p.id === id);
```

### 2.4 Create `src/data/golfDrills.ts`

```typescript
import { GolfDrill } from '@/types/golf';

export const golfDrills: GolfDrill[] = [
  // Phase 1: Contact
  {
    id: 'warmup-pw',
    name: 'PW Warmup',
    phase: 'contact',
    club: 'pw',
    reps: 10,
    focus: 'Contact',
    cue: 'Brush the grass',
    description: 'Half swings with pitching wedge. Focus on clean contact.',
  },
  {
    id: '8i-straight',
    name: '8 Iron Straight Shots',
    phase: 'contact',
    club: '8i',
    reps: 10,
    focus: 'Direction',
    cue: 'Square face at impact',
    description: 'Hit 10 straight shots with 8 iron. No curve.',
  },
  {
    id: 'hold-finish',
    name: 'Hold the Finish',
    phase: 'contact',
    club: 'any',
    reps: 5,
    focus: 'Balance',
    cue: 'Hold pose 3 seconds',
    description: 'Any club. Hold your finish for 3 full seconds.',
  },
  {
    id: 'half-swing-control',
    name: 'Half Swing Control',
    phase: 'contact',
    club: '7i',
    reps: 10,
    focus: 'Control',
    cue: 'Arms to 9 o\'clock',
    description: 'Half swings only. Feel the controlled contact.',
  },

  // Phase 2: Distance
  {
    id: 'distance-ladder',
    name: 'Distance Ladder',
    phase: 'distance',
    club: '7i',
    reps: 9,
    focus: 'Distance control',
    cue: 'Half, three-quarter, full',
    description: '3 half shots, 3 three-quarter, 3 full. Notice distance changes.',
  },
  {
    id: 'club-compare',
    name: 'Club Comparison',
    phase: 'distance',
    club: 'any',
    reps: 6,
    focus: 'Gapping',
    cue: 'Same swing, different clubs',
    description: 'Hit 2 shots each with 3 consecutive clubs. Learn your gaps.',
  },

  // Driver specific
  {
    id: 'driver-tempo',
    name: 'Driver Tempo',
    phase: 'distance',
    club: 'dr',
    reps: 5,
    focus: 'Tempo',
    cue: 'Smooth, not violent',
    description: '70% power drives. Focus only on smooth tempo.',
  },
];

export const getDrillsByPhase = (phase: string) => golfDrills.filter(d => d.phase === phase);
export const getDrillById = (id: string) => golfDrills.find(d => d.id === id);
```

---

## Phase 3: Context

### 3.1 Create `src/context/GolfContext.tsx`

```typescript
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { GolfClub, GolfSession, GolfProfile, GolfCue, TrainingPhase } from '@/types/golf';
import { golfGet, golfSet, GOLF_KEYS } from '@/utils/golfStorage';
import { defaultClubs } from '@/data/golfClubs';
import { useCharacter } from '@/context/CharacterContext';

interface GolfContextType {
  // Profile
  profile: GolfProfile;
  updateProfile: (updates: Partial<GolfProfile>) => void;

  // Clubs
  clubs: GolfClub[];
  updateClub: (clubId: string, updates: Partial<GolfClub>) => void;

  // Sessions
  sessions: GolfSession[];
  addSession: (session: Omit<GolfSession, 'id' | 'xpEarned'>) => void;
  getRecentSessions: (limit?: number) => GolfSession[];

  // Cues
  cues: GolfCue[];
  addCue: (cue: Omit<GolfCue, 'id'>) => void;
  deleteCue: (id: string) => void;

  // Stats
  getMostCommonMiss: () => string | null;
  getSessionStreak: () => number;
  getTotalPracticeTime: () => number;
}

const defaultProfile: GolfProfile = {
  currentPhase: 'contact',
  currentFocus: 'Contact',
  totalSessions: 0,
  totalPracticeMinutes: 0,
  currentStreak: 0,
  longestStreak: 0,
};

const GolfContext = createContext<GolfContextType | undefined>(undefined);

export const GolfProvider = ({ children }: { children: ReactNode }) => {
  const { character } = useCharacter();

  const [profile, setProfile] = useState<GolfProfile>(() =>
    golfGet(GOLF_KEYS.PROFILE, defaultProfile)
  );

  const [clubs, setClubs] = useState<GolfClub[]>(() =>
    golfGet(GOLF_KEYS.CLUBS, defaultClubs)
  );

  const [sessions, setSessions] = useState<GolfSession[]>(() =>
    golfGet(GOLF_KEYS.SESSIONS, [])
  );

  const [cues, setCues] = useState<GolfCue[]>(() =>
    golfGet(GOLF_KEYS.CUES, [])
  );

  // Persist on change
  useEffect(() => { golfSet(GOLF_KEYS.PROFILE, profile); }, [profile]);
  useEffect(() => { golfSet(GOLF_KEYS.CLUBS, clubs); }, [clubs]);
  useEffect(() => { golfSet(GOLF_KEYS.SESSIONS, sessions); }, [sessions]);
  useEffect(() => { golfSet(GOLF_KEYS.CUES, cues); }, [cues]);

  const updateProfile = (updates: Partial<GolfProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const updateClub = (clubId: string, updates: Partial<GolfClub>) => {
    setClubs(prev => prev.map(c => c.id === clubId ? { ...c, ...updates } : c));
  };

  const addSession = (sessionData: Omit<GolfSession, 'id' | 'xpEarned'>) => {
    // Calculate XP based on duration and reflections
    const baseXp = Math.floor(sessionData.duration / 10) * 5; // 5 XP per 10 minutes
    const reflectionBonus = sessionData.whatImproved ? 10 : 0;
    const xpEarned = baseXp + reflectionBonus;

    const session: GolfSession = {
      ...sessionData,
      id: crypto.randomUUID(),
      xpEarned,
    };

    setSessions(prev => [...prev, session]);

    // Update profile stats
    const today = new Date().toDateString();
    const lastDate = profile.lastSessionDate
      ? new Date(profile.lastSessionDate).toDateString()
      : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let streak = profile.currentStreak;
    if (lastDate === yesterday) {
      streak += 1;
    } else if (lastDate !== today) {
      streak = 1;
    }

    setProfile(prev => ({
      ...prev,
      totalSessions: prev.totalSessions + 1,
      totalPracticeMinutes: prev.totalPracticeMinutes + sessionData.duration,
      currentStreak: streak,
      longestStreak: Math.max(prev.longestStreak, streak),
      lastSessionDate: new Date().toISOString(),
    }));

    // TODO: Award XP to character via CharacterContext
    // This would integrate with the RPG system
  };

  const getRecentSessions = useCallback((limit = 5) => {
    return [...sessions]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }, [sessions]);

  const addCue = (cueData: Omit<GolfCue, 'id'>) => {
    const cue: GolfCue = { ...cueData, id: crypto.randomUUID() };
    setCues(prev => [...prev, cue]);
  };

  const deleteCue = (id: string) => {
    setCues(prev => prev.filter(c => c.id !== id));
  };

  const getMostCommonMiss = useCallback(() => {
    if (sessions.length === 0) return null;

    const missCounts: Record<string, number> = {};
    sessions.forEach(s => {
      Object.entries(s.misses).forEach(([miss, count]) => {
        missCounts[miss] = (missCounts[miss] || 0) + count;
      });
    });

    const sorted = Object.entries(missCounts).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || null;
  }, [sessions]);

  const getSessionStreak = useCallback(() => profile.currentStreak, [profile]);

  const getTotalPracticeTime = useCallback(() => profile.totalPracticeMinutes, [profile]);

  return (
    <GolfContext.Provider value={{
      profile, updateProfile,
      clubs, updateClub,
      sessions, addSession, getRecentSessions,
      cues, addCue, deleteCue,
      getMostCommonMiss, getSessionStreak, getTotalPracticeTime,
    }}>
      {children}
    </GolfContext.Provider>
  );
};

export const useGolf = () => {
  const ctx = useContext(GolfContext);
  if (!ctx) throw new Error('useGolf must be used within GolfProvider');
  return ctx;
};
```

---

## Phase 4: Pages

### 4.1 Create `src/pages/SportsPage.tsx`

Sports hub with Boxing (placeholder) and Golf:

```typescript
import React from 'react';
import { Target, Swords } from 'lucide-react';

interface SportsPageProps {
  onSelectSport: (sport: 'boxing' | 'golf') => void;
}

const SportsPage: React.FC<SportsPageProps> = ({ onSelectSport }) => {
  return (
    <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
          SPORTS
        </h1>
        <p className="text-muted-foreground font-body mt-1">
          Skill-based training modules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Boxing - Placeholder */}
        <button
          onClick={() => onSelectSport('boxing')}
          className="workout-card p-6 text-left opacity-50 cursor-not-allowed"
          disabled
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
              <Swords className="text-red-400" size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground">BOXING</h3>
              <span className="text-xs text-muted-foreground">Coming Soon</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Combat training, technique drills, and conditioning.
          </p>
        </button>

        {/* Golf - Active */}
        <button
          onClick={() => onSelectSport('golf')}
          className="workout-card p-6 text-left hover:border-green-500/50 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <Target className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground">GOLF</h3>
              <span className="text-xs text-green-400">Active</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Structured practice, club tracking, and skill progression.
          </p>
        </button>
      </div>
    </div>
  );
};

export default SportsPage;
```

### 4.2 Create `src/pages/GolfDashboard.tsx`

Main golf dashboard with stats and quick actions:

```typescript
import React from 'react';
import { Target, Clock, TrendingUp, AlertCircle, ChevronRight } from 'lucide-react';
import { useGolf } from '@/context/GolfContext';
import { getMissCorrection } from '@/data/golfMissPatterns';
import { Button } from '@/components/ui/button';

interface GolfDashboardProps {
  onNavigate: (tab: string) => void;
}

const GolfDashboard: React.FC<GolfDashboardProps> = ({ onNavigate }) => {
  const { profile, getRecentSessions, getMostCommonMiss, getTotalPracticeTime } = useGolf();

  const recentSessions = getRecentSessions(3);
  const commonMiss = getMostCommonMiss();
  const missCorrection = commonMiss ? getMissCorrection(commonMiss) : null;

  return (
    <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
          <Target className="text-green-400" size={20} />
        </div>
        <div>
          <h1 className="font-display text-xl md:text-2xl text-foreground tracking-wider">
            GOLF TRAINING
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Phase: <span className="text-green-400 capitalize">{profile.currentPhase}</span>
          </p>
        </div>
      </div>

      {/* Current Focus */}
      <div className="workout-card p-4 mb-4 border-green-500/30">
        <div className="text-xs text-muted-foreground mb-1">TODAY'S FOCUS</div>
        <div className="font-display text-lg text-green-400">{profile.currentFocus}</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="workout-card text-center py-4">
          <div className="font-display text-2xl text-foreground">{profile.totalSessions}</div>
          <div className="text-xs text-muted-foreground">Sessions</div>
        </div>
        <div className="workout-card text-center py-4">
          <div className="font-display text-2xl text-foreground">{profile.currentStreak}</div>
          <div className="text-xs text-muted-foreground">Streak</div>
        </div>
        <div className="workout-card text-center py-4">
          <div className="font-display text-2xl text-foreground">
            {Math.floor(getTotalPracticeTime() / 60)}h
          </div>
          <div className="text-xs text-muted-foreground">Practice</div>
        </div>
      </div>

      {/* Common Miss Alert */}
      {commonMiss && missCorrection && (
        <div className="workout-card p-4 mb-4 border-yellow-500/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-400 mt-0.5" size={18} />
            <div>
              <div className="text-sm text-yellow-400 font-semibold capitalize">
                Common Miss: {commonMiss}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {missCorrection.likelyCause}
              </div>
              <div className="text-sm text-foreground mt-2">
                Cue: "{missCorrection.correctionCue}"
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="space-y-2 mb-6">
        <Button
          onClick={() => onNavigate('golf-sessions')}
          className="w-full justify-between bg-green-600 hover:bg-green-700"
        >
          <span>Log Practice Session</span>
          <ChevronRight size={18} />
        </Button>

        <Button
          onClick={() => onNavigate('golf-clubs')}
          variant="outline"
          className="w-full justify-between"
        >
          <span>My Clubs</span>
          <ChevronRight size={18} />
        </Button>

        <Button
          onClick={() => onNavigate('golf-path')}
          variant="outline"
          className="w-full justify-between"
        >
          <span>Training Path</span>
          <ChevronRight size={18} />
        </Button>

        <Button
          onClick={() => onNavigate('golf-miss')}
          variant="outline"
          className="w-full justify-between"
        >
          <span>Miss Corrections</span>
          <ChevronRight size={18} />
        </Button>
      </div>

      {/* Recent Sessions */}
      {recentSessions.length > 0 && (
        <div>
          <h3 className="font-display text-sm text-muted-foreground mb-3">RECENT SESSIONS</h3>
          <div className="space-y-2">
            {recentSessions.map(session => (
              <div key={session.id} className="workout-card p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-foreground">{session.focus}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(session.date).toLocaleDateString()} • {session.duration} min
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400">+{session.xpEarned} XP</div>
                    <div className="text-xs text-muted-foreground">
                      Confidence: {session.confidence}/10
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GolfDashboard;
```

### 4.3 Create Additional Pages

Similar patterns for:
- `GolfTrainingPath.tsx` - Phase cards with progress
- `GolfClubs.tsx` - Club list with edit functionality
- `GolfSessions.tsx` - Session form and history
- `GolfMissCorrection.tsx` - Lookup table UI

---

## Phase 5: Navigation Updates

### 5.1 Modify `src/components/WorkoutNavbar.tsx`

Add Sports tab:

```typescript
// Add to imports
import { Trophy } from 'lucide-react';

// Update tabs array (line ~23)
const tabs = [
  { id: "dashboard", label: "Home", icon: Home },
  { id: "workouts", label: "Workouts", icon: Dumbbell },
  { id: "programs", label: "Programs", icon: BookOpen },
  { id: "sports", label: "Sports", icon: Trophy },        // NEW
  { id: "history", label: "History", icon: History },
  { id: "nutrition", label: "Nutrition", icon: Apple },
  { id: "profile", label: "Profile", icon: User },
];

// Update bottomTabs to include sports
const bottomTabs = tabs.filter(t =>
  ['dashboard', 'workouts', 'sports', 'history', 'profile'].includes(t.id)
);
```

### 5.2 Modify `src/pages/Index.tsx`

Add sports tab rendering:

```typescript
// Add imports
import SportsPage from '@/pages/SportsPage';
import GolfDashboard from '@/pages/GolfDashboard';
import GolfTrainingPath from '@/pages/GolfTrainingPath';
import GolfClubs from '@/pages/GolfClubs';
import GolfSessions from '@/pages/GolfSessions';
import GolfMissCorrection from '@/pages/GolfMissCorrection';
import { GolfProvider } from '@/context/GolfContext';

// In MainApp component, add state for sports sub-navigation
const [sportsView, setSportsView] = useState<string>('hub');

// Add to tab rendering (after programs, before history)
{activeTab === "sports" && (
  <GolfProvider>
    {sportsView === 'hub' && (
      <SportsPage onSelectSport={(sport) => {
        if (sport === 'golf') setSportsView('golf-dashboard');
      }} />
    )}
    {sportsView === 'golf-dashboard' && (
      <GolfDashboard onNavigate={setSportsView} />
    )}
    {sportsView === 'golf-path' && (
      <GolfTrainingPath onNavigate={setSportsView} />
    )}
    {sportsView === 'golf-clubs' && (
      <GolfClubs onNavigate={setSportsView} />
    )}
    {sportsView === 'golf-sessions' && (
      <GolfSessions onNavigate={setSportsView} />
    )}
    {sportsView === 'golf-miss' && (
      <GolfMissCorrection onNavigate={setSportsView} />
    )}
  </GolfProvider>
)}

// Reset sports view when leaving sports tab
useEffect(() => {
  if (activeTab !== 'sports') {
    setSportsView('hub');
  }
}, [activeTab]);
```

---

## Phase 6: RPG Integration

### 6.1 Golf Achievements

Add to achievements system:
- "First Swing" - Complete first golf session
- "Range Rat" - 10 golf sessions
- "Club Master" - Fill in all club distances
- "Streak Keeper" - 5 day golf practice streak
- "Self Aware" - Log 10 miss corrections

### 6.2 Golf Quests

Auto-generate golf quests:
- Daily: "Complete a practice session" (+15 XP)
- Weekly: "Log 3 golf sessions" (+50 XP)
- Milestone: "Reach Phase 2: Distance" (+100 XP)

---

## Styling Notes

### Consistent Gold Branding

Golf uses the same gold/primary theme as the rest of ForgeFit:
- `text-primary` - Primary gold text
- `bg-primary/20` - Gold background (muted)
- `border-primary/30` - Gold borders
- `hover:bg-primary/30` - Hover states

### Card Pattern

Use existing `.workout-card` and `.workout-card-gold` classes.
No custom golf styling needed - keeps the app cohesive.

---

## Implementation Order

1. **Types & Storage** - Foundation
2. **Data files** - Static content
3. **GolfContext** - State management
4. **SportsPage** - Entry point
5. **GolfDashboard** - Main view
6. **Navigation updates** - Wire it up
7. **GolfClubs** - Club tracking
8. **GolfSessions** - Session logging
9. **GolfMissCorrection** - Lookup table
10. **GolfTrainingPath** - Phase progression

---

## Checkpoint After Core 5

After implementing:
1. Dashboard
2. Training Path
3. Clubs
4. Sessions
5. Miss Corrections

**Check in to review:**
- UI/UX feel
- Data flow
- Any missing functionality
- RPG integration depth
- Additional features to add

---

## Files Summary

| Type | Files | Status |
|------|-------|--------|
| NEW | 15 files | To create |
| MODIFY | 2 files | Index.tsx, WorkoutNavbar.tsx |

**New Files:**
- `src/types/golf.ts`
- `src/utils/golfStorage.ts`
- `src/context/GolfContext.tsx`
- `src/data/golfClubs.ts`
- `src/data/golfDrills.ts`
- `src/data/golfMissPatterns.ts`
- `src/data/golfTrainingPath.ts`
- `src/pages/SportsPage.tsx`
- `src/pages/GolfDashboard.tsx`
- `src/pages/GolfTrainingPath.tsx`
- `src/pages/GolfClubs.tsx`
- `src/pages/GolfSessions.tsx`
- `src/pages/GolfMissCorrection.tsx`
- `src/components/golf/ClubCard.tsx`
- `src/components/golf/SessionForm.tsx`
