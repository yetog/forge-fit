
import React, { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { Plus, Trash2, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const ProfileGoals: React.FC = () => {
  const { activeProfile, goals, addGoal, updateGoal, deleteGoal } = useWorkout();
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [goalUnit, setGoalUnit] = useState('');

  const profileGoals = goals.filter(g => g.profileId === activeProfile?.id);

  const handleAddGoal = () => {
    if (!goalTitle.trim() || !goalTarget) return;
    addGoal({ title: goalTitle.trim(), target: Number(goalTarget), current: 0, unit: goalUnit || 'times' });
    setGoalTitle('');
    setGoalTarget('');
    setGoalUnit('');
    setShowGoalForm(false);
    toast.success('Goal added!');
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase flex items-center gap-2">
          <Target size={14} className="text-primary" /> Goals
        </h2>
        <Button variant="outline" size="sm" onClick={() => setShowGoalForm(true)} className="font-display text-xs tracking-wider">
          <Plus size={14} className="mr-1" /> Add Goal
        </Button>
      </div>

      {showGoalForm && (
        <div className="workout-card mb-3 space-y-2">
          <Input value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} placeholder="Goal title (e.g. Bench 200 lbs)" className="bg-secondary" autoFocus />
          <div className="flex gap-2">
            <Input type="number" value={goalTarget} onChange={(e) => setGoalTarget(e.target.value)} placeholder="Target" className="bg-secondary" />
            <Input value={goalUnit} onChange={(e) => setGoalUnit(e.target.value)} placeholder="Unit (lbs, workouts...)" className="bg-secondary" />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleAddGoal} size="sm" disabled={!goalTitle.trim() || !goalTarget}>Add</Button>
            <Button variant="ghost" size="sm" onClick={() => setShowGoalForm(false)}>Cancel</Button>
          </div>
        </div>
      )}

      {profileGoals.length === 0 && !showGoalForm && (
        <p className="text-sm text-muted-foreground">No goals yet. Set a target to stay motivated!</p>
      )}

      <div className="space-y-2">
        {profileGoals.map(goal => {
          const pct = goal.target > 0 ? Math.min((goal.current / goal.target) * 100, 100) : 0;
          return (
            <div key={goal.id} className={`workout-card ${goal.completed ? 'border-primary/30' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {goal.completed && <Check size={14} className="text-primary" />}
                  <span className={`font-semibold text-sm ${goal.completed ? 'text-primary' : 'text-foreground'}`}>{goal.title}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">{goal.current}/{goal.target} {goal.unit}</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive" onClick={() => { deleteGoal(goal.id); toast.success('Goal removed'); }}>
                    <Trash2 size={12} />
                  </Button>
                </div>
              </div>
              <Progress value={pct} className="h-2" />
              <div className="flex gap-1 mt-2">
                <Button variant="outline" size="sm" className="h-6 text-xs" onClick={() => {
                  const newVal = goal.current + 1;
                  updateGoal(goal.id, { current: newVal, completed: newVal >= goal.target });
                  if (newVal >= goal.target) toast.success('🎉 Goal achieved!');
                }}>+1</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs" onClick={() => {
                  const input = prompt('Set current progress:', String(goal.current));
                  if (input !== null) {
                    const val = Number(input);
                    if (!isNaN(val)) updateGoal(goal.id, { current: val, completed: val >= goal.target });
                  }
                }}>Edit</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileGoals;
