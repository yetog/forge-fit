
// Club types
export type ClubType = 'driver' | 'wood' | 'hybrid' | 'iron' | 'wedge' | 'putter';

export type MissType = 'slice' | 'hook' | 'thin' | 'chunk' | 'push' | 'pull' | 'top' | 'shank';

export type TrainingPhase = 'contact' | 'distance' | 'shaping';

// Club tracking
export interface GolfClub {
  id: string;
  name: string;
  type: ClubType;
  maxDistance: number;
  halfSwingDistance: number;
  confidence: number;
  commonMiss: MissType | null;
  bestCue: string;
  notes: string;
}

// Session logging
export interface GolfSession {
  id: string;
  date: string;
  location: string;
  duration: number;
  clubsUsed: string[];
  focus: string;

  // Reflections
  whatFeltGood: string;
  biggestMiss: string;
  whatImproved: string;
  bestCue: string;
  confidence: number;
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
  clubs: string[];
  skills: string[];
  unlocked: boolean;
  completed: boolean;
  progress: number;
}

// Practice drill
export interface GolfDrill {
  id: string;
  name: string;
  phase: TrainingPhase;
  club: string;
  reps: number;
  focus: string;
  cue: string;
  description: string;
}

// Personal cue
export interface GolfCue {
  id: string;
  category: string;
  text: string;
  effectiveness: number;
}

// Golf profile
export interface GolfProfile {
  currentPhase: TrainingPhase;
  currentFocus: string;
  totalSessions: number;
  totalPracticeMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastSessionDate?: string;
}

// Focus options for sessions
export const FOCUS_OPTIONS = [
  'Contact',
  'Tempo',
  'Finish',
  'Driver Control',
  'Half Swings',
  'Distance Control',
  'Putting',
  'Short Game',
] as const;

export type FocusOption = typeof FOCUS_OPTIONS[number];
