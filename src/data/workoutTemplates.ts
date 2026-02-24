
import { WorkoutTemplate } from '@/types/workout';

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
];

export const getTemplateById = (id: string) => workoutTemplates.find(t => t.id === id);
export const getTemplatesByType = (type: string) => workoutTemplates.filter(t => t.type === type);
