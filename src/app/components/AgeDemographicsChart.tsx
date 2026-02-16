import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ageGroups } from '@/app/data/mockData';

/* Green leaf scale from theme.css (--color-green-leafs, -2 … -8) */
const GREEN_LEAF_COLORS = [
  '#6E975B', /* green-leafs */
  '#5c7f4c', /* green-leafs-2 */
  '#47633a', /* green-leafs-3 */
  '#384f2e', /* green-leafs-4 */
  '#2b3d23', /* green-leafs-5 */
  '#8abf71', /* green-leafs-6 */
  '#7dad67', /* green-leafs-7 */
  '#1c2716', /* green-leafs-8 */
];

export function AgeDemographicsChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-slate-900">Customer Demographics</CardTitle>
        <CardDescription>Distribution by age group</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={ageGroups}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ range, percentage }) => `${range}: ${percentage}%`}
              outerRadius={110}
              innerRadius={60}
              fill="#8884d8"
              dataKey="customers"
              stroke="none"
            >
              {ageGroups.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={GREEN_LEAF_COLORS[index % GREEN_LEAF_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(110, 151, 91, 0.85)', 
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
              formatter={(value: number) => [`${value} customers`, 'Total']}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
