import { QuizSession, QuizResult } from "./quiz-generator";

const STORAGE_KEYS = {
  SCORES: "bible-trivia-scores",
  PROGRESS: "bible-trivia-progress",
  CURRENT_SESSION: "bible-trivia-current-session",
  SETTINGS: "bible-trivia-settings",
  STREAK: "bible-trivia-streak",
  BOOKMARKS: "bible-trivia-bookmarks",
} as const;

export interface UserProgress {
  booksCompleted: string[];
  totalQuizzesTaken: number;
  totalCorrectAnswers: number;
  totalQuestions: number;
  bestScores: Record<string, number>; // bookId -> best percentage
}

export interface AppSettings {
  darkMode: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  defaultDifficulty: "easy" | "medium" | "hard" | "all";
  hapticFeedback: boolean;
  studyMode: boolean;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastPlayedDate: string | null;
}

const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  soundEnabled: true,
  animationsEnabled: true,
  defaultDifficulty: "all",
  hapticFeedback: true,
  studyMode: true,
};

const DEFAULT_PROGRESS: UserProgress = {
  booksCompleted: [],
  totalQuizzesTaken: 0,
  totalCorrectAnswers: 0,
  totalQuestions: 0,
  bestScores: {},
};

const DEFAULT_STREAK: StreakData = {
  currentStreak: 0,
  longestStreak: 0,
  lastPlayedDate: null,
};

// -----------------------
// Generic helpers
// -----------------------
const isRecord = (v: unknown): v is Record<string, any> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const safeJsonParse = <T>(raw: string | null, fallback: T): T => {
  try {
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const getItem = <T>(key: string, defaultValue: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return safeJsonParse<T>(raw, defaultValue);
  } catch {
    // localStorage may be unavailable in some edge cases
    return defaultValue;
  }
};

const setItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
};

const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
};

// -----------------------
// Normalizers (self-heal)
// -----------------------
const normalizeSettings = (raw: unknown): AppSettings => {
  if (!isRecord(raw)) return DEFAULT_SETTINGS;

  const dd = raw.defaultDifficulty;
  const defaultDifficulty: AppSettings["defaultDifficulty"] =
    dd === "easy" || dd === "medium" || dd === "hard" || dd === "all"
      ? dd
      : DEFAULT_SETTINGS.defaultDifficulty;

  return {
    ...DEFAULT_SETTINGS,
    ...raw,
    darkMode: typeof raw.darkMode === "boolean" ? raw.darkMode : DEFAULT_SETTINGS.darkMode,
    soundEnabled:
      typeof raw.soundEnabled === "boolean" ? raw.soundEnabled : DEFAULT_SETTINGS.soundEnabled,
    animationsEnabled:
      typeof raw.animationsEnabled === "boolean"
        ? raw.animationsEnabled
        : DEFAULT_SETTINGS.animationsEnabled,
    hapticFeedback:
      typeof raw.hapticFeedback === "boolean" ? raw.hapticFeedback : DEFAULT_SETTINGS.hapticFeedback,
    studyMode: typeof raw.studyMode === "boolean" ? raw.studyMode : DEFAULT_SETTINGS.studyMode,
    defaultDifficulty,
  };
};

const normalizeProgress = (raw: unknown): UserProgress => {
  if (!isRecord(raw)) return DEFAULT_PROGRESS;

  const booksCompleted = Array.isArray(raw.booksCompleted)
    ? raw.booksCompleted.filter((x: unknown) => typeof x === "string")
    : [];

  const bestScores: Record<string, number> = isRecord(raw.bestScores) ? {} : {};
  if (isRecord(raw.bestScores)) {
    for (const [k, v] of Object.entries(raw.bestScores)) {
      if (typeof k === "string" && typeof v === "number" && Number.isFinite(v)) {
        bestScores[k] = v;
      }
    }
  }

  return {
    ...DEFAULT_PROGRESS,
    ...raw,
    booksCompleted,
    totalQuizzesTaken:
      typeof raw.totalQuizzesTaken === "number" && Number.isFinite(raw.totalQuizzesTaken)
        ? raw.totalQuizzesTaken
        : 0,
    totalCorrectAnswers:
      typeof raw.totalCorrectAnswers === "number" && Number.isFinite(raw.totalCorrectAnswers)
        ? raw.totalCorrectAnswers
        : 0,
    totalQuestions:
      typeof raw.totalQuestions === "number" && Number.isFinite(raw.totalQuestions)
        ? raw.totalQuestions
        : 0,
    bestScores,
  };
};

const normalizeStreak = (raw: unknown): StreakData => {
  if (!isRecord(raw)) return DEFAULT_STREAK;

  return {
    ...DEFAULT_STREAK,
    ...raw,
    currentStreak:
      typeof raw.currentStreak === "number" && Number.isFinite(raw.currentStreak)
        ? raw.currentStreak
        : 0,
    longestStreak:
      typeof raw.longestStreak === "number" && Number.isFinite(raw.longestStreak)
        ? raw.longestStreak
        : 0,
    lastPlayedDate:
      typeof raw.lastPlayedDate === "string" || raw.lastPlayedDate === null
        ? raw.lastPlayedDate
        : null,
  };
};

// Session validation (prevents crash when stored session shape changes)
const isValidSession = (raw: unknown): raw is QuizSession => {
  if (!isRecord(raw)) return false;

  // Minimal field checks; adjust if your QuizSession differs.
  // We avoid being too strict, just enough to prevent runtime exceptions.
  const hasBookId = typeof raw.bookId === "string";
  const hasAnswers = Array.isArray(raw.answers);
  const hasCurrentIndex = typeof raw.currentIndex === "number" && Number.isFinite(raw.currentIndex);
  const hasCompleted = typeof raw.completed === "boolean";

  return hasBookId && hasAnswers && hasCurrentIndex && hasCompleted;
};

