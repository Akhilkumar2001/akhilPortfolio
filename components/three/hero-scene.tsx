"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
  Sphere,
} from "@react-three/drei";
import type { Mesh, Group } from "three";

function CoreBlob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
      <Icosahedron ref={ref} args={[1.35, 12]}>
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#3d1f8f"
          emissiveIntensity={0.35}
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.65}
        />
      </Icosahedron>
    </Float>
  );
}

function Satellites() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.4}>
        <Torus args={[0.28, 0.1, 16, 48]} position={[2.4, 1.1, -1]}>
          <meshStandardMaterial
            color="#ff6584"
            roughness={0.2}
            metalness={0.7}
          />
        </Torus>
      </Float>
      <Float speed={1.7} rotationIntensity={1} floatIntensity={1.6}>
        <Sphere args={[0.22, 32, 32]} position={[-2.5, -0.8, -0.5]}>
          <meshStandardMaterial
            color="#22d3ee"
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      <Float speed={2.3} rotationIntensity={1.4} floatIntensity={1.2}>
        <Icosahedron args={[0.32, 0]} position={[1.9, -1.4, 0.6]}>
          <meshStandardMaterial
            color="#43e97b"
            roughness={0.25}
            metalness={0.6}
            flatShading
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <pointLight position={[-5, -3, 2]} intensity={2} color="#ff6584" />
        <pointLight position={[5, 3, -2]} intensity={2} color="#22d3ee" />
        <CoreBlob />
        <Satellites />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
