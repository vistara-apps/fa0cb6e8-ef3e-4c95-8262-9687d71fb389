'use client';

import { Home, Search, DollarSign, User } from 'lucide-react';

interface MobileNavProps {
  activeTab: 'dashboard' | 'invest';
  onTabChange: (tab: 'dashboard' | 'invest') => void;
}

export function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border">
      <div className="flex items-center justify-around py-3">
        <button
          onClick={() => onTabChange('dashboard')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'dashboard'
              ? 'text-primary'
              : 'text-fgMuted'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-fgMuted">
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
        
        <button
          onClick={() => onTabChange('invest')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'invest'
              ? 'text-primary'
              : 'text-fgMuted'
          }`}
        >
          <DollarSign className="w-6 h-6" />
          <span className="text-xs">Invest</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-fgMuted">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </nav>
  );
}
