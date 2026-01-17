const STORAGE_KEY = 'bible-trivia-achievements';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'streak' | 'score' | 'completion' | 'special';
  requirement: number;
  unlockedAt?: number;
}

export interface AchievementProgress {
  unlockedAchievements: string[];
  lastChecked: number;
}

// All available achievements
export const ACHIEVEMENTS: Achievement[] = [
  // Streak achievements
  {
    id: 'streak_3',
    name: 'Getting Started',
    description: 'Complete daily challenges 3 days in a row',
    icon: '🔥',
    category: 'streak',
    requirement: 3,
  },
  {
    id: 'streak_7',
    name: 'Week Warrior',
    description: 'Complete daily challenges 7 days in a row',
    icon: '⚡',
    category: 'streak',
    requirement: 7,
  },
  {
    id: 'streak_14',
    name: 'Fortnight Faith',
    description: 'Complete daily challenges 14 days in a row',
    icon: '💪',
    category: 'streak',
    requirement: 14,
  },
  {
    id: 'streak_30',
    name: 'Monthly Master',
    description: 'Complete daily challenges 30 days in a row',
    icon: '👑',
    category: 'streak',
    requirement: 30,
  },
  {
    id: 'streak_100',
    name: 'Century Club',
    description: 'Complete daily challenges 100 days in a row',
    icon: '🏆',
    category: 'streak',
    requirement: 100,
  },
  
  // Perfect score achievements
  {
    id: 'perfect_1',
    name: 'Perfect Day',
    description: 'Score 100% on a daily challenge',
    icon: '⭐',
    category: 'score',
    requirement: 1,
  },
  {
    id: 'perfect_5',
    name: 'Shining Star',
    description: 'Score 100% on 5 daily challenges',
    icon: '🌟',
    category: 'score',
    requirement: 5,
  },
  {
    id: 'perfect_10',
    name: 'Scripture Scholar',
    description: 'Score 100% on 10 daily challenges',
    icon: '📖',
    category: 'score',
    requirement: 10,
  },
  {
    id: 'perfect_25',
    name: 'Bible Expert',
    description: 'Score 100% on 25 daily challenges',
    icon: '🎓',
    category: 'score',
    requirement: 25,
  },
  
  // Completion achievements
  {
    id: 'complete_1',
    name: 'First Steps',
    description: 'Complete your first daily challenge',
    icon: '🎯',
    category: 'completion',
    requirement: 1,
  },
  {
    id: 'complete_10',
    name: 'Dedicated Disciple',
    description: 'Complete 10 daily challenges',
    icon: '📿',
    category: 'completion',
    requirement: 10,
  },
  {
    id: 'complete_25',
    name: 'Faithful Follower',
    description: 'Complete 25 daily challenges',
    icon: '✝️',
    category: 'completion',
    requirement: 25,
  },
  {
    id: 'complete_50',
    name: 'Bible Buff',
    description: 'Complete 50 daily challenges',
    icon: '📚',
    category: 'completion',
    requirement: 50,
  },
  {
    id: 'complete_100',
    name: 'Scripture Sage',
    description: 'Complete 100 daily challenges',
    icon: '🦉',
    category: 'completion',
    requirement: 100,
  },
  
  // Special achievements
  {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'Complete a daily challenge before 8 AM',
    icon: '🌅',
    category: 'special',
    requirement: 1,
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Complete a daily challenge after 10 PM',
    icon: '🦉',
    category: 'special',
    requirement: 1,
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Complete a daily challenge in under 2 minutes',
    icon: '⚡',
    category: 'special',
    requirement: 1,
  },
];

const DEFAULT_PROGRESS: AchievementProgress = {
  unlockedAchievements: [],
  lastChecked: 0,
};

// Get achievement progress from storage
export const getAchievementProgress = (): AchievementProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parsing errors
  }
  return { ...DEFAULT_PROGRESS };
};

// Save achievement progress
export const saveAchievementProgress = (progress: AchievementProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save achievements:', error);
  }
};

// Check and unlock achievements based on daily challenge data
export const checkAchievements = (
  dailyData: {
    streak: number;
    longestStreak: number;
    totalChallengesCompleted: number;
    perfectDays: number;
    lastCompletedTime?: number;
    lastTimeTaken?: number;
  }
): Achievement[] => {
  const progress = getAchievementProgress();
  const newlyUnlocked: Achievement[] = [];
  
  for (const achievement of ACHIEVEMENTS) {
    // Skip if already unlocked
    if (progress.unlockedAchievements.includes(achievement.id)) {
      continue;
    }
    
    let shouldUnlock = false;
    
    switch (achievement.category) {
      case 'streak':
        shouldUnlock = Math.max(dailyData.streak, dailyData.longestStreak) >= achievement.requirement;
        break;
      case 'score':
        shouldUnlock = dailyData.perfectDays >= achievement.requirement;
        break;
      case 'completion':
        shouldUnlock = dailyData.totalChallengesCompleted >= achievement.requirement;
        break;
      case 'special':
        if (achievement.id === 'early_bird' && dailyData.lastCompletedTime) {
          const hour = new Date(dailyData.lastCompletedTime).getHours();
          shouldUnlock = hour < 8;
        } else if (achievement.id === 'night_owl' && dailyData.lastCompletedTime) {
          const hour = new Date(dailyData.lastCompletedTime).getHours();
          shouldUnlock = hour >= 22;
        } else if (achievement.id === 'speed_demon' && dailyData.lastTimeTaken) {
          shouldUnlock = dailyData.lastTimeTaken < 120000; // 2 minutes in ms
        }
        break;
    }
    
    if (shouldUnlock) {
      progress.unlockedAchievements.push(achievement.id);
      newlyUnlocked.push({
        ...achievement,
        unlockedAt: Date.now(),
      });
    }
  }
  
  if (newlyUnlocked.length > 0) {
    progress.lastChecked = Date.now();
    saveAchievementProgress(progress);
  }
  
  return newlyUnlocked;
};

// Get all achievements with unlock status
export const getAllAchievements = (): (Achievement & { unlocked: boolean })[] => {
  const progress = getAchievementProgress();
  
  return ACHIEVEMENTS.map(achievement => ({
    ...achievement,
    unlocked: progress.unlockedAchievements.includes(achievement.id),
  }));
};

// Get unlocked count
export const getUnlockedCount = (): { unlocked: number; total: number } => {
  const progress = getAchievementProgress();
  return {
    unlocked: progress.unlockedAchievements.length,
    total: ACHIEVEMENTS.length,
  };
};
