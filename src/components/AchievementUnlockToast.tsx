import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Achievement } from '@/lib/achievements';

interface AchievementUnlockToastProps {
  achievement: Achievement;
  onClose: () => void;
}

const AchievementUnlockToast: React.FC<AchievementUnlockToastProps> = ({
  achievement,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 50);
    
    // Auto-close after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={cn(
      'fixed top-4 left-1/2 -translate-x-1/2 z-50',
      'transition-all duration-300 ease-out',
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-4'
    )}>
      <div className="bg-card border border-border shadow-xl rounded-2xl p-4 flex items-center gap-4 min-w-[280px]">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-2xl shadow-lg animate-bounce">
          {achievement.icon}
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
            Achievement Unlocked!
          </p>
          <p className="font-bold text-foreground">
            {achievement.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementUnlockToast;
