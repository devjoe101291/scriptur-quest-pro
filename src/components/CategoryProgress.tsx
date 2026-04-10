import React from 'react';
import { QUIZ_CATEGORIES } from '@/data/questions';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { CategoryScore } from '@/lib/storage';
import { cn } from '@/lib/utils';

interface CategoryProgressProps {
  categoryScores: Record<string, CategoryScore>;
  animationsEnabled: boolean;
}

const CategoryProgress: React.FC<CategoryProgressProps> = ({ categoryScores, animationsEnabled }) => {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-lg font-semibold text-foreground px-1">
        Category Mastery
      </h2>

      {QUIZ_CATEGORIES.map((cat, index) => {
        const score = categoryScores[cat.id];
        const accuracy = score && score.totalQuestions > 0
          ? Math.round((score.correctAnswers / score.totalQuestions) * 100)
          : 0;
        const mastered = accuracy >= 80;

        return (
          <div
            key={cat.id}
            className={cn(
              'p-4 rounded-xl bg-card border border-border shadow-soft',
              animationsEnabled && 'animate-slide-up'
            )}
            style={animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    {cat.name}
                    {mastered && <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-semibold">Mastered</span>}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {score
                      ? `${score.quizzesTaken} quiz${score.quizzesTaken !== 1 ? 'zes' : ''} · ${score.correctAnswers}/${score.totalQuestions} correct`
                      : 'Not started yet'}
                  </p>
                </div>
              </div>
              <span className={cn(
                'font-display font-semibold text-sm',
                mastered ? 'text-success' : accuracy > 0 ? 'text-foreground' : 'text-muted-foreground'
              )}>
                {accuracy}%
              </span>
            </div>
            <ProgressBar value={accuracy} className="h-2" />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryProgress;
