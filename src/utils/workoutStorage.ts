
const PREFIX = 'forge-fit-';

export const WK_KEYS = {
  PROFILES: `${PREFIX}profiles`,
  ACTIVE_PROFILE: `${PREFIX}active-profile`,
  WORKOUT_LOGS: `${PREFIX}workout-logs`,
  ACTIVE_WORKOUT: `${PREFIX}active-workout`,
} as const;

export function wkGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function wkSet(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
