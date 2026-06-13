import ProfileCard from '@/components/card';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white p-4 md:p-10 flex justify-center">
      <ProfileCard
        name="Elizabeth Carissa Michelle Wijaya Putri"
        nrp="5000261000"
        faculty="fteic"
      />
    </div>
  );
}