// -----------------------
// Settings
// -----------------------
export const getSettings = (): AppSettings => {
  const raw = getItem<unknown>(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS as unknown);
  const normalized = normalizeSettings(raw);
  // self-heal storage
  setItem(STORAGE_KEYS.SETTINGS, normalized);
  return normalized;
};

export const saveSettings = (settings: AppSettings): void => setItem(STORAGE_KEYS.SETTINGS, settings);

export const updateSettings = (updates: Partial<AppSettings>): AppSettings => {
  const current = getSettings();
  const updated = normalizeSettings({ ...current, ...updates });
  saveSettings(updated);
  return updated;
};

// -----------------------
// Progress
// -----------------------
export const getProgress = (): UserProgress => {
  const raw = getItem<unknown>(STORAGE_KEYS.PROGRESS, DEFAULT_PROGRESS as unknown);
  const normalized = normalizeProgress(raw);
  setItem(STORAGE_KEYS.PROGRESS, normalized);
  return normalized;
};

export const saveProgress = (progress: UserProgress): void => setItem(STORAGE_KEYS.PROGRESS, progress);

export const updateProgressWithResult = (result: QuizResult): UserProgress => {
  const p = getProgress();

  const updated: UserProgress = {
    ...p,
    totalQuizzesTaken: p.totalQuizzesTaken + 1,
    totalCorrectAnswers: p.totalCorrectAnswers + result.correctAnswers,
    totalQuestions: p.totalQuestions + result.totalQuestions,
    bestScores: { ...p.bestScores },
    booksCompleted: [...p.booksCompleted],
  };

  const currentBest = updated.bestScores[result.bookId] ?? 0;
  if (result.percentage > currentBest) {
    updated.bestScores[result.bookId] = result.percentage;
  }

  if (result.percentage >= 80 && !updated.booksCompleted.includes(result.bookId)) {
    updated.booksCompleted.push(result.bookId);
  }

  saveProgress(updated);
  return updated;
};

// -----------------------
// Scores history
// -----------------------
export const getScores = (): QuizResult[] => {
  const raw = getItem<unknown>(STORAGE_KEYS.SCORES, []);
  if (!Array.isArray(raw)) return [];
  return raw as QuizResult[];
};

export const saveScore = (result: QuizResult): void => {
  const scores = getScores();
  const next = [result, ...scores].slice(0, 100);
  setItem(STORAGE_KEYS.SCORES, next);
};

// -----------------------
// Current session (resume)
// -----------------------
export const getCurrentSession = (): QuizSession | null => {
  const raw = getItem<unknown>(STORAGE_KEYS.CURRENT_SESSION, null);
  if (raw === null) return null;
  if (!isValidSession(raw)) {
    // stored session is invalid; clear it to prevent crash on relaunch
    clearCurrentSession();
    return null;
  }
  return raw as QuizSession;
};

export const saveCurrentSession = (session: QuizSession | null): void => {
  // If session is null, remove to keep storage clean
  if (session === null) {
    clearCurrentSession();
    return;
  }
  setItem(STORAGE_KEYS.CURRENT_SESSION, session);
};

export const clearCurrentSession = (): void => removeItem(STORAGE_KEYS.CURRENT_SESSION);

// -----------------------
// Streak
// -----------------------
export const getStreak = (): StreakData => {
  const raw = getItem<unknown>(STORAGE_KEYS.STREAK, DEFAULT_STREAK as unknown);
  const normalized = normalizeStreak(raw);
  setItem(STORAGE_KEYS.STREAK, normalized);
  return normalized;
};

export const updateStreak = (): StreakData => {
  const streak = getStreak();

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // already played today
  if (streak.lastPlayedDate === today) return streak;

  let updated: StreakData;

  if (streak.lastPlayedDate === yesterday) {
    const currentStreak = streak.currentStreak + 1;
    updated = {
      ...streak,
      currentStreak,
      longestStreak: Math.max(streak.longestStreak, currentStreak),
      lastPlayedDate: today,
    };
  } else {
    updated = {
      ...streak,
      currentStreak: 1,
      longestStreak: Math.max(streak.longestStreak, 1),
      lastPlayedDate: today,
    };
  }

  setItem(STORAGE_KEYS.STREAK, updated);
  return updated;
};

// -----------------------
// Bookmarks
// -----------------------
export const getBookmarks = (): string[] => {
  const raw = getItem<unknown>(STORAGE_KEYS.BOOKMARKS, []);
  if (!Array.isArray(raw)) return [];
  return raw.filter((x: unknown) => typeof x === "string") as string[];
};

export const saveBookmarks = (bookmarks: string[]): void =>
  setItem(STORAGE_KEYS.BOOKMARKS, bookmarks);

export const toggleBookmark = (questionId: string): boolean => {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(questionId);

  if (index > -1) {
    const next = bookmarks.filter((id) => id !== questionId);
    saveBookmarks(next);
    return false;
  } else {
    const next = [...bookmarks, questionId];
    saveBookmarks(next);
    return true;
  }
};

export const isBookmarked = (questionId: string): boolean => getBookmarks().includes(questionId);

// -----------------------
// Reset all data
// -----------------------
export const resetAllProgress = (): void => {
  removeItem(STORAGE_KEYS.SCORES);
  removeItem(STORAGE_KEYS.PROGRESS);
  removeItem(STORAGE_KEYS.CURRENT_SESSION);
  removeItem(STORAGE_KEYS.STREAK);
  removeItem(STORAGE_KEYS.BOOKMARKS);
  // (intentionally not removing SETTINGS; but you can if you want)
};
