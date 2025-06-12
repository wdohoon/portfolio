'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/../data/projects.json'
import type { Project } from '@/types/project'

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section ref={ref} className="max-w-7xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default function HomePage() {
  const mainProjects = (projects as Project[]).slice(0, 3)
  return (
    <div>
      <Section>
        <h1 className="text-5xl font-bold mb-6">원도훈</h1>
        <p className="text-xl mb-10">
          유저 경험을 개선하는 인터랙티브 웹을 만듭니다
        </p>
        <a href="#projects" className="text-primary">
          Explore Projects ↓
        </a>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <p className="mb-4">Frontend / Styling / Backend / Collaboration</p>
      </Section>
      <Section>
        <h2 id="projects" className="text-3xl font-semibold mb-6">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mainProjects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              image={p.image}
            />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p>2024.01~07 모든세븐 재직</p>
      </Section>
      <Section>
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="mb-4">Email: example@example.com</p>
      </Section>
    </div>
  )
}
