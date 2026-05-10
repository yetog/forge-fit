
import { GolfClub } from '@/types/golf';

export const defaultClubs: GolfClub[] = [
  // Wedges
  {
    id: 'lw',
    name: 'Lob Wedge',
    type: 'wedge',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: 'sw',
    name: 'Sand Wedge',
    type: 'wedge',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: 'aw',
    name: 'Approach Wedge',
    type: 'wedge',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: 'pw',
    name: 'Pitching Wedge',
    type: 'wedge',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },

  // Irons
  {
    id: '9i',
    name: '9 Iron',
    type: 'iron',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: '8i',
    name: '8 Iron',
    type: 'iron',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: '7i',
    name: '7 Iron',
    type: 'iron',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: '6i',
    name: '6 Iron',
    type: 'iron',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: '5i',
    name: '5 Iron',
    type: 'iron',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },

  // Hybrids
  {
    id: '5h',
    name: '5 Hybrid',
    type: 'hybrid',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: '4h',
    name: '4 Hybrid',
    type: 'hybrid',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },

  // Woods
  {
    id: '5w',
    name: '5 Wood',
    type: 'wood',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
  {
    id: '3w',
    name: '3 Wood',
    type: 'wood',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },

  // Driver
  {
    id: 'dr',
    name: 'Driver',
    type: 'driver',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },

  // Putter
  {
    id: 'pt',
    name: 'Putter',
    type: 'putter',
    maxDistance: 0,
    halfSwingDistance: 0,
    confidence: 5,
    commonMiss: null,
    bestCue: '',
    notes: '',
  },
];

export const getClubById = (id: string): GolfClub | undefined =>
  defaultClubs.find((c) => c.id === id);

export const getClubsByType = (type: string): GolfClub[] =>
  defaultClubs.filter((c) => c.type === type);

export const clubTypeOrder: Record<string, number> = {
  wedge: 1,
  iron: 2,
  hybrid: 3,
  wood: 4,
  driver: 5,
  putter: 6,
};

export const sortClubsByType = (clubs: GolfClub[]): GolfClub[] =>
  [...clubs].sort((a, b) => clubTypeOrder[a.type] - clubTypeOrder[b.type]);
