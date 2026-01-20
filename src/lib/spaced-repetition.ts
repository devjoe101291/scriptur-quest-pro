// Spaced Repetition System using SM-2 algorithm variant
// Tracks card difficulty and schedules reviews

export interface FlashcardData {
  questionId: string;
  interval: number; // Days until next review
  easeFactor: number; // Multiplier (2.5 default)
  repetitions: number; // Successful reviews in a row
  nextReviewDate: string; // ISO date string
  lastReviewed: string | null;
}

export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';

const STORAGE_KEY = 'bible-trivia-flashcards';

const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;

// Get all flashcard data
export const getFlashcardData = (): Record<string, FlashcardData> => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

// Save flashcard data
export const saveFlashcardData = (data: Record<string, FlashcardData>): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save flashcard data:', error);
  }
};

// Initialize flashcard data for a question
export const initializeFlashcard = (questionId: string): FlashcardData => {
  const today = new Date().toISOString().split('T')[0];
  return {
    questionId,
    interval: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    repetitions: 0,
    nextReviewDate: today, // Due today
    lastReviewed: null,
  };
};

// Get or create flashcard data for a question
export const getOrCreateFlashcard = (questionId: string): FlashcardData => {
  const allData = getFlashcardData();
  if (!allData[questionId]) {
    allData[questionId] = initializeFlashcard(questionId);
    saveFlashcardData(allData);
  }
  return allData[questionId];
};

// Calculate next review based on SM-2 algorithm
export const calculateNextReview = (
  card: FlashcardData,
  rating: ReviewRating
): FlashcardData => {
  const today = new Date().toISOString().split('T')[0];
  let { interval, easeFactor, repetitions } = card;

  // Rating to quality mapping (0-5 scale for SM-2)
  const qualityMap: Record<ReviewRating, number> = {
    again: 0, // Complete failure
    hard: 2,  // Correct with difficulty
    good: 3,  // Correct with some hesitation
    easy: 5,  // Perfect recall
  };
  const quality = qualityMap[rating];

  if (quality < 3) {
    // Failed - reset repetitions
    repetitions = 0;
    interval = 1; // Review tomorrow
  } else {
    // Successful recall
    repetitions += 1;

    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }

    // Adjust ease factor based on quality
    easeFactor = Math.max(
      MIN_EASE_FACTOR,
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );
  }

  // Calculate next review date
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);
  const nextReviewDate = nextDate.toISOString().split('T')[0];

  return {
    ...card,
    interval,
    easeFactor,
    repetitions,
    nextReviewDate,
    lastReviewed: today,
  };
};

// Update a flashcard after review
export const reviewFlashcard = (
  questionId: string,
  rating: ReviewRating
): FlashcardData => {
  const allData = getFlashcardData();
  const card = allData[questionId] || initializeFlashcard(questionId);
  const updated = calculateNextReview(card, rating);
  allData[questionId] = updated;
  saveFlashcardData(allData);
  return updated;
};

// Get cards due for review
export const getDueCards = (questionIds: string[]): string[] => {
  const today = new Date().toISOString().split('T')[0];
  const allData = getFlashcardData();
  
  return questionIds.filter(id => {
    const card = allData[id];
    if (!card) return true; // New card, needs review
    return card.nextReviewDate <= today;
  });
};

// Get cards due today and overdue
export const getStudyStats = (questionIds: string[]): {
  dueToday: number;
  newCards: number;
  learned: number;
} => {
  const today = new Date().toISOString().split('T')[0];
  const allData = getFlashcardData();
  
  let dueToday = 0;
  let newCards = 0;
  let learned = 0;

  questionIds.forEach(id => {
    const card = allData[id];
    if (!card) {
      newCards++;
    } else if (card.nextReviewDate <= today) {
      dueToday++;
    } else {
      learned++;
    }
  });

  return { dueToday, newCards, learned };
};

// Get interval display text
export const getIntervalText = (interval: number): string => {
  if (interval === 0) return 'New';
  if (interval === 1) return '1 day';
  if (interval < 7) return `${interval} days`;
  if (interval < 30) return `${Math.round(interval / 7)} weeks`;
  if (interval < 365) return `${Math.round(interval / 30)} months`;
  return `${Math.round(interval / 365)} years`;
};

// Clear flashcard data
export const clearFlashcardData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
