// components/Logo3D.tsx
"use client";

import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import React from 'react'

function LogoModel() {
  const { scene } = useGLTF('/computer_gltf/scene.gltf') as any;
  return <primitive object={scene} scale={0.5} />;
}

export default function Logo3D() {
  return (
    <div className="w-10 h-10 relative">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} />
        <LogoModel />
      </Canvas>
    </div>
  );
}
