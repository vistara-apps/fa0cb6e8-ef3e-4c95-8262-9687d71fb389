'use client';

import { 
  Home, 
  Lock, 
  User, 
  BarChart3, 
  DollarSign, 
  TrendingUp,
  Package,
  Bell,
  Settings2,
  HelpCircle
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Lock, label: 'Security', active: false },
  { icon: User, label: 'Profile', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: DollarSign, label: 'Wallet', active: false },
  { icon: TrendingUp, label: 'Yields', active: false },
  { icon: Package, label: 'Containers', active: false },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: Settings2, label: 'Settings', active: false },
  { icon: HelpCircle, label: 'Help', active: false },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-20 bg-surface border-r border-border py-6">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
          <Package className="w-6 h-6 text-bg" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`p-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-primary text-bg'
                  : 'text-fgMuted hover:bg-surfaceHover hover:text-fg'
              }`}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
