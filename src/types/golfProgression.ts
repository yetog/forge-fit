/**
 * Golf Progression System Types
 * Based on XP_SYSTEM_SPEC.md and MASTERY_SYSTEM_SPEC.md
 */

// ============ XP System ============

export interface GolfPlayerProgression {
  currentXP: number;
  totalXPEarned: number;
  level: number;
  streakDays: number;
  lastActivityDate: string | null;
}

export type XPSource =
  | 'session'
  | 'session_duration'
  | 'session_notes'
  | 'session_complete'
  | 'drill'
  | 'drill_variety'
  | 'drill_first'
  | 'swing_record'
  | 'swing_analysis'
  | 'swing_comparison'
  | 'swing_save'
  | 'round_9'
  | 'round_18'
  | 'round_stats'
  | 'round_reflection'
  | 'round_clips'
  | 'quest_daily'
  | 'quest_complete'
  | 'quest_perfect'
  | 'streak_bonus'
  | 'achievement';

export interface XPEvent {
  source: XPSource;
  amount: number;
  timestamp: string;
  description?: string;
}

// ============ Mastery System ============

export type MasteryCategory =
  | 'driving'
  | 'irons'
  | 'woods'
  | 'shortgame'
  | 'putting'
  | 'course';

export interface CategoryMastery {
  category: MasteryCategory;
  drillPoints: number;      // Max 40
  challengePoints: number;  // Max 30
  roundPoints: number;      // Max 20
  consistencyPoints: number; // Max 10
  totalPoints: number;      // Max 100
  percentage: number;       // 0-100
}

export type MasteryTier = 'novice' | 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'master';

export interface PlayerMastery {
  driving: CategoryMastery;
  irons: CategoryMastery;
  woods: CategoryMastery;
  shortgame: CategoryMastery;
  putting: CategoryMastery;
  course: CategoryMastery;
  overall: number;
  lastUpdated: string;
}

// ============ Quests ============

export type QuestDayType = 'swing-lab' | 'scoring-lab' | 'build-bag' | 'calibration' | 'play-golf';
export type QuestDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
export type QuestStatus = 'active' | 'completed' | 'failed';
export type MissionStatus = 'locked' | 'available' | 'completed' | 'missed';

export interface MissionSegment {
  name: string;
  duration: number; // minutes
  description: string;
  optional: boolean;
}

export interface DailyMission {
  day: QuestDay;
  type: QuestDayType;
  duration: number; // minutes
  segments: MissionSegment[];
  completionCriteria: string[];
  status: MissionStatus;
  xpReward: number;
  masteryRewards: { category: MasteryCategory; points: number }[];
  completedAt?: string;
}

export interface Quest {
  id: string;
  name: string;
  weekNumber: number;
  primaryFocus: MasteryCategory;
  missions: DailyMission[];
  startDate: string;
  status: QuestStatus;
  completedDays: number;
  perfectWeek: boolean;
}

// ============ Achievements ============

export type AchievementTier = 'minor' | 'standard' | 'major' | 'legendary';
export type AchievementCategory =
  | 'getting-started'
  | 'streaks'
  | 'practice'
  | 'swing-studio'
  | 'rounds'
  | 'mastery'
  | 'levels'
  | 'quests'
  | 'special';

export interface GolfAchievement {
  id: string;
  name: string;
  description: string;
  tier: AchievementTier;
  category: AchievementCategory;
  xpReward: number;
  icon: string;
  hidden: boolean;
  unlockedAt?: string;
  progress?: number;
  target?: number;
}

// ============ Onboarding ============

export type GolfGoal = 'break100' | 'break90' | 'break80' | 'scratch';
export type PracticeFrequency = 'daily' | 'frequent' | 'regular' | 'weekly' | 'occasional';
export type GolfStruggle = 'slice' | 'hook' | 'contact' | 'distance' | 'shortgame' | 'putting' | 'mental' | 'consistency';
export type HandDominance = 'right' | 'left';
export type HandicapRange = 'new' | '30+' | '20-29' | '10-19' | '5-9' | '0-4';

export interface OnboardingData {
  goal: GolfGoal;
  frequency: PracticeFrequency;
  struggle: GolfStruggle;
  displayName: string;
  dominantHand: HandDominance;
  handicapRange: HandicapRange;
  avatarId: number; // 1-8
  notificationsEnabled: boolean;
  completedAt?: string;
}

// ============ Player Profile ============

export interface GolfPlayerProfile {
  id: string;
  displayName: string;
  avatarId: number;
  goal: GolfGoal;
  frequency: PracticeFrequency;
  struggle: GolfStruggle;
  dominantHand: HandDominance;
  handicapRange: HandicapRange;
  onboardingCompleted: boolean;
  createdAt: string;
}

// ============ Combined State ============

export interface GolfProgressionState {
  profile: GolfPlayerProfile | null;
  progression: GolfPlayerProgression;
  mastery: PlayerMastery;
  currentQuest: Quest | null;
  achievements: GolfAchievement[];
  xpHistory: XPEvent[];
}
