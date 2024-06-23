'use client';
import { useState, useEffect } from 'react';

export default function LoadingAnimation() {
  const [stars, setStars] = useState<0 | 1 | 2 | 3>(0);
  const [ascending, setAscending] = useState(true);
  const cycle = [
    [false, false, false],
    [true, false, false],
    [true, true, false],
    [true, true, true],
  ];
  const [currentCycle, setCurrentCycle] = useState<boolean[]>(cycle[stars])

  // useEffect(() => {
  //   let i = setInterval(() => {
  //     console.log(...currentCycle);
  //     if (stars === 3 && ascending) {
  //       setAscending(false);
  //     } else if (stars === 0 && !ascending) {
  //       setAscending(true);
  //     }
  //     setStars((stars + (ascending ? 1 : -1)) as (0 | 1 | 2 | 3));
  //     setCurrentCycle(cycle[stars]);
  //   }, 1000);

  //   return clearInterval(i);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  return (
    <div className="flex gap-3">
      <Star on={currentCycle[0]} />
      <Star on={currentCycle[1]} />
      <Star on={currentCycle[2]} />
    </div>
  )
}

function Star({ on }:{ on: boolean }) {
  return (
    <span className={on ? 'greyscale-0' : 'greyscale'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
        <path fill="#fdd888" d="M28.865 7.134c7.361 7.359 9.35 17.304 4.443 22.209c-4.907 4.907-14.85 2.918-22.21-4.441c-.25-.25-.478-.51-.716-.766l4.417-4.417c5.724 5.724 13.016 7.714 16.286 4.442c3.271-3.271 1.282-10.563-4.441-16.287l.022.021l-.021-.022C20.104 1.331 11.154-.326 6.657 4.171C4.482 6.346 3.76 9.564 4.319 13.044c-.858-4.083-.15-7.866 2.338-10.353c4.906-4.906 14.849-2.917 22.208 4.443"></path>
        <path fill="#ffac33" d="M19.403 34c-.252 0-.503-.077-.719-.231l-5.076-3.641l-5.076 3.641c-.433.31-1.013.31-1.443-.005a1.23 1.23 0 0 1-.45-1.369l1.894-6.11l-5.031-3.545a1.236 1.236 0 0 1-.442-1.375a1.236 1.236 0 0 1 1.165-.851l6.147-.012l2.067-5.957a1.233 1.233 0 0 1 2.34 0l1.866 5.957l6.347.012a1.233 1.233 0 0 1 .723 2.226l-5.031 3.545l1.893 6.11A1.23 1.23 0 0 1 19.403 34"></path>
      </svg>
    </span>
  )
}