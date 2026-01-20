import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, BookOpen, Trash2, Brain, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import BookmarkButton from '@/components/BookmarkButton';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { getBookmarks, saveBookmarks } from '@/lib/storage';
import { questions, QuizQuestion } from '@/data/questions';
import { getBookById } from '@/data/bible-books';

const Bookmarks: React.FC = () => {
  const navigate = useNavigate();
  const { settings } = useApp();
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<QuizQuestion[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = () => {
    const bookmarkIds = getBookmarks();
    const bookmarked = questions.filter(q => bookmarkIds.includes(q.id));
    setBookmarkedQuestions(bookmarked);
  };

  const handleClearAll = () => {
    saveBookmarks([]);
    setBookmarkedQuestions([]);
  };

  const handleBookmarkToggle = (isBookmarked: boolean) => {
    // Reload bookmarks after toggle
    loadBookmarks();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400';
      case 'medium': return 'bg-amber-500/20 text-amber-700 dark:text-amber-400';
      case 'hard': return 'bg-rose-500/20 text-rose-700 dark:text-rose-400';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      {/* Header */}
      <div className="safe-top px-4 sm:px-5 pt-4 pb-6">
        <div className="flex items-center gap-3 mb-4">
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
              Bookmarked Questions
            </h1>
            <p className="text-sm text-muted-foreground">
              {bookmarkedQuestions.length} saved for review
            </p>
          </div>
          {bookmarkedQuestions.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-5 w-5" />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="mx-4 rounded-xl max-w-[calc(100vw-2rem)]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear All Bookmarks?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove all {bookmarkedQuestions.length} bookmarked questions.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                  <AlertDialogCancel className="mt-0">Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleClearAll}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Clear All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        {/* Flashcard Mode Link */}
        {bookmarkedQuestions.length > 0 && (
          <button
            onClick={() => navigate('/flashcards')}
            className={cn(
              'flex items-center gap-3 w-full mt-4 p-4 rounded-xl',
              'bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors',
              settings.animationsEnabled && 'animate-fade-in'
            )}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium text-foreground">Flashcard Mode</div>
              <div className="text-sm text-muted-foreground">
                Study with spaced repetition
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5 space-y-3">
        {bookmarkedQuestions.length === 0 ? (
          <div className={cn(
            'text-center py-16',
            settings.animationsEnabled && 'animate-fade-in'
          )}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <Bookmark className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              No Bookmarks Yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">
              Tap the bookmark icon on any question during a quiz to save it for later review.
            </p>
            <Button onClick={() => navigate('/books')} variant="outline">
              Start a Quiz
            </Button>
          </div>
        ) : (
          bookmarkedQuestions.map((question, index) => {
            const book = getBookById(question.bookId);
            const isExpanded = expandedId === question.id;
            
            return (
              <div
                key={question.id}
                className={cn(
                  'bg-card rounded-xl border border-border shadow-soft overflow-hidden',
                  settings.animationsEnabled && 'animate-slide-up'
                )}
                style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
              >
                {/* Question Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : question.id)}
                  className="w-full p-4 text-left flex items-start gap-3"
                >
                  <div className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                    'font-display text-xs font-semibold',
                    'bg-secondary text-secondary-foreground'
                  )}>
                    {book?.abbreviation.slice(0, 2) || '??'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground">
                        {book?.name}
                      </span>
                      <span className={cn(
                        'text-xs px-2 py-0.5 rounded-full capitalize',
                        getDifficultyColor(question.difficulty)
                      )}>
                        {question.difficulty}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground line-clamp-2">
                      {question.question}
                    </p>
                  </div>
                  <BookmarkButton
                    questionId={question.id}
                    size="sm"
                    onToggle={handleBookmarkToggle}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className={cn(
                    'px-4 pb-4 border-t border-border pt-4',
                    settings.animationsEnabled && 'animate-fade-in'
                  )}>
                    {/* Options */}
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={cn(
                            'p-3 rounded-lg text-sm',
                            optIndex === question.correctAnswer
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
                              : 'bg-secondary/50 text-muted-foreground'
                          )}
                        >
                          <span className="font-medium mr-2">
                            {String.fromCharCode(65 + optIndex)}.
                          </span>
                          {option}
                          {optIndex === question.correctAnswer && (
                            <span className="ml-2 text-xs">(Correct)</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Reference & Explanation */}
                    {question.reference && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{question.reference}</span>
                      </div>
                    )}
                    
                    {question.explanation && (
                      <div className="p-3 rounded-lg bg-accent/50 border border-border">
                        <p className="text-sm text-muted-foreground">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
