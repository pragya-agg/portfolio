'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, MapPin, Mail, Phone, Globe, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download or view my complete professional resume with detailed experience, 
            skills, and achievements.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume/Pragya_Aggarwal_Resume.pdf"
              download
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </a>
            <a
              href="/resume/Pragya_Aggarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View in Browser</span>
            </a>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Resume Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Pragya Aggarwal</h2>
                  <p className="text-blue-100 text-lg mb-4">Software Developer</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-blue-100">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">pragyaaggarwal2023.ainds@mmcoe.edu.in</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+91-9896283600</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Pune, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <a href="https://www.linkedin.com/in/pragya-aggarwal-158b25286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-sm hover:text-white transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-8">
              {/* Professional Summary */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Third-year AI & Data Science student passionate about innovation. Contributed to a medical website prototype in the 
                  "Accenture's Hack the Future" hackathon and built the Elderly Care Companion app with React, Node.js, and 
                  MongoDB. Participated in the ISRO Bharatiya Antariksh Hackathon 2024, showcasing problem-solving skills. 
                  Proficient in Python for statistical analysis with pandas and numpy. Formerly with the Zenith Astronomy Club. Strong 
                  team player, learning via HackerRank and freeCodeCamp.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Experience
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Technical Team Member
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        2024 - Present
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      NEURA - AI & Data Science Club
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• Active member of technical team focusing on AI/ML projects and research</li>
                      <li>• Participated in hackathons including Accenture's Hack the Future and ISRO Bharatiya Antariksh Hackathon 2024</li>
                      <li>• Collaborated on innovative AI solutions and data science applications</li>
                      <li>• Contributed to club activities and technical workshops</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Education
                </h3>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Technology in Artificial Intelligence & Data Science
                    </h4>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      2023 - 2027
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    Marathwada Mitra Mandal&apos;s College of Engineering (MMCOE), Pune
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    SGPA: 8.32 - Comprehensive study of Artificial Intelligence, Data Science, Machine Learning, and modern programming paradigms. 
                    Actively involved in AI/ML projects, hackathons, and research work.
                  </p>
                  
                  {/* Key Projects */}
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Notable Academic Projects:</h5>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                      <li>• AI-Powered Code Transpiler (SIH Project)</li>
                      <li>• Varnanetra - AI Language Learning Platform</li>
                      <li>• Hate Speech Detection System using NLP</li>
                      <li>• Elderly Care System (Accenture Hackathon Winner)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Technical Skills
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['C', 'C++', 'Python', 'JavaScript'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Web Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Docker'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Data Science</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Pandas', 'NumPy', 'NLP', 'FastAPI'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tools & Design</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Canva', 'Figma', 'Git', 'GitHub', 'VS Code'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Soft Skills */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Problem-Solving', 'Critical Thinking', 'Teamwork', 'Attention to Detail', 'Anchoring'].map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Internships & Certifications */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Internships & Certifications
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Be10x AI Tools and ChatGPT Workshop
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        December 2024
                      </span>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm">
                      Certification Program
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Be10x PowerBI Workshop
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        April 2025
                      </span>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm">
                      Data Visualization & Analytics
                    </p>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                  Key Projects
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Transpiler – AI-Powered Online Code Converter and Debugger
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Aug - Dec 2024
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      SIH Project (3rd Semester) - Built a Dockerized online tool to convert code between languages (e.g., Python ↔ C++), integrating OpenAI API for AI-assisted debugging and backend execution in secure, sandboxed environments.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'C++', 'Docker', 'OpenAI API', 'React', 'Node.js'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Varnanetra – AI Language Learning Platform
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Jan - May 2025
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      Co-developed AI-powered language learning platform using React.js, FastAPI, and secure coding practices, enabling personalized grammar and pronunciation training.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['React.js', 'FastAPI', 'Python', 'AI/ML', 'Authentication'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Accenture Hackathon Elderly Care System
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        April 2025
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      Co-developed Elderly Care Companion: Flask-based web app with AI-driven health monitoring, reminders, and a multilingual chatbot to enhance elderly care, submitted to the Accenture Hackathon.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Flask', 'Python', 'AI', 'Healthcare', 'Chatbot'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Hate Speech Detection System
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Jan - May 2024
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      Developed a system to detect hate speech in text data using NLP techniques. Role: Assisted with frontend development.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'NumPy', 'Pandas', 'React', 'Node.js', 'NLP'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Additional Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out to discuss 
              opportunities, collaborations, or just to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </Link>
              <a
                href="https://www.linkedin.com/in/pragya-aggarwal-158b25286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center space-x-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
