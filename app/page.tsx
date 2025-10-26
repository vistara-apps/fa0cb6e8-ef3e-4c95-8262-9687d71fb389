'use client';

import { useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { TrustCard } from './components/TrustCard';
import { ActivityFeed } from './components/ActivityFeed';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'invest'>('dashboard');

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Desktop Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 pb-20 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <DashboardHeader />
          
          <div className="mt-6 space-y-6">
            <TrustCard />
            <ActivityFeed />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
