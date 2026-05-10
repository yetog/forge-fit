
import React, { useState, useEffect } from "react";
import { WorkoutProvider, useWorkout } from "@/context/WorkoutContext";
import { GolfProvider } from "@/context/GolfContext";
import WorkoutNavbar from "@/components/WorkoutNavbar";
import WorkoutDashboard from "@/pages/WorkoutDashboard";
import WorkoutPage from "@/pages/WorkoutPage";
import WorkoutHistory from "@/pages/WorkoutHistory";
import NutritionPage from "@/pages/NutritionPage";
import ProfilePage from "@/pages/ProfilePage";
import ProgramPage from "@/pages/ProgramPage";
import SportsPage from "@/pages/SportsPage";
import GolfDashboard from "@/pages/GolfDashboard";
import GolfClubs from "@/pages/GolfClubs";
import GolfSessions from "@/pages/GolfSessions";
import GolfMissCorrection from "@/pages/GolfMissCorrection";
import GolfTrainingPath from "@/pages/GolfTrainingPath";
import OnboardingTutorial from "@/components/OnboardingTutorial";
import { getTemplateById } from "@/data/workoutTemplates";
import { wkGet, wkSet, WK_KEYS } from "@/utils/workoutStorage";
import { Dumbbell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Onboarding = ({ onProfileCreated }: { onProfileCreated: () => void }) => {
  const { createProfile } = useWorkout();
  const [newName, setNewName] = useState('');

  const handleCreate = () => {
    if (!newName.trim()) return;
    createProfile(newName.trim());
    onProfileCreated();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background bg-forge-grid">
      <div className="workout-card-gold max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 animate-pulse-gold">
            <Dumbbell size={32} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
            FORGE<span className="text-primary">FIT</span>
          </h1>
          <p className="text-muted-foreground mt-2 font-body text-lg">Your premium workout companion</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Create your profile to get started</p>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name..."
            className="bg-secondary text-center font-body text-lg"
            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            autoFocus
          />
          <Button onClick={handleCreate} className="w-full font-display tracking-wider" size="lg" disabled={!newName.trim()}>
            <Plus size={18} className="mr-2" /> Create Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

const MainApp = () => {
  const { profiles, startWorkout } = useWorkout();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showTutorial, setShowTutorial] = useState(false);
  const [sportsView, setSportsView] = useState<string>('hub');

  // Reset sports view when leaving sports tab
  useEffect(() => {
    if (activeTab !== 'sports') {
      setSportsView('hub');
    }
  }, [activeTab]);

  if (profiles.length === 0) {
    return (
      <Onboarding onProfileCreated={() => {
        const done = wkGet(WK_KEYS.ONBOARDING_COMPLETE, false);
        if (!done) setShowTutorial(true);
      }} />
    );
  }

  const handleStartWorkout = (templateId: string) => {
    const template = getTemplateById(templateId);
    if (template) {
      startWorkout(template);
      setActiveTab('workouts');
    }
  };

  const handleTutorialComplete = () => {
    wkSet(WK_KEYS.ONBOARDING_COMPLETE, true);
    setShowTutorial(false);
  };

  return (
    <div className="min-h-screen bg-background bg-forge-grid">
      {showTutorial && <OnboardingTutorial onComplete={handleTutorialComplete} />}
      <WorkoutNavbar activeTab={activeTab} onChangeTab={setActiveTab} />
      <div className="py-2 md:py-4">
        {activeTab === "dashboard" && (
          <WorkoutDashboard onStartWorkout={handleStartWorkout} onNavigate={setActiveTab} />
        )}
        {activeTab === "workouts" && <WorkoutPage onNavigate={setActiveTab} />}
        {activeTab === "programs" && <ProgramPage />}
        {activeTab === "sports" && (
          <GolfProvider>
            {sportsView === 'hub' && (
              <SportsPage onSelectSport={(sport) => {
                if (sport === 'golf') setSportsView('golf-dashboard');
              }} />
            )}
            {sportsView === 'golf-dashboard' && (
              <GolfDashboard
                onNavigate={setSportsView}
                onBack={() => setSportsView('hub')}
              />
            )}
            {sportsView === 'golf-clubs' && (
              <GolfClubs onBack={() => setSportsView('golf-dashboard')} />
            )}
            {sportsView === 'golf-sessions' && (
              <GolfSessions onBack={() => setSportsView('golf-dashboard')} />
            )}
            {sportsView === 'golf-miss' && (
              <GolfMissCorrection onBack={() => setSportsView('golf-dashboard')} />
            )}
            {sportsView === 'golf-path' && (
              <GolfTrainingPath onBack={() => setSportsView('golf-dashboard')} />
            )}
          </GolfProvider>
        )}
        {activeTab === "history" && <WorkoutHistory />}
        {activeTab === "nutrition" && <NutritionPage />}
        {activeTab === "profile" && <ProfilePage />}
      </div>
    </div>
  );
};

const Index = () => (
  <WorkoutProvider>
    <MainApp />
  </WorkoutProvider>
);

export default Index;
