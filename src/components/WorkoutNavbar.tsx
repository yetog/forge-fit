
import React from "react";
import { Home, Dumbbell, History, Apple, User, Menu } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface WorkoutNavbarProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

const WorkoutNavbar: React.FC<WorkoutNavbarProps> = ({ activeTab, onChangeTab }) => {
  const { activeProfile } = useWorkout();
  const [open, setOpen] = React.useState(false);

  const tabs = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "workouts", label: "Workouts", icon: Dumbbell },
    { id: "history", label: "History", icon: History },
    { id: "nutrition", label: "Nutrition", icon: Apple },
    { id: "profile", label: "Profile", icon: User },
  ];

  const handleTabChange = (tab: string) => {
    onChangeTab(tab);
    setOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              <span className="font-display text-base md:text-lg tracking-wider text-foreground">
                FORGE<span className="text-primary">FIT</span>
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 flex items-center gap-2 text-sm font-body font-semibold tracking-wide transition-colors rounded-md ${
                    activeTab === tab.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => onChangeTab(tab.id)}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Profile badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md border border-border">
              <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <User size={14} className="text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {activeProfile?.name || 'No Profile'}
              </span>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-card border-border">
                  <DrawerHeader>
                    <DrawerTitle className="font-display text-foreground tracking-wider">Navigation</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 pb-6 space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`w-full px-4 py-3 flex items-center gap-3 rounded-lg transition-colors font-body font-semibold ${
                          activeTab === tab.id
                            ? "bg-primary/15 text-primary border border-primary/25"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                        onClick={() => handleTabChange(tab.id)}
                      >
                        <tab.icon size={20} />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom tab bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border">
        <div className="flex justify-around items-center h-16 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => onChangeTab(tab.id)}
            >
              <tab.icon size={20} />
              <span className="text-[10px] font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkoutNavbar;
