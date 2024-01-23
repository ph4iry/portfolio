import { animated, config, useSpring } from "@react-spring/three";
import { useState } from "react";

export function Hoverable({
  children,
  position,
  hoverScale = 1.1,
  onClick = () => {},
  ...props
}: any) {
  const [down, setDown] = useState(false);
  const [hover, setHover] = useState(false);

  const { scale } = useSpring({
    scale: down ? hoverScale * 1.05 : hover ? hoverScale : 1,
    config: config.wobbly
  });

  return (
    <animated.group
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => setDown(false)}
      onClick={() => {
        if (onClick) onClick();
      }}
      {...props}
    >
      {children}
    </animated.group>
  );
}
