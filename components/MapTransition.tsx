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
  const [page, setPage] = useState(0);
  const [isInActiveModal, setIsInActiveModal] = useState(false);
  const [start, setStart] = useState(false);

  // const { progress } = useProgress();
  const simulateKeyDownEvent = (key: string) => {
    const simulatedEvent = new KeyboardEvent('keydown', { key });
  
    handleKeyboard(simulatedEvent);
  };

  const handleKeyboard = (event: KeyboardEvent) => {
    if ((event.defaultPrevented || event.repeat || isInActiveModal) || !introIsHidden) {
      return;
    }

    switch (event.key) {
      case "ArrowLeft":
        setPage(p => getPrevPage(p));
        // console.log("left key pressed");
        break;
      case "ArrowRight":
        setPage(p => getNextPage(p));
        // console.log("right key pressed");
        break;
      default:
        return;
    }

    event.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyboard(e));

    return window.removeEventListener("keydown", (e) => handleKeyboard(e));
  })

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
    <main className="w-screen h-screen touch-none overflow-hidden relative">
      <Transition
        show={!introIsHidden}
        enter="duration-[1500ms] ease-in-out"
        enterFrom="md:-translate-x-[200%] md:translate-y-0 translate-y-[200%]"
        enterTo="translate-x-0 translate-y-0"
        leave="duration-[1500ms] ease-in-out"
        leaveFrom="translate-x-0 translate-y-0"
        leaveTo="md:-translate-x-[200%] md:translate-y-0 translate-x-0 translate-y-[200%]"
        className={"transition-all absolute md:top-0 top-[50%] left-0 z-10 md:w-1/2 md:h-screen h-1/2 bg-white dark:bg-zinc-900 flex flex-col justify-center px-24 gap-6 overflow-visible relative"}
      >
        <div className="dark:text-zinc-200 text-black">
          <h1 className="text-5xl md:text-7xl font-bold">Hi! I&apos;m Phaedra.</h1>
          <p className="text-lg md:text-3xl font-bold">I&apos;m a <span className="text-purple-600">web developer</span> from Boston, MA.</p>
        </div>
        <button type="button" className="text-xl bg-purple-600 px-4 py-1.5 w-fit rounded-full font-semibold text-white" onClick={() => handleTransition()}>
          Explore my website
        </button>

        <svg xmlns="http://www.w3.org/2000/svg" className="absolute md:hidden w-screen h-auto bottom-[99%] left-0 z-10" width="392" height="114" viewBox="0 0 392 114" fill="none">
          <path className="dark:fill-zinc-900" d="M205.812 58.2445C105.491 72.1834 26.8034 25.2227 0 0V114H392C371.738 89.607 306.133 44.3057 205.812 58.2445Z" fill="white"/>
        </svg>  
        <svg className="absolute hidden md:block md:h-screen md:w-auto md:top-0 md:left-full z-10" width="690" height="1024" viewBox="0 0 690 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="dark:fill-zinc-900" d="M0 0H55.7784C37.7021 112.729 124.469 364.508 372.889 497.598C621.31 630.689 330.022 872.039 690 1024H0V0Z" fill="white"/>
        </svg>
      </Transition>
      <div className={cn({
        "bg-gradient-to-br from-indigo-950 to-slate-950 w-full h-screen absolute top-0 left-0 touch-none": true,
      })} {...bind()}>
        <Suspense fallback={null}>
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
          <Overlay navigator={[page, setPage]} slider={[introIsHidden, setIntroIsHidden]} dialog={[isInActiveModal, setIsInActiveModal]} />
        </Suspense>
        <Loader started={start} onStarted={() => setStart(true)} />
      </div>
    </main>
  )
}