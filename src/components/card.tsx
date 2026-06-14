'use client';
import { useState } from 'react';
import { facultyTheme } from '@/lib/faculty';
import ProfilePicture from './profile picture/profilePicture';
import ThemeModal from './header/themeModal';
import Header from './header/Header';
import {
  Brush,
  SquareKanban,
  SportShoe,
  BriefcaseBusiness,
  Gpu,
} from 'lucide-react';
import CropModal from './profile picture/cropModal';
import UnitBadge from './Badge';

type ProfileCardProps = {
  name: string;
  nrp: string;
  faculty: string;
};

function shortenName(name: string, maxLength = 32) {
  if (name.length <= maxLength) return name;

  const parts = name.trim().split(/\s+/);
  const result = [...parts];

  for (let i = result.length - 1; i > 0; i--) {
    result[i] = `${result[i][0]}.`;

    const shortened = result.join(' ');

    if (shortened.length <= maxLength) {
      return shortened;
    }
  }

  return result.join(' ');
}

export default function ProfileCard({ name, nrp, faculty }: ProfileCardProps) {
  const [cropImage, setCropImage] = useState<string | null>(null);
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [themeImage, setThemeImage] = useState<string | null>(null);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [photo, setPhoto] = useState('img/default-avatar.webp');
  const theme = facultyTheme[faculty as keyof typeof facultyTheme] ?? {
    header: 'bg-white',
  };
  console.log('themeImage:', themeImage);
  return (
    <div className="relative w-full max-w-sm md:max-w-2xl bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
      <Header
        color={theme.header}
        custom={themeImage ?? undefined}
        onEdit={() => setIsThemeOpen(true)}
      />
      {isThemeOpen && (
        <ThemeModal
          onClose={() => setIsThemeOpen(false)}
          onApply={(selectedTheme) => {
            setThemeImage(selectedTheme);
            setIsThemeOpen(false);
            console.log(themeImage);
          }}
        />
      )}
      <div className=" relative flex flex-col items-left pt-8 md:pt-15">
        <div className="flex items-center justify-between">
          <ProfilePicture
            photo={photo}
            name={name}
            onFileSelect={(file) => {
              const imageUrl = URL.createObjectURL(file);
              setCropImage(imageUrl);
              setIsCropOpen(true);
            }}
          />
          <UnitBadge
            icon={Brush}
            group="Picasso"
            className="text-white bg-blue-500 mt-10 md:hidden"
          />
        </div>

        {isCropOpen && cropImage && (
          <CropModal
            image={cropImage}
            onClose={() => setIsCropOpen(false)}
            onApply={(croppedImage) => {
              setPhoto(croppedImage);
              setIsCropOpen(false);
            }}
          />
        )}
        <div className="flex items-center gap-2">
          <h1
            className={`font-bold ${name.length > 24 ? 'text-base md:text-2xl' : 'text-xl md:text-2xl'}`}
          >
            {shortenName(name)}
          </h1>
          <UnitBadge
            icon={Brush}
            group="Picasso"
            className="text-white bg-blue-500 hidden md:flex"
          />
        </div>
        <p className="text-gray-500">@{nrp}</p>
      </div>
      <div className=" relative flex justify-between pt-6 pb-6 md:pt-8 md:pb-auto border-y md:border-none border-gray-300 mt-5 md:mt-auto">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            S-1 Teknik Informatika
          </h2>
          <p className="text-base text-gray-500 hidden md:block">
            {theme.name}
          </p>
          <p className="text-base text-gray-500 md:hidden">
            {theme.mobileName}
          </p>
        </div>
        <div className="relative hidden md:flex flex-col gap-3">
          <UnitBadge
            icon={SquareKanban}
            group="Managerial"
            className="bg-red-400 text-white"
          />
          <UnitBadge
            icon={SportShoe}
            group="Olahraga"
            className="bg-green-400 text-white"
          />
          <UnitBadge
            icon={BriefcaseBusiness}
            group="Kewirausahaan"
            className="bg-purple-400 text-white"
          />
          <UnitBadge
            icon={Gpu}
            group="Bidang Khusus"
            className="bg-blue-400 text-white"
          />
        </div>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-3 pb-6 md:pb-8 border-b border-gray-300 mt-5 md:hidden">
        <UnitBadge
          icon={SquareKanban}
          group="Managerial"
          className="bg-red-400 text-white"
        />
        <UnitBadge
          icon={SportShoe}
          group="Olahraga"
          className="bg-green-400 text-white"
        />
        <UnitBadge
          icon={BriefcaseBusiness}
          group="Kewirausahaan"
          className="bg-purple-400 text-white"
        />
        <UnitBadge
          icon={Gpu}
          group="Bidang Khusus"
          className="bg-blue-400 text-white"
        />
      </div>
    </div>
  );
}
