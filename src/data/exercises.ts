
import { Exercise } from '@/types/workout';

export const exercises: Exercise[] = [
  // CARDIO & WARMUP
  { id: 'stretching', name: 'Stretching', muscleGroup: 'Full Body', equipmentNeeded: ['bodyweight'], defaultSets: 1, defaultReps: 1, description: 'Full body dynamic stretching routine', durationMinutes: 10 },
  { id: 'treadmill-run', name: 'Treadmill Run', muscleGroup: 'Full Body', equipmentNeeded: ['treadmill'], defaultSets: 1, defaultReps: 1, description: 'Steady state or interval running', isCardio: true, durationMinutes: 15 },
  { id: 'elliptical', name: 'Elliptical', muscleGroup: 'Full Body', equipmentNeeded: ['elliptical'], defaultSets: 1, defaultReps: 1, description: 'Low-impact cardio session', isCardio: true, durationMinutes: 15 },

  // CORE
  { id: 'crunches', name: 'Crunches', muscleGroup: 'Core', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 20, description: 'Standard crunches for upper abs' },
  { id: 'leg-raises', name: 'Leg Raises', muscleGroup: 'Core', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 15, description: 'Lying leg raises for lower abs' },
  { id: 'plank', name: 'Plank', muscleGroup: 'Core', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 1, description: 'Hold for 30-60 seconds', durationMinutes: 1 },
  { id: 'russian-twists', name: 'Russian Twists', muscleGroup: 'Core', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 20, defaultWeight: 20, description: 'Weighted oblique twists' },
  { id: 'pushups', name: 'Push-Ups', muscleGroup: 'Chest', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 20, description: 'Standard push-ups' },

  // CHEST
  { id: 'smith-bench', name: 'Smith Machine Bench Press', muscleGroup: 'Chest', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 95, description: 'Flat bench press on smith machine' },
  { id: 'smith-incline-bench', name: 'Smith Incline Press', muscleGroup: 'Chest', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 85, description: 'Incline bench press on smith machine' },
  { id: 'dumbbell-flies', name: 'Dumbbell Flies', muscleGroup: 'Chest', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 25, description: 'Flat or incline dumbbell flies' },
  { id: 'cable-flies', name: 'Cable Flies', muscleGroup: 'Chest', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Standing cable crossover flies' },

  // BACK
  { id: 'smith-rows', name: 'Smith Machine Rows', muscleGroup: 'Back', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 95, description: 'Bent over rows on smith machine' },
  { id: 'dumbbell-rows', name: 'Dumbbell Rows', muscleGroup: 'Back', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 35, description: 'Single arm dumbbell rows' },
  { id: 'seated-cable-rows', name: 'Seated Cable Rows', muscleGroup: 'Back', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Seated cable row for mid-back' },
  { id: 'dumbbell-pullovers', name: 'Dumbbell Pullovers', muscleGroup: 'Back', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 30, description: 'Lat engagement with dumbbell' },

  // LEGS
  { id: 'smith-squats', name: 'Smith Machine Squats', muscleGroup: 'Legs', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 135, description: 'Back squats on smith machine' },
  { id: 'smith-lunges', name: 'Smith Machine Lunges', muscleGroup: 'Legs', equipmentNeeded: ['smith-machine'], defaultSets: 3, defaultReps: 12, defaultWeight: 65, description: 'Stationary lunges on smith machine' },
  { id: 'dumbbell-lunges', name: 'Dumbbell Lunges', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 30, description: 'Walking or stationary lunges' },
  { id: 'goblet-squats', name: 'Goblet Squats', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 15, defaultWeight: 40, description: 'Dumbbell goblet squats' },
  { id: 'calf-raises', name: 'Smith Calf Raises', muscleGroup: 'Legs', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 15, defaultWeight: 135, description: 'Standing calf raises on smith machine' },

  // SHOULDERS
  { id: 'smith-shoulder-press', name: 'Smith Shoulder Press', muscleGroup: 'Shoulders', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 65, description: 'Seated overhead press on smith machine' },
  { id: 'dumbbell-lateral-raises', name: 'Lateral Raises', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 20, description: 'Dumbbell lateral raises' },
  { id: 'dumbbell-front-raises', name: 'Front Raises', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 20, description: 'Dumbbell front raises' },
  { id: 'cable-face-pulls', name: 'Cable Face Pulls', muscleGroup: 'Shoulders', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 15, description: 'Rear delt face pulls on cable' },
  { id: 'dumbbell-shrugs', name: 'Dumbbell Shrugs', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 15, defaultWeight: 40, description: 'Trap shrugs with dumbbells' },

  // ARMS
  { id: 'dumbbell-curls', name: 'Dumbbell Curls', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 25, description: 'Standard bicep curls' },
  { id: 'hammer-curls', name: 'Hammer Curls', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 25, description: 'Hammer grip dumbbell curls' },
  { id: 'cable-tricep-pushdown', name: 'Cable Tricep Pushdowns', muscleGroup: 'Arms', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Tricep pushdowns on cable' },
  { id: 'cable-tricep-overhead', name: 'Overhead Cable Extension', muscleGroup: 'Arms', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Overhead tricep extension on cable' },
  { id: 'dumbbell-tricep-kickbacks', name: 'Tricep Kickbacks', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 20, description: 'Dumbbell tricep kickbacks' },
  { id: 'concentration-curls', name: 'Concentration Curls', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, defaultWeight: 25, description: 'Seated concentration curls' },
];

export const getExerciseById = (id: string): Exercise | undefined => exercises.find(e => e.id === id);

export const getExercisesByMuscleGroup = (group: string): Exercise[] => exercises.filter(e => e.muscleGroup === group);
