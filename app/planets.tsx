'use client';
import Image from 'next/image';
import { Tooltip } from '@material-tailwind/react';

export type planetTheme = 'flow' | 'sand' | 'wind' | 'grass';

export const planetThemes = ['flow', 'sand', 'wind', 'grass'] as planetTheme[];

export function PlanetNavContainer({
  planetKey,
}: { planetKey: planetTheme }) {
  return (
    <div>
      <div id="planet-navs">
        {
          planetThemes.filter((theme) => theme !== planetKey).map((theme) => {
            return (
              <div key={theme} className="nav-planet">
                <NavPlanet image={theme}/>
              </div>
            );
          })
        }
      </div>
      <KeyPlanet image={planetKey}/>
    </div>
  );
}
export function KeyPlanet({
  image,
}: { image: planetTheme }) {
  return (
    <div id="circle-orbit-container">
      <Image
        src={`/planets/${image}.svg`}
        width="0"
        height="0"
        alt=""
        sizes="100vw"
        className="planet"
        priority
      />
    </div>
  );
}

export function NavPlanet({
  image,
}: { image: planetTheme}) {
  const navigations = new Map<planetTheme, [string, string]>()
    .set('flow', ['/', 'home'])
    .set('sand', ['/about', 'about me'])
    .set('wind', ['/projects', 'projects'])
    .set('grass', ['/contact', 'contact']);

  return (
    <Tooltip
      content={`${navigations.get(image)![1]}`}
      placement="top"
      className="bg-[#22252C] shadow-xl shadow-black/10 px-4 py-3"
    >
      <div className="w-20 h-20 group relative">
        <a href={`${navigations.get(image)![0]}`}>
          <Image
              src={`/planets/${image}.svg`}
              width="0"
              height="0"
              alt=""
              sizes="100vw"
              className="w-20 h-20 align-self-start"
            />
        </a>
      </div>
    </Tooltip>
  );
}
