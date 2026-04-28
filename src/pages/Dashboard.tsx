import { Link } from 'react-router-dom';
import {
  FileText,
  TrendingUp,
  Cpu,
  Star,
  ArrowUpRight,
  BarChart3,
} from 'lucide-react';
import StatsCard from '@/components/features/StatsCard';
import ModelBadge from '@/components/features/ModelBadge';
import QualityBadge from '@/components/features/QualityBadge';
import { usePromptStats } from '@/hooks/usePromptStats';
import { usePromptStore } from '@/stores/promptStore';
import { cn } from '@/lib/utils';
import heroImg from '@/assets/hero-dashboard.jpg';

export default function Dashboard() {
  const stats = usePromptStats();
  const prompts = usePromptStore((s) => s.prompts);

  const topPrompts = [...prompts]
    .sort((a, b) => b.effectiveness - a.effectiveness || b.usageCount - a.usageCount)
    .slice(0, 8);

  const recentPrompts = [...prompts]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6 p-4 lg:p-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-xl border border-border">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="grid-bg relative px-6 py-8 lg:px-8 lg:py-10">
          <h1 className="font-mono text-2xl font-bold text-foreground lg:text-3xl">
            Command Center
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-mono text-primary tabular-nums">{stats.total}</span>{' '}
            prompts ·{' '}
            <span className="font-mono text-secondary tabular-nums">{stats.modelCount}</span>{' '}
            models ·{' '}
            <span className="font-mono tabular-nums">{stats.categoryCount}</span>{' '}
            categories
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        <StatsCard
          title="Total Prompts"
          value={stats.total}
          icon={FileText}
          accent="amber"
          subtitle={`${stats.totalUsage.toLocaleString()} total uses`}
        />
        <StatsCard
          title="Avg Effectiveness"
          value={`${stats.avgEffectiveness}/5`}
          icon={TrendingUp}
          accent="cyan"
          subtitle="Across all prompts"
        />
        <StatsCard
          title="Models Tracked"
          value={stats.modelCount}
          icon={Cpu}
          accent="amber"
          subtitle="LLM providers"
        />
        <StatsCard
          title="Favorites"
          value={stats.favorites}
          icon={Star}
          accent="cyan"
          subtitle="Starred prompts"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
        {/* Top Prompts — 8 cols */}
        <div className="lg:col-span-8">
          <div className="rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold text-foreground">
                Top Performing Prompts
              </h2>
              <Link
                to="/library"
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                View all <ArrowUpRight className="size-3" />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {topPrompts.map((p) => (
                <Link
                  key={p.id}
                  to={`/library/${p.id}`}
                  className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-accent/30"
                >
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {p.title}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {p.category} · {p.project || 'No project'}
                    </p>
                  </div>
                  <ModelBadge model={p.bestModel} />
                  <div className="hidden items-center gap-0.5 sm:flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'size-1.5 rounded-full',
                          i < p.effectiveness ? 'bg-primary' : 'bg-muted'
                        )}
                      />
                    ))}
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground tabular-nums md:block">
                    {p.usageCount} uses
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar — 4 cols */}
        <div className="space-y-4 lg:col-span-4">
          {/* Model Distribution */}
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold text-foreground">
              Model Distribution
            </h2>
            <div className="space-y-3">
              {stats.modelStats.map((ms) => {
                const pct = Math.round((ms.count / stats.total) * 100);
                return (
                  <div key={ms.model}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-foreground">{ms.model}</span>
                      <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                        {ms.count} ({pct}%)
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted">
                      <div
                        className="h-1.5 rounded-full bg-primary transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
              <BarChart3 className="size-4 text-secondary" />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentPrompts.map((p) => (
                <Link
                  key={p.id}
                  to={`/library/${p.id}`}
                  className="flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-accent/30"
                >
                  <div className="size-2 shrink-0 rounded-full bg-secondary" />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-xs font-medium text-foreground">
                      {p.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Updated{' '}
                      {new Date(p.updatedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <QualityBadge quality={p.qualityTag} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
