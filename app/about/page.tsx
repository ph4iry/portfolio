import { ReactNode } from 'react';
import { PlanetNavContainer } from '../planets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faFigma, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className="p-4 pl-10">
      <div className="h-screen w-[calc(100vw-70vh)] flex flex-col justify-center">
        <h1 className="text-7xl font-bold text-white">hello, traveler!</h1>
        <p className="text-white">
          My name is Phaedra Sanon, a high school junior who absolutely loves web development. Creating all sorts of cool projects brings me so much joy, and I&apos;m always on the lookout for new opportunities to learn and grow my skills. Right now, I work as a web developer at Artists for Humanity, where I focus on building practical and user-friendly stuff.
          <br />
          <br />
          But that&apos;s not all—I also help build games and interactive displays. For example, I programmed the interactive donation display showcased at Artists For Humanity&apos;s key annual fundraiser, ARTOPIA! Lately, I&apos;ve been diving into different technologies, exploring and experimenting to take my skills to the next level. Here&apos;s a couple of the ones that I use:
        </p>
        <div className="p-4 grid gap-4 grid-cols-3 h-fit bg-[#16181d]/40 rounded my-5">
          <SkillCard skill="React" icon={<FontAwesomeIcon icon={faReact}/>}/>
          <SkillCard skill="NodeJS" icon={<FontAwesomeIcon icon={faNodeJs}/>}/>
          <SkillCard skill="Figma" icon={<FontAwesomeIcon icon={faFigma}/>}/>
          <SkillCard skill="Javascript" icon={<FontAwesomeIcon icon={faJs}/>}/>
          <SkillCard skill="Python" icon={<FontAwesomeIcon icon={faPython}/>}/>
          <SkillCard skill="Github" icon={<FontAwesomeIcon icon={faGithub}/>}/>
          <SkillCard skill="HTML" icon={<FontAwesomeIcon icon={faHtml5}/>}/>
          <SkillCard skill="CSS" icon={<FontAwesomeIcon icon={faCss3}/>}/>
          <SkillCard skill="Sass" icon={<FontAwesomeIcon icon={faSass}/>}/>
          <SkillCard skill="Bootstrap" icon={<FontAwesomeIcon icon={faBootstrap}/>}/>
          {/* <SkillCard skill="Javascript" icon={<FontAwesomeIcon icon={faJs}/>}/>
          <SkillCard skill="Javascript" icon={<FontAwesomeIcon icon={faJs}/>}/> */}
        </div>
      </div>
      {/* planet collection */}
      <PlanetNavContainer planetKey="sand"/>
    </div>
  );
}

function SkillCard({
  skill,
  icon,
}: {
  skill: string,
  icon: ReactNode,
}) {
  return (
    <div className="py-1.5 px-3 font-semibold text-center rounded w-full h-10 bg-slate-100 transition-all duration-300 hover:drop-shadow hover:-translate-y-3">
      {skill} {icon}
    </div>
  );
}
