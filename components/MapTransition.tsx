/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Fragment, MouseEventHandler, Suspense, useEffect, useState } from "react";
import ThreeScene from "./Scene";
import { Transition } from "@headlessui/react";
import cn from 'classnames';
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Overlay } from "./Overlay";
import Scene from "./Scene";
import Loader from "./Loader";
import { useDrag } from "@use-gesture/react";

const pages = [0, 1];

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
  const [slideOff, setSlideOff] = useState(false);
  const [page, setPage] = useState(0);
  const { progress } = useProgress();
  const simulateKeyDownEvent = (key: string) => {
    const simulatedEvent = new KeyboardEvent('keydown', { key });
    console.log(simulatedEvent)
  
    document.dispatchEvent(new KeyboardEvent('keydown', { key: "ArrowLeft" }));
  };

  const handleKeyboard = (event: KeyboardEvent) => {
    if (event.defaultPrevented || event.repeat || slideOff) {
      return;
    }

    switch (event.key) {
      case "ArrowLeft":
        setPage(p => getPrevPage(p));
        console.log("left key pressed");
        break;
      case "ArrowRight":
        setPage(p => getNextPage(p));
        console.log("right key pressed");
        break;
      default:
        return;
    }

    event.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, []);

  const handleTransition: MouseEventHandler<HTMLButtonElement> = () => {
    setSlideOff(true);
  }

  const bind = useDrag(({ down, movement: [mx] }) => {
    const threshold = 10;

    if (!down) {
      if (mx < -threshold) {
        console.log('triggered left')
        simulateKeyDownEvent('ArrowLeft');
      } else if (mx > threshold) {
        simulateKeyDownEvent('ArrowRight');
      }
    }
  });

  return (
    <main className="w-screen h-screen touch-none">
      <Transition
        show={!slideOff}
        leave="transition-all duration-[1500ms] ease-in-out"
        leaveFrom="translate-x-0 translate-y-0"
        leaveTo="-translate-x-[200%]"
        className="absolute top-0 left-0 z-10 md:w-1/2 h-screen bg-white dark:bg-zinc-900 flex flex-col justify-center px-24 gap-6 overflow-visible relative"
      >
        <div className="dark:text-zinc-200 text-black">
          <h1 className="text-7xl font-bold">Hi! I&apos;m Phaedra.</h1>
          <p className="text-3xl font-bold">I’m a <span className="text-purple-600">web developer</span> from Boston, MA.</p>
        </div>
        <button type="button" className="text-xl bg-purple-600 px-4 py-1.5 w-fit rounded-full font-semibold text-white" onClick={handleTransition}>
          Explore my website
        </button>

        <svg className=" h-screen w-auto absolute top-0 left-full z-10" width="690" height="1024" viewBox="0 0 690 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="dark:fill-zinc-900" d="M0 0H55.7784C37.7021 112.729 124.469 364.508 372.889 497.598C621.31 630.689 330.022 872.039 690 1024H0V0Z" fill="white"/>
        </svg>
      </Transition>
      <div className={cn({
        "bg-gradient-to-br from-indigo-950 to-slate-950 w-full h-screen absolute top-0 left-0 touch-none": true,
      })} {...bind()}>
        <Canvas shadows flat>
          <Suspense fallback={null}><Scene navigate={[page, setPage]} /></Suspense>
        </Canvas>
        <Overlay navigator={[page, setPage]} />
      </div>
    </main>
  )
}