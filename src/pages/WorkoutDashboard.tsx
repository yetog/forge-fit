
import React, { useState, useEffect } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { workoutTemplates, workoutTypeConfig } from "@/data/workoutTemplates";
import { programs } from "@/data/programs";
import { Dumbbell, Flame, Trophy, Clock, ChevronRight, Zap, BookOpen, Heart, Sun, User, ClipboardPaste, Trash2 } from "lucide-react";
import WorkoutPasteModal from "@/components/WorkoutPasteModal";
import { wkGet, wkSet, WK_KEYS } from "@/utils/workoutStorage";
import { Button } from "@/components/ui/button";

interface CustomWorkout {
  id: string;
  name: string;
  exercises: { name: string; sets: number; reps: string; weight?: string }[];
  createdAt: string;
}

interface Props {
  onStartWorkout: (templateId: string) => void;
  onNavigate: (tab: string) => void;
}

const typeIcons: Record<string, React.ElementType> = {
  Light: Sun, Bodyweight: User, Isometric: Zap, FullBody: Dumbbell, Cardio: Heart, Core: Flame,
};

const WorkoutDashboard: React.FC<Props> = ({ onStartWorkout, onNavigate }) => {
  const { activeProfile, getProfileLogs, getStreak } = useWorkout();
  const logs = getProfileLogs();
  const streak = getStreak();
  const totalWorkouts = activeProfile?.totalWorkouts || 0;

  const [showPasteModal, setShowPasteModal] = useState(false);
  const [customWorkouts, setCustomWorkouts] = useState<CustomWorkout[]>(() =>
    wkGet(WK_KEYS.CUSTOM_WORKOUTS, [])
  );

  useEffect(() => {
    wkSet(WK_KEYS.CUSTOM_WORKOUTS, customWorkouts);
  }, [customWorkouts]);

  const handleWorkoutCreated = (workout: { name: string; exercises: { name: string; sets: number; reps: string; weight?: string }[] }) => {
    const newWorkout: CustomWorkout = {
      id: crypto.randomUUID(),
      name: workout.name,
      exercises: workout.exercises,
      createdAt: new Date().toISOString(),
    };
    setCustomWorkouts(prev => [newWorkout, ...prev]);
  };

  const deleteCustomWorkout = (id: string) => {
    setCustomWorkouts(prev => prev.filter(w => w.id !== id));
  };

  const recentLogs = [...logs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const quickStart = [
    { template: workoutTemplates.find(t => t.id === 'light-default')!, color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
    { template: workoutTemplates.find(t => t.id === 'bodyweight-blast')!, color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
    { template: workoutTemplates.find(t => t.id === 'fullbody-default')!, color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
    { template: workoutTemplates.find(t => t.id === 'cardio-focus')!, color: 'text-rose-400', bg: 'bg-rose-400/10 border-rose-400/20' },
    { template: workoutTemplates.find(t => t.id === 'ab-burner')!, color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
  ];

  // Dynamic workout type sections (exclude types already in quick start individually)
  const typeSections = Object.entries(
    workoutTemplates.reduce<Record<string, typeof workoutTemplates>>((acc, t) => {
      if (!acc[t.type]) acc[t.type] = [];
      acc[t.type].push(t);
      return acc;
    }, {})
  ).filter(([_, templates]) => templates.length > 1); // Only show sections with multiple templates

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6 md:py-10">
        <h1 className="font-display text-2xl md:text-4xl tracking-wider text-foreground">
          Welcome back, <span className="text-primary">{activeProfile?.name || 'Athlete'}</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg mt-1">Ready to forge your next session?</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { icon: Flame, label: 'Streak', value: `${streak}d`, color: 'text-orange-400' },
          { icon: Dumbbell, label: 'Workouts', value: totalWorkouts, color: 'text-primary' },
          { icon: Trophy, label: 'Best Streak', value: `${activeProfile?.longestStreak || 0}d`, color: 'text-yellow-400' },
        ].map((stat) => (
          <div key={stat.label} className="workout-card text-center py-4">
            <stat.icon className={`mx-auto mb-1 ${stat.color}`} size={22} />
            <div className="font-display text-lg md:text-xl text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Start */}
      <div className="mb-8">
        <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase mb-3">Quick Start</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {quickStart.filter(q => q.template).map(({ template, color, bg }) => (
            <button
              key={template.id}
              onClick={() => onStartWorkout(template.id)}
              className={`workout-card border ${bg} text-left hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className={`font-display text-sm tracking-wide ${color}`}>{template.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Clock size={12} /> ~{template.durationMinutes} min
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={18} />
              </div>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          onClick={() => setShowPasteModal(true)}
          className="w-full mt-3 border-dashed border-primary/30 text-primary hover:bg-primary/10"
        >
          <ClipboardPaste size={16} className="mr-2" />
          Import Custom Workout
        </Button>
      </div>

      {/* Custom Workouts */}
      {customWorkouts.length > 0 && (
        <div className="mb-8">
          <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase mb-3">Your Custom Workouts</h2>
          <div className="space-y-2">
            {customWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="workout-card-gold flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="font-display text-sm tracking-wider text-foreground">{workout.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {workout.exercises.length} exercises • {workout.exercises.map(e => e.name).slice(0, 2).join(', ')}
                    {workout.exercises.length > 2 && '...'}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-destructive h-8 w-8 p-0"
                    onClick={() => deleteCustomWorkout(workout.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Programs */}
      {programs.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase">Programs</h2>
            <button onClick={() => onNavigate('programs')} className="text-xs text-primary font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-2">
            {programs.map(program => (
              <button
                key={program.id}
                onClick={() => onNavigate('programs')}
                className="workout-card-gold w-full text-left hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-primary" />
                    <div>
                      <div className="font-display text-sm tracking-wider text-foreground">{program.name}</div>
                      <div className="text-xs text-muted-foreground">{program.totalWeeks} weeks • {program.phases.length} phases</div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic workout type sections */}
      {typeSections.map(([type, templates]) => {
        const config = workoutTypeConfig[type];
        const Icon = typeIcons[type] || Zap;
        return (
          <div key={type} className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase">{config?.label || type} Focus</h2>
              <button onClick={() => onNavigate('workouts')} className="text-xs text-primary font-semibold hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => onStartWorkout(template.id)}
                  className="workout-card text-left hover:border-primary/30 transition-colors"
                >
                  <Icon size={16} className={config?.color || 'text-primary'} />
                  <div className="font-display text-sm tracking-wide text-foreground mt-1">{template.muscleGroup || template.name}</div>
                  <div className="text-xs text-muted-foreground">{template.durationMinutes} min</div>
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {/* Recent activity */}
      {recentLogs.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase">Recent Activity</h2>
            <button onClick={() => onNavigate('history')} className="text-xs text-primary font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-2">
            {recentLogs.map((log) => {
              const template = workoutTemplates.find(t => t.id === log.templateId);
              return (
                <div key={log.id} className="workout-card flex items-center justify-between py-3">
                  <div>
                    <div className="font-semibold text-foreground">{template?.name || log.type}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(log.date).toLocaleDateString()} • {log.exercises.filter(e => e.completed).length}/{log.exercises.length} exercises
                    </div>
                  </div>
                  {log.completed && <span className="text-xs text-primary font-display tracking-wider">COMPLETED</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <WorkoutPasteModal
        open={showPasteModal}
        onClose={() => setShowPasteModal(false)}
        onWorkoutCreated={handleWorkoutCreated}
      />
    </div>
  );
};

export default WorkoutDashboard;
