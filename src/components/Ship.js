import React from "react";
import { FlyControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

export default function Ship() {
  function Box() {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    return (
      <mesh
        onClick={() => {
          api.velocity.set(0, 2, 0);
        }}
        ref={ref}
        position={[0, 2, 0]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    );
  }
  return <Box />;
}
