"use client";

import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three';
import ContactForm from '@/components/ContactForm'

function ComputerModel() {
  const { scene } = useGLTF('/computer_gltf/scene.gltf') as any;
  return <primitive object={scene} scale={0.3} />;
}

type Project = {
  name: string;
  github?: string;
  live?: string;
  description?: string;
};

const projects: Project[] = [
  {
    name: "Movie DH",
    github: "https://github.com/wdohoon/Movie",
    live: "https://glittering-torrone-89e130.netlify.app/",
    description: "React 기반으로 영화 API를 연동하여 제작한 영화 정보 사이트로, Netlify에 배포되었습니다."
  },

  // 회사에서 직접 제작한 사이트들
  {
    name: "이루다몰(클래시스몰)",
    live: "https://classysshop.com/",
    description: "회사 재직 중 제작한 상업용 사이트입니다."
  },
  {
    name: "TeamHope",
    live: "http://www.teamhope.co.kr/",
    description: "회사에서 제작한 기업용 사이트입니다."
  },
  {
    name: "Bhidex",
    live: "https://bhidex.gabia.io/",
    description: "회사 프로젝트로 진행한 전문 사이트 개발 경험이 있습니다."
  },
  {
    name: "사주보궁",
    live: "http://saju79.net/",
    description: "사주/운세 서비스를 제공하는 사이트로 회사에서 개발했습니다."
  },
  {
    name: "마더스 제약",
    live: "http://www.mtspharm.co.kr/",
    description: "회사 재직 중 제약 관련 사이트를 구축했습니다."
  },
  {
    name: "한식세끼",
    live: "https://xn--h10b903achbe83b.com/",
    description: "한국 음식 관련 상업 사이트를 회사에서 제작했습니다."
  },
  {
    name: "Moden7ai",
    live: "http://moden7ai.com",
    description: "특수한 서비스를 제공하는 프로젝트를 회사에서 진행했습니다."
  },
  {
    name: "Kidb",
    live: "https://www.kidb.com/",
    description: "기업 정보 관련 회사 프로젝트를 수행했습니다."
  },

  // 유지보수했던 사이트
  {
    name: "종로학원",
    live: "https://www.jongro.co.kr/",
    description: "회사에서 유지보수를 담당하며 기능 개선 및 업데이트를 진행했습니다."
  },
  {
    name: "셀트리온",
    live: "https://www.celltrion.com",
    description: "바이오테크 기업 셀트리온 웹사이트 유지보수 및 업데이트에 참여했습니다."
  },

  // Kacelab 작업 사이트
  {
    name: "Kacelab 포트폴리오",
    live: "https://www.kacelab.com/Work.php",
    description: "Kacelab 포트폴리오 내 Asen Loxsa, Kia Cpo, Jungmin Tax, ArtData, Bank X Planplanet 섹션 작업에 참여했습니다."
  },
];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Hero 섹션 */}
      <section id="hero"
               className="w-full h-screen relative flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5}/>
          <directionalLight position={[2, 5, 5]}/>
          <ComputerModel/>
          <OrbitControls enablePan={false} enableZoom={false}/>
        </Canvas>
      </section>

      <section id="introduce"
               className="w-full h-screen relative flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="relative z-10 text-center p-4">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
          >
            안녕하세요, 프론트엔드 개발자 원도훈입니다.
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.2}}
          >
            React, Next.js를 비롯한 최신 웹 기술과 3D 웹 경험을 구현하는 데에 전문성을 갖추고 있습니다.
          </motion.p>
          <motion.a
            href="#projects"
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.4}}
          >
            프로젝트 보러가기
          </motion.a>
        </div>
      </section>

      {/* About 섹션 */}
      <section id="about" className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
        >
          소개
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          저는 프론트엔드 개발자로서 인터랙티브하고 몰입감 있는 웹 경험을 만드는 것에 열정을 갖고 있습니다.
          React, Next.js, Three.js 등 다양한 기술 스택을 활용하며,
          새로운 기술을 탐구하고 적극적으로 프로젝트에 적용하는 것을 즐깁니다.
        </motion.p>
      </section>

      {/* Skills 섹션 */}
      <section id="skills" className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
        >
          보유 기술
        </motion.h2>

        {/* Front-End Skills */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.2}}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">프론트엔드</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["HTML","CSS","SCSS","JavaScript","React","Next.js","Tailwind","Styled-Components","TypeScript"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Back-End Skills */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.4}}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">백엔드</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Java","Python","PHP"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Database Skills */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.6}}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">데이터베이스</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["MySQL","Oracle","PostgreSQL"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.8}}
        >
          <h3 className="text-2xl font-semibold mb-4">툴 / 도구</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Git","GitHub","VS Code","IntelliJ","Webpack","Notion","Slack","Supabase","AWS"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects 섹션 */}
      <section id="projects"
               className="max-w-7xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
        >
          프로젝트
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          {projects.map((project, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 shadow rounded flex flex-col items-start justify-between">
              <h3 className="font-bold mb-4">{project.name}</h3>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-auto px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition"
              >
                자세히 보기
              </button>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
        >
          연락하기
        </motion.h2>
        <motion.p
          className="mb-4"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          아래 채널을 통해 언제든지 문의하실 수 있습니다.
        </motion.p>
        <motion.ul
          className="space-y-2"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.4}}
        >
          <li>Email: <a href="mailto:dnjsehgns98@gmail.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline">dnjsehgns98@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/wdohoon"
                         className="text-blue-600 dark:text-blue-400 hover:underline">github.com/wdohoon</a></li>
          <li>Velog: <a href="https://velog.io/@wdohoon/posts"
                        className="text-blue-600 dark:text-blue-400 hover:underline">velog.io/@wdohoon/posts</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/도훈-원-313000341/"
                           className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn 프로필</a></li>
        </motion.ul>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.6}}
        >
          <ContactForm/>
        </motion.div>
      </section>

      {/* 모달 구현 */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded w-full max-w-md relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            {selectedProject.description && <p className="mb-4 text-sm">{selectedProject.description}</p>}
            <div className="flex gap-4 flex-wrap">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm">
                  GitHub
                </a>
              )}
              {selectedProject.live && (
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2 bg-green-600 text-white dark:bg-green-400 dark:text-black rounded hover:bg-green-700 dark:hover:bg-green-300 transition text-sm">
                  사이트 방문
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
