'use client';
import '@/styles/stars.css';
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";
import AboutMeScene from "../scenes/AboutMeScene";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import ResumeExperience from "../ResumeExperience";
import Image from 'next/image';
import classNames from "classnames";

type AboutMeProps = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export default function AboutMe({ open, setOpen }: AboutMeProps) {
  const button = useRef(null!);
  const skills = [
    'React', 'NextJS', 'Typescript', 'Javascript', 'Java', 'Python', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'Sass/SCSS', 'Github', 'Figma', 'NodeJS', 'React Three Fiber', 'ThreeJS', 'Spline'
  ];
  const skillsThatBuiltThisSite = ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Github', 'Figma', 'React Three Fiber', 'ThreeJS', 'Spline'];

  const [stars, setStars] = useState<{ top: number; right: number }[]>([]);

  const handleClick = () => {
    const top = Math.floor(Math.random() * (window.innerHeight / 2));
    const right = 0;
    setStars([...stars, { top, right }]);
  };

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
                  <div className="flex gap-8">
                    <div className="w-full md:max-w-[50%] overflow-y-auto">
                      <Transition.Child
                        enter="ease-out duration-700 delay-[2000ms]"
                        enterFrom="opacity-0 translate-y-20"
                        enterTo="opacity-100 translate-y-0"
                      >
                        <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
                        <p className="mb-4">
                        I&apos;m Phaedra Sanon, a high school senior with a profound passion for web development.
                        </p>
                        <div className="flex gap-4 items-center my-4">
                          <span className="whitespace-nowrap text-2xl font-semibold">My Skills</span>
                          <span className="h-0.5 w-full bg-white/80"></span>
                        </div>
                        <div className="flex gap-2 flex nowrap items-center text-sky-400/80 mb-2">
                          <div className="h-2 w-2 rounded-full bg-sky-400/80"></div>
                          <span>Powers this site</span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-3">
                          {skills.map((skill: string, i: number) => (
                            <button key={i} onClick={handleClick} className={classNames({
                              "rounded-full py-2 px-4 border-2 hover:cursor-pointer active:translate-y-1 transition": true,
                              "border-sky-400/40 hover:border-sky-400/80": skillsThatBuiltThisSite.includes(skill),
                              "border-white/40 hover:border-white/80": !skillsThatBuiltThisSite.includes(skill),
                            })}>{skill}</button>
                          ))}
                        </div>
                        <div className="italic text-sm mt-2">Hint: Click any of the skills listed for a cute surprise!</div>
                        <div className="flex gap-4 items-center my-4">
                          <span className="whitespace-nowrap text-2xl font-semibold">Work Experience</span>
                          <span className="h-0.5 w-full bg-white/80"></span>
                        </div>
                        <div className="flex flex-col gap-4">
                          <ResumeExperience
                            company={"Hack Club"}
                            role={"Community Team & Summer Intern, Days of Service"}
                            dates={"June 2024 - Present"}
                            description={"I moderate the Hack Club Slack, a community of thousands of teen hackers. I also build projects to support Hack Club's Days of Service initiative to encourage more young girls to pursue technology fields."}                        
                          />
                          <ResumeExperience
                            company={"Artists for Humanity"}
                            role={"Web Developer & Teen Interviewer"}
                            dates={"Oct 2022 - June 2024"}
                            description={"I focus on crafting practical and user-friendly projects. My creativity extends to designing interactive displays and games, including the donation display showcased at the ARTOPIA fundraiser and the mobile implementation of our 2022 Annual Report."}                        
                          />
                        </div>
                      </Transition.Child>
                    </div>
                    <div className="md:w-full overflow-hidden">
                    {stars.map((star, index) => (
                      <>
                        <ShootingStar key={index + "A"} top={Math.floor(Math.random() * (window.innerHeight / 2))} right={0} />
                        <ShootingStar key={index + "B"} top={Math.floor(Math.random() * (window.innerHeight / 2))} right={0} />
                        <ShootingStar key={index + "C"} top={Math.floor(Math.random() * (window.innerHeight / 2))} right={0} />
                      </>
                    ))}
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