import React from 'react';
import { Timer, Play, Pause, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRestTimer } from '@/hooks/useRestTimer';

interface RestTimerProps {
  onClose: () => void;
  onComplete?: () => void;
  defaultDuration?: number;
}

const PRESET_TIMES = [
  { label: '30s', seconds: 30 },
  { label: '60s', seconds: 60 },
  { label: '90s', seconds: 90 },
  { label: '2m', seconds: 120 },
  { label: '3m', seconds: 180 },
];

const RestTimer: React.FC<RestTimerProps> = ({
  onClose,
  onComplete,
  defaultDuration = 90
}) => {
  const timer = useRestTimer({
    defaultDuration,
    onComplete: () => {
      onComplete?.();
    }
  });

  const handlePresetClick = (seconds: number) => {
    timer.start(seconds);
  };

  return (
    <div className="bg-secondary/50 border border-primary/20 rounded-lg p-4 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-primary">
          <Timer size={18} />
          <span className="font-display text-sm tracking-wider">REST TIMER</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
          onClick={onClose}
        >
          <X size={14} />
        </Button>
      </div>

      {/* Timer Display */}
      <div className="text-center mb-4">
        <div className={`font-display text-4xl tracking-wider transition-colors ${
          timer.timeRemaining <= 10 && timer.isRunning ? 'text-destructive animate-pulse' : 'text-foreground'
        }`}>
          {timer.formatTime(timer.timeRemaining)}
        </div>

        {/* Progress bar */}
        {timer.isRunning && (
          <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear"
              style={{ width: `${100 - timer.progress}%` }}
            />
          </div>
        )}

        {timer.timeRemaining === 0 && !timer.isRunning && (
          <div className="text-primary font-semibold mt-2 animate-pulse">
            Time's up! Let's go! 💪
          </div>
        )}
      </div>

      {/* Preset buttons */}
      {!timer.isRunning && (
        <div className="flex gap-2 justify-center mb-3 flex-wrap">
          {PRESET_TIMES.map(({ label, seconds }) => (
            <Button
              key={seconds}
              variant="outline"
              size="sm"
              className={`h-8 px-3 ${timer.duration === seconds ? 'border-primary text-primary' : ''}`}
              onClick={() => handlePresetClick(seconds)}
            >
              {label}
            </Button>
          ))}
        </div>
      )}

      {/* Control buttons */}
      <div className="flex gap-2 justify-center">
        {!timer.isRunning && timer.timeRemaining > 0 && (
          <Button
            onClick={() => timer.start()}
            className="flex-1 max-w-[120px]"
          >
            <Play size={16} className="mr-1" /> Start
          </Button>
        )}

        {timer.isRunning && !timer.isPaused && (
          <Button
            onClick={timer.pause}
            variant="secondary"
            className="flex-1 max-w-[120px]"
          >
            <Pause size={16} className="mr-1" /> Pause
          </Button>
        )}

        {timer.isRunning && timer.isPaused && (
          <Button
            onClick={timer.resume}
            className="flex-1 max-w-[120px]"
          >
            <Play size={16} className="mr-1" /> Resume
          </Button>
        )}

        {(timer.isRunning || timer.timeRemaining === 0) && (
          <Button
            onClick={() => timer.reset()}
            variant="outline"
            className="flex-1 max-w-[120px]"
          >
            <RotateCcw size={16} className="mr-1" /> Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default RestTimer;
