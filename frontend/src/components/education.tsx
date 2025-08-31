'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Technology in Artificial Intelligence & Data Science',
    institution: 'Marathwada Mitra Mandal\'s College of Engineering (MMCOE)',
    location: 'Pune, Maharashtra, India',
    period: '2023 - 2027',
    gpa: 'In Progress',
    description: 'Comprehensive study of Artificial Intelligence, Data Science, Machine Learning, and modern programming paradigms with hands-on project experience in AI/ML applications.',
    coursework: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science & Analytics',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Python Programming',
      'Statistics & Probability'
    ],
    achievements: [
      'Active participant in hackathons and coding competitions',
      'Developed AI-powered projects including hate speech detection',
      'Co-developed language learning platform using AI',
      'Participated in Accenture Hackathon for elderly care system',
      'Completed SIH project on AI-powered code transpiler'
    ],
    website: 'https://mmcoe.edu.in'
  },
  {
    degree: 'Higher Secondary Education (12th Grade)',
    institution: 'VBPS',
    location: 'India',
    period: '2021 - 2023',
    gpa: null,
    description: 'Completed higher secondary education with focus on Science stream, building foundation for engineering studies.',
    coursework: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Computer Science',
      'English'
    ],
    achievements: [
      'Strong foundation in mathematics and science',
      'Early exposure to programming concepts',
      'Qualified for engineering entrance examinations'
    ],
    website: '#'
  }
]

const onlineLearning = [
  {
    course: 'AI Tools Certification',
    provider: 'Be10x',
    completed: '2024',
    skills: ['AI Tools', 'ChatGPT', 'AI Automation', 'Prompt Engineering']
  },
  {
    course: 'PowerBI Certification',
    provider: 'Be10x',
    completed: '2024',
    skills: ['PowerBI', 'Data Visualization', 'Business Intelligence', 'Dashboard Creation']
  }
]

export function Education() {
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
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational journey combining formal computer science education 
            with continuous self-directed learning.
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Formal Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      {edu.website && (
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span>{edu.location}</span>
                      {edu.gpa && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Coursework:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Achievements:
                    </h5>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start space-x-2"
                        >
                          <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Online Learning */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Continuous Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {onlineLearning.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {course.course}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    {course.completed}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">
                  {course.provider}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Learning Philosophy
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            I believe that learning never stops in technology, especially in the rapidly evolving field of AI and Data Science. 
            I dedicate time each week to exploring new AI technologies, reading research papers, and working on innovative 
            projects. This continuous learning approach helps me stay current with the latest developments in artificial 
            intelligence and deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
