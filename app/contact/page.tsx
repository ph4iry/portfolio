import { PlanetNavContainer } from '../../components/planets';

export default function Contact() {
  return (
    <div className="p-4 md:pl-10 h-full flex flex-col justify-content-center slide-up text-center md:text-left">
      <PlanetNavContainer planetKey="grass"/>
      <h1 className="font-bold text-7xl slide-up mb-8 text-white">contact me</h1>
    </div>
  );
}
