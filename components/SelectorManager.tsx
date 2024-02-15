import { useSpring, animated, config, a, easings, useSprings } from "@react-spring/three";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect, useMemo, useRef, ReactNode, Dispatch, SetStateAction } from "react";
import { Euler, Group, Vector3 } from "three";
import { useDrag } from '@use-gesture/react';
import clamp from 'lodash.clamp';

export default function SelectorManager({ children, navigator }: { children: ReactNode, navigator: [number, Dispatch<SetStateAction<number>>] }) {
  const manager = useRef<Group>(null!);
  const [page, setPage] = navigator;

  // const pos = useState({ opacity: 1 });
  const { position } = useSpring({
    position: [page * 1500, page * 50, page * -1500],
    config: {
      duration: 1000,
      easing: easings.easeInOutBack,
    },
    // loop: {
    //   reverse: true,
    // }
  });

  useFrame(() => {
    manager.current.position.x = position.get()[0];
    manager.current.position.z = position.get()[2];
  });

  return <animated.group
  ref={manager}
    position={position.get() as [number, number, number]}
  >
    {children}
  </animated.group>
}