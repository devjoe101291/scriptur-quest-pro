import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import AchievementBadge from '@/components/AchievementBadge';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { getAllAchievements, getUnlockedCount, ACHIEVEMENTS } from '@/lib/achievements';

const Achievements: React.FC = () => {
  const navigate = useNavigate();
  const { settings } = useApp();
  const { playTap } = useSoundEffects();
  
  const achievements = getAllAchievements();
  const { unlocked, total } = getUnlockedCount();
  const progressPercent = (unlocked / total) * 100;
  
  // Group achievements by category
  const streakAchievements = achievements.filter(a => a.category === 'streak');
  const scoreAchievements = achievements.filter(a => a.category === 'score');
  const completionAchievements = achievements.filter(a => a.category === 'completion');
  const specialAchievements = achievements.filter(a => a.category === 'special');

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      <div className="safe-top px-5 pt-4 pb-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              playTap();
              navigate(-1);
            }}
            className="rounded-xl"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-display text-xl font-bold text-foreground">
            Achievements
          </h1>
        </div>
        
        {/* Progress Overview */}
        <div className={cn(
          'p-5 rounded-2xl bg-card border border-border shadow-card mb-6',
          settings.animationsEnabled && 'animate-scale-in'
        )}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center">
              <Trophy className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-lg font-semibold text-foreground">
                {unlocked} of {total} Unlocked
              </h2>
              <p className="text-sm text-muted-foreground">
                {progressPercent.toFixed(0)}% complete
              </p>
            </div>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
        
        {/* Streak Achievements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-xl">🔥</span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Streak Achievements
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {streakAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={cn(
                  'p-3 rounded-xl bg-card border border-border',
                  settings.animationsEnabled && 'animate-fade-in'
                )}
                style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
              >
                <AchievementBadge
                  achievement={achievement}
                  size="sm"
                  showDetails={true}
                  animated={settings.animationsEnabled}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Score Achievements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-xl">⭐</span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Perfect Scores
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {scoreAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={cn(
                  'p-3 rounded-xl bg-card border border-border',
                  settings.animationsEnabled && 'animate-fade-in'
                )}
                style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
              >
                <AchievementBadge
                  achievement={achievement}
                  size="sm"
                  showDetails={true}
                  animated={settings.animationsEnabled}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Completion Achievements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-xl">🎯</span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Completion Milestones
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {completionAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={cn(
                  'p-3 rounded-xl bg-card border border-border',
                  settings.animationsEnabled && 'animate-fade-in'
                )}
                style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
              >
                <AchievementBadge
                  achievement={achievement}
                  size="sm"
                  showDetails={true}
                  animated={settings.animationsEnabled}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Achievements */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-xl">✨</span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Special Achievements
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {specialAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={cn(
                  'p-3 rounded-xl bg-card border border-border',
                  settings.animationsEnabled && 'animate-fade-in'
                )}
                style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
              >
                <AchievementBadge
                  achievement={achievement}
                  size="sm"
                  showDetails={true}
                  animated={settings.animationsEnabled}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
