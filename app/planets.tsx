'use client';
import Image from 'next/image';
import { Tooltip } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

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
  );
}
export function KeyPlanet({
  image
}: { image: planetTheme }) {
  return (
    <div id="circle-orbit-container">
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
  const rotation = (() => {
    switch (order) {
      case 0: return 'hover:rotate-45';
      case 1: return 'hover:rotate-90';
      case 2: return 'hover:rotate-[135deg]';
    }
  })();
  return (
    <Tooltip
      content={`${navigations.get(image)![1]}`}
      placement="top"
      className="bg-[#16181d] rounded shadow-xl shadow-black/10 px-4 py-3 w-36 text-center"
    >
      <div className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full transition hover:scale-125 ${rotation} duration-300 relative overflow-visible`}>
        <a href={`${navigations.get(image)![0]}`}>
          <div className="align-self-start overflow-visible">
            <span className="rounded-full w-36 h-36 flex justify-center items-center relative top-0 left-0 z-10 group"> {/* border-4 border-sky-500 */}
              <span className="w-40 h-40 absolute rounded-full orbit overflow-visible border-4 border-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:flex">
                <span className="relative top-[10px] left-[10px] rounded-full bg-gray-300 h-5 w-5 block align-self-end"></span>
              </span>
              <Image
                src={`/planets/${image}.svg`}
                width="0"
                height="0"
                alt=""
                sizes="100vw"
                className={`w-20 h-20 lg:w-28 lg:h-28 p-0 ring ${navigations.get(image)![2]} ring-offset-4 ring-offset-[#22252C] rounded-full z-0 hover-spin`}
              />
            </span>
          </div>
        </a>
      </div>
    </Tooltip>
  );
}
export function BlastOffTransitionButton() {
  return (
    <button className="text-2xl px-3 py-1 rounded-full font-semibold bg-blue-400 text-white my-2 group hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.25)]">
      <p>BLAST OFF! <FontAwesomeIcon icon={faRocket} className="transition-all group-hover:ml-2 duration-400 ease-out group-hover:drop-shadow"/></p>
    </button>
  );
}
