"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function RotatingBox() {
  const ref = useRef<THREE.Mesh>(null);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHue((h) => (h + 1) % 360);
    }, 50);
    return () => clearInterval(id);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.003;
      ref.current.rotation.y += 0.003;
    }
  });

  const color = `hsl(${hue}, 100%, 50%)`;
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas className="absolute inset-0 !h-1/2">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 5]} />
      <RotatingBox />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
