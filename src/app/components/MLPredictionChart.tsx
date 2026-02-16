import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { trendData } from '@/app/data/mockData';

export function MLPredictionChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-slate-900">ML Sales Predictions</CardTitle>
        <CardDescription>Historical data and 6-month forecast using machine learning</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                backgroundColor: 'rgba(110, 151, 91, 0.85)', 
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
              formatter={(value: any, name: string) => {
                if (value === null || value === undefined) return ['N/A', name];
                const numValue = typeof value === 'number' ? value : Number(value);
                if (isNaN(numValue)) return ['N/A', name];
                if (name === 'actual') return [`${numValue.toLocaleString()} cups`, 'Actual Sales'];
                if (name === 'predicted') return [`${numValue.toLocaleString()} cups`, 'Predicted Sales'];
                return [value, name];
              }}
            />
            <Legend />
            <ReferenceLine 
              x="Jan 2026" 
              stroke="#64748b" 
              strokeDasharray="3 3"
              label={{ 
                value: "Forecast Start", 
                position: "top", 
                fill: "#64748b",
                fontSize: 12
              }}
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#1F2937" 
              strokeWidth={3}
              dot={{ r: 5, fill: '#1F2937', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7 }}
              connectNulls
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="#A5D091" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ r: 5, fill: '#A5D091', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7 }}
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-6 p-6 key-insights rounded-xl border border-light-green">
          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-leafs rounded-full"></span>
            ML Insights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <div className="w-1 h-full bg-green-leafs rounded-full"></div>
              <div>
                <p className="text-sm text-slate-600">Predicted growth rate:</p>
                <p className="font-semibold text-green-leafs-8 text-lg">+18.5%</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-full bg-green-leafs rounded-full"></div>
              <div>
                <p className="text-sm text-slate-600">Peak season expected:</p>
                <p className="font-semibold text-green-leafs-8 text-lg">June 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-full bg-green-leafs rounded-full"></div>
              <div>
                <p className="text-sm text-slate-600">Model confidence:</p>
                <p className="font-semibold text-green-leafs-8 text-lg">94.2%</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-full bg-green-leafs rounded-full"></div>
              <div>
                <p className="text-sm text-slate-600">Inventory recommendation:</p>
                <p className="font-semibold text-green-leafs-8 text-lg">+20% stock</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
