/**
 * Golf Onboarding Flow
 * 7-screen onboarding based on ONBOARDING_SPEC.md
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  GolfGoal,
  PracticeFrequency,
  GolfStruggle,
  HandDominance,
  HandicapRange,
  OnboardingData,
} from '@/types/golfProgression';
import { useGolfProgression } from '@/context/GolfProgressionContext';
import {
  Target,
  TrendingUp,
  Trophy,
  Zap,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  ArrowDownLeft,
  Crosshair,
  Ruler,
  Flag,
  Circle,
  Brain,
  TargetIcon,
  Bell,
  BellOff,
  User,
  ChevronLeft,
} from 'lucide-react';

// ============ Step Components ============

interface StepProps {
  onNext: () => void;
  onBack?: () => void;
  data: Partial<OnboardingData>;
  setData: (updates: Partial<OnboardingData>) => void;
}

// Step 1: Welcome
const WelcomeStep = ({ onNext }: StepProps) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
    <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-[hsl(var(--fairway-green))] to-[hsl(var(--gold))] flex items-center justify-center animate-pulse-gold">
      <Target className="w-12 h-12 text-black" />
    </div>

    <h1 className="font-display text-4xl font-bold mb-4 text-white">
      Forge Your Game
    </h1>

    <p className="text-muted-foreground text-lg max-w-sm mb-2">
      The RPG of golf improvement.
    </p>
    <p className="text-muted-foreground max-w-sm mb-8">
      Every practice session. Every round. Every swing.
      <br />
      They all count toward becoming the golfer you want to be.
    </p>

    <Button
      size="lg"
      onClick={onNext}
      className="bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90 text-white font-display text-lg px-8"
    >
      Begin Your Journey
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  </div>
);

// Step 2: Goal Selection
const GOALS: { value: GolfGoal; label: string; description: string; icon: React.ReactNode }[] = [
  { value: 'break100', label: 'Break 100', description: "I'm new to golf and want to get comfortable on the course.", icon: <Target className="w-6 h-6" /> },
  { value: 'break90', label: 'Break 90', description: "I can play, but I want to be consistently in the 80s.", icon: <TrendingUp className="w-6 h-6" /> },
  { value: 'break80', label: 'Break 80', description: "I'm ready to take my game to the next level.", icon: <Trophy className="w-6 h-6" /> },
  { value: 'scratch', label: 'Scratch', description: "Single digits or bust. I'm here to compete.", icon: <Zap className="w-6 h-6" /> },
];

const GoalStep = ({ onNext, onBack, data, setData }: StepProps) => (
  <div className="flex flex-col min-h-[80vh] px-6 py-8">
    <button onClick={onBack} className="self-start text-muted-foreground hover:text-white mb-4">
      <ChevronLeft className="w-6 h-6" />
    </button>

    <h1 className="font-display text-2xl font-bold mb-2">What's your mission?</h1>
    <p className="text-muted-foreground mb-8">Choose the goal that drives you. You can change this anytime.</p>

    <div className="grid grid-cols-2 gap-4 mb-8">
      {GOALS.map((goal) => (
        <button
          key={goal.value}
          onClick={() => setData({ goal: goal.value })}
          className={cn(
            'onboarding-option flex flex-col items-center text-center p-6',
            data.goal === goal.value && 'selected'
          )}
        >
          <div className="mb-3 text-[hsl(var(--gold))]">{goal.icon}</div>
          <span className="font-display font-semibold text-white">{goal.label}</span>
          <span className="text-xs text-muted-foreground mt-2">{goal.description}</span>
        </button>
      ))}
    </div>

    <Button
      size="lg"
      onClick={onNext}
      disabled={!data.goal}
      className="mt-auto bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90"
    >
      Continue
    </Button>
  </div>
);

// Step 3: Practice Frequency
const FREQUENCIES: { value: PracticeFrequency; label: string }[] = [
  { value: 'daily', label: 'Every day' },
  { value: 'frequent', label: '4-5 times per week' },
  { value: 'regular', label: '2-3 times per week' },
  { value: 'weekly', label: 'Once a week' },
  { value: 'occasional', label: 'A few times a month' },
];

const FrequencyStep = ({ onNext, onBack, data, setData }: StepProps) => (
  <div className="flex flex-col min-h-[80vh] px-6 py-8">
    <button onClick={onBack} className="self-start text-muted-foreground hover:text-white mb-4">
      <ChevronLeft className="w-6 h-6" />
    </button>

    <h1 className="font-display text-2xl font-bold mb-2">How often do you practice?</h1>
    <p className="text-muted-foreground mb-8">Be honest — we'll build a plan that fits your life.</p>

    <div className="flex flex-col gap-3 mb-8">
      {FREQUENCIES.map((freq) => (
        <button
          key={freq.value}
          onClick={() => setData({ frequency: freq.value })}
          className={cn(
            'onboarding-option flex items-center justify-between',
            data.frequency === freq.value && 'selected'
          )}
        >
          <span className="font-semibold">{freq.label}</span>
          {data.frequency === freq.value && (
            <div className="w-5 h-5 rounded-full bg-[hsl(var(--fairway-green))] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </button>
      ))}
    </div>

    <Button
      size="lg"
      onClick={onNext}
      disabled={!data.frequency}
      className="mt-auto bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90"
    >
      Continue
    </Button>
  </div>
);

// Step 4: Biggest Struggle
const STRUGGLES: { value: GolfStruggle; label: string; icon: React.ReactNode; response: string }[] = [
  { value: 'slice', label: 'Slice', icon: <ArrowUpRight className="w-6 h-6" />, response: "You're not alone. We'll get that ball flight straightened out." },
  { value: 'hook', label: 'Hook', icon: <ArrowDownLeft className="w-6 h-6" />, response: "A hook means you have speed. Let's get it under control." },
  { value: 'contact', label: 'Poor Contact', icon: <Crosshair className="w-6 h-6" />, response: "Center contact is everything. We'll build it." },
  { value: 'distance', label: 'No Distance', icon: <Ruler className="w-6 h-6" />, response: "Distance comes from efficiency. We'll find your power." },
  { value: 'shortgame', label: 'Short Game', icon: <Flag className="w-6 h-6" />, response: "This is where scores are made. Let's sharpen it." },
  { value: 'putting', label: 'Putting', icon: <Circle className="w-6 h-6" />, response: "The flatstick. Where rounds are won and lost." },
  { value: 'mental', label: 'Mental Game', icon: <Brain className="w-6 h-6" />, response: "Golf is 90% mental. We'll work on the headspace." },
  { value: 'consistency', label: 'Consistency', icon: <TargetIcon className="w-6 h-6" />, response: "Some days great, some days chaos? We'll fix that." },
];

const StruggleStep = ({ onNext, onBack, data, setData }: StepProps) => {
  const [showResponse, setShowResponse] = useState(false);
  const selectedStruggle = STRUGGLES.find(s => s.value === data.struggle);

  const handleSelect = (value: GolfStruggle) => {
    setData({ struggle: value });
    setShowResponse(true);
    setTimeout(() => {
      setShowResponse(false);
      onNext();
    }, 1500);
  };

  if (showResponse && selectedStruggle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="w-16 h-16 mb-6 rounded-full bg-[hsl(var(--fairway-green))]/20 flex items-center justify-center text-[hsl(var(--fairway-green))]">
          {selectedStruggle.icon}
        </div>
        <p className="text-lg text-white max-w-sm animate-fade-in">{selectedStruggle.response}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[80vh] px-6 py-8">
      <button onClick={onBack} className="self-start text-muted-foreground hover:text-white mb-4">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <h1 className="font-display text-2xl font-bold mb-2">What's holding you back?</h1>
      <p className="text-muted-foreground mb-8">Everyone has something. Let's work on yours.</p>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {STRUGGLES.map((struggle) => (
          <button
            key={struggle.value}
            onClick={() => handleSelect(struggle.value)}
            className={cn(
              'onboarding-option flex flex-col items-center py-6',
              data.struggle === struggle.value && 'selected'
            )}
          >
            <div className="mb-2 text-[hsl(var(--gold))]">{struggle.icon}</div>
            <span className="font-semibold text-sm">{struggle.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Step 5: Profile Setup
const AVATARS = [
  { id: 1, style: 'silhouette-neutral', color: 'text-gray-400' },
  { id: 2, style: 'silhouette-green', color: 'text-[hsl(var(--fairway-green))]' },
  { id: 3, style: 'silhouette-blue', color: 'text-blue-400' },
  { id: 4, style: 'initials', color: 'bg-[hsl(var(--gold))]' },
  { id: 5, style: 'golf-ball', color: 'text-white' },
  { id: 6, style: 'flag', color: 'text-red-500' },
  { id: 7, style: 'driver', color: 'text-gray-300' },
  { id: 8, style: 'abstract', color: 'text-[hsl(var(--fairway-green))]' },
];

const HANDICAPS: { value: HandicapRange; label: string }[] = [
  { value: 'new', label: 'New to golf' },
  { value: '30+', label: '30+' },
  { value: '20-29', label: '20-29' },
  { value: '10-19', label: '10-19' },
  { value: '5-9', label: '5-9' },
  { value: '0-4', label: '0-4 (Scratch or better)' },
];

const ProfileStep = ({ onNext, onBack, data, setData }: StepProps) => (
  <div className="flex flex-col min-h-[80vh] px-6 py-8">
    <button onClick={onBack} className="self-start text-muted-foreground hover:text-white mb-4">
      <ChevronLeft className="w-6 h-6" />
    </button>

    <h1 className="font-display text-2xl font-bold mb-2">Set up your profile</h1>
    <p className="text-muted-foreground mb-6">The basics. Takes 30 seconds.</p>

    {/* Avatar Selection */}
    <div className="mb-6">
      <label className="text-sm text-muted-foreground mb-3 block">Choose an avatar</label>
      <div className="grid grid-cols-4 gap-3">
        {AVATARS.map((avatar) => (
          <button
            key={avatar.id}
            onClick={() => setData({ avatarId: avatar.id })}
            className={cn(
              'w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all',
              data.avatarId === avatar.id
                ? 'border-[hsl(var(--fairway-green))] scale-110'
                : 'border-border hover:border-[hsl(var(--gold))]/50'
            )}
          >
            <User className={cn('w-8 h-8', avatar.color)} />
          </button>
        ))}
      </div>
    </div>

    {/* Display Name */}
    <div className="mb-6">
      <label className="text-sm text-muted-foreground mb-2 block">What should we call you?</label>
      <Input
        value={data.displayName || ''}
        onChange={(e) => setData({ displayName: e.target.value.slice(0, 20) })}
        placeholder="Enter your name"
        className="bg-[hsl(var(--deep-space))] border-border"
        maxLength={20}
      />
    </div>

    {/* Dominant Hand */}
    <div className="mb-6">
      <label className="text-sm text-muted-foreground mb-2 block">Dominant hand</label>
      <div className="flex gap-3">
        {(['right', 'left'] as HandDominance[]).map((hand) => (
          <button
            key={hand}
            onClick={() => setData({ dominantHand: hand })}
            className={cn(
              'flex-1 py-3 rounded-lg border-2 font-semibold capitalize transition-all',
              data.dominantHand === hand
                ? 'border-[hsl(var(--fairway-green))] bg-[hsl(var(--fairway-green))]/10'
                : 'border-border hover:border-[hsl(var(--gold))]/50'
            )}
          >
            {hand}
          </button>
        ))}
      </div>
    </div>

    {/* Handicap */}
    <div className="mb-8">
      <label className="text-sm text-muted-foreground mb-2 block">Current handicap (optional)</label>
      <select
        value={data.handicapRange || ''}
        onChange={(e) => setData({ handicapRange: e.target.value as HandicapRange })}
        className="w-full p-3 rounded-lg bg-[hsl(var(--deep-space))] border border-border text-white"
      >
        <option value="">Select...</option>
        {HANDICAPS.map((h) => (
          <option key={h.value} value={h.value}>{h.label}</option>
        ))}
      </select>
    </div>

    <Button
      size="lg"
      onClick={onNext}
      disabled={!data.displayName || !data.avatarId || !data.dominantHand}
      className="mt-auto bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90"
    >
      Almost Done
    </Button>
  </div>
);

