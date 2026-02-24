
import React, { useState } from "react";
import { programs } from "@/data/programs";
import { Program, Phase, ProgramDay } from "@/types/workout";
import { BookOpen, ChevronRight, ChevronDown, Dumbbell, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  if (!selectedProgram) {
    return (
      <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
        <div className="py-6">
          <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">Programs</h1>
          <p className="text-muted-foreground font-body text-lg">Structured training plans</p>
        </div>
        <div className="space-y-3">
          {programs.map(program => (
            <button
              key={program.id}
              onClick={() => { setSelectedProgram(program); setExpandedPhase(program.phases[0]?.id || null); }}
              className="workout-card-gold w-full text-left hover:scale-[1.01] transition-transform"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <BookOpen size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-lg tracking-wider text-foreground">{program.name}</div>
                    <div className="text-sm text-muted-foreground">{program.totalWeeks} weeks • {program.phases.length} phases</div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mt-3">{program.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const phaseIcons = [Target, Dumbbell, Zap];

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <Button variant="ghost" size="sm" onClick={() => setSelectedProgram(null)} className="text-muted-foreground mb-2">
          ← Back to Programs
        </Button>
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">{selectedProgram.name}</h1>
        <p className="text-muted-foreground font-body">{selectedProgram.totalWeeks} weeks total</p>
      </div>

      <div className="space-y-3">
        {selectedProgram.phases.map((phase, pIdx) => {
          const PhaseIcon = phaseIcons[pIdx] || Target;
          const isExpanded = expandedPhase === phase.id;

          return (
            <div key={phase.id} className="workout-card">
              <button
                className="w-full flex items-center justify-between py-1"
                onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
              >
                <div className="flex items-center gap-3">
                  <PhaseIcon size={20} className="text-primary" />
                  <div className="text-left">
                    <div className="font-display text-base tracking-wider text-foreground">{phase.name}</div>
                    <div className="text-xs text-muted-foreground">{phase.weeks} weeks • {phase.focus}</div>
                  </div>
                </div>
                <ChevronDown size={16} className={`text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="mt-4 space-y-2">
                  {phase.days.map((day, dIdx) => {
                    const dayKey = `${phase.id}-${dIdx}`;
                    const isDayExpanded = expandedDay === dayKey;

                    return (
                      <div key={dayKey} className="bg-secondary/50 rounded-lg border border-border p-3">
                        <button
                          className="w-full flex items-center justify-between"
                          onClick={() => setExpandedDay(isDayExpanded ? null : dayKey)}
                        >
                          <span className="font-semibold text-foreground text-sm">{day.label}</span>
                          <ChevronDown size={14} className={`text-muted-foreground transition-transform ${isDayExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isDayExpanded && (
                          <div className="mt-3 space-y-1">
                            <div className="grid grid-cols-[2rem_1fr_3rem_3rem_4rem] gap-1 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider px-1 mb-1">
                              <span></span><span>Exercise</span><span>Sets</span><span>Reps</span><span>Rest</span>
                            </div>
                            {day.exerciseBlocks.map((block, bIdx) => (
                              <div key={bIdx} className="grid grid-cols-[2rem_1fr_3rem_3rem_4rem] gap-1 items-center px-1 text-sm">
                                <span className="text-primary font-display text-xs">{block.label}</span>
                                <span className="text-foreground">{block.exerciseName}</span>
                                <span className="text-muted-foreground">{block.sets}</span>
                                <span className="text-muted-foreground">{block.reps}</span>
                                <span className="text-muted-foreground text-xs">{block.rest || '-'}</span>
                              </div>
                            ))}
                            {day.exerciseBlocks.some(b => b.percentOf1RM) && (
                              <div className="mt-2 text-[10px] text-muted-foreground">
                                {day.exerciseBlocks.filter(b => b.percentOf1RM).map(b => (
                                  <span key={b.label} className="mr-3">{b.label} @ {b.percentOf1RM}% 1RM</span>
                                ))}
                              </div>
                            )}
                            {day.exerciseBlocks.some(b => b.weeklyProgression?.length) && (
                              <details className="mt-2">
                                <summary className="text-[10px] text-primary cursor-pointer font-semibold">Weekly Progression</summary>
                                <div className="mt-1 space-y-1">
                                  {day.exerciseBlocks.filter(b => b.weeklyProgression?.length).map(block => (
                                    <div key={block.label} className="text-[10px] text-muted-foreground">
                                      <span className="text-primary font-display">{block.label}</span>{' '}
                                      {block.weeklyProgression!.map(wp => (
                                        <span key={wp.week} className="mr-2">
                                          W{wp.week}: {wp.sets}×{wp.reps}{wp.percentOf1RM ? ` @${wp.percentOf1RM}%` : ''}
                                        </span>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </details>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramPage;
