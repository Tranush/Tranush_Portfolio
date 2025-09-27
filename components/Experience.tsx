'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'Walmart',
      position: 'Data & Software Engineer',
      duration: '2022 - Present',
      location: 'Bentonville, AR',
      description: 'Leading data engineering initiatives and software development projects for one of the world\'s largest retailers.',
      achievements: [
        'Architected and implemented scalable data pipelines processing 10TB+ daily',
        'Developed machine learning models that improved operational efficiency by 25%',
        'Led cross-functional teams of 8+ engineers on critical infrastructure projects',
        'Reduced data processing costs by 40% through optimization and cloud migration'
      ],
      technologies: ['Python', 'Apache Spark', 'AWS', 'Kubernetes', 'TensorFlow', 'PostgreSQL']
    },
    {
      company: 'TechStart Inc.',
      position: 'Co-Founder & CTO',
      duration: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Co-founded a B2B SaaS startup focused on AI-powered business intelligence solutions.',
      achievements: [
        'Built and scaled the technical infrastructure from 0 to 10,000+ users',
        'Raised $2M in Series A funding from top-tier VCs',
        'Developed proprietary AI algorithms for business analytics',
        'Led a team of 5 engineers and established engineering best practices'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Docker', 'AWS']
    },
    {
      company: 'DataCorp Solutions',
      position: 'Senior Software Engineer',
      duration: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Specialized in building data-intensive applications and microservices architecture.',
      achievements: [
        'Designed and implemented microservices architecture serving 1M+ requests daily',
        'Optimized database queries resulting in 60% performance improvement',
        'Mentored junior developers and established code review processes',
        'Led migration from monolithic to microservices architecture'
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden border-0 -mt-1">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 300, -300, 0],
            y: [0, -150, 150, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -200, 200, 0],
            y: [0, 100, -100, 0],
            rotate: [360, 0, -360],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 150, -150, 0],
            y: [0, -80, 80, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl"
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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            PROFESSIONAL EXPERIENCE
          </motion.h2>
          <motion.p 
            animate={{
              color: ["#ffffff", "#60a5fa", "#a78bfa", "#ffffff"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl text-white/90 max-w-3xl mx-auto font-bold"
          >
            JOURNEY THROUGH DIVERSE ROLES: STARTUP FOUNDER TO ENTERPRISE ENGINEER
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center"
                    >
                      <FaBuilding className="text-white text-2xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <p className="text-lg font-semibold text-cyan-400">{exp.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-white/70">
                      <FaCalendarAlt className="mr-2 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <FaMapMarkerAlt className="mr-2 text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Achievements */}
                <div className="lg:col-span-2">
                  <motion.p 
                    animate={{
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-white/80 mb-6 leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3">KEY ACHIEVEMENTS:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-white/80">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold text-white mb-3">TECHNOLOGIES USED:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 rounded-full text-sm font-bold"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond the Resume</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            My experience extends beyond traditional roles. I've contributed to open-source projects, 
            spoken at tech conferences, and mentored aspiring developers. I believe in continuous 
            learning and staying at the forefront of technology innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              View My Projects
            </a>
            <a href="#publications" className="btn-secondary">
              Read My Publications
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
