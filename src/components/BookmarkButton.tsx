import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toggleBookmark, isBookmarked } from '@/lib/storage';
import { hapticImpact } from '@/lib/capacitor';

interface BookmarkButtonProps {
  questionId: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onToggle?: (isBookmarked: boolean) => void;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  questionId,
  className,
  size = 'md',
  onToggle,
}) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(questionId));
  }, [questionId]);

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await hapticImpact('light');
    const newState = toggleBookmark(questionId);
    setBookmarked(newState);
    onToggle?.(newState);
  };

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const buttonSizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'rounded-lg transition-all duration-200 touch-feedback',
        'hover:bg-secondary active:scale-95',
        buttonSizeClasses[size],
        bookmarked ? 'text-amber-500' : 'text-muted-foreground hover:text-foreground',
        className
      )}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {bookmarked ? (
        <BookmarkCheck className={cn(sizeClasses[size], 'fill-current')} />
      ) : (
        <Bookmark className={sizeClasses[size]} />
      )}
    </button>
  );
};

export default BookmarkButton;
