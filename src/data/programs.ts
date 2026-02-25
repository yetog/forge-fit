
import { Program } from '@/types/workout';

export const programs: Program[] = [
  {
    id: 'forge-protocol',
    name: 'Forge Protocol',
    description: 'A 10-week periodized training program: Hypertrophy → Strength → Power. Progressive overload with structured upper/lower splits built to get results.',
    totalWeeks: 10,
    phases: [
      {
        id: 'phase-1-hypertrophy',
        name: 'Phase 1 - Hypertrophy',
        focus: 'Muscle building with moderate weight, higher reps',
        weeks: 2,
        days: [
          {
            dayNumber: 1,
            label: 'Day 1 - Lower Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'squat-bb', exerciseName: 'Squat', sets: 5, reps: 8, weight: 135, percentOf1RM: 75, weeklyProgression: [{ week: 1, sets: 5, reps: 8, weight: 135, percentOf1RM: 75 }, { week: 2, sets: 5, reps: 6, weight: 145, percentOf1RM: 80 }] },
              { label: 'A2', exerciseId: 'hanging-leg-raise', exerciseName: 'Hanging Leg Raise', sets: 5, reps: 10, rest: '3-5 min' },
              { label: 'B', exerciseId: 'goblet-squats', exerciseName: 'Goblet Squat', sets: 3, reps: 15, rest: '1 min', weight: 50 },
              { label: 'C', exerciseId: 'rfess', exerciseName: 'RFESS', sets: 3, reps: 10, rest: '45 sec', weight: 40 },
              { label: 'D', exerciseId: 'rdl-db', exerciseName: 'RDL (DB)', sets: 3, reps: 10, rest: '45 sec' },
              { label: 'E', exerciseId: 'biceps-generic', exerciseName: 'Biceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 2,
            label: 'Day 2 - Upper Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'bench-press-bb', exerciseName: 'Bench Press', sets: 5, reps: 8, weight: 115, percentOf1RM: 75, weeklyProgression: [{ week: 1, sets: 5, reps: 8, weight: 115, percentOf1RM: 75 }, { week: 2, sets: 5, reps: 6, percentOf1RM: 80 }] },
              { label: 'A2', exerciseId: 'band-pull-apart', exerciseName: 'Band Pull-Apart', sets: 5, reps: 15, rest: '3-5 min' },
              { label: 'B1', exerciseId: 'incline-bench-db', exerciseName: 'Incline Bench (DB Single-Arm)', sets: 3, reps: 15 },
              { label: 'B2', exerciseId: 'pullup', exerciseName: 'Pull-Up', sets: 3, reps: 6, rest: '1 min', weight: 15 },
              { label: 'C', exerciseId: 'cable-flies', exerciseName: 'Cable Fly', sets: 3, reps: 20, rest: '45 sec', weight: 10 },
              { label: 'D', exerciseId: 'triceps-generic', exerciseName: 'Triceps', sets: 3, reps: 10 },
              { label: 'E', exerciseId: 'rower', exerciseName: 'Rower', sets: 4, reps: '200m', rest: '1 min' },
            ],
          },
          {
            dayNumber: 3,
            label: 'Day 3 - Lower Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'deadlift-trap', exerciseName: 'Deadlift (Trap Bar)', sets: 5, reps: 8, weight: 185, percentOf1RM: 75, weeklyProgression: [{ week: 1, sets: 5, reps: 8, weight: 185, percentOf1RM: 75 }, { week: 2, sets: 5, reps: 6, percentOf1RM: 80 }] },
              { label: 'A2', exerciseId: 'pullup', exerciseName: 'Pull-Up', sets: 5, reps: 6, rest: '3-5 min' },
              { label: 'B1', exerciseId: 'rdl-db', exerciseName: 'RDL (DB)', sets: 3, reps: 10, weight: 40 },
              { label: 'B2', exerciseId: 'bent-over-row-db', exerciseName: 'Bent Over Row (DB)', sets: 3, reps: 10, rest: '1 min', weight: 40 },
              { label: 'C1', exerciseId: 'lat-pulldown', exerciseName: 'Lat Pulldown', sets: 3, reps: 10, weight: 110 },
              { label: 'C2', exerciseId: 'lat-pulldown-straight', exerciseName: 'Straight Arm Lat Pulldown', sets: 3, reps: 15, rest: '45 sec', weight: 120 },
            ],
          },
          {
            dayNumber: 4,
            label: 'Day 4 - Upper Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'cgbp', exerciseName: 'Close-Grip Bench Press', sets: 5, reps: 10, weight: 115, percentOf1RM: 60, weeklyProgression: [{ week: 1, sets: 5, reps: 10, weight: 115, percentOf1RM: 60 }, { week: 2, sets: 5, reps: 8, percentOf1RM: 70 }] },
              { label: 'A2', exerciseId: 'facepull', exerciseName: 'Face Pull', sets: 5, reps: 15, rest: '3-5 min', weight: 75 },
              { label: 'B', exerciseId: 'ohp', exerciseName: 'OHP', sets: 3, reps: 10, rest: '1 min', weight: 65 },
              { label: 'C', exerciseId: 'lateral-raise', exerciseName: 'Lateral Raise', sets: 3, reps: 15, rest: '45 sec', weight: 15 },
              { label: 'D1', exerciseId: 'treadmill-sprints', exerciseName: 'Treadmill Sprints', sets: 4, reps: '15 sec' },
              { label: 'D2', exerciseId: 'plank', exerciseName: 'Plank', sets: 4, reps: '30 sec' },
            ],
          },
          {
            dayNumber: 5,
            label: 'Day 5 - Lower Body',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'front-squat', exerciseName: 'Front Squat', sets: 4, reps: 10, rest: '3-5 min', weight: 135, percentOf1RM: 55, weeklyProgression: [{ week: 1, sets: 4, reps: 10, weight: 135, percentOf1RM: 55 }, { week: 2, sets: 4, reps: 8, percentOf1RM: 65 }] },
              { label: 'B', exerciseId: 'sldl', exerciseName: 'SLDL', sets: 4, reps: 10, rest: '3-5 min', weight: 135 },
              { label: 'C', exerciseId: 'walking-lunge-db', exerciseName: 'Walking Lunge (DB)', sets: 3, reps: 10, rest: '1 min', weight: 45 },
              { label: 'D', exerciseId: 'leg-curl', exerciseName: 'Leg Curl', sets: 3, reps: 15, rest: '45 sec', weight: 40 },
              { label: 'E', exerciseId: 'biceps-generic', exerciseName: 'Biceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 6,
            label: 'Day 6 - Upper Body',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'incline-bench-bb', exerciseName: 'Incline Bench Press (BB)', sets: 5, reps: 10, rest: '3-5 min', weight: 115, percentOf1RM: 50, weeklyProgression: [{ week: 1, sets: 5, reps: 10, weight: 115, percentOf1RM: 50 }, { week: 2, sets: 5, reps: 10, percentOf1RM: 60 }] },
              { label: 'B1', exerciseId: 'bench-press-db', exerciseName: 'Bench Press (DB)', sets: 3, reps: 10, weight: 50 },
              { label: 'B2', exerciseId: 'bent-over-row-db', exerciseName: 'Bent Over Row (DB)', sets: 3, reps: 10, rest: '1 min', weight: 40 },
              { label: 'C', exerciseId: 'inverted-row', exerciseName: 'Inverted Row', sets: 3, reps: 10, rest: '45 sec' },
              { label: 'D', exerciseId: 'triceps-generic', exerciseName: 'Triceps', sets: 3, reps: 10 },
            ],
          },
        ],
      },
      {
        id: 'phase-2-strength',
        name: 'Phase 2 - Strength',
        focus: 'Heavy compound lifts, lower reps, progressive overload to 93% 1RM',
        weeks: 5,
        days: [
          {
            dayNumber: 1,
            label: 'Day 1 - Lower Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'squat-bb', exerciseName: 'Squat', sets: 5, reps: 5, percentOf1RM: 85, weeklyProgression: [{ week: 1, sets: 5, reps: 5, percentOf1RM: 85 }, { week: 2, sets: 5, reps: 4, percentOf1RM: 88 }, { week: 3, sets: 6, reps: 3, percentOf1RM: 90 }, { week: 4, sets: 6, reps: 2, percentOf1RM: 93 }, { week: 5, sets: 5, reps: 5, percentOf1RM: 80 }] },
              { label: 'A2', exerciseId: 'pullup', exerciseName: 'Pull-Up', sets: 5, reps: 6, rest: '3-5 min' },
              { label: 'B', exerciseId: 'rfess', exerciseName: 'RFESS', sets: 3, reps: 10, rest: '1 min' },
              { label: 'C', exerciseId: 'rdl-db', exerciseName: 'RDL (DB)', sets: 3, reps: 10, rest: '1 min' },
              { label: 'D', exerciseId: 'standing-calf-raise', exerciseName: 'Standing Calf Raise', sets: 3, reps: 20, rest: '45 sec' },
              { label: 'E', exerciseId: 'biceps-generic', exerciseName: 'Biceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 2,
            label: 'Day 2 - Upper Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'bench-press-bb', exerciseName: 'Bench Press (BB)', sets: 5, reps: 5, percentOf1RM: 85, weeklyProgression: [{ week: 1, sets: 5, reps: 5, percentOf1RM: 85 }, { week: 2, sets: 5, reps: 4, percentOf1RM: 88 }, { week: 3, sets: 6, reps: 3, percentOf1RM: 90 }, { week: 4, sets: 6, reps: 2, percentOf1RM: 93 }, { week: 5, sets: 5, reps: 5, percentOf1RM: 80 }] },
              { label: 'A2', exerciseId: 'band-pull-apart', exerciseName: 'Band Pull-Apart', sets: 5, reps: 15, rest: '3-5 min' },
              { label: 'B1', exerciseId: 'incline-bench-db', exerciseName: 'Incline Bench (DB)', sets: 3, reps: 10 },
              { label: 'B2', exerciseId: 'bent-over-row-db', exerciseName: 'Bent Over Row (DB Single-Arm)', sets: 3, reps: 10, rest: '1 min' },
              { label: 'C', exerciseId: 'pec-fly', exerciseName: 'Pec Fly', sets: 3, reps: 15, rest: '45 sec' },
              { label: 'D', exerciseId: 'triceps-generic', exerciseName: 'Triceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 0,
            label: 'Conditioning',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'sprints-100', exerciseName: 'Sprints (100 yards)', sets: 2, reps: 1, rest: '30 sec', weeklyProgression: [{ week: 1, sets: 2, reps: 1, rest: '30 sec' }, { week: 2, sets: 2, reps: 1, rest: '25 sec' }, { week: 3, sets: 2, reps: 1, rest: '20 sec' }, { week: 4, sets: 2, reps: 1, rest: '15 sec' }] },
              { label: 'B', exerciseId: 'sprints-50', exerciseName: 'Sprints (50 yards)', sets: 2, reps: 1, rest: '20 sec', weeklyProgression: [{ week: 1, sets: 2, reps: 1, rest: '20 sec' }, { week: 2, sets: 4, reps: 1, rest: '15 sec' }, { week: 3, sets: 4, reps: 1, rest: '12 sec' }, { week: 4, sets: 4, reps: 1, rest: '12 sec' }] },
            ],
          },
          {
            dayNumber: 3,
            label: 'Day 3 - Lower Body',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'deadlift-trap', exerciseName: 'Deadlift (Trap Bar)', sets: 5, reps: 5, rest: '3-5 min', percentOf1RM: 85, weeklyProgression: [{ week: 1, sets: 5, reps: 5, percentOf1RM: 85 }, { week: 2, sets: 5, reps: 4, percentOf1RM: 88 }, { week: 3, sets: 6, reps: 3, percentOf1RM: 90 }, { week: 4, sets: 6, reps: 2, percentOf1RM: 93 }, { week: 5, sets: 5, reps: 5, percentOf1RM: 80 }] },
              { label: 'B1', exerciseId: 'rdl-bb', exerciseName: 'RDL (BB)', sets: 3, reps: 8 },
              { label: 'B2', exerciseId: 'bent-over-row-bb', exerciseName: 'Bent Over Row (BB)', sets: 3, reps: 8, rest: '1 min' },
              { label: 'C', exerciseId: 'step-up-weighted', exerciseName: 'Step-Up (Weighted)', sets: 3, reps: 10, rest: '45 sec' },
              { label: 'D', exerciseId: 'lat-pulldown', exerciseName: 'Wide-Grip Lat Pulldown', sets: 3, reps: 10, rest: '45 sec' },
              { label: 'E', exerciseId: 'anterior-tibula-band', exerciseName: 'Anterior Tibula (Band)', sets: 3, reps: 15, rest: '30 sec' },
            ],
          },
          {
            dayNumber: 4,
            label: 'Day 4 - Upper Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'pullup-weighted', exerciseName: 'Pull-Up (Weighted)', sets: 5, reps: 5 },
              { label: 'A2', exerciseId: 'incline-bench-bb', exerciseName: 'Incline Bench Press', sets: 5, reps: 5, rest: '3-5 min', percentOf1RM: 75, weeklyProgression: [{ week: 1, sets: 5, reps: 5, percentOf1RM: 75 }, { week: 2, sets: 5, reps: 5, percentOf1RM: 78 }, { week: 3, sets: 5, reps: 5, percentOf1RM: 80 }, { week: 4, sets: 5, reps: 5, percentOf1RM: 82 }, { week: 5, sets: 5, reps: 5, percentOf1RM: 60 }] },
              { label: 'B', exerciseId: 'bench-press-db', exerciseName: 'Bench Press (DB)', sets: 3, reps: 10, rest: '1 min' },
              { label: 'C1', exerciseId: 'lateral-raise', exerciseName: 'Lateral Raise', sets: 3, reps: 15 },
              { label: 'C2', exerciseId: 'facepull', exerciseName: 'Face Pull', sets: 3, reps: 15, rest: '45 sec' },
            ],
          },
        ],
      },
      {
        id: 'phase-3-power',
        name: 'Phase 3 - Power',
        focus: 'Max effort and dynamic effort work, peaking at 98% 1RM',
        weeks: 3,
        days: [
          {
            dayNumber: 1,
            label: 'Day 1 - Max Effort Lower Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'squat-bb', exerciseName: 'Squat', sets: 5, reps: 4, percentOf1RM: 93, weeklyProgression: [{ week: 1, sets: 5, reps: 4, percentOf1RM: 93 }, { week: 2, sets: 5, reps: 3, percentOf1RM: 95 }, { week: 3, sets: 5, reps: 2, percentOf1RM: 98 }] },
              { label: 'A2', exerciseId: 'woodchop-band', exerciseName: 'Woodchop (Band)', sets: 5, reps: 15, rest: '3-5 min' },
              { label: 'B', exerciseId: 'deadlift-trap', exerciseName: 'Deadlift (Trap Bar)', sets: 3, reps: 8, rest: '1 min', percentOf1RM: 80, weeklyProgression: [{ week: 1, sets: 3, reps: 8, percentOf1RM: 80 }, { week: 2, sets: 3, reps: 8, percentOf1RM: 82 }, { week: 3, sets: 3, reps: 8, percentOf1RM: 85 }] },
              { label: 'C', exerciseId: 'depth-drop', exerciseName: 'Depth Drop', sets: 3, reps: 6, rest: '30 sec' },
              { label: 'D', exerciseId: 'biceps-generic', exerciseName: 'Biceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 2,
            label: 'Day 2 - Max Effort Upper Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'bench-press-bb', exerciseName: 'Bench Press', sets: 5, reps: 4, percentOf1RM: 93, weeklyProgression: [{ week: 1, sets: 5, reps: 4, percentOf1RM: 93 }, { week: 2, sets: 5, reps: 3, percentOf1RM: 95 }, { week: 3, sets: 5, reps: 2, percentOf1RM: 98 }] },
              { label: 'A2', exerciseId: 'pullup', exerciseName: 'Pull-Up', sets: 5, reps: 6, rest: '3-5 min' },
              { label: 'B', exerciseId: 'bench-press-db-single', exerciseName: 'Bench Press (DB Single-Arm)', sets: 3, reps: 10, rest: '1 min' },
              { label: 'C', exerciseId: 'lat-pulldown', exerciseName: 'Lat Pulldown', sets: 3, reps: 10, rest: '30 sec' },
              { label: 'D', exerciseId: 'triceps-generic', exerciseName: 'Triceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 0,
            label: 'Conditioning',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'sprints-100', exerciseName: 'Sprints (100 yards)', sets: 4, reps: 1, rest: '20 sec', weeklyProgression: [{ week: 1, sets: 4, reps: 1, rest: '20 sec' }, { week: 2, sets: 4, reps: 1, rest: '20 sec' }, { week: 3, sets: 3, reps: 1, rest: '15 sec' }] },
              { label: 'B', exerciseId: 'sprints-50', exerciseName: 'Sprints (50 yards)', sets: 2, reps: 1, rest: '15 sec', weeklyProgression: [{ week: 1, sets: 2, reps: 1, rest: '15 sec' }, { week: 2, sets: 3, reps: 1, rest: '15 sec' }, { week: 3, sets: 4, reps: 1, rest: '12 sec' }] },
            ],
          },
          {
            dayNumber: 3,
            label: 'Day 3 - Dynamic Effort Lower Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'squat-chains', exerciseName: 'Squat (w/ Chains)', sets: 5, reps: 3, percentOf1RM: 75, weeklyProgression: [{ week: 1, sets: 5, reps: 3, percentOf1RM: 75 }, { week: 2, sets: 5, reps: 3, percentOf1RM: 80 }, { week: 3, sets: 5, reps: 3, percentOf1RM: 85 }] },
              { label: 'A2', exerciseId: 'hanging-leg-raise', exerciseName: 'Hanging Leg Raise', sets: 5, reps: 6, rest: '2 min' },
              { label: 'B', exerciseId: 'rfess', exerciseName: 'RFESS', sets: 3, reps: 8, rest: '1 min' },
              { label: 'C', exerciseId: 'step-up-weighted', exerciseName: 'Step-Up (Weighted)', sets: 3, reps: 10, rest: '30 sec' },
              { label: 'D', exerciseId: 'biceps-generic', exerciseName: 'Biceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 4,
            label: 'Day 4 - Dynamic Effort Upper Body',
            exerciseBlocks: [
              { label: 'A1', exerciseId: 'bench-press-chains', exerciseName: 'Bench Press (w/ Chains)', sets: 5, reps: 3 },
              { label: 'A2', exerciseId: 'inverted-row', exerciseName: 'Inverted Row', sets: 3, reps: 10, rest: '2 min' },
              { label: 'B1', exerciseId: 'incline-bench-db-single', exerciseName: 'Incline Bench (DB Single-Arm)', sets: 3, reps: 8, rest: '1 min' },
              { label: 'B2', exerciseId: 'lat-pulldown-vgrip', exerciseName: 'Lat Pulldown (V-Grip)', sets: 3, reps: 8, rest: '45 sec' },
              { label: 'C', exerciseId: 'triceps-generic', exerciseName: 'Triceps', sets: 3, reps: 10 },
            ],
          },
          {
            dayNumber: 5,
            label: 'Agility Day 1',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'five-cone-drill', exerciseName: 'Five Cone Drill', sets: 4, reps: 2, weeklyProgression: [{ week: 1, sets: 4, reps: 2 }, { week: 2, sets: 4, reps: 2 }, { week: 3, sets: 4, reps: 2 }] },
              { label: 'B', exerciseId: 'l-drill', exerciseName: 'L Drill', sets: 4, reps: 1, weeklyProgression: [{ week: 1, sets: 4, reps: 1 }, { week: 2, sets: 4, reps: 1 }, { week: 3, sets: 6, reps: 1 }] },
            ],
          },
          {
            dayNumber: 6,
            label: 'Agility Day 2',
            exerciseBlocks: [
              { label: 'A', exerciseId: 'ladder', exerciseName: 'Ladder', sets: 6, reps: 2, weeklyProgression: [{ week: 1, sets: 6, reps: 2 }, { week: 2, sets: 6, reps: 2 }, { week: 3, sets: 8, reps: 2 }] },
              { label: 'B', exerciseId: 'pro-agility', exerciseName: 'Pro Agility', sets: 6, reps: 1, weeklyProgression: [{ week: 1, sets: 6, reps: 1 }, { week: 2, sets: 6, reps: 1 }, { week: 3, sets: 8, reps: 1 }] },
            ],
          },
        ],
      },
    ],
  },
];

export const getProgramById = (id: string) => programs.find(p => p.id === id);
