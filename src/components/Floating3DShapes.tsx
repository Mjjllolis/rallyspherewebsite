'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Shape3DProps {
  position: [number, number, number];
  color: string;
  speed: number;
  type: 'sphere' | 'box' | 'torus';
}

function Shape3D({ position, color, speed, type }: Shape3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === 'sphere' && <sphereGeometry args={[0.3, 16, 16]} />}
      {type === 'box' && <boxGeometry args={[0.4, 0.4, 0.4]} />}
      {type === 'torus' && <torusGeometry args={[0.3, 0.1, 8, 16]} />}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.4}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

function Scene() {
  const shapes: Shape3DProps[] = [
    { position: [-3, 1, -2], color: '#0066ff', speed: 0.5, type: 'sphere' },
    { position: [3, -1, -3], color: '#00d4ff', speed: 0.7, type: 'box' },
    { position: [-2, -2, -2], color: '#0088ff', speed: 0.6, type: 'torus' },
    { position: [2, 2, -4], color: '#00aaff', speed: 0.8, type: 'sphere' },
    { position: [0, 0, -3], color: '#0099ff', speed: 0.4, type: 'box' },
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      {shapes.map((shape, index) => (
        <Shape3D key={index} {...shape} />
      ))}
    </>
  );
}

export default function Floating3DShapes() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
