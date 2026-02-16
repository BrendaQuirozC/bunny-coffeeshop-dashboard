import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { coffeeSales } from '@/app/data/mockData';

export function TopCoffeesChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-slate-900">Top Selling Coffees</CardTitle>
        <CardDescription>Total sales by product (last 30 days)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={coffeeSales} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              tick={{ fontSize: 12, fill: '#475569' }}
              stroke="#cbd5e1"
            />
            <YAxis 
              tick={{ fill: '#475569' }}
              stroke="#cbd5e1"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(110, 151, 91, 0.85)', 
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
              formatter={(value: number) => [`${value} cups`, 'Sales']}
              cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
            />
            <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
              {coffeeSales.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
