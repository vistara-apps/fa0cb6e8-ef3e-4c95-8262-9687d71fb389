'use client';

import { ArrowLeft, Home as HomeIcon, Plus } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <button className="p-2 hover:bg-surface rounded-lg transition-colors">
        <ArrowLeft className="w-5 h-5 text-fg" />
      </button>
      
      <h1 className="text-xl font-semibold text-fg">ContainerYield Trust</h1>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-surface rounded-lg transition-colors">
          <HomeIcon className="w-5 h-5 text-fg" />
        </button>
        <button className="p-2 hover:bg-surface rounded-lg transition-colors">
          <Plus className="w-5 h-5 text-fg" />
        </button>
      </div>
    </div>
  );
}
