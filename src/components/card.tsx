"use client"
import { useState } from "react";
import clsx from "clsx";
import ProfilePicture from "./profilePicture";
import { Brush, SquareKanban, SportShoe, BriefcaseBusiness, Gpu } from "lucide-react";
import CropModal from "./cropModal";
import UnitBadge from "./Badge";

type ProfileCardProps = {
  name: string;
  nrp: string;
  fakultas: string;
};

const facultyTheme = {
  FTEIC: {
    header: "bg-yellow-400",
  },
  FTIRS: {
    header: "bg-red-700",
  },
  FDKBD: {
    header: "bg-purple-700",
  },
  FSAD: {
    header: "bg-green-600",
  },
  FTSPK: {
    header: "bg-stone-950",
  },
  FTK: {
    header: "bg-blue-700",
  },
  FV: {
    header: "bg-red-500",
  },
  FKK: {
    header: "bg-gray-400",
  },
};


function shortenName(name: string, maxLength = 32) {
  if (name.length <= maxLength) return name;

  const parts = name.trim().split(/\s+/);
  const result = [...parts];

  for (let i = result.length - 1; i > 0; i--) {
    result[i] = `${result[i][0]}.`;

    const shortened = result.join(" ");

    if (shortened.length <= maxLength) {
      return shortened;
    }
  }

  return result.join(" ");
}

export default function ProfileCard({ name, nrp, fakultas}: ProfileCardProps) {
  const [cropImage, setCropImage] = useState<string | null>(null)
  const [isCropOpen, setIsCropOpen] = useState(false)
  const [photo, setPhoto] = useState("img/default-avatar.webp")
  const theme = facultyTheme[fakultas as keyof typeof facultyTheme] ?? { header: "bg-white",};

  return (
    <div className="relative w-full max-w-sm md:max-w-2xl bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
      <div className={clsx("absolute top-0 left-0 w-full h-25 md:h-40", theme.header)}
      />
      <div className=" relative z-5 flex flex-col items-left pt-8 md:pt-18">
        <div className="flex items-center justify-between">
          <ProfilePicture photo={photo} name={name} onFileSelect={(file) => {
          const imageUrl = URL.createObjectURL(file)
          setCropImage(imageUrl)
          setIsCropOpen(true)
        }}/>
          <UnitBadge icon={Brush} group="Picasso" className="text-white bg-blue-500 mt-10"/>
        </div>
        
        {isCropOpen && cropImage && (
            <CropModal image={cropImage} onClose={() => setIsCropOpen(false)} 
            onApply={(croppedImage) => {setPhoto(croppedImage); setIsCropOpen(false)}}/>
        )}
        <h1 className={`font-bold ${name.length > 24 ? "text-base md:text-2xl" : "text-xl md:text-2xl"}`}>
          {shortenName(name)}
        </h1>
        <p>{nrp}</p>
      </div>
      <div className=" relative flex flex-col items-left py-6 md:py-8 border-y border-gray-300 mt-10">
        <h2 className="text-lg font-semibold">S-1 Teknik Informatika</h2>
        <p className="text-base text-gray-400">{fakultas}</p>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-3 pb-6 md:pb-8 border-b border-gray-300 mt-5">
        <UnitBadge icon={SquareKanban} group="Managerial" className="bg-red-400 text-white"/>
        <UnitBadge icon={SportShoe} group="Olahraga" className="bg-green-400 text-white"/>
        <UnitBadge icon={BriefcaseBusiness} group="Kewirausahaan" className="bg-purple-400 text-white"/>
        <UnitBadge icon={Gpu} group="Bidang Khusus" className="bg-blue-400 text-white"/>
      </div>
    </div>
  );
}