/**
 * Golf Progression Utilities
 * Based on XP_SYSTEM_SPEC.md
 */

import {
  GolfPlayerProgression,
  XPSource,
  XPEvent,
  MasteryCategory,
  CategoryMastery,
  PlayerMastery,
  MasteryTier,
  AchievementTier,
} from '@/types/golfProgression';

// ============ XP Values ============

export const XP_VALUES: Record<XPSource, number> = {
  // Practice Sessions
  session: 50,              // Base reward for logging
  session_duration: 25,     // Per 15 minutes
  session_notes: 25,        // Add reflection/notes
  session_complete: 25,     // Complete with all fields

  // Drills
  drill: 30,                // Complete any drill
  drill_variety: 50,        // Bonus for 3+ drills in session
  drill_first: 20,          // First time completing a drill

  // Swings & Analysis
  swing_record: 20,         // Record a swing
  swing_analysis: 40,       // Complete AI analysis
  swing_comparison: 30,     // Side-by-side comparison
  swing_save: 10,           // Save to library

  // Rounds
  round_9: 100,             // 9 holes
  round_18: 200,            // 18 holes
  round_stats: 50,          // Complete all stats
  round_reflection: 25,     // Add reflection
  round_clips: 10,          // Per clip (max 50)

  // Quests
  quest_daily: 75,          // Complete daily mission
  quest_complete: 500,      // Complete full 5-day quest
  quest_perfect: 250,       // Perfect week bonus

  // Streaks
  streak_bonus: 10,         // Base streak bonus (multiplied by tier)

  // Achievements
  achievement: 100,         // Base (modified by tier)
};

export const ACHIEVEMENT_XP: Record<AchievementTier, number> = {
  minor: 100,
  standard: 250,
  major: 500,
  legendary: 1000,
};

// ============ Level Curve ============

/**
 * Calculate XP required for a specific level
 * Formula: 100 × N × (1 + (N - 1) × 0.1)
 */
export function getXPForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.floor(100 * level * (1 + (level - 1) * 0.1));
}

/**
 * Calculate cumulative XP required to reach a level
 */
export function getCumulativeXPForLevel(level: number): number {
  let total = 0;
  for (let i = 2; i <= level; i++) {
    total += getXPForLevel(i);
  }
  return total;
}

/**
 * Get current level from total XP earned
 */
export function getLevelFromXP(totalXP: number): number {
  let level = 1;
  let xpRequired = 0;

  while (totalXP >= xpRequired) {
    level++;
    xpRequired = getCumulativeXPForLevel(level);
    if (level > 50) break; // Max level cap
  }

  return Math.min(level - 1, 50);
}

/**
 * Get XP progress within current level
 */
export function getLevelProgress(totalXP: number): { current: number; required: number; percentage: number } {
  const level = getLevelFromXP(totalXP);
  const currentLevelXP = getCumulativeXPForLevel(level);
  const nextLevelXP = getCumulativeXPForLevel(level + 1);
  const xpIntoLevel = totalXP - currentLevelXP;
  const xpNeeded = nextLevelXP - currentLevelXP;

  return {
    current: xpIntoLevel,
    required: xpNeeded,
    percentage: Math.min(100, Math.round((xpIntoLevel / xpNeeded) * 100)),
  };
}

// ============ Streak Bonuses ============

export function getStreakBonus(streakDays: number): number {
  if (streakDays >= 30) return 100;
  if (streakDays >= 14) return 50;
  if (streakDays >= 7) return 25;
  if (streakDays >= 2) return 10;
  return 0;
}

// ============ Session XP Calculation ============

