'use client';
import Image from 'next/image';
import { Tooltip } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faDiagramProject, faGlobe, faHouse, faInfo, faUser, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
// import { ReactNode, useState } from 'react';
// import { ReactNode, useState } from 'react';
export type planetTheme = 'flow' | 'sand' | 'wind' | 'grass';

export const planetThemes = ['flow', 'sand', 'wind', 'grass'] as planetTheme[];

const navigations = new Map<planetTheme, [string, string, string]>()
  .set('flow', ['/', 'home', 'ring-[#7BA8DE]/30'])
  .set('sand', ['/about', 'about me', 'ring-[#E7A660]/30'])
  .set('wind', ['/projects', 'projects', 'ring-[#D9CCF3]/30'])
  .set('grass', ['/contact', 'contact', 'ring-[#08EFC6]/30']);

export function PlanetNavContainer({
  planetKey,
}: { planetKey: planetTheme }) {
  return (
    <div>
      {/* <div id="mobile-planets" className="block md:hidden">
        <BasePlanet image={planetKey}/>
      </div> */}
      <div id="desktop-planets" className="hidden md:block">
        <div id="planet-navs">
          {
            planetThemes.filter((theme) => theme !== planetKey).map((notMainTheme) => {
              const idx = planetThemes.filter(t => t !== planetKey).indexOf(notMainTheme) as 0 | 1 | 2;
              return (
                <div key={notMainTheme} className="nav-planet">
                  <NavPlanet image={notMainTheme} order={idx} />
                </div>
              );
            })
          }
        </div>
        <KeyPlanet image={planetKey}/>
      </div>
    </div>
  );
}
export function KeyPlanet({
  image
}: { image: planetTheme }) {
  return (
    <div id="circle-orbit-container" className="slide-left">
      <Image
        src={`/planets/${image}.svg`}
        width="0"
        height="0"
        alt=""
        sizes="100vw"
        className={`planet ring ${navigations.get(image)![2]} ring-offset-4 hover:ring-8 ring-4 transition-all duration-300 ring-offset-[#22252C] rounded-full -mr-10`}
        priority
      />
    </div>
  );
}
export function NavPlanet({
  image,
  order
}: { image: planetTheme, order: 0 | 1 | 2}) {
  const correspondingTooltipIcon = (() => {
    switch (image) {
      case 'flow': return faHouse;
      case 'wind': return faDiagramProject;
      case 'sand': return faUser;
      case 'grass': return faGlobe;
    }
  })();
  return (
    <Tooltip
      content={
        <>{navigations.get(image)![1]} <FontAwesomeIcon icon={correspondingTooltipIcon} /></>
      }
      placement="left"
      className="bg-[#16181d] rounded shadow-xl shadow-black/10 px-4 py-3 w-48 text-center 2xl:text-2xl"
    >
      <div className="planet-fade w-20 h-20 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 rounded-full transition hover:scale-125 duration-300 relative overflow-visible">
        <a href={`${navigations.get(image)![0]}`}>
          <div className="align-self-start overflow-visible">
            <span className="rounded-full w-20 h-20 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 flex justify-center items-center relative top-0 left-0 z-10 group"> {/* border-4 border-sky-500 */}
              <span className="w-40 h-40 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 absolute rounded-full orbit overflow-visible border-4 border-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:flex">
                <span className="relative top-[10px] left-[10px] lg:top-[5px] lg:left-[5px] xl:top-[10px] xl:left-[10px] 2xl:top-[15px] 2xl:left-[15px] rounded-full bg-gray-300 h-5 w-5 block align-self-end"></span>
              </span>
              <Image
                src={`/planets/${image}.svg`}
                width="0"
                height="0"
                alt=""
                sizes="100vw"
                className={`planet-nav-img w-20 h-20 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 p-0 ring ${navigations.get(image)![2]} ring-offset-4 ring-offset-[#22252C] rounded-full z-0 hover-spin`}
              />
            </span>
          </div>
        </a>
      </div>
    </Tooltip>
  );
}
export function BlastOffTransitionButton({
  nextLocation,
  customText,
}: {
  nextLocation: string,
  customText?: string,
}) {
  const router = useRouter();

  return (
    <span className="flex items-center space-x-4">
      <button className="text-xl lg:text-xl 2xl:text-2xl px-3 2xl:px-6 py-1 2xl:py-2 rounded-full font-semibold bg-blue-400 text-white my-2 2xl:my-3 group hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.25)] disabled:animate-pulse disabled:opacity-75" onClick={(e) => {
        const btn = (e.target as HTMLButtonElement);
        btn.setAttribute('disabled', 'true');
        btn.innerText = 'PLEASE WAIT...';
        router.push(nextLocation);
      }}>
        {customText || 'BLAST OFF!'} <FontAwesomeIcon icon={faRocket} className="transition-all group-hover:ml-2 duration-400 ease-out group-hover:drop-shadow"/>
      </button>

      <Tooltip
        content="hint: interact with the planets or the rocket ship to explore the site!"
        className="bg-[#16181d] rounded shadow-xl shadow-black/10 px-4 py-3 w-96 text-center 2xl:text-lg"
      >
        <span className="hidden md:flex justify-center items-center p-2 rounded-full lg:border-[3px] 2xl:border-4 group hover:border-gray-500 border-gray-700 w-12 lg:w-8 h-12 lg:h-8">
          <FontAwesomeIcon icon={faInfo} className="group-hover:text-gray-500 text-gray-700 w-7 lg:w-4 h-7 lg:h-4" />
        </span>
      </Tooltip>
    </span>
  );
}

