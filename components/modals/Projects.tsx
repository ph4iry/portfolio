'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import AboutMeScene from "../scenes/AboutMeScene";
import { ArrowLeftCircleIcon, InformationCircleIcon, LinkIcon, TrophyIcon } from "@heroicons/react/24/outline";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";

type AboutMeProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function AboutMe({ open, setOpen }: AboutMeProps) {
  const projects: {
    name: string, link: string, repo: string, description: string, skills: string[], image: string, role?: string, awards?: string[]
  }[] = [
    {
      name: 'eDermis',
      description: 'A prototype of a machine learning app designed to target algorithmic bias in teledermatology',
      repo: 'ph4iry/edermis',
      link: 'edermis-ai.app',
      skills: ['Teachable Machine', 'Machine Learning', 'React', 'Javascript', 'TailwindCSS', 'Figma'],
      image: 'https://github.com',
      awards: ['2024 Boston Public Schools STEAMFest, First Place'],
    },
    {
      name: 'Days of Service Journey',
      description: 'A collaborative gamified roadmap site for girls interested in breaking into tech through Hack Club\'s Days of Service Initiative',
      role: 'Lead Developer',
      link: 'journey.daysofservice.hackclub.com/',
      repo: 'hackclub/dos-journey',
      image: 'https://github.com',
      skills: ['NextJS', 'React', 'MDX', 'Typescript', 'Figma'],
    },
    {
      name: 'myBLA',
      description: 'An interactive student portal for the 1,700+ students attending Boston Latin Academy. Featured in the 2024-25 Course Selection showcases.',
      role: 'Lead Developer',
      link: 'mybla.vercel.app',
      repo: 'ph4iry/mybla',
      image: 'https://github.com',
      skills: ['NextJS', 'React', 'Typescript', 'MDX', 'Figma', 'TailwindCSS']
    },
  ]

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
              <Dialog.Panel className="w-screen h-[90vh] transform overflow-hidden bg-[#110326]/80 backdrop-blur-md shadow-xl transition-all flex flex-col md:flex-row relative">
                <div className="text-slate-300 text-left py-4 px-7 overflow-y-auto overflow-x-hidden">
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
                  <div className="flex gap-8 overflow-y-auto">
                    <div className="w-full flex flex-col gap-4">
                      {projects.map((project, i) => (
                        <div key={i} className="flex border-2 border-white/80 rounded-md transition">
                          <div className="w-24 shrink-0 bg-zinc-400 rounded-l-md h-full"></div>
                          <div className="p-4">
                            <div className="text-xl font-bold">{project.name}</div>
                            <div className="text-sm italic">{project.description}</div>
                            <div className="flex gap-4 mt-3">
                              <div className="flex gap-2 p-2 rounded bg-white/5">
                                <LinkIcon className="h-6" />
                                {project.link}
                              </div>
                              <div className="flex gap-2 p-2 rounded bg-white/5">
                                <InformationCircleIcon className="h-6" />
                                {project.repo}
                              </div>
                            </div>
                            {
                              project.awards && (
                                <div className="mt-3 flex gap-2 p-2 rounded bg-white/5">
                                  <TrophyIcon className="h-6" />
                                  <span className='italic'>{project.awards.join(', ')}</span>
                                </div>
                              )
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full">
                      i can put a carousel of the results of some of these projects here?
                    </div>
                  </div>
                </div>
                <div className="absolute md:bottom-[175px] md:right-[-20vw] right-[-20vh] opacity-75 bottom-1/2 z-[-1] max-h-[30vh]">
                  <Image src="/about-planet.png" alt="" width={1364} height={877} sizes='100vw' className="h-full w-auto" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

function ShootingStar({ top, right }:{ top: number, right: number }) {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const star = starRef.current;
    if (star) {
      const speed = Math.ceil(Math.random() * 3)
      star.classList.add(`animate-${speed}`);
      setTimeout(() => {
        star.classList.remove(`animate-${speed}`);
      }, 1500 * speed);
    }
  }, []);

  return (
    <div
      ref={starRef}
      className="absolute w-[10px] h-[10px] bg-white rounded-full shooting-star opacity-0"
      style={{ top, right }}
    />
  );
}