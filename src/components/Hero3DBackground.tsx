'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { palette } from '@/lib/palette';
import Canvas3DBoundary from './Canvas3DBoundary';

function useWebGLSupported() {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
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
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color={palette.brightBlue} />

      <FloatingParticles mousePosition={mousePosition} />
    </>
  );
}

export default function Hero3DBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const webglSupported = useWebGLSupported();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  // If WebGL isn't available, render nothing — the photo/gradient hero stands
  // on its own and the page never crashes.
  if (!webglSupported) return null;

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <Canvas3DBoundary>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          className="w-full h-full"
          gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
        >
          <Scene mousePosition={mousePosition} />
        </Canvas>
      </Canvas3DBoundary>
    </div>
  );
}
