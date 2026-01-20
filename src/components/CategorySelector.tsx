import React from 'react';
import { cn } from '@/lib/utils';
import { QUIZ_CATEGORIES, QuizCategory, getCategoryQuestionCount } from '@/data/questions';
import { useApp } from '@/contexts/AppContext';

interface CategorySelectorProps {
  selected: QuizCategory | 'all';
  onSelect: (category: QuizCategory | 'all') => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ selected, onSelect }) => {
  const { settings } = useApp();

  return (
    <div className="space-y-2">
      {/* All Categories Option */}
      <button
        onClick={() => onSelect('all')}
        className={cn(
          'w-full p-4 rounded-xl border transition-all text-left',
          'flex items-center gap-3',
          selected === 'all'
            ? 'border-primary bg-primary/10 shadow-sm'
            : 'border-border bg-card hover:bg-secondary/50',
          settings.animationsEnabled && 'transition-transform hover:scale-[1.01]'
        )}
      >
        <span className="text-2xl">📚</span>
        <div className="flex-1">
          <span className={cn(
            'font-medium block',
            selected === 'all' ? 'text-primary' : 'text-foreground'
          )}>
            All Categories
          </span>
          <span className="text-xs text-muted-foreground">
            Questions from this book only
          </span>
        </div>
        {selected === 'all' && (
          <div className="w-2 h-2 rounded-full bg-primary" />
        )}
      </button>

      {/* Category Options */}
      <div className="grid grid-cols-2 gap-2">
        {QUIZ_CATEGORIES.map((category) => {
          const count = getCategoryQuestionCount(category.id);
          const isSelected = selected === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              disabled={count === 0}
              className={cn(
                'p-3 rounded-xl border transition-all text-left',
                'flex flex-col gap-1',
                isSelected
                  ? 'border-primary bg-primary/10 shadow-sm'
                  : 'border-border bg-card hover:bg-secondary/50',
                count === 0 && 'opacity-50 cursor-not-allowed',
                settings.animationsEnabled && 'transition-transform hover:scale-[1.01]'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{category.icon}</span>
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span className={cn(
                'font-medium text-sm',
                isSelected ? 'text-primary' : 'text-foreground'
              )}>
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {count} questions
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
