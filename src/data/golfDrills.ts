
import { GolfDrill, TrainingPhase } from '@/types/golf';

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
  {
    id: 'contact-check',
    name: 'Contact Quality Check',
    phase: 'contact',
    club: '9i',
    reps: 10,
    focus: 'Strike',
    cue: 'Feel the center',
    description: 'Focus on hitting the sweet spot. Notice the feel.',
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
  {
    id: 'hybrid-intro',
    name: 'Hybrid Introduction',
    phase: 'distance',
    club: '5h',
    reps: 10,
    focus: 'Long clubs',
    cue: 'Sweep it off the grass',
    description: 'Get comfortable with hybrid clubs. Smooth swings.',
  },

  // Phase 3: Shaping (future)
  {
    id: 'draw-practice',
    name: 'Draw Practice',
    phase: 'shaping',
    club: '7i',
    reps: 10,
    focus: 'Shot shape',
    cue: 'Inside-out path',
    description: 'Intentional right-to-left ball flight (for right-handers).',
  },
  {
    id: 'fade-practice',
    name: 'Fade Practice',
    phase: 'shaping',
    club: '7i',
    reps: 10,
    focus: 'Shot shape',
    cue: 'Hold the face open',
    description: 'Intentional left-to-right ball flight (for right-handers).',
  },
];

export const getDrillsByPhase = (phase: TrainingPhase): GolfDrill[] =>
  golfDrills.filter((d) => d.phase === phase);

export const getDrillById = (id: string): GolfDrill | undefined =>
  golfDrills.find((d) => d.id === id);

export const getContactDrills = (): GolfDrill[] => getDrillsByPhase('contact');
export const getDistanceDrills = (): GolfDrill[] => getDrillsByPhase('distance');
export const getShapingDrills = (): GolfDrill[] => getDrillsByPhase('shaping');
