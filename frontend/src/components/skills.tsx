'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp } from 'lucide-react'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Python', level: 90, experience: '2+ years' },
      { name: 'Machine Learning', level: 85, experience: '1+ year' },
      { name: 'TensorFlow/PyTorch', level: 80, experience: '1+ year' },
      { name: 'Natural Language Processing', level: 85, experience: '1+ year' },
      { name: 'Computer Vision', level: 75, experience: '1+ year' }
    ]
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      { name: 'Pandas/NumPy', level: 88, experience: '2+ years' },
      { name: 'Data Visualization', level: 85, experience: '1+ year' },
      { name: 'PowerBI', level: 80, experience: '1+ year' },
      { name: 'Statistical Analysis', level: 75, experience: '1+ year' },
      { name: 'SQL', level: 85, experience: '2+ years' }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', level: 88, experience: '2+ years' },
      { name: 'Node.js/Express', level: 85, experience: '2+ years' },
      { name: 'JavaScript/TypeScript', level: 90, experience: '2+ years' },
      { name: 'MongoDB', level: 80, experience: '1+ year' },
      { name: 'REST APIs', level: 85, experience: '2+ years' }
    ]
  },
  {
    title: 'AI Tools & Technologies',
    skills: [
      { name: 'ChatGPT/OpenAI API', level: 85, experience: '1+ year' },
      { name: 'AI Automation', level: 80, experience: '1+ year' },
      { name: 'Docker', level: 75, experience: '1+ year' },
      { name: 'Git/GitHub', level: 95, experience: '2+ years' },
      { name: 'Jupyter Notebooks', level: 85, experience: '1+ year' }
    ]
  }
]

const softSkills = [
  {
    skill: 'Problem Solving',
    description: 'Breaking down complex problems into manageable solutions'
  },
  {
    skill: 'Team Collaboration',
    description: 'Working effectively with cross-functional teams'
  },
  {
    skill: 'Communication',
    description: 'Explaining technical concepts to non-technical stakeholders'
  },
  {
    skill: 'Project Management',
    description: 'Leading projects from conception to deployment'
  },
  {
    skill: 'Continuous Learning',
    description: 'Staying updated with latest technologies and best practices'
  },
  {
    skill: 'Mentoring',
    description: 'Guiding junior developers and sharing knowledge'
  }
]

export function Skills() {
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and soft skills 
            developed through years of hands-on experience.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  {category.title}
                </h4>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.experience}
                          </span>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.skill}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I&apos;m constantly learning new 
            technologies, improving existing skills, and staying ahead of industry trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Hours Learning/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-blue-200">Certifications Earned</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
