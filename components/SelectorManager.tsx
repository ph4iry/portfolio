import { useSpring, animated, config, a } from "@react-spring/three";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect, useMemo, useRef, ReactNode } from "react";
import { Euler, Group, Vector3 } from "three";

const About = {
  position:[0, 0, 0],
}

const Projects = {
  position:[1500, 0, 1500],
}

const AnimatedPerspectiveCamera = animated(PerspectiveCamera);

const pages = [About, Projects];

const getNextPage = (index: number) => {
  if (index + 1 < pages.length) {
    return index + 1;
  } else {
    return 0;
  }
}

const getPrevPage = (index: number) => {
  if (index - 1 >= 0) {
    return index - 1;
  } else {
    return pages.length - 1;
  }
}

function mountListeners(forward: () => void, backward: () => void) {
  useEffect(() => {
    document.addEventListener('click', () => {
      forward();
    })
    document.addEventListener('keyleft', backward)
    return () => {
      document.removeEventListener('click', forward)
      document.removeEventListener('keyleft', backward)
    }
  }, [])
}

export default function SelectorManager({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<number>(0);
  const [target, setTarget] = useState<number>(1);
  const manager = useRef<Group>(null!);

    const [active, setActive] = useState(0);

    // create a common spring that will be used later to interpolate other values
    const { spring } = useSpring({
      spring: active,
      config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
    });
    // interpolate values from commong spring
    const scale = spring.to([0, 1], [1, 5]);
    const rotation = spring.to([0, 1], [0, Math.PI]);
    const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  // const [props, animate] = useSpring(
  //   () => ({
  //     from: {
  //       ...pages[0]
  //     },
  //     to: {
  //       ...pages[1]
  //     },
  //     config: {
  //       duration: 10000,
  //       ...config.wobbly
  //     }
  //   }),
  //   []
  // )

  // useFrame(({ clock }) => {
  //   // manager.current.rotation.y = clock.getElapsedTime();
  // })

  mountListeners(
    () => {
      // setTarget(getNextPage(page));
      // setPage(getPrevPage(target));
      // animate.start();
      console.log(props);
    },
    () => {
      // setTarget(getPrevPage(page));
      // animate.start();
    }
  )




  return (
    <animated.group
    ref={manager}
      position={new Vector3(...props.position.get())}
    >
      {children}
    </animated.group>
  )
}