
import { TrainingPathPhase } from '@/types/golf';

export const trainingPhases: TrainingPathPhase[] = [
  {
    id: 'contact',
    name: 'Contact & Direction',
    color: 'green',
    goal: 'Hit straight with clean contact',
    description:
      'Master the fundamentals: clean strikes, stable posture, consistent contact. This phase builds the foundation for everything else.',
    clubs: ['pw', 'aw', '9i', '8i', '7i'],
    skills: [
      'Half swings',
      'Brush the grass',
      'Stable posture',
      'Hold finish',
      'Square contact',
    ],
    unlocked: true,
    completed: false,
    progress: 0,
  },
  {
    id: 'distance',
    name: 'Distance Control',
    color: 'yellow',
    goal: 'Understand half vs full distances',
    description:
      'Learn your distances, develop feel for power control, and add longer clubs to your arsenal.',
    clubs: ['7i', '6i', '5i', '4h', '5h', '3w', 'dr'],
    skills: [
      'Full swings',
      'Distance awareness',
      'Club selection',
      'Tempo control',
      'Smooth power',
    ],
    unlocked: false,
    completed: false,
    progress: 0,
  },
  {
    id: 'shaping',
    name: 'Shot Shaping',
    color: 'red',
    goal: 'Control ball flight and shape',
    description:
      'Advanced techniques: intentional draws, fades, and trajectory control for course management.',
    clubs: ['all'],
    skills: ['Draw', 'Fade', 'High shots', 'Low shots', 'Working the ball'],
    unlocked: false,
    completed: false,
    progress: 0,
  },
];

export const getPhaseById = (id: string): TrainingPathPhase | undefined =>
  trainingPhases.find((p) => p.id === id);

export const getNextPhase = (currentId: string): TrainingPathPhase | undefined => {
  const currentIndex = trainingPhases.findIndex((p) => p.id === currentId);
  return trainingPhases[currentIndex + 1];
};

export const getPhaseColor = (phase: TrainingPathPhase): string => {
  // Using primary gold for all phases to match ForgeFit branding
  // The color field is kept for potential future theming
  return 'primary';
};
