'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useVideoTexture } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';

function ScreenVideo() {
  const videoTexture = useVideoTexture('/Iphone-Display-SR.mp4', {
    loop: true,
    muted: true,
    start: true,
  });

  // Fixed screen positioning values
  const screenPosition = [0, 0, 0.125] as [number, number, number];
  const screenRotation = [0, 0, 0] as [number, number, number];
  const screenScale = [1, 1, 1] as [number, number, number];

  // Shader material with rounded corners
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        map: { value: videoTexture },
        radius: { value: 0.3 }, // corner radius (0.0 to 0.5)
        resolution: { value: new THREE.Vector2(1.82, 3.95) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform float radius;
        uniform vec2 resolution;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 center, vec2 size, float radius) {
          return length(max(abs(center) - size + radius, 0.0)) - radius;
        }

        void main() {
          vec2 center = (vUv - 0.5) * resolution;
          vec2 halfSize = resolution * 0.5;
          float distance = roundedBoxSDF(center, halfSize, radius);

          float smoothness = 0.01;
          float alpha = 1.0 - smoothstep(-smoothness, smoothness, distance);

          vec4 texColor = texture2D(map, vUv);
          gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      toneMapped: false
    });
  }, []);

  // Update texture uniform when video texture changes
  useMemo(() => {
    if (shaderMaterial && videoTexture) {
      shaderMaterial.uniforms.map.value = videoTexture;
    }
  }, [videoTexture, shaderMaterial]);

  return (
    <mesh
      position={screenPosition}
      rotation={screenRotation}
      scale={screenScale}
      material={shaderMaterial}
    >
      <planeGeometry args={[1.82, 3.95]} />
    </mesh>
  );
}

function Model() {
  const { scene } = useGLTF('/Iphone17.glb');
  const groupRef = useRef<THREE.Group>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set initial rotation on mount
    if (groupRef.current) {
      groupRef.current.rotation.x = -0.5;
      groupRef.current.scale.set(2, 2, 2);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed model position
  const position = [0, 0, 0] as [number, number, number];

  useFrame(() => {
    if (groupRef.current) {
      // Calculate scroll progress (0 to 1)
      const maxScroll = 500; // Adjust this value to control how much scroll affects the animation
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      // Target values based on scroll
      const targetRotationX = -0.5 + (scrollProgress * 0.5); // From -0.5 to 0 (straight)
      const targetScale = 2 - (scrollProgress * 1); // From 2 to 1 (scale down)
      const targetY = 0 - (scrollProgress * 0.5); // Move down slightly

      // damping - lower value = more damping
      const dampingFactor = 0.3;

      // damped animations
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * dampingFactor;
      groupRef.current.scale.x += (targetScale - groupRef.current.scale.x) * dampingFactor;
      groupRef.current.scale.y += (targetScale - groupRef.current.scale.y) * dampingFactor;
      groupRef.current.scale.z += (targetScale - groupRef.current.scale.z) * dampingFactor;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * dampingFactor;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        position={position}
      />
      <ScreenVideo />
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Product lighting setup */}
      <ambientLight intensity={0.4} />
      {/* Key light - main light from top-right */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      {/* Fill light - soften shadows from left */}
      <directionalLight position={[-3, 2, 3]} intensity={0.4} />
      {/* Rim light - highlight edges from behind */}
      <directionalLight position={[0, 2, -5]} intensity={0.6} />
      {/* Subtle colored accent lights */}
      <pointLight position={[3, 0, 2]} intensity={0.3} color="#4a9eff" />
      <pointLight position={[-3, 0, 2]} intensity={0.2} color="#ffffff" />

      <Model />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

// Preload the model
useGLTF.preload('/Iphone17.glb');

export default function Hero3DBackground() {
  return (
    <div id="iphone-canvas" className="w-full h-screen">
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
