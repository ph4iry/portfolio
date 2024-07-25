import { useState, useEffect } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { MdRocket } from "react-icons/md";


export default function MiniScroll({ setOpen }:{ setOpen: (b: boolean) => void }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setScrollDirection('down');
      } else if (currentScroll < lastScrollTop) {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScroll);
      setScrollTop(document.documentElement.scrollTop / document.documentElement.scrollHeight);
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollTop]);
  
  return (
    <div className="md:ml-[10vw] lg:ml-[5vw] md:px-0 mt-12 lg:mt-0 lg:w-[20%] lg:h-screen lg:fixed lg:inset-0 lg:py-20 flex lg:flex-col lg:justify-between static px-6 z-20">
    <button className="flex justify-start gap-2 text-lg items-center transition-all hover:text-white mb-4 text-slate-400 hover:gap-4 whitespace-nowrap flex-nowrap"
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          return;
        }
      }}
      tabIndex={0}
      onClick={() => setOpen(false)}
    >
      <HiArrowLongLeft className="h-8" /> Back to map
    </button>

    <div className="text-white hidden lg:block">
      <div className="h-20 w-0.5 bg-white/25 rounded-full relative">
        <div className="w-0.5 absolute bg-white" style={{
          height: `${window.innerHeight / document.body.scrollHeight * 100}%`,
          top: `${scrollTop * 100}%`
        }}>
          <MdRocket className={`absolute transition left-3 ${scrollDirection === 'down' && 'rotate-180'} top-1/4`} />
        </div>
      </div>
    </div>
  </div>
  )
}