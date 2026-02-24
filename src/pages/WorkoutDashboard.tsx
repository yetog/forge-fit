
import React from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { workoutTemplates } from "@/data/workoutTemplates";
import { Dumbbell, Flame, Trophy, Clock, ChevronRight, Zap } from "lucide-react";

interface Props {
  onStartWorkout: (templateId: string) => void;
  onNavigate: (tab: string) => void;
}

const WorkoutDashboard: React.FC<Props> = ({ onStartWorkout, onNavigate }) => {
  const { activeProfile, getProfileLogs, getStreak } = useWorkout();
  const logs = getProfileLogs();
  const streak = getStreak();
  const totalWorkouts = activeProfile?.totalWorkouts || 0;

  const recentLogs = [...logs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const quickStart = [
    { template: workoutTemplates.find(t => t.id === 'light-default')!, color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
    { template: workoutTemplates.find(t => t.id === 'fullbody-default')!, color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
  ];

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      {/* Hero greeting */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickStart.map(({ template, color, bg }) => (
            <button
              key={template.id}
              onClick={() => onStartWorkout(template.id)}
              className={`workout-card border ${bg} text-left hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className={`font-display text-base tracking-wide ${color}`}>{template.name}</div>
                  <div className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Clock size={14} /> ~{template.durationMinutes} min
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground" size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Muscle group workouts */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase">Isometric Focus</h2>
          <button onClick={() => onNavigate('workouts')} className="text-xs text-primary font-semibold hover:underline">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {workoutTemplates.filter(t => t.type === 'Isometric').map((template) => (
            <button
              key={template.id}
              onClick={() => onStartWorkout(template.id)}
              className="workout-card text-left hover:border-primary/30 transition-colors"
            >
              <Zap size={16} className="text-primary mb-1" />
              <div className="font-display text-sm tracking-wide text-foreground">{template.muscleGroup}</div>
              <div className="text-xs text-muted-foreground">{template.durationMinutes} min</div>
            </button>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default WorkoutDashboard;
