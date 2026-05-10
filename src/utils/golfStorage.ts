
const PREFIX = 'forge-fit-golf-';

export const GOLF_KEYS = {
  PROFILE: `${PREFIX}profile`,
  CLUBS: `${PREFIX}clubs`,
  SESSIONS: `${PREFIX}sessions`,
  CUES: `${PREFIX}cues`,
  TRAINING_PROGRESS: `${PREFIX}training-progress`,
} as const;

export function golfGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function golfSet(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function golfRemove(key: string) {
  localStorage.removeItem(key);
}
