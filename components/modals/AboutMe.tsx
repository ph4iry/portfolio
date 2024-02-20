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
              <Dialog.Panel className="w-full max-w-5xl min-h-[70vh] max-h-[90vh] transform overflow-hidden rounded-2xl bg-[#210547]/60 backdrop-blur-md shadow-xl transition-all flex flex-col-reverse md:flex-row">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas quis. Et tortor consequat id porta nibh. Aliquam id diam maecenas ultricies mi eget mauris. Diam quam nulla porttitor massa id neque. Ullamcorper a lacus vestibulum sed arcu. Tempor orci eu lobortis elementum nibh tellus molestie. Egestas erat imperdiet sed euismod.
                      <br/>
                      <br/>
                      Cras ornare arcu dui vivamus arcu felis bibendum. Sodales ut etiam sit amet nisl purus in. Ac auctor augue mauris augue neque gravida in fermentum et. Duis at tellus at urna condimentum mattis pellentesque id. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Consequat id porta nibh venenatis. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Suspendisse faucibus interdum posuere lorem ipsum dolor sit.
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