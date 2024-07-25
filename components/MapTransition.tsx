/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Suspense, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import cn from 'classnames';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Overlay } from "./Overlay";
import MapScene from "./scenes/MapScene";
import { useDrag } from "@use-gesture/react";
import Loader from "./Loader";
import { useKeyDown } from "@react-hooks-library/core";
import LenisScroll from "./LenisScroll";
import { useLenis } from "lenis/react";
import Lenis from "lenis";
import { gloock, libre_caslon_display, victor_mono } from "@/app/fonts";
import { MdRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const pages = [0, 1, 2];

const getNextPage = (index: number) => {
  if (index + 1 < pages.length) {
    return index + 1;
  } else {
    return 0;
  }
}

const getPrevPage = (index: number) => {
  if (index - 1 >= 0) {
    return index - 1;
  } else {
    return pages.length - 1;
  }
}

export default function MapTransition() {
  const [introIsHidden, setIntroIsHidden] = useState(false);
  const [isInActiveModal, setIsInActiveModal] = useState(false);
  const [page, setPage] = useState(0);

  const simulateKeyDownEvent = (key: string) => {
    const simulatedEvent = new KeyboardEvent('keydown', { key });
  
    if (
      !isInActiveModal && // no active modal
      introIsHidden // intro is hidden
    ) {
      switch (key) {
        case "ArrowLeft":
          setPage(p => getPrevPage(p));
          simulatedEvent.preventDefault();
          // console.log("left key pressed");
          break;
        case "ArrowRight":
          setPage(p => getNextPage(p));
          simulatedEvent.preventDefault();
          // console.log("right key pressed");
          break;
        default:
          return;
      }
      // event.preventDefault();
    }
  };

  useKeyDown('ArrowRight', (e) => {
    if (!e.defaultPrevented && !e.repeat && introIsHidden && !isInActiveModal) {
      setPage(p => getNextPage(p));
    }
  });

  useKeyDown('ArrowLeft', (e) => {
    if (!e.defaultPrevented && !e.repeat && introIsHidden && !isInActiveModal) {
      setPage(p => getPrevPage(p));
    }
  });

  const lenis = useLenis();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`conditions:\n\nnot in active modal? ${!isInActiveModal}\nintro is hidden? ${introIsHidden}`);
    }, 250);

    const handleScroll = (instance: Lenis) => {
      if (!isInActiveModal) {
        instance.scrollTo(0, { immediate: true });
      }
    }

    lenis?.on('scroll', handleScroll);

    return () => {
      lenis?.off('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [introIsHidden, isInActiveModal])

  const handleTransition = () => {
    setIntroIsHidden(true);
  }

  const bind = useDrag(({ down, movement: [mx] }) => {
    const threshold = 50;

    if (!down) {
      if (mx < -threshold) {
        simulateKeyDownEvent('ArrowRight');
      } else if (mx > threshold) {
        simulateKeyDownEvent('ArrowLeft');
      }
    }
  });

  

  return (
    <main className="w-screen lg:min-h-[250vh] md:min-h-[300vh] min-h-[450vh] h-full touch-none overflow-hidden relative">
      <LenisScroll inModal={isInActiveModal}>        
        <div className="w-screen h-screen relative inset-0">
        <div className="absolute right-0 text-white">{introIsHidden}</div>
          <Transition
            show={!introIsHidden}
            as="div"
            enter="duration-[1500ms] ease-in-out"
            enterFrom="md:-translate-x-[200%] md:translate-y-0 translate-y-[200%]"
            enterTo="translate-x-0 translate-y-0"
            leave="duration-[1500ms] ease-in-out"
            leaveFrom="translate-x-0 translate-y-0"
            leaveTo="md:-translate-x-[200%] md:translate-y-0 translate-x-0 translate-y-[200%]"
            className={"bottom-0 fixed transition-all md:inset-0 z-10 md:w-1/2 md:h-screen h-1/2 bg-white dark:bg-zinc-900 flex flex-col justify-start md:justify-center px-10 md:px-24 gap-6 overflow-visible"}
          >
            <div className={`dark:text-zinc-200 text-black ${gloock.className}`}>
              <h1 className="text-5xl md:text-7xl ">Hi! I&apos;m Phaedra.</h1>
              <p className={`text-lg md:text-2xl ${victor_mono.className}`}>I&apos;m a 17 year old <span className="text-purple-500">web developer</span> from Boston, MA.</p>
            </div>
            <button type="button" className={`md:text-xl underline underline-offset-4 decoration-wavy decoration-purple-500 italic py-1.5 w-fit hover:text-purple-500 delay-150 transition rounded-full text-white flex gap-1 items-center group ${victor_mono.className}`} onClick={() => handleTransition()}>
              explore <MdRocketLaunch className="group-hover:ml-3 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:scale-150 group-hover:text-purple-500 transition-all" />
            </button>

            <div className="fixed bottom-10 md:bottom-20 text-white/50">
              <div className="text-sm italic mt-3">Fun fact, here&apos;s what I&apos;m listening to right now:</div>
              <img src="https://spotify-github-profile.kittinanx.com/api/view?uid=p44gq4wrzz0qlhy8prpq99n3a&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=true" alt="" className="w-full md:max-w-[25vw]" />
              <div className="text-sm">P.S. you should totally <a href="https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=1b0c3492295948fa" className="underline decoration-wavy decoration-emerald-400">follow me on Spotify</a> :)</div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute md:hidden w-screen h-auto bottom-[99%] left-0 z-10" width="392" height="114" viewBox="0 0 392 114" fill="none">
              <path className="dark:fill-zinc-900" d="M205.812 58.2445C105.491 72.1834 26.8034 25.2227 0 0V114H392C371.738 89.607 306.133 44.3057 205.812 58.2445Z" fill="white"/>
            </svg>  
            <svg className="absolute hidden md:block md:h-screen md:w-auto md:top-0 md:left-full z-10" width="690" height="1024" viewBox="0 0 690 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:fill-zinc-900" d="M0 0H55.7784C37.7021 112.729 124.469 364.508 372.889 497.598C621.31 630.689 330.022 872.039 690 1024H0V0Z" fill="white"/>
            </svg>
          </Transition>
        </div>
        <div className={cn({
          "w-full h-screen absolute top-0 left-0 touch-none": true,
        })} {...bind()}>
          <div className="fixed inset-0">
            <Canvas shadows flat>
              <Stars
                radius={750} // Radius of the inner sphere (default=100)
                depth={2000} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={4} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                fade // Faded dots (default=false)
              />
              
              <Suspense fallback={null}>
                <MapScene navigate={[page, setPage]} />
              </Suspense>
            </Canvas>
          </div>
          <Overlay navigator={[page, setPage]} slider={[introIsHidden, setIntroIsHidden]} dialog={[isInActiveModal, setIsInActiveModal]} />
          {/* <Loader started={start} onStarted={() => setStart(true)} /> */}
        </div>
      </LenisScroll>
    </main>
  )
}