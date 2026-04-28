import { cn } from '@/lib/utils';
import type { QualityTag } from '@/types';

const qualityStyles: Record<QualityTag, string> = {
  great: 'bg-emerald-500/15 text-emerald-400',
  okay: 'bg-amber-500/15 text-amber-400',
  poor: 'bg-red-500/15 text-red-400',
};

const qualityLabels: Record<QualityTag, string> = {
  great: 'Great',
  okay: 'Okay',
  poor: 'Poor',
};

interface QualityBadgeProps {
  quality: QualityTag;
}

export default function QualityBadge({ quality }: QualityBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
        qualityStyles[quality]
      )}
    >
      {qualityLabels[quality]}
    </span>
  );
}
