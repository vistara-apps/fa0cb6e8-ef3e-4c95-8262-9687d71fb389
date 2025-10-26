'use client';

import { TrendingUp } from 'lucide-react';
import { YieldChart } from './YieldChart';

export function TrustCard() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <span className="text-sm text-fgMuted">Total Investment</span>
        </div>
        <div className="px-3 py-1 bg-accent rounded-full">
          <span className="text-xs font-semibold text-bg">+8.5%</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-fgMuted mb-2">Trust</h2>
        <div className="text-5xl font-bold text-fg mb-6">$27,830</div>
        
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-accent hover:bg-accentHover text-bg font-semibold rounded-lg transition-colors">
            Invest More
          </button>
          <button className="px-6 py-3 bg-surface hover:bg-surfaceHover text-fg font-semibold rounded-lg border border-border transition-colors">
            Invest More
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-fgMuted">Monthly Yield</span>
          <TrendingUp className="w-4 h-4 text-accent" />
        </div>
      </div>

      <YieldChart />

      <div className="flex gap-4 mt-6 pt-6 border-t border-border">
        <button className="flex-1 text-center py-2 text-fg hover:text-primary transition-colors">
          Home Dashboard
        </button>
        <button className="flex-1 text-center py-2 text-fg hover:text-primary transition-colors">
          Invest More
        </button>
      </div>
    </div>
  );
}
