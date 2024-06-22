'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { ArrowLeftCircleIcon, ArchiveBoxIcon, LinkIcon, TrophyIcon } from "@heroicons/react/24/outline";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";
import ProjectCarousel from '../ProjectCarousel';

type ContactProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function Contact({ open, setOpen }: ContactProps) {
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

        <div className="fixed inset-0 overflow-hidden">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-[500ms] delay-700"
              enterFrom="opacity-0 scale-110"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-110"
            >
              <Dialog.Panel className="w-screen h-[90vh] transform overflow-hidden bg-emerald-900/60 backdrop-blur-md shadow-xl transition-all flex flex-col md:flex-row relative">
                <div className="text-slate-300 text-left py-4 px-7 w-full overflow-y-auto overflow-x-hidden">
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
                  <div className="text-2xl font-bold mb-2">Contact me</div>
                  
                </div>
                <div className="absolute md:bottom-[-100px] md:right-[-10vw] right-[-40vw] opacity-75 bottom-[-30vh]  z-[-1]">
                  <Image src="/projects-planet.png" alt="" width={770} height={475} sizes='100vw' className="h-[30vh] md:h-[70vh] w-auto aspect-[770/475] max-w-unset" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}