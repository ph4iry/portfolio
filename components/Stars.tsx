'use client';

import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BasePlanet } from './planets';
import '@/styles/galaxy.css';

const Planets = new Map()
  .set('/', 'flow')
  .set('/about', 'sand')
  .set('/projects', 'wind')
  .set('/contact', 'grass');

export default function Stars({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  type starType = 'system' | 'sky';
  const [activeStars, setActiveStars] = useState<starType>('sky');

  const handleChange = () => {
    console.log(activeStars);
    if (activeStars === 'sky') return setActiveStars('system');
    if (activeStars === 'system') return setActiveStars('sky');
  };

  if (activeStars === 'sky') {
    return (
      <>
        <div id="star-container" className="opacity-25 z-0">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="z-10">
          <BasePlanet image={Planets.get(pathname)} onChange={handleChange} className="block md:hidden"/>
          {children}
        </div>
      </>
    );
  } else if (activeStars === 'system') {
    return (
      <Galaxy
        keyPlanet={<BasePlanet image={Planets.get(pathname)} onChange={handleChange} className="z-50 block md:hidden"/>}
      >
        <div className="z-10">
          {children}
        </div>
      </Galaxy>
    );
  }
}

export function Galaxy({ children, keyPlanet }: { children: ReactNode, keyPlanet: ReactNode }) {
  return (
    <>
      {keyPlanet}
      {children}

      <div className="h-screen w-screen z-50 bg-[#22252c] absolute top-0 left-0 flex flex-col justify-center items-center block md:hidden">
        <div className="z-0">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        {keyPlanet}
      </div>
    </>
  );
}
