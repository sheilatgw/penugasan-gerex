import { Pencil } from 'lucide-react';
import clsx from 'clsx';

type HeaderProps = {
  color: string;
  custom?: string;
  onEdit?: () => void;
};
export default function Header({ color, custom, onEdit }: HeaderProps) {
  return (
    <button
      onClick={onEdit}
      className="group absolute top-0 left-0 w-full z-5 h-25 md:h-40 cursor-pointer overflow-hidden"
    >
      <div className={clsx('absolute inset-0', color)} />
      {custom && (
        <img
          src={custom}
          alt="theme"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Pencil className="size-8 text-white" />
      </div>
    </button>
  );
}
