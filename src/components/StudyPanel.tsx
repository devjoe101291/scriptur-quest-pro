import React from 'react';
import { BookOpen, Lightbulb, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StudyPanelProps {
  reference?: string;
  explanation?: string;
  verseText?: string;
  isCorrect: boolean;
  animationsEnabled?: boolean;
}

const StudyPanel: React.FC<StudyPanelProps> = ({
  reference,
  explanation,
  verseText,
  isCorrect,
  animationsEnabled = true,
}) => {
  if (!reference && !explanation && !verseText) {
    return null;
  }

  return (
    <div className={cn(
      'mt-6 space-y-4',
      animationsEnabled && 'animate-slide-up'
    )}>
      {/* Result Banner */}
      <div className={cn(
        'p-4 rounded-xl border',
        isCorrect 
          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
          : 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-400'
      )}>
        <p className="font-display font-semibold text-center">
          {isCorrect ? '✓ Correct Answer!' : '✗ Incorrect Answer'}
        </p>
      </div>

      {/* Bible Reference */}
      {reference && (
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-display font-semibold text-sm text-primary">
              Scripture Reference
            </span>
          </div>
          <p className="font-medium text-foreground">{reference}</p>
        </div>
      )}

      {/* Verse Text (when available) */}
      {verseText && (
        <div className="p-4 rounded-xl bg-secondary/50 border border-border">
          <p className="text-sm italic text-foreground leading-relaxed">
            "{verseText}"
          </p>
        </div>
      )}

      {/* Explanation */}
      {explanation && (
        <div className="p-4 rounded-xl bg-accent/50 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <span className="font-display font-semibold text-sm text-foreground">
              Learn More
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudyPanel;
