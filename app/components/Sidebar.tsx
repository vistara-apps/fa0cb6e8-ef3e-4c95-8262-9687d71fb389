'use client';

import { 
  Home, 
  Lock, 
  Search, 
  BarChart3, 
  DollarSign, 
  TrendingUp,
  Bell,
  Settings2,
  HelpCircle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeTab: 'dashboard' | 'invest';
  onTabChange: (tab: 'dashboard' | 'invest') => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navItems = [
    { icon: Home, label: 'Home', id: 'dashboard' as const },
    { icon: Lock, label: 'Trust', id: 'trust' },
    { icon: Search, label: 'Search', id: 'search' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics' },
    { icon: DollarSign, label: 'Invest', id: 'invest' as const },
    { icon: TrendingUp, label: 'Yields', id: 'yields' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
  ];

  const bottomItems = [
    { icon: Settings2, label: 'Settings', id: 'settings' },
    { icon: HelpCircle, label: 'Help', id: 'help' },
    { icon: LogOut, label: 'Logout', id: 'logout' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-20 bg-surface border-r border-border">
      <div className="flex-1 flex flex-col items-center py-6 gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => item.id === 'dashboard' || item.id === 'invest' ? onTabChange(item.id) : null}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              activeTab === item.id
                ? 'bg-primary text-white'
                : 'text-fgMuted hover:bg-surfaceHover hover:text-fg'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center py-6 gap-4 border-t border-border">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            className="w-12 h-12 rounded-lg flex items-center justify-center text-fgMuted hover:bg-surfaceHover hover:text-fg transition-colors"
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </aside>
  );
}
