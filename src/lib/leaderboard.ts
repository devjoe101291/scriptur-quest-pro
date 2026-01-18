// Local leaderboard storage using localStorage
// Simulates a leaderboard with local scores + generated "other players"

const STORAGE_KEY = 'bible-trivia-leaderboard';

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  percentage: number;
  streak: number;
  date: string;
  isCurrentUser: boolean;
}

export interface LeaderboardData {
  entries: LeaderboardEntry[];
  userName: string;
}

const DEFAULT_LEADERBOARD: LeaderboardData = {
  entries: [],
  userName: 'You',
};

// Generate a unique ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
};

// Simulated player names for local leaderboard
const SIMULATED_NAMES = [
  'GraceWalker', 'FaithSeeker', 'BibleScholar', 'TruthFinder', 'PsalmLover',
  'GospelGuard', 'VerseMaster', 'HolyReader', 'ScripturePro', 'WordWise',
  'SpiritGuided', 'ChapterChamp', 'ProverbsKing', 'DiscipleDaily', 'BlessedOne',
  'FaithfulFive', 'GloryBound', 'HeavenlyMind', 'LightBearer', 'MercySeeker',
  'PeaceMaker', 'RighteousPath', 'SalvationJoy', 'TrustInHim', 'WisdomWay'
];

// Get stored leaderboard
export const getLeaderboard = (): LeaderboardData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with some simulated entries
    const initial = initializeSimulatedLeaderboard();
    saveLeaderboard(initial);
    return initial;
  } catch {
    return DEFAULT_LEADERBOARD;
  }
};

// Save leaderboard
export const saveLeaderboard = (data: LeaderboardData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save leaderboard:', error);
  }
};

// Initialize with simulated entries
const initializeSimulatedLeaderboard = (): LeaderboardData => {
  const today = new Date().toISOString().split('T')[0];
  const entries: LeaderboardEntry[] = [];
  
  // Generate 10-15 simulated entries
  const count = Math.floor(Math.random() * 6) + 10;
  const usedNames = new Set<string>();
  
  for (let i = 0; i < count; i++) {
    let name: string;
    do {
      name = SIMULATED_NAMES[Math.floor(Math.random() * SIMULATED_NAMES.length)];
    } while (usedNames.has(name));
    usedNames.add(name);
    
    const score = Math.floor(Math.random() * 8) + 3; // 3-10 correct
    const percentage = score * 10;
    const streak = Math.floor(Math.random() * 30) + 1;
    
    entries.push({
      id: generateId(),
      name,
      score,
      percentage,
      streak,
      date: today,
      isCurrentUser: false,
    });
  }
  
  // Sort by score descending
  entries.sort((a, b) => b.score - a.score || b.streak - a.streak);
  
  return {
    entries,
    userName: 'You',
  };
};

// Update user name
export const updateUserName = (name: string): void => {
  const data = getLeaderboard();
  data.userName = name;
  // Update all existing user entries
  data.entries = data.entries.map(entry => 
    entry.isCurrentUser ? { ...entry, name } : entry
  );
  saveLeaderboard(data);
};

// Add user's score to leaderboard
export const addUserScore = (
  score: number, 
  percentage: number, 
  streak: number
): LeaderboardEntry => {
  const data = getLeaderboard();
  const today = new Date().toISOString().split('T')[0];
  
  // Remove any previous user entry from today
  data.entries = data.entries.filter(
    entry => !(entry.isCurrentUser && entry.date === today)
  );
  
  // Create new entry
  const newEntry: LeaderboardEntry = {
    id: generateId(),
    name: data.userName,
    score,
    percentage,
    streak,
    date: today,
    isCurrentUser: true,
  };
  
  data.entries.push(newEntry);
  
  // Sort by score descending, then streak
  data.entries.sort((a, b) => b.score - a.score || b.streak - a.streak);
  
  // Keep only top 100 entries
  data.entries = data.entries.slice(0, 100);
  
  saveLeaderboard(data);
  return newEntry;
};

// Get today's leaderboard
export const getTodayLeaderboard = (): LeaderboardEntry[] => {
  const data = getLeaderboard();
  const today = new Date().toISOString().split('T')[0];
  
  // Filter today's entries and include some "all-time" leaders
  const todayEntries = data.entries.filter(entry => entry.date === today);
  
  // If not many entries for today, refresh with new simulated ones
  if (todayEntries.filter(e => !e.isCurrentUser).length < 5) {
    refreshSimulatedEntries();
    return getLeaderboard().entries.filter(e => e.date === today);
  }
  
  return todayEntries;
};

// Refresh simulated entries for a new day
export const refreshSimulatedEntries = (): void => {
  const data = getLeaderboard();
  const today = new Date().toISOString().split('T')[0];
  
  // Keep user's entries
  const userEntries = data.entries.filter(entry => entry.isCurrentUser);
  
  // Generate new simulated entries
  const count = Math.floor(Math.random() * 6) + 8;
  const usedNames = new Set<string>();
  const newSimulated: LeaderboardEntry[] = [];
  
  for (let i = 0; i < count; i++) {
    let name: string;
    do {
      name = SIMULATED_NAMES[Math.floor(Math.random() * SIMULATED_NAMES.length)];
    } while (usedNames.has(name));
    usedNames.add(name);
    
    const score = Math.floor(Math.random() * 8) + 3;
    const percentage = score * 10;
    const streak = Math.floor(Math.random() * 30) + 1;
    
    newSimulated.push({
      id: generateId(),
      name,
      score,
      percentage,
      streak,
      date: today,
      isCurrentUser: false,
    });
  }
  
  // Combine and sort
  data.entries = [...userEntries, ...newSimulated]
    .sort((a, b) => b.score - a.score || b.streak - a.streak)
    .slice(0, 100);
  
  saveLeaderboard(data);
};

// Get user's rank
export const getUserRank = (): number | null => {
  const todayEntries = getTodayLeaderboard();
  const userEntry = todayEntries.find(entry => entry.isCurrentUser);
  if (!userEntry) return null;
  return todayEntries.indexOf(userEntry) + 1;
};

// Get all-time stats
export const getAllTimeStats = (): { totalGames: number; bestScore: number; avgScore: number } => {
  const data = getLeaderboard();
  const userEntries = data.entries.filter(entry => entry.isCurrentUser);
  
  if (userEntries.length === 0) {
    return { totalGames: 0, bestScore: 0, avgScore: 0 };
  }
  
  const totalGames = userEntries.length;
  const bestScore = Math.max(...userEntries.map(e => e.score));
  const avgScore = Math.round(userEntries.reduce((sum, e) => sum + e.score, 0) / totalGames);
  
  return { totalGames, bestScore, avgScore };
};

// Clear all leaderboard data
export const clearLeaderboard = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
