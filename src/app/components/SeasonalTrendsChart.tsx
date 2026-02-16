import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { seasonalData } from '@/app/data/mockData';

export function SeasonalTrendsChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-slate-900">Seasonal Patterns</CardTitle>
        <CardDescription>Monthly sales trends throughout the year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={seasonalData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis 
              dataKey="month"
              tick={{ fill: '#475569' }}
              stroke="#cbd5e1"
            />
            <YAxis 
              tick={{ fill: '#475569' }}
              stroke="#cbd5e1"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(48, 85, 34, 0.85)', 
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
              formatter={(value: number) => [`${value.toLocaleString()} cups`, 'Sales']}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#6E975B" 
              strokeWidth={3}
              dot={{ r: 5, fill: '#6E975B', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7, fill: '#059669' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
