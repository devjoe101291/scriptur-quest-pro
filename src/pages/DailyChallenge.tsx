import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Flame, 
  Trophy, 
  Star,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Award,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import QuizOption from '@/components/QuizOption';
import ScoreCircle from '@/components/ScoreCircle';
import StudyPanel from '@/components/StudyPanel';
import AchievementUnlockToast from '@/components/AchievementUnlockToast';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { bibleBooks } from '@/data/bible-books';
import {
  getDailyChallenge,
  startDailyChallenge,
  updateDailySession,
  completeDailyChallenge,
  getTimeUntilNextChallenge,
  getTodayString,
  DailyChallengeData
} from '@/lib/daily-challenge';
import { QuizSession, QuizResult, formatTime } from '@/lib/quiz-generator';
import { checkAchievements, Achievement, getUnlockedCount } from '@/lib/achievements';

const DailyChallenge: React.FC = () => {
  const navigate = useNavigate();
  const { settings } = useApp();
  const { playTap, playCorrect, playWrong, playComplete } = useSoundEffects();
  
  const [dailyData, setDailyData] = useState<DailyChallengeData>(getDailyChallenge);
  const [session, setSession] = useState<QuizSession | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [countdown, setCountdown] = useState(getTimeUntilNextChallenge());
  const [isStarted, setIsStarted] = useState(false);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);

  // Update countdown timer
  useEffect(() => {
    if (dailyData.completed && dailyData.date === getTodayString()) {
      const interval = setInterval(() => {
        setCountdown(getTimeUntilNextChallenge());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dailyData.completed, dailyData.date]);

  // Check if today's challenge is already completed
  const isTodayCompleted = dailyData.date === getTodayString() && dailyData.completed;

  const handleStart = () => {
    playTap();
    const newSession = startDailyChallenge();
    setSession(newSession);
    setIsStarted(true);
  };

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null || !session) return;
    
    setSelectedAnswer(index);
    const currentQuestion = session.questions[session.currentIndex];
    const isCorrect = index === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }
    
    // Update session
    const updatedSession = {
      ...session,
      answers: session.answers.map((a, i) => 
        i === session.currentIndex ? index : a
      ),
    };
    setSession(updatedSession);
    updateDailySession(updatedSession);
  };

  const handleNext = useCallback(() => {
    if (!session) return;
    playTap();
    
    const isLastQuestion = session.currentIndex >= session.questions.length - 1;
    
    if (isLastQuestion) {
      // Complete the daily challenge
      const result = completeDailyChallenge(session);
      setQuizResult(result);
      setShowResult(true);
      const updatedData = getDailyChallenge();
      setDailyData(updatedData);
      playComplete();
      
      // Check for new achievements
      const unlockedAchievements = checkAchievements({
        streak: updatedData.streak,
        longestStreak: updatedData.longestStreak,
        totalChallengesCompleted: updatedData.totalChallengesCompleted,
        perfectDays: updatedData.perfectDays,
        lastCompletedTime: Date.now(),
        lastTimeTaken: result.timeTaken,
      });
      
      if (unlockedAchievements.length > 0) {
        setNewAchievements(unlockedAchievements);
      }
    } else {
      // Move to next question
      const updatedSession = {
        ...session,
        currentIndex: session.currentIndex + 1,
      };
      setSession(updatedSession);
      updateDailySession(updatedSession);
      setSelectedAnswer(null);
    }
  }, [session, playTap, playComplete]);

  const handleAchievementClose = () => {
    if (currentAchievementIndex < newAchievements.length - 1) {
      setCurrentAchievementIndex(prev => prev + 1);
    } else {
      setNewAchievements([]);
      setCurrentAchievementIndex(0);
    }
  };

  // Show completed view
  if (isTodayCompleted && !isStarted) {
    return (
      <div className="min-h-screen pb-24 parchment-gradient">
        {newAchievements.length > 0 && newAchievements[currentAchievementIndex] && (
          <AchievementUnlockToast
            achievement={newAchievements[currentAchievementIndex]}
            onClose={handleAchievementClose}
          />
        )}
        <div className="safe-top px-5 pt-4 pb-6">
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                playTap();
                navigate('/');
              }}
              className="rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-display text-xl font-bold text-foreground">
              Daily Challenge
            </h1>
          </div>
          
          <div className="text-center space-y-6">
            <div className={cn(
              'p-6 rounded-2xl bg-card border border-border shadow-card',
              settings.animationsEnabled && 'animate-scale-in'
            )}>
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Challenge Complete!
              </h2>
              <p className="text-muted-foreground mb-4">
                You've completed today's daily challenge.
              </p>
              
              {dailyData.result && (
                <div className="flex justify-center mb-6">
                  <ScoreCircle 
                    percentage={dailyData.result.percentage} 
                    size="lg"
                  />
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-secondary/50">
                  <Flame className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{dailyData.streak}</p>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50">
                  <Trophy className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{dailyData.longestStreak}</p>
                  <p className="text-xs text-muted-foreground">Best Streak</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Next challenge in</p>
                <p className="font-mono text-xl font-bold text-primary">
                  {String(countdown.hours).padStart(2, '0')}:
                  {String(countdown.minutes).padStart(2, '0')}:
                  {String(countdown.seconds).padStart(2, '0')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Star className="h-5 w-5 text-accent mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">{dailyData.totalChallengesCompleted}</p>
                <p className="text-xs text-muted-foreground">Total Completed</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Trophy className="h-5 w-5 text-green-500 mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">{dailyData.perfectDays}</p>
                <p className="text-xs text-muted-foreground">Perfect Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show results after completing
  if (showResult && quizResult) {
    return (
      <div className="min-h-screen pb-24 parchment-gradient">
        {newAchievements.length > 0 && newAchievements[currentAchievementIndex] && (
          <AchievementUnlockToast
            achievement={newAchievements[currentAchievementIndex]}
            onClose={handleAchievementClose}
          />
        )}
        <div className="safe-top px-5 pt-4 pb-6">
          <div className="text-center space-y-6">
            <div className={cn(
              'p-6 rounded-2xl bg-card border border-border shadow-card',
              settings.animationsEnabled && 'animate-scale-in'
            )}>
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Daily Challenge Complete!
              </h2>
              
              <div className="flex justify-center my-6">
                <ScoreCircle percentage={quizResult.percentage} size="lg" />
              </div>
              
              <p className="text-lg text-foreground mb-2">
                You got <span className="font-bold text-primary">{quizResult.correctAnswers}</span> out of <span className="font-bold">{quizResult.totalQuestions}</span> correct!
              </p>
              <p className="text-sm text-muted-foreground">
                Time: {formatTime(quizResult.timeTaken)}
              </p>
              
              {quizResult.percentage === 100 && (
                <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    🎉 Perfect Score! Amazing!
                  </p>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Flame className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{dailyData.streak}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Trophy className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{dailyData.longestStreak}</p>
                <p className="text-xs text-muted-foreground">Best Streak</p>
              </div>
            </div>
            
            <Button
              onClick={() => {
                playTap();
                navigate('/');
              }}
              size="lg"
              className="w-full h-14 rounded-xl gold-gradient text-primary-foreground"
            >
              Back to Home
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show start screen
  if (!isStarted || !session) {
    return (
      <div className="min-h-screen pb-24 parchment-gradient">
        <div className="safe-top px-5 pt-4 pb-6">
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                playTap();
                navigate('/');
              }}
              className="rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-display text-xl font-bold text-foreground">
              Daily Challenge
            </h1>
          </div>
          
          <div className="text-center space-y-6">
            <div className={cn(
              'p-6 rounded-2xl royal-gradient text-primary-foreground shadow-card',
              settings.animationsEnabled && 'animate-scale-in'
            )}>
              <Calendar className="h-16 w-16 mx-auto mb-4 opacity-90" />
              <h2 className="font-display text-2xl font-bold mb-2">
                Today's Challenge
              </h2>
              <p className="text-primary-foreground/80 mb-4">
                Test your Bible knowledge with 10 curated questions. 
                Same challenge for everyone, every day!
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-white/10">
                  <Flame className="h-5 w-5 mx-auto mb-1" />
                  <p className="text-lg font-bold">{dailyData.streak}</p>
                  <p className="text-xs opacity-80">Current Streak</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10">
                  <Trophy className="h-5 w-5 mx-auto mb-1" />
                  <p className="text-lg font-bold">{dailyData.longestStreak}</p>
                  <p className="text-xs opacity-80">Best Streak</p>
                </div>
              </div>
              
              <Button
                onClick={handleStart}
                size="lg"
                className="w-full h-14 rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Star className="h-5 w-5 mr-2" />
                Start Challenge
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-2xl font-bold text-foreground">{dailyData.totalChallengesCompleted}</p>
                <p className="text-xs text-muted-foreground">Challenges Completed</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-2xl font-bold text-foreground">{dailyData.perfectDays}</p>
                <p className="text-xs text-muted-foreground">Perfect Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const currentQuestion = session.questions[session.currentIndex];
  const progressPercent = ((session.currentIndex + 1) / session.questions.length) * 100;
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer;
  const bookName = bibleBooks.find(b => b.id === currentQuestion.bookId)?.name || currentQuestion.bookId;

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      <div className="safe-top px-5 pt-4 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              playTap();
              navigate('/');
            }}
            className="rounded-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">Daily Challenge</span>
          </div>
          <div className="w-10" />
        </div>
        
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {session.currentIndex + 1} of {session.questions.length}</span>
            <span>{bookName}</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
        
        {/* Question */}
        <div className={cn(
          'p-5 rounded-2xl bg-card border border-border shadow-card mb-6',
          settings.animationsEnabled && 'animate-fade-in'
        )}>
          <p className="text-lg font-medium text-foreground leading-relaxed">
            {currentQuestion.question}
          </p>
        </div>
        
        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === index}
              isCorrect={index === currentQuestion.correctAnswer}
              showResult={selectedAnswer !== null}
              onSelect={() => handleSelectAnswer(index)}
              disabled={selectedAnswer !== null}
            />
          ))}
        </div>
        
        {/* Feedback & Next Button */}
        {selectedAnswer !== null && (
          <div className={cn(
            'space-y-4',
            settings.animationsEnabled && 'animate-fade-in'
          )}>
            <div className={cn(
              'p-4 rounded-xl flex items-center gap-3',
              isCorrect 
                ? 'bg-green-500/10 border border-green-500/20' 
                : 'bg-red-500/10 border border-red-500/20'
            )}>
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
              <div>
                <p className={cn(
                  'font-medium',
                  isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                )}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
              </div>
            </div>

            {/* Study Mode Panel */}
            {settings.studyMode && (
              <StudyPanel
                reference={currentQuestion.reference}
                explanation={currentQuestion.explanation}
                isCorrect={isCorrect}
                animationsEnabled={settings.animationsEnabled}
              />
            )}

            {/* Simple reference when study mode is off */}
            {!settings.studyMode && currentQuestion.reference && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <BookOpen className="h-4 w-4" />
                <span>{currentQuestion.reference}</span>
              </div>
            )}
            
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full h-14 rounded-xl gold-gradient text-primary-foreground mt-4"
            >
              {session.currentIndex >= session.questions.length - 1 ? 'See Results' : 'Next Question'}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyChallenge;
