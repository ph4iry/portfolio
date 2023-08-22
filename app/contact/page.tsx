import { PlanetNavContainer } from '../../components/planets';

export default function Contact() {
  return (
    <div className="p-4 pl-10 h-full flex flex-col justify-content-center slide-up">
      <div>
        <p className="text-5xl font-bold text-white">hi,</p>
        <p className="text-7xl font-bold text-white">im phaedra.</p>
      </div>
      {/* planet collection */}
      <PlanetNavContainer planetKey="grass"/>
    </div>
  );
}
