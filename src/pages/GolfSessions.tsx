
import React, { useState } from 'react';
import { ArrowLeft, Plus, Target, Check } from 'lucide-react';
import { useGolf } from '@/context/GolfContext';
import { GolfSession, MissType, FOCUS_OPTIONS } from '@/types/golf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface GolfSessionsProps {
  onBack: () => void;
}

const missTypes: MissType[] = ['slice', 'hook', 'thin', 'chunk', 'push', 'pull', 'top', 'shank'];

const GolfSessions: React.FC<GolfSessionsProps> = ({ onBack }) => {
  const { addSession, getRecentSessions, clubs, setCurrentFocus } = useGolf();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    duration: 60,
    focus: 'Contact',
    clubsUsed: [] as string[],
    whatFeltGood: '',
    biggestMiss: '',
    whatImproved: '',
    bestCue: '',
    confidence: 5,
    notes: '',
    misses: {
      slice: 0,
      hook: 0,
      thin: 0,
      chunk: 0,
      push: 0,
      pull: 0,
      top: 0,
      shank: 0,
    },
  });

  const recentSessions = getRecentSessions(10);

  const handleSubmit = () => {
    addSession({
      date: new Date().toISOString(),
      location: formData.location,
      duration: formData.duration,
      focus: formData.focus,
      clubsUsed: formData.clubsUsed,
      whatFeltGood: formData.whatFeltGood,
      biggestMiss: formData.biggestMiss,
      whatImproved: formData.whatImproved,
      bestCue: formData.bestCue,
      confidence: formData.confidence,
      notes: formData.notes,
      misses: formData.misses,
    });

    // Update current focus
    setCurrentFocus(formData.focus);

    // Reset form
    setFormData({
      location: '',
      duration: 60,
      focus: 'Contact',
      clubsUsed: [],
      whatFeltGood: '',
      biggestMiss: '',
      whatImproved: '',
      bestCue: '',
      confidence: 5,
      notes: '',
      misses: {
        slice: 0,
        hook: 0,
        thin: 0,
        chunk: 0,
        push: 0,
        pull: 0,
        top: 0,
        shank: 0,
      },
    });
    setShowForm(false);
  };

  const toggleClub = (clubId: string) => {
    setFormData((prev) => ({
      ...prev,
      clubsUsed: prev.clubsUsed.includes(clubId)
        ? prev.clubsUsed.filter((id) => id !== clubId)
        : [...prev.clubsUsed, clubId],
    }));
  };

  const incrementMiss = (miss: MissType) => {
    setFormData((prev) => ({
      ...prev,
      misses: {
        ...prev.misses,
        [miss]: prev.misses[miss] + 1,
      },
    }));
  };

  const decrementMiss = (miss: MissType) => {
    setFormData((prev) => ({
      ...prev,
      misses: {
        ...prev.misses,
        [miss]: Math.max(0, prev.misses[miss] - 1),
      },
    }));
  };

  if (showForm) {
    return (
      <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setShowForm(false)}
            className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft size={20} className="text-muted-foreground" />
          </button>
          <div>
            <h1 className="font-display text-xl text-foreground tracking-wider">
              LOG SESSION
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Record your practice
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="workout-card p-4 space-y-4">
            <h3 className="font-display text-sm text-muted-foreground">SESSION INFO</h3>

            <div>
              <Label className="text-muted-foreground">Location (optional)</Label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Driving range, Course name"
                className="bg-secondary mt-1"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <Label className="text-muted-foreground">Duration</Label>
                <span className="text-primary font-display">{formData.duration} min</span>
              </div>
              <Slider
                value={[formData.duration]}
                onValueChange={(val) => setFormData({ ...formData, duration: val[0] })}
                min={15}
                max={180}
                step={15}
              />
            </div>

            <div>
              <Label className="text-muted-foreground">Session Focus</Label>
              <Select
                value={formData.focus}
                onValueChange={(val) => setFormData({ ...formData, focus: val })}
              >
                <SelectTrigger className="bg-secondary mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FOCUS_OPTIONS.map((focus) => (
                    <SelectItem key={focus} value={focus}>
                      {focus}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clubs Used */}
          <div className="workout-card p-4">
            <h3 className="font-display text-sm text-muted-foreground mb-3">CLUBS USED</h3>
            <div className="flex flex-wrap gap-2">
              {clubs.map((club) => (
                <button
                  key={club.id}
                  onClick={() => toggleClub(club.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                    formData.clubsUsed.includes(club.id)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {club.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Miss Tracking */}
          <div className="workout-card p-4">
            <h3 className="font-display text-sm text-muted-foreground mb-3">MISS TRACKING</h3>
            <div className="grid grid-cols-2 gap-2">
              {missTypes.map((miss) => (
                <div
                  key={miss}
                  className="flex items-center justify-between bg-secondary rounded-lg px-3 py-2"
                >
                  <span className="text-sm capitalize text-foreground">{miss}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrementMiss(miss)}
                      className="w-6 h-6 rounded bg-background text-muted-foreground hover:text-foreground"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-display text-primary">
                      {formData.misses[miss]}
                    </span>
                    <button
                      onClick={() => incrementMiss(miss)}
                      className="w-6 h-6 rounded bg-background text-muted-foreground hover:text-foreground"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflections */}
          <div className="workout-card p-4 space-y-4">
            <h3 className="font-display text-sm text-muted-foreground">REFLECTIONS</h3>

            <div>
              <Label className="text-muted-foreground">What felt good?</Label>
              <Textarea
                value={formData.whatFeltGood}
                onChange={(e) => setFormData({ ...formData, whatFeltGood: e.target.value })}
                placeholder="Describe what went well..."
                className="bg-secondary mt-1 min-h-[60px]"
              />
            </div>

            <div>
              <Label className="text-muted-foreground">Biggest miss pattern?</Label>
              <Input
                value={formData.biggestMiss}
                onChange={(e) => setFormData({ ...formData, biggestMiss: e.target.value })}
                placeholder="e.g., Thin shots with irons"
                className="bg-secondary mt-1"
              />
            </div>

            <div>
              <Label className="text-muted-foreground">What improved today?</Label>
              <Textarea
                value={formData.whatImproved}
                onChange={(e) => setFormData({ ...formData, whatImproved: e.target.value })}
                placeholder="Notice any improvements..."
                className="bg-secondary mt-1 min-h-[60px]"
              />
            </div>

            <div>
              <Label className="text-muted-foreground">Best cue / swing thought?</Label>
              <Input
                value={formData.bestCue}
                onChange={(e) => setFormData({ ...formData, bestCue: e.target.value })}
                placeholder="e.g., Stay level"
                className="bg-secondary mt-1"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <Label className="text-muted-foreground">Overall Confidence</Label>
                <span className="text-primary font-display">{formData.confidence}/10</span>
              </div>
              <Slider
                value={[formData.confidence]}
                onValueChange={(val) => setFormData({ ...formData, confidence: val[0] })}
                min={1}
                max={10}
                step={1}
              />
            </div>

            <div>
              <Label className="text-muted-foreground">Additional Notes</Label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any other thoughts..."
                className="bg-secondary mt-1 min-h-[60px]"
              />
            </div>
          </div>

          {/* Submit */}
          <Button onClick={handleSubmit} className="w-full bg-primary" size="lg">
            <Check size={18} className="mr-2" />
            Complete Session
          </Button>
        </div>
      </div>
    );
  }

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
        <div className="flex-1">
          <h1 className="font-display text-xl md:text-2xl text-foreground tracking-wider">
            SESSIONS
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Practice history & logging
          </p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-primary">
          <Plus size={18} className="mr-1" />
          Log Session
        </Button>
      </div>

      {/* Session History */}
      {recentSessions.length > 0 ? (
        <div className="space-y-3">
          {recentSessions.map((session) => (
            <div key={session.id} className="workout-card p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-display text-foreground">{session.focus}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(session.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}{' '}
                    • {session.duration} min
                    {session.location && ` • ${session.location}`}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-display">+{session.xpEarned} XP</div>
                  <div className="text-xs text-muted-foreground">
                    Confidence: {session.confidence}/10
                  </div>
                </div>
              </div>

              {/* Clubs */}
              {session.clubsUsed.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {session.clubsUsed.map((clubId) => (
                    <span
                      key={clubId}
                      className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground"
                    >
                      {clubId.toUpperCase()}
                    </span>
                  ))}
                </div>
              )}

              {/* Reflections */}
              {(session.whatFeltGood || session.whatImproved || session.bestCue) && (
                <div className="border-t border-border pt-2 mt-2 space-y-1">
                  {session.whatFeltGood && (
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-400">Good:</span> {session.whatFeltGood}
                    </p>
                  )}
                  {session.whatImproved && (
                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary">Improved:</span> {session.whatImproved}
                    </p>
                  )}
                  {session.bestCue && (
                    <p className="text-xs text-muted-foreground">
                      <span className="text-blue-400">Cue:</span> "{session.bestCue}"
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="workout-card p-8 text-center">
          <Target className="mx-auto mb-3 text-muted-foreground" size={32} />
          <h3 className="font-display text-foreground mb-1">No Sessions Yet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Start logging your practice sessions to track progress.
          </p>
          <Button onClick={() => setShowForm(true)} className="bg-primary">
            <Plus size={18} className="mr-1" />
            Log Your First Session
          </Button>
        </div>
      )}
    </div>
  );
};

export default GolfSessions;
