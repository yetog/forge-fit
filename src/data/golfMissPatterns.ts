
import { MissPattern, MissType } from '@/types/golf';

export const missPatterns: MissPattern[] = [
  {
    miss: 'slice',
    likelyCause: 'Open club face at impact',
    correctionCue: 'Close the face, stronger grip',
  },
  {
    miss: 'hook',
    likelyCause: 'Closed club face, inside-out path',
    correctionCue: 'Weaken grip, square at impact',
  },
  {
    miss: 'thin',
    likelyCause: 'Standing up through impact',
    correctionCue: 'Stay level, maintain spine angle',
  },
  {
    miss: 'chunk',
    likelyCause: 'Weight on back foot, hitting ground first',
    correctionCue: 'Ball first, then brush the grass',
  },
  {
    miss: 'push',
    likelyCause: 'Inside-out swing path',
    correctionCue: 'Swing down the target line',
  },
  {
    miss: 'pull',
    likelyCause: 'Outside-in swing path',
    correctionCue: 'Start the club inside',
  },
  {
    miss: 'top',
    likelyCause: 'Lifting up, eye off ball',
    correctionCue: 'Keep head still, watch the ball',
  },
  {
    miss: 'shank',
    likelyCause: 'Standing too close, hosel contact',
    correctionCue: 'Step back, hit the center of the face',
  },
];

export const getMissCorrection = (miss: MissType): MissPattern | undefined =>
  missPatterns.find((m) => m.miss === miss);

export const getAllMissTypes = (): MissType[] =>
  missPatterns.map((m) => m.miss);
