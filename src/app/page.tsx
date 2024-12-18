"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import * as THREE from 'three'
import ContactForm from '@/components/ContactForm'
import { Github, Linkedin } from 'lucide-react'

// Velog 아이콘 (간단히 'V'로 표시)
function VelogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4 4l8 16 8-16H4z"/>
    </svg>
  );
}

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
    description: "React 기반으로 영화 API를 연동한 영화 정보 사이트, Netlify 배포."
  },
  {
    name: "이루다몰(클래시스몰)",
    live: "https://classysshop.com/",
    description: "회사 재직 중 제작한 상업용 사이트."
  },
  {
    name: "TeamHope",
    live: "http://www.teamhope.co.kr/",
    description: "회사에서 제작한 기업용 사이트."
  },
  {
    name: "Bhidex",
    live: "https://bhidex.gabia.io/",
    description: "전문 사이트 개발 경험."
  },
  {
    name: "사주보궁",
    live: "http://saju79.net/",
    description: "사주/운세 서비스 사이트."
  },
  {
    name: "마더스 제약",
    live: "http://www.mtspharm.co.kr/",
    description: "제약 관련 사이트 구축."
  },
  {
    name: "한식세끼",
    live: "https://xn--h10b903achbe83b.com/",
    description: "한국 음식 관련 상업 사이트."
  },
  {
    name: "Moden7ai",
    live: "http://moden7ai.com",
    description: "회사 홍보 서비스 프로젝트."
  },
  {
    name: "Kidb",
    live: "https://www.kidb.com/",
    description: "기업 정보 관련 프로젝트."
  },
  {
    name: "종로학원",
    live: "https://www.jongro.co.kr/",
    description: "유지보수 및 기능 개선."
  },
  {
    name: "셀트리온",
    live: "https://www.celltrion.com",
    description: "바이오테크 기업 웹사이트 유지보수."
  },
  {
    name: "Kacelab 포트폴리오",
    live: "https://www.kacelab.com/Work.php",
    description: "Kacelab 포트폴리오 섹션 작업."
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
          <Canvas className="absolute inset-0 !h-1/2">
            <ambientLight intensity={0.5}/>
            <directionalLight position={[2, 5, 5]}/>
            <RotatingBox/>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}/>
          </Canvas>

          <Parallax speed={-10} className="absolute inset-0">
            <div className="w-full h-full bg-[url('/path/to/your/bg-pattern.png')] opacity-20"/>
          </Parallax>

          <div className="relative z-10 text-center p-4 max-w-3xl">
            <motion.h1
              className="text-5xl font-extrabold mb-6 text-white"
              style={{letterSpacing: '0.1em'}}
              initial={{opacity: 0, y: 50}}
              animate={heroInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 1, delay: 0.2}}
            >
              안녕하세요, 원도훈입니다.
            </motion.h1>
            <motion.p
              className="text-2xl mb-10 text-white/90"
              initial={{opacity: 0, y: 50}}
              animate={heroInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 1, delay: 0.7}}
            >
              React, Next.js로 최신화된 웹 경험을 만듭니다.
            </motion.p>
            <motion.a
              href="#projects"
              className="px-10 py-4 bg-white text-[#302b63] rounded-full hover:bg-indigo-100 transition inline-block text-lg font-semibold shadow-lg hover:shadow-xl"
              initial={{opacity: 0, y: 50}}
              animate={heroInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 1, delay: 1.2}}
            >
              프로젝트 보러가기
            </motion.a>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative -mt-1">
          <svg className="w-full h-16 text-gray-50 dark:text-gray-900 rotate-180" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="currentColor" d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">About</h2>
          <div className="bg-gradient-to-tr from-white via-gray-100 to-white dark:from-gray-800 dark:to-gray-900 dark:via-gray-700 rounded-lg p-10 shadow-lg">
            <p className="text-xl leading-relaxed mb-10">
              저는 프론트엔드 개발자로서 다양한 웹 환경에서 사용자에게 즐거운 경험을 제공하고자 합니다.
              HTML, CSS, JavaScript, jQuery 기반으로 시작해, React, Next.js, Three.js 등으로 확장하며
              시각적이고 몰입감 있는 인터페이스를 구현합니다.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { company: 'itso', period: '인턴 1개월', tech: 'HTML, CSS, JS, jQuery' },
              { company: '모든세븐', period: '정규직 6개월', tech: 'HTML, CSS, JS, jQuery, MySQL, PHP' },
              { company: '케이스랩', period: '정규직 1개월', tech: 'HTML, CSS, JS, jQuery, PHP, Vue' }
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{exp.company}</h3>
                <p className="text-lg mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.tech}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {['HTML','CSS','SCSS','JavaScript','TypeScript','React','Next.js','Tailwind','Styled-Components','Three.js','Java','Python','PHP','MySQL','Oracle','PostgreSQL','Git','GitHub','VS Code','IntelliJ','Webpack','Notion','Slack','Supabase','AWS'].map((skill, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-sm font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-sm hover:shadow-md hover:bg-indigo-100 hover:dark:bg-indigo-800 transition transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={{
              hidden: {opacity: 0},
              visible: {
                opacity: 1,
                transition: {staggerChildren: 0.1}
              }
            }}
          >
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={i}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-start justify-between transform hover:scale-105 transition duration-300"
                variants={{
                  hidden: {opacity: 0, y: 50},
                  visible: {opacity: 1, y: 0, transition: {type: 'spring', stiffness: 50}}
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

        <section id="contact" className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8 text-center"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
          >
            Contact
          </motion.h2>
          <motion.p
            className="mb-12 text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7, delay: 0.2}}
          >
            아래 폼을 통해 언제든지 문의하실 수 있습니다.
          </motion.p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 mb-12">
            <ContactForm/>
          </div>

          <div className="flex justify-center space-x-4 mt-12">
            <a
              href="https://github.com/wdohoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-medium"
            >
              <Github className="w-5 h-5 mr-2"/>
              GitHub
            </a>
            <a
              href="https://velog.io/@wdohoon/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white dark:bg-green-500 rounded-full hover:bg-green-700 dark:hover:bg-green-400 transition text-sm font-medium"
            >
              <VelogIcon className="w-5 h-5 mr-2"/>
              Velog
            </a>
            <a
              href="https://www.linkedin.com/in/%EB%8F%84%ED%9B%88-%EC%9B%90-313000341/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-400 transition text-sm font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2"/>
              LinkedIn
            </a>
          </div>
        </section>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-20 flex items-center justify-center bg-black/70"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md relative"
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.8, opacity: 0}}
                transition={{type: 'spring', stiffness: 100}}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                <h3 className="text-3xl font-bold mb-6">{selectedProject.name}</h3>
                {selectedProject.description && <p className="mb-6 text-lg">{selectedProject.description}</p>}
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                       className="px-6 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-semibold flex items-center">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                       className="px-6 py-3 bg-indigo-600 text-white dark:bg-indigo-500 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition text-sm font-semibold flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6..."/>
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
