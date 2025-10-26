'use client';

import { User } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'User',
    amount: '21,5350',
    tabs: ['Eat', 'Searches & Portfolio', 'Portfolio', 'Investment Calculator'],
    activeTab: 0,
  },
  {
    id: 2,
    title: 'Document Flow',
    subtitle: 'Wants: Corey, Samples',
    tabs: ['Booking', 'Invest Flow', 'Invest Flow', 'Confirmation'],
    activeTab: 0,
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg">
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            
            <div className="flex-1">
              {activity.amount && (
                <div className="text-2xl font-bold text-fg mb-3">{activity.amount}</div>
              )}
              
              {activity.title && (
                <div>
                  <div className="text-lg font-semibold text-fg">{activity.title}</div>
                  <div className="text-sm text-fgMuted">{activity.subtitle}</div>
                </div>
              )}
              
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {activity.tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      index === activity.activeTab
                        ? 'bg-accent text-bg font-semibold'
                        : 'bg-bg text-fgMuted hover:bg-surfaceHover'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
