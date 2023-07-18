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
            return (
              <div key={notMainTheme} className="nav-planet">
                <NavPlanet image={notMainTheme}/>
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
        className={`planet ring ${navigations.get(image)![2]} ring-offset-4 ring-offset-[#22252C] rounded-full -mr-10`}
        priority
      />
    </div>
  );
}
export function NavPlanet({
  image,
}: { image: planetTheme}) {
  return (
    <Tooltip
      content={`${navigations.get(image)![1]}`}
      placement="top"
      className="bg-[#16181d] rounded shadow-xl shadow-black/10 px-4 py-3"
    >
      <div className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full ring ${navigations.get(image)![2]} ring-offset-4 ring-offset-[#22252C] group relative`}>
        <a href={`${navigations.get(image)![0]}`}>
          <Image
              src={`/planets/${image}.svg`}
              width="0"
              height="0"
              alt=""
              sizes="100vw"
              className="w-20 h-20 lg:w-28 lg:h-28 align-self-start"
            />
        </a>
      </div>
    </Tooltip>
  );
}
export function BlastOffTransitionButton() {
  return (
    <button className="text-xl px-3 py-1 rounded-full font-semibold bg-blue-400 text-white my-2 group">
      <p>blast off! <FontAwesomeIcon icon={faRocket} className="transition-all duration-400 ease-out group-hover:scale-125 group-hover:drop-shadow"/></p>
    </button>
  );
}
