'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  Cloud,
  Brain
} from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Flask', 'FastAPI', 'Express.js', 'RESTful APIs', 'Healthcare APIs'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Database',
    icon: Database,
    technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'Mongoose'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    technologies: ['Python', 'OpenAI API', 'AI/ML', 'NLP', 'NumPy', 'Pandas'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Containerization'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Specialized Technologies',
    icon: Smartphone,
    technologies: ['IoT', 'Healthcare APIs', 'C++', 'PWA', 'Responsive Design'],
    color: 'from-pink-500 to-rose-500'
  }
]

export function TechStack() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and frameworks I've mastered through hands-on project development, 
            from healthcare systems to AI-powered applications and competitive programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3" />
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Proficiencies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { skill: 'React & Frontend Development', level: 90 },
              { skill: 'Python & AI/ML', level: 88 },
              { skill: 'Node.js & Backend APIs', level: 85 },
              { skill: 'MongoDB & PostgreSQL', level: 82 },
              { skill: 'Docker & Containerization', level: 80 },
              { skill: 'OpenAI API & NLP', level: 78 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.skill}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
