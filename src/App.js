import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  FlyControls,
  PerspectiveCamera,
  Stars
} from "@react-three/drei";
import { Physics, usePlane, useBox, useSphere } from "@react-three/cannon";
import Star from "./components/Star.js";
import Ship from "./components/Ship.js";
import "./styles.css";

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

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function Sphere(radius, position, color) {
  const [ref, api] = useSphere(() => ({
    position: [4, 4, 4],
    args: [2, 16, 16]
  }));
  console.log("sphere", radius, position);
  return (
    <mesh position={[4, 4, 4]}>
      <sphereGeometry attach="geometry" args={[2, 16, 16]} />
      <meshLambertMaterial attach="material" color={"red"} />
    </mesh>
  );
}

function flyToStar(position) {
  console.log("hey", position);
}

export default function App() {
  return (
    <Canvas>
      <FlyControls movementSpeed={5} rollSpeed={0.1} dragToLook={true} />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Star
          onClick={console.log("hi")}
          radius={4}
          position={[0, 0, 8]}
          color="purple"
        />
        <Star radius={2} position={[12, 4, 24]} color="green" />
        <Sphere radius={2} position={[4, 4, 4]} color="red" />

        <Ship />
        <Plane />
      </Physics>
    </Canvas>
  );
}
