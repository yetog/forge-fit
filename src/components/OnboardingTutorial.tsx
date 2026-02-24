
import React, { useState } from "react";
import { Dumbbell, Zap, TrendingUp, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onComplete: () => void;
}

const steps = [
  {
    icon: Dumbbell,
    title: "Welcome to ForgeFit",
    description: "Your premium workout companion. Track workouts, crush goals, and forge your best self.",
  },
  {
    icon: Zap,
    title: "Choose Your Workout",
    description: "Light sessions for busy days, Isometric focus for muscle groups, Full Body for compound work, Bodyweight for anywhere, or follow a structured Program.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Log sets, reps, and weight for every exercise. Build streaks, hit PRs, and watch your progress over time.",
  },
  {
    icon: Rocket,
    title: "Let's Go!",
    description: "You're all set. Start your first workout and begin forging your path.",
  },
];

const OnboardingTutorial: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="workout-card-gold max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 animate-pulse-gold">
            <Icon size={28} className="text-primary" />
          </div>
          <h2 className="font-display text-xl tracking-wider text-foreground">{current.title}</h2>
          <p className="text-muted-foreground mt-3 font-body text-sm leading-relaxed">{current.description}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === step ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2 justify-center">
          {step > 0 && (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="font-display tracking-wider">
              Back
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button onClick={() => setStep(step + 1)} className="font-display tracking-wider">
              Next
            </Button>
          ) : (
            <Button onClick={onComplete} className="font-display tracking-wider">
              Get Started
            </Button>
          )}
        </div>

        {step < steps.length - 1 && (
          <button onClick={onComplete} className="text-xs text-muted-foreground mt-4 hover:text-foreground transition-colors">
            Skip tutorial
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingTutorial;
