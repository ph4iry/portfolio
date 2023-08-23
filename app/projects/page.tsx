import { PlanetNavContainer } from '../../components/planets';
import { ProjectCard } from '../../components/projects';
import BPSAspenLib from '@/public/img/projects/aspen.png';
import myBLAApp from '@/public/img/projects/myBLA.png';
import OdistAI from '@/public/img/projects/odistai.png';

export default function Projects() {
  return (
    <div className="p-4 pt-10 md:pt-4 lg:pl-14 flex flex-col md:h-screen justify-start md:overflow-hidden text-white text-center md:text-left">
      <PlanetNavContainer planetKey="wind"/>
      <h1 className="font-bold text-7xl slide-up mb-8 text-center md:text-left">my projects</h1>
      <div className="block md:p-8 no-scrollbar overflow-x-visible overflow-y-visible md:overflow-y-auto md:min-h-auto md:max-h-[calc(100vh-35vh-4.5rem)] md:w-[calc(100vw-70vh)] md:border md:border-zinc-300/20 rounded">
        <div className="delayed slide-up block md:grid md:grid-cols-2 2xl:grid-cols-3 space-y-8 md:space-y-0 md:gap-8">
          <ProjectCard
            name="ARTOPIA Donation Interactive"
            description="An interactive donation display from Artist For Humanity's 2023 ARTOPIA event"
            photo="https://img2.storyblok.com/1080x0/filters:format(webp)/f/127407/1200x600/30fefd872f/artopia-header.png"
            link=""
          />
          <ProjectCard
            name="bps-aspen"
            description="A web scraper API for Boston Public School's Student Information System (Aspen SIS)"
            photo={BPSAspenLib}
            link="https://github.com/ph4iry/aspen"
          />
          <ProjectCard
            name="myBLA"
            description="A web app for Boston Latin Academy students to manage their academics, schedules, and activities"
            photo={myBLAApp}
            link="https://github.com/ph4iry/mybla"
          />
          <ProjectCard
            name="OdistAI"
            description="An open-source web-based text editor using ChatGPT and React"
            photo={OdistAI}
            link=""
          />
        </div>
      </div>
    </div>
  );
}
