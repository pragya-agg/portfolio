'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, Github, Linkedin } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me an email and I&apos;ll respond within 24 hours',
    value: 'pragyaaggarwal2023.ainds@mmcoe.edu.in',
    href: 'mailto:pragyaaggarwal2023.ainds@mmcoe.edu.in'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Available for calls during business hours',
    value: '+91-9896283600',
    href: 'tel:+919896283600'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in Pune, India',
    value: 'Pune, India',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'I typically respond within',
    value: '24 hours',
    href: '#'
  }
]

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/pragya-agg',
    username: '@pragya-agg'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pragya-aggarwal-158b25286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    username: '/in/pragya-aggarwal-158b25286'
  },
  
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Start a Conversation
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I&apos;m always interested in new opportunities, whether it&apos;s a full-time position, 
          freelance project, or consulting work. Don&apos;t hesitate to reach out!
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <method.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                {method.description}
              </p>
              {method.href !== '#' ? (
                <a
                  href={method.href}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {method.value}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Connect with me
        </h3>
        <div className="space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <social.icon className="w-5 h-5" />
              <span>{social.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {social.username}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Calendar Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
      >
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Schedule a Call
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Prefer to talk? Book a 30-minute call to discuss your project in detail.
        </p>
        <a
          href="https://calendly.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Book a Meeting
        </a>
      </motion.div>
    </div>
  )
}
