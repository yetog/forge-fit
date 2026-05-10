
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import {
  GolfClub,
  GolfSession,
  GolfProfile,
  GolfCue,
  TrainingPhase,
  MissType,
  TrainingPathPhase,
} from '@/types/golf';
import { golfGet, golfSet, GOLF_KEYS } from '@/utils/golfStorage';
import { defaultClubs } from '@/data/golfClubs';
import { trainingPhases as defaultPhases } from '@/data/golfTrainingPath';

interface GolfContextType {
  // Profile
  profile: GolfProfile;
  updateProfile: (updates: Partial<GolfProfile>) => void;
  setCurrentFocus: (focus: string) => void;

  // Clubs
  clubs: GolfClub[];
  updateClub: (clubId: string, updates: Partial<GolfClub>) => void;
  getClubById: (id: string) => GolfClub | undefined;

  // Sessions
  sessions: GolfSession[];
  addSession: (session: Omit<GolfSession, 'id' | 'xpEarned'>) => void;
  getRecentSessions: (limit?: number) => GolfSession[];

  // Cues
  cues: GolfCue[];
  addCue: (cue: Omit<GolfCue, 'id'>) => void;
  updateCue: (id: string, updates: Partial<GolfCue>) => void;
  deleteCue: (id: string) => void;

  // Training Path
  trainingProgress: TrainingPathPhase[];
  updatePhaseProgress: (phaseId: TrainingPhase, progress: number) => void;
  unlockPhase: (phaseId: TrainingPhase) => void;
  completePhase: (phaseId: TrainingPhase) => void;

  // Stats
  getMostCommonMiss: () => MissType | null;
  getSessionStreak: () => number;
  getTotalPracticeTime: () => number;
  getClubConfidenceAverage: () => number;
}

const defaultProfile: GolfProfile = {
  currentPhase: 'contact',
  currentFocus: 'Contact',
  totalSessions: 0,
  totalPracticeMinutes: 0,
  currentStreak: 0,
  longestStreak: 0,
};

const GolfContext = createContext<GolfContextType | undefined>(undefined);