export function calculateSessionXP(
  durationMinutes: number,
  hasNotes: boolean,
  hasAllFields: boolean
): { total: number; breakdown: XPEvent[] } {
  const events: XPEvent[] = [];
  const timestamp = new Date().toISOString();

  // Base XP
  events.push({ source: 'session', amount: XP_VALUES.session, timestamp });

  // Duration bonus (25 XP per 15 minutes)
  const durationBonuses = Math.floor(durationMinutes / 15);
  if (durationBonuses > 0) {
    events.push({
      source: 'session_duration',
      amount: durationBonuses * XP_VALUES.session_duration,
      timestamp,
      description: `${durationMinutes} minutes practiced`,
    });
  }

  // Notes bonus
  if (hasNotes) {
    events.push({ source: 'session_notes', amount: XP_VALUES.session_notes, timestamp });
  }

  // Complete session bonus
  if (hasAllFields) {
    events.push({ source: 'session_complete', amount: XP_VALUES.session_complete, timestamp });
  }

  const total = events.reduce((sum, e) => sum + e.amount, 0);
  return { total, breakdown: events };
}

// ============ Mastery Calculations ============

export function createEmptyMastery(): CategoryMastery {
  return {
    category: 'driving',
    drillPoints: 0,
    challengePoints: 0,
    roundPoints: 0,
    consistencyPoints: 0,
    totalPoints: 0,
    percentage: 0,
  };
}

export function createEmptyPlayerMastery(): PlayerMastery {
  const categories: MasteryCategory[] = ['driving', 'irons', 'woods', 'shortgame', 'putting', 'course'];
  const mastery: any = {};

  categories.forEach(cat => {
    mastery[cat] = { ...createEmptyMastery(), category: cat };
  });

  return {
    ...mastery,
    overall: 0,
    lastUpdated: new Date().toISOString(),
  };
}

export function calculateCategoryMastery(mastery: CategoryMastery): CategoryMastery {
  const drillPoints = Math.min(40, mastery.drillPoints);
  const challengePoints = Math.min(30, mastery.challengePoints);
  const roundPoints = Math.min(20, mastery.roundPoints);
  const consistencyPoints = Math.min(10, mastery.consistencyPoints);
  const totalPoints = drillPoints + challengePoints + roundPoints + consistencyPoints;

  return {
    ...mastery,
    drillPoints,
    challengePoints,
    roundPoints,
    consistencyPoints,
    totalPoints,
    percentage: totalPoints,
  };
}

export function calculateOverallMastery(mastery: PlayerMastery): number {
  const categories: MasteryCategory[] = ['driving', 'irons', 'woods', 'shortgame', 'putting', 'course'];
  const total = categories.reduce((sum, cat) => sum + mastery[cat].percentage, 0);
  return Math.round(total / categories.length);
}

export function getMasteryTier(percentage: number): MasteryTier {
  if (percentage >= 100) return 'master';
  if (percentage >= 80) return 'expert';
  if (percentage >= 60) return 'advanced';
  if (percentage >= 40) return 'intermediate';
  if (percentage >= 20) return 'beginner';
  return 'novice';
}

export const MASTERY_COLORS: Record<MasteryCategory, string> = {
  driving: 'mastery-driving',
  irons: 'mastery-irons',
  woods: 'mastery-woods',
  shortgame: 'mastery-shortgame',
  putting: 'mastery-putting',
  course: 'mastery-course',
};

export const MASTERY_LABELS: Record<MasteryCategory, string> = {
  driving: 'Driving',
  irons: 'Irons',
  woods: 'Woods',
  shortgame: 'Short Game',
  putting: 'Putting',
  course: 'Course Management',
};

// ============ Level Titles ============

export function getLevelTitle(level: number): string {
  if (level >= 50) return 'Master';
  if (level >= 40) return 'Expert';
  if (level >= 30) return 'Devoted';
  if (level >= 25) return 'Dedicated';
  if (level >= 20) return 'Competitor';
  if (level >= 15) return 'Apprentice';
  if (level >= 10) return 'Novice';
  if (level >= 5) return 'Beginner';
  return 'Rookie';
}

// ============ Initial State ============

export function createInitialProgression(): GolfPlayerProgression {
  return {
    currentXP: 0,
    totalXPEarned: 0,
    level: 1,
    streakDays: 0,
    lastActivityDate: null,
  };
}