export function ContactIcon({
  platform,
  icon,
  link,
  hoverColor,
}: {
  platform: string,
  icon: IconDefinition,
  link: string,
  hoverColor: string,
}) {
  return (
    <a href={link} className="group text-white text-zinc-500 md:p-3 md:rounded-full text-xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
      <span className="hidden md:block">{platform.toLowerCase()}</span>
      <span className="md:hidden"><FontAwesomeIcon icon={icon} className={`${hoverColor}`}/></span>
    </a>
    // <Tooltip
    //   content={platform}
    //   placement="top"
    //   className="bg-[#16181d] rounded shadow-xl shadow-black/10 px-4 py-3 w-36 text-center 2xl:text-2xl"
    // >
    //   <a href={link} aria-label={platform}>
    //     <div className="w-10 h-10 lg:w-14 lg:h-14 2xl:h-[10vh] 2xl:w-[10vh] lg:p-2 2xl:p-3 rounded-full bg-amber-50/50 hover:bg-amber-50 flex justify-center items-center hover:drop-shadow-[0_0_10px_rgba(254,243,199,0.25)] text-center text-gray-900 group">
    //       <FontAwesomeIcon icon={icon} className={`w-7 h-7 lg:w-10 lg:w-10 2xl:h-full 2xl:w-full ${hoverColor}`}/>
    //     </div>
    //   </a>
    // </Tooltip>
  );
}

export function BasePlanet({
  image,
  onChange,
  className,
}: {
  image: planetTheme,
  onChange: (e: any) => void,
  className?: string,
}) {
  return (
    <div className={`text-center flex justify-center items-center h-64 md:mt-10 ${className}`} onClick={onChange}>
      <span className="rounded-full w-40 h-40 flex justify-center items-center top-0 left-0 z-10 relative"> {/* border-4 border-sky-500 */}
        <span className="w-56 h-56 absolute rounded-full classic-orbit overflow-visible border-4 border-gray-400 opacity-0 opacity-100 transition-opacity duration-200 flex">
          <span className="relative top-[20px] left-[20px] rounded-full bg-gray-300 h-6 w-6 block align-self-end"></span>
        </span>
        <Image
          src={`/planets/${image}.svg`}
          width="0"
          height="0"
          alt=""
          sizes="100vw"
          className={`planet-nav-img w-full h-auto p-0 ring ${navigations.get(image)![2]} ring-offset-4 ring-offset-[#22252C] rounded-full z-0`}
        />
      </span>
    </div>
  );
}
