import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Ring, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';

function AnimatedSphere() {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group>
      {/* Main distorted sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere
          ref={sphereRef}
          args={[1.4, 64, 64]}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <MeshDistortMaterial
            color={hovered ? "#ff6584" : "#6c63ff"}
            attach="material"
            distort={hovered ? 0.5 : 0.35}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting ring 1 */}
      <OrbitingRing radius={2.2} speed={1.2} color="#6c63ff" tilt={[1.2, 0, 0]} />
      {/* Orbiting ring 2 */}
      <OrbitingRing radius={2.6} speed={-0.8} color="#ff6584" tilt={[0.4, 0.8, 0]} />
      {/* Orbiting ring 3 */}
      <OrbitingRing radius={2.0} speed={0.6} color="#43e97b" tilt={[0.2, 1.2, 0.3]} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </group>
  );
}

function OrbitingRing({ radius, speed, color, tilt }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group ref={groupRef} rotation={tilt}>
      <Torus args={[radius, 0.015, 16, 100]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </Torus>
    </group>
  );
}

function FloatingParticle({ index }) {
  const meshRef = useRef();
  const angle = (index / 8) * Math.PI * 2;
  const radius = 1.8 + Math.random() * 0.8;

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + index * 0.8;
      meshRef.current.position.x = Math.cos(t * 0.5 + angle) * radius;
      meshRef.current.position.y = Math.sin(t * 0.7 + angle) * 0.6;
      meshRef.current.position.z = Math.sin(t * 0.5 + angle) * radius;
      meshRef.current.rotation.y = t;
    }
  });

  const colors = ['#6c63ff', '#ff6584', '#43e97b', '#f59e0b'];

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.06, 0.06, 0.06]} />
      <meshStandardMaterial
        color={colors[index % colors.length]}
        emissive={colors[index % colors.length]}
        emissiveIntensity={1}
      />
    </mesh>
  );
}

export default function Profile3D() {
  return (
    <div className="relative w-full h-full">
      {/* Glow behind canvas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute w-56 h-56 rounded-full bg-pink-500/15 blur-2xl" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#6c63ff" />
        <pointLight position={[5, -5, 5]} intensity={0.6} color="#ff6584" />
        <pointLight position={[0, 5, -5]} intensity={0.5} color="#43e97b" />
        <AnimatedSphere />
      </Canvas>

      {/* Avatar overlay - initials */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full glass border-2 border-white/20 flex items-center justify-center">
          <span className="text-3xl font-black gradient-text">AK</span>
        </div>
      </div>
    </div>
  );
}
