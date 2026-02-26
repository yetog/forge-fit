
import React, { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { User, Plus, Trash2, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ProfileList: React.FC = () => {
  const { profiles, activeProfile, createProfile, switchProfile, deleteProfile } = useWorkout();
  const [newName, setNewName] = useState('');
  const [showCreate, setShowCreate] = useState(false);

  const handleCreate = () => {
    if (!newName.trim()) return;
    createProfile(newName.trim());
    setNewName('');
    setShowCreate(false);
    toast.success('Profile created!');
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase">All Profiles</h2>
        <Button variant="outline" size="sm" onClick={() => setShowCreate(true)} className="font-display text-xs tracking-wider">
          <Plus size={14} className="mr-1" /> New
        </Button>
      </div>

      {showCreate && (
        <div className="workout-card mb-3 flex gap-2">
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Profile name..." className="bg-secondary" onKeyDown={(e) => e.key === 'Enter' && handleCreate()} autoFocus />
          <Button onClick={handleCreate} size="sm">Create</Button>
          <Button variant="ghost" size="sm" onClick={() => setShowCreate(false)}>Cancel</Button>
        </div>
      )}

      <div className="space-y-2">
        {profiles.map((profile) => (
          <div key={profile.id} className={`workout-card flex items-center justify-between ${profile.id === activeProfile?.id ? 'border-primary/30' : ''}`}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center overflow-hidden ${profile.id === activeProfile?.id ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                {profile.avatarUrl ? (
                  <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={16} />
                )}
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
                <Button variant="ghost" size="sm" onClick={() => { deleteProfile(profile.id); toast.success('Profile deleted'); }} className="text-destructive hover:text-destructive">
                  <Trash2 size={14} />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
