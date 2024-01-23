'use client';
import React, { ReactNode, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated, SpringValues, SpringValue } from '@react-spring/three';
import { Euler, Group } from 'three';

export default function Rotator({ children }:{children: ReactNode}) {
  const orbitor = useRef<Group>(null!);
  

  const props = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [Math.PI * 2, 0, 0] },
  })

  console.log(props);
  // Hook to update the rotation on each frame
  useFrame(({ clock }) => {
    orbitor.current.rotation.y = clock.getElapsedTime()
  })

  return (
    <animated.group ref={orbitor}>
      {children}
    </animated.group>
  )
}