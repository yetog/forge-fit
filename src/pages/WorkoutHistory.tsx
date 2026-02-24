
import React from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { workoutTemplates } from "@/data/workoutTemplates";
import { Calendar, Dumbbell, Clock } from "lucide-react";

const WorkoutHistory: React.FC = () => {
  const { getProfileLogs } = useWorkout();
  const logs = [...getProfileLogs()].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">History</h1>
        <p className="text-muted-foreground font-body text-lg">{logs.length} workouts logged</p>
      </div>

      {logs.length === 0 ? (
        <div className="workout-card text-center py-12">
          <Dumbbell className="mx-auto text-muted-foreground mb-3" size={32} />
          <p className="text-muted-foreground">No workouts yet. Start your first session!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {logs.map((log) => {
            const template = workoutTemplates.find(t => t.id === log.templateId);
            const completed = log.exercises.filter(e => e.completed).length;
            return (
              <div key={log.id} className="workout-card">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-base tracking-wide text-foreground">
                      {template?.name || log.type}
                    </div>
                    {log.muscleGroup && (
                      <span className="text-xs text-primary font-semibold">{log.muscleGroup}</span>
                    )}
                    <div className="text-xs text-muted-foreground mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(log.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {log.durationMinutes} min</span>
                      <span>{completed}/{log.exercises.length} exercises</span>
                    </div>
                  </div>
                  {log.completed && (
                    <span className="text-xs font-display text-primary tracking-wider bg-primary/10 px-2 py-1 rounded">DONE</span>
                  )}
                </div>
                {log.notes && <p className="text-xs text-muted-foreground mt-2 border-t border-border pt-2">{log.notes}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WorkoutHistory;
