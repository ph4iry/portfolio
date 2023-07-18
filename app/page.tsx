import { PlanetNavContainer } from './planets';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="p-4 pl-20 h-screen flex flex-col justify-center">
      <div>
        <p className="text-5xl font-bold text-white">hi,</p>
        <p className="text-7xl font-bold text-white">im phaedra.</p>
        <p className="text-lg font-semibold text-white">welcome to my treasure trove of projects and progress!</p>

        <Link href="/about">
          <button className="text-xl px-3 py-1 rounded-full font-semibold bg-blue-400 text-white my-2"><p>blast off! <FontAwesomeIcon icon={faRocket}/></p></button>
        </Link>
      </div>
      {/* planet collection */}
      <PlanetNavContainer planetKey="flow"/>
    </div>
  );
}
