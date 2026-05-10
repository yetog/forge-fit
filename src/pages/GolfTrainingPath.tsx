
import React from 'react';
import { ArrowLeft, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { useGolf } from '@/context/GolfContext';
import { getDrillsByPhase } from '@/data/golfDrills';
import { TrainingPhase } from '@/types/golf';
import { Button } from '@/components/ui/button';

interface GolfTrainingPathProps {
  onBack: () => void;
}

const GolfTrainingPath: React.FC<GolfTrainingPathProps> = ({ onBack }) => {
  const { trainingProgress, profile, completePhase } = useGolf();

  const getPhaseIcon = (phase: typeof trainingProgress[0]) => {
    if (phase.completed) {
      return <CheckCircle className="text-green-400" size={24} />;
    }
    if (!phase.unlocked) {
      return <Lock className="text-muted-foreground" size={24} />;
    }
    return (
      <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
    );
  };

  const handleCompletePhase = (phaseId: TrainingPhase) => {
    completePhase(phaseId);
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <ArrowLeft size={20} className="text-muted-foreground" />
        </button>
        <div>
          <h1 className="font-display text-xl md:text-2xl text-foreground tracking-wider">
            TRAINING PATH
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Your progression journey
          </p>
        </div>
      </div>

      {/* Current Phase Indicator */}
      <div className="workout-card p-4 mb-6 border-primary/30">
        <div className="text-xs text-muted-foreground mb-1">CURRENT PHASE</div>
        <div className="font-display text-lg text-primary capitalize">
          {trainingProgress.find((p) => p.id === profile.currentPhase)?.name || profile.currentPhase}
        </div>
      </div>

      {/* Phase Cards */}
      <div className="space-y-4">
        {trainingProgress.map((phase, index) => {
          const drills = getDrillsByPhase(phase.id);
          const isActive = phase.id === profile.currentPhase;
          const canComplete = isActive && phase.progress >= 100 && !phase.completed;

          return (
            <div
              key={phase.id}
              className={`workout-card p-4 ${
                !phase.unlocked ? 'opacity-50' : ''
              } ${isActive ? 'border-primary/30' : ''}`}
            >
              {/* Phase Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1">{getPhaseIcon(phase)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">PHASE {index + 1}</span>
                    {isActive && !phase.completed && (
                      <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded">
                        Active
                      </span>
                    )}
                    {phase.completed && (
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                        Complete
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg text-foreground">{phase.name}</h3>
                  <p className="text-sm text-primary mt-1">{phase.goal}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>

              {/* Progress Bar */}
              {phase.unlocked && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-display">{phase.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        phase.completed ? 'bg-green-400' : 'bg-primary'
                      }`}
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Recommended Clubs */}
              {phase.unlocked && (
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">RECOMMENDED CLUBS</div>
                  <div className="flex flex-wrap gap-1">
                    {phase.clubs.map((club) => (
                      <span
                        key={club}
                        className="text-xs px-2 py-1 bg-secondary rounded text-foreground"
                      >
                        {club.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills to Develop */}
              {phase.unlocked && (
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">SKILLS TO DEVELOP</div>
                  <div className="flex flex-wrap gap-1">
                    {phase.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-primary/10 border border-primary/20 rounded text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Drills Preview */}
              {phase.unlocked && drills.length > 0 && (
                <div className="border-t border-border pt-3 mt-3">
                  <div className="text-xs text-muted-foreground mb-2">
                    PRACTICE DRILLS ({drills.length})
                  </div>
                  <div className="space-y-2">
                    {drills.slice(0, 3).map((drill) => (
                      <div
                        key={drill.id}
                        className="flex items-center justify-between bg-secondary/50 rounded px-3 py-2"
                      >
                        <div>
                          <div className="text-sm text-foreground">{drill.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {drill.reps} reps • "{drill.cue}"
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-muted-foreground" />
                      </div>
                    ))}
                    {drills.length > 3 && (
                      <div className="text-xs text-muted-foreground text-center pt-1">
                        +{drills.length - 3} more drills
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Complete Phase Button */}
              {canComplete && (
                <Button
                  onClick={() => handleCompletePhase(phase.id)}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle size={18} className="mr-2" />
                  Complete Phase & Unlock Next
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {/* Philosophy */}
      <div className="mt-8 workout-card p-4">
        <h3 className="font-display text-sm text-muted-foreground mb-2">PROGRESSION PHILOSOPHY</h3>
        <p className="text-sm text-foreground/80">
          Master each phase before moving on. <span className="text-primary">Contact before distance</span>,{' '}
          <span className="text-primary">distance before shaping</span>. This builds a solid foundation
          that compounds over time.
        </p>
      </div>
    </div>
  );
};

export default GolfTrainingPath;
