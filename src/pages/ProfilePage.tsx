
import React, { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { User, Plus, Trash2, Flame, Dumbbell, Trophy, ArrowRightLeft, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const ProfilePage: React.FC = () => {
  const { profiles, activeProfile, createProfile, switchProfile, deleteProfile, goals, addGoal, updateGoal, deleteGoal } = useWorkout();
  const [newName, setNewName] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [goalUnit, setGoalUnit] = useState('');

  const profileGoals = goals.filter(g => g.profileId === activeProfile?.id);

  const handleCreate = () => {
    if (!newName.trim()) return;
    createProfile(newName.trim());
    setNewName('');
    setShowCreate(false);
    toast.success('Profile created!');
  };

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
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">Profile</h1>
      </div>

      {/* Active profile card */}
      {activeProfile && (
        <div className="workout-card-gold mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center animate-pulse-gold">
              <User size={28} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl tracking-wider text-foreground">{activeProfile.name}</h2>
              <p className="text-xs text-muted-foreground">
                Member since {new Date(activeProfile.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { icon: Dumbbell, label: 'Workouts', value: activeProfile.totalWorkouts },
              { icon: Flame, label: 'Current Streak', value: `${activeProfile.currentStreak}d` },
              { icon: Trophy, label: 'Best Streak', value: `${activeProfile.longestStreak}d` },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-3 bg-secondary/50 rounded-lg border border-border">
                <stat.icon size={18} className="text-primary mx-auto mb-1" />
                <div className="font-display text-lg text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Goals Section */}
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
            <Input
              value={goalTitle}
              onChange={(e) => setGoalTitle(e.target.value)}
              placeholder="Goal title (e.g. Bench 200 lbs)"
              className="bg-secondary"
              autoFocus
            />
            <div className="flex gap-2">
              <Input
                type="number"
                value={goalTarget}
                onChange={(e) => setGoalTarget(e.target.value)}
                placeholder="Target"
                className="bg-secondary"
              />
              <Input
                value={goalUnit}
                onChange={(e) => setGoalUnit(e.target.value)}
                placeholder="Unit (lbs, workouts...)"
                className="bg-secondary"
              />
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                      onClick={() => { deleteGoal(goal.id); toast.success('Goal removed'); }}
                    >
                      <Trash2 size={12} />
                    </Button>
                  </div>
                </div>
                <Progress value={pct} className="h-2" />
                <div className="flex gap-1 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => {
                      const newVal = goal.current + 1;
                      updateGoal(goal.id, { current: newVal, completed: newVal >= goal.target });
                      if (newVal >= goal.target) toast.success('🎉 Goal achieved!');
                    }}
                  >
                    +1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => {
                      const input = prompt('Set current progress:', String(goal.current));
                      if (input !== null) {
                        const val = Number(input);
                        if (!isNaN(val)) updateGoal(goal.id, { current: val, completed: val >= goal.target });
                      }
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All profiles */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase">All Profiles</h2>
          <Button variant="outline" size="sm" onClick={() => setShowCreate(true)} className="font-display text-xs tracking-wider">
            <Plus size={14} className="mr-1" /> New
          </Button>
        </div>

        {showCreate && (
          <div className="workout-card mb-3 flex gap-2">
            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Profile name..."
              className="bg-secondary"
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              autoFocus
            />
            <Button onClick={handleCreate} size="sm">Create</Button>
            <Button variant="ghost" size="sm" onClick={() => setShowCreate(false)}>Cancel</Button>
          </div>
        )}

        <div className="space-y-2">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`workout-card flex items-center justify-between ${
                profile.id === activeProfile?.id ? 'border-primary/30' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  profile.id === activeProfile?.id ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                }`}>
                  <User size={16} />
                </div>
                <div>
                  <span className="font-semibold text-foreground">{profile.name}</span>
                  <div className="text-xs text-muted-foreground">{profile.totalWorkouts} workouts</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {profile.id !== activeProfile?.id && (
                  <Button variant="ghost" size="sm" onClick={() => switchProfile(profile.id)}>
                    <ArrowRightLeft size={14} />
                  </Button>
                )}
                {profiles.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      deleteProfile(profile.id);
                      toast.success('Profile deleted');
                    }}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 size={14} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
