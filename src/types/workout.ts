
export type WorkoutType = 'Light' | 'Isometric' | 'FullBody';

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
