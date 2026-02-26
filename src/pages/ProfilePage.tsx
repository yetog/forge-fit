
import React, { useState, useRef } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { User, Plus, Trash2, Flame, Dumbbell, Trophy, ArrowRightLeft, Target, Check, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import ProfileGoals from "@/components/profile/ProfileGoals";
import ProfileList from "@/components/profile/ProfileList";

const ProfilePage: React.FC = () => {
  const { profiles, activeProfile, createProfile, switchProfile, deleteProfile, updateProfileAvatar } = useWorkout();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be under 5MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      updateProfileAvatar(dataUrl);
      toast.success('Profile photo updated!');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">Profile</h1>
      </div>

      {/* Active profile card */}
      {activeProfile && (
        <div className="workout-card-gold mb-8">
          <div className="flex flex-col items-center text-center gap-3 pb-4">
            {/* Large avatar area */}
            <div
              className="relative w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center cursor-pointer group overflow-hidden"
              onClick={() => fileInputRef.current?.click()}
            >
              {activeProfile.avatarUrl ? (
                <img
                  src={activeProfile.avatarUrl}
                  alt={activeProfile.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <User size={40} className="text-primary" />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={20} className="text-white" />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
            <div>
              <h2 className="font-display text-xl tracking-wider text-foreground">{activeProfile.name}</h2>
              <p className="text-xs text-muted-foreground">
                Member since {new Date(activeProfile.createdAt).toLocaleDateString()}
              </p>
              <button
                className="text-xs text-primary mt-1 hover:underline"
                onClick={() => fileInputRef.current?.click()}
              >
                {activeProfile.avatarUrl ? 'Change photo' : 'Add photo'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-2">
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

      <ProfileGoals />
      <ProfileList />
    </div>
  );
};

export default ProfilePage;
