'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { ArrowLeftCircleIcon, ArchiveBoxIcon, LinkIcon, TrophyIcon } from "@heroicons/react/24/outline";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";
import ProjectCarousel from '../ProjectCarousel';

type ProjectsProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function Projects({ open, setOpen }: ProjectsProps) {
  const projects: {
    name: string, link: string, repo: string, description: string, skills: string[], image: string, role?: string, awards?: string[], carousel: {
      image: string,
      description: string,
    },
  }[] = [
    {
      name: 'eDermis',
      description: 'A prototype of a machine learning app designed to target algorithmic bias in teledermatology',
      repo: 'ph4iry/edermis',
      link: 'edermis-ai.app',
      skills: ['Teachable Machine', 'Machine Learning', 'React', 'Javascript', 'TailwindCSS', 'Figma'],
      image: '/projects/placeholder.svg',
      awards: ['2024 Boston Public Schools STEAMFest, First Place'],
      carousel: {
        image: '/projects/placeholder.svg',
        description: 'eDermis won first place at the Boston Public Schools STEAMFest.'
      }
    },
    {
      name: 'Days of Service Journey',
      description: 'A collaborative gamified roadmap site for girls interested in breaking into tech through Hack Club\'s Days of Service Initiative',
      role: 'Lead Developer',
      link: 'dos-journey.hackclub.com',
      repo: 'hackclub/dos-journey',
      image: '/projects/placeholder.svg',
      skills: ['NextJS', 'React', 'MDX', 'Typescript', 'Figma'],
      carousel: {
        image: '/projects.placeholder.svg',
        description: 'this is a description of dos journey that will go here probably after my internship'
      }
    },
    {
      name: 'myBLA',
      description: 'An interactive student portal for the 1,700+ students attending Boston Latin Academy. Featured in the 2024-25 Course Selection showcases.',
      role: 'Lead Developer',
      link: 'mybla.vercel.app',
      repo: 'ph4iry/mybla',
      image: '/projects/placeholder.svg',
      skills: ['NextJS', 'React', 'Typescript', 'MDX', 'Figma', 'TailwindCSS'],
      carousel: {
        image: '/projects.placeholder.svg',
        description: 'this is a picture of it used during the assembly or something like that'
      }
    },
  ];

  const modal = useRef<HTMLDivElement>(null!);

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
              <Dialog.Panel className="w-screen h-[90vh] transform overflow-hidden bg-[#260808]/60 backdrop-blur-md shadow-xl transition-all flex flex-col md:flex-row relative">
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
                  <div className="text-2xl font-bold mb-2">My Projects</div>
                  <div className="flex flex-col-reverse md:flex-row gap-8 md:items-start overflow-y-auto">
                    <div className="md:w-[50%] flex flex-col gap-4 overflow-y-auto" style={{
                      maxHeight: 'calc(90vh - 9rem)'
                    }}>
                      {projects.map((project, i) => (
                        <div key={i} className="flex md:flex-row flex-col border-2 border-white/80 rounded-md transition">
                          <div className="md:w-24 lg:w-48 md:self-stretch md:min-h-full md:max-h-full min-h-24 w-full shrink-0 md:rounded-l-md md:rounded-tr-none rounded-t-md overflow-hidden"
                          >
                            <div className="transition min-h-[inherit] min-w-full hover:scale-125" style={{
                              // objectFit: 'cover',
                              backgroundImage: `url(${project.image})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                            }} />
                          </div>
                          <div className="p-4">
                            <div className="text-xl font-bold">{project.name}</div>
                            <div className="text-sm italic">{project.description}</div>
                            <div className="flex gap-4 mt-3 text-base flex-wrap">
                              <a href={`https://${project.link}`} className="block flex gap-2 p-2 rounded bg-white/5 flex-nowrap w-full whitespace-nowrap">
                                <LinkIcon className="h-6" />
                                {project.link}
                              </a>
                              <a href={`https://github.com/${project.repo}`} className="flex gap-2 p-2 rounded bg-white/5 flex-nowrap w-full whitespace-nowrap">
                                <ArchiveBoxIcon className="h-6" />
                                {project.repo}
                              </a>
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
                    <div className="md:w-[50%] grow-0">
                      <ProjectCarousel data={projects} />
                    </div>
                  </div>
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