import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';
type unitProps = {
  icon: LucideIcon;
  group?: string;
  className?: string;
};

function UnitBadge({ icon: BadgeIcon, className, group }: unitProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-gray-300',
        'px-2 flex items-center gap-1',
        'font-semibold uppercase',
        className,
      )}
    >
      <BadgeIcon className="size-3 md:size-4" />
      <span className="text-sm md:text-base">{group}</span>
    </div>
  );
}

export default UnitBadge;
