'use client';
import useSpline from '@splinetool/r3f-spline';
import { GradientTexture, MeshTransmissionMaterial, PerspectiveCamera } from '@react-three/drei';
import { Dispatch, SetStateAction, useState } from 'react';
import { MaterialProps, SceneProps } from '@react-three/fiber';
import { RotationWrapper, LocationManager } from './PlanetWrappers';

import { useEffect } from 'react';
import { Material, Vector2 } from 'three';

function SphereMesh({ nodes, materials }) {
  const [material, setMaterial] = useState(materials['Sphere2 Material']);

  useEffect(() => {
    const m = materials['Sphere2 Material'];

    // Make sure the material is transparent
    m.transparent = true;

    // Set the opacity for transparency effect
    m.opacity = 0.1; // You can adjust this value

    // Add some glassy-like properties
    m.roughness = 0.1; // Make the m smooth
    m.metalness = 0.9; // Higher metalness can add a reflective effect
    m.envMapIntensity = 1; // Boost environment map reflections if any are available

    setMaterial(material)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <mesh
      name="Sphere2"
      geometry={nodes.Sphere2.geometry}
      material={material}
      castShadow
      rotation={[Math.PI, -1.1, Math.PI]}
      scale={1}
    />
  );
}

function overrideMaterial(material: Material, options: MaterialProps) {
  const res = material;

}


function Glass({ name, float = 300, color, configOverrides, ...props }) {
  const { nodes } = useSpline('https://prod.spline.design/gBTRwt2stFY6Q6HL/scene.splinecode');

  const config = {
    backside: false,
    samples: 16,
    resolution: 256,
    transmission: 0.85,
    roughness: 0.5,
    clearcoat: 0.3,
    clearcoatRoughness: 0.1,
    thickness: 20,
    backsideThickness: 200,
    ior: 1.5,
    chromaticAberration: 1,
    anisotropy: 0,
    distortion: 0,
    distortionScale: 0.2,
    temporalDistortion: 0,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
  }

  return (
    <mesh renderOrder={100} geometry={nodes[name].geometry} {...props}>
      <MeshTransmissionMaterial {...{ ...config, ...configOverrides }} color={color} toneMapped={false} />
    </mesh>
  )
}

export default function Scene({ navigate, ...props }: { navigate: [number, Dispatch<SetStateAction<number>>], props?: SceneProps }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/gBTRwt2stFY6Q6HL/scene.splinecode');
  const [clientW, setClientW] = useState(0);

  useEffect(() => {
    setClientW(innerWidth);
  }, [])

  return (
    <>
      <GradientTexture
        stops={[0, 0.5, 1]}
        colors={[
          '#23094f',
          '#120f33',
          '#22072b',
        ]}
        rotation={Math.PI * -0.75}
        size={clientW} // Size is optional, default = 1024
        attach="background"
        center={new Vector2(0.5, 0.5)}
      />
      {/* <color attach="background" args={['black']} /> */}
      <group {...props} dispose={null}>
        <scene name="Scene">
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            up={[0, 1, 0]}
            position={[-591.6, 598.19, -2734.43]}
            rotation={[-2.93, -0.21, -3.1]}
          />
          <LocationManager
            navigator={navigate}
          >
            <group position={[0, 0, 0]}>
              <>
                <group name="red projects" position={[-1500, 0, 1500]}>
                  <RotationWrapper speed={7}>
                    <group name="Group" position={[0, -13.47, 0]}>
                      <mesh
                        name="Star"
                        geometry={nodes.Star.geometry}
                        material={materials['Star Material']}
                        castShadow
                        receiveShadow
                        position={[378.25, -14.06, -35.42]}
                        rotation={[-1.29, 1.25, 0.12]}
                        scale={1}
                      />
                      <mesh
                        name="Torus"
                        geometry={nodes.Torus.geometry}
                        material={materials['Torus Material']}
                        castShadow
                        receiveShadow
                        position={[0, 13.47, 0]}
                        rotation={[-Math.PI / 2, 0.08, -1.26]}
                        scale={1}
                      />
                    </group>
                    <group>
                      <mesh
                        name="Sphere1"
                        geometry={nodes.Sphere1.geometry}
                        material={materials['Sphere1 Material']}
                        castShadow
                        receiveShadow
                        scale={1}
                      />
                    </group>
                  </RotationWrapper>
                </group>
              </>
              <>
                <group name="green now playing" position={[-3000, 0, 3000]}>
                  <RotationWrapper speed={6}>
                    <group>
                      <mesh
                        name="Sphere"
                        geometry={nodes.Sphere.geometry}
                        material={materials['Sphere Material']}
                        castShadow
                        receiveShadow
                        scale={1}
                      />
                    </group>
                  </RotationWrapper>
                </group>
              </>
              <RotationWrapper speed={9}>
                <group name="purple about">
                  <Glass name="Torus1"
                    configOverrides={{ clearcoat: 0, transmission: 0.6, attenuationColor: '#858bff' }}
                    color="#858bff"
                    rotation={[-Math.PI / 2, 0.08, -1.26]}
                  />
                  <SphereMesh nodes={nodes} materials={materials}


                  />
                  {/* <Glass name="Sphere2"
                    configOverrides={{ transmission: 0.4, clearcoat: 0, thickness: 50 }}
                    castShadow
                    receiveShadow
                    color="#ba4aff"
                    scale={1}
                  /> */}
                </group>
              </RotationWrapper>
            </group>
          </LocationManager>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            position={[-811.97, 87.31, 300]}
          />
          {/* <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} /> */}
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}