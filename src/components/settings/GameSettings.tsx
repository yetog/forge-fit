
import React, { useRef, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Download, Upload, Trash2 } from "lucide-react";
import { exportSaveFile, importSaveFile, clearAllData } from "@/utils/saveFileUtils";
import { useToast } from "@/components/ui/use-toast";

interface GameSettingsProps {
  darkMode: boolean;
  notifications: boolean;
  hpLossRate: string;
  onDarkModeToggle: (checked: boolean) => void;
  onNotificationsToggle: (checked: boolean) => void;
  onHpLossRateChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({
  darkMode,
  notifications,
  hpLossRate,
  onDarkModeToggle,
  onNotificationsToggle,
  onHpLossRateChange
}) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleExport = () => {
    exportSaveFile();
    toast({
      title: "Save Exported",
      description: "Your progress has been downloaded as a save file.",
    });
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const result = await importSaveFile(file);

    toast({
      title: result.success ? "Save Loaded!" : "Error",
      description: result.message,
      variant: result.success ? "default" : "destructive",
    });

    if (result.success) {
      // Reload to apply imported data
      window.location.reload();
    }

    // Reset input
    e.target.value = '';
  };

  const handleReset = () => {
    clearAllData();
    toast({
      title: "Data Cleared",
      description: "All progress has been reset. Reloading...",
    });
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Dark Mode</div>
          <div className="text-sm text-rpg-light">Enable dark mode theme</div>
        </div>
        <Switch
          checked={darkMode}
          onCheckedChange={onDarkModeToggle}
          className="bg-rpg-dark data-[state=checked]:bg-rpg-accent"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Notifications</div>
          <div className="text-sm text-rpg-light">Receive quest reminders</div>
        </div>
        <Switch
          checked={notifications}
          onCheckedChange={onNotificationsToggle}
          className="bg-rpg-dark data-[state=checked]:bg-rpg-accent"
        />
      </div>
      
      <div>
        <label className="block text-rpg-accent font-rpg mb-1">
          HP Loss Rate
        </label>
        <select
          className="w-full p-2 bg-rpg-dark border border-rpg-light/30 rounded-md text-white focus:border-rpg-accent/70 focus:outline-none"
          value={hpLossRate}
          onChange={onHpLossRateChange}
        >
          <option value="low">Low (5 HP per missed daily)</option>
          <option value="medium">Medium (10 HP per missed daily)</option>
          <option value="high">High (20 HP per missed daily)</option>
        </select>
        <p className="text-xs text-rpg-light mt-1">How much HP you lose when missing daily quests</p>
      </div>

      {/* Save Data Section */}
      <div className="border-t border-rpg-accent/30 pt-4 mt-4">
        <h3 className="text-lg font-medium text-rpg-accent mb-3">Save Data</h3>
        <p className="text-sm text-rpg-light mb-4">
          Export your progress as a save file to back up or transfer to another device.
        </p>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handleExport}
            className="w-full bg-rpg-accent hover:bg-rpg-accent/80 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Save File
          </Button>

          <Button
            onClick={handleImportClick}
            variant="outline"
            className="w-full border-rpg-accent/50 text-rpg-accent hover:bg-rpg-accent/10"
          >
            <Upload className="w-4 h-4 mr-2" />
            Load Save File
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border-t border-red-500/30 pt-4 mt-4">
        <h3 className="text-lg font-medium text-red-400 mb-3">Danger Zone</h3>

        {!showResetConfirm ? (
          <Button
            onClick={() => setShowResetConfirm(true)}
            variant="outline"
            className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Reset All Data
          </Button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-red-300">
              This will delete ALL your progress. Are you sure?
            </p>
            <div className="flex gap-2">
              <Button
                onClick={handleReset}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              >
                Yes, Delete Everything
              </Button>
              <Button
                onClick={() => setShowResetConfirm(false)}
                variant="outline"
                className="flex-1 border-rpg-light/30 text-rpg-light"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameSettings;
