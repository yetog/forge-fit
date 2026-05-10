
import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Target, AlertCircle } from 'lucide-react';
import { useGolf } from '@/context/GolfContext';
import { GolfClub, MissType } from '@/types/golf';
import { clubTypeOrder } from '@/data/golfClubs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface GolfClubsProps {
  onBack: () => void;
}

const missOptions: MissType[] = ['slice', 'hook', 'thin', 'chunk', 'push', 'pull', 'top', 'shank'];

const GolfClubs: React.FC<GolfClubsProps> = ({ onBack }) => {
  const { clubs, updateClub } = useGolf();
  const [selectedClub, setSelectedClub] = useState<GolfClub | null>(null);
  const [editForm, setEditForm] = useState<Partial<GolfClub>>({});

  // Sort clubs by type
  const sortedClubs = [...clubs].sort(
    (a, b) => clubTypeOrder[a.type] - clubTypeOrder[b.type]
  );

  // Group clubs by type
  const groupedClubs = sortedClubs.reduce((acc, club) => {
    const type = club.type.charAt(0).toUpperCase() + club.type.slice(1) + 's';
    if (!acc[type]) acc[type] = [];
    acc[type].push(club);
    return acc;
  }, {} as Record<string, GolfClub[]>);

  const handleEditClub = (club: GolfClub) => {
    setSelectedClub(club);
    setEditForm({
      maxDistance: club.maxDistance,
      halfSwingDistance: club.halfSwingDistance,
      confidence: club.confidence,
      commonMiss: club.commonMiss,
      bestCue: club.bestCue,
      notes: club.notes,
    });
  };

  const handleSave = () => {
    if (selectedClub) {
      updateClub(selectedClub.id, editForm);
      setSelectedClub(null);
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 8) return 'text-green-400';
    if (confidence >= 5) return 'text-primary';
    return 'text-red-400';
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <ArrowLeft size={20} className="text-muted-foreground" />
        </button>
        <div>
          <h1 className="font-display text-xl md:text-2xl text-foreground tracking-wider">
            MY CLUBS
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Track distances and confidence
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="workout-card p-4 mb-6 border-primary/20">
        <p className="text-sm text-muted-foreground">
          Tap a club to update its distances, confidence level, and notes.
          Track your most common miss to identify patterns.
        </p>
      </div>

      {/* Club Groups */}
      {Object.entries(groupedClubs).map(([type, typeClubs]) => (
        <div key={type} className="mb-6">
          <h3 className="font-display text-sm text-muted-foreground mb-3">{type.toUpperCase()}</h3>
          <div className="space-y-2">
            {typeClubs.map((club) => (
              <button
                key={club.id}
                onClick={() => handleEditClub(club)}
                className="w-full workout-card p-4 text-left hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <span className="font-display text-sm text-foreground">
                        {club.id.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{club.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {club.maxDistance > 0 ? (
                          <>
                            Max: {club.maxDistance} yds
                            {club.halfSwingDistance > 0 && ` • Half: ${club.halfSwingDistance} yds`}
                          </>
                        ) : (
                          'No data yet'
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {club.commonMiss && (
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded capitalize">
                        {club.commonMiss}
                      </span>
                    )}
                    <div className="text-right">
                      <div className={`font-display text-lg ${getConfidenceColor(club.confidence)}`}>
                        {club.confidence}
                      </div>
                      <div className="text-[10px] text-muted-foreground">confidence</div>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Edit Dialog */}
      <Dialog open={!!selectedClub} onOpenChange={() => setSelectedClub(null)}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-foreground">
              {selectedClub?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            {/* Max Distance */}
            <div>
              <Label className="text-muted-foreground">Max Distance (yards)</Label>
              <Input
                type="number"
                value={editForm.maxDistance || ''}
                onChange={(e) =>
                  setEditForm({ ...editForm, maxDistance: parseInt(e.target.value) || 0 })
                }
                placeholder="e.g., 150"
                className="bg-secondary mt-1"
              />
            </div>

            {/* Half Swing Distance */}
            <div>
              <Label className="text-muted-foreground">Half Swing Distance (yards)</Label>
              <Input
                type="number"
                value={editForm.halfSwingDistance || ''}
                onChange={(e) =>
                  setEditForm({ ...editForm, halfSwingDistance: parseInt(e.target.value) || 0 })
                }
                placeholder="e.g., 100"
                className="bg-secondary mt-1"
              />
            </div>

            {/* Confidence */}
            <div>
              <div className="flex justify-between mb-2">
                <Label className="text-muted-foreground">Confidence</Label>
                <span className="text-primary font-display">{editForm.confidence}/10</span>
              </div>
              <Slider
                value={[editForm.confidence || 5]}
                onValueChange={(val) => setEditForm({ ...editForm, confidence: val[0] })}
                min={1}
                max={10}
                step={1}
                className="py-2"
              />
            </div>

            {/* Common Miss */}
            <div>
              <Label className="text-muted-foreground">Common Miss</Label>
              <Select
                value={editForm.commonMiss || 'none'}
                onValueChange={(val) =>
                  setEditForm({
                    ...editForm,
                    commonMiss: val === 'none' ? null : (val as MissType),
                  })
                }
              >
                <SelectTrigger className="bg-secondary mt-1">
                  <SelectValue placeholder="Select miss type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {missOptions.map((miss) => (
                    <SelectItem key={miss} value={miss} className="capitalize">
                      {miss}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Best Cue */}
            <div>
              <Label className="text-muted-foreground">Best Cue / Swing Thought</Label>
              <Input
                value={editForm.bestCue || ''}
                onChange={(e) => setEditForm({ ...editForm, bestCue: e.target.value })}
                placeholder="e.g., Smooth tempo"
                className="bg-secondary mt-1"
              />
            </div>

            {/* Notes */}
            <div>
              <Label className="text-muted-foreground">Notes</Label>
              <Input
                value={editForm.notes || ''}
                onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                placeholder="Any additional notes..."
                className="bg-secondary mt-1"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setSelectedClub(null)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleSave} className="flex-1 bg-primary">
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GolfClubs;
