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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through diverse roles, from startup founder to enterprise engineer
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <FaBuilding className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                      <p className="text-lg font-semibold text-primary-600">{exp.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Achievements */}
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
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
