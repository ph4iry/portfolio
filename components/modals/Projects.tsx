'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import { HiOutlineArrowLeftCircle, HiOutlineArchiveBox, HiOutlineLink, HiOutlineTrophy } from "react-icons/hi2";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";
import ProjectCarousel from '../ProjectCarousel';
import LenisScroll from '../LenisScroll';
import { victor_mono } from '@/app/fonts';
import InteractivePhoto from '../InteractivePhoto';
import { FaMedal } from 'react-icons/fa6';
import MiniScroll from '../MiniScroll';

type ProjectsProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

const projects: {
  name: string, link?: string, repo: string, description: string, color: string, skills: string[], image: string, role?: string, awards?: string[]
}[] = [
  {
    name: 'eDermis',
    description: 'A prototype of a machine learning app designed to target algorithmic bias in teledermatology',
    repo: 'ph4iry/edermis',
    role: 'Lead Developer',
    color: 'text-rose-100',
    skills: ['Teachable Machine', 'Machine Learning', 'React', 'Javascript', 'TailwindCSS', 'Figma'],
    image: '/projects/edermis.png',
    awards: ['2024 Boston Public Schools STEAMFest, First Place'],
  },
  {
    name: 'OdistAI',
    description: 'A prototype of a Notion-like text editor powered by GPT 3.5',
    repo: 'Artists-for-Humanity/OdistAI',
    color: 'text-slate-100',
    role: 'Frontend Developer',
    skills: ['AI', 'Frontend Development', 'React', 'Javascript', 'TailwindCSS', 'Figma'],
    image: '/projects/odistai.png'
  },
  {
    name: 'myBLA',
    description: 'An interactive student portal for the 1,700+ students attending Boston Latin Academy. Featured in the 2024-25 Course Selection showcases.',
    role: 'Lead Developer',
    link: 'https://mybla.app',
    repo: 'ph4iry/mybla',
    image: '/projects/mybla.png',
    color: 'text-sky-100',
    skills: ['NextJS', 'React', 'Typescript', 'MDX', 'Figma', 'TailwindCSS']
  },
  {
    name: 'bla-aspen',
    description: 'An API library to interact with the Boston Latin Academy\'s (in Boston Public Schools) version of Aspen (SIS) by Follett',
    role: 'Lead Developer',
    link: 'https://npmjs.com/package/bla-aspen',
    repo: 'ph4iry/aspen',
    image: '/projects/bla-aspen.png',
    color: 'text-emerald-100',
    skills: ['Web Scraping', 'Typescript', 'NodeJS', 'Puppeteer']
  },
  {
    name: 'AFH Side Quests',
    description: 'A printable generator for side quests at Artists for Humanity, which are redeemable tasks for teens to earn tokens and rewards',
    role: 'Lead Developer',
    link: 'https://afh-side-quests.vercel.app/',
    repo: 'ph4iry/afh-side-quests',
    image: '/projects/afh-side-quests.png',
    color: 'text-amber-100',
    skills: ['Web Scraping', 'Typescript', 'NodeJS', 'Puppeteer']
  },
];

export default function Projects({ open, setOpen }: ProjectsProps) {
  return (
    <div className={open && "absolute top-0 z-50 min-h-screen min-w-[100vh]" || ''}>
      <>
        <Transition show={open}
          enter="transition duration-75"
          enterFrom="opacity-0 scale-125"
          enterTo="opacity-100 scale-100"
          leave="transition duration-125"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-125"
        >
          <div className="">
            <Transition.Child
              as={'div'}
              enter="fixed inset-0 z-50 ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="fixed inset-0 z-50 ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 w-screen h-screen backdrop-blur-md bg-[#330505]/25 z-[9998]"/>
            </Transition.Child>

            <Transition.Child
              as={'div'}
              enter="absolute ease-out transition-opacity duration-[500ms] delay-[500ms] z-[9999]"
              enterFrom="opacity-0 scale-110"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-110"
            >
              <div className="modal-content min-h-[450vh] p-4 z-[9999] absolute top-0 left-0">
                <MiniScroll setOpen={setOpen} />
                <div className="w-screen h-[400vh] transform shadow-xl transition-all">
                  <div className="h-full text-slate-300 text-left md:py-10 md:px-10 relative">
                    <div className="flex justify-center gap-8 h-full">
                      <div className="md:w-4/5 lg:w-3/5 pr-6 py-20 overflow-visible absolute top-0">
                        <h1 className={`text-base italic text-slate-400 font-normal mb-4 border-b border-dashed border-slate-400 pb-2 ${victor_mono.className}`}>projects</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                          {projects.map((project, i) => (
                            <div key={i} className="md:grid md:grid-cols-subgrid col-span-3 flex flex-col">
                              <div className="col-span-1 flex flex-col-reverse md:flex-col">
                                <span className={"text-xl my-6"}>{project.name}</span>
                                <InteractivePhoto photo={project.image} sizing="h-[25vh] aspect-square" />
                              </div>
                              <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                                <div className="text-xl">{project.description}</div>
                                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                                  <div className="col-span-1 md:col-span-2">
                                    <div className={`text-xs text-slate-400 uppercase ${victor_mono.className}`}>github</div>
                                    <a href={`https://github.com/${project.repo}`} className={`text-xs ${project.color} hover:text-white ${victor_mono.className}`}>{project.repo}</a>
                                  </div>
                                  <div>
                                    <div className={`text-xs text-slate-400 uppercase ${victor_mono.className}`}>built with:</div>
                                    <div className={`text-xs ${project.color} ${victor_mono.className}`}>{project.skills.join(', ')}</div>
                                  </div>
                                  <div>
                                    <div className={`text-xs text-slate-400 uppercase ${victor_mono.className}`}>role:</div>
                                    <div className={`text-xs ${project.color} ${victor_mono.className}`}>{project.role}</div>
                                  </div>
                                </div>
                                {project.awards && (
                                  <div>
                                    {project.awards.map((award, i) => (
                                      <div key={i} className="text-white flex gap-2 flex-nowrap items-center">
                                        <FaMedal /> {award}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </>
    </div>
  )
}