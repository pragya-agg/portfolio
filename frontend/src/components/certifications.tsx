'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

const certifications = [
  {
    name: 'AI Tools Certification',
    issuer: 'Be10x',
    issued: 'August 2024',
    expires: null,
    credentialId: 'BE10X-AI-2024',
    description: 'Comprehensive certification covering AI tools, automation, and practical applications.',
    skills: ['AI Tools', 'ChatGPT', 'AI Automation', 'Prompt Engineering'],
    verificationUrl: '#',
    logo: '/certifications/be10x.png'
  },
  {
    name: 'PowerBI Certification',
    issuer: 'Be10x',
    issued: 'August 2024',
    expires: null,
    credentialId: 'BE10X-PBI-2024',
    description: 'Professional certification in data visualization and business intelligence using PowerBI.',
    skills: ['PowerBI', 'Data Visualization', 'Business Intelligence', 'Dashboard Creation'],
    verificationUrl: '#',
    logo: '/certifications/be10x.png'
  }
]

const upcomingCertifications = [
  {
    name: 'Python Advanced Learning',
    issuer: 'Udemy',
    targetDate: 'Q4 2024',
    progress: 25
  }
]

export function Certifications() {
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
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in AI tools, 
            data visualization, and modern technology platforms.
          </p>
        </motion.div>

        {/* Current Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Current Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Certificate Details */}
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Issued: {cert.issued}</span>
                    </div>
                    {cert.expires && (
                      <div className="flex items-center space-x-1">
                        <span>Expires: {cert.expires}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Credential ID: {cert.credentialId}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Status */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                      Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            In Progress
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">
                  {cert.issuer}
                </p>
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {cert.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cert.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Target: {cert.targetDate}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Commitment to Professional Growth
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I believe in validating my skills through industry-recognized certifications. 
            These credentials demonstrate my commitment to staying current with AI technologies, 
            data science tools, and programming best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">{certifications.length}</div>
              <div className="text-blue-200">Active Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{upcomingCertifications.length}</div>
              <div className="text-blue-200">In Progress</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Verification Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
