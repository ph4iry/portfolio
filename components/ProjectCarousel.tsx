/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import { Carousel } from 'flowbite-react';
// Data
type carouselData = {
  name: string, link: string, repo: string, description: string, skills: string[], image: string, role?: string, awards?: string[], carousel: {
    image: string,
    description: string,
  },
}

const ProjectCarousel = ({ data }:{ data: carouselData[] }) => {
  return (
    <Carousel className="rounded-xl aspect-square w-full overflow-hidden"  style={{
      maxHeight: 'calc(90vh - 5rem)',
    }} slide indicators={false}>
      {data.map((project, i) => (
        <div key={i} className="w-full relative overflow-hidden rounded-xl">
          <Image
            width="100"
            height="100"
            src={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
            sizes="100vw"
            className="aspect-square w-full"
            alt={project.name}
          />
          <div className="absolute inset-0 aspect-square w-full flex flex-col p-4 justify-end">
            {project.carousel.description}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
