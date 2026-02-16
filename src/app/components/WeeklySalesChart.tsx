import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { dailySales } from '@/app/data/mockData';

export function WeeklySalesChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-slate-900">Sales by Day of Week</CardTitle>
        <CardDescription>Total sales and revenue per day</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={dailySales} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis 
              dataKey="day"
              tick={{ fill: '#475569' }}
              stroke="#cbd5e1"
            />
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#6E975B"
              tick={{ fill: '#475569' }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#1F2937"
              tick={{ fill: '#475569' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(48, 85, 34, 0.85)', 
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'sales') return [`${value} cups`, 'Sales'];
                if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Revenue'];
                return [value, name];
              }}
            />
            <Legend />
            <Bar 
              yAxisId="left" 
              dataKey="sales" 
              fill="#6E975B" 
              radius={[8, 8, 0, 0]} 
              name="Sales (cups)" 
            />
            <Bar 
              yAxisId="right" 
              dataKey="revenue" 
              fill="#17201F" 
              radius={[8, 8, 0, 0]} 
              name="Revenue ($)" 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
