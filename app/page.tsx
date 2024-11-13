'use client'
import Scene from '@/components/canvas/Scene'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { ExploreOverlay, WelcomeOverlay } from '@/components/dom/Overlays'
import { Stars } from '@react-three/drei'
import { useDrag } from '@use-gesture/react'
import { ReactDOMAttributes } from '@use-gesture/react/dist/declarations/src/types'

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [nav, setNav] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindow = () => setWindowSize({ width: innerWidth, height: innerHeight });
    updateWindow();

    document.addEventListener('resize', updateWindow);

    return document.removeEventListener('resize', updateWindow);
  }, []);
  const simulateKeyDownEvent = (key: string) => {
    const simulatedEvent = new KeyboardEvent('keydown', { key });

    if (!showModal) {
      switch (key) {
        case 'ArrowLeft':
          setNav((nav + 2) % 3);
          simulatedEvent.preventDefault();
          // console.log("left key pressed");
          break;
        case 'ArrowRight':
          setNav((nav + 1) % 3);
          simulatedEvent.preventDefault();
          // console.log("right key pressed");
          break;
        default:
          return;
      }
      // event.preventDefault();
    }
  };

  const bind: () => ReactDOMAttributes = useDrag(({ down, movement: [mx] }) => {
    const threshold = 50;
    if (!down) {
      if (mx < -threshold) {
        simulateKeyDownEvent('ArrowRight');
      } else if (mx > threshold) {
        simulateKeyDownEvent('ArrowLeft');
      }
    }
  }) as unknown as () => ReactDOMAttributes;

  return (
    <>
      <WelcomeOverlay show={showIntro} setShow={setShowIntro} />
      <ExploreOverlay navigator={[nav, setNav]} slider={[showIntro, setShowIntro]} modalManager={[showModal, setShowModal]} />
      <div
        {...bind()}
        className="fixed inset-0 z-0 flex min-h-lvh w-full touch-none items-center justify-center bg-slate-950">
        <Canvas frameloop={showModal ? 'demand' : 'always'}>
          <Suspense fallback={null}>
            <Scene navigate={[nav, setNav]} />
            <Stars
              radius={Math.max(windowSize.width, windowSize.height) / 0.75} // Radius of the inner sphere (default=100)
              depth={100} // Depth of area where stars should fit (default=50)
              count={2500} // Amount of stars (default=5000)
              factor={10} // Size factor (default=4)
              saturation={1} // Saturation 0-1 (default=0)
              fade // Faded dots (default=false)

            />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}