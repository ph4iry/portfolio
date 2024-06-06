'use client';
import useSpline from "@splinetool/r3f-spline";
import { GradientTexture, PerspectiveCamera } from "@react-three/drei";
import { Dispatch, SetStateAction } from "react";
import { SceneProps } from "@react-three/fiber";
import Rotator from "../Rotator";
import SelectorManager from "../SelectorManager";

export default function Scene({ navigate, ...props }: { navigate: [number, Dispatch<SetStateAction<number>>], props?: SceneProps}) {
  const { nodes, materials } = useSpline('https://prod.spline.design/gBTRwt2stFY6Q6HL/scene.splinecode');

  console.log(nodes);

  return (
    <>
      <GradientTexture
        stops={[0, 1]} // As many stops as you want
        colors={['#29063E', '#08081F']} // Colors need to match the number of stops
        rotation={ Math.PI * -0.75}
        // size={1024} // Size is optional, default = 1024
        attach="background"
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
          <SelectorManager
            navigator={navigate}
          >
            <group position={[0, 0, 0]}>
              <>
                <group name="red projects" position={[-1500, 0, 1500]}>
                  <Rotator speed={0.8}>
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
                  </Rotator>
                  <Rotator speed={0.8}>
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
                  </Rotator>
                </group>
              </>
              <>
                <group name="green now playing" position={[-3000, 0, 3000]}>
                  <Rotator speed={1.2}>
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
                  </Rotator>
                </group>
              </>
              <Rotator speed={0.7}>
              <group name="purple about">
                <mesh
                  name="Torus1"
                  geometry={nodes.Torus1.geometry}
                  material={materials['Torus1 Material']}
                  castShadow
                  receiveShadow
                  rotation={[-Math.PI / 2, 0.08, -1.26]}
                  scale={1}
                />
                <mesh
                  name="Sphere2"
                  geometry={nodes.Sphere2.geometry}
                  material={materials['Sphere2 Material']}
                  castShadow
                  receiveShadow
                  rotation={[Math.PI, -1.1, Math.PI]}
                  scale={1}
                />
              </group>
              </Rotator>
            </group>
          </SelectorManager>
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
/*
  Auto-generated by Spline
*/

// import useSpline from '@splinetool/r3f-spline'
// import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'

// export default function Scene({ ...props }) {
//   const { nodes, materials } = useSpline('https://prod.spline.design/jXtRHgXJVqQlEvtQ/scene.splinecode')
//   return (
//     <>
//       <color attach="background" args={['#210c31']} />
//       <group {...props} dispose={null}>
//         <scene name="Scene">
//           <PerspectiveCamera
//             name="Camera 2"
//             makeDefault={false}
//             far={100000}
//             near={70}
//             fov={45}
//             up={[0, 1, 0]}
//             position={[-2728.54, 242.11, -568.21]}
//             rotation={[-2.99, -0.43, -3.12]}
//             scale={1}
//           />
//           <PerspectiveCamera
//             name="Camera"
//             makeDefault={true}
//             far={100000}
//             near={70}
//             fov={45}
//             up={[0, 1, 0]}
//             position={[-591.6, 598.19, -2734.43]}
//             rotation={[-2.93, -0.21, -3.1]}
//           />
//           <group name="green now playing" position={[-3000, 0, 3000]}>
//             <mesh
//               name="Helix"
//               geometry={nodes.Helix.geometry}
//               material={materials['Helix Material']}
//               castShadow
//               receiveShadow
//               position={[0, 0, 0]}
//               rotation={[-Math.PI, -0.36, -Math.PI]}
//               scale={1}
//             />
//             <mesh
//               name="Sphere"
//               geometry={nodes.Sphere.geometry}
//               material={materials['Sphere Material']}
//               castShadow
//               receiveShadow
//               scale={1}
//             />
//           </group>
//           <group name="red projects" position={[-1500, 0, 1500]}>
//             <group name="Group" position={[0, -13.47, 0]}>
//               <mesh
//                 name="Star"
//                 geometry={nodes.Star.geometry}
//                 material={materials['Star Material']}
//                 castShadow
//                 receiveShadow
//                 position={[378.25, -14.06, -35.42]}
//                 rotation={[-1.29, 1.25, 0.12]}
//                 scale={1}
//               />
//               <mesh
//                 name="Torus"
//                 geometry={nodes.Torus.geometry}
//                 material={materials['Torus Material']}
//                 castShadow
//                 receiveShadow
//                 position={[0, 13.47, 0]}
//                 rotation={[-Math.PI / 2, 0.08, -1.26]}
//                 scale={1}
//               />
//             </group>
//             <mesh
//               name="Sphere1"
//               geometry={nodes.Sphere1.geometry}
//               material={materials['Sphere1 Material']}
//               castShadow
//               receiveShadow
//               scale={1}
//             />
//           </group>
//           <group name="purple about">
//             <mesh
//               name="Torus1"
//               geometry={nodes.Torus1.geometry}
//               material={materials['Torus1 Material']}
//               castShadow
//               receiveShadow
//               rotation={[-Math.PI / 2, 0.08, -1.26]}
//               scale={1}
//             />
//             <mesh
//               name="Sphere2"
//               geometry={nodes.Sphere2.geometry}
//               material={materials['Sphere2 Material']}
//               castShadow
//               receiveShadow
//               rotation={[Math.PI, -1.1, Math.PI]}
//               scale={1}
//             />
//           </group>
//           <directionalLight
//             name="Directional Light"
//             castShadow
//             intensity={1}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-near={-10000}
//             shadow-camera-far={100000}
//             shadow-camera-left={-1250}
//             shadow-camera-right={1250}
//             shadow-camera-top={1250}
//             shadow-camera-bottom={-1250}
//             position={[-811.97, 87.31, 300]}
//           />
//           <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
//           <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
//         </scene>
//       </group>
//     </>
//   )
// }

/*


*/