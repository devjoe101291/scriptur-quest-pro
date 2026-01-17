import { questions, QuizQuestion } from '@/data/questions';
import { QuizSession, QuizResult, calculateResults } from './quiz-generator';

const STORAGE_KEY = 'bible-trivia-daily-challenge';
const DAILY_QUESTIONS_COUNT = 10;

export interface DailyChallengeData {
  date: string;
  completed: boolean;
  session: QuizSession | null;
  result: QuizResult | null;
  streak: number;
  longestStreak: number;
  lastCompletedDate: string | null;
  totalChallengesCompleted: number;
  perfectDays: number;
}

const DEFAULT_DAILY_DATA: DailyChallengeData = {
  date: '',
  completed: false,
  session: null,
  result: null,
  streak: 0,
  longestStreak: 0,
  lastCompletedDate: null,
  totalChallengesCompleted: 0,
  perfectDays: 0,
};

// Seeded random number generator for consistent daily questions
const seededRandom = (seed: number): (() => number) => {
  return () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
};

// Generate a numeric seed from a date string
const dateToSeed = (dateStr: string): number => {
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = ((seed << 5) - seed) + dateStr.charCodeAt(i);
    seed = seed & seed;
  }
  return Math.abs(seed);
};

// Shuffle array with seeded random
const seededShuffle = <T>(array: T[], random: () => number): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get today's date in YYYY-MM-DD format
export const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Generate daily challenge questions - same questions for everyone on the same day
export const generateDailyQuestions = (dateStr: string): QuizQuestion[] => {
  const seed = dateToSeed(dateStr);
  const random = seededRandom(seed);
  
  // Get a mix of questions from different books and difficulties
  const allQuestions = [...questions];
  const shuffled = seededShuffle(allQuestions, random);
  
  // Select questions with variety
  const selected: QuizQuestion[] = [];
  const usedBooks = new Set<string>();
  
  // First pass: try to get questions from different books
  for (const q of shuffled) {
    if (selected.length >= DAILY_QUESTIONS_COUNT) break;
    if (!usedBooks.has(q.bookId) || usedBooks.size >= 5) {
      selected.push(q);
      usedBooks.add(q.bookId);
    }
  }
  
  // Fill remaining slots if needed
  for (const q of shuffled) {
    if (selected.length >= DAILY_QUESTIONS_COUNT) break;
    if (!selected.includes(q)) {
      selected.push(q);
    }
  }
  
  return selected.slice(0, DAILY_QUESTIONS_COUNT);
};

// Create a daily challenge session
export const createDailySession = (dateStr: string): QuizSession => {
  const dailyQuestions = generateDailyQuestions(dateStr);
  
  return {
    id: `daily-${dateStr}`,
    bookId: 'daily-challenge',
    difficulty: 'all',
    questions: dailyQuestions,
    currentIndex: 0,
    answers: new Array(dailyQuestions.length).fill(null),
    startTime: Date.now(),
    completed: false,
  };
};

// Get daily challenge data from storage
export const getDailyChallenge = (): DailyChallengeData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parsing errors
  }
  return { ...DEFAULT_DAILY_DATA };
};

// Save daily challenge data
export const saveDailyChallenge = (data: DailyChallengeData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save daily challenge:', error);
  }
};

// Check if today's challenge is available (new day or not completed)
export const isTodaysChallengeAvailable = (): boolean => {
  const data = getDailyChallenge();
  const today = getTodayString();
  return data.date !== today || !data.completed;
};

// Check if there's an in-progress daily challenge for today
export const hasDailyChallengeInProgress = (): boolean => {
  const data = getDailyChallenge();
  const today = getTodayString();
  return data.date === today && data.session !== null && !data.completed;
};

// Start or resume today's daily challenge
export const startDailyChallenge = (): QuizSession => {
  const today = getTodayString();
  const data = getDailyChallenge();
  
  // If we have an in-progress session for today, return it
  if (data.date === today && data.session && !data.completed) {
    return data.session;
  }
  
  // Create new session for today
  const session = createDailySession(today);
  
  saveDailyChallenge({
    ...data,
    date: today,
    completed: false,
    session,
    result: null,
  });
  
  return session;
};

// Update daily challenge session
export const updateDailySession = (session: QuizSession): void => {
  const data = getDailyChallenge();
  saveDailyChallenge({
    ...data,
    session,
  });
};

// Complete daily challenge
export const completeDailyChallenge = (session: QuizSession): QuizResult => {
  const today = getTodayString();
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const data = getDailyChallenge();
  
  const completedSession: QuizSession = {
    ...session,
    completed: true,
    endTime: Date.now(),
  };
  
  const result = calculateResults(completedSession);
  
  // Update streak
  let newStreak = 1;
  if (data.lastCompletedDate === yesterday) {
    newStreak = data.streak + 1;
  }
  
  const newLongestStreak = Math.max(newStreak, data.longestStreak);
  const isPerfect = result.percentage === 100;
  
  saveDailyChallenge({
    date: today,
    completed: true,
    session: completedSession,
    result,
    streak: newStreak,
    longestStreak: newLongestStreak,
    lastCompletedDate: today,
    totalChallengesCompleted: data.totalChallengesCompleted + 1,
    perfectDays: data.perfectDays + (isPerfect ? 1 : 0),
  });
  
  return result;
};

// Get remaining time until next daily challenge
export const getTimeUntilNextChallenge = (): { hours: number; minutes: number; seconds: number } => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const diff = tomorrow.getTime() - now.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { hours, minutes, seconds };
};
