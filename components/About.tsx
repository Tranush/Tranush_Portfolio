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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate technologist with a unique blend of engineering expertise and entrepreneurial spirit
          </p>
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
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                As a Data & Software Engineer at Walmart, I've had the privilege of working on 
                large-scale systems that impact millions of customers daily. My journey began with 
                a fascination for solving complex problems through code, which led me to specialize 
                in data engineering and software development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond my corporate role, I'm deeply passionate about AI and machine learning, 
                constantly exploring new ways to apply these technologies to real-world challenges. 
                My entrepreneurial spirit has driven me to found startups and contribute to the 
                tech community through publications and open-source projects.
              </p>
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
                  className="text-center p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
            <h3 className="text-2xl font-bold text-gray-900">Areas of Focus</h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <interest.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{interest.title}</h4>
                    <p className="text-gray-600 text-sm">{interest.description}</p>
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
