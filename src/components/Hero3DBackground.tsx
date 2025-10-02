'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  scale: number;
  mousePosition: { x: number; y: number };
}

function AnimatedSphere({ position, color, scale, mousePosition }: AnimatedSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.0015;

      // Slow floating animation
      const floatY = position[1] + Math.sin(clock.getElapsedTime() * 0.3 + position[0]) * 0.4;
      meshRef.current.position.y = floatY;

      // Mouse interaction - subtle following
      const targetX = position[0] + mousePosition.x * 0.3;
      const targetZ = position[2] + mousePosition.y * 0.2;

      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.015;
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.015;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
}

function FloatingParticles({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesCount = 500;
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const cols = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      // Color gradient from blue to cyan to white
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Blue
        cols[i * 3] = 0;
        cols[i * 3 + 1] = 0.4 + Math.random() * 0.4;
        cols[i * 3 + 2] = 1;
      } else if (colorChoice < 0.7) {
        // Cyan
        cols[i * 3] = 0;
        cols[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        cols[i * 3 + 2] = 1;
      } else {
        // White
        cols[i * 3] = 1;
        cols[i * 3 + 1] = 1;
        cols[i * 3 + 2] = 1;
      }
    }
    return { positions: pos, colors: cols };
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      // Much slower rotation
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.008;

      // Subtle mouse interaction
      particlesRef.current.rotation.x = mousePosition.y * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} />
    </points>
  );
}

function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const spheres: Omit<AnimatedSphereProps, 'mousePosition'>[] = [
    { position: [-4, 2, -3], color: '#0066ff', scale: 1.4 },
    { position: [4, -2, -4], color: '#00d4ff', scale: 1.2 },
    { position: [-3, -3, -2], color: '#0088ff', scale: 1 },
    { position: [5, 3, -5], color: '#0066ff', scale: 1.6 },
    { position: [0, -4, -3], color: '#00aaff', scale: 1.3 },
    { position: [-5, 0, -4], color: '#0099ff', scale: 1.1 },
    { position: [2, 4, -2], color: '#00d4ff', scale: 1.5 },
    { position: [-1, 1, -3], color: '#0077ff', scale: 0.9 },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#0066ff" />

      {spheres.map((sphere, index) => (
        <AnimatedSphere key={index} {...sphere} mousePosition={mousePosition} />
      ))}

      <FloatingParticles mousePosition={mousePosition} />
    </>
  );
}

export default function Hero3DBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
