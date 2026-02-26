
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { UserProfile, WorkoutLog, ExerciseLog, SetLog, WorkoutTemplate, Goal } from '@/types/workout';
import { wkGet, wkSet, WK_KEYS } from '@/utils/workoutStorage';
import { getExerciseById, getExercisesByMuscleGroup } from '@/data/exercises';

interface WorkoutContextType {
  profiles: UserProfile[];
  activeProfile: UserProfile | null;
  workoutLogs: WorkoutLog[];
  activeWorkout: WorkoutLog | null;
  goals: Goal[];
  createProfile: (name: string) => void;
  switchProfile: (id: string) => void;
  deleteProfile: (id: string) => void;
  startWorkout: (template: WorkoutTemplate) => void;
  completeExercise: (exerciseIndex: number, sets: SetLog[]) => void;
  finishWorkout: (notes?: string) => void;
  cancelWorkout: () => void;
  getProfileLogs: () => WorkoutLog[];
  getStreak: () => number;
  swapExercise: (exerciseIndex: number, newExerciseId: string) => void;
  addGoal: (goal: Omit<Goal, 'id' | 'profileId' | 'completed' | 'createdAt'>) => void;
  updateGoal: (goalId: string, updates: Partial<Goal>) => void;
  deleteGoal: (goalId: string) => void;
  updateProfileAvatar: (avatarUrl: string) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<UserProfile[]>(() => wkGet(WK_KEYS.PROFILES, []));
  const [activeProfileId, setActiveProfileId] = useState<string>(() => wkGet(WK_KEYS.ACTIVE_PROFILE, ''));
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>(() => wkGet(WK_KEYS.WORKOUT_LOGS, []));
  const [activeWorkout, setActiveWorkout] = useState<WorkoutLog | null>(() => wkGet(WK_KEYS.ACTIVE_WORKOUT, null));
  const [goals, setGoals] = useState<Goal[]>(() => wkGet(WK_KEYS.GOALS, []));

  const activeProfile = profiles.find(p => p.id === activeProfileId) || null;

  // Persist on change
  useEffect(() => { wkSet(WK_KEYS.PROFILES, profiles); }, [profiles]);
  useEffect(() => { wkSet(WK_KEYS.ACTIVE_PROFILE, activeProfileId); }, [activeProfileId]);
  useEffect(() => { wkSet(WK_KEYS.WORKOUT_LOGS, workoutLogs); }, [workoutLogs]);
  useEffect(() => { wkSet(WK_KEYS.ACTIVE_WORKOUT, activeWorkout); }, [activeWorkout]);
  useEffect(() => { wkSet(WK_KEYS.GOALS, goals); }, [goals]);

