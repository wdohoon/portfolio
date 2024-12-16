"use client";

import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import * as THREE from 'three'

interface Project {
  name: string;
  github?: string;
  live?: string;
  description?: string;
}

const projects: Project[] = [
  {
    name: "Movie DH",
    github: "https://github.com/wdohoon/Movie",
    live: "https://glittering-torrone-89e130.netlify.app/",
    description: "React 기반으로 영화 API를 연동하여 제작한 영화 정보 사이트로, Netlify에 배포되었습니다."
  },
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
  {
    name: "Kacelab 포트폴리오",
    live: "https://www.kacelab.com/Work.php",
    description: "Kacelab 포트폴리오 내 Asen Loxsa, Kia Cpo, Jungmin Tax, ArtData, Bank X Planplanet 섹션 작업에 참여했습니다."
  },
];

function ComputerModel({ scrollY }: { scrollY: MotionValue<number> }) {
  const { scene } = useGLTF('/computer_gltf/scene.gltf') as any;
  const ref = React.useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      // scrollY는 MotionValue<number>이므로 .get()을 통해 현재 값을 읽습니다.
      const currentScroll = scrollY.get();
      ref.current.rotation.y = currentScroll * 0.001;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.3} />;
}

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef(null);

  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 2000], [0, 1]);

  return (
    <ParallaxProvider>
      <div className="relative overflow-hidden">
        {/* Hero 섹션 */}
        <section id="hero"
                 className="w-full h-screen relative flex items-center justify-center bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">

          <div className="relative z-10 text-center p-4">
            <motion.h1
              className="text-5xl font-extrabold mb-4 text-white"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1}}
              style={{ letterSpacing: '0.1em' }}
            >
              안녕하세요, 프론트엔드 개발자 원도훈입니다.
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-white/90"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.5}}
            >
              React, Next.js, Three.js로 몰입감 있는 웹 경험을 만듭니다.
            </motion.p>
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 1}}
            >
              프로젝트 보러가기
            </motion.a>
          </div>
          <Parallax speed={-20} className="absolute inset-0 bg-[url('/path/to/bg-pattern.png')] opacity-30" />
        </section>

        {/* About 섹션 */}
        <section id="about" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
          >
            소개
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7, delay: 0.2}}
          >
            프론트엔드 개발자로서 인터랙티브한 웹 경험에 열정이 있습니다. 최신 웹 기술과 3D 그래픽을 활용해...
          </motion.p>
        </section>

        {/* Work Experience 섹션 */}
        <section id="experience" className="max-w-7xl mx-auto py-32 px-4 relative">
          <Parallax speed={10}>
            <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-t from-transparent to-blue-300 opacity-20"></div>
          </Parallax>
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Work Experience
          </motion.h2>
          <motion.ul
            className="space-y-4"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.3}}
          >
            <li>● ○○회사 - 프론트엔드 개발, UI/UX 개선</li>
            <li>● △△회사 - 3D 모델 적용 웹 페이지 개발</li>
            <li>● ...</li>
          </motion.ul>
        </section>

        {/* Skills 섹션 */}
        <section id="skills" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
          >
            보유 기술
          </motion.h2>
          {/* 이후 스킬 섹션 생략 또는 추가 가능 */}
        </section>

        {/* Projects 섹션 */}
        <section id="projects" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            transition={{duration:0.7}}
          >
            프로젝트
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            variants={{
              hidden: {opacity:0},
              visible: {
                opacity:1,
                transition:{staggerChildren:0.1}
              }
            }}
          >
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={i}
                className="p-4 bg-white dark:bg-gray-800 shadow rounded flex flex-col items-start justify-between"
                variants={{
                  hidden:{opacity:0,y:50},
                  visible:{opacity:1,y:0,transition:{type:'spring',stiffness:50}}
                }}
              >
                <h3 className="font-bold mb-4">{project.name}</h3>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-900 dark:hover:bg-gray-200 transition"
                >
                  자세히 보기
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7}}
          >
            연락하기
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,delay:0.2}}
          >
            아래 채널을 통해 언제든지 문의하실 수 있습니다.
          </motion.p>
          <ContactForm/>
        </section>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded w-full max-w-md relative"
                initial={{scale:0.8,opacity:0}}
                animate={{scale:1,opacity:1}}
                exit={{scale:0.8,opacity:0}}
                transition={{type:'spring',stiffness:100}}
              >
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </ParallaxProvider>
  )
}
