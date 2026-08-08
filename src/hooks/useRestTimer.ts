import { useState, useEffect, useCallback, useRef } from 'react';

interface UseRestTimerOptions {
  defaultDuration?: number; // in seconds
  onComplete?: () => void;
}

interface UseRestTimerReturn {
  timeRemaining: number;
  isRunning: boolean;
  isPaused: boolean;
  duration: number;
  progress: number; // 0-100
  start: (seconds?: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  reset: (seconds?: number) => void;
  formatTime: (seconds: number) => string;
}

export function useRestTimer(options: UseRestTimerOptions = {}): UseRestTimerReturn {
  const { defaultDuration = 90, onComplete } = options;

  const [duration, setDuration] = useState(defaultDuration);
  const [timeRemaining, setTimeRemaining] = useState(defaultDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on mount
  useEffect(() => {
    // Create audio context for timer completion sound
    audioRef.current = new Audio();
    audioRef.current.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQUAPJXh16NhBQBAndXWo18DAACU2tahYAQAAJXb16FdAwAAnNnWoF4EAACe2tagXQMAA' +
      'J7Z1p9dAwAAntnVn10DAACZ2daeXQQAAJrY1Z5dBAAAm9fUnVwEAACc1tScXAQAAJzW05xcBAAAnNXTm1sEAACc1dOaWwQAAJzV0plbBAAAnNTSmVsEAACc1NKYWgQAAJzT0ZhaBAAAnNPRl1oEAACc09CXWgQAAJzS0JZaBAAAnNLQlVkFAACc0c+VWQUAAJzRz5RZBQAAnNDOk1kFAACcz82TWQUAAJzPzZJZBQAAnM7MkVgGAACczsuRWAYAAJzOy5BYBgAAnM3KkFcHAACczMmPVwcAAJzLyI5XCAAAnMrHjVYIAACcyseNVggAAJzJxoxVCQAAnMjFi1UJAACcx8SKVQoAAJzGw4pUCgAAnMXCiVQKAACcxMGIUwsAAJzDwIhTCwAAnMK/h1IMAACcwb6GUgwAAJzAvYZSDQAAnL+8hVENAACcvbuEUQ4AAJy8uoNQDgAAnLu5g1APAACcuriCTw8AAJy5t4FPEAAAnLi2gE4RAACct7V/ThEAAJy2tH5NEQEA';
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Timer tick logic
  useEffect(() => {
    if (isRunning && !isPaused && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            // Play completion sound
            if (audioRef.current) {
              audioRef.current.play().catch(() => {});
            }
            // Vibrate if supported
            if (navigator.vibrate) {
              navigator.vibrate([200, 100, 200]);
            }
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, isPaused, timeRemaining, onComplete]);

  const start = useCallback((seconds?: number) => {
    const time = seconds ?? duration;
    setDuration(time);
    setTimeRemaining(time);
    setIsRunning(true);
    setIsPaused(false);
  }, [duration]);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeRemaining(duration);
  }, [duration]);

  const reset = useCallback((seconds?: number) => {
    const time = seconds ?? duration;
    setDuration(time);
    setTimeRemaining(time);
    setIsRunning(false);
    setIsPaused(false);
  }, [duration]);

  const formatTime = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const progress = duration > 0 ? ((duration - timeRemaining) / duration) * 100 : 0;

  return {
    timeRemaining,
    isRunning,
    isPaused,
    duration,
    progress,
    start,
    pause,
    resume,
    stop,
    reset,
    formatTime,
  };
}

export default useRestTimer;
