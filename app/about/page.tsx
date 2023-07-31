import { SkillCard } from '../../components/skills';
import { BlastOffTransitionButton, PlanetNavContainer } from '../../components/planets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faFigma, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import '@/styles/techicons.css';

export default function About() {
  return (
    <div className="p-4 pt-10 lg:pl-14 flex flex-col h-screen justify-center md:overflow-hidden overflow-y-scroll">
      <span className="overflow-y-scroll md:overflow-y-hidden">
        <PlanetNavContainer planetKey="sand"/>
        <div className="w-full md:w-[calc(100vw-70vh)] block text-center md:text-left">
          <h1 className="text-7xl font-bold text-white mb-3">hello, traveler!</h1>
          <p className="text-white text-lg">
            I&apos;m Phaedra Sanon, a high school junior with a profound passion for web development. At the moment, I work at Artists for Humanity as a web developer, focusing on crafting practical and user-friendly projects. My creativity extends to designing interactive displays and games, including the donation display showcased at the ARTOPIA fundraiser. Growing in the evolving world of web development is my goal, and so I employ various technologies to enhance my skills, such as:
          </p>

          <div className="pb-2 flex flex-wrap justify-center md:justify-start h-fit space-y-2 space-x-2 bg-[#16181d]/40 rounded my-5 items-center">
            <span className="invisible"></span>
            <SkillCard skill="React" icon={<FontAwesomeIcon icon={faReact}/>} link="https://react.dev/"/>
            <SkillCard skill="NodeJS" icon={<FontAwesomeIcon icon={faNodeJs}/>} link="https://nodejs.org/en"/>
            <SkillCard skill="Figma" icon={<FontAwesomeIcon icon={faFigma}/>} link="https://www.figma.com/"/>
            <SkillCard skill="Javascript" icon={<FontAwesomeIcon icon={faJs}/>} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
            <SkillCard skill="Python" icon={<FontAwesomeIcon icon={faPython}/>} link="https://www.python.org/"/>
            <SkillCard skill="Github" icon={<FontAwesomeIcon icon={faGithub}/>} link="https://github.com/"/>
            <SkillCard skill="HTML" icon={<FontAwesomeIcon icon={faHtml5}/>} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
            <SkillCard skill="CSS" icon={<FontAwesomeIcon icon={faCss3}/>} link="https://developer.mozilla.org/en-US/docs/Web/HTML"/>
            <SkillCard skill="Sass" icon={<FontAwesomeIcon icon={faSass}/>} link="https://sass-lang.com/"/>
            <SkillCard skill="Bootstrap" icon={<FontAwesomeIcon icon={faBootstrap}/>} link="https://getbootstrap.com/"/>
            <SkillCard skill="Typescript" icon={<i className="tech-typescript"></i>} link="https://www.typescriptlang.org/"/>
            <SkillCard skill="Next.js" icon={<i className="tech-nextjs"></i>} link="https://nextjs.org/"/>
          </div>

          <span className="flex justify-center md:justify-start w-full">
            <BlastOffTransitionButton nextLocation="/projects" customText="NEXT DESTINATION"/>
          </span>
        </div>
      </span>
    </div>
  );
}
