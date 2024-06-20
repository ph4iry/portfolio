/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image'
// Data
type carouselData = {
  name: string, link: string, repo: string, description: string, skills: string[], image: string, role?: string, awards?: string[]
}

const ProjectCarousel = ({ data }:{ data: carouselData[] }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null!);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl" placeholder={null}>
      {data.map((project, i) => (
        <div key={i} className="relative h-full w-full">
          <Image
            width="100"
            height="100"
            src={project.image}
            alt={project.description}
          />
          <div className="absolute inset-0 flex flex-col p-4 justify-end">
            {project.description}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
