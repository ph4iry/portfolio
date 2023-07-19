import { BlastOffTransitionButton, PlanetNavContainer } from './planets';
import { Fira_Code } from 'next/font/google';

const monospaceFont = Fira_Code({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className="p-4 pl-20 h-screen flex flex-col justify-center">
      <div className="space-y-3">
        <span>
          <p className={`text-4xl lg:text-6xl text-zinc-400 ${monospaceFont.className}`}>HI, IM</p>
          <p className="text-7xl lg:text-9xl font-bold text-white hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-shadows duration-300">Phaedra Sanon</p>
          <p className="text-md lg:text-xl text-zinc-400 font-mono font-[300]">and welcome to my treasure trove of projects and progress!</p>
        </span>

        <BlastOffTransitionButton />
      </div>
      {/* planet collection */}
      <PlanetNavContainer planetKey="flow"/>
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
