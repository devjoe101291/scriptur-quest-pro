import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Volume2, 
  Sparkles, 
  Gauge, 
  Trash2,
  Info,
  BookOpen,
  Bell,
  Clock,
  Vibrate
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { 
  isNativePlatform, 
  getNotificationSettings, 
  scheduleDailyReminder,
  disableNotifications,
  requestLocalNotificationPermission 
} from '@/lib/notifications';

const Settings: React.FC = () => {
  const { settings, updateSettings, resetProgress } = useApp();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('09:00');
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    const notifSettings = getNotificationSettings();
    setNotificationsEnabled(notifSettings.enabled);
    setReminderTime(notifSettings.dailyReminderTime);
    setIsNative(isNativePlatform());
  }, []);

  const handleReset = () => {
    resetProgress();
  };

  const handleNotificationToggle = async (enabled: boolean) => {
    if (enabled) {
      const hasPermission = await requestLocalNotificationPermission();
      if (hasPermission) {
        await scheduleDailyReminder(reminderTime);
        setNotificationsEnabled(true);
      }
    } else {
      await disableNotifications();
      setNotificationsEnabled(false);
    }
  };

  const handleReminderTimeChange = async (time: string) => {
    setReminderTime(time);
    if (notificationsEnabled) {
      await scheduleDailyReminder(time);
    }
  };

  return (
    <div className="min-h-screen pb-24 parchment-gradient">
      {/* Header */}
      <div className="safe-top px-4 sm:px-5 pt-4 pb-6">
        <h1 className={cn(
          'font-display text-2xl font-bold text-foreground text-center',
          settings.animationsEnabled && 'animate-fade-in'
        )}>
          Settings
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5 space-y-6">
        {/* Appearance */}
        <div className="space-y-3">
          <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
            Appearance
          </h2>
          <div className={cn(
            'bg-card rounded-xl border border-border shadow-soft overflow-hidden',
            settings.animationsEnabled && 'animate-slide-up'
          )}>
            {/* Dark Mode */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <Moon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Dark Mode</p>
                  <p className="text-sm text-muted-foreground truncate">Use dark theme</p>
                </div>
              </div>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={(checked) => updateSettings({ darkMode: checked })}
              />
            </div>

            <div className="border-t border-border" />

            {/* Animations */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Animations</p>
                  <p className="text-sm text-muted-foreground truncate">Enable smooth animations</p>
                </div>
              </div>
              <Switch
                checked={settings.animationsEnabled}
                onCheckedChange={(checked) => updateSettings({ animationsEnabled: checked })}
              />
            </div>
          </div>
        </div>

        {/* Sound & Feedback */}
        <div className="space-y-3">
          <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
            Sound & Feedback
          </h2>
          <div className={cn(
            'bg-card rounded-xl border border-border shadow-soft overflow-hidden',
            settings.animationsEnabled && 'animate-slide-up'
          )}
          style={settings.animationsEnabled ? { animationDelay: '0.1s' } : undefined}
          >
            {/* Sound Effects */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <Volume2 className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Sound Effects</p>
                  <p className="text-sm text-muted-foreground truncate">Play sounds on actions</p>
                </div>
              </div>
              <Switch
                checked={settings.soundEnabled}
                onCheckedChange={(checked) => updateSettings({ soundEnabled: checked })}
              />
            </div>

            <div className="border-t border-border" />

            {/* Haptic Feedback */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <Vibrate className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Haptic Feedback</p>
                  <p className="text-sm text-muted-foreground truncate">Vibration on interactions</p>
                </div>
              </div>
              <Switch
                checked={settings.hapticFeedback}
                onCheckedChange={(checked) => updateSettings({ hapticFeedback: checked })}
              />
            </div>
          </div>
        </div>

        {/* Notifications (show on native platforms) */}
        {isNative && (
          <div className="space-y-3">
            <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
              Notifications
            </h2>
            <div className={cn(
              'bg-card rounded-xl border border-border shadow-soft overflow-hidden',
              settings.animationsEnabled && 'animate-slide-up'
            )}
            style={settings.animationsEnabled ? { animationDelay: '0.15s' } : undefined}
            >
              {/* Daily Reminder */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                    <Bell className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">Daily Reminder</p>
                    <p className="text-sm text-muted-foreground truncate">Notify for daily challenge</p>
                  </div>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={handleNotificationToggle}
                />
              </div>

              {notificationsEnabled && (
                <>
                  <div className="border-t border-border" />

                  {/* Reminder Time */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                        <Clock className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">Reminder Time</p>
                        <p className="text-sm text-muted-foreground truncate">When to notify</p>
                      </div>
                    </div>
                    <Select
                      value={reminderTime}
                      onValueChange={handleReminderTimeChange}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="07:00">7:00 AM</SelectItem>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Quiz Settings */}
        <div className="space-y-3">
          <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
            Quiz Settings
          </h2>
          <div className={cn(
            'bg-card rounded-xl border border-border shadow-soft overflow-hidden',
            settings.animationsEnabled && 'animate-slide-up'
          )}
          style={settings.animationsEnabled ? { animationDelay: '0.2s' } : undefined}
          >
            {/* Study Mode */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Study Mode</p>
                  <p className="text-sm text-muted-foreground truncate">Show verses & explanations</p>
                </div>
              </div>
              <Switch
                checked={settings.studyMode}
                onCheckedChange={(checked) => updateSettings({ studyMode: checked })}
              />
            </div>

            <div className="border-t border-border" />

            {/* Default Difficulty */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center">
                  <Gauge className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">Default Difficulty</p>
                  <p className="text-sm text-muted-foreground truncate">Starting difficulty</p>
                </div>
              </div>
              <Select
                value={settings.defaultDifficulty}
                onValueChange={(value) => 
                  updateSettings({ 
                    defaultDifficulty: value as 'easy' | 'medium' | 'hard' | 'all' 
                  })
                }
              >
                <SelectTrigger className="w-24 sm:w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                  <SelectItem value="all">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Data */}
        <div className="space-y-3">
          <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
            Data
          </h2>
          <div className={cn(
            'bg-card rounded-xl border border-border shadow-soft overflow-hidden',
            settings.animationsEnabled && 'animate-slide-up'
          )}
          style={settings.animationsEnabled ? { animationDelay: '0.3s' } : undefined}
          >
            {/* Reset Progress */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors active:bg-secondary/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium text-destructive">Reset Progress</p>
                      <p className="text-sm text-muted-foreground">Clear all quiz data</p>
                    </div>
                  </div>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="mx-4 rounded-xl max-w-[calc(100vw-2rem)]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset All Progress?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all your quiz history, scores, and achievements. 
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                  <AlertDialogCancel className="mt-0">Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleReset}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Reset Everything
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* About */}
        <div className="space-y-3">
          <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
            About
          </h2>
          <div className={cn(
            'bg-card rounded-xl border border-border shadow-soft p-4',
            settings.animationsEnabled && 'animate-slide-up'
          )}
          style={settings.animationsEnabled ? { animationDelay: '0.4s' } : undefined}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-glow flex-shrink-0">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-foreground">Bible Trivia</h3>
                <p className="text-sm text-muted-foreground">Version 1.0.0</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Test your knowledge of the Holy Scriptures with this comprehensive Bible trivia app 
              covering all 66 books of the King James Version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
