import React from 'react';
import { GeneralInfo } from '@/types/profile';
import Image from 'next/image';

interface HeaderProps {
  general: GeneralInfo;
}

export default function Header({ general }: HeaderProps) {
  return (
    <header className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {general.profilePhoto && (
          <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={general.profilePhoto}
              alt={general.displayName}
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{general.displayName}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{general.profession}</h2>
          <p className="text-gray-600 mb-2">{general.location}</p>
          {general.about && (
            <p className="max-w-2xl text-gray-700">{general.about}</p>
          )}
        </div>
      </div>
    </header>
  );
} 