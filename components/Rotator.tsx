'use client';
import React, { ReactNode, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Group } from 'three';

export default function Rotator({ children }:{children: ReactNode}) {
  const orbitor = useRef<Group>(null!);

  const { rotation } = useSpring({
    // ref: orbitor, // Set the ref for the animated component
    rotation: [Math.PI * 2, 0, 0], // Rotate 360 degrees around the y-axis
    loop: true, // Loop the animation
    config: { duration: 5000 }, // Animation duration
  });

  console.log(rotation);
  // Hook to update the rotation on each frame
  // useFrame(() => {
  //   orbitor.current.rotation.set(rotation.x, rotation.y, rotation.z);
  // });

  return (
    <animated.group ref={orbitor}>
      {children}
    </animated.group>
  )
}