'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaPlay, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Tranush Kondapalli</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600"
              >
                Data & Software Engineer at Walmart
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-500 max-w-2xl"
              >
                Passionate about building scalable data solutions, developing innovative software, 
                and exploring the frontiers of AI. Entrepreneur at heart with a drive to create 
                meaningful impact through technology.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center gap-2">
                <FaDownload />
                Download Resume
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <FaPlay />
                Watch Intro
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/tkondapalli"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/tkondapalli"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/tkondapalli"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:tkondapalli@example.com"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                aria-label="Email"
              >
                <HiMail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for professional headshot */}
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">TK</span>
                  </div>
                  <p className="text-gray-600">Professional Headshot</p>
                  <p className="text-sm text-gray-500">Replace with your actual photo</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
