import { BlastOffTransitionButton, PlanetNavContainer } from './planets';

export default function Home() {
  return (
    <div className="p-4 pl-20 h-screen flex flex-col justify-center">
      <div className="space-y-2">
        <span>
          <p className="text-5xl lg:text-6xl font-bold text-white">hi,</p>
          <p className="text-7xl lg:text-9xl font-bold text-white">im phaedra.</p>
        </span>
        <p className="text-lg lg:text-2xl font-semibold text-white">welcome to my treasure trove of projects and progress!</p>

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
