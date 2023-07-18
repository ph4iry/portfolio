import { PlanetNavContainer } from '../planets';

export default function Project() {
  return (
    <div className="p-4 pl-10 flex flex-col justify-content-center">
      <div>
        <p className="text-5xl font-bold text-white">hi,</p>
        <p className="text-7xl font-bold text-white">im phaedra.</p>
      </div>
      {/* planet collection */}
      <PlanetNavContainer planetKey="wind"/>
    </div>
  );
}
