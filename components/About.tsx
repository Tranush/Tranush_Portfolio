'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaBrain, FaRocket } from 'react-icons/fa'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Startups Founded', value: '2' },
  ]

  const interests = [
    {
      icon: FaCode,
      title: 'Software Engineering',
      description: 'Building scalable applications and systems'
    },
    {
      icon: FaDatabase,
      title: 'Data Engineering',
      description: 'Designing robust data pipelines and architectures'
    },
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'Exploring the frontiers of artificial intelligence'
    },
    {
      icon: FaRocket,
      title: 'Entrepreneurship',
      description: 'Creating innovative solutions and startups'
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 150, 0],
            y: [0, 80, -80, 0],
            rotate: [360, 180, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            ABOUT ME
          </motion.h2>
          <motion.p 
            animate={{
              color: ["#ffffff", "#60a5fa", "#a78bfa", "#ffffff"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl text-white/90 max-w-3xl mx-auto font-bold"
          >
            PASSIONATE TECHNOLOGIST WITH UNIQUE BLEND OF ENGINEERING & ENTREPRENEURSHIP
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h3 
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  color: "#60a5fa"
                }}
                className="text-3xl font-black text-white"
              >
                MY JOURNEY
              </motion.h3>
              <motion.p 
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/80 leading-relaxed text-lg"
              >
                As a Data & Software Engineer at Walmart, I've had the privilege of working on 
                large-scale systems that impact millions of customers daily. My journey began with 
                a fascination for solving complex problems through code, which led me to specialize 
                in data engineering and software development.
              </motion.p>
              <motion.p 
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/70 leading-relaxed text-lg"
              >
                Beyond my corporate role, I'm deeply passionate about AI and machine learning, 
                constantly exploring new ways to apply these technologies to real-world challenges. 
                My entrepreneurial spirit has driven me to found startups and contribute to the 
                tech community through publications and open-source projects.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -2, 2, 0],
                color: "#60a5fa"
              }}
              className="text-3xl font-black text-white"
            >
              AREAS OF FOCUS
            </motion.h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
                  >
                    <interest.icon className="text-white text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{interest.title}</h4>
                    <p className="text-white/70 text-sm">{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            and the latest developments in technology. Whether you're a recruiter, fellow 
            entrepreneur, or just curious about my work, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
