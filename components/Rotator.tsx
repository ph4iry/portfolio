'use client';
import React, { ReactNode, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated, SpringValues, SpringValue } from '@react-spring/three';
import { Euler, Group } from 'three';
import useKeyboard from '@/hooks/useKeyboard';

export default function Rotator({ children }:{children: ReactNode}) {
  const orbitor = useRef<Group>(null!);

  const props = useSpring({
    from: {
      planetRotation: 0
    },
    to: {
      planetRotation: Math.PI * 2
    },
  })

  useFrame(({ clock }) => {
    orbitor.current.rotation.y = clock.getElapsedTime();
  })

  return (
    <group rotation-y={props.planetRotation.get()}  ref={orbitor}>
      {children}
    </group>
  )
}