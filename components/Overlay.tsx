'use client';
import { Transition } from "@headlessui/react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Dispatch, SetStateAction, useReducer, useState } from "react";

const pages: [string, string][] = [
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Now Playing', '/now-playing']
]

export function Overlay({ navigator, slider }: {navigator:[number, Dispatch<SetStateAction<number>>], slider: [boolean, Dispatch<SetStateAction<boolean>>]}) {
  const [show, setShow] = useState(true);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [currentPage, setCurrentPage] = navigator;
  const [slideOff, setSlideOff] = slider;
  
  return (
    <>
    <div className="absolute top-0 h-20 w-screen text-white p-10">
      <div className="flex gap-8">
        <Transition
          show={slideOff}
          enter="transition-all duration-[1500ms] delay-[700ms]"
          enterFrom="opacity-0 translate-y-5"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-750"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <button className="flex gap-2 hover:gap-4 transition-all text-lg" onClick={() => setSlideOff(false)}>Go back <ChevronRightIcon className="h-6" /></button>
        </Transition>
        
      </div>
    </div>
      <div className="absolute bottom-0 w-screen h-[30vh]">
        {
          pages.map((page, i) => (
            <Transition
              key={i}
              show={currentPage == i}
              className={"flex flex-col items-center text-center h-1 overflow-visible"}
              enter="transition-all duration-[1500ms] delay-[700ms]"
              enterFrom="opacity-0 translate-y-5"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-750"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <h1 className="font-bold text-3xl text-white">{page[0]}</h1>
              <Transition
                show={true}
                enter="transition-transform duration-400 delay-400"
                enterFrom="translate-y-6"
                enterTo="translate-y-0"
              >
                <a className="block font-bold underline text-xl text-fuchsia-500" href={page[1]}>VISIT</a>
              </Transition>
            </Transition>
          ))
        }
      </div>
      {/* <Transition
        show={slideOff}
        enter="transition-all duration-[1500ms] delay-[700ms]"
        enterFrom="opacity-0 translate-y-5"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-750"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute bottom-[15%] text-white/50 text-sm md:text-base xl:text-lg w-screen flex justify-center"
      >
        <div className="hidden md:block">Press 
        
        <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          <ArrowLeftCircleIcon className="h-6" />
          <span className="sr-only">Arrow key up</span>
        </kbd>

        or

        <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          <ArrowRightCircleIcon className="h-6"/>
          <span className="sr-only">right arrow key</span>
        </kbd>
        </div>
        <div className="md:hidden block">swipe left and right to navigate the phaedraverse</div>
      </Transition> */}
    </>

  );
}
