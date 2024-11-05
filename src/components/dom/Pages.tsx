'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { InteractivePhoto } from './PageAddons';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { MdRocket } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiReaddotcv } from 'react-icons/si';
import { AiOutlineFileText } from 'react-icons/ai';
import { Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';
import { ReactLenis } from 'lenis/react';

function ModalClose({ setOpen }: { setOpen: (b: boolean) => void }) {
  const close = () => {
    setOpen(false);
  }
  return (
    <button
      className="mb-6 mt-14 flex items-center gap-4 rounded-md font-vm uppercase text-slate-400 transition hover:text-slate-50"
      onClick={close}
    >
      <HiArrowLongLeft className="size-6 lg:hidden" />
      <kbd className="hidden rounded border border-slate-400 px-2 py-1 text-sm lg:block">
        Esc
      </kbd>
      <span className="text-base underline underline-offset-2 lg:no-underline">return to space</span>
    </button>
  )
}

function ModalRocket({ referenceElement }: { referenceElement: string }) {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [element, setElement] = useState<HTMLDivElement>(null!);

  useEffect(() => {
    const newElement = document.getElementById(referenceElement) as HTMLDivElement;
    setElement(newElement);
  }, [referenceElement]);

  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        setScrollDirection('down');
      } else if (currentScroll < lastScrollTop) {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScroll);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [element, lastScrollTop]);

  return (
    innerWidth >= 768 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0 }} className="fixed bottom-20 left-10 z-10 text-white md:block">
      <div className="relative h-20 w-0.5 rounded-full bg-white/25">
        <div className="absolute w-0.5 bg-white" style={{
          height: `${window.innerHeight / element?.scrollHeight * 100}%`,
          top: `${window.scrollY / (element?.scrollHeight) * 100}%`
        }}>
          <MdRocket className={`absolute left-3 transition ${scrollDirection === 'down' && 'rotate-180'} top-1/4`} />
        </div>
      </div>
    </motion.div>
  )
}

