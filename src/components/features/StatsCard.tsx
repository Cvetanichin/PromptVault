import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  accent?: 'amber' | 'cyan';
  subtitle?: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  accent = 'amber',
  subtitle,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-opacity-60',
        accent === 'amber' ? 'hover:glow-amber' : 'hover:glow-cyan'
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <p
            className={cn(
              'font-mono text-2xl font-bold tabular-nums',
              accent === 'amber' ? 'text-primary' : 'text-secondary'
            )}
          >
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div
          className={cn(
            'rounded-md p-2',
            accent === 'amber'
              ? 'bg-primary/10 text-primary'
              : 'bg-secondary/10 text-secondary'
          )}
        >
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}
