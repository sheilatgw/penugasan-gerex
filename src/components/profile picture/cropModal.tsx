'use client';

import { useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import getCroppedImg from '@/lib/cropImage';

type CropModalProps = {
  image: string;
  onClose: () => void;
  onApply: (croppedImage: string) => void;
};

export default function CropModal({ image, onClose, onApply }: CropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleApply = async () => {
    if (!croppedAreaPixels) return;

    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    onApply(croppedImage);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white">
        <div className="flex items-center justify-between px-6 h-18">
          <button aria-label="Close modal" type="button" onClick={onClose} className="text-black">
            <X size={28} />
          </button>

          <h2 className="text-xl font-semibold text-black">Edit Photo</h2>

          <button
            type="button"
            onClick={handleApply}
            className="rounded-full bg-black px-5 py-2 font-medium text-white"
          >
            Apply
          </button>
        </div>

        <div className="relative h-100 w-full">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            objectFit="cover"
            showGrid={true}
            minZoom={1}
            maxZoom={3}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, croppedAreaPixels) => {
              setCroppedAreaPixels(croppedAreaPixels);
            }}
          />
        </div>

        <div className="flex items-center gap-4 px-20 py-5">
          <ZoomOut size={20} className="text-black shrink-0" />

          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full"
          />

          <ZoomIn size={20} className="text-black shrink-0" />
        </div>
      </div>
    </div>
  );
}