export function About({ setOpen }) {
  const skills = [
    'React', 'NextJS', 'Typescript', 'Javascript', 'Java', 'Python', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'Sass/SCSS', 'Github', 'Figma', 'NodeJS', 'React Three Fiber', 'ThreeJS', 'Spline'
  ];
  const skillsThatBuiltThisSite = ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Github', 'Figma', 'React Three Fiber', 'ThreeJS', 'Spline', 'NodeJS'];

  const workExperience = [
    {
      company: 'Hack Club',
      roles: ['Summer Intern, Days of Service', 'Community Team'],
      dates: ['June 2024 - July 2024', 'May 2024 - Present'],
      description: ['I moderate the Hack Club Slack, a community of over 30,000 of high school hackers building projects together.', 'I build projects to support Hack Club\'s Days of Service initiative to encourage more young girls to pursue technology fields.'],
    },
    {
      company: 'Artists for Humanity',
      roles: ['Teen Interviewer', 'Web Developer'],
      dates: ['January 2022 - June 2024', 'October 2022 - Present'],
      description: ['I interviewed teens to join the Artists for Humanity\'s school year and summer job programs.', 'As a web developer, I designed interactive displays and games, including the donation display showcased at the ARTOPIA fundraiser and the mobile implementation of the 2022 Annual Report.']
    },
  ];
  const content = useRef<HTMLDivElement>(null!);

  return (
    <div className="absolute z-50 h-fit min-h-lvh w-screen">
      <ModalRocket referenceElement="about-dialog" />
      <motion.dialog id="about-dialog" open initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0 }} className="w-screen bg-indigo-950/50 text-white backdrop-blur-md">
        <ReactLenis root className="fixed h-full">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1, staggerChildren: 0.2 } }} ref={content} className="m-6 md:m-36">
            <ModalClose setOpen={setOpen} />
            <h1 className="sr-only">about me</h1>
            <h2 className={'mb-4 border-b border-dashed border-slate-400 pb-2 font-vm text-xl font-normal italic text-slate-200'}>Hello traveler! Welcome to my digital spaceship.</h2>
            <div className="mb-8 space-y-4">
              <p>
                I&apos;m Phaedra, a 17 year old web developer from Boston, Massachusetts. I love learning more ways to build immersive and aesthetically-pleasing sites, but have recently found a new interest in <span className="underline decoration-purple-400 decoration-wavy">computational linguistics</span>.
              </p>
              <p>
                At the moment, I build projects with <span className="underline decoration-purple-400 decoration-wavy">Hack Club</span>—a community of over 30,000 teen hackers from around the world building projects with technology. Learn more about me and get in contact so we can build something together!
              </p>
            </div>
            <h2 className="mb-4 mt-16 border-b border-dashed border-slate-400 pb-2 font-vm text-sm font-normal italic text-slate-400">my skills</h2>
            <div className="mb-2 flex flex-nowrap items-center gap-2 text-purple-300/80">
              <div className="size-2 rounded-full bg-purple-300/80"></div>
              <span>Powers this site</span>
            </div>
            <div className="flex flex-row flex-wrap gap-3">
              {skills.map((skill: string, i: number) => (
                <div key={i} className={clsx({
                  'rounded-full py-2 px-4 border-2 text-sm': true,
                  'border-purple-300/40': skillsThatBuiltThisSite.includes(skill),
                  'border-white/40': !skillsThatBuiltThisSite.includes(skill),
                })}>{skill}</div>
              ))}
            </div>
            <h2 className="mb-4 mt-16 border-b border-dashed border-slate-400 pb-2 font-vm text-sm font-normal italic text-slate-400">work experience</h2>
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
              <div className="mb-2 text-base text-slate-400 md:mb-0`}">
                Find details about my work on:
              </div>
              <div className="flex flex-col justify-center gap-3 font-vm text-sm uppercase">
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
            <div className="grid grid-cols-1 gap-4 divide-y divide-dashed divide-slate-600 overflow-visible md:grid-cols-2">
              {workExperience.map((job, i) => (
                <div key={i} className="grid grid-cols-subgrid py-4 md:col-span-2">
                  <span className="mb-2 text-xl">{job.company}</span>
                  <div className="flex flex-col gap-6">
                    {new Array(job.roles.length).fill(0).map((_, i) => (
                      <div key={i}>
                        <div className={'my-1 font-vm text-xs uppercase text-slate-400'}>{job.roles[i]}</div>
                        <div className="mb-2 flex flex-nowrap items-center gap-2">{job.dates[i].split(' - ')[0]} <HiArrowLongRight /> {job.dates[i].split(' - ')[1]}</div>
                        <div className="text-sm text-slate-300">
                          <p>{job.description[i]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </ReactLenis>
      </motion.dialog>
    </div>
  )
}

export function Projects({ setOpen }) {
  const projects: {
    name: string, link?: string, repo: string, description: string, color: string, bg: string, skills: string[], images: string[], role?: string, awards?: string[]
  }[] = [
      {
        name: 'eDermis',
        description: 'A prototype of a machine learning app designed to target algorithmic bias in teledermatology',
        repo: 'ph4iry/edermis',
        role: 'Lead Developer',
        color: 'text-rose-100',
        bg: 'bg-rose-950/50',
        skills: ['Teachable Machine', 'Machine Learning', 'React', 'Javascript', 'TailwindCSS', 'Figma'],
        images: ['/projects/edermis/main.png'],
        awards: ['2024 Boston Public Schools STEAMFest, First Place'],
      },
      {
        name: 'OdistAI',
        description: 'A prototype of a Notion-like text editor powered by GPT 3.5',
        repo: 'Artists-for-Humanity/OdistAI',
        color: 'text-indigo-100',
        bg: 'bg-indigo-950/50',
        role: 'Frontend Developer',
        skills: ['AI', 'Frontend Development', 'React', 'Javascript', 'TailwindCSS', 'Figma'],
        images: ['/projects/odistai/main.png']
      },
      {
        name: 'myBLA',
        description: 'An interactive student portal for the 1,700+ students attending Boston Latin Academy. Featured in the 2024-25 Course Selection showcases.',
        role: 'Lead Developer',
        link: 'https://mybla.app',
        repo: 'ph4iry/mybla',
        images: ['/projects/mybla/main.png', '/projects/mybla/secondary.png', '/projects/mybla/tertiary.png'],
        color: 'text-sky-300',
        bg: 'bg-sky-950/50',
        skills: ['NextJS', 'React', 'Typescript', 'MDX', 'Figma', 'TailwindCSS']
      },
      {
        name: 'bla-aspen',
        description: 'An API library to interact with the Boston Latin Academy\'s (in Boston Public Schools) version of Aspen (SIS) by Follett',
        role: 'Lead Developer',
        link: 'https://npmjs.com/package/bla-aspen',
        repo: 'ph4iry/aspen',
        images: ['/projects/aspen/main.png'],
        color: 'text-emerald-100',
        bg: 'bg-emerald-950/50',
        skills: ['Web Scraping', 'Typescript', 'NodeJS', 'Puppeteer']
      },
      // {
      //   name: 'AFH Side Quests',
      //   description: 'A printable generator for side quests at Artists for Humanity, which are redeemable tasks for teens to earn tokens and rewards',
      //   role: 'Lead Developer',
      //   link: 'https://afh-side-quests.vercel.app/',
      //   repo: 'ph4iry/afh-side-quests',
      //   images: ['/projects/afh-side-quests.png'],
      //   color: 'text-amber-100',
      //   bg: 'bg-amber-950/50',
      //   skills: ['Web Scraping', 'Typescript', 'NodeJS', 'Puppeteer']
      // },
    ];

  const [modalColor, setModalColor] = useState('bg-rose-950/50');

  return (
    <div className="absolute z-50 h-fit min-h-lvh w-screen">
      <ModalRocket referenceElement="project-dialog" />
      <motion.dialog id="project-dialog" open initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0 }} className={`w-screen transition-colors delay-300 duration-500 ${modalColor} text-white backdrop-blur-md`}>
        <ReactLenis root className="fixed h-full">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1, staggerChildren: 0.2 } }} className="m-6 md:m-36">
            <ModalClose setOpen={setOpen} />
            <h1 className={'mb-4 border-b border-dashed border-slate-400 pb-2 font-vm text-xl font-normal italic text-slate-200'}>projects</h1>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  onViewportEnter={() => setModalColor(project.bg)}
                  key={i}
                  className="grid min-h-[70lvh] w-full grid-cols-3 grid-rows-[min-content_auto] gap-8 p-6"
                >
                  <div className="col-span-3 flex grid-cols-subgrid flex-col items-baseline md:grid">
                    <div className="col-span-1">
                      <div className="size-full rounded-md">
                        <h2 className={`text-3xl ${project.color}`}>{project.name}</h2>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className={`text-xl ${project.color} text-opacity-80`}>{project.description}</div>
                    </div>
                  </div>
                  <div className="col-span-3 flex grid-cols-subgrid flex-col md:grid">
                    <div className="col-span-1">
                      <div className="flex flex-col gap-4">
                        <div className="col-span-1 md:col-span-2">
                          <div className="font-vm text-xs uppercase text-slate-400 md:text-base">github</div>
                          {/* <div className="aspect-[2/1] w-full bg-white/20">a s</div> */}
                          <a href={`https://github.com/${project.repo}`} className={`text-xs md:text-lg ${project.color} font-vm hover:text-white`}>{project.repo}</a>
                        </div>
                        <div>
                          <div className={'font-vm text-xs uppercase text-slate-400 md:text-base'}>built with:</div>
                          <div className={`text-xs md:text-lg ${project.color} font-vm`}>{project.skills.join(', ')}</div>
                        </div>
                        <div>
                          <div className={'font-vm text-xs uppercase text-slate-400 md:text-base'}>role:</div>
                          <div className={`text-xs md:text-lg ${project.color} font-vm`}>{project.role}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 mt-6 md:mt-0">
                      <div className="aspect-[4/3] w-full rounded-xl shadow-md !shadow-slate-950/40 transition md:ml-auto md:h-auto md:w-2/3 md:hover:scale-105 md:hover:shadow-xl" >
                        <InteractivePhoto sizing="aspect-[4/3]" photo={project.images[0]} />
                      </div>
                    </div>
                  </div>
                  {project.images.length > 1 && (
                    <div className="col-span-3 flex min-h-[30vh] flex-col gap-6 md:flex-row">
                      {
                        project.images.toSpliced(0, 1).map((image, i) => (
                          <Fragment key={i}>
                            <InteractivePhoto sizing="h-full aspect-[4/3] max-h-[27vh]" photo={image} />
                          </Fragment>
                        ))
                      }
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ReactLenis>
      </motion.dialog>
    </div>
  )
}

export function Contact({ setOpen }) {
  return (
    <div className="absolute z-50 h-fit min-h-lvh w-screen">
      <ModalRocket referenceElement="contact-dialog" />
      <motion.dialog id="contact-dialog" open initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0 }} className="min-h-lvh w-screen bg-emerald-950/50 text-white backdrop-blur-md">
        <ReactLenis root className="fixed h-full">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1, staggerChildren: 0.2 } }} className="m-6 md:m-36">
            <ModalClose setOpen={setOpen} />
            <h1 className={'mb-4 border-b border-dashed border-slate-400 pb-2 font-vm text-xl font-normal italic text-slate-200'}>contact me</h1>
            <div className="mb-8 space-y-4">
              <p>
                Thanks for visiting my celestial garden! 💫
                <br /><br />
                Let&apos;s chat about music 🎵, AI/ML 🤖, or space 🪐! I&apos;m always looking for like-minded people, so let&apos;s connect! Here&apos;s where you can find me:
              </p>
            </div>
            <div className="flex flex-col gap-4 divide-y divide-dashed divide-slate-600 overflow-visible">
              <div className="pt-4">
                <div className="font-vm text-sm uppercase text-slate-400">linkedin</div>
                <a href="https://www.linkedin.com/in/phaedra-sanon/" className="text-base transition hover:text-white" target="_blank" rel="noreferrer noopener" >linkedin.com/in/phaedra-sanon</a>
              </div>
              <div className="pt-4">
                <div className="font-vm text-sm uppercase text-slate-400">github</div>
                <a href="https://github.com/ph4iry/" className="text-base transition hover:text-white" target="_blank" rel="noreferrer noopener" >github.com/ph4iry</a>
              </div>
              <div className="pt-4">
                <div className="font-vm text-sm uppercase text-slate-400">email</div>
                <a href="mailto:phaedrasanon@gmail.com" className="text-base transition hover:text-white" target="_blank" rel="noreferrer noopener" >phaedrasanon@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </ReactLenis>
      </motion.dialog>
    </div>
  )
}