  const createProfile = (name: string) => {
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
      totalWorkouts: 0,
      currentStreak: 0,
      longestStreak: 0,
    };
    setProfiles(prev => [...prev, profile]);
    if (!activeProfileId) setActiveProfileId(profile.id);
  };

  const switchProfile = (id: string) => {
    setActiveProfileId(id);
    setActiveWorkout(null);
  };

  const deleteProfile = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
    if (activeProfileId === id) {
      const remaining = profiles.filter(p => p.id !== id);
      setActiveProfileId(remaining[0]?.id || '');
    }
  };

  const startWorkout = (template: WorkoutTemplate) => {
    if (!activeProfile) return;
    const exerciseLogs: ExerciseLog[] = template.exercises.map(exId => {
      const ex = getExerciseById(exId);
      return {
        exerciseId: exId,
        completed: false,
        sets: ex ? Array.from({ length: ex.defaultSets }, () => ({
          reps: ex.defaultReps,
          weight: ex.defaultWeight || 0,
          completed: false,
        })) : [],
      };
    });

    const workout: WorkoutLog = {
      id: crypto.randomUUID(),
      templateId: template.id,
      profileId: activeProfile.id,
      type: template.type,
      muscleGroup: template.muscleGroup,
      date: new Date().toISOString(),
      durationMinutes: template.durationMinutes,
      exercises: exerciseLogs,
      completed: false,
    };
    setActiveWorkout(workout);
  };

  const completeExercise = (exerciseIndex: number, sets: SetLog[]) => {
    if (!activeWorkout) return;
    const updated = { ...activeWorkout };
    updated.exercises = [...updated.exercises];
    updated.exercises[exerciseIndex] = {
      ...updated.exercises[exerciseIndex],
      sets,
      completed: true,
    };
    setActiveWorkout(updated);
  };

  const swapExercise = (exerciseIndex: number, newExerciseId: string) => {
    if (!activeWorkout) return;
    const newEx = getExerciseById(newExerciseId);
    if (!newEx) return;
    const updated = { ...activeWorkout };
    updated.exercises = [...updated.exercises];
    updated.exercises[exerciseIndex] = {
      exerciseId: newExerciseId,
      completed: false,
      sets: Array.from({ length: newEx.defaultSets }, () => ({
        reps: newEx.defaultReps,
        weight: newEx.defaultWeight || 0,
        completed: false,
      })),
    };
    setActiveWorkout(updated);
  };

  const finishWorkout = (notes?: string) => {
    if (!activeWorkout || !activeProfile) return;
    const completed: WorkoutLog = { ...activeWorkout, completed: true, notes };
    setWorkoutLogs(prev => [...prev, completed]);
    
    const today = new Date().toDateString();
    const lastDate = activeProfile.lastWorkoutDate ? new Date(activeProfile.lastWorkoutDate).toDateString() : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    let streak = activeProfile.currentStreak;
    if (lastDate === yesterday || lastDate === today) {
      streak = lastDate === today ? streak : streak + 1;
    } else {
      streak = 1;
    }

    setProfiles(prev => prev.map(p => p.id === activeProfile.id ? {
      ...p,
      totalWorkouts: p.totalWorkouts + 1,
      currentStreak: streak,
      longestStreak: Math.max(p.longestStreak, streak),
      lastWorkoutDate: new Date().toISOString(),
    } : p));
    
    setActiveWorkout(null);
  };

  const cancelWorkout = () => setActiveWorkout(null);

  const getProfileLogs = useCallback(() => {
    return workoutLogs.filter(l => l.profileId === activeProfileId);
  }, [workoutLogs, activeProfileId]);

  const getStreak = useCallback(() => {
    return activeProfile?.currentStreak || 0;
  }, [activeProfile]);

  // Goals
  const addGoal = (goalData: Omit<Goal, 'id' | 'profileId' | 'completed' | 'createdAt'>) => {
    if (!activeProfile) return;
    const goal: Goal = {
      ...goalData,
      id: crypto.randomUUID(),
      profileId: activeProfile.id,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setGoals(prev => [...prev, goal]);
  };

  const updateGoal = (goalId: string, updates: Partial<Goal>) => {
    setGoals(prev => prev.map(g => g.id === goalId ? { ...g, ...updates } : g));
  };

  const deleteGoal = (goalId: string) => {
    setGoals(prev => prev.filter(g => g.id !== goalId));
  };

  const updateProfileAvatar = (avatarUrl: string) => {
    if (!activeProfile) return;
    setProfiles(prev => prev.map(p => p.id === activeProfile.id ? { ...p, avatarUrl } : p));
  };

  return (
    <WorkoutContext.Provider value={{
      profiles, activeProfile, workoutLogs, activeWorkout, goals,
      createProfile, switchProfile, deleteProfile,
      startWorkout, completeExercise, finishWorkout, cancelWorkout,
      getProfileLogs, getStreak, swapExercise,
      addGoal, updateGoal, deleteGoal, updateProfileAvatar,
    }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const ctx = useContext(WorkoutContext);
  if (!ctx) throw new Error('useWorkout must be used within WorkoutProvider');
  return ctx;
};
