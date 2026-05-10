
import React from 'react';
import {
  Target,
  Clock,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Flame,
  ArrowLeft,
} from 'lucide-react';
import { useGolf } from '@/context/GolfContext';
import { getMissCorrection } from '@/data/golfMissPatterns';
import { Button } from '@/components/ui/button';

interface GolfDashboardProps {
  onNavigate: (view: string) => void;
  onBack: () => void;
}

const GolfDashboard: React.FC<GolfDashboardProps> = ({ onNavigate, onBack }) => {
  const {
    profile,
    getRecentSessions,
    getMostCommonMiss,
    getTotalPracticeTime,
    getClubConfidenceAverage,
    trainingProgress,
  } = useGolf();

  const recentSessions = getRecentSessions(3);
  const commonMiss = getMostCommonMiss();
  const missCorrection = commonMiss ? getMissCorrection(commonMiss) : null;
  const currentPhase = trainingProgress.find((p) => p.id === profile.currentPhase);

  const formatPracticeTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <ArrowLeft size={20} className="text-muted-foreground" />
        </button>
        <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
          <Target className="text-primary" size={20} />
        </div>
        <div>
          <h1 className="font-display text-xl md:text-2xl text-foreground tracking-wider">
            GOLF TRAINING
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Phase:{' '}
            <span className="text-primary capitalize">{currentPhase?.name || profile.currentPhase}</span>
          </p>
        </div>
      </div>

      {/* Current Focus */}
      <div className="workout-card p-4 mb-4 border-primary/30">
        <div className="text-xs text-muted-foreground mb-1">TODAY'S FOCUS</div>
        <div className="font-display text-lg text-primary">{profile.currentFocus}</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="workout-card text-center py-3">
          <div className="font-display text-xl text-foreground">{profile.totalSessions}</div>
          <div className="text-[10px] text-muted-foreground">Sessions</div>
        </div>
        <div className="workout-card text-center py-3">
          <div className="font-display text-xl text-foreground flex items-center justify-center gap-1">
            {profile.currentStreak}
            {profile.currentStreak > 0 && <Flame size={14} className="text-primary" />}
          </div>
          <div className="text-[10px] text-muted-foreground">Streak</div>
        </div>
        <div className="workout-card text-center py-3">
          <div className="font-display text-xl text-foreground">
            {formatPracticeTime(getTotalPracticeTime())}
          </div>
          <div className="text-[10px] text-muted-foreground">Practice</div>
        </div>
        <div className="workout-card text-center py-3">
          <div className="font-display text-xl text-foreground">
            {getClubConfidenceAverage() || '-'}
          </div>
          <div className="text-[10px] text-muted-foreground">Confidence</div>
        </div>
      </div>

      {/* Phase Progress */}
      {currentPhase && (
        <div className="workout-card p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Phase Progress</span>
            <span className="text-sm text-primary font-display">{currentPhase.progress}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${currentPhase.progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{currentPhase.goal}</p>
        </div>
      )}

      {/* Common Miss Alert */}
      {commonMiss && missCorrection && (
        <div className="workout-card p-4 mb-4 border-yellow-500/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-400 mt-0.5 flex-shrink-0" size={18} />
            <div className="flex-1">
              <div className="text-sm text-yellow-400 font-semibold capitalize">
                Common Miss: {commonMiss}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {missCorrection.likelyCause}
              </div>
              <div className="text-sm text-foreground mt-2">
                Cue: "{missCorrection.correctionCue}"
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="space-y-2 mb-6">
        <Button
          onClick={() => onNavigate('golf-sessions')}
          className="w-full justify-between bg-primary hover:bg-primary/90"
        >
          <span className="font-display tracking-wide">Log Practice Session</span>
          <ChevronRight size={18} />
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => onNavigate('golf-clubs')}
            variant="outline"
            className="justify-between"
          >
            <span>My Clubs</span>
            <ChevronRight size={16} />
          </Button>

          <Button
            onClick={() => onNavigate('golf-path')}
            variant="outline"
            className="justify-between"
          >
            <span>Training Path</span>
            <ChevronRight size={16} />
          </Button>
        </div>

        <Button
          onClick={() => onNavigate('golf-miss')}
          variant="outline"
          className="w-full justify-between"
        >
          <span>Miss Corrections</span>
          <ChevronRight size={18} />
        </Button>
      </div>

      {/* Recent Sessions */}
      {recentSessions.length > 0 && (
        <div>
          <h3 className="font-display text-sm text-muted-foreground mb-3">RECENT SESSIONS</h3>
          <div className="space-y-2">
            {recentSessions.map((session) => (
              <div key={session.id} className="workout-card p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-foreground font-semibold">{session.focus}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(session.date).toLocaleDateString()} • {session.duration} min
                      {session.location && ` • ${session.location}`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary font-display">+{session.xpEarned} XP</div>
                    <div className="text-xs text-muted-foreground">
                      Confidence: {session.confidence}/10
                    </div>
                  </div>
                </div>
                {session.whatImproved && (
                  <div className="mt-2 text-xs text-muted-foreground border-t border-border pt-2">
                    <span className="text-primary">Improved:</span> {session.whatImproved}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {recentSessions.length === 0 && (
        <div className="workout-card p-8 text-center">
          <Target className="mx-auto mb-3 text-muted-foreground" size={32} />
          <h3 className="font-display text-foreground mb-1">No Sessions Yet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Start logging your practice sessions to track your progress.
          </p>
          <Button onClick={() => onNavigate('golf-sessions')} className="bg-primary">
            Log Your First Session
          </Button>
        </div>
      )}
    </div>
  );
};

export default GolfDashboard;
