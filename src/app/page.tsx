"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import * as THREE from 'three'
import ContactForm from '@/components/ContactForm'

function RotatingBox() {
  const ref = useRef<THREE.Mesh>(null)
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.003
      ref.current.rotation.y += 0.003
    }
  })

  const color = `hsl(${hue}, 100%, 50%)`

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

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

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <ParallaxProvider>
      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="w-full h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
        >
          {/* 3D Canvas Background (상단 1/2만 차지) */}
          <Canvas className="absolute inset-0 !h-1/2">
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 5]} />
            <RotatingBox />
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
          </Canvas>

          {/* Parallax Background Pattern */}
          <Parallax speed={-10} className="absolute inset-0">
            <div className="w-full h-full bg-[url('/path/to/your/bg-pattern.png')] opacity-20" />
          </Parallax>

          <div className="relative z-10 text-center p-4 max-w-3xl">
            <motion.h1
              className="text-5xl font-extrabold mb-6 text-white"
              style={{ letterSpacing: '0.1em' }}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              안녕하세요, 원도훈입니다.
            </motion.h1>
            <motion.p
              className="text-2xl mb-10 text-white/90"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              React, Next.js로 최신화된 웹 경험을 만듭니다.
            </motion.p>
            <motion.a
              href="#projects"
              className="px-10 py-4 bg-white text-[#302b63] rounded-full hover:bg-indigo-100 transition inline-block text-lg font-semibold shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              프로젝트 보러가기
            </motion.a>
          </div>
        </section>

        {/* About 섹션 */}
        <section id="about" className="max-w-7xl mx-auto py-32 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">소개</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
            <p className="text-xl leading-relaxed mb-10">
              저는 프론트엔드 개발자로서 다양한 웹 환경에서 사용자에게 즐거운 경험을 제공하고자 합니다.
              HTML, CSS, JavaScript, jQuery 기반으로 시작해, React, Next.js, Three.js 등으로 확장하며
              시각적이고 몰입감 있는 인터페이스를 구현합니다.
            </p>
            <h3 className="text-3xl font-semibold mb-6">경력</h3>
            <ul className="list-disc list-inside mb-10 text-lg space-y-2">
              <li><strong className="text-indigo-600 dark:text-indigo-400">itso (인턴 1개월)</strong> - HTML, CSS, JS, jQuery 활용</li>
              <li><strong className="text-indigo-600 dark:text-indigo-400">모든세븐 (정규직 6개월)</strong> - HTML, CSS, JS, jQuery, MySQL, PHP 기반 웹사이트 개발</li>
              <li><strong className="text-indigo-600 dark:text-indigo-400">케이스랩 (정규직 1개월)</strong> - HTML, CSS, JS, jQuery, PHP, Vue를 통한 웹페이지 개선</li>
            </ul>

            <h3 className="text-3xl font-semibold mb-6">기술 스택</h3>
            <div className="space-y-6 text-lg">
              <p><strong className="text-indigo-600 dark:text-indigo-400">프론트엔드:</strong> HTML, CSS, SCSS, JavaScript, TypeScript, React, Next.js, Tailwind,
                Styled-Components, Three.js</p>
              <p><strong className="text-indigo-600 dark:text-indigo-400">백엔드:</strong> Java, Python, PHP</p>
              <p><strong className="text-indigo-600 dark:text-indigo-400">데이터베이스:</strong> MySQL, Oracle, PostgreSQL</p>
              <p><strong className="text-indigo-600 dark:text-indigo-400">도구:</strong> Git, GitHub, VS Code, IntelliJ, Webpack, Notion, Slack, Supabase, AWS</p>
            </div>
          </div>
        </section>

        {/* Projects 섹션 */}
        <section id="projects" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            프로젝트
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={i}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-start justify-between transform hover:scale-105 transition duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
                }}
              >
                <h3 className="font-bold text-xl mb-4">{project.name}</h3>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto px-6 py-3 bg-indigo-600 text-white dark:bg-indigo-500 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  자세히 보기
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="mb-8 text-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            아래 폼을 통해 언제든지 문의하실 수 있습니다.
          </motion.p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <ContactForm />
          </div>

          {/* 소셜 링크 섹션 */}
          <div className="text-center space-x-4 mt-12">
            <a href="https://github.com/wdohoon" target="_blank" rel="noopener noreferrer"
               className="inline-block px-6 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-semibold">
              GitHub
            </a>
            <a href="https://velog.io/@wdohoon/posts" target="_blank" rel="noopener noreferrer"
               className="inline-block px-6 py-3 bg-green-600 text-white dark:bg-green-500 rounded-full hover:bg-green-700 dark:hover:bg-green-400 transition text-sm font-semibold">
              Velog
            </a>
            <a href="https://www.linkedin.com/in/%EB%8F%84%ED%9B%88-%EC%9B%90-313000341/" target="_blank" rel="noopener noreferrer"
               className="inline-block px-6 py-3 bg-blue-600 text-white dark:bg-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-400 transition text-sm font-semibold">
              LinkedIn
            </a>
          </div>
        </section>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="text-3xl font-bold mb-6">{selectedProject.name}</h3>
                {selectedProject.description && <p className="mb-6 text-lg">{selectedProject.description}</p>}
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                       className="px-6 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-semibold flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.9…"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                       className="px-6 py-3 bg-indigo-600 text-white dark:bg-indigo-500 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition text-sm font-semibold flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 …"/>
                      </svg>
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
