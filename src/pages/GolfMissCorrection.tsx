
import React, { useState } from 'react';
import { ArrowLeft, AlertCircle, Lightbulb, Search } from 'lucide-react';
import { missPatterns } from '@/data/golfMissPatterns';
import { useGolf } from '@/context/GolfContext';
import { Input } from '@/components/ui/input';

interface GolfMissCorrectionProps {
  onBack: () => void;
}

const GolfMissCorrection: React.FC<GolfMissCorrectionProps> = ({ onBack }) => {
  const { getMostCommonMiss, sessions } = useGolf();
  const [searchTerm, setSearchTerm] = useState('');

  const commonMiss = getMostCommonMiss();

  // Calculate miss frequency from sessions
  const missFrequency = sessions.reduce((acc, session) => {
    Object.entries(session.misses).forEach(([miss, count]) => {
      if (count > 0) {
        acc[miss] = (acc[miss] || 0) + count;
      }
    });
    return acc;
  }, {} as Record<string, number>);

  const filteredPatterns = missPatterns.filter(
    (pattern) =>
      pattern.miss.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pattern.likelyCause.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pattern.correctionCue.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            MISS CORRECTIONS
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            Diagnose and fix your misses
          </p>
        </div>
      </div>

      {/* Most Common Miss Alert */}
      {commonMiss && (
        <div className="workout-card p-4 mb-6 border-yellow-500/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-400 mt-0.5 flex-shrink-0" size={20} />
            <div>
              <div className="text-sm font-semibold text-yellow-400">
                Your Most Common Miss
              </div>
              <div className="text-lg text-foreground capitalize mt-1">{commonMiss}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Based on {missFrequency[commonMiss] || 0} occurrences across your sessions
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-6">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={18}
        />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search misses, causes, or cues..."
          className="pl-10 bg-secondary"
        />
      </div>

      {/* Instruction */}
      <div className="workout-card p-4 mb-6 border-primary/20">
        <div className="flex items-start gap-3">
          <Lightbulb className="text-primary mt-0.5 flex-shrink-0" size={18} />
          <p className="text-sm text-muted-foreground">
            Tap on a miss type to see the likely cause and a correction cue. Use these cues
            in your next practice session to address the issue.
          </p>
        </div>
      </div>

      {/* Miss Pattern Cards */}
      <div className="space-y-3">
        {filteredPatterns.map((pattern) => {
          const frequency = missFrequency[pattern.miss] || 0;
          const isCommon = pattern.miss === commonMiss;

          return (
            <div
              key={pattern.miss}
              className={`workout-card p-4 ${isCommon ? 'border-yellow-500/30' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-display text-lg capitalize ${
                      isCommon ? 'text-yellow-400' : 'text-foreground'
                    }`}
                  >
                    {pattern.miss}
                  </span>
                  {isCommon && (
                    <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">
                      Most Common
                    </span>
                  )}
                </div>
                {frequency > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {frequency} time{frequency !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">LIKELY CAUSE</div>
                  <p className="text-sm text-foreground">{pattern.likelyCause}</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <div className="text-xs text-primary mb-1">CORRECTION CUE</div>
                  <p className="text-sm text-foreground font-semibold">
                    "{pattern.correctionCue}"
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPatterns.length === 0 && (
        <div className="workout-card p-8 text-center">
          <p className="text-muted-foreground">No matches found for "{searchTerm}"</p>
        </div>
      )}

      {/* Philosophy Note */}
      <div className="mt-8 workout-card p-4">
        <h3 className="font-display text-sm text-muted-foreground mb-2">REMEMBER</h3>
        <ul className="text-sm text-foreground/80 space-y-1">
          <li>• One adjustment at a time</li>
          <li>• Focus on the feel, not just the result</li>
          <li>• Consistency comes from repetition</li>
          <li>• Smooth swings beat violent swings</li>
        </ul>
      </div>
    </div>
  );
};

export default GolfMissCorrection;
