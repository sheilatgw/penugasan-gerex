import { Camera } from 'lucide-react';
type PFP = {
  photo?: string;
  name: string;
  onFileSelect: (file: File) => void;
};

function formatFileSize(size: number) {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  return `${Math.max(1, Math.round(size / 1024))} KB`;
}

function FileSummary({ file }: { file: File | null }) {
  if (!file) return null;
}

function ProfilePicture({
  photo = 'img/default-avatar.webp',
  name,
  onFileSelect,
}: PFP) {
  return (
    <label
      aria-label="Edit photo"
      className="relative group z-10 size-20 md:size-35 rounded-full border-4 md:border-6 border-white cursor-pointer"
    >
      <img
        src={photo}
        alt={name}
        className="size-full rounded-full object-cover"
      />
      <div className="absolute md:hidden bottom-0 right-0 bg-gray-300 text-black rounded-full p-1 border-2 border-white">
        <Camera className="size-3" />
      </div>
      <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Camera className="size-10 text-white" />
      </div>
      <input
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          onFileSelect(file);
        }}
      />
    </label>
  );
}

export default ProfilePicture;
