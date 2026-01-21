import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  AppSettings,
  UserProgress,
  StreakData,
  getSettings,
  saveSettings,
  getProgress,
  getStreak,
  updateStreak as updateStreakStorage,
  updateProgressWithResult,
  saveScore,
  getCurrentSession,
  saveCurrentSession,
  clearCurrentSession,
  resetAllProgress,
} from "@/lib/storage";
import { QuizSession, QuizResult, generateQuizSession, calculateResults } from "@/lib/quiz-generator";
import { QuizCategory } from "@/data/questions";

interface AppContextType {
  // Settings
  settings: AppSettings;
  updateSettings: (updates: Partial<AppSettings>) => void;

  // Progress
  progress: UserProgress;
  streak: StreakData;

  // Quiz
  currentSession: QuizSession | null;
  startQuiz: (
    bookId: string,
    difficulty?: "easy" | "medium" | "hard" | "all",
    category?: QuizCategory | "all"
  ) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  completeQuiz: () => QuizResult | null;
  resumeQuiz: () => boolean;
  abandonQuiz: () => void;

  // Data management
  resetProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Lazy init (prevents any weirdness during render and helps with stability)
  const [settings, setSettings] = useState<AppSettings>(() => getSettings());
  const [progress, setProgress] = useState<UserProgress>(() => getProgress());
  const [streak, setStreak] = useState<StreakData>(() => getStreak());
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);

  // Apply dark mode
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  // Check for saved session on mount (storage.ts already validates session shape)
  useEffect(() => {
    try {
      const saved = getCurrentSession();
      if (saved && !saved.completed) {
        setCurrentSession(saved);
      } else {
        // keep storage clean
        clearCurrentSession();
      }
    } catch (e) {
      // If anything goes wrong, clear the session so the app doesn't crash on relaunch
      clearCurrentSession();
      setCurrentSession(null);
      console.error("Failed to load saved session:", e);
    }
  }, []);

  const handleUpdateSettings = useCallback((updates: Partial<AppSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...updates };
      // storage.ts normalizes on get; here we just save what the UI set
      saveSettings(updated as AppSettings);
      return updated as AppSettings;
    });
  }, []);

  const startQuiz = useCallback(
    (
      bookId: string,
      difficulty: "easy" | "medium" | "hard" | "all" = "all",
      category?: QuizCategory | "all"
    ) => {
      const session = generateQuizSession(bookId, difficulty, category);
      setCurrentSession(session);
      saveCurrentSession(session);

      // Update streak when starting a quiz
      const updatedStreak = updateStreakStorage();
      setStreak(updatedStreak);
    },
    []
  );

  const answerQuestion = useCallback(
    (answerIndex: number) => {
      setCurrentSession((prev) => {
        if (!prev) return prev;

        // Defensive: ensure answers is an array
        const answers = Array.isArray(prev.answers) ? prev.answers : [];

        const updatedSession: QuizSession = {
          ...prev,
          answers: answers.map((a, i) => (i === prev.currentIndex ? answerIndex : a)),
        };

        saveCurrentSession(updatedSession);
        return updatedSession;
      });
    },
    []
  );

  const nextQuestion = useCallback(() => {
    setCurrentSession((prev) => {
      if (!prev) return prev;

      const updatedSession: QuizSession = {
        ...prev,
        currentIndex: prev.currentIndex + 1,
      };

      saveCurrentSession(updatedSession);
      return updatedSession;
    });
  }, []);

  const completeQuiz = useCallback((): QuizResult | null => {
    if (!currentSession) return null;

    const completedSession: QuizSession = {
      ...currentSession,
      completed: true,
      endTime: Date.now(),
    };

    const result = calculateResults(completedSession);

    // Save result and update progress
    saveScore(result);
    const updatedProgress = updateProgressWithResult(result);
    setProgress(updatedProgress);

    // Clear current session
    setCurrentSession(null);
    clearCurrentSession();

    return result;
  }, [currentSession]);

  const resumeQuiz = useCallback((): boolean => {
    try {
      const saved = getCurrentSession();
      if (saved && !saved.completed) {
        setCurrentSession(saved);
        return true;
      }
    } catch (e) {
      console.error("Failed to resume quiz:", e);
      clearCurrentSession();
    }
    return false;
  }, []);

  const abandonQuiz = useCallback(() => {
    setCurrentSession(null);
    clearCurrentSession();
  }, []);

  const resetProgress = useCallback(() => {
    resetAllProgress();
    // re-load normalized values
    setProgress(getProgress());
    setStreak(getStreak());
    setCurrentSession(null);
    clearCurrentSession();
  }, []);

  return (
    <AppContext.Provider
      value={{
        settings,
        updateSettings: handleUpdateSettings,
        progress,
        streak,
        currentSession,
        startQuiz,
        answerQuestion,
        nextQuestion,
        completeQuiz,
        resumeQuiz,
        abandonQuiz,
        resetProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
