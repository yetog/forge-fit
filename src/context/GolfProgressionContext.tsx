/**
 * Golf Progression Context
 * Manages XP, levels, mastery, quests, and achievements
 */

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import {
  GolfPlayerProgression,
  GolfPlayerProfile,
  PlayerMastery,
  Quest,
  GolfAchievement,
  XPEvent,
  XPSource,
  OnboardingData,
  MasteryCategory,
} from '@/types/golfProgression';
import {
  createInitialProgression,
  createEmptyPlayerMastery,
  getLevelFromXP,
  getLevelProgress,
  getStreakBonus,
  XP_VALUES,
  ACHIEVEMENT_XP,
  calculateCategoryMastery,
  calculateOverallMastery,
} from '@/utils/progressionUtils';
import { toast } from 'sonner';

// Storage keys
const STORAGE_KEYS = {
  PROFILE: 'forge-fit-golf-profile',
  PROGRESSION: 'forge-fit-golf-progression',
  MASTERY: 'forge-fit-golf-mastery',
  QUEST: 'forge-fit-golf-quest',
  ACHIEVEMENTS: 'forge-fit-golf-achievements',
  XP_HISTORY: 'forge-fit-golf-xp-history',
  ONBOARDING: 'forge-fit-golf-onboarding',
};

// Helper functions
function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save to storage:', e);
  }
}

// Context type
interface GolfProgressionContextType {
  // Profile
  profile: GolfPlayerProfile | null;
  isOnboarded: boolean;
  completeOnboarding: (data: OnboardingData) => void;
  updateProfile: (updates: Partial<GolfPlayerProfile>) => void;

  // Progression
  progression: GolfPlayerProgression;
  awardXP: (source: XPSource, amount?: number, description?: string) => void;
  getXPProgress: () => { current: number; required: number; percentage: number };

  // Mastery
  mastery: PlayerMastery;
  addMasteryPoints: (category: MasteryCategory, type: 'drill' | 'challenge' | 'round' | 'consistency', points: number) => void;

  // Quests
  currentQuest: Quest | null;
  completeDailyMission: (day: number) => void;

  // Achievements
  achievements: GolfAchievement[];
  unlockAchievement: (achievementId: string) => void;
  checkAchievements: () => void;

  // XP History
  xpHistory: XPEvent[];
}

const GolfProgressionContext = createContext<GolfProgressionContextType | undefined>(undefined);

