import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import AboutMeScene from "../scenes/AboutMeScene";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

type AboutMeProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function AboutMe({ open, setOpen }: AboutMeProps) {

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
              <Dialog.Panel className="w-full max-w-[80vw] min-h-[70vh] max-h-[90vh] transform overflow-hidden rounded-2xl bg-[#210547]/60 backdrop-blur-md shadow-xl transition-all flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 bg-black/30 text-slate-300 text-left py-4 px-7">
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
                  <Transition.Child
                    enter="ease-out duration-700 delay-[2000ms]"
                    enterFrom="opacity-0 translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                  >
                    <p className="overflow-auto">
                    I'm Phaedra Sanon, a high school junior with a profound passion for web development. At the moment, I work at Artists for Humanity as a web developer, focusing on crafting practical and user-friendly projects. My creativity extends to designing interactive displays and games, including the donation display showcased at the ARTOPIA fundraiser and the mobile implementation of our 2022 Annual Report. Growing in the evolving world of web development is my goal, and so I employ various technologies to enhance my skills, such as:
                    </p>
                  </Transition.Child>
                </div>
                <div className="md:w-1/2">
                  <AboutMeScene/>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}