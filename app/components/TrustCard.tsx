'use client';

import { TrendingUp } from 'lucide-react';
import { YieldChart } from './YieldChart';

interface TrustCardProps {
  activeTab: 'dashboard' | 'invest';
  onTabChange: (tab: 'dashboard' | 'invest') => void;
}

export function TrustCard({ activeTab, onTabChange }: TrustCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm text-fgMuted">Total Investment</span>
        </div>
        <div className="flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">+8.5%</span>
        </div>
        <span className="text-sm font-medium text-fg">Monthly Yield</span>
      </div>

      {/* Trust Value */}
      <div className="mb-6">
        <h2 className="text-sm text-fgMuted mb-2">Trust</h2>
        <p className="text-5xl font-semibold text-fg mb-6">$27,830</p>
        
        <div className="flex gap-3">
          <button className="bg-accent hover:bg-accentHover text-bg px-6 py-2.5 rounded-lg font-medium transition-colors">
            Invest More
          </button>
          <button className="bg-surface hover:bg-surfaceHover text-fg px-6 py-2.5 rounded-lg font-medium border border-border transition-colors">
            Invest More
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <YieldChart />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-t border-border pt-4">
        <button
          onClick={() => onTabChange('dashboard')}
          className={`flex-1 py-2 text-center font-medium transition-colors ${
            activeTab === 'dashboard'
              ? 'text-fg border-b-2 border-primary'
              : 'text-fgMuted hover:text-fg'
          }`}
        >
          Home Dashboard
        </button>
        <button
          onClick={() => onTabChange('invest')}
          className={`flex-1 py-2 text-center font-medium transition-colors ${
            activeTab === 'invest'
              ? 'text-fg border-b-2 border-primary'
              : 'text-fgMuted hover:text-fg'
          }`}
        >
          Invest More
        </button>
      </div>
    </div>
  );
}
