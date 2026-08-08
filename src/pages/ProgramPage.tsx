
import React, { useState } from "react";
import { programs } from "@/data/programs";
import { Program, Phase, ProgramDay } from "@/types/workout";
import { BookOpen, ChevronRight, ChevronDown, Dumbbell, Zap, Target, ArrowLeft, Check, Play, X, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import RestTimer from "@/components/RestTimer";

interface ExerciseProgress {
  label: string;
  sets: { weight: number; reps: number; completed: boolean }[];
}

interface DayProgress {
  dayKey: string;
  exercises: ExerciseProgress[];
  startedAt: Date;
  completedAt?: Date;
}

const phaseColors: Record<string, { accent: string; bg: string; border: string; badge: string; strip: string }> = {
  'phase-1-hypertrophy': {
    accent: 'text-blue-400',
    bg: 'bg-blue-400/5',
    border: 'border-blue-400/20',
    badge: 'bg-blue-400/15 text-blue-300',
    strip: 'from-blue-500 to-blue-600',
  },
  'phase-2-strength': {
    accent: 'text-amber-400',
    bg: 'bg-amber-400/5',
    border: 'border-amber-400/20',
    badge: 'bg-amber-400/15 text-amber-300',
    strip: 'from-amber-500 to-amber-600',
  },
  'phase-3-power': {
    accent: 'text-red-400',
    bg: 'bg-red-400/5',
    border: 'border-red-400/20',
    badge: 'bg-red-400/15 text-red-300',
    strip: 'from-red-500 to-red-600',
  },
};

const defaultColors = phaseColors['phase-1-hypertrophy'];

const phaseIcons = [Target, Dumbbell, Zap];

const ProgramPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  // Active tracking state
  const [activeDay, setActiveDay] = useState<{ dayKey: string; day: ProgramDay; phaseId: string } | null>(null);
  const [dayProgress, setDayProgress] = useState<DayProgress | null>(null);
  const [showRestTimer, setShowRestTimer] = useState(false);
  const [completedDays, setCompletedDays] = useState<Set<string>>(new Set());

  // Initialize progress for a day
  const startDay = (dayKey: string, day: ProgramDay, phaseId: string) => {
    const exercises: ExerciseProgress[] = day.exerciseBlocks.map(block => ({
      label: block.label,
      sets: Array.from({ length: parseInt(block.sets) || 3 }, () => ({
        weight: 0,
        reps: parseInt(block.reps) || 10,
        completed: false,
      })),
    }));

    setActiveDay({ dayKey, day, phaseId });
    setDayProgress({ dayKey, exercises, startedAt: new Date() });
    setExpandedDay(dayKey);
    toast.success(`Started ${day.label}`);
  };

  const updateSet = (exIdx: number, setIdx: number, field: 'weight' | 'reps', value: number) => {
    if (!dayProgress) return;

    setDayProgress(prev => {
      if (!prev) return prev;
      const newExercises = [...prev.exercises];
      newExercises[exIdx] = {
        ...newExercises[exIdx],
        sets: newExercises[exIdx].sets.map((s, i) =>
          i === setIdx ? { ...s, [field]: value } : s
        ),
      };
      return { ...prev, exercises: newExercises };
    });
  };

  const toggleSetComplete = (exIdx: number, setIdx: number) => {
    if (!dayProgress) return;

    const wasCompleted = dayProgress.exercises[exIdx].sets[setIdx].completed;

    setDayProgress(prev => {
      if (!prev) return prev;
      const newExercises = [...prev.exercises];
      newExercises[exIdx] = {
        ...newExercises[exIdx],
        sets: newExercises[exIdx].sets.map((s, i) =>
          i === setIdx ? { ...s, completed: !s.completed } : s
        ),
      };
      return { ...prev, exercises: newExercises };
    });

    // Show rest timer when completing a set
    if (!wasCompleted) {
      setShowRestTimer(true);
    }
  };

  const finishDay = () => {
    if (!activeDay || !dayProgress) return;

    setCompletedDays(prev => new Set([...prev, activeDay.dayKey]));
    setActiveDay(null);
    setDayProgress(null);
    setShowRestTimer(false);
    toast.success('Day complete! Great work! 🔥');
  };

  const cancelDay = () => {
    setActiveDay(null);
    setDayProgress(null);
    setShowRestTimer(false);
  };

  const getProgress = () => {
    if (!dayProgress) return { completed: 0, total: 0, percent: 0 };
    const total = dayProgress.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
    const completed = dayProgress.exercises.reduce((sum, ex) => sum + ex.sets.filter(s => s.completed).length, 0);
    return { completed, total, percent: total > 0 ? (completed / total) * 100 : 0 };
  };

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

  const colors = (id: string) => phaseColors[id] || defaultColors;
  const progress = getProgress();

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (activeDay) {
              cancelDay();
            }
            setSelectedProgram(null);
            setExpandedPhase(null);
            setExpandedDay(null);
          }}
          className="text-muted-foreground hover:text-foreground mb-3 -ml-2"
        >
          <ArrowLeft size={16} className="mr-1" /> Back to Programs
        </Button>
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">{selectedProgram.name}</h1>
        <p className="text-muted-foreground font-body text-lg">{selectedProgram.totalWeeks} weeks • {selectedProgram.phases.length} phases</p>
      </div>

      {/* Active Day Progress Bar */}
      {activeDay && (
        <div className="workout-card-gold mb-4 p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-sm text-muted-foreground">Active: </span>
              <span className="font-display text-foreground">{activeDay.day.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary font-display">{progress.completed}/{progress.total} sets</span>
              <Button variant="ghost" size="sm" onClick={cancelDay} className="text-destructive h-8 w-8 p-0">
                <X size={16} />
              </Button>
            </div>
          </div>
          <div className="status-bar">
            <div className="status-bar-fill gold-fill" style={{ width: `${progress.percent}%` }} />
          </div>
          {progress.completed > 0 && (
            <Button onClick={finishDay} className="w-full mt-3 font-display" size="sm">
              <Check size={16} className="mr-2" /> Finish Day ({progress.completed}/{progress.total})
            </Button>
          )}
        </div>
      )}

      {/* Rest Timer */}
      {showRestTimer && (
        <div className="mb-4">
          <RestTimer
            defaultDuration={90}
            onClose={() => setShowRestTimer(false)}
            onComplete={() => toast('Rest complete! Next set 💪')}
          />
        </div>
      )}

      <div className="space-y-4">
        {selectedProgram.phases.map((phase, pIdx) => {
          const PhaseIcon = phaseIcons[pIdx] || Target;
          const isExpanded = expandedPhase === phase.id;
          const c = colors(phase.id);

          return (
            <div key={phase.id} className={`rounded-xl border ${c.border} overflow-hidden transition-all`}>
              {/* Gradient accent strip */}
              <div className={`h-1.5 bg-gradient-to-r ${c.strip}`} />

              <button
                className={`w-full ${c.bg} px-5 py-4 md:py-5 flex items-center justify-between`}
                onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${c.badge} flex items-center justify-center`}>
                    <PhaseIcon size={20} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-display tracking-widest uppercase ${c.accent}`}>Phase {pIdx + 1}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.badge} font-semibold`}>{phase.weeks} weeks</span>
                    </div>
                    <div className="font-display text-base md:text-lg tracking-wider text-foreground mt-0.5">{phase.name.replace(/^Phase \d+ - /, '')}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{phase.focus}</div>
                  </div>
                </div>
                <ChevronDown size={18} className={`text-muted-foreground transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-2 mt-1">
                  {phase.days.map((day, dIdx) => {
                    const dayKey = `${phase.id}-${dIdx}`;
                    const isDayExpanded = expandedDay === dayKey;
                    const isActive = activeDay?.dayKey === dayKey;
                    const isCompleted = completedDays.has(dayKey);

                    return (
                      <div key={dayKey} className={`rounded-lg border ${isActive ? 'border-primary/50' : isCompleted ? 'border-green-500/30' : 'border-border'} bg-card/60 overflow-hidden`}>
                        <div
                          className="w-full flex items-center justify-between px-4 py-3 md:py-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                          onClick={() => setExpandedDay(isDayExpanded ? null : dayKey)}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-full ${isCompleted ? 'bg-green-500/20 text-green-400' : c.badge} flex items-center justify-center text-xs font-display`}>
                              {isCompleted ? <Check size={14} /> : (day.dayNumber || '⚡')}
                            </span>
                            <span className={`font-semibold text-sm md:text-base ${isCompleted ? 'text-muted-foreground' : 'text-foreground'}`}>{day.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {!isActive && !isCompleted && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 text-xs"
                                onClick={(e) => { e.stopPropagation(); startDay(dayKey, day, phase.id); }}
                              >
                                <Play size={12} className="mr-1" /> Start
                              </Button>
                            )}
                            {isActive && (
                              <span className="text-xs text-primary font-display">Active</span>
                            )}
                            <span className="text-[10px] text-muted-foreground">{day.exerciseBlocks.length} exercises</span>
                            <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 ${isDayExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>

                        {isDayExpanded && (
                          <div className="px-4 pb-4">
                            {/* Interactive exercise tracking when day is active */}
                            {isActive && dayProgress ? (
                              <div className="space-y-3">
                                {dayProgress.exercises.map((exProgress, exIdx) => {
                                  const block = day.exerciseBlocks[exIdx];
                                  const allSetsComplete = exProgress.sets.every(s => s.completed);

                                  return (
                                    <div key={exIdx} className={`workout-card p-3 ${allSetsComplete ? 'border-green-500/30 opacity-75' : ''}`}>
                                      <div className="flex items-center gap-2 mb-3">
                                        <span className={`w-6 h-6 rounded-full ${allSetsComplete ? 'bg-green-500/20 text-green-400' : c.badge} flex items-center justify-center text-xs font-display`}>
                                          {allSetsComplete ? <Check size={12} /> : block.label}
                                        </span>
                                        <span className="font-semibold text-foreground text-sm">{block.exerciseName}</span>
                                        {block.percentOf1RM && (
                                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${c.badge} font-semibold`}>
                                            {block.percentOf1RM}% 1RM
                                          </span>
                                        )}
                                      </div>

                                      {/* Set tracking grid */}
                                      <div className="grid grid-cols-[1fr_3fr_3fr_2fr] gap-2 text-xs text-muted-foreground font-semibold mb-2">
                                        <span>Set</span><span>Weight (lb)</span><span>Reps</span><span></span>
                                      </div>
                                      {exProgress.sets.map((set, setIdx) => (
                                        <div key={setIdx} className={`grid grid-cols-[1fr_3fr_3fr_2fr] gap-2 items-center mb-1.5 ${set.completed ? 'opacity-50' : ''}`}>
                                          <span className="text-sm text-muted-foreground font-display">{setIdx + 1}</span>
                                          <input
                                            type="number"
                                            value={set.weight || ''}
                                            onChange={(e) => updateSet(exIdx, setIdx, 'weight', Number(e.target.value))}
                                            placeholder="0"
                                            className="bg-secondary border border-border rounded px-2 py-1.5 text-sm text-foreground w-full"
                                          />
                                          <input
                                            type="number"
                                            value={set.reps}
                                            onChange={(e) => updateSet(exIdx, setIdx, 'reps', Number(e.target.value))}
                                            className="bg-secondary border border-border rounded px-2 py-1.5 text-sm text-foreground w-full"
                                          />
                                          <Button
                                            size="sm"
                                            variant={set.completed ? "default" : "outline"}
                                            className="h-8"
                                            onClick={() => toggleSetComplete(exIdx, setIdx)}
                                          >
                                            <Check size={14} />
                                          </Button>
                                        </div>
                                      ))}

                                      {/* Rest timer button */}
                                      {!showRestTimer && exProgress.sets.some(s => s.completed) && !allSetsComplete && (
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          className="w-full mt-2 text-muted-foreground hover:text-primary"
                                          onClick={() => setShowRestTimer(true)}
                                        >
                                          <Timer size={14} className="mr-2" /> Start Rest Timer
                                        </Button>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              /* Read-only view when day is not active */
                              <>
                                {/* Table header */}
                                <div className="grid grid-cols-[2.5rem_1fr_3rem_3.5rem_4rem] gap-1 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider px-1 mb-2 border-b border-border pb-2">
                                  <span></span><span>Exercise</span><span>Sets</span><span>Reps</span><span>Rest</span>
                                </div>

                                {/* Exercise blocks with superset grouping */}
                                {renderExerciseBlocks(day, c)}

                                {/* Weekly progression pills */}
                                {day.exerciseBlocks.some(b => b.weeklyProgression?.length) && (
                                  <div className="mt-4 pt-3 border-t border-border">
                                    <span className="text-[10px] font-display tracking-widest text-muted-foreground uppercase">Weekly Progression</span>
                                    <div className="mt-2 space-y-2">
                                      {day.exerciseBlocks.filter(b => b.weeklyProgression?.length).map(block => (
                                        <div key={block.label} className="flex items-start gap-2">
                                          <span className={`text-xs font-display ${c.accent} min-w-[1.5rem]`}>{block.label}</span>
                                          <div className="flex flex-wrap gap-1.5">
                                            {block.weeklyProgression!.map(wp => (
                                              <span
                                                key={wp.week}
                                                className={`text-[10px] px-2 py-1 rounded-full border ${c.border} ${c.bg} text-foreground font-medium`}
                                              >
                                                W{wp.week}: {wp.sets}×{wp.reps}{wp.percentOf1RM ? <span className={`ml-1 ${c.accent}`}>@{wp.percentOf1RM}%</span> : ''}
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Start button at bottom */}
                                {!isActive && !isCompleted && (
                                  <Button
                                    className="w-full mt-4 font-display"
                                    onClick={() => startDay(dayKey, day, phase.id)}
                                  >
                                    <Play size={16} className="mr-2" /> Start This Day
                                  </Button>
                                )}
                              </>
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

/** Renders exercise blocks with superset grouping */
function renderExerciseBlocks(day: ProgramDay, c: { accent: string; badge: string; border: string; bg: string }) {
  const blocks = day.exerciseBlocks;
  const rendered: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    // Detect superset: same letter prefix with different number suffix (A1/A2, B1/B2, etc.)
    const currentLabel = blocks[i].label;
    const letterPrefix = currentLabel.replace(/\d+$/, '');
    const hasNumber = /\d+$/.test(currentLabel);

    if (hasNumber) {
      // Collect all blocks with same letter prefix
      const supersetBlocks = [];
      while (i < blocks.length && blocks[i].label.replace(/\d+$/, '') === letterPrefix && /\d+$/.test(blocks[i].label)) {
        supersetBlocks.push(blocks[i]);
        i++;
      }

      if (supersetBlocks.length > 1) {
        // Render as superset group
        rendered.push(
          <div key={`ss-${letterPrefix}`} className={`rounded-lg border ${c.border} ${c.bg} p-1 mb-1`}>
            <div className={`text-[9px] font-display tracking-widest ${c.accent} uppercase px-2 py-1`}>Superset {letterPrefix}</div>
            {supersetBlocks.map((block, idx) => (
              <ExerciseRow key={block.label} block={block} c={c} isAlt={idx % 2 === 1} />
            ))}
          </div>
        );
      } else {
        // Single numbered block, render normally
        rendered.push(<ExerciseRow key={supersetBlocks[0].label} block={supersetBlocks[0]} c={c} isAlt={false} />);
      }
    } else {
      rendered.push(<ExerciseRow key={blocks[i].label} block={blocks[i]} c={c} isAlt={false} />);
      i++;
    }
  }

  return <div className="space-y-0.5">{rendered}</div>;
}

function ExerciseRow({ block, c, isAlt }: { block: any; c: any; isAlt: boolean }) {
  return (
    <div className={`grid grid-cols-[2.5rem_1fr_3rem_3.5rem_4rem] gap-1 items-center px-2 py-1.5 rounded text-sm ${isAlt ? 'bg-secondary/30' : ''}`}>
      <span className={`font-display text-xs ${c.accent}`}>{block.label}</span>
      <div>
        <span className="text-foreground">{block.exerciseName}</span>
        {block.percentOf1RM && (
          <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded ${c.badge} font-semibold`}>
            {block.percentOf1RM}% 1RM
          </span>
        )}
      </div>
      <span className="text-muted-foreground text-center">{block.sets}</span>
      <span className="text-muted-foreground text-center">{block.reps}</span>
      <span className="text-muted-foreground text-xs text-center">{block.rest || '-'}</span>
    </div>
  );
}

export default ProgramPage;
