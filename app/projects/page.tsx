import { PlanetNavContainer } from '../../components/planets';
import { ProjectCard } from '../../components/projects';

export default function Project() {
  return (
    <div className="p-4 md:pl-10 flex flex-col justify-content-center text-white text-center md:text-left">
      <PlanetNavContainer planetKey="wind"/>
      <h1 className="font-bold text-7xl mb-3">my projects</h1>
      <div className="grid grid-cols-2 w-[calc(100vw-70vh)]">
        <ProjectCard />
      </div>
    </div>
  );
}
