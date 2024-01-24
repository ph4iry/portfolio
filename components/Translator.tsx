import React, { useState } from "react";
import { Canvas, Euler } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const Box = () => {
  const [isClicked, setClicked] = useState(false);
  const { rotation } = useSpring({
    rotation: !isClicked ? [0, 0, 0] : [1, 1, 1],
    config: config.wobbly
  });
  return (
    <animated.mesh
      rotation={rotation.get() as Euler}
      onClick={(event) => setClicked(!isClicked)}
    >
      <meshStandardMaterial color="hotpink" />
      <boxGeometry args={[1, 1, 1]} />
    </animated.mesh>
  );
};

export default function BoxThing() {
  return (
    <Box />
  );
}
