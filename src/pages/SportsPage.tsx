
import React from 'react';
import { Target, Swords, ChevronRight } from 'lucide-react';

interface SportsPageProps {
  onSelectSport: (sport: 'boxing' | 'golf') => void;
}

const SportsPage: React.FC<SportsPageProps> = ({ onSelectSport }) => {
  return (
    <div className="container max-w-4xl mx-auto px-4 pb-24 md:pb-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
          SPORTS
        </h1>
        <p className="text-muted-foreground font-body mt-1">
          Skill-based training modules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Boxing - Placeholder */}
        <div className="workout-card p-6 opacity-50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <Swords className="text-red-400" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">BOXING</h3>
                <span className="text-xs text-muted-foreground">Coming Soon</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Combat training, technique drills, and conditioning.
          </p>
          <div className="text-xs text-muted-foreground/50 font-body">
            In development
          </div>
        </div>

        {/* Golf - Active */}
        <button
          onClick={() => onSelectSport('golf')}
          className="workout-card p-6 text-left hover:border-primary/50 transition-colors group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Target className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">GOLF</h3>
                <span className="text-xs text-primary">Active</span>
              </div>
            </div>
            <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Structured practice, club tracking, and skill progression.
          </p>
          <div className="flex gap-2 flex-wrap">
            {['Training Path', 'Club Tracking', 'Session Logs'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </button>
      </div>

      {/* Philosophy Section */}
      <div className="mt-8 workout-card p-6">
        <h3 className="font-display text-sm text-muted-foreground mb-3">TRAINING PHILOSOPHY</h3>
        <div className="space-y-2 text-sm text-foreground/80">
          <p>
            <span className="text-primary font-semibold">Skill sports</span> require deliberate practice,
            feedback loops, and progressive overload - just like strength training.
          </p>
          <p>
            ForgeFit Sports modules help you track <span className="text-primary">how you learn</span>,
            not just what you do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
