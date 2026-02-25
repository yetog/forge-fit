
import { WorkoutTemplate } from '@/types/workout';
import { exercises } from '@/data/exercises';

export const workoutTemplates: WorkoutTemplate[] = [
  // LIGHT (~30 min)
  {
    id: 'light-default',
    name: 'Light Workout',
    type: 'Light',
    durationMinutes: 30,
    exercises: ['stretching', 'crunches', 'leg-raises', 'plank', 'pushups', 'treadmill-run'],
    description: 'Quick session: stretching, abs, push-ups, and a run.',
  },

  // BODYWEIGHT (~25-30 min)
  {
    id: 'bodyweight-blast',
    name: 'Bodyweight Blast',
    type: 'Bodyweight',
    muscleGroup: 'Full Body',
    durationMinutes: 30,
    exercises: [
      'bodyweight-squats', 'jump-squats', 'pushups', 'diamond-pushups', 'pike-pushups',
      'burpees', 'mountain-climbers', 'high-knees',
      'tricep-dips-chair', 'glute-bridges', 'wall-sits',
      'bicycle-crunches', 'flutter-kicks', 'plank', 'superman-holds',
    ],
    description: 'Full body workout with zero equipment. Perfect for home or travel.',
  },

  // ISOMETRIC - CHEST (30-60 min)
  {
    id: 'iso-chest',
    name: 'Chest Day',
    type: 'Isometric',
    muscleGroup: 'Chest',
    durationMinutes: 60,
    exercises: ['stretching', 'treadmill-run', 'crunches', 'plank', 'smith-bench', 'smith-incline-bench', 'dumbbell-flies', 'cable-flies', 'pushups'],
    description: 'Focused chest workout with smith machine and cables.',
  },
  {
    id: 'iso-back',
    name: 'Back Day',
    type: 'Isometric',
    muscleGroup: 'Back',
    durationMinutes: 60,
    exercises: ['stretching', 'treadmill-run', 'crunches', 'plank', 'smith-rows', 'dumbbell-rows', 'seated-cable-rows', 'dumbbell-pullovers'],
    description: 'Focused back workout with rows and cables.',
  },
  {
    id: 'iso-legs',
    name: 'Leg Day',
    type: 'Isometric',
    muscleGroup: 'Legs',
    durationMinutes: 60,
    exercises: ['stretching', 'treadmill-run', 'crunches', 'smith-squats', 'smith-lunges', 'goblet-squats', 'calf-raises'],
    description: 'Focused leg workout with squats, lunges, and calf work.',
  },
  {
    id: 'iso-shoulders',
    name: 'Shoulder Day',
    type: 'Isometric',
    muscleGroup: 'Shoulders',
    durationMinutes: 60,
    exercises: ['stretching', 'treadmill-run', 'crunches', 'smith-shoulder-press', 'dumbbell-lateral-raises', 'dumbbell-front-raises', 'cable-face-pulls', 'dumbbell-shrugs'],
    description: 'Focused shoulder workout hitting all three heads.',
  },
  {
    id: 'iso-arms',
    name: 'Arms Day',
    type: 'Isometric',
    muscleGroup: 'Arms',
    durationMinutes: 60,
    exercises: ['stretching', 'treadmill-run', 'crunches', 'dumbbell-curls', 'hammer-curls', 'concentration-curls', 'cable-tricep-pushdown', 'cable-tricep-overhead', 'dumbbell-tricep-kickbacks'],
    description: 'Biceps and triceps superset workout.',
  },

  // FULL BODY (~60 min)
  {
    id: 'fullbody-default',
    name: 'Full Body Workout',
    type: 'FullBody',
    muscleGroup: 'Full Body',
    durationMinutes: 60,
    exercises: ['stretching', 'smith-squats', 'smith-bench', 'smith-rows', 'smith-shoulder-press', 'dumbbell-curls', 'cable-tricep-pushdown', 'calf-raises', 'crunches', 'treadmill-run'],
    description: 'Compound movements hitting every muscle group.',
  },

  // CARDIO (~30 min)
  {
    id: 'cardio-focus',
    name: 'Cardio Focus',
    type: 'Cardio',
    muscleGroup: 'Full Body',
    durationMinutes: 30,
    exercises: [
      'stretching', 'treadmill-run', 'elliptical', 'high-knees',
      'mountain-climbers', 'burpees', 'jump-squats',
    ],
    description: 'Heart-pumping cardio mix with intervals and bodyweight explosives.',
  },

  // CORE (~20-25 min)
  {
    id: 'ab-burner',
    name: 'Ab Burner',
    type: 'Core',
    muscleGroup: 'Core',
    durationMinutes: 25,
    exercises: [
      'crunches', 'bicycle-crunches', 'leg-raises', 'flutter-kicks',
      'plank', 'russian-twists', 'hanging-leg-raise', 'mountain-climbers',
    ],
    description: 'Intense core-focused session targeting all ab regions.',
  },
];

// Dev-mode exercise ID validation
if (import.meta.env.DEV) {
  const exerciseIds = new Set(exercises.map(e => e.id));
  workoutTemplates.forEach(t => {
    t.exercises.forEach(id => {
      if (!exerciseIds.has(id)) {
        console.warn(`⚠️ Template "${t.name}" references unknown exercise ID: "${id}"`);
      }
    });
  });
}

export const getTemplateById = (id: string) => workoutTemplates.find(t => t.id === id);
export const getTemplatesByType = (type: string) => workoutTemplates.filter(t => t.type === type);

/** Get all unique workout types from templates */
export const getWorkoutTypes = (): string[] => {
  return [...new Set(workoutTemplates.map(t => t.type))];
};

/** Type display config for UI */
export const workoutTypeConfig: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  Light: { label: 'Light', icon: 'Sun', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  Bodyweight: { label: 'Bodyweight', icon: 'User', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  Isometric: { label: 'Isometric', icon: 'Zap', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
  FullBody: { label: 'Full Body', icon: 'Dumbbell', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
  Cardio: { label: 'Cardio', icon: 'Heart', color: 'text-rose-400', bg: 'bg-rose-400/10 border-rose-400/20' },
  Core: { label: 'Core', icon: 'Flame', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
};
