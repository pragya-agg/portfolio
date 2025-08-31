'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Lightbulb, Target, Zap, Shield } from 'lucide-react'

const coreValues = [
  {
    icon: Heart,
    title: 'Empathy & User-Centricity',
    description: 'Every line of code I write is in service of creating meaningful experiences for real people.',
    principles: [
      'Always consider the end user&apos;s perspective',
      'Design with accessibility and inclusion in mind',
      'Gather and act on user feedback continuously',
      'Prioritize user needs over technical preferences'
    ],
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Creativity',
    description: 'I believe in pushing boundaries while maintaining practical, sustainable solutions.',
    principles: [
      'Embrace new technologies and methodologies',
      'Question conventional approaches when needed',
      'Balance innovation with stability and reliability',
      'Share knowledge to inspire others&apos; creativity'
    ],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Users,
    title: 'Collaboration & Communication',
    description: 'Great software is built by great teams. I value open communication and collective growth.',
    principles: [
      'Listen actively and communicate clearly',
      'Share knowledge and mentor others',
      'Embrace diverse perspectives and ideas',
      'Build consensus while maintaining momentum'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Target,
    title: 'Excellence & Attention to Detail',
    description: 'Quality is not negotiable. I strive for excellence in every aspect of my work.',
    principles: [
      'Write clean, maintainable, and testable code',
      'Pay attention to performance and optimization',
      'Implement comprehensive testing strategies',
      'Document code and processes thoroughly'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Zap,
    title: 'Agility & Continuous Learning',
    description: 'The tech landscape evolves rapidly. I embrace change and commit to lifelong learning.',
    principles: [
      'Stay curious and embrace new challenges',
      'Adapt quickly to changing requirements',
      'Learn from failures and iterate rapidly',
      'Contribute to open source and tech communities'
    ],
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Shield,
    title: 'Integrity & Reliability',
    description: 'Trust is earned through consistent delivery and transparent communication.',
    principles: [
      'Be honest about capabilities and timelines',
      'Take ownership of mistakes and learn from them',
      'Deliver on commitments consistently',
      'Maintain ethical standards in all work'
    ],
    color: 'from-gray-600 to-gray-800'
  }
]

const workingPrinciples = [
  {
    title: 'Code with Purpose',
    description: 'Every feature should solve a real problem and add genuine value.'
  },
  {
    title: 'Fail Fast, Learn Faster',
    description: 'Embrace experimentation and rapid iteration to discover the best solutions.'
  },
  {
    title: 'Simplicity Over Complexity',
    description: 'Choose the simplest solution that meets requirements effectively.'
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Use metrics and user feedback to guide product and technical decisions.'
  },
  {
    title: 'Security by Design',
    description: 'Build security considerations into every layer of the application.'
  },
  {
    title: 'Sustainable Development',
    description: 'Write code that can be maintained and extended by future team members.'
  }
]

export function Values() {
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
            Values & Principles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The core beliefs and principles that guide my approach to software 
            development and collaboration.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Principles */}
                  <div className="space-y-3">
                    {value.principles.map((principle, principleIndex) => (
                      <div
                        key={principleIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${value.color} mt-2 flex-shrink-0`} />
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {principle}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Working Principles */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Working Principles
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Practical guidelines that shape how I approach projects and make 
              technical decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Values in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-100">
                  In Development
                </h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Write comprehensive tests before shipping features</li>
                  <li>• Conduct thorough code reviews with constructive feedback</li>
                  <li>• Document architectural decisions and trade-offs</li>
                  <li>• Prioritize accessibility in UI/UX implementation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-100">
                  In Collaboration
                </h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Share knowledge through mentoring and tech talks</li>
                  <li>• Advocate for inclusive team practices and decisions</li>
                  <li>• Provide honest timeline estimates with buffer for quality</li>
                  <li>• Actively listen to diverse perspectives in planning</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-blue-400">
              <p className="text-blue-100 max-w-2xl mx-auto">
                These values aren&apos;t just ideals—they&apos;re the foundation of how I work 
                every day. They guide my technical decisions, shape my interactions with 
                teammates, and drive my commitment to creating software that truly matters.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
