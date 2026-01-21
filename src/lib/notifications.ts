// Push notification service for Capacitor
import { Capacitor } from '@capacitor/core';
import { PushNotifications, Token, PushNotificationSchema } from '@capacitor/push-notifications';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

const NOTIFICATION_STORAGE_KEY = 'bible-trivia-notifications';

export interface NotificationSettings {
  enabled: boolean;
  dailyReminderTime: string; // HH:mm format
  pushToken: string | null;
}

const DEFAULT_SETTINGS: NotificationSettings = {
  enabled: true,
  dailyReminderTime: '09:00',
  pushToken: null,
};

// Get notification settings
export const getNotificationSettings = (): NotificationSettings => {
  try {
    const stored = localStorage.getItem(NOTIFICATION_STORAGE_KEY);
    return stored ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
};

// Save notification settings
export const saveNotificationSettings = (settings: NotificationSettings): void => {
  try {
    localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save notification settings:', error);
  }
};

// Check if running on native platform
export const isNativePlatform = (): boolean => {
  return Capacitor.isNativePlatform();
};

// Request push notification permissions
export const requestPushPermission = async (): Promise<boolean> => {
  // if (!isNativePlatform()) {
  //   console.log('Push notifications only available on native platforms');
  //   return false;
  // }
  
  // try {
  //   let permStatus = await PushNotifications.checkPermissions();
    
  //   if (permStatus.receive === 'prompt') {
  //     permStatus = await PushNotifications.requestPermissions();
  //   }
    
  //   if (permStatus.receive !== 'granted') {
  //     console.log('Push notification permission denied');
  //     return false;
  //   }
    
  //   // Register for push notifications
  //   await PushNotifications.register();
  //   return true;
  // } catch (error) {
  //   console.error('Error requesting push permission:', error);
  //   return false;
  // }
   return false;
};

// Initialize push notifications with listeners
export const initializePushNotifications = async (): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    // Listen for registration
    await PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success:', token.value);
      const settings = getNotificationSettings();
      settings.pushToken = token.value;
      saveNotificationSettings(settings);
    });
    
    // Listen for registration errors
    await PushNotifications.addListener('registrationError', (error) => {
      console.error('Push registration error:', error);
    });
    
    // Listen for push notifications received
    await PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      console.log('Push notification received:', notification);
    });
    
    // Listen for push notification action
    await PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('Push notification action:', notification);
      // Navigate to daily challenge when tapped
      window.location.href = '/daily-challenge';
    });
    
    // Request permission
    await requestPushPermission();
  } catch (error) {
    console.error('Error initializing push notifications:', error);
  }
};

// Request local notification permissions
export const requestLocalNotificationPermission = async (): Promise<boolean> => {
  if (!isNativePlatform()) return false;
  
  try {
    const permStatus = await LocalNotifications.requestPermissions();
    return permStatus.display === 'granted';
  } catch (error) {
    console.error('Error requesting local notification permission:', error);
    return false;
  }
};

// Schedule daily challenge reminder
export const scheduleDailyReminder = async (time: string = '09:00'): Promise<boolean> => {
  if (!isNativePlatform()) {
    console.log('Local notifications only available on native platforms');
    return false;
  }
  
  try {
    // Cancel existing reminders first
    await cancelDailyReminder();
    
    const [hours, minutes] = time.split(':').map(Number);
    
    // Calculate next notification time
    const now = new Date();
    const scheduledTime = new Date();
    scheduledTime.setHours(hours, minutes, 0, 0);
    
    // If time has passed today, schedule for tomorrow
    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }
    
    const options: ScheduleOptions = {
      notifications: [
        {
          title: '📖 Daily Bible Challenge',
          body: 'Your daily challenge is ready! Keep your streak going! 🔥',
          id: 1001,
          schedule: {
            at: scheduledTime,
            repeats: true,
            every: 'day',
          },
          sound: 'default',
          smallIcon: 'ic_stat_icon',
          largeIcon: 'ic_launcher',
          actionTypeId: 'OPEN_DAILY_CHALLENGE',
        },
      ],
    };
    
    await LocalNotifications.schedule(options);
    
    // Save settings
    const settings = getNotificationSettings();
    settings.enabled = true;
    settings.dailyReminderTime = time;
    saveNotificationSettings(settings);
    
    console.log('Daily reminder scheduled for:', time);
    return true;
  } catch (error) {
    console.error('Error scheduling daily reminder:', error);
    return false;
  }
};

// Cancel daily reminder
export const cancelDailyReminder = async (): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    await LocalNotifications.cancel({ notifications: [{ id: 1001 }] });
    console.log('Daily reminder cancelled');
  } catch (error) {
    console.error('Error cancelling daily reminder:', error);
  }
};

// Initialize local notifications
export const initializeLocalNotifications = async (): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    // Request permission
    await requestLocalNotificationPermission();
    
    // Listen for notification actions
    await LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
      console.log('Local notification action:', notification);
      if (notification.notification.id === 1001) {
        window.location.href = '/daily-challenge';
      }
    });
    
    // Check if reminders should be enabled
    const settings = getNotificationSettings();
    if (settings.enabled) {
      await scheduleDailyReminder(settings.dailyReminderTime);
    }
  } catch (error) {
    console.error('Error initializing local notifications:', error);
  }
};

// Initialize all notifications
export const initializeNotifications = async (): Promise<void> => {
  // await initializePushNotifications();
  await initializeLocalNotifications();
};

// Disable all notifications
export const disableNotifications = async (): Promise<void> => {
  await cancelDailyReminder();
  const settings = getNotificationSettings();
  settings.enabled = false;
  saveNotificationSettings(settings);
};
