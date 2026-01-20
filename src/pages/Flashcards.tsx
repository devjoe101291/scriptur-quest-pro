import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Check, X, Brain, Zap, Clock, ChevronRight, Bookmark, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { getBookmarks } from '@/lib/storage';
import { questions, QuizQuestion } from '@/data/questions';
import { getBookById } from '@/data/bible-books';
import {
  getDueCards,
  getStudyStats,
  reviewFlashcard,
  getOrCreateFlashcard,
  getIntervalText,
  type ReviewRating,
  type FlashcardData,
} from '@/lib/spaced-repetition';

type StudyPhase = 'overview' | 'studying' | 'complete';

const Flashcards: React.FC = () => {
  const navigate = useNavigate();
  const { settings } = useApp();
  
  const [phase, setPhase] = useState<StudyPhase>('overview');
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<QuizQuestion[]>([]);
  const [dueQuestionIds, setDueQuestionIds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ dueToday: 0, newCards: 0, learned: 0 });
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 });
  const [cardData, setCardData] = useState<FlashcardData | null>(null);

  // Load bookmarks and calculate due cards
  useEffect(() => {
    loadData();
  }, []);

  const loadData = useCallback(() => {
    const bookmarkIds = getBookmarks();
    const bookmarked = questions.filter(q => bookmarkIds.includes(q.id));
    setBookmarkedQuestions(bookmarked);
    
    const dueIds = getDueCards(bookmarkIds);
    setDueQuestionIds(dueIds);
    
    const studyStats = getStudyStats(bookmarkIds);
    setStats(studyStats);
  }, []);

  const currentQuestion = dueQuestionIds[currentIndex] 
    ? bookmarkedQuestions.find(q => q.id === dueQuestionIds[currentIndex])
    : null;

  useEffect(() => {
    if (currentQuestion) {
      setCardData(getOrCreateFlashcard(currentQuestion.id));
    }
  }, [currentQuestion]);

  const handleStartStudy = () => {
    if (dueQuestionIds.length === 0) return;
    setPhase('studying');
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStats({ reviewed: 0, correct: 0 });
  };

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleRating = (rating: ReviewRating) => {
    if (!currentQuestion) return;

    reviewFlashcard(currentQuestion.id, rating);
    
    // Update session stats
    const isCorrect = rating === 'good' || rating === 'easy';
    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (isCorrect ? 1 : 0),
    }));

    // Move to next card or complete
    if (currentIndex < dueQuestionIds.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setPhase('complete');
      loadData(); // Refresh stats
    }
  };

  const handleStudyAgain = () => {
    loadData();
    setPhase('overview');
  };

  const book = currentQuestion ? getBookById(currentQuestion.bookId) : null;

  // Overview Phase
  if (phase === 'overview') {
    const totalBookmarked = bookmarkedQuestions.length;
    const hasDueCards = stats.dueToday + stats.newCards > 0;

    return (
      <div className="min-h-screen pb-24 parchment-gradient">
        {/* Header */}
        <div className="safe-top px-4 sm:px-5 pt-4 pb-6">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <div className="flex-1">
              <h1 className={cn(
                'font-display text-xl font-bold text-foreground',
                settings.animationsEnabled && 'animate-fade-in'
              )}>
                Flashcard Study
              </h1>
              <p className="text-sm text-muted-foreground">
                Spaced repetition learning
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className={cn(
              'bg-card rounded-xl border border-border p-4 text-center',
              settings.animationsEnabled && 'animate-slide-up'
            )}>
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.newCards}</div>
              <div className="text-xs text-muted-foreground">New</div>
            </div>
            
            <div className={cn(
              'bg-card rounded-xl border border-border p-4 text-center',
              settings.animationsEnabled && 'animate-slide-up'
            )} style={settings.animationsEnabled ? { animationDelay: '0.05s' } : undefined}>
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-rose-500/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.dueToday}</div>
              <div className="text-xs text-muted-foreground">Due</div>
            </div>
            
            <div className={cn(
              'bg-card rounded-xl border border-border p-4 text-center',
              settings.animationsEnabled && 'animate-slide-up'
            )} style={settings.animationsEnabled ? { animationDelay: '0.1s' } : undefined}>
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.learned}</div>
              <div className="text-xs text-muted-foreground">Learned</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-5">
          {totalBookmarked === 0 ? (
            <div className={cn(
              'text-center py-12',
              settings.animationsEnabled && 'animate-fade-in'
            )}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <Bookmark className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                No Cards to Study
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">
                Bookmark questions during quizzes to add them to your flashcard deck.
              </p>
              <Button onClick={() => navigate('/books')} variant="outline">
                Start a Quiz
              </Button>
            </div>
          ) : (
            <>
              {/* Study Button */}
              <div className={cn(
                'bg-card rounded-xl border border-border p-6 text-center mb-4',
                settings.animationsEnabled && 'animate-fade-in'
              )}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                
                {hasDueCards ? (
                  <>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {stats.dueToday + stats.newCards} Cards Ready
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Review your bookmarked questions using spaced repetition
                    </p>
                    <Button onClick={handleStartStudy} className="w-full">
                      Start Studying
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      All Caught Up!
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      No cards are due for review. Come back later or add more bookmarks.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {stats.learned} cards learned
                    </div>
                  </>
                )}
              </div>

              {/* Link to Bookmarks */}
              <button
                onClick={() => navigate('/bookmarks')}
                className={cn(
                  'w-full bg-card rounded-xl border border-border p-4 flex items-center gap-3',
                  'hover:bg-secondary/50 transition-colors text-left',
                  settings.animationsEnabled && 'animate-slide-up'
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Bookmark className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground">Manage Bookmarks</div>
                  <div className="text-sm text-muted-foreground">
                    {totalBookmarked} questions saved
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Study Complete Phase
  if (phase === 'complete') {
    const accuracy = sessionStats.reviewed > 0 
      ? Math.round((sessionStats.correct / sessionStats.reviewed) * 100) 
      : 0;

    return (
      <div className="min-h-screen pb-24 parchment-gradient flex flex-col">
        <div className="safe-top px-4 sm:px-5 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className={cn(
            'text-center',
            settings.animationsEnabled && 'animate-fade-in'
          )}>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Session Complete!
            </h2>
            <p className="text-muted-foreground mb-8">
              Great job studying your flashcards
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-3xl font-bold text-foreground">{sessionStats.reviewed}</div>
                <div className="text-sm text-muted-foreground">Cards Reviewed</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4">
                <div className="text-3xl font-bold text-foreground">{accuracy}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={handleStudyAgain} className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                Study Again
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="w-full">
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Studying Phase
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 parchment-gradient flex flex-col">
      {/* Header */}
      <div className="safe-top px-4 sm:px-5 pt-4 pb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setPhase('overview')}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="text-center">
            <div className="text-sm font-medium text-foreground">
              {currentIndex + 1} / {dueQuestionIds.length}
            </div>
            {cardData && (
              <div className="text-xs text-muted-foreground">
                {cardData.repetitions === 0 ? 'New Card' : `Interval: ${getIntervalText(cardData.interval)}`}
              </div>
            )}
          </div>
          
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentIndex) / dueQuestionIds.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-4">
        <div
          onClick={!isFlipped ? handleFlip : undefined}
          className={cn(
            'w-full max-w-sm bg-card rounded-2xl border border-border shadow-lg overflow-hidden',
            'transition-all duration-300 cursor-pointer',
            !isFlipped && 'hover:shadow-xl hover:scale-[1.02]',
            settings.animationsEnabled && 'animate-fade-in'
          )}
        >
          {/* Card Header */}
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <div className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center',
              'font-display text-xs font-semibold',
              'bg-secondary text-secondary-foreground'
            )}>
              {book?.abbreviation.slice(0, 2) || '??'}
            </div>
            <span className="text-sm text-muted-foreground">{book?.name}</span>
          </div>

          {/* Card Content */}
          <div className="p-6 min-h-[280px] flex flex-col">
            {!isFlipped ? (
              /* Question Side */
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-medium text-foreground leading-relaxed mb-6">
                  {currentQuestion.question}
                </p>
                <div className="text-sm text-muted-foreground">
                  Tap to reveal answer
                </div>
              </div>
            ) : (
              /* Answer Side */
              <div className={cn(
                'flex-1 flex flex-col',
                settings.animationsEnabled && 'animate-fade-in'
              )}>
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 mb-4">
                  <div className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    {currentQuestion.options[currentQuestion.correctAnswer]}
                  </div>
                </div>

                {currentQuestion.reference && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <BookOpen className="h-4 w-4" />
                    <span>{currentQuestion.reference}</span>
                  </div>
                )}

                {currentQuestion.explanation && (
                  <div className="p-3 rounded-lg bg-accent/50 border border-border flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rating Buttons */}
      {isFlipped && (
        <div className={cn(
          'px-4 pb-4',
          settings.animationsEnabled && 'animate-slide-up'
        )}>
          <p className="text-center text-sm text-muted-foreground mb-3">
            How well did you know this?
          </p>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => handleRating('again')}
              className="flex flex-col items-center gap-1 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 transition-colors"
            >
              <X className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              <span className="text-xs font-medium text-rose-600 dark:text-rose-400">Again</span>
            </button>
            
            <button
              onClick={() => handleRating('hard')}
              className="flex flex-col items-center gap-1 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
            >
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Hard</span>
            </button>
            
            <button
              onClick={() => handleRating('good')}
              className="flex flex-col items-center gap-1 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
            >
              <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Good</span>
            </button>
            
            <button
              onClick={() => handleRating('easy')}
              className="flex flex-col items-center gap-1 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 transition-colors"
            >
              <Zap className="h-5 w-5 text-sky-600 dark:text-sky-400" />
              <span className="text-xs font-medium text-sky-600 dark:text-sky-400">Easy</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;