// Step 6: Notifications
const NotificationStep = ({ onNext, data, setData, onBack }: StepProps) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
    <button onClick={onBack} className="absolute top-8 left-6 text-muted-foreground hover:text-white">
      <ChevronLeft className="w-6 h-6" />
    </button>

    <div className="w-20 h-20 mb-8 rounded-2xl bg-[hsl(var(--deep-space))] flex items-center justify-center">
      <Bell className="w-10 h-10 text-[hsl(var(--gold))]" />
    </div>

    <h1 className="font-display text-2xl font-bold mb-2">Stay on track</h1>
    <p className="text-muted-foreground max-w-sm mb-8">
      We'll remind you when it's time to practice.
      <br />
      No spam. Just a nudge when you need it.
    </p>

    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Button
        size="lg"
        onClick={() => {
          setData({ notificationsEnabled: true });
          onNext();
        }}
        className="bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90"
      >
        <Bell className="w-5 h-5 mr-2" />
        Allow Notifications
      </Button>
      <Button
        size="lg"
        variant="ghost"
        onClick={() => {
          setData({ notificationsEnabled: false });
          onNext();
        }}
        className="text-muted-foreground"
      >
        Maybe Later
      </Button>
    </div>
  </div>
);

// Step 7: Ready
const ReadyStep = ({ data, onComplete }: { data: OnboardingData; onComplete: () => void }) => {
  const goalLabels: Record<GolfGoal, string> = {
    break100: 'Break 100',
    break90: 'Break 90',
    break80: 'Break 80',
    scratch: 'Scratch',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-[hsl(var(--fairway-green))] to-[hsl(var(--gold))] flex items-center justify-center animate-level-up">
        <User className="w-12 h-12 text-black" />
      </div>

      <h1 className="font-display text-3xl font-bold mb-2">
        You're in, {data.displayName}.
      </h1>

      <p className="text-muted-foreground mb-8">
        Level 1. The journey begins.
        <br />
        Your first quest is waiting.
      </p>

      <div className="bg-[hsl(var(--deep-space))] rounded-lg p-6 mb-8 w-full max-w-xs">
        <div className="flex justify-between mb-3">
          <span className="text-muted-foreground">Level</span>
          <span className="font-display font-bold text-[hsl(var(--gold))]">1</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-muted-foreground">XP</span>
          <span className="font-display">0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Goal</span>
          <span className="font-semibold text-[hsl(var(--fairway-green))]">{goalLabels[data.goal]}</span>
        </div>
      </div>

      <Button
        size="lg"
        onClick={onComplete}
        className="bg-[hsl(var(--fairway-green))] hover:bg-[hsl(var(--fairway-green))]/90 font-display text-lg px-8"
      >
        Start Training
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
};

// ============ Main Onboarding Component ============

export const GolfOnboarding = () => {
  const { completeOnboarding } = useGolfProgression();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<OnboardingData>>({
    dominantHand: 'right',
    avatarId: 1,
    handicapRange: 'new',
  });

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const handleComplete = () => {
    if (data.goal && data.frequency && data.struggle && data.displayName) {
      completeOnboarding(data as OnboardingData);
    }
  };

  const stepProps: StepProps = {
    onNext: () => setStep(s => s + 1),
    onBack: () => setStep(s => s - 1),
    data,
    setData: updateData,
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--void-black))] text-white relative">
      {/* Progress indicator */}
      {step > 0 && step < 7 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={cn(
                'w-8 h-1 rounded-full transition-all',
                s <= step ? 'bg-[hsl(var(--fairway-green))]' : 'bg-border'
              )}
            />
          ))}
        </div>
      )}

      {step === 0 && <WelcomeStep {...stepProps} />}
      {step === 1 && <GoalStep {...stepProps} />}
      {step === 2 && <FrequencyStep {...stepProps} />}
      {step === 3 && <StruggleStep {...stepProps} />}
      {step === 4 && <ProfileStep {...stepProps} />}
      {step === 5 && <NotificationStep {...stepProps} />}
      {step === 6 && <ReadyStep data={data as OnboardingData} onComplete={handleComplete} />}
    </div>
  );
};

export default GolfOnboarding;
