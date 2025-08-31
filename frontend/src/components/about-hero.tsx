'use client'

import { motion } from 'framer-motion'
import { MapPin, Coffee, Code2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function AboutHero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Pragya
            </h1>
            <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-4">
              <p>
                I&apos;m a passionate Artificial Intelligence & Data Science student with expertise in 
                building AI-powered applications and data-driven solutions. I love working on innovative 
                projects that solve real-world problems using cutting-edge technologies.
              </p>
              <p>
                My journey in AI and technology is driven by curiosity and a commitment 
                to continuous learning. Currently pursuing B.Tech in AI & Data Science at MMCOE, Pune, 
                I focus on creating impactful applications with modern AI tools and frameworks.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">Pune, India</p>
                </div>
              </div>
             
              <div className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                  <p className="font-medium text-gray-900 dark:text-white">4+ Completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Coffee Consumed</p>
                  <p className="font-medium text-gray-900 dark:text-white">∞ Cups</p>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Currently Focused On
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Building AI-powered web applications</li>
                <li>• Mastering AI tools and automation</li>
                <li>• Data visualization with PowerBI</li>
                <li>• Natural Language Processing projects</li>
                <li>• Contributing to open-source AI projects</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-purple-600">
                {!imageError ? (
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Pragya Aggarwal"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  /* Fallback to professional placeholder */
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/profile-placeholder.svg"
                      alt="Pragya Aggarwal - Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Available for work</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                {/* <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">98%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
