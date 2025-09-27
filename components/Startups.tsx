'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaDollarSign, FaExternalLinkAlt, FaLightbulb, FaChartLine } from 'react-icons/fa'

const Startups = () => {
  const startups = [
    {
      name: 'DataFlow AI',
      tagline: 'Intelligent Data Pipeline Automation',
      description: 'Founded a B2B SaaS platform that automates data pipeline creation and optimization using AI, helping enterprises reduce data engineering costs by 60%.',
      status: 'Acquired',
      year: '2020-2022',
      funding: '$2.5M Series A',
      team: '12 employees',
      customers: '150+ enterprises',
      technologies: ['Python', 'React', 'AWS', 'Kubernetes', 'TensorFlow'],
      achievements: [
        'Raised $2.5M from top-tier VCs including Sequoia Capital',
        'Served 150+ enterprise customers including Fortune 500 companies',
        'Achieved 99.9% uptime with zero data loss incidents',
        'Reduced customer data processing costs by an average of 60%'
      ],
      link: 'https://dataflow-ai.com',
      featured: true
    },
    {
      name: 'RetailInsight',
      tagline: 'AI-Powered Retail Analytics',
      description: 'Co-founded a retail analytics startup that uses machine learning to predict consumer behavior and optimize inventory management for retail chains.',
      status: 'Active',
      year: '2023-Present',
      funding: '$1.2M Seed',
      team: '8 employees',
      customers: '25+ retail chains',
      technologies: ['Python', 'React', 'PostgreSQL', 'Docker', 'Scikit-learn'],
      achievements: [
        'Secured $1.2M in seed funding from prominent angel investors',
        'Partnered with 25+ retail chains across North America',
        'Improved inventory turnover by 35% for partner retailers',
        'Developed proprietary ML algorithms for demand forecasting'
      ],
      link: 'https://retailinsight.ai',
      featured: true
    },
    {
      name: 'DevTools Pro',
      tagline: 'Developer Productivity Platform',
      description: 'Created a comprehensive platform for software development teams to streamline workflows, automate testing, and improve code quality.',
      status: 'Bootstrapped',
      year: '2021-2023',
      funding: 'Self-funded',
      team: '5 employees',
      customers: '500+ developers',
      technologies: ['Node.js', 'React', 'MongoDB', 'Docker', 'GitHub API'],
      achievements: [
        'Bootstrapped to $50K MRR within 18 months',
        'Served 500+ developers across 50+ companies',
        'Reduced average deployment time by 40% for users',
        'Built comprehensive CI/CD automation suite'
      ],
      link: 'https://devtools-pro.com',
      featured: false
    }
  ]

  const stats = [
    { label: 'Startups Founded', value: '3' },
    { label: 'Total Funding Raised', value: '$3.7M' },
    { label: 'Team Members Led', value: '25+' },
    { label: 'Enterprise Customers', value: '175+' },
  ]

  return (
    <section id="startups" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -120, 120, 0],
            rotate: [0, 180, 360, 540],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-88 h-88 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -160, 160, 0],
            y: [0, 80, -80, 0],
            rotate: [360, 180, 0, -180],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 38,
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
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl"
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
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            ENTREPRENEURIAL VENTURES
          </motion.h2>
          <motion.p 
            animate={{
              color: ["#ffffff", "#60a5fa", "#a78bfa", "#ffffff"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl text-white/90 max-w-3xl mx-auto font-bold"
          >
            BUILDING INNOVATIVE SOLUTIONS & LEADING TEAMS TO CREATE MEANINGFUL IMPACT
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Startups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Ventures</h3>
          <div className="space-y-12">
            {startups.filter(startup => startup.featured).map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                          <FaRocket className="text-white text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{startup.name}</h4>
                          <p className="text-lg text-primary-600 font-medium">{startup.tagline}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              startup.status === 'Acquired' ? 'bg-green-100 text-green-700' :
                              startup.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {startup.status}
                            </span>
                            <span className="text-sm text-gray-500">{startup.year}</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={startup.link}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                        aria-label="Visit Website"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{startup.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-white rounded-lg">
                        <FaDollarSign className="text-green-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{startup.funding}</div>
                        <div className="text-xs text-gray-500">Funding</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <FaUsers className="text-blue-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{startup.team}</div>
                        <div className="text-xs text-gray-500">Team Size</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <FaChartLine className="text-purple-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{startup.customers}</div>
                        <div className="text-xs text-gray-500">Customers</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <FaLightbulb className="text-yellow-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{startup.year}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {startup.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {startup.technologies.map((tech, idx) => (
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

                  {/* Side Panel */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl p-6 text-white">
                      <h5 className="font-bold mb-4">Company Highlights</h5>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Status</span>
                          <span className="font-semibold">{startup.status}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Founded</span>
                          <span className="font-semibold">{startup.year.split('-')[0]}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Team</span>
                          <span className="font-semibold">{startup.team}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Customers</span>
                          <span className="font-semibold">{startup.customers}</span>
                        </div>
                      </div>
                      <a
                        href={startup.link}
                        className="block w-full mt-6 bg-white/20 hover:bg-white/30 text-white text-center py-2 rounded-lg transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Ventures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Ventures</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {startups.filter(startup => !startup.featured).map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <FaRocket className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{startup.name}</h4>
                      <p className="text-sm text-primary-600">{startup.tagline}</p>
                    </div>
                  </div>
                  <a
                    href={startup.link}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{startup.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{startup.year}</span>
                  <span>{startup.funding}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {startup.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {startup.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{startup.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrepreneurial Spirit</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm passionate about building innovative solutions and leading teams to create meaningful impact. 
              Always open to discussing new opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Let's Build Something
              </a>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Startups
