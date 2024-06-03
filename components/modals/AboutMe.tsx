import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useRef, useState } from "react";
import AboutMeScene from "../scenes/AboutMeScene";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import ResumeExperience from "../ResumeExperience";

type AboutMeProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function AboutMe({ open, setOpen }: AboutMeProps) {
  const button = useRef(null!);

  return (
    <Transition show={open}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog as="div" className="relative z-10 w-full" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-[500ms] delay-700"
              enterFrom="opacity-0 translate-y-[10vh]"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <Dialog.Panel className="w-full max-w-[80vw] min-h-[70vh] max-h-[90vh] transform overflow-hidden rounded-2xl bg-[#210547]/60 backdrop-blur-md shadow-xl transition-all flex flex-col-reverse md:flex-row relative">
                <div className="text-slate-300 text-left py-4 px-7">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-[500ms] delay-[3000ms]"
                  >
                    <button className="flex justify-start gap-2 text-lg items-center transition hover:text-white mb-4"
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                          e.preventDefault();
                        }
                      }}
                      tabIndex={0}
                      onClick={() => setOpen(false)}
                    >
                      <ArrowLeftCircleIcon className="h-8" /> Back to map
                    </button>
                  </Transition.Child>
                  <div className="">
                    <Transition.Child
                      enter="ease-out duration-700 delay-[2000ms]"
                      enterFrom="opacity-0 translate-y-full"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <h1 className="sr-only">Welcome!</h1>
                      <p className="">
                      I&apos;m Phaedra Sanon, a high school junior with a profound passion for web development. Growing in the evolving world of web development is my goal, and so I employ various technologies to enhance my skills, such as:
                      </p>
                      <div className="relative my-4">
                        <button className="ring-2 py-4 px-3 w-full rounded-md flex items-center gap-4 flex-nowrap ring-zinc-200/60 before:ring-2 before:ring-zinc-200/10 before:rounded-md before:w-full before:h-full before:absolute before:top-0 before:left-0 before:hover:top-2 before:hover:left-2 before:transition-all before:ease-out transition hover:ring-violet-400 active:translate-y-1 before:active:top-1 before:active:left-1" ref={button}>
                          <kbd className="p-2 rounded-md ring-2 ring-zinc-200/30 text-zinc-200/30 w-8 h-8 inline-flex items-center justify-center text-xl font-semibold">S</kbd> <span>My Skills</span>
                        </button>
                      </div>
                      <ResumeExperience />
                    </Transition.Child>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}