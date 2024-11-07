'use client';
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion, Variant } from 'framer-motion';
import { HiMiniArrowLeftEndOnRectangle } from 'react-icons/hi2';
import { MdRocketLaunch } from 'react-icons/md';
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle, HiChevronRight } from 'react-icons/hi2';
import { Dispatch, Fragment, ReactNode, SetStateAction, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import { About, Projects, Contact } from './Pages';

const pages: [string, string, `text-${string}-${number}`][] = [
  ['About', '/about', 'text-violet-400'],
  ['Projects', '/projects', 'text-rose-400'],
  ['Contact', '/contact', 'text-emerald-400']
]

export function WelcomeOverlay({ show, setShow }: { show: boolean, setShow: (show: boolean) => void }) {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-50 h-lvh w-screen bg-black/40 p-14 backdrop-blur-sm md:p-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-center gap-4 text-white">
              <div className={'!font-gloock text-black dark:text-zinc-200'}>
                <h1 className="mb-3 text-5xl md:text-7xl">Hi! I&apos;m Phaedra.</h1>
                <p className={'!font-vm md:text-2xl'}>I&apos;m a 17 year old <span className="text-purple-500">web developer</span> from Boston, MA.</p>
              </div>
              <button type="button" className={'group flex w-fit items-center gap-1 rounded-full py-1.5 font-vm text-xl italic text-white underline decoration-purple-500 decoration-wavy underline-offset-4 transition hover:text-purple-500'} onClick={() => setShow(false)}>
                explore <MdRocketLaunch className="transition group-hover:translate-x-2 group-hover:scale-150 group-hover:text-purple-500" />
              </button>
              <div className="bottom-24 right-24 mt-4 text-white/50 lg:fixed">
                <div className="mt-3 text-sm italic">Fun fact, here&apos;s what I&apos;m listening to right now:</div>
                <img src="https://spotify-github-profile.kittinanx.com/api/view?uid=p44gq4wrzz0qlhy8prpq99n3a&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=true" alt="" className="w-full md:max-w-[25vw]" />
                <div className="text-sm">P.S. you should totally <a href="https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=1b0c3492295948fa" className="underline decoration-emerald-400 underline-offset-2">follow me on Spotify</a> &#58;&#41;</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!show && (
          <motion.div
            className="fixed left-14 top-14 z-40 text-white transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2, ease: 'easeInOut' } }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setShow(true)} className="flex items-center gap-3"><HiMiniArrowLeftEndOnRectangle className="size-8" /> Back to start</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ExploreOverlay({ navigator, slider, modalManager }: { navigator: [number, Dispatch<SetStateAction<number>>], slider: [boolean, Dispatch<SetStateAction<boolean>>], modalManager: [boolean, Dispatch<SetStateAction<boolean>>] }) {
  const [showModal, setShowModal] = modalManager;
  const [currentPage, setCurrentPage] = navigator;


  const handleKeyboardInteractions = useCallback((e: KeyboardEvent) => {
    if (e.repeat || e.defaultPrevented) return false;

    switch (e.key) {
      case 'ArrowRight': {
        if (showModal) return false;
        const next = (currentPage + 1) % pages.length;
        setCurrentPage(next);
        console.log(currentPage);

        // console.log('next:' + next);
        break;
      }
      case 'ArrowLeft': {
        if (showModal) return false;
        console.log(currentPage);
        const next = (currentPage + 1) % 3;
        setCurrentPage((currentPage - 1 + pages.length) % 3);

        console.log('next:' + next);
        break;
      }
      case 'Escape': {
        setShowModal(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardInteractions);

    return () => {
      document.removeEventListener('keydown', handleKeyboardInteractions)
    }
  }, [handleKeyboardInteractions])

  return (
    <div>
      <LocationOverlay open={showModal} setOpen={setShowModal} page={currentPage} />
      <motion.div transition={{ delayChildren: 5, staggerChildren: 0.5 }} className="fixed bottom-0 z-10 flex h-[30vh] w-screen items-center justify-center">
        <AnimatePresence>
          {pages.map((page, i) => (
            currentPage === i && <motion.div
              // variants={textVariants}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1, transition: {
                  duration: 0.5,
                  delay: 0.5,
                  ease: 'easeInOut'
                }
              }}
              exit={{
                opacity: 0, transition: {
                  delay: 0,
                  duration: 0.5,
                  ease: 'easeInOut'
                }
              }}
              transition={{ type: 'spring', stiffness: 100 }}
              key={i}
              className="absolute top-0 flex flex-col items-center overflow-visible text-center"
            >
              <h1 className={'font-gloock text-3xl text-white'}>{page[0].toLowerCase()} </h1>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2
                  }
                }}
                exit={{ opacity: 0 }}
              >
                <button className={`block text-lg uppercase underline ${page[2]} font-vm`} onClick={() => { setShowModal(true) }}>visit</button>
              </motion.div>
              {/* <TransitionChild
                      enter="transition-transform duration-400 delay-400"
                      enterFrom="translate-y-6"
                      enterTo="translate-y-0"
                    > */}

              {/* </TransitionChild> */}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {!slider[0] && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          // show={!slideOff}
          // as={'div'}
          // enter="transition-all duration-[1500ms] delay-[700ms]"
          // enterFrom="opacity-0 translate-y-5"
          // enterTo="opacity-100 translate-y-0"
          // leave="transition-all duration-750"
          // leaveFrom="opacity-100"
          // leaveTo="opacity-0"
          className="fixed bottom-[10%] z-40 flex w-screen justify-center text-base text-white/50 md:text-base xl:text-lg"
        >
          <div className={'hidden items-center gap-2 font-vm text-base uppercase md:flex'}>Press
            <kbd className="inline-flex">
              <HiOutlineArrowLeftCircle className="h-6" />
              <span className="sr-only">left arrow key</span>
            </kbd>

            or

            <kbd className="inline-flex">
              <HiOutlineArrowRightCircle className="h-6" />
              <span className="sr-only">right arrow key</span>
            </kbd>

            to navigate
          </div>
          <div className="block w-[70vw] whitespace-pre-wrap text-center md:hidden">Swipe left and right to navigate</div>
        </motion.div>
      )}
    </div>
  );
}

export function LocationOverlay({ open, page, setOpen }: { open: boolean, page: number, setOpen: (b: boolean) => void }) {
  return (
    <AnimatePresence>
      {open && page === 0 &&
        <Fragment key={'about'}>
          <About setOpen={setOpen} />
        </Fragment>
      }
      {open && page === 1 &&
        <Fragment key={'projects'}>
          <Projects setOpen={setOpen} />
        </Fragment>
      }
      {open && page === 2 &&
        <Fragment key={'contact'}>
          <Contact setOpen={setOpen} />
        </Fragment>
      }
    </AnimatePresence>
  )
}