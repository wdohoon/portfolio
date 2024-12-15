import React from 'react'
import { motion } from 'framer-motion'

interface SkillBubbleProps {
  skill: string
  index: number
}

export const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, index }) => {
  return (
    <motion.span
      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {skill}
    </motion.span>
  )
}

