
import { Equipment } from '@/types/workout';

export const availableEquipment: Equipment[] = [
  { id: 'dumbbells', name: 'Dumbbells', maxWeight: 50, description: '20-50 lb dumbbells' },
  { id: 'treadmill', name: 'Treadmill', description: 'Cardio treadmill' },
  { id: 'elliptical', name: 'Elliptical', description: 'Elliptical machine' },
  { id: 'smith-machine', name: 'Smith Machine', maxWeight: 180, description: 'Smith machine up to ~180 lbs' },
  { id: 'cable-pulley', name: 'Cable Pulley Machine', description: 'Cable machine for triceps, flies, back & shoulder work' },
  { id: 'bodyweight', name: 'Bodyweight', description: 'No equipment needed' },
];
