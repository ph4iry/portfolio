import { motion, useDomEvent } from 'framer-motion';
import { useRef, MouseEventHandler, useEffect, useState } from 'react';

export function InteractivePhoto({ photo, sizing }: { photo: string, sizing?: string }) {
  let bounds: DOMRect;
  const inputRef = useRef<HTMLDivElement>(null!);

  const rotateToMouse: MouseEventHandler<HTMLDivElement> = (e: any) => {
    if (innerWidth < 768) return;
    bounds = inputRef.current?.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
  };
  const removeListener: MouseEventHandler<HTMLDivElement> = (e) => {
    inputRef.current.style.transform = '';
    // inputRef.current.style.background = '';
  };

  useEffect(() => { });
  return (
    <>
      <div
        style={{ perspective: '1500px' }}
        className="rounded-lg"
      >
        <motion.div
          ref={inputRef}
          onMouseLeave={removeListener}
          onMouseMove={rotateToMouse}
          // onClick={() => setOpen(!isOpen)}
          className={`p-4 text-right font-bold text-[#181a1a] ${sizing || 'aspect-[3/4] h-[40vh] md:h-auto md:w-full'} min-w-full rotate-0 rounded-lg bg-cover bg-center shadow-[0_1px_5px_#00000099] transition-all duration-300 ease-out md:hover:shadow-[0_5px_20px_5px_#00000044]`}
          style={{ backgroundImage: `url(${photo})` }}
        >
        </motion.div>
      </div>
    </>
  );
}


export const Image = ({ src }: { src: string }) => {
  const [isOpen, setOpen] = useState(false);
  const transition = {
    type: 'spring',
    damping: 25,
    stiffness: 120
  };

  useDomEvent(useRef(window), 'scroll', () => isOpen && setOpen(false));

  return (
    <div
      className={`relative my-12 h-0 w-full cursor-zoom-in pt-[66.66%] ${isOpen ? 'cursor-zoom-out' : ''}`}
    >
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className={`fixed inset-0 bg-black/90 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
      />
      <motion.img
        src={src}
        alt=""
        onClick={() => setOpen(!isOpen)}
        transition={transition}
        className={`absolute inset-0 size-full ${isOpen ? 'fixed m-auto size-auto max-w-full' : ''}`}
      />
    </div>

  );
};


export function ResumeExperience({ company, role, dates, description }: { company: string, role: string, dates: string, description: string }) {
  return (
    <div className="w-full rounded-md border-2 border-zinc-200/30 p-3 px-5 backdrop-blur-md md:backdrop-blur-none">
      <div className="mb-2 flex items-center">
        <div className="grow">
          <div className="text-xl">{company}</div>
          <div className="text-base font-semibold">{role}</div>
        </div>
        <div className="shrink">{dates}</div>
      </div>

      <div className="text-sm italic">
        {description}
      </div>
    </div>
  )
}