// Capacitor utilities and initialization
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { initializeNotifications } from './notifications';

// Check if running on native platform
export const isNativePlatform = (): boolean => {
  return Capacitor.isNativePlatform();
};

// Get current platform
export const getPlatform = (): string => {
  return Capacitor.getPlatform();
};

// Initialize status bar for native platforms
const initializeStatusBar = async (): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    // Set status bar style based on current theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    await StatusBar.setStyle({ style: isDarkMode ? Style.Dark : Style.Light });
    
    // Set status bar background color (Android only)
    if (getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: isDarkMode ? '#0f172a' : '#faf8f5' });
    }
    
    // Make status bar overlay (for transparent header)
    await StatusBar.setOverlaysWebView({ overlay: false });
  } catch (error) {
    console.error('Error initializing status bar:', error);
  }
};

// Update status bar when theme changes
export const updateStatusBarTheme = async (isDarkMode: boolean): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    await StatusBar.setStyle({ style: isDarkMode ? Style.Dark : Style.Light });
    if (getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: isDarkMode ? '#0f172a' : '#faf8f5' });
    }
  } catch (error) {
    console.error('Error updating status bar:', error);
  }
};

// Initialize keyboard behavior
const initializeKeyboard = async (): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    // Handle keyboard show/hide for better UX
    await Keyboard.addListener('keyboardWillShow', () => {
      document.body.classList.add('keyboard-visible');
    });
    
    await Keyboard.addListener('keyboardWillHide', () => {
      document.body.classList.remove('keyboard-visible');
    });
  } catch (error) {
    console.error('Error initializing keyboard:', error);
  }
};

// Haptic feedback functions
export const hapticImpact = async (style: 'light' | 'medium' | 'heavy' = 'light'): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    const impactStyle: ImpactStyle = 
      style === 'light' ? ImpactStyle.Light :
      style === 'medium' ? ImpactStyle.Medium :
      ImpactStyle.Heavy;
    
    await Haptics.impact({ style: impactStyle });
  } catch (error) {
    console.error('Error triggering haptic:', error);
  }
};

export const hapticNotification = async (type: 'success' | 'warning' | 'error' = 'success'): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    await Haptics.notification({ 
      type: type === 'success' ? 'SUCCESS' : type === 'warning' ? 'WARNING' : 'ERROR' 
    } as any);
  } catch (error) {
    console.error('Error triggering haptic notification:', error);
  }
};

export const hapticSelection = async (): Promise<void> => {
  if (!isNativePlatform()) return;
  
  try {
    await Haptics.selectionStart();
    await Haptics.selectionEnd();
  } catch (error) {
    console.error('Error triggering haptic selection:', error);
  }
};

// Initialize all Capacitor plugins
export const initializeCapacitor = async (): Promise<void> => {
  if (!isNativePlatform()) {
    console.log('Running in web mode');
    return;
  }
  
  console.log(`Running on ${getPlatform()} platform`);
  
  try {
    await initializeStatusBar();
    await initializeKeyboard();
    await initializeNotifications();
    
    console.log('Capacitor initialized successfully');
  } catch (error) {
    console.error('Error initializing Capacitor:', error);
  }
};

// Handle back button (Android)
export const setupBackButton = (handler: () => void): void => {
  if (!isNativePlatform() || getPlatform() !== 'android') return;
  
  document.addEventListener('backbutton', (e) => {
    e.preventDefault();
    handler();
  });
};
