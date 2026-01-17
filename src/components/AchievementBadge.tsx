import React from 'react';
import { cn } from '@/lib/utils';
import { Achievement } from '@/lib/achievements';

interface AchievementBadgeProps {
  achievement: Achievement & { unlocked: boolean };
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  animated?: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  achievement,
  size = 'md',
  showDetails = true,
  animated = true,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  };

  const categoryColors = {
    streak: 'from-orange-500 to-red-500',
    score: 'from-yellow-400 to-amber-500',
    completion: 'from-blue-500 to-indigo-500',
    special: 'from-purple-500 to-pink-500',
  };

  return (
    <div className={cn(
      'flex flex-col items-center gap-2',
      animated && achievement.unlocked && 'animate-fade-in'
    )}>
      <div className={cn(
        'rounded-full flex items-center justify-center relative',
        sizeClasses[size],
        achievement.unlocked 
          ? `bg-gradient-to-br ${categoryColors[achievement.category]} shadow-lg`
          : 'bg-secondary/50 border-2 border-dashed border-muted-foreground/30'
      )}>
        <span className={cn(
          achievement.unlocked ? 'grayscale-0' : 'grayscale opacity-40'
        )}>
          {achievement.icon}
        </span>
        
        {achievement.unlocked && (
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        )}
      </div>
      
      {showDetails && (
        <div className="text-center">
          <p className={cn(
            'font-medium text-sm',
            achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
          )}>
            {achievement.name}
          </p>
          <p className="text-xs text-muted-foreground max-w-[120px]">
            {achievement.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default AchievementBadge;
