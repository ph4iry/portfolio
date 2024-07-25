import { useRef, MouseEventHandler, useEffect } from "react";

export default function InteractivePhoto({ photo, sizing }:{ photo: string, sizing?: string }) {
  let bounds;
  const inputRef = useRef<HTMLDivElement>(null!);
  const glowRef = useRef<HTMLDivElement>(null!);
  const rotateToMouse: MouseEventHandler<HTMLDivElement> = (e: any) => {
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
  useEffect(() => {});
  return (
    <div className="rounded-lg" style={{
      perspective: '1500px',
    }}>
      <div
        ref={inputRef}
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
        className={`font-bold p-4 text-right text-[#181a1a] ${sizing || 'h-[40vh] md:w-full md:h-auto aspect-[3/4]'} shadow-[0_1px_5px_#00000099] bg-cover relative transition duration-[300ms] ease-out transform-rotate-0 hover:shadow-[0_5px_20px_5px_#00000044] rounded-lg`}
        style={{ backgroundImage: `url(${photo})` }}
      >
      </div>
    </div>
  );
}