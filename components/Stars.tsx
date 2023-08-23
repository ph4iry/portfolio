/* eslint-disable @next/next/no-img-element */
'use client';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BasePlanet } from './planets';
import '@/styles/galaxy.css';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Planets = new Map()
  .set('/', 'flow')
  .set('/about', 'sand')
  .set('/projects', 'wind')
  .set('/contact', 'grass');

const PlanetTitles = new Map()
  .set('/', 'home')
  .set('/about', 'about me')
  .set('/projects', 'my projects')
  .set('/contact', 'contact me');

type starType = 'system' | 'sky';

export default function Stars({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeStars, setActiveStars] = useState<starType>('sky');

  const handleChange = () => {
    console.log(activeStars);
    if (activeStars === 'sky') return setActiveStars('system');
    if (activeStars === 'system') return setActiveStars('sky');
  };

  // if (typeof window !== 'undefined') {
  //   if (window.innerWidth > 768) {
  //     setActiveStars('sky');
  //   }
  // }

  if (activeStars === 'sky') {
    return (
      <>
        <div id="star-container" className="opacity-25 z-0">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="z-10 overflow-y-auto flex flex-col justify-start h-full pt-16 pb-20">
          <BasePlanet image={Planets.get(pathname)} onChange={handleChange} className="block md:hidden"/>
          {children}
        </div>
      </>
    );
  } else if (activeStars === 'system') {
    return (
      <Galaxy
        activeStarManagement={[activeStars, setActiveStars]}
        // keyPlanet={<BasePlanet image={Planets.get(pathname)} onChange={handleChange} className="z-50 block md:hidden"/>}
      >
        <div className="z-10 overflow-y-hidden">
          {children}
        </div>
      </Galaxy>
    );
  }
}

export function Galaxy({ children, activeStarManagement }: { children: ReactNode, activeStarManagement: [starType, (e: starType) => void] }) {
  const pathname = usePathname();
  const paths = ['/', '/about', '/projects', '/contact'];
  const [nextNavigation, setNextNavigation] = useState(paths.indexOf(pathname));
  const [activelyNavigating, setActivelyNavigating] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setActivelyNavigating(true);
  };

  const translations = [
    'translateY(200vh)',
    'translateY(100vh)',
    'translateY(0vh)',
    'translateY(-100vh)',
  ];

  const handleUp = () => {
    setNextNavigation(prev => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
    console.log(nextNavigation);
    (document.getElementById('galaxy-map') as HTMLDivElement).style.transform = translations[nextNavigation];
  };

  const handleDown = () => {
    setNextNavigation(prev => {
      if (prev === 3) {
        return 3;
      } else {
        return prev + 1;
      }
    });
    console.log(nextNavigation);
    (document.getElementById('galaxy-map') as HTMLDivElement).style.transform = translations[nextNavigation];
  };

  console.log(translations[nextNavigation]);

  useEffect(() => {
    if (activelyNavigating) {
      activeStarManagement[1]('sky');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <>
      {/* {keyPlanet} */}
      {children}
      <div className="h-screen w-screen z-50 bg-[#22252c] absolute top-0 left-0 flex flex-col justify-center items-center block md:hidden">
        <div className="z-0">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <div className="flex z-20 justify-between w-full pr-10 pl-16">
          <div className="flex flex-col text-center justify-center items-center transition-all ease-in-out duration-1000" id="galaxy-map" style={{
            transform: translations[nextNavigation]
          }}>
            {
              Array.from(Planets.entries()).map((planet) => (
                <div key={planet[0]} className="h-screen flex flex-col justify-baseline">
                  <div className="-translate-y-1/2">
                    <BasePlanet image={Planets.get(planet[0])} onChange={() => handleNavigation(planet[0])} className="z-50 block md:hidden"/>
                    <div className="text-white font-semibold text-2xl whitespace-nowrap">{PlanetTitles.get(planet[0])}</div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <button className="p-2 text-white bg-zinc-700/30 rounded-full w-12 h-12 text-center flex justify-center items-center" onClick={handleUp}>
              <FontAwesomeIcon icon={faChevronUp} className="fa-2x"/>
              </button>
            <button className="p-2 text-white bg-zinc-700/30 rounded-full w-12 h-12 text-center flex justify-center items-center" onClick={handleDown}>
              <FontAwesomeIcon icon={faChevronDown} className="fa-2x" />
              </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-[#121212]/30 z-50">
            <img
              src="https://spotify-github-profile.vercel.app/api/view?uid=p44gq4wrzz0qlhy8prpq99n3a&cover_image=true&theme=natemoo-re&show_offline=true&background_color=121212&interchange=true&bar_color=ffffff&bar_color_cover=false"
              alt="the current spotify song that my account is playing"
              // width="0"
              // height="0"
              sizes="100vw"
              className="w-auto md:h-10 lg:h-14 hover:h-20 2xl:min-h-[9vh] 2xl:hover:h-[12vh] transition-all"
            />
        </div>
      </div>
    </>
  );
}
