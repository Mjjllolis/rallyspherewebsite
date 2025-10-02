'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

interface PhoneMockup3DProps {
  imageSrc: string;
  alt: string;
}

function Phone3DModel({ imageSrc }: { imageSrc: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Phone frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2, 4, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen with image texture */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.8, 3.8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[2.5, 4.5]} />
        <meshBasicMaterial color="#0066ff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function PhoneMockup3D({ imageSrc, alt }: PhoneMockup3DProps) {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Fallback image for accessibility and SEO */}
      <div className="absolute inset-0 opacity-0 pointer-events-none">
        <Image src={imageSrc} alt={alt} width={384} height={762} quality={100} />
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 0, 5]} intensity={0.5} color="#0066ff" />
        <Phone3DModel imageSrc={imageSrc} />
      </Canvas>
    </div>
  );
}
