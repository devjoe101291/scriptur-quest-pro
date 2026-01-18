import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Trophy, 
  Medal, 
  Flame, 
  Crown,
  User,
  RefreshCw,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { 
  getTodayLeaderboard, 
  updateUserName, 
  getLeaderboard,
  refreshSimulatedEntries,
  getUserRank,
  getAllTimeStats,
  LeaderboardEntry 
} from '@/lib/leaderboard';

const Leaderboard: React.FC = () => {
  const navigate = useNavigate();
  const { settings } = useApp();
  const { playTap } = useSoundEffects();
  
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [userName, setUserName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [allTimeStats, setAllTimeStats] = useState({ totalGames: 0, bestScore: 0, avgScore: 0 });
  
  useEffect(() => {
    loadLeaderboard();
  }, []);
  
  const loadLeaderboard = () => {
    const todayEntries = getTodayLeaderboard();
    setEntries(todayEntries);
    setUserName(getLeaderboard().userName);
    setUserRank(getUserRank());
    setAllTimeStats(getAllTimeStats());
  };
  
  const handleRefresh = () => {
    playTap();
    refreshSimulatedEntries();
    loadLeaderboard();
  };
  
  const handleSaveName = () => {
    if (userName.trim()) {
      updateUserName(userName.trim());
      loadLeaderboard();
    }
    setIsEditing(false);
    playTap();
  };
  
  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-sm font-bold text-muted-foreground w-5 text-center">{index + 1}</span>;
    }
  };
  
  const getRankBgClass = (index: number, isCurrentUser: boolean) => {
    if (isCurrentUser) return 'bg-primary/10 border-primary/30';
    switch (index) {
      case 0:
        return 'bg-yellow-500/10 border-yellow-500/30';
      case 1:
        return 'bg-gray-400/10 border-gray-400/30';
      case 2:
        return 'bg-amber-600/10 border-amber-600/30';
      default:
        return 'bg-card border-border';
    }
  };

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      <div className="safe-top px-4 sm:px-5 pt-4 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                playTap();
                navigate('/');
              }}
              className="rounded-xl h-10 w-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-display text-xl font-bold text-foreground">
              Leaderboard
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            className="rounded-xl h-10 w-10"
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
        </div>
        
        {/* User Stats Card */}
        <div className={cn(
          'p-4 sm:p-5 rounded-2xl royal-gradient text-primary-foreground shadow-card mb-6',
          settings.animationsEnabled && 'animate-scale-in'
        )}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center">
              <User className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="flex-1 min-w-0">
              {isEditing ? (
                <div className="flex gap-2">
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="h-9 bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                    placeholder="Enter your name"
                    autoFocus
                  />
                  <Button
                    size="sm"
                    onClick={handleSaveName}
                    className="bg-white/20 hover:bg-white/30 text-primary-foreground"
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    playTap();
                    setIsEditing(true);
                  }}
                  className="text-left w-full"
                >
                  <p className="font-display text-lg sm:text-xl font-bold truncate">{userName}</p>
                  <p className="text-sm text-primary-foreground/70">Tap to edit name</p>
                </button>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 rounded-lg bg-white/10 text-center">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1" />
              <p className="text-lg sm:text-xl font-bold">{userRank || '-'}</p>
              <p className="text-xs opacity-80">Today's Rank</p>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-white/10 text-center">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1" />
              <p className="text-lg sm:text-xl font-bold">{allTimeStats.bestScore}/10</p>
              <p className="text-xs opacity-80">Best Score</p>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-white/10 text-center">
              <Flame className="h-4 w-4 sm:h-5 sm:w-5 mx-auto mb-1" />
              <p className="text-lg sm:text-xl font-bold">{allTimeStats.totalGames}</p>
              <p className="text-xs opacity-80">Games</p>
            </div>
          </div>
        </div>
        
        {/* Today's Leaderboard */}
        <div className="space-y-3">
          <h2 className="font-display text-lg font-semibold text-foreground px-1">
            Today's Rankings
          </h2>
          
          {entries.length === 0 ? (
            <div className="p-6 rounded-xl bg-card border border-border text-center">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground">No entries yet today.</p>
              <p className="text-sm text-muted-foreground mt-1">Complete the daily challenge to join!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {entries.map((entry, index) => (
                <div
                  key={entry.id}
                  className={cn(
                    'p-3 sm:p-4 rounded-xl border transition-all',
                    getRankBgClass(index, entry.isCurrentUser),
                    entry.isCurrentUser && 'ring-2 ring-primary/50',
                    settings.animationsEnabled && 'animate-slide-up'
                  )}
                  style={settings.animationsEnabled ? { animationDelay: `${index * 0.05}s` } : undefined}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 flex justify-center">
                      {getRankIcon(index)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={cn(
                          'font-medium truncate',
                          entry.isCurrentUser ? 'text-primary' : 'text-foreground'
                        )}>
                          {entry.name}
                        </p>
                        {entry.isCurrentUser && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary flex-shrink-0">
                            You
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Flame className="h-3 w-3 text-orange-500" />
                          {entry.streak} streak
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <p className="text-lg sm:text-xl font-bold text-foreground">{entry.score}/10</p>
                      <p className="text-xs text-muted-foreground">{entry.percentage}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
