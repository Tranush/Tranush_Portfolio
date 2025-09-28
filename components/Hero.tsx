'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaPlay, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Hero = () => {

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center relative overflow-hidden border-0">
      {/* Nike-style animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-2xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight text-center"
                >
                  I'm{' '}
                  <motion.span
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  >
                    Tranush Kondapalli
                  </motion.span>
                </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <motion.p
                  animate={{
                    color: ["#ffffff", "#d1d5db", "#9ca3af", "#6b7280", "#ffffff"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl font-bold"
                >
                  DATA ENGINEER • SOFTWARE ENGINEER • AI ENTHUSIAST
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-lg text-gray-300 max-w-2xl"
                >
                  Serial entrepreneur & data engineer building the future of technology. 
                  Founded multiple startups, led engineering teams, and created solutions that scale to millions of users.
                </motion.p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.a
                href="#startups"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <FaDownload size={16} />
                VIEW STARTUPS
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold bg-transparent text-white rounded-full shadow-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaPlay size={16} />
                VIEW PROJECTS
              </motion.a>
              
              <motion.a
                href="#about"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -1, 1, 0],
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold bg-transparent text-white rounded-full shadow-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaPlay size={16} />
                VIEW INTRO
              </motion.a>
              
              <motion.a
                href="/Tranush_Kondapalli_Resume.pdf"
                download
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <FaDownload size={16} />
                DOWNLOAD RESUME
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-8"
            >
              <motion.a
                href="https://github.com/tkondapalli"
                whileHover={{ 
                  scale: 1.5, 
                  rotate: 360,
                  y: -10
                }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={32} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/tkondapalli"
                whileHover={{ 
                  scale: 1.5, 
                  rotate: -360,
                  y: -10
                }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/tkondapalli"
                whileHover={{ 
                  scale: 1.5, 
                  rotate: 360,
                  y: -10
                }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={32} />
              </motion.a>
              
              <motion.a
                href="mailto:tkondapalli@example.com"
                whileHover={{ 
                  scale: 1.5, 
                  rotate: -360,
                  y: -10
                }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Email"
              >
                <HiMail size={32} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              {/* Nike-style animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800">
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, #9ca3af, #6b7280, #4b5563)",
                      "linear-gradient(45deg, #6b7280, #4b5563, #374151)",
                      "linear-gradient(45deg, #4b5563, #374151, #1f2937)",
                      "linear-gradient(45deg, #9ca3af, #6b7280, #4b5563)"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 720]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/30"
                  >
                    <span className="text-6xl font-black text-white">TK</span>
                  </motion.div>
                  
                  <motion.p
                    animate={{
                      color: ["#ffffff", "#d1d5db", "#9ca3af", "#6b7280", "#ffffff"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    INNOVATION
                  </motion.p>
                  
                  <motion.p
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-lg text-white/90"
                  >
                    ENGINEERING EXCELLENCE
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Floating status indicator */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 bg-black/80 backdrop-blur-md rounded-2xl p-4 border-2 border-white/20"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-white">LIVE</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
