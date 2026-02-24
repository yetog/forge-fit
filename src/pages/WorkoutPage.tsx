import React, { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { workoutTemplates, getTemplateById } from "@/data/workoutTemplates";
import { getExerciseById } from "@/data/exercises";
import { SetLog } from "@/types/workout";
import { Dumbbell, Clock, ChevronRight, Check, X, Play, Zap, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
  onNavigate: (tab: string) => void;
}

const WorkoutPage: React.FC<Props> = ({ onNavigate }) => {
  const { activeWorkout, startWorkout, completeExercise, finishWorkout, cancelWorkout } = useWorkout();

  // If active workout, show exercise view
  if (activeWorkout) {
    return <ActiveWorkoutView onNavigate={onNavigate} />;
  }

  // Otherwise show workout selection
  const grouped = {
    Light: workoutTemplates.filter(t => t.type === 'Light'),
    Isometric: workoutTemplates.filter(t => t.type === 'Isometric'),
    FullBody: workoutTemplates.filter(t => t.type === 'FullBody'),
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">Workouts</h1>
        <p className="text-muted-foreground font-body text-lg">Choose your session</p>
      </div>

      {Object.entries(grouped).map(([type, templates]) => (
        <div key={type} className="mb-8">
          <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase mb-3">{type}</h2>
          <div className="space-y-2">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => startWorkout(template)}
                className="workout-card w-full text-left hover:border-primary/30 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Dumbbell size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{template.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Clock size={12} /> {template.durationMinutes} min • {template.exercises.length} exercises
                    </div>
                  </div>
                </div>
                <Play size={18} className="text-primary" />
              </button>
            ))
            }
          </div>
        </div>
      ))
      }
    </div>
  );
};

const ActiveWorkoutView: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { activeWorkout, completeExercise, finishWorkout, cancelWorkout } = useWorkout();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  if (!activeWorkout) return null;

  const template = getTemplateById(activeWorkout.templateId);
  const completedCount = activeWorkout.exercises.filter(e => e.completed).length;
  const totalCount = activeWorkout.exercises.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const handleSetUpdate = (exIdx: number, setIdx: number, field: 'reps' | 'weight', value: number) => {
    const ex = activeWorkout.exercises[exIdx];
    const newSets = ex.sets.map((s, i) => i === setIdx ? { ...s, [field]: value } : s);
    completeExercise(exIdx, newSets);
  };

  const handleCompleteSet = (exIdx: number, setIdx: number) => {
    const ex = activeWorkout.exercises[exIdx];
    const newSets = ex.sets.map((s, i) => i === setIdx ? { ...s, completed: !s.completed } : s);
    const allDone = newSets.every(s => s.completed);
    if (allDone) {
      completeExercise(exIdx, newSets);
      // Auto-advance to next exercise
      const nextIdx = activeWorkout.exercises.findIndex((e, i) => i > exIdx && !e.completed);
      if (nextIdx !== -1) setExpandedIdx(nextIdx);
      toast.success('Exercise complete!');
    } else {
      completeExercise(exIdx, newSets);
    }
  };

  const handleFinish = () => {
    finishWorkout();
    toast.success('Workout complete! 🔥');
    onNavigate('dashboard');
  };

  return (
    <div className="container max-w-3xl mx-auto px-4 pb-24 md:pb-8">
      {/* Header */}
      <div className="py-4 flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl md:text-2xl tracking-wider text-foreground">
            {template?.name || activeWorkout.type}
          </h1>
          <div className="text-sm text-muted-foreground">{completedCount}/{totalCount} exercises done</div>
        </div>
        <Button variant="ghost" size="sm" onClick={cancelWorkout} className="text-destructive">
          <X size={16} className="mr-1" /> Cancel
        </Button>
      </div>

      {/* Progress bar */}
      <div className="status-bar mb-6">
        <div className="status-bar-fill gold-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Exercise list */}
      <div className="space-y-2">
        {activeWorkout.exercises.map((exLog, idx) => {
          const exercise = getExerciseById(exLog.exerciseId);
          if (!exercise) return null;
          const isExpanded = expandedIdx === idx;

          return (
            <div
              key={idx}
              className={`workout-card transition-all ${exLog.completed ? 'border-primary/30 opacity-75' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between py-1"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display ${
                    exLog.completed ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                  }`}>
                    {exLog.completed ? <Check size={16} /> : idx + 1}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">{exercise.name}</div>
                    <div className="text-xs text-muted-foreground">{exercise.muscleGroup}</div>
                  </div>
                </div>
                <ChevronRight size={16} className={`text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>

              {isExpanded && !exercise.isCardio && exLog.sets.length > 0 && (
                <div className="mt-3 space-y-2">
                  <div className="grid grid-cols-[1fr_3fr_3fr_2fr] gap-2 text-xs text-muted-foreground font-semibold px-1">
                    <span>Set</span><span>Weight (lb)</span><span>Reps</span><span></span>
                  </div>
                  {exLog.sets.map((set, sIdx) => (
                    <div key={sIdx} className={`grid grid-cols-[1fr_3fr_3fr_2fr] gap-2 items-center px-1 ${set.completed ? 'opacity-50' : ''}`}>
                      <span className="text-sm text-muted-foreground font-display">{sIdx + 1}</span>
                      <input
                        type="number"
                        value={set.weight}
                        onChange={(e) => handleSetUpdate(idx, sIdx, 'weight', Number(e.target.value))}
                        className="bg-secondary border border-border rounded px-2 py-1.5 text-sm text-foreground w-full"
                      />
                      <input
                        type="number"
                        value={set.reps}
                        onChange={(e) => handleSetUpdate(idx, sIdx, 'reps', Number(e.target.value))}
                        className="bg-secondary border border-border rounded px-2 py-1.5 text-sm text-foreground w-full"
                      />
                      <Button
                        size="sm"
                        variant={set.completed ? "default" : "outline"}
                        className="h-8"
                        onClick={() => handleCompleteSet(idx, sIdx)}
                      >
                        <Check size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {isExpanded && (exercise.isCardio || exercise.durationMinutes) && exLog.sets.length === 0 && (
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{exercise.durationMinutes} min</span>
                  <Button
                    size="sm"
                    variant={exLog.completed ? "default" : "outline"}
                    onClick={() => {
                      completeExercise(idx, []);
                      const nextIdx = activeWorkout.exercises.findIndex((e, i) => i > idx && !e.completed);
                      if (nextIdx !== -1) setExpandedIdx(nextIdx);
                      toast.success('Done!');
                    }}
                  >
                    {exLog.completed ? 'Completed' : 'Mark Done'}
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Finish button */}
      <div className="mt-6">
        <Button
          className="w-full font-display tracking-wider"
          size="lg"
          onClick={handleFinish}
          disabled={completedCount === 0}
        >
          Finish Workout ({completedCount}/{totalCount})
        </Button>
      </div>
    </div>
  );
};

export default WorkoutPage;
