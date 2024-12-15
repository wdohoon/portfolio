import React from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: {
    name: string
    description?: string
    github?: string
    live?: string
  }
  onClick: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-start justify-between transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-xl mb-2">{project.name}</h3>
      {project.description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      )}
      <button
        onClick={onClick}
        className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition transform hover:scale-105"
      >
        자세히 보기
      </button>
    </motion.div>
  )
}