export const GolfProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<GolfProfile>(() =>
    golfGet(GOLF_KEYS.PROFILE, defaultProfile)
  );

  const [clubs, setClubs] = useState<GolfClub[]>(() =>
    golfGet(GOLF_KEYS.CLUBS, defaultClubs)
  );

  const [sessions, setSessions] = useState<GolfSession[]>(() =>
    golfGet(GOLF_KEYS.SESSIONS, [])
  );

  const [cues, setCues] = useState<GolfCue[]>(() =>
    golfGet(GOLF_KEYS.CUES, [])
  );

  const [trainingProgress, setTrainingProgress] = useState<TrainingPathPhase[]>(() =>
    golfGet(GOLF_KEYS.TRAINING_PROGRESS, defaultPhases)
  );

  // Persist on change
  useEffect(() => {
    golfSet(GOLF_KEYS.PROFILE, profile);
  }, [profile]);

  useEffect(() => {
    golfSet(GOLF_KEYS.CLUBS, clubs);
  }, [clubs]);

  useEffect(() => {
    golfSet(GOLF_KEYS.SESSIONS, sessions);
  }, [sessions]);

  useEffect(() => {
    golfSet(GOLF_KEYS.CUES, cues);
  }, [cues]);

  useEffect(() => {
    golfSet(GOLF_KEYS.TRAINING_PROGRESS, trainingProgress);
  }, [trainingProgress]);

  // Profile methods
  const updateProfile = (updates: Partial<GolfProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const setCurrentFocus = (focus: string) => {
    setProfile((prev) => ({ ...prev, currentFocus: focus }));
  };

  // Club methods
  const updateClub = (clubId: string, updates: Partial<GolfClub>) => {
    setClubs((prev) =>
      prev.map((c) => (c.id === clubId ? { ...c, ...updates } : c))
    );
  };

  const getClubById = useCallback(
    (id: string) => clubs.find((c) => c.id === id),
    [clubs]
  );

  // Session methods
  const addSession = (sessionData: Omit<GolfSession, 'id' | 'xpEarned'>) => {
    // Calculate XP based on duration and reflections
    const baseXp = Math.floor(sessionData.duration / 10) * 5; // 5 XP per 10 minutes
    const reflectionBonus = sessionData.whatImproved ? 10 : 0;
    const focusBonus = sessionData.focus ? 5 : 0;
    const xpEarned = baseXp + reflectionBonus + focusBonus;

    const session: GolfSession = {
      ...sessionData,
      id: crypto.randomUUID(),
      xpEarned,
    };

    setSessions((prev) => [...prev, session]);

    // Update profile stats
    const today = new Date().toDateString();
    const lastDate = profile.lastSessionDate
      ? new Date(profile.lastSessionDate).toDateString()
      : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let streak = profile.currentStreak;
    if (lastDate === yesterday) {
      streak += 1;
    } else if (lastDate !== today) {
      streak = 1;
    }

    setProfile((prev) => ({
      ...prev,
      totalSessions: prev.totalSessions + 1,
      totalPracticeMinutes: prev.totalPracticeMinutes + sessionData.duration,
      currentStreak: streak,
      longestStreak: Math.max(prev.longestStreak, streak),
      lastSessionDate: new Date().toISOString(),
    }));

    // Update training phase progress based on sessions
    const currentPhase = trainingProgress.find((p) => p.id === profile.currentPhase);
    if (currentPhase && !currentPhase.completed) {
      const newProgress = Math.min(currentPhase.progress + 10, 100);
      updatePhaseProgress(profile.currentPhase, newProgress);
    }
  };

  const getRecentSessions = useCallback(
    (limit = 5) => {
      return [...sessions]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    },
    [sessions]
  );

  // Cue methods
  const addCue = (cueData: Omit<GolfCue, 'id'>) => {
    const cue: GolfCue = { ...cueData, id: crypto.randomUUID() };
    setCues((prev) => [...prev, cue]);
  };

  const updateCue = (id: string, updates: Partial<GolfCue>) => {
    setCues((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
  };

  const deleteCue = (id: string) => {
    setCues((prev) => prev.filter((c) => c.id !== id));
  };

  // Training path methods
  const updatePhaseProgress = (phaseId: TrainingPhase, progress: number) => {
    setTrainingProgress((prev) =>
      prev.map((p) => (p.id === phaseId ? { ...p, progress } : p))
    );
  };

  const unlockPhase = (phaseId: TrainingPhase) => {
    setTrainingProgress((prev) =>
      prev.map((p) => (p.id === phaseId ? { ...p, unlocked: true } : p))
    );
  };

  const completePhase = (phaseId: TrainingPhase) => {
    setTrainingProgress((prev) => {
      const updated = prev.map((p) =>
        p.id === phaseId ? { ...p, completed: true, progress: 100 } : p
      );

      // Unlock next phase
      const currentIndex = updated.findIndex((p) => p.id === phaseId);
      if (currentIndex < updated.length - 1) {
        updated[currentIndex + 1] = { ...updated[currentIndex + 1], unlocked: true };
      }

      return updated;
    });

    // Update profile to next phase
    const phases: TrainingPhase[] = ['contact', 'distance', 'shaping'];
    const currentIndex = phases.indexOf(phaseId);
    if (currentIndex < phases.length - 1) {
      setProfile((prev) => ({ ...prev, currentPhase: phases[currentIndex + 1] }));
    }
  };

  // Stats methods
  const getMostCommonMiss = useCallback((): MissType | null => {
    if (sessions.length === 0) return null;

    const missCounts: Record<string, number> = {};
    sessions.forEach((s) => {
      Object.entries(s.misses).forEach(([miss, count]) => {
        if (count > 0) {
          missCounts[miss] = (missCounts[miss] || 0) + count;
        }
      });
    });

    const sorted = Object.entries(missCounts).sort((a, b) => b[1] - a[1]);
    return (sorted[0]?.[0] as MissType) || null;
  }, [sessions]);

  const getSessionStreak = useCallback(() => profile.currentStreak, [profile]);

  const getTotalPracticeTime = useCallback(
    () => profile.totalPracticeMinutes,
    [profile]
  );

  const getClubConfidenceAverage = useCallback(() => {
    const clubsWithData = clubs.filter((c) => c.maxDistance > 0);
    if (clubsWithData.length === 0) return 0;
    const total = clubsWithData.reduce((sum, c) => sum + c.confidence, 0);
    return Math.round(total / clubsWithData.length);
  }, [clubs]);

  return (
    <GolfContext.Provider
      value={{
        profile,
        updateProfile,
        setCurrentFocus,
        clubs,
        updateClub,
        getClubById,
        sessions,
        addSession,
        getRecentSessions,
        cues,
        addCue,
        updateCue,
        deleteCue,
        trainingProgress,
        updatePhaseProgress,
        unlockPhase,
        completePhase,
        getMostCommonMiss,
        getSessionStreak,
        getTotalPracticeTime,
        getClubConfidenceAverage,
      }}
    >
      {children}
    </GolfContext.Provider>
  );
};

export const useGolf = () => {
  const ctx = useContext(GolfContext);
  if (!ctx) throw new Error('useGolf must be used within GolfProvider');
  return ctx;
};
