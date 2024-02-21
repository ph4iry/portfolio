'use client';
import Spline, { SplineProps } from '@splinetool/react-spline';
import { MutableRefObject, useEffect, useRef } from 'react';

export default function AboutMeScene({ button }: { button: MutableRefObject<HTMLButtonElement> }) {
  const spline = useRef<any>(null!);

  const onLoad = (splineApp: any) => {
    spline.current = splineApp;
  }

  const handleClick = () => {
    // 9510fda7-f48c-4fb1-a76f-f58240e6c413
    console.log('click');
    spline.current!.emitEvent('keyDown', '9510fda7-f48c-4fb1-a76f-f58240e6c413');
  }

  useEffect(() => {
    const curr = button.current;
    curr.addEventListener('click', handleClick);

    return () => {
      curr.removeEventListener('click', handleClick);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Spline scene="https://prod.spline.design/4KyWCqZwrg560IJG/scene.splinecode"
      onLoad={onLoad}
      
    />
  );
}
