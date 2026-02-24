
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
  { id: 'bicycle-crunches', name: 'Bicycle Crunches', muscleGroup: 'Core', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 20, description: 'Alternating elbow-to-knee crunches' },
  { id: 'flutter-kicks', name: 'Flutter Kicks', muscleGroup: 'Core', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 20, description: 'Rapid alternating leg kicks while lying down' },
  { id: 'hanging-leg-raise', name: 'Hanging Leg Raise', muscleGroup: 'Core', equipmentNeeded: ['pull-up-bar'], defaultSets: 5, defaultReps: 10, description: 'Hanging from bar, raise legs to parallel' },
  { id: 'woodchop-band', name: 'Woodchop (Band)', muscleGroup: 'Core', equipmentNeeded: ['bands'], defaultSets: 5, defaultReps: 15, description: 'Rotational core movement with resistance band' },

  // CHEST
  { id: 'smith-bench', name: 'Smith Machine Bench Press', muscleGroup: 'Chest', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 95, description: 'Flat bench press on smith machine' },
  { id: 'smith-incline-bench', name: 'Smith Incline Press', muscleGroup: 'Chest', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 85, description: 'Incline bench press on smith machine' },
  { id: 'dumbbell-flies', name: 'Dumbbell Flies', muscleGroup: 'Chest', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 25, description: 'Flat or incline dumbbell flies' },
  { id: 'cable-flies', name: 'Cable Flies', muscleGroup: 'Chest', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Standing cable crossover flies' },
  { id: 'diamond-pushups', name: 'Diamond Push-Ups', muscleGroup: 'Chest', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 15, description: 'Close-grip push-ups for chest and triceps' },
  { id: 'bench-press-bb', name: 'Bench Press (Barbell)', muscleGroup: 'Chest', equipmentNeeded: ['barbell', 'bench'], defaultSets: 5, defaultReps: 8, defaultWeight: 115, description: 'Flat barbell bench press' },
  { id: 'incline-bench-bb', name: 'Incline Bench Press (BB)', muscleGroup: 'Chest', equipmentNeeded: ['barbell', 'bench'], defaultSets: 5, defaultReps: 10, defaultWeight: 115, description: 'Incline barbell bench press' },
  { id: 'incline-bench-db', name: 'Incline Bench Press (DB)', muscleGroup: 'Chest', equipmentNeeded: ['dumbbells', 'bench'], defaultSets: 3, defaultReps: 10, defaultWeight: 50, description: 'Incline dumbbell bench press' },
  { id: 'bench-press-db', name: 'Bench Press (DB)', muscleGroup: 'Chest', equipmentNeeded: ['dumbbells', 'bench'], defaultSets: 3, defaultReps: 10, defaultWeight: 50, description: 'Flat dumbbell bench press' },
  { id: 'bench-press-db-single', name: 'Bench Press (DB Single-Arm)', muscleGroup: 'Chest', equipmentNeeded: ['dumbbells', 'bench'], defaultSets: 3, defaultReps: 10, description: 'Single-arm dumbbell bench press' },
  { id: 'cgbp', name: 'Close-Grip Bench Press', muscleGroup: 'Chest', equipmentNeeded: ['barbell', 'bench'], defaultSets: 5, defaultReps: 10, defaultWeight: 115, description: 'Close-grip barbell bench for chest and triceps' },
  { id: 'pec-fly', name: 'Pec Fly (Machine)', muscleGroup: 'Chest', equipmentNeeded: ['machine'], defaultSets: 3, defaultReps: 15, description: 'Machine pec fly for chest isolation' },
  { id: 'pike-pushups', name: 'Pike Push-Ups', muscleGroup: 'Shoulders', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 12, description: 'Inverted push-up targeting shoulders' },

  // BACK
  { id: 'smith-rows', name: 'Smith Machine Rows', muscleGroup: 'Back', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 95, description: 'Bent over rows on smith machine' },
  { id: 'dumbbell-rows', name: 'Dumbbell Rows', muscleGroup: 'Back', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 35, description: 'Single arm dumbbell rows' },
  { id: 'seated-cable-rows', name: 'Seated Cable Rows', muscleGroup: 'Back', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Seated cable row for mid-back' },
  { id: 'dumbbell-pullovers', name: 'Dumbbell Pullovers', muscleGroup: 'Back', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 30, description: 'Lat engagement with dumbbell' },
  { id: 'pullup', name: 'Pull-Up', muscleGroup: 'Back', equipmentNeeded: ['pull-up-bar'], defaultSets: 3, defaultReps: 6, defaultWeight: 15, description: 'Bodyweight or weighted pull-ups' },
  { id: 'inverted-row', name: 'Inverted Row', muscleGroup: 'Back', equipmentNeeded: ['barbell'], defaultSets: 3, defaultReps: 10, description: 'Body rows under a low bar' },
  { id: 'lat-pulldown', name: 'Lat Pulldown', muscleGroup: 'Back', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 10, defaultWeight: 110, description: 'Wide-grip lat pulldown' },
  { id: 'lat-pulldown-straight', name: 'Straight Arm Lat Pulldown', muscleGroup: 'Back', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 15, defaultWeight: 120, description: 'Straight-arm lat pulldown for isolation' },
  { id: 'lat-pulldown-vgrip', name: 'Lat Pulldown (V-Grip)', muscleGroup: 'Back', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 8, description: 'V-grip lat pulldown for inner back' },
  { id: 'bent-over-row-db', name: 'Bent Over Row (DB)', muscleGroup: 'Back', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, defaultWeight: 40, description: 'Bent over dumbbell row' },
  { id: 'bent-over-row-bb', name: 'Bent Over Row (BB)', muscleGroup: 'Back', equipmentNeeded: ['barbell'], defaultSets: 3, defaultReps: 8, description: 'Bent over barbell row' },
  { id: 'superman-holds', name: 'Superman Holds', muscleGroup: 'Back', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 1, description: 'Prone back extension hold for 30 sec', durationMinutes: 1 },
  { id: 'band-pull-apart', name: 'Band Pull-Apart', muscleGroup: 'Back', equipmentNeeded: ['bands'], defaultSets: 5, defaultReps: 15, description: 'Rear delt and upper back activation with band' },

  // LEGS
  { id: 'smith-squats', name: 'Smith Machine Squats', muscleGroup: 'Legs', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 135, description: 'Back squats on smith machine' },
  { id: 'smith-lunges', name: 'Smith Machine Lunges', muscleGroup: 'Legs', equipmentNeeded: ['smith-machine'], defaultSets: 3, defaultReps: 12, defaultWeight: 65, description: 'Stationary lunges on smith machine' },
  { id: 'dumbbell-lunges', name: 'Dumbbell Lunges', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 30, description: 'Walking or stationary lunges' },
  { id: 'goblet-squats', name: 'Goblet Squats', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 15, defaultWeight: 40, description: 'Dumbbell goblet squats' },
  { id: 'calf-raises', name: 'Smith Calf Raises', muscleGroup: 'Legs', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 15, defaultWeight: 135, description: 'Standing calf raises on smith machine' },
  { id: 'bodyweight-squats', name: 'Bodyweight Squats', muscleGroup: 'Legs', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 20, description: 'Air squats with no equipment' },
  { id: 'jump-squats', name: 'Jump Squats', muscleGroup: 'Legs', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 15, description: 'Explosive squat jumps' },
  { id: 'wall-sits', name: 'Wall Sits', muscleGroup: 'Legs', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 1, description: 'Hold wall sit for 45-60 seconds', durationMinutes: 1 },
  { id: 'glute-bridges', name: 'Glute Bridges', muscleGroup: 'Legs', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 15, description: 'Hip bridges for glutes and hamstrings' },
  { id: 'squat-bb', name: 'Squat (Barbell)', muscleGroup: 'Legs', equipmentNeeded: ['barbell', 'squat-rack'], defaultSets: 5, defaultReps: 8, defaultWeight: 135, description: 'Barbell back squat' },
  { id: 'front-squat', name: 'Front Squat', muscleGroup: 'Legs', equipmentNeeded: ['barbell', 'squat-rack'], defaultSets: 4, defaultReps: 10, defaultWeight: 135, description: 'Barbell front squat' },
  { id: 'deadlift-trap', name: 'Deadlift (Trap Bar)', muscleGroup: 'Legs', equipmentNeeded: ['trap-bar'], defaultSets: 5, defaultReps: 8, defaultWeight: 185, description: 'Trap bar deadlift' },
  { id: 'rfess', name: 'RFESS (Rear Foot Elevated Split Squat)', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells', 'bench'], defaultSets: 3, defaultReps: 10, defaultWeight: 40, description: 'Bulgarian split squat' },
  { id: 'rdl-db', name: 'RDL (Dumbbell)', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, description: 'Romanian deadlift with dumbbells' },
  { id: 'rdl-bb', name: 'RDL (Barbell)', muscleGroup: 'Legs', equipmentNeeded: ['barbell'], defaultSets: 3, defaultReps: 8, description: 'Romanian deadlift with barbell' },
  { id: 'sldl', name: 'SLDL (Stiff Leg Deadlift)', muscleGroup: 'Legs', equipmentNeeded: ['barbell'], defaultSets: 4, defaultReps: 10, defaultWeight: 135, description: 'Stiff leg deadlift' },
  { id: 'walking-lunge-db', name: 'Walking Lunge (DB)', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, defaultWeight: 45, description: 'Walking lunges with dumbbells' },
  { id: 'leg-curl', name: 'Leg Curl', muscleGroup: 'Legs', equipmentNeeded: ['machine'], defaultSets: 3, defaultReps: 15, defaultWeight: 40, description: 'Seated or lying leg curl machine' },
  { id: 'step-up-weighted', name: 'Step-Up (Weighted)', muscleGroup: 'Legs', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, description: 'Weighted step-ups onto bench' },
  { id: 'standing-calf-raise', name: 'Standing Calf Raise', muscleGroup: 'Legs', equipmentNeeded: ['machine'], defaultSets: 3, defaultReps: 20, description: 'Machine standing calf raises' },
  { id: 'depth-drop', name: 'Depth Drop', muscleGroup: 'Legs', equipmentNeeded: ['box'], defaultSets: 3, defaultReps: 6, description: 'Plyometric depth drop from box' },
  { id: 'squat-chains', name: 'Squat (w/ Chains)', muscleGroup: 'Legs', equipmentNeeded: ['barbell', 'chains'], defaultSets: 5, defaultReps: 3, description: 'Barbell squat with accommodating resistance' },

  // SHOULDERS
  { id: 'smith-shoulder-press', name: 'Smith Shoulder Press', muscleGroup: 'Shoulders', equipmentNeeded: ['smith-machine'], defaultSets: 4, defaultReps: 10, defaultWeight: 65, description: 'Seated overhead press on smith machine' },
  { id: 'dumbbell-lateral-raises', name: 'Lateral Raises', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 20, description: 'Dumbbell lateral raises' },
  { id: 'dumbbell-front-raises', name: 'Front Raises', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 20, description: 'Dumbbell front raises' },
  { id: 'cable-face-pulls', name: 'Cable Face Pulls', muscleGroup: 'Shoulders', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 15, description: 'Rear delt face pulls on cable' },
  { id: 'dumbbell-shrugs', name: 'Dumbbell Shrugs', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 15, defaultWeight: 40, description: 'Trap shrugs with dumbbells' },
  { id: 'ohp', name: 'Overhead Press (BB)', muscleGroup: 'Shoulders', equipmentNeeded: ['barbell'], defaultSets: 3, defaultReps: 10, defaultWeight: 65, description: 'Standing barbell overhead press' },
  { id: 'lateral-raise', name: 'Lateral Raise', muscleGroup: 'Shoulders', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 15, defaultWeight: 15, description: 'Dumbbell lateral raise for medial delts' },
  { id: 'facepull', name: 'Face Pull', muscleGroup: 'Shoulders', equipmentNeeded: ['cable-pulley'], defaultSets: 5, defaultReps: 15, defaultWeight: 75, description: 'Cable face pull for rear delts' },

  // ARMS
  { id: 'dumbbell-curls', name: 'Dumbbell Curls', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 25, description: 'Standard bicep curls' },
  { id: 'hammer-curls', name: 'Hammer Curls', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 25, description: 'Hammer grip dumbbell curls' },
  { id: 'cable-tricep-pushdown', name: 'Cable Tricep Pushdowns', muscleGroup: 'Arms', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Tricep pushdowns on cable' },
  { id: 'cable-tricep-overhead', name: 'Overhead Cable Extension', muscleGroup: 'Arms', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 12, description: 'Overhead tricep extension on cable' },
  { id: 'dumbbell-tricep-kickbacks', name: 'Tricep Kickbacks', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 12, defaultWeight: 20, description: 'Dumbbell tricep kickbacks' },
  { id: 'concentration-curls', name: 'Concentration Curls', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, defaultWeight: 25, description: 'Seated concentration curls' },
  { id: 'tricep-dips-chair', name: 'Tricep Dips (Chair)', muscleGroup: 'Arms', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 15, description: 'Tricep dips using a chair or bench edge' },
  { id: 'biceps-generic', name: 'Biceps (Choice)', muscleGroup: 'Arms', equipmentNeeded: ['dumbbells'], defaultSets: 3, defaultReps: 10, description: 'Your choice of bicep exercise' },
  { id: 'triceps-generic', name: 'Triceps (Choice)', muscleGroup: 'Arms', equipmentNeeded: ['cable-pulley'], defaultSets: 3, defaultReps: 10, description: 'Your choice of tricep exercise' },

  // BODYWEIGHT / CARDIO
  { id: 'burpees', name: 'Burpees', muscleGroup: 'Full Body', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 10, description: 'Full body explosive burpees' },
  { id: 'mountain-climbers', name: 'Mountain Climbers', muscleGroup: 'Full Body', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 20, description: 'High-tempo mountain climbers' },
  { id: 'high-knees', name: 'High Knees', muscleGroup: 'Full Body', equipmentNeeded: ['bodyweight'], defaultSets: 3, defaultReps: 30, description: 'Running in place with high knees' },

  // CONDITIONING / AGILITY (from Ivy program)
  { id: 'sprints-100', name: 'Sprints (100 yards)', muscleGroup: 'Full Body', equipmentNeeded: ['bodyweight'], defaultSets: 2, defaultReps: 1, description: '100-yard sprint', isCardio: true },
  { id: 'sprints-50', name: 'Sprints (50 yards)', muscleGroup: 'Full Body', equipmentNeeded: ['bodyweight'], defaultSets: 2, defaultReps: 1, description: '50-yard sprint', isCardio: true },
  { id: 'treadmill-sprints', name: 'Treadmill Sprints', muscleGroup: 'Full Body', equipmentNeeded: ['treadmill'], defaultSets: 4, defaultReps: 1, description: 'Sprint intervals on treadmill', isCardio: true },
  { id: 'rower', name: 'Rower', muscleGroup: 'Full Body', equipmentNeeded: ['rower'], defaultSets: 4, defaultReps: 1, description: '200m rowing intervals', isCardio: true },
  { id: 'five-cone-drill', name: 'Five Cone Drill', muscleGroup: 'Full Body', equipmentNeeded: ['cones'], defaultSets: 4, defaultReps: 2, description: 'Agility five-cone drill' },
  { id: 'l-drill', name: 'L Drill', muscleGroup: 'Full Body', equipmentNeeded: ['cones'], defaultSets: 4, defaultReps: 1, description: 'L-shaped agility drill' },
  { id: 'ladder', name: 'Ladder Drill', muscleGroup: 'Full Body', equipmentNeeded: ['ladder'], defaultSets: 6, defaultReps: 2, description: 'Speed ladder footwork drill' },
  { id: 'pro-agility', name: 'Pro Agility (5-10-5)', muscleGroup: 'Full Body', equipmentNeeded: ['cones'], defaultSets: 6, defaultReps: 1, description: '5-10-5 pro agility shuttle' },
  { id: 'anterior-tibula-band', name: 'Anterior Tibula (Band)', muscleGroup: 'Legs', equipmentNeeded: ['bands'], defaultSets: 3, defaultReps: 15, description: 'Tibialis raise with resistance band' },

  // Bench-press with chains (Power phase)
  { id: 'bench-press-chains', name: 'Bench Press (w/ Chains)', muscleGroup: 'Chest', equipmentNeeded: ['barbell', 'chains'], defaultSets: 5, defaultReps: 3, description: 'Bench press with accommodating chain resistance' },
  { id: 'pullup-weighted', name: 'Pull-Up (Weighted)', muscleGroup: 'Back', equipmentNeeded: ['pull-up-bar', 'weight-belt'], defaultSets: 5, defaultReps: 5, description: 'Weighted pull-ups' },
  { id: 'incline-bench-db-single', name: 'Incline Bench (DB Single-Arm)', muscleGroup: 'Chest', equipmentNeeded: ['dumbbells', 'bench'], defaultSets: 3, defaultReps: 8, description: 'Single-arm incline dumbbell press' },
];

export const getExerciseById = (id: string): Exercise | undefined => exercises.find(e => e.id === id);

export const getExercisesByMuscleGroup = (group: string): Exercise[] => exercises.filter(e => e.muscleGroup === group);