export const GolfProgressionProvider = ({ children }: { children: ReactNode }) => {
  // Profile state
  const [profile, setProfile] = useState<GolfPlayerProfile | null>(() =>
    loadFromStorage(STORAGE_KEYS.PROFILE, null)
  );

  // Progression state
  const [progression, setProgression] = useState<GolfPlayerProgression>(() =>
    loadFromStorage(STORAGE_KEYS.PROGRESSION, createInitialProgression())
  );

  // Mastery state
  const [mastery, setMastery] = useState<PlayerMastery>(() =>
    loadFromStorage(STORAGE_KEYS.MASTERY, createEmptyPlayerMastery())
  );

  // Quest state
  const [currentQuest, setCurrentQuest] = useState<Quest | null>(() =>
    loadFromStorage(STORAGE_KEYS.QUEST, null)
  );

  // Achievements state
  const [achievements, setAchievements] = useState<GolfAchievement[]>(() =>
    loadFromStorage(STORAGE_KEYS.ACHIEVEMENTS, [])
  );

  // XP History
  const [xpHistory, setXPHistory] = useState<XPEvent[]>(() =>
    loadFromStorage(STORAGE_KEYS.XP_HISTORY, [])
  );

  // Persist changes
  useEffect(() => {
    if (profile) saveToStorage(STORAGE_KEYS.PROFILE, profile);
  }, [profile]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PROGRESSION, progression);
  }, [progression]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.MASTERY, mastery);
  }, [mastery]);

  useEffect(() => {
    if (currentQuest) saveToStorage(STORAGE_KEYS.QUEST, currentQuest);
  }, [currentQuest]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.ACHIEVEMENTS, achievements);
  }, [achievements]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.XP_HISTORY, xpHistory);
  }, [xpHistory]);

  // Check if onboarded
  const isOnboarded = profile?.onboardingCompleted ?? false;

  // Complete onboarding
  const completeOnboarding = useCallback((data: OnboardingData) => {
    const newProfile: GolfPlayerProfile = {
      id: crypto.randomUUID(),
      displayName: data.displayName,
      avatarId: data.avatarId,
      goal: data.goal,
      frequency: data.frequency,
      struggle: data.struggle,
      dominantHand: data.dominantHand,
      handicapRange: data.handicapRange,
      onboardingCompleted: true,
      createdAt: new Date().toISOString(),
    };

    setProfile(newProfile);

    // Award first steps XP
    awardXP('achievement', 100, 'Completed onboarding');

    toast.success('Welcome to Forge Fit Golf!', {
      description: 'Level 1 - Your journey begins.',
    });
  }, []);

  // Update profile
  const updateProfile = useCallback((updates: Partial<GolfPlayerProfile>) => {
    setProfile(prev => prev ? { ...prev, ...updates } : null);
  }, []);

  // Award XP
  const awardXP = useCallback((source: XPSource, amount?: number, description?: string) => {
    const xpAmount = amount ?? XP_VALUES[source];
    const timestamp = new Date().toISOString();

    // Create event
    const event: XPEvent = {
      source,
      amount: xpAmount,
      timestamp,
      description,
    };

    // Update history
    setXPHistory(prev => [...prev.slice(-99), event]); // Keep last 100

    // Update progression
    setProgression(prev => {
      const newTotalXP = prev.totalXPEarned + xpAmount;
      const newLevel = getLevelFromXP(newTotalXP);
      const leveledUp = newLevel > prev.level;

      // Show level up toast
      if (leveledUp) {
        setTimeout(() => {
          toast.success(`Level Up! You're now Level ${newLevel}`, {
            description: `+${xpAmount} XP earned`,
            duration: 4000,
          });
        }, 100);
      } else {
        toast.success(`+${xpAmount} XP`, {
          description: description || source.replace(/_/g, ' '),
          duration: 2000,
        });
      }

      return {
        ...prev,
        currentXP: prev.currentXP + xpAmount,
        totalXPEarned: newTotalXP,
        level: newLevel,
        lastActivityDate: timestamp,
      };
    });
  }, []);

  // Get XP progress for current level
  const getXPProgress = useCallback(() => {
    return getLevelProgress(progression.totalXPEarned);
  }, [progression.totalXPEarned]);

  // Add mastery points
  const addMasteryPoints = useCallback((
    category: MasteryCategory,
    type: 'drill' | 'challenge' | 'round' | 'consistency',
    points: number
  ) => {
    setMastery(prev => {
      const categoryMastery = { ...prev[category] };

      switch (type) {
        case 'drill':
          categoryMastery.drillPoints = Math.min(40, categoryMastery.drillPoints + points);
          break;
        case 'challenge':
          categoryMastery.challengePoints = Math.min(30, categoryMastery.challengePoints + points);
          break;
        case 'round':
          categoryMastery.roundPoints = Math.min(20, categoryMastery.roundPoints + points);
          break;
        case 'consistency':
          categoryMastery.consistencyPoints = Math.min(10, categoryMastery.consistencyPoints + points);
          break;
      }

      const updated = calculateCategoryMastery(categoryMastery);

      const newMastery = {
        ...prev,
        [category]: updated,
        lastUpdated: new Date().toISOString(),
      };

      newMastery.overall = calculateOverallMastery(newMastery);

      return newMastery;
    });
  }, []);

  // Complete daily mission
  const completeDailyMission = useCallback((dayIndex: number) => {
    if (!currentQuest) return;

    setCurrentQuest(prev => {
      if (!prev) return null;

      const missions = [...prev.missions];
      missions[dayIndex] = {
        ...missions[dayIndex],
        status: 'completed',
        completedAt: new Date().toISOString(),
      };

      const completedDays = missions.filter(m => m.status === 'completed').length;
      const perfectWeek = completedDays === 5;
      const questComplete = completedDays >= 4;

      // Award daily XP
      awardXP('quest_daily', XP_VALUES.quest_daily, `Completed ${missions[dayIndex].type}`);

      // Award quest completion XP
      if (questComplete && prev.status === 'active') {
        setTimeout(() => {
          awardXP('quest_complete', XP_VALUES.quest_complete, 'Quest complete!');
          if (perfectWeek) {
            awardXP('quest_perfect', XP_VALUES.quest_perfect, 'Perfect week bonus!');
          }
        }, 500);
      }

      return {
        ...prev,
        missions,
        completedDays,
        perfectWeek,
        status: questComplete ? 'completed' : 'active',
      };
    });
  }, [currentQuest, awardXP]);

  // Unlock achievement
  const unlockAchievement = useCallback((achievementId: string) => {
    setAchievements(prev => {
      const index = prev.findIndex(a => a.id === achievementId);
      if (index === -1 || prev[index].unlockedAt) return prev;

      const achievement = prev[index];
      const updated = [...prev];
      updated[index] = {
        ...achievement,
        unlockedAt: new Date().toISOString(),
      };

      // Award XP
      const xp = ACHIEVEMENT_XP[achievement.tier];
      awardXP('achievement', xp, `Achievement: ${achievement.name}`);

      toast.success(`Achievement Unlocked!`, {
        description: achievement.name,
        duration: 4000,
      });

      return updated;
    });
  }, [awardXP]);

  // Check achievements (called after certain actions)
  const checkAchievements = useCallback(() => {
    // This will be expanded with actual achievement checks
    // For now, it's a placeholder
  }, [progression, mastery, xpHistory]);

  return (
    <GolfProgressionContext.Provider
      value={{
        profile,
        isOnboarded,
        completeOnboarding,
        updateProfile,
        progression,
        awardXP,
        getXPProgress,
        mastery,
        addMasteryPoints,
        currentQuest,
        completeDailyMission,
        achievements,
        unlockAchievement,
        checkAchievements,
        xpHistory,
      }}
    >
      {children}
    </GolfProgressionContext.Provider>
  );
};

export const useGolfProgression = () => {
  const context = useContext(GolfProgressionContext);
  if (!context) {
    throw new Error('useGolfProgression must be used within GolfProgressionProvider');
  }
  return context;
};
