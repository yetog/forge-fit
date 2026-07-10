import { STORAGE_KEYS } from './storageUtils';
import { WK_KEYS } from './workoutStorage';

// All storage keys to include in save file
const ALL_KEYS = [
  ...Object.values(STORAGE_KEYS),
  ...Object.values(WK_KEYS),
  'settings', // From SettingsContext
];

export interface SaveFile {
  version: 1;
  exportedAt: string;
  appName: 'Forge Fit';
  data: Record<string, unknown>;
}

/**
 * Export all app data as a downloadable JSON save file
 */
export const exportSaveFile = (): void => {
  const data: Record<string, unknown> = {};

  // Collect all stored data
  ALL_KEYS.forEach(key => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      try {
        data[key] = JSON.parse(value);
      } catch {
        data[key] = value;
      }
    }
  });

  const saveFile: SaveFile = {
    version: 1,
    exportedAt: new Date().toISOString(),
    appName: 'Forge Fit',
    data,
  };

  // Create and download file
  const blob = new Blob([JSON.stringify(saveFile, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  link.href = url;
  link.download = `forge-fit-save-${date}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Import save file and restore all data
 */
export const importSaveFile = (file: File): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const saveFile = JSON.parse(content) as SaveFile;

        // Validate save file
        if (saveFile.appName !== 'Forge Fit') {
          resolve({ success: false, message: 'Invalid save file: Not a Forge Fit save' });
          return;
        }

        if (!saveFile.data || typeof saveFile.data !== 'object') {
          resolve({ success: false, message: 'Invalid save file: No data found' });
          return;
        }

        // Restore all data
        Object.entries(saveFile.data).forEach(([key, value]) => {
          localStorage.setItem(key, JSON.stringify(value));
        });

        resolve({
          success: true,
          message: `Save loaded! (from ${new Date(saveFile.exportedAt).toLocaleDateString()})`
        });
      } catch (error) {
        resolve({ success: false, message: 'Failed to read save file' });
      }
    };

    reader.onerror = () => {
      resolve({ success: false, message: 'Failed to read file' });
    };

    reader.readAsText(file);
  });
};

/**
 * Clear all app data (factory reset)
 */
export const clearAllData = (): void => {
  ALL_KEYS.forEach(key => {
    localStorage.removeItem(key);
  });
};
