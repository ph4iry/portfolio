/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import { Carousel } from 'flowbite-react';
// Data
type carouselData = {
  name: string, link: string, repo: string, description: string, skills: string[], image: string, role?: string, awards?: string[]
}

const ProjectCarousel = ({ data }:{ data: carouselData[] }) => {
  return (
    <Carousel className="rounded-xl max-h-[40vh] w-full" slide indicators={false}>
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      {/* {data.map((project, i) => (
        <div key={i} className="relative h-full w-full">
          <Image
            width="100"
            height="100"
            src={project.image}
            alt={project.description}
          />
          <div className="absolute inset-0 h-full w-full flex flex-col p-4 justify-end">
            {project.description}
          </div>
        </div>
      ))} */}
    </Carousel>
  );
};

export default ProjectCarousel;
