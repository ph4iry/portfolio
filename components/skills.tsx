'use client';
// import { faBootstrap, faCss3, faFigma, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
// import { faCode } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Collapse } from '@material-tailwind/react';
import { ReactNode } from 'react';
// import '@/styles/techicons.css';
// import TechIcon from '@/components/icon';

export function SkillCard({
  skill,
  icon,
  link,
}: {
  skill: string,
  icon: ReactNode,
  link: string,
}) {
  return (
    <span className="px-3 py-1.5 bg-amber-50 text-zinc-700 w-fit rounded-full whitespace-nowrap h-fit font-semibold transition-all hover:drop-shadow-[0_0_10px_rgba(254,243,199,0.25)]"><span className="mr-1">{icon}</span> {skill}</span>
  );
}
