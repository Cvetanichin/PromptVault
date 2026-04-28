import { Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { usePromptStore } from '@/stores/promptStore';

interface TopBarProps {
  onToggleSidebar: () => void;
}

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  const searchQuery = usePromptStore((s) => s.filters.searchQuery);
  const setSearchQuery = usePromptStore((s) => s.setSearchQuery);

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-sm lg:px-6">
      <button
        onClick={onToggleSidebar}
        className="lg:hidden"
        aria-label="Toggle sidebar"
      >
        <Menu className="size-5 text-muted-foreground" />
      </button>

      <div className="relative max-w-md flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search prompts, tags, categories…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 border-border bg-muted/50 pl-9 text-sm placeholder:text-muted-foreground/70"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden items-center gap-2 sm:flex">
          <div className="size-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
          <span className="text-sm font-medium text-foreground">Alex</span>
        </div>
      </div>
    </header>
  );
}
