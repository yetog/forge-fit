/**
 * Questful Service for Forge Fit (Body)
 * Sends XP events to the Questful Living API
 */

import { getForgeUserId } from './forgeUser';

const QUESTFUL_API = '/questful/api/api';

export type ForgeFitAction =
  | 'workout_completed'
  | 'workout_logged'
  | 'exercise_added'
  | 'personal_record'
  | 'streak_milestone';

interface XPEventResponse {
  success: boolean;
  xp_earned: number;
  total_xp: number;
  level: number;
  level_up: boolean;
  new_level?: number;
  message: string;
}

class QuestfulService {
  private enabled: boolean = true;

  async recordAction(
    action: ForgeFitAction,
    metadata?: Record<string, unknown>
  ): Promise<XPEventResponse | null> {
    if (!this.enabled) return null;

    const userId = getForgeUserId();

    try {
      const response = await fetch(`${QUESTFUL_API}/xp/event?user_id=${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app: 'forge-fit',
          action,
          metadata,
        }),
      });

      if (!response.ok) {
        console.warn('[Questful] Failed to record action:', action);
        return null;
      }

      const result: XPEventResponse = await response.json();

      if (result.success) {
        console.log(`[Questful] +${result.xp_earned} XP! (Total: ${result.total_xp})`);
        if (result.level_up) {
          console.log(`[Questful] Level up to ${result.new_level}!`);
        }
      }

      return result;
    } catch (error) {
      console.error('[Questful] Error recording action:', error);
      return null;
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }
}

export const questfulService = new QuestfulService();

// Convenience functions
export const recordWorkoutCompleted = (workoutId?: string, type?: string, duration?: number) =>
  questfulService.recordAction('workout_completed', { workoutId, type, duration });

export const recordWorkoutLogged = (workoutId?: string) =>
  questfulService.recordAction('workout_logged', { workoutId });

export const recordExerciseAdded = (exerciseName?: string, sets?: number, reps?: number) =>
  questfulService.recordAction('exercise_added', { exerciseName, sets, reps });

export const recordPersonalRecord = (exerciseName?: string, weight?: number, reps?: number) =>
  questfulService.recordAction('personal_record', { exerciseName, weight, reps });

export const recordStreakMilestone = (days: number) =>
  questfulService.recordAction('streak_milestone', { days });
