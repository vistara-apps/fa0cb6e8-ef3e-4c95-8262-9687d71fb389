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
    subtitle: 'Wants Cosey Samples',
    tabs: ['Booking', 'Invest Flow', 'Invest Flow', 'Confirmation'],
    activeTab: 0,
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="border border-border rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              {activity.amount ? (
                <p className="text-2xl font-semibold text-fg">{activity.amount}</p>
              ) : (
                <>
                  <p className="text-sm font-medium text-fg">{activity.title}</p>
                  <p className="text-xs text-fgMuted">{activity.subtitle}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {activity.tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  index === activity.activeTab
                    ? 'bg-accent text-bg'
                    : 'bg-surface hover:bg-surfaceHover text-fgMuted border border-border'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
