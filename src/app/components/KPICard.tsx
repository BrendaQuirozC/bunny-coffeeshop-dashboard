import { Card, CardContent } from '@/app/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  suffix?: string;
  className?: string;
}

export function KPICard({ title, value, icon: Icon, trend, suffix, className }: KPICardProps) {
  return (
    <Card className={`card-kpi hover:border-light-green transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-light-green/80 mb-2 tracking-wide uppercase">{title}</p>
            <p className="text-4xl font-light text-white mb-3 tracking-tight">
              {value}{suffix && <span className="text-2xl text-light-green">{suffix}</span>}
            </p>
            {trend !== undefined && (
              <div className={`inline-flex items-center gap-1 text-sm px-2 py-1 rounded-full ${
                trend >= 0 ? 'percent-kpi text-light-green' : 'percent-kpi text-red-400'
              }`}>
                <span>{trend >= 0 ? '↑' : '↓'}</span>
                <span>{Math.abs(trend)}%</span>
              </div>
            )}
          </div>
          <div className="icon-kpi-container">
            <div className="icon-kpi bg-black-coffee p-3 rounded-xl">
              <Icon className="w-6 h-6 text-light-green" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
