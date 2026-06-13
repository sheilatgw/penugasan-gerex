'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

type themeModalProps = {
  onClose: () => void;
  onApply: (theme: string) => void;
};

function ThemeModal({ onClose, onApply }: themeModalProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const handleApply = () => {
    if (!selectedTheme) return;
    onApply(selectedTheme);
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white">
        <div className="relative flex items-center justify-center px-6 h-18">
          <button
            type="button" aria-label="Close modal"
            onClick={onClose}
            className="absolute left-6 text-black"
          >
            <X size={28} />
          </button>

          <h2 className="text-xl font-semibold text-black">Select Theme</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-5 md:grid-cols-4">
          <button
            onClick={() => onApply('')}
            className="group relative h-24 overflow-hidden rounded-xl border border-gray-200"
          >
            <img
              src="/img/none.webp"
              alt="Ocean"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
            <span className="absolute bottom-2 left-2 text-sm font-medium text-white">
              None
            </span>
          </button>

          <button
            onClick={() => onApply('/img/header-test.jpeg')}
            className="group relative h-24 overflow-hidden rounded-xl border border-gray-200"
          >
            <img
              src="/img/header-test.jpeg"
              alt="Ocean"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
            <span className="absolute bottom-2 left-2 text-sm font-medium text-white">
              ITS
            </span>
          </button>

          <button
            onClick={() => onApply('/img/its-bw.webp')}
            className="group relative h-24 overflow-hidden rounded-xl border border-gray-200"
          >
            <img
              src="/img/its-bw.webp"
              alt="Abstract"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />

            <span className="absolute bottom-2 left-2 text-sm font-medium text-white">
              ITS Logo
            </span>
          </button>
          <button
            onClick={() => onApply('/img/another-theme.webp')}
            className="group relative h-24 overflow-hidden rounded-xl border border-gray-200"
          >
            <img
              src="/img/another-theme.webp"
              alt="Abstract"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />

            <span className="absolute bottom-2 left-2 text-sm font-medium text-white">
              Rectorate
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;
