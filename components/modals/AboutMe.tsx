'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, MouseEventHandler, useEffect, useRef, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { MdRocket } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { AiOutlineFileText } from "react-icons/ai";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";
import { ReactLenis, useLenis } from 'lenis/react'
import { victor_mono } from '@/app/fonts';
import LenisScroll from '../LenisScroll';
import InteractivePhoto from '../InteractivePhoto';
import MiniScroll from '../MiniScroll';

type AboutMeProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function AboutMe({ open, setOpen }: AboutMeProps) {
  const skills = [
    'React', 'NextJS', 'Typescript', 'Javascript', 'Java', 'Python', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'Sass/SCSS', 'Github', 'Figma', 'NodeJS', 'React Three Fiber', 'ThreeJS', 'Spline'
  ];
  const skillsThatBuiltThisSite = ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Github', 'Figma', 'React Three Fiber', 'ThreeJS', 'Spline', 'NodeJS'];

  const workExperience = [
    {
      company: "Headstarter AI",
      roles: ["Software Engineering Fellow"],
      dates: ["July 2024 - Present"],
      description: ["I am currently a Software Engineering Fellow at Headstarter AI, actively learning and building projects to enhance my skills."]
    },
    {
      company: "Hack Club",
      roles: ["Summer Intern, Days of Service", "Community Team"],
      dates: ["June 2024 - Present", "May 2024 - Present"],
      description: ["I moderate the Hack Club Slack, a community of over 30,000 of high school hackers building projects together.", "I build projects to support Hack Club's Days of Service initiative to encourage more young girls to pursue technology fields."],
    },
    {
      company: "Artists for Humanity",
      roles: ["Teen Interviewer", "Web Developer"],
      dates: ["Oct 2022 - June 2024", "Oct 2022 - June 2024"],
      description: ["I interviewed teens to join the Artists for Humanity's school year and summer job programs.", "As a web developer, I designed interactive displays and games, including the donation display showcased at the ARTOPIA fundraiser and the mobile implementation of the 2022 Annual Report."]
    },
  ];

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
          className="contents"
        >
          <div>
            <Transition.Child
              as={'div'}
              enter="fixed inset-0 z-50 ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="fixed inset-0 z-50 ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-black/25 to-[#091a24]/25 backdrop-blur-md z-[9998]"/>
            </Transition.Child>

            <Transition.Child
              as={'div'}
              enter="absolute ease-out transition-opacity duration-[500ms] delay-[500ms] z-[9999]"
              enterFrom="opacity-0 scale-110"
              enterTo="opacity-100 scale-100"
              leave="ease-in transition-opacity duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-110"
              className="contents"
            >
              <div className="modal-content w-[calc(100vw_-_3rem)] min-h-screen max-h-[500vh] h-max absolute top-0 z-[9999]">
                <MiniScroll setOpen={setOpen} />
                <div className="w-screen md:p-0 transform transition-all">
                  <div className="h-full text-slate-300 py-10">
                    <div className="min-h-screen max-h-[500vh] h-fit">
                      <div className="lg:mt-12 mx-[5vw] w-[90vw] md:w-[80vw] md:mx-[10vw] lg:mx-[20vw] lg:w-[60vw] py-20 md:py-0 overflow-visible absolute top-0">
                        <h1 className="sr-only">about me</h1>
                        <h2 className={`text-sm italic text-slate-400 font-normal mb-4 border-b border-dashed border-slate-400 pb-2 ${victor_mono.className}`}>welcome</h2>
                        <div className="space-y-4 mb-8">
                          <p className="text-xl">
                            Hello traveler!
                          </p>
                          <p>
                            I&apos;m Phaedra, a <span className="bg-indigo-950">17 year old web developer from Boston, Massachusetts</span>. I love learning more ways to build immersive and pretty sites, but have recently found a new interest in <span className="bg-indigo-950">computational linguistics</span>.
                          </p>
                          <p>
                            At the moment, I build projects with Hack Club—a community of over 30,000 teen hackers from around the world building projects with technology. Learn more about me and get in contact so we can build something together!
                          </p>
                        </div>
                        <div className="w-full overflow-x-scroll !overflow-y-visible md:overflow-x-visible flex md:grid md:grid-cols-3 gap-8">
                          <InteractivePhoto photo="/about/nature.jpeg" />
                          <InteractivePhoto photo="/about/stargazing.jpeg" />
                          <InteractivePhoto photo="/about/boston.jpeg" />
                        </div>
                        <div className="my-6 italic">
                          Pictured above: Me enjoying the view of the waterfront in Burlington, Vermont, stargazing, and a picture taken on a nice evening in Boston.
                        </div>
                        <h2 className={`text-sm text-slate-400 italic font-normal mb-4 mt-20 border-b border-dashed border-slate-400 pb-2 ${victor_mono.className}`}>my skills</h2>
                        <div className="flex gap-2 flex-nowrap items-center text-sky-400/80 mb-2">
                          <div className="h-2 w-2 rounded-full bg-sky-400/80"></div>
                          <span>Powers this site</span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3">
                          {skills.map((skill: string, i: number) => (
                            <div key={i} className={classNames({
                              "rounded-full py-2 px-4 border-2 active:translate-y-1 transition text-sm": true,
                              "border-sky-400/40 hover:border-sky-400/80": skillsThatBuiltThisSite.includes(skill),
                              "border-white/40 hover:border-white/80": !skillsThatBuiltThisSite.includes(skill),
                            })}>{skill}</div>
                          ))}
                        </div>
                        <h2 className={`text-sm text-slate-400 italic font-normal mb-4 mt-20 border-b border-dashed border-slate-400 pb-2 ${victor_mono.className}`}>work experience</h2>
                        <div className={`grid grid-cols-1 md:grid-cols-2 mb-6`}>
                          <div className={`text-base text-slate-400 mb-2 md:mb-0`}>
                            Find details about my work on:
                          </div>
                          <div className={`flex flex-col justify-center gap-3 text-sm uppercase ${victor_mono.className}`}>
                            <a href="/" className="flex items-center gap-2 text-slate-400 transition hover:text-slate-200">
                              <FaLinkedinIn />
                              <span >Linkedin</span>
                            </a>
                            <a href="/" className="flex items-center gap-2 text-slate-400 transition hover:text-slate-200">
                              <SiReaddotcv />
                              <span >Read.cv</span>
                            </a>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-visible divide-y divide-dashed divide-slate-600">
                          {workExperience.map((job, i) => (
                            <div key={i} className="grid grid-cols-subgrid md:col-span-2 py-4">
                              <span className="text-xl mb-2">{job.company}</span>
                              <div className="flex flex-col gap-6">
                                {new Array(job.roles.length).fill(0).map((_, i) => (
                                  <div key={i}>
                                    <div className={`text-xs my-1 text-slate-400 uppercase ${victor_mono.className}`}>{job.roles[i]}</div>
                                    <div className="mb-2 flex gap-2 flex-nowrap items-center">{job.dates[i].split(' - ')[0]} <HiArrowLongRight /> {job.dates[i].split(' - ')[1]}</div>
                                    <div className="text-sm text-slate-300">
                                      <p>{job.description[i]}</p>
                                    </div>
                                  </div>
                                ))}
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