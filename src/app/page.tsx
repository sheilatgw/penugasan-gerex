import ProfileCard from '@/components/card';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white p-4 md:p-10 flex justify-center">
      <ProfileCard name="Togawa Sakiko" nrp="5025261114" faculty="fteic" />
    </div>
  );
}
