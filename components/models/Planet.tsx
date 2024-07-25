import React, { useRef, useState, useCallback, useEffect, RefObject } from "react";
import { BoxGeometry, Euler, Group } from "three";
import { PerspectiveCamera, useTexture, useScroll } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { motion } from 'framer-motion-3d';
import { GroupProps, useThree } from "@react-three/fiber";

export default function Planet({ name }:{ name: 'home' | 'projects' }) {
  const animFn = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
  const { width, height } = useThree((state) => state.viewport);

  const groupRef = useRef<Group>(null!);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const speed = 3;
  const startRotation = useRef<Euler>(null!);
  const data = useScroll();
  const { nodes, materials } = useSpline('https://prod.spline.design/jXtRHgXJVqQlEvtQ/scene.splinecode');

  useEffect(() => {
    startRotation.current = groupRef.current.rotation.clone();
  }, []);

  const handleRotation = useCallback((clientX: number, clientY: number) => {
    if (isMouseDown) {
      const temp_x = clientX - mouseCoords.x;

      groupRef.current.rotateY(temp_x * speed / 1000);

      setMouseCoords({ x: clientX, y: clientY });
      
    }
  }, [isMouseDown, mouseCoords.x, speed]);

  return (
    <>

      <motion.group
        name="purple about"
        ref={groupRef as unknown as RefObject<GroupProps>}
        onPointerDown={(event) => {
          setIsMouseDown(true);
          setMouseCoords({ x: event.clientX, y: event.clientY });
          event.stopPropagation();
          (event.target as Element).setPointerCapture(event.pointerId);
        } }
        onPointerMove={(event) => handleRotation(event.clientX, event.clientY)}
        onPointerUp={() => setIsMouseDown(false)}
        onPointerOut={() => setIsMouseDown(false)}
        scale={5}
        // position-y={}
      >
        <mesh
          name="Torus1"
          geometry={nodes.Torus1.geometry}
          material={materials['Torus1 Material']}
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0.08, -1.26]}
          scale={1} />
        <mesh
          name="Sphere2"
          geometry={nodes.Sphere2.geometry}
          material={materials['Sphere2 Material']}
          castShadow
          receiveShadow
          rotation={[Math.PI, -1.1, Math.PI]}
          scale={1} />
      </motion.group>
    </>
  );
} 
 
/*
how i want for this to work:
the planet starts really big at the bottom of the screen and then zooms out and translates, with a 2d blob background
*/