"use client";

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ContactForm from '@/components/ContactForm'
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false });
import { Github, Linkedin, ExternalLink } from 'lucide-react'

// Velog 아이콘 (간단히 'V'로 표시)
function VelogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4 4l8 16 8-16H4z"/>
    </svg>
  );
}


import { projects, Project } from '@/data/projects';

// 스킬 인터페이스
interface Skill {
  name: string;
  proficiency: number; // 0 ~ 100
}
interface SkillCategory {
  name: string;
  skills: Skill[];
}

// 스킬 목록
const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 95 },
      { name: 'SCSS', proficiency: 90 },
      { name: 'JavaScript', proficiency: 90 },
      { name: 'TypeScript', proficiency: 80 },
      { name: 'React', proficiency: 90 },
      { name: 'Next.js', proficiency: 80 },
      { name: 'Tailwind', proficiency: 90 },
      { name: 'Styled-Components', proficiency: 70 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Java', proficiency: 50 },
      { name: 'Python', proficiency: 50 },
      { name: 'PHP', proficiency: 65 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MySQL', proficiency: 80 },
      { name: 'Oracle', proficiency: 70 },
      { name: 'PostgreSQL', proficiency: 70 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', proficiency: 85 },
      { name: 'GitHub', proficiency: 85 },
      { name: 'VS Code', proficiency: 90 },
      { name: 'IntelliJ', proficiency: 95 },
      { name: 'Webpack', proficiency: 70 },
      { name: 'Notion', proficiency: 85 },
      { name: 'Slack', proficiency: 90 },
      { name: 'Supabase', proficiency: 70 },
      { name: 'AWS', proficiency: 50 },
    ],
  },
];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  // 스킬 섹션 탭
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <ParallaxProvider>
      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="w-full h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
        >
          <ThreeScene />

          <Parallax speed={-10} className="absolute inset-0">
            <div className="w-full h-full bg-[url('/path/to/your/bg-pattern.png')] opacity-20" />
          </Parallax>

          <div className="relative z-10 text-center p-4 max-w-3xl">
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ letterSpacing: '0.1em' }}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Frontend Developer 원도훈
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

        {/* Wave Divider */}
        <div className="relative -mt-1">
          <svg
            className="w-full h-16 text-gray-50 dark:text-gray-900 rotate-180"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">About</h2>
          <div className="bg-gradient-to-tr from-white via-gray-100 to-white dark:from-gray-800 dark:to-gray-900 dark:via-gray-700 rounded-lg p-10 shadow-lg">
            <p className="text-xl leading-relaxed mb-10">
              저는 프론트엔드 개발자로서 다양한 웹 환경에서 사용자에게 매끄러운 경험을 제공하는 데에 열정을 가지고 있습니다.
              JavaScript와 React를 기반으로 프로젝트를 수행해왔으며, Next.js를 통해 서버사이드 렌더링과 최적화를 더욱 강화했습니다.
              탄탄한 기초와 꼼꼼한 디버깅 능력을 바탕으로 유지보수성과 확장성을 고려한 코드를 작성하고자 노력합니다.
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
              { company: '케이스랩', period: '정규직 1개월', tech: 'HTML, CSS, JS, jQuery, PHP, Vue' },
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="glass-card shadow-md rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                  {exp.company}
                </h3>
                <p className="text-lg mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.tech}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories */}
            <div className="md:w-1/4">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.name}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 font-semibold transition ${
                    activeCategory === category.name
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:dark:bg-indigo-800'
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Skills */}
            <div className="md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {skillCategories
                    .find((category) => category.name === activeCategory)
                    ?.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="glass-card rounded-lg p-4 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                          Proficiency: {skill.proficiency}%
                        </p>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto py-32 px-4">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Projects
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
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={i}
                className="p-6 glass-card shadow-lg rounded-lg flex flex-col items-start justify-between transform hover:scale-105 transition duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
                }}
              >
                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                {/* 짧은 설명 */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                {/* 카드 하단에 스택 일부 표시 (최대 4개) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack?.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 4 && (
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 px-6 py-2 bg-indigo-600 text-white dark:bg-indigo-500 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  자세히 보기
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 모달을 한 번만 정의: AnimatePresence로 감싸기 */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-20 flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="glass-card p-8 rounded-lg w-full max-w-md relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h3 className="text-3xl font-bold mb-6">{selectedProject.name}</h3>

                {/* 프로젝트 상세 설명 */}
                {selectedProject.description && (
                  <p className="mb-6 text-lg">{selectedProject.description}</p>
                )}

                {/* 기술 스택 전체 표시 */}
                {selectedProject.techStack && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">기술 스택</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 깃허브 / 사이트 방문 링크 */}
                <div className="flex gap-4 flex-wrap mt-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-semibold flex items-center"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-indigo-600 text-white dark:bg-indigo-500 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition text-sm font-semibold flex items-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      사이트 방문
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact 섹션 */}
        <section id="contact" className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="mb-12 text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            아래 폼을 통해 언제든지 문의하실 수 있습니다.
          </motion.p>
          <div className="glass-card rounded-2xl shadow-xl p-6 sm:p-10 mb-12">
            <ContactForm />
          </div>

          {/* 소셜 링크들 */}
          <div className="flex justify-center space-x-4 mt-12">
            <a
              href="https://github.com/wdohoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href="https://velog.io/@wdohoon/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white dark:bg-green-500 rounded-full hover:bg-green-700 dark:hover:bg-green-400 transition text-sm font-medium"
            >
              <VelogIcon className="w-5 h-5 mr-2" />
              Velog
            </a>
            <a
              href="https://www.linkedin.com/in/%EB%8F%84%ED%9B%88-%EC%9B%90-313000341/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 rounded-full hover:bg-blue-700 dark:hover:bg-blue-400 transition text-sm font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
