import { faGithub, faLinkedinIn, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { ContactIcon, PlanetNavContainer } from '../components/planets';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Fira_Code } from 'next/font/google';

const monospaceFont = Fira_Code({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className="p-4 lg:pl-10 xl:pl-14 2xl:pl-20 md:h-screen flex flex-col justify-start md:justify-center md:text-left text-center">
      <PlanetNavContainer planetKey="flow"/>
      <div className="space-y-3 flex flex-col items-center md:items-start slide-up">
        <span>
          <p className={`text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-zinc-400 ${monospaceFont.className}`}>HI, I&apos;M</p>
          <p className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-shadows duration-300">Phaedra Sanon</p>
          <p className="text-md xl:text-xl 2xl:text-2xl text-zinc-400 font-mono font-[300]">Welcome to my treasure trove of projects and progress!</p>
        </span>

        <div className="flex md:hidden space-x-4 items-center justify-start">
        <ContactIcon
              platform="Spotify"
              icon={faSpotify}
              link="https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=e54aee13739c4016"
              hoverColor=""
            />
            <ContactIcon
              platform="Linkedin"
              icon={faLinkedinIn}
              link="https://www.linkedin.com/in/phaedra-sanon-323062274/"
              hoverColor=""
            />
            <ContactIcon
              platform="Github"
              icon={faGithub}
              link="https://github.com/ph4iry"
              hoverColor=""
            />
            <ContactIcon
              platform="Email"
              icon={faEnvelope}
              link="mailto:phaedrasanon@gmail.com"
              hoverColor=""
            />
        </div>
      </div>
    </div>
  );
}

/*
// Current URL: https://my-website.com/page_a
const nextURL = 'https://my-website.com/page_b';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);
*/
