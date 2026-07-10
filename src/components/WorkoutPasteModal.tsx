import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ClipboardPaste, Sparkles, Copy } from 'lucide-react';

interface ParsedExercise {
  name: string;
  sets: number;
  reps: string;
  weight?: string;
}

interface ParsedWorkout {
  name: string;
  exercises: ParsedExercise[];
}

interface WorkoutPasteModalProps {
  open: boolean;
  onClose: () => void;
  onWorkoutCreated: (workout: ParsedWorkout) => void;
}

const EXAMPLE_FORMAT = `Workout: Push Day
---
Bench Press: 3x10 @ 135 lbs
Incline Dumbbell Press: 3x12 @ 40 lbs
Cable Flies: 4x15
Tricep Pushdowns: 3x12 @ 50 lbs
Push-ups: 3x failure`;

const AI_PROMPT = `I need you to format a workout for the Forge Fit app.

HERE IS MY WORKOUT:
[Paste your workout here - it can be messy, from a PDF, screenshot text, or just notes]

FORMAT IT EXACTLY LIKE THIS:
Workout: [Give it a name]
---
[Exercise Name]: [sets]x[reps] @ [weight]
[Exercise Name]: [sets]x[reps]

RULES:
- First line must start with "Workout:"
- Second line must be "---"
- Each exercise on its own line
- Format: "Exercise Name: 3x10 @ 135 lbs" or "Exercise Name: 3x10" (weight optional)
- Use "failure" for max reps (e.g., "Push-ups: 3x failure")

EXAMPLE OUTPUT:
Workout: Upper Body Day
---
Bench Press: 4x8 @ 155 lbs
Dumbbell Rows: 3x12 @ 45 lbs
Overhead Press: 3x10 @ 95 lbs
Bicep Curls: 3x12 @ 25 lbs
Tricep Dips: 3x failure

Now format my workout above using these exact rules.`;

const parseWorkoutText = (text: string): ParsedWorkout | null => {
  const lines = text.trim().split('\n').filter(line => line.trim());

  if (lines.length < 2) return null;

  // Find workout name (first line or line starting with "Workout:")
  let name = 'Custom Workout';
  let exerciseStartIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.toLowerCase().startsWith('workout:')) {
      name = line.replace(/^workout:\s*/i, '').trim();
      exerciseStartIndex = i + 1;
      break;
    }
  }

  // Skip separator line if present
  if (lines[exerciseStartIndex]?.trim() === '---') {
    exerciseStartIndex++;
  }

  const exercises: ParsedExercise[] = [];

  for (let i = exerciseStartIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line === '---') continue;

    // Parse: "Exercise Name: 3x10 @ 135 lbs" or "Exercise Name: 3x10"
    const match = line.match(/^(.+?):\s*(\d+)x(\d+|failure)\s*(?:@\s*(.+))?$/i);

    if (match) {
      exercises.push({
        name: match[1].trim(),
        sets: parseInt(match[2]),
        reps: match[3],
        weight: match[4]?.trim(),
      });
    } else {
      // Try simpler format: "Exercise Name - 3 sets x 10 reps"
      const altMatch = line.match(/^(.+?)[-:]\s*(\d+)\s*sets?\s*[x×]\s*(\d+|failure)\s*(?:reps?)?\s*(?:@\s*(.+))?$/i);
      if (altMatch) {
        exercises.push({
          name: altMatch[1].trim(),
          sets: parseInt(altMatch[2]),
          reps: altMatch[3],
          weight: altMatch[4]?.trim(),
        });
      }
    }
  }

  if (exercises.length === 0) return null;

  return { name, exercises };
};

const WorkoutPasteModal: React.FC<WorkoutPasteModalProps> = ({ open, onClose, onWorkoutCreated }) => {
  const [text, setText] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  const handleParse = () => {
    const workout = parseWorkoutText(text);

    if (!workout) {
      toast.error('Could not parse workout. Check the format and try again.');
      return;
    }

    onWorkoutCreated(workout);
    toast.success(`Created "${workout.name}" with ${workout.exercises.length} exercises!`);
    setText('');
    onClose();
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT);
    toast.success('AI prompt copied! Paste it into ChatGPT or Claude.');
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardPaste size={20} className="text-primary" />
            Import Workout
          </DialogTitle>
          <DialogDescription>
            Paste a formatted workout to start tracking it
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {!showPrompt ? (
            <>
              {/* Step-by-step instructions */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                <p className="text-sm font-medium text-foreground">How to create a custom workout:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span className="text-muted-foreground">Click <strong className="text-foreground">"Get AI Prompt"</strong> below and copy it</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span className="text-muted-foreground">Paste it into <strong className="text-foreground">ChatGPT, Claude, or any AI</strong></span>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span className="text-muted-foreground">Add your workout details where it says "[Paste your workout here]"</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span className="text-muted-foreground">Copy the AI's formatted response and paste it below</span>
                  </div>
                </div>
              </div>

              {/* Format example */}
              <div className="bg-secondary/50 p-3 rounded-lg text-xs font-mono">
                <p className="text-muted-foreground mb-2 font-sans">The AI will give you something like this:</p>
                <pre className="text-foreground whitespace-pre-wrap">{EXAMPLE_FORMAT}</pre>
              </div>

              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your formatted workout here..."
                className="min-h-[120px] font-mono text-sm"
              />

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowPrompt(true)} className="flex-1">
                  <Sparkles size={16} className="mr-2" />
                  Step 1: Get AI Prompt
                </Button>
                <Button onClick={handleParse} disabled={!text.trim()} className="flex-1">
                  <ClipboardPaste size={16} className="mr-2" />
                  Step 4: Import
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                <p className="text-sm font-medium text-foreground mb-2">Copy this entire prompt:</p>
                <p className="text-xs text-muted-foreground">Paste it into ChatGPT, Claude, Gemini, or any AI assistant. Replace "[Paste your workout here]" with your actual workout.</p>
              </div>

              <div className="bg-secondary/50 p-3 rounded-lg text-xs max-h-[250px] overflow-y-auto">
                <pre className="text-foreground whitespace-pre-wrap font-mono">{AI_PROMPT}</pre>
              </div>

              <div className="flex gap-2">
                <Button onClick={copyPrompt} className="flex-1">
                  <Copy size={16} className="mr-2" />
                  Copy Prompt to Clipboard
                </Button>
                <Button variant="outline" onClick={() => setShowPrompt(false)}>
                  Back
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                After the AI formats your workout, come back and paste the result!
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutPasteModal;
