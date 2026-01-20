import { questions, QuizQuestion, shuffleQuestions, QuizCategory } from '@/data/questions';

export interface QuizSession {
  id: string;
  bookId: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'all';
  category?: QuizCategory | 'all';
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  startTime: number;
  endTime?: number;
  completed: boolean;
}

export interface QuizResult {
  sessionId: string;
  bookId: string;
  difficulty: string;
  category?: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  timeTaken: number;
  date: number;
}

const QUESTIONS_PER_QUIZ = 10;

export const generateQuizSession = (
  bookId: string,
  difficulty: 'easy' | 'medium' | 'hard' | 'all' = 'all',
  category?: QuizCategory | 'all'
): QuizSession => {
  let availableQuestions = questions.filter(q => q.bookId === bookId);
  
  // Filter by category if specified and not 'all'
  if (category && category !== 'all') {
    const categoryQuestions = questions.filter(q => q.category === category);
    // If filtering by category, we use category questions regardless of book
    availableQuestions = categoryQuestions;
  }
  
  if (difficulty !== 'all') {
    availableQuestions = availableQuestions.filter(q => q.difficulty === difficulty);
  }
  
  // If not enough questions, fall back to broader selection
  if (availableQuestions.length < QUESTIONS_PER_QUIZ) {
    if (category && category !== 'all') {
      // For category quizzes, fall back to all difficulties in that category
      availableQuestions = questions.filter(q => q.category === category);
    } else {
      // For book quizzes, fall back to all difficulties in that book
      availableQuestions = questions.filter(q => q.bookId === bookId);
    }
  }
  
  // If still not enough, we'll use what we have
  const shuffled = shuffleQuestions(availableQuestions);
  const selectedQuestions = shuffled.slice(0, Math.min(QUESTIONS_PER_QUIZ, shuffled.length));
  
  return {
    id: `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    bookId,
    difficulty,
    category,
    questions: selectedQuestions,
    currentIndex: 0,
    answers: new Array(selectedQuestions.length).fill(null),
    startTime: Date.now(),
    completed: false,
  };
};

export const calculateResults = (session: QuizSession): QuizResult => {
  const correctCount = session.answers.reduce((count, answer, index) => {
    if (answer === session.questions[index]?.correctAnswer) {
      return count + 1;
    }
    return count;
  }, 0);

  return {
    sessionId: session.id,
    bookId: session.bookId,
    difficulty: session.difficulty,
    totalQuestions: session.questions.length,
    correctAnswers: correctCount,
    percentage: Math.round((correctCount / session.questions.length) * 100),
    timeTaken: (session.endTime || Date.now()) - session.startTime,
    date: Date.now(),
  };
};

export const formatTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
