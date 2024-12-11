"use client";

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

// function My3DModel() {
//   // 모델이 없을 경우, 아래 코드를 RotatingCube로 대체할 수 있음
//   const { scene } = useGLTF('/models/scene.gltf') as any;
//   return <primitive object={scene} scale={1} />;
// }

// 만약 모델이 없다면:
// function RotatingCube() {
//   const ref = useRef<THREE.Mesh>(null);
//   useFrame(() => {
//     if(ref.current) {
//       ref.current.rotation.x += 0.01
//       ref.current.rotation.y += 0.01
//     }
//   })
//
//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[1,1,1]}/>
//       <meshStandardMaterial color="skyblue" />
//     </mesh>
//   )
// }

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="w-full h-screen relative flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        {/*<Canvas className="absolute inset-0">*/}
        {/*  <ambientLight intensity={0.5} />*/}
        {/*  <directionalLight position={[2,5,5]} />*/}
        {/*  <My3DModel />*/}
        {/*  <OrbitControls enablePan={false} enableZoom={false} />*/}
        {/*</Canvas>*/}
        <div className="relative z-10 text-center p-4">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello, I'm a Front-End Developer
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I specialize in React, Next.js, and 3D web experiences.
          </motion.p>
          <motion.a
            href="#projects"
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            View My Work
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am a front-end developer with a passion for creating interactive, immersive web experiences.
          My skill set includes React, Next.js, and Three.js. I enjoy exploring new technologies
          and continuously improving my craft.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
            <h3 className="font-bold mb-2">Project 1</h3>
            <p className="text-sm mb-4">A 3D interactive landing page built with Next.js and react-three-fiber.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
            <h3 className="font-bold mb-2">Project 2</h3>
            <p className="text-sm mb-4">A React-based data visualization dashboard using D3.js.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
            <h3 className="font-bold mb-2">Project 3</h3>
            <p className="text-sm mb-4">An immersive VR web experience using WebXR and Three.js.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View on GitHub</a>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out to me via the following channels:
        </motion.p>
        <motion.ul
          className="space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <li>Email: example@example.com</li>
          <li>GitHub: <a href="https://github.com/username" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/username</a></li>
          <li>LinkedIn: <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn Profile</a></li>
        </motion.ul>
      </section>
    </>
  )
}