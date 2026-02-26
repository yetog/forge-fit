
export type WorkoutType = 'Light' | 'Isometric' | 'FullBody' | 'Bodyweight' | 'Cardio' | 'Core';

export type MuscleGroup = 'Chest' | 'Back' | 'Legs' | 'Arms' | 'Shoulders' | 'Core' | 'Full Body';

export interface Equipment {
  id: string;
  name: string;
  maxWeight?: number;
  description: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  equipmentNeeded: string[];
  defaultSets: number;
  defaultReps: number;
  defaultWeight?: number;
  description: string;
  isCardio?: boolean;
  durationMinutes?: number;
}

export interface ExerciseLog {
  exerciseId: string;
  sets: SetLog[];
  completed: boolean;
  notes?: string;
}

export interface SetLog {
  reps: number;
  weight: number;
  completed: boolean;
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  type: WorkoutType;
  muscleGroup?: MuscleGroup;
  durationMinutes: number;
  exercises: string[]; // exercise IDs
  description: string;
}

export interface WorkoutLog {
  id: string;
  templateId: string;
  profileId: string;
  type: WorkoutType;
  muscleGroup?: MuscleGroup;
  date: string;
  durationMinutes: number;
  exercises: ExerciseLog[];
  completed: boolean;
  notes?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
  totalWorkouts: number;
  currentStreak: number;
  longestStreak: number;
  lastWorkoutDate?: string;
}

export interface WorkoutState {
  profiles: UserProfile[];
  activeProfileId: string;
  workoutLogs: WorkoutLog[];
  activeWorkout: WorkoutLog | null;
}

// Goals
export interface Goal {
  id: string;
  profileId: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  deadline?: string;
  completed: boolean;
  createdAt: string;
}

// Program system (Ivy)
export interface WeeklyProgression {
  week: number;
  sets: number;
  reps: number | string;
  rest?: string;
  weight?: number;
  percentOf1RM?: number;
}

export interface ExerciseBlock {
  label: string; // A1, B2, etc.
  exerciseId: string;
  exerciseName: string; // display fallback
  sets: number;
  reps: number | string;
  rest?: string;
  weight?: number;
  percentOf1RM?: number;
  weeklyProgression?: WeeklyProgression[];
}

export interface ProgramDay {
  dayNumber: number;
  label: string;
  exerciseBlocks: ExerciseBlock[];
}

export interface Phase {
  id: string;
  name: string;
  focus: string;
  weeks: number;
  days: ProgramDay[];
}

export interface Program {
  id: string;
  name: string;
  description: string;
  totalWeeks: number;
  phases: Phase[];
}
