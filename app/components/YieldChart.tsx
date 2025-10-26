'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', value: 0 },
  { month: 'Feb', value: 1500 },
  { month: 'Mar', value: 3200 },
  { month: 'Apr', value: 2800 },
  { month: 'May', value: 4500 },
  { month: 'Jun', value: 5200 },
  { month: 'Jul', value: 6800 },
  { month: 'Aug', value: 8500 },
  { month: 'Sep', value: 10200 },
  { month: 'Oct', value: 12800 },
  { month: 'Nov', value: 15500 },
  { month: 'Dec', value: 18200 },
];

export function YieldChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(217, 33%, 17%)',
              border: '1px solid hsl(217, 33%, 25%)',
              borderRadius: '8px',
              color: 'hsl(210, 40%, 98%)',
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Yield']}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={3}
            dot={false}
            fill="url(#lineGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
