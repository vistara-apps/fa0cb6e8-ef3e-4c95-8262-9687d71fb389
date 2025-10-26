'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', value: 0 },
  { month: 'Feb', value: 1000 },
  { month: 'Mar', value: 2500 },
  { month: 'Apr', value: 3200 },
  { month: 'May', value: 5000 },
  { month: 'Jun', value: 4800 },
  { month: 'Jul', value: 6500 },
  { month: 'Aug', value: 8200 },
  { month: 'Sep', value: 10500 },
  { month: 'Oct', value: 12800 },
  { month: 'Nov', value: 15200 },
  { month: 'Dec', value: 18500 },
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
            activeDot={{ r: 6, fill: '#10b981' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
