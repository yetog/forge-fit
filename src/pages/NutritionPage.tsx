
import React from "react";
import { Pill, Apple, Droplets, Beef, Wheat, Info } from "lucide-react";

const supplements = [
  { name: 'Creatine Monohydrate', dose: '5g daily', desc: 'Increases strength, power, and muscle recovery. Take daily—no need to cycle.', icon: Pill },
  { name: 'Whey Protein', dose: '25-40g post-workout', desc: 'Fast-absorbing protein for muscle repair. Aim for 0.8-1g protein per lb body weight daily.', icon: Beef },
  { name: 'Electrolytes', dose: 'During/after workouts', desc: 'Sodium, potassium, magnesium for hydration and preventing cramps.', icon: Droplets },
  { name: 'Fish Oil (Omega-3)', dose: '1-3g daily', desc: 'Reduces inflammation, supports joint and heart health.', icon: Pill },
  { name: 'Multivitamin', dose: '1 daily', desc: 'Covers micronutrient gaps. Take with a meal for absorption.', icon: Pill },
];

const dietTips = [
  { title: 'Protein First', desc: 'Hit 0.8-1g per lb of body weight. Chicken, fish, eggs, Greek yogurt, whey shakes.', icon: Beef },
  { title: 'Complex Carbs', desc: 'Rice, oats, sweet potatoes, whole grains for sustained energy. Time around workouts.', icon: Wheat },
  { title: 'Stay Hydrated', desc: 'Aim for 1 gallon (128 oz) per day. More on workout days.', icon: Droplets },
  { title: 'Eat Whole Foods', desc: '80% whole foods, 20% flexible. No need for extreme restrictions to stay in shape.', icon: Apple },
];

const NutritionPage: React.FC = () => {
  return (
    <div className="container max-w-5xl mx-auto px-4 pb-24 md:pb-8">
      <div className="py-6">
        <h1 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">Nutrition</h1>
        <p className="text-muted-foreground font-body text-lg">Supplements & diet for staying in shape</p>
      </div>

      {/* Supplements */}
      <div className="mb-8">
        <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase mb-3">Supplements</h2>
        <div className="space-y-2">
          {supplements.map((supp) => (
            <div key={supp.name} className="workout-card flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <supp.icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{supp.name}</span>
                  <span className="text-xs text-primary font-display">{supp.dose}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{supp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diet Guidelines */}
      <div>
        <h2 className="font-display text-sm tracking-widest text-muted-foreground uppercase mb-3">Diet Guidelines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dietTips.map((tip) => (
            <div key={tip.title} className="workout-card">
              <div className="flex items-center gap-2 mb-2">
                <tip.icon size={16} className="text-primary" />
                <span className="font-display text-sm tracking-wide text-foreground">{tip.title}</span>
              </div>
              <p className="text-sm text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
