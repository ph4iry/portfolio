'use client';
import React, { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config, easings } from '@react-spring/three';
import { motion } from 'framer-motion-3d';
import { useState } from "react";
import { Group } from 'three';

export function RotationWrapper({ children, speed }: { children: ReactNode, speed: number }) {
  const orbitor = useRef(null!);

  return (
    <HoverableWrapper>
      <motion.group
        ref={orbitor}
        animate={{
          rotateY: [0, Math.PI * 2], // Full rotation (360 degrees)
        }}
        transition={{
          repeat: Infinity, // Continuous looping
          ease: "linear", // Smooth constant speed
          duration: speed, // Controls the speed of rotation
        }}
      >
        {children}
      </motion.group>
    </HoverableWrapper>
  );
}

function HoverableWrapper({
  children,
  position,
  hoverScale = 1.1,
  onClick = () => { },
  ...props
}: any) {
  const [down, setDown] = useState(false);
  const [hover, setHover] = useState(false);

  const scaleValue = down ? (hoverScale * 1.05) : (hover ? hoverScale : 1);

  return (
    <motion.group
      animate={{
        scale: scaleValue,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => setDown(false)}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.group>
  );
}

export function LocationManager({ children, navigator }: { children: ReactNode, navigator: [number, Dispatch<SetStateAction<number>>] }) {
  const manager = useRef(null!);
  const [page] = navigator;

  // Set the position based on the `page` value
  const position = [page * 1500, page * 50, page * -1500];

  return (
    <motion.group
      ref={manager}
      animate={{
        x: position[0],
        z: position[2],
      }}
      transition={{
        duration: 0.8,
        ease: easings.easeInOutQuart //[0.68, -0.55, 0.27, 1.55], // Equivalent to `easeInOutBack`
      }}
    >
      {children}

    </motion.group>
  );
}