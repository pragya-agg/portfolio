'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Pause } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const featuredProjects = [
  {
    id: 1,
    title: 'Accenture Hackathon – Elderly Care System',
    description: 'Comprehensive care management system for elderly patients with health monitoring, medication tracking, and emergency alerts.',
    image: '/projects/elderly-care.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'IoT', 'Healthcare APIs'],
    metrics: {
      achievement: 'Hackathon Project',
      focus: 'Healthcare Technology',
      impact: 'Patient Care Management'
    },
    links: {
      demo: 'https://elderly-care-demo.com',
      github: 'https://github.com/pragya-agg/ELDERLY-CARE',
      video: '/videos/elderly-care-demo.mp4',
      
    },
    featured: true
  },
  {
    id: 2,
    title: 'Transpiler – AI-Powered Code Converter',
    description: 'Dockerized online tool to convert code between languages (Python ↔ C++) with AI-assisted debugging and secure sandboxed execution.',
    image: '/projects/transpiler.svg',
    technologies: ['Python', 'C++', 'Docker', 'OpenAI API', 'React', 'Node.js'],
    metrics: {
      performance: 'SIH Project - 3rd Semester',
      security: 'Secure Sandboxed Environment',
      features: 'Multi-language Support'
    },
    links: {
      demo: '#',
      github: 'https://github.com/pragya-agg/transpiler',
      
    },
    featured: true
  },
  {
    id: 3,
    title: 'Varnanetra – AI Language Learning Platform',
    description: 'AI-powered language learning platform with personalized grammar and pronunciation training using React.js and FastAPI.',
    image: '/projects/varnanetra.svg',
    technologies: ['React', 'FastAPI', 'Python', 'AI/ML', 'Authentication'],
    metrics: {
      collaboration: 'Co-developed Project',
      features: 'Personalized Learning',
      security: 'Secure Implementation'
    },
    links: {
      demo: '#',
      github: 'https://github.com/pragya-agg/varnanetra',
      
    },
    featured: true
  }
  
]

export function FeaturedProjects() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const toggleVideo = (projectId: number) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId)
  }

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing real-world applications with measurable impact, clean code, 
            and modern development practices.
          </p>
          <Link 
            href="/projects"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                    {playingVideo === project.id && project.links.video ? (
                      // Video Player
                      <div className="aspect-video relative">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          onEnded={() => setPlayingVideo(null)}
                        >
                          <source src={project.links.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button
                          onClick={() => setPlayingVideo(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      // Project Preview with actual image
                      <div className="aspect-video relative">
                        {!imageErrors[project.id] && project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(project.id)}
                          />
                        ) : (
                          // Fallback placeholder
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <div className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                              {project.title} Preview
                            </div>
                          </div>
                        )}
                        {/* Video play button overlay - only show if project has video */}
                        {project.links.video && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                              onClick={() => toggleVideo(project.id)}
                              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                            >
                              <Play className="w-6 h-6 text-gray-900 ml-1" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 font-medium rounded-lg transition-colors"
                  >
                    <Github className="mr-2 w-4 h-4" />
                    Source Code
                  </a>
                  {project.links.video && (
                    <button
                      onClick={() => toggleVideo(project.id)}
                      className="inline-flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                    >
                      {playingVideo === project.id ? (
                        <>
                          <Pause className="mr-2 w-4 h-4" />
                          Hide Video
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 w-4 h-4" />
                          Demo Video
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
