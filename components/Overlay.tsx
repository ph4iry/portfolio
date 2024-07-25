'use client';
import { Transition } from "@headlessui/react";
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle, HiChevronRight } from "react-icons/hi2";
import { Dispatch, Fragment, ReactNode, SetStateAction, useEffect, useReducer, useState } from "react";
import AboutMe from "./modals/AboutMe";
import Projects from "./modals/Projects";
import { useRouter } from "next/navigation";
import Contact from "./modals/Contact";
import { gloock, libre_caslon_display, victor_mono } from "@/app/fonts";

const pages: [string, string, `text-${string}-${number}`, ((props: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => JSX.Element)][] = [
  ['About', '/about', 'text-violet-400', AboutMe],
  ['Projects', '/projects', 'text-rose-400', Projects],
  ['Contact', '/contact', 'text-emerald-400', Contact]
]

export function Overlay({ navigator, slider, dialog }: {navigator:[number, Dispatch<SetStateAction<number>>], slider: [boolean, Dispatch<SetStateAction<boolean>>], dialog: [boolean, Dispatch<SetStateAction<boolean>>] }) {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = navigator;
  const [slideOff, setSlideOff] = slider;
  const [inDialog, setInDialog] = dialog;

  // useEffect(() => {
  //   console.log('hello')
  //   setInDialog(showModal);

  //   const handleKeyboard = (e: KeyboardEvent) => {
  //     if (showModal) {
  //       console.log('im not running this');
  //     } else {
  //       if (slideOff) return e.preventDefault();
  //       if (e.key === 'ArrowLeft') {
  //         setCurrentPage((p) => p - 1 < 0 ? pages.length - 1 : p - 1);
  //       } else if (e.key === 'ArrowRight') {
  //         setCurrentPage((p) => p + 1 > pages.length - 1 ? 0 : p + 1);
  //       }
  //     }
  //     console.log('end');
  //   }

  //   window.addEventListener('keydown', (e: KeyboardEvent) => {
  //     if (showModal) {
  //       console.log('im not running this');
  //     } else {
  //       if (slideOff) return e.preventDefault();
  //       if (e.key === 'ArrowLeft') {
  //         setCurrentPage((p) => p - 1 < 0 ? pages.length - 1 : p - 1);
  //       } else if (e.key === 'ArrowRight') {
  //         setCurrentPage((p) => p + 1 > pages.length - 1 ? 0 : p + 1);
  //       }
  //     }
  //     console.log('end');
  //   });

  //   return window.removeEventListener('keydown', (e: KeyboardEvent) => {
  //     if (showModal) {
  //       console.log('im not running this');
  //     } else {
  //       if (slideOff) return e.preventDefault();
  //       if (e.key === 'ArrowLeft') {
  //         setCurrentPage((p) => p - 1 < 0 ? pages.length - 1 : p - 1);
  //       } else if (e.key === 'ArrowRight') {
  //         setCurrentPage((p) => p + 1 > pages.length - 1 ? 0 : p + 1);
  //       }
  //     }
  //     console.log('end');
  //   });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [showModal, slideOff]);

  return (
    <>
    <AboutMe open={currentPage === 0 && showModal} setOpen={(b: boolean) => {setShowModal(b); setInDialog(b) } } />
    <Projects open={currentPage === 1 && showModal} setOpen={(b: boolean) => {setShowModal(b); setInDialog(b) } } />
    <Contact open={currentPage === 2 && showModal} setOpen={(b: boolean) => {setShowModal(b); setInDialog(b) } } />
    <div className="fixed inset-0 touch-none pointer-events-none" />
    <div className="fixed top-0 h-20 w-screen text-white p-10 z-10">
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
          <button className="flex gap-2 hover:gap-4 transition-all text-lg" onClick={() => setSlideOff(!slideOff)}>Go back <HiChevronRight className="h-6" /></button>
        </Transition>
        
      </div>
    </div>
      <div className="fixed bottom-0 w-screen h-[30vh] z-0">
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
                <h1 className={`text-3xl text-white ${gloock.className}`}>{page[0].toLowerCase()} </h1>
                <Transition.Child
                  enter="transition-transform duration-400 delay-400"
                  enterFrom="translate-y-6"
                  enterTo="translate-y-0"
                >
                  <button className={`block underline text-lg uppercase ${page[2]} ${victor_mono.className}`} onClick={() => { setInDialog(true); setShowModal(true) }}>visit</button>
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
        className="fixed bottom-[10%] text-white/50 text-base md:text-base xl:text-lg w-screen flex justify-center"
      >
        <div className={`hidden md:flex gap-2 items-center uppercase text-base ${victor_mono.className}`}>Press 
          <kbd className="inline-flex">
            <HiOutlineArrowLeftCircle className="h-6" />
            <span className="sr-only">left arrow key</span>
          </kbd>

          or

          <kbd className="inline-flex">
            <HiOutlineArrowRightCircle className="h-6"/>
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