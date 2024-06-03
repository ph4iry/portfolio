'use client';
import { GradientTexture, Loader, OrthographicCamera, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import Spline, { SplineProps } from '@splinetool/react-spline';
import { MutableRefObject, Suspense, useEffect, useRef } from 'react';
import Planet from '../models/Planet';
import useSpline from '@splinetool/r3f-spline';
import { motion } from 'framer-motion-3d';

export default function AboutMeScene({ section }:{ section: number }) {
  // const { nodes, materials } = useSpline('https://prod.spline.design/jXtRHgXJVqQlEvtQ/scene.splinecode');

  return (
    <>
    
      <Canvas shadows flat>
        {/* <Stars
          radius={750} // Radius of the inner sphere (default=100)
          depth={2000} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={1} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        /> */}
        

        <Stars radius={1000} depth={250} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={0.49}
            far={100000}
            near={-100000}
            up={[0, 1, 0]}
            position={[1134.11, 891.21, -1999.47]}
            rotation={[-2.84, 0.09, 3.11]}
            scale={1}
          />
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['#29063E', '#08081F']} // Colors need to match the number of stops
            rotation={ Math.PI * -0.75}
            // size={1024} // Size is optional, default = 1024
            attach="background"
          />
          <ambientLight intensity={1} />
          <group
          >

            <Planet name='home' />
          </group>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}