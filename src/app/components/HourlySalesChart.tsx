import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { hourlySales } from '@/app/data/mockData';

export function HourlySalesChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-slate-900">Sales by Hour</CardTitle>
        <CardDescription>Average sales per hour on weekdays</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={hourlySales} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6E975B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6E975B" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis 
              dataKey="hour" 
              tick={{ fontSize: 11, fill: '#475569' }}
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
              formatter={(value: number, name: string) => {
                if (name === 'sales') return [`${value} cups`, 'Sales'];
                if (name === 'customers') return [`${value} people`, 'Customers'];
                return [value, name];
              }}
            />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke="#A5D091" 
              strokeWidth={2.5}
              fillOpacity={1} 
              fill="url(#colorSales)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
