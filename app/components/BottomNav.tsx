'use client';

import { Home, Package, TrendingUp, User } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border">
      <div className="flex items-center justify-around py-3">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-fgMuted hover:text-fg transition-colors">
          <Package className="w-6 h-6" />
          <span className="text-xs font-medium">Containers</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-fgMuted hover:text-fg transition-colors">
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs font-medium">Yields</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-fgMuted hover:text-fg transition-colors">
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
}
