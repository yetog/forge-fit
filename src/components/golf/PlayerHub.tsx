/**
 * Player Hub - Main Dashboard
 * Shows XP, level, mastery, current quest, and quick actions
 */

import React from 'react';
import { useGolfProgression } from '@/context/GolfProgressionContext';
import { useGolf } from '@/context/GolfContext';
import {
  getLevelTitle,
  MASTERY_COLORS,
  MASTERY_LABELS,
} from '@/utils/progressionUtils';
import { MasteryCategory } from '@/types/golfProgression';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  User,
  Zap,
  Trophy,
  Target,
  Calendar,
  TrendingUp,
  Clock,
  Flame,
  ChevronRight,
  Play,
  BookOpen,
  Video,
  Flag,
} from 'lucide-react';

// ============ Sub-components ============

// XP Progress Bar
const XPProgressBar = () => {
  const { progression, getXPProgress } = useGolfProgression();
  const { current, required, percentage } = getXPProgress();
  const title = getLevelTitle(progression.level);

  return (
    <div className="workout-card-gold">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--fairway-green))] to-[hsl(var(--gold))] flex items-center justify-center">
          <User className="w-8 h-8 text-black" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-[hsl(var(--gold))]">
              Level {progression.level}
            </span>
            <span className="text-muted-foreground">{title}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {progression.totalXPEarned.toLocaleString()} Total XP
          </div>
        </div>
      </div>

      <div className="xp-bar mb-2">
        <div
          className="xp-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{current.toLocaleString()} XP</span>
        <span>{required.toLocaleString()} XP to Level {progression.level + 1}</span>
      </div>
    </div>
  );
};

// Stats Grid
const StatsGrid = () => {
  const { progression } = useGolfProgression();
  const { profile, getSessionStreak, getTotalPracticeTime } = useGolf();

  const stats = [
    { label: 'Current Streak', value: getSessionStreak(), icon: Flame, color: 'text-orange-500' },
    { label: 'Sessions', value: profile.totalSessions, icon: Target, color: 'text-[hsl(var(--fairway-green))]' },
    { label: 'Practice Hours', value: Math.floor(getTotalPracticeTime() / 60), icon: Clock, color: 'text-blue-400' },
    { label: 'Best Streak', value: profile.longestStreak, icon: Trophy, color: 'text-[hsl(var(--gold))]' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="workout-card flex items-center gap-3">
          <div className={cn('p-2 rounded-lg bg-white/5', stat.color)}>
            <stat.icon className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display text-xl font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Mastery Summary
const MasterySummary = () => {
  const { mastery } = useGolfProgression();
  const categories: MasteryCategory[] = ['driving', 'irons', 'woods', 'shortgame', 'putting', 'course'];

  return (
    <div className="workout-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold">Mastery</h3>
        <span className="text-sm text-muted-foreground">
          Overall: {mastery.overall}%
        </span>
      </div>

      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat} className="flex items-center gap-3">
            <span className="text-sm w-24 text-muted-foreground">{MASTERY_LABELS[cat]}</span>
            <div className="flex-1 h-2 rounded-full bg-[hsl(var(--deep-space))] overflow-hidden">
              <div
                className={cn('h-full rounded-full transition-all', MASTERY_COLORS[cat])}
                style={{ width: `${mastery[cat].percentage}%` }}
              />
            </div>
            <span className="text-sm font-display w-10 text-right">{mastery[cat].percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Current Quest Card
const CurrentQuestCard = () => {
  const { currentQuest } = useGolfProgression();

  // Show placeholder if no quest
  if (!currentQuest) {
    return (
      <div className="quest-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[hsl(var(--gold))]" />
            Current Quest
          </h3>
        </div>

        <div className="text-center py-8 text-muted-foreground">
          <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="mb-4">No active quest</p>
          <Button variant="outline" size="sm">
            Start New Quest
          </Button>
        </div>
      </div>
    );
  }

  const progressPercent = (currentQuest.completedDays / 5) * 100;
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <div className="quest-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold flex items-center gap-2">
          <Target className="w-5 h-5 text-[hsl(var(--gold))]" />
          Current Quest
        </h3>
        <span className="text-sm text-muted-foreground">Week {currentQuest.weekNumber}</span>
      </div>

      <h4 className="font-display text-lg mb-2">{currentQuest.name}</h4>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-2 rounded-full bg-[hsl(var(--deep-space))] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--fairway-green))] to-[hsl(var(--gold))]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-sm font-display">{currentQuest.completedDays}/5</span>
      </div>

      <div className="flex justify-between mb-4">
        {currentQuest.missions.map((mission, i) => (
          <div
            key={mission.day}
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all',
              mission.status === 'completed' && 'bg-[hsl(var(--fairway-green))] border-[hsl(var(--fairway-green))] text-white',
              mission.status === 'available' && 'border-[hsl(var(--gold))] text-[hsl(var(--gold))] animate-pulse-gold',
              mission.status === 'locked' && 'border-border text-muted-foreground',
              mission.status === 'missed' && 'border-red-500/50 text-red-500/50'
            )}
          >
            {mission.status === 'completed' ? '✓' : days[i]}
          </div>
        ))}
      </div>

      <Button className="w-full bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90">
        <Play className="w-4 h-4 mr-2" />
        Start Today's Mission
      </Button>
    </div>
  );
};

// Quick Actions
const QuickActions = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const actions = [
    { label: 'Log Session', icon: BookOpen, view: 'golf-sessions', color: 'text-[hsl(var(--fairway-green))]' },
    { label: 'Swing Studio', icon: Video, view: 'golf-studio', color: 'text-blue-400' },
    { label: 'My Clubs', icon: Flag, view: 'golf-clubs', color: 'text-[hsl(var(--gold))]' },
    { label: 'Training Path', icon: TrendingUp, view: 'golf-path', color: 'text-purple-400' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => onNavigate(action.view)}
          className="workout-card flex items-center gap-3 hover:border-[hsl(var(--gold))]/50 transition-colors"
        >
          <div className={cn('p-2 rounded-lg bg-white/5', action.color)}>
            <action.icon className="w-5 h-5" />
          </div>
          <span className="font-semibold">{action.label}</span>
          <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
        </button>
      ))}
    </div>
  );
};

// Recent Activity
const RecentActivity = () => {
  const { xpHistory } = useGolfProgression();
  const recent = xpHistory.slice(-5).reverse();

  if (recent.length === 0) {
    return null;
  }

  return (
    <div className="workout-card">
      <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-[hsl(var(--gold))]" />
        Recent Activity
      </h3>

      <div className="space-y-3">
        {recent.map((event, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {event.description || event.source.replace(/_/g, ' ')}
            </span>
            <span className="font-display text-[hsl(var(--fairway-green))]">+{event.amount} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ Main Component ============

interface PlayerHubProps {
  onNavigate: (view: string) => void;
}

export const PlayerHub = ({ onNavigate }: PlayerHubProps) => {
  const { profile } = useGolfProgression();

  return (
    <div className="space-y-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">
            Welcome back, {profile?.displayName || 'Golfer'}
          </h1>
          <p className="text-muted-foreground">Ready to level up?</p>
        </div>
      </div>

      {/* XP Progress */}
      <XPProgressBar />

      {/* Stats Grid */}
      <StatsGrid />

      {/* Current Quest */}
      <CurrentQuestCard />

      {/* Quick Actions */}
      <div>
        <h3 className="font-display font-semibold mb-3">Quick Actions</h3>
        <QuickActions onNavigate={onNavigate} />
      </div>

      {/* Mastery Summary */}
      <MasterySummary />

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};

export default PlayerHub;
