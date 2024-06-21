'use client';
import { Transition } from "@headlessui/react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Dispatch, Fragment, ReactNode, SetStateAction, useEffect, useReducer, useState } from "react";
import AboutMe from "./modals/AboutMe";
import Projects from "./modals/Projects";
import { useRouter } from "next/navigation";

const pages: [string, string, `bg-${string}-${number}`, ((props: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => JSX.Element)][] = [
  ['About', '/about', 'bg-indigo-800', AboutMe],
  ['Projects', '/projects', 'bg-violet-400', Projects],
  ['Contact', '/contact', 'bg-violet-400', AboutMe]
]

export function Overlay({ navigator, slider, dialog }: {navigator:[number, Dispatch<SetStateAction<number>>], slider: [boolean, Dispatch<SetStateAction<boolean>>], dialog: [boolean, Dispatch<SetStateAction<boolean>>] }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [currentPage, setCurrentPage] = navigator;
  const [slideOff, setSlideOff] = slider;
  const [inDialog, setInDialog] = dialog;

  useEffect(() => {
    setInDialog(showModal);
    // console.log(showModal, inDialog);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <>
    <AboutMe open={currentPage === 0 && showModal} setOpen={(b: boolean) => {setShowModal(b); setInDialog(b) } } />
    <Projects open={currentPage === 1 && showModal} setOpen={(b: boolean) => {setShowModal(b); setInDialog(b) } } />
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
            <Fragment key={i}>
              <Transition
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
                <Transition.Child
                  enter="transition-transform duration-400 delay-400"
                  enterFrom="translate-y-6"
                  enterTo="translate-y-0"
                >
                  <button className="block font-bold underline text-xl text-fuchsia-500" onClick={() => { setInDialog(true); setShowModal(true) }}>VISIT</button>
                </Transition.Child>
              </Transition>
            </Fragment>
          ))
        }
      </div>
      <Transition
        show={slideOff}
        enter="transition-all duration-[1500ms] delay-[700ms]"
        enterFrom="opacity-0 translate-y-5"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-750"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute bottom-[10%] text-white/50 text-base md:text-base xl:text-lg w-screen flex justify-center"
      >
        <div className="hidden md:flex gap-2 items-center">Press 
          <kbd className="inline-flex">
            <ArrowLeftCircleIcon className="h-6" />
            <span className="sr-only">left arrow key</span>
          </kbd>

          or

          <kbd className="inline-flex">
            <ArrowRightCircleIcon className="h-6"/>
            <span className="sr-only">right arrow key</span>
          </kbd>

          to navigate
        </div>
        <div className="md:hidden block w-[70vw] whitespace-wrap text-center">Swipe left and right to navigate</div>
      </Transition>
    </>

  );
}

function CustomModal({ node, show }:{ node: ReactNode, show: boolean}) {
  <Transition
    show={show}
    enter="transition duration-100 ease-out"
    enterFrom="scale-95 opacity-0"
    enterTo="scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="scale-100 opacity-100"
    leaveTo="scale-95 opacity-0"
    as={'div'}
  >
    node
    {node}
  </Transition>
}