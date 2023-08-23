import { PlanetNavContainer } from '../../components/planets';
import { Fira_Code } from 'next/font/google';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';

const monospaceFont = Fira_Code({ subsets: ['latin'] });

// <ContactIcon
// platform="Spotify"
// icon={faSpotify}
// link="https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=e54aee13739c4016"
// hoverColor="group-hover:text-[#1db954]"
// />
// <ContactIcon
// platform="Linkedin"
// icon={faLinkedinIn}
// link="https://www.linkedin.com/in/phaedra-sanon/"
// hoverColor="group-hover:text-[#0072b1]"
// />
// <ContactIcon
// platform="Github"
// icon={faGithub}
// link="https://github.com/ph4iry"
// hoverColor="group-hover:text-[#000000]"
// />
// <ContactIcon
// platform="Email"
// icon={faEnvelope}
// link="mailto:phaedrasanon@gmail.com"
// hoverColor="group-hover:text-[#BB001B]"
// />

const socials: [string, IconDefinition, string][] = [
  ['Github', faGithub, 'https://github.com/ph4iry'],
  ['Linkedin', faLinkedin, 'https://www.linkedin.com/in/phaedra-sanon/'],
  ['Spotify', faSpotify, 'https://open.spotify.com/user/p44gq4wrzz0qlhy8prpq99n3a?si=e54aee13739c4016'],
];

export default function Contact() {
  return (
    <div className="p-4 md:pl-10 h-full flex flex-col justify-content-center slide-up text-center md:text-left">
      <PlanetNavContainer planetKey="grass"/>
      <h1 className="font-bold text-7xl slide-up mb-8 text-white">contact me</h1>
      <div className="w-full md:w-[calc(100vw-70vh)]">
        <p className="text-white text-md md:text-lg delayed-slide-up">
          You can contact me on these platforms:
        </p>
        <div className="my-3">
          <h2 className={`block text-zinc-400 font-semibold uppercase ${monospaceFont.className}`}>email</h2>
          <div className="flex space-x-3 items-center text-white text-lg">
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:phaedrasanon@gmail.com">phaedrasanon@gmail.com</a>
          </div>
        </div>
        <div className="my-3">
          <h2 className={`block text-zinc-400 font-semibold uppercase ${monospaceFont.className}`}>socials</h2>
          {
            socials.map(plat => (
              <div className="flex space-x-3 items-center text-white text-lg" key={plat[0]}>
                <FontAwesomeIcon icon={plat[1]} /> <a href={plat[2]}>{plat[0]}</a>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
}
