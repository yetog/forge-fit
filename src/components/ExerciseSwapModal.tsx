
import React from "react";
import { getExercisesByMuscleGroup, getExerciseById } from "@/data/exercises";
import { MuscleGroup } from "@/types/workout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRightLeft } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  currentExerciseId: string;
  onSwap: (newExerciseId: string) => void;
}

const ExerciseSwapModal: React.FC<Props> = ({ open, onClose, currentExerciseId, onSwap }) => {
  const current = getExerciseById(currentExerciseId);
  if (!current) return null;

  const alternatives = getExercisesByMuscleGroup(current.muscleGroup).filter(e => e.id !== currentExerciseId);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-card border-border max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display tracking-wider text-foreground flex items-center gap-2">
            <ArrowRightLeft size={18} className="text-primary" />
            Swap: {current.name}
          </DialogTitle>
        </DialogHeader>
        <p className="text-xs text-muted-foreground mb-3">
          Alternatives for <span className="text-primary font-semibold">{current.muscleGroup}</span>
        </p>
        {alternatives.length === 0 ? (
          <p className="text-sm text-muted-foreground">No alternatives available.</p>
        ) : (
          <div className="space-y-2">
            {alternatives.map(ex => (
              <button
                key={ex.id}
                onClick={() => { onSwap(ex.id); onClose(); }}
                className="w-full workout-card text-left hover:border-primary/30 transition-colors"
              >
                <div className="font-semibold text-foreground text-sm">{ex.name}</div>
                <div className="text-xs text-muted-foreground">{ex.description}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {ex.defaultSets}×{ex.defaultReps} {ex.defaultWeight ? `@ ${ex.defaultWeight} lb` : ''}
                </div>
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseSwapModal;
