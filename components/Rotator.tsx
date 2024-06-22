'use client';
import React, { ReactNode, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';
import { Group } from 'three';
import { Hoverable } from './Hoverable';

export default function Rotator({ children, speed }:{ children: ReactNode, speed: number }) {
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
    orbitor.current.rotation.y = clock.getElapsedTime() * speed;
  })

  return (
    <Hoverable>
      <group rotation-y={props.planetRotation.get()}  ref={orbitor}>
        {children}
      </group>
    </Hoverable>
  )
}