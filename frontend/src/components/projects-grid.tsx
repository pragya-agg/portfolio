'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
    {
    id: 4,
    title: 'Accenture Hackathon – Elderly Care System',
    description: 'Hackathon project developing a comprehensive care management system for elderly patients with health monitoring.',
    image: '/projects/elderly-care.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'IoT', 'Healthcare APIs'],
    category: ['web', 'healthcare'],
    stats: { stars: 45, forks: 12 },
    links: {
      demo: 'https://elderly-care-demo.com',
      github: 'https://github.com/pragya-agg/ELDERLY-CARE'
    }
  },
  {
    id: 1,
    title: 'Transpiler – AI-Powered Code Converter',
    description: 'SIH project that converts code between programming languages using AI, with containerized deployment.',
    image: '/projects/transpiler.svg',
    technologies: ['Python', 'OpenAI API', 'Docker', 'Flask', 'React'],
    category: ['ai', 'web'],
    stats: { stars: 89, forks: 23 },
    links: {
      demo: 'https://transpiler-demo.com',
      github: 'https://github.com/pragya-agg/transpiler'
    }
  },
  {
    id: 2,
    title: 'Varnanetra – AI Language Learning Platform',
    description: 'Co-developed AI-powered language learning platform with interactive lessons and real-time feedback.',
    image: '/projects/varnanetra.svg',
    technologies: ['React.js', 'FastAPI', 'Python', 'AI/ML', 'PostgreSQL'],
    category: ['ai', 'web', 'education'],
    stats: { stars: 124, forks: 34 },
    links: {
      demo: 'https://varnanetra-demo.com',
      github: 'https://github.com/pragya-agg/varnanetra'
    }
  },
  {
    id: 3,
    title: 'Hate Speech Detection System',
    description: 'Machine learning model to detect and classify hate speech in text using NLP techniques and ensemble methods.',
    image: '/projects/hate-speech.svg',
    technologies: ['Python', 'NumPy', 'Pandas', 'NLP', 'React', 'Node.js'],
    category: ['ml', 'web'],
    stats: { stars: 67, forks: 18 },
    links: {
      demo: 'https://hate-speech-demo.com',
      github: 'https://github.com/pragya-agg/hate-speech-detection'
    }
  },

]

export function ProjectsGrid() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden group"
        >
          {/* Project Image */}
          <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
            {!imageErrors[project.id] && project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                onError={() => handleImageError(project.id)}
              />
            ) : (
              <>
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-500/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 bg-white/20 dark:bg-black/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-lg"></div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-200 font-semibold text-sm">
                    {project.title.split('–')[0].trim()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-xs mt-1 opacity-75">
                    Project Preview
                  </div>
                </div>
              </>
            )}
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs">
                <Star className="w-3 h-3 text-yellow-500" />
                <span className="text-gray-700 dark:text-gray-300">{project.stats.stars}</span>
              </div>
              <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs">
                <GitFork className="w-3 h-3 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{project.stats.forks}</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex space-x-3">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm ml-auto"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
