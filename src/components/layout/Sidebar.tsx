import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  GitCompareArrows,
  Zap,
  X,
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/library', label: 'Library', icon: BookOpen },
  { path: '/categories', label: 'Categories', icon: Layers },
  { path: '/compare', label: 'Compare', icon: GitCompareArrows },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-200 lg:static lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
            PV
          </div>
          <span className="font-semibold tracking-tight text-foreground">
            PromptVault
          </span>
          <button
            onClick={onClose}
            className="ml-auto lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="size-5 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                isActive(path)
                  ? 'bg-primary/10 text-primary glow-amber'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-2 rounded-md bg-accent/50 px-3 py-2.5">
            <Zap className="size-4 text-primary" />
            <div className="text-xs">
              <p className="font-medium text-foreground">Pro User</p>
              <p className="text-muted-foreground">Unlimited prompts</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
