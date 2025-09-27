'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaBrain } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Data Pipeline',
      description: 'Built a scalable machine learning pipeline that processes 10TB+ of retail data daily, improving demand forecasting accuracy by 35%.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Apache Spark', 'TensorFlow', 'AWS', 'Kubernetes'],
      category: 'Data Engineering',
      icon: FaDatabase,
      github: 'https://github.com/tkondapalli/ai-data-pipeline',
      demo: 'https://demo.example.com',
      featured: true
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Developed a real-time analytics platform for monitoring business KPIs with sub-second latency using modern web technologies.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
      category: 'Full Stack',
      icon: FaCode,
      github: 'https://github.com/tkondapalli/analytics-dashboard',
      demo: 'https://analytics.example.com',
      featured: true
    },
    {
      title: 'ML Model Optimization Framework',
      description: 'Created an automated framework for hyperparameter tuning and model optimization, reducing training time by 50%.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Scikit-learn', 'Optuna', 'Docker', 'MLflow'],
      category: 'Machine Learning',
      icon: FaBrain,
      github: 'https://github.com/tkondapalli/ml-optimization',
      demo: null,
      featured: false
    },
    {
      title: 'Microservices Architecture',
      description: 'Designed and implemented a cloud-native microservices architecture serving 1M+ requests daily with 99.9% uptime.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS'],
      category: 'Backend',
      icon: FaCode,
      github: 'https://github.com/tkondapalli/microservices',
      demo: 'https://api.example.com',
      featured: false
    },
    {
      title: 'Data Visualization Tool',
      description: 'Built an interactive data visualization tool that helps analysts explore complex datasets with intuitive drag-and-drop interface.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'MongoDB'],
      category: 'Frontend',
      icon: FaCode,
      github: 'https://github.com/tkondapalli/data-viz',
      demo: 'https://viz.example.com',
      featured: false
    },
    {
      title: 'Blockchain Analytics Platform',
      description: 'Developed a platform for analyzing blockchain transactions and detecting suspicious patterns using advanced algorithms.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Ethereum', 'GraphQL', 'React', 'PostgreSQL'],
      category: 'Blockchain',
      icon: FaDatabase,
      github: 'https://github.com/tkondapalli/blockchain-analytics',
      demo: 'https://blockchain.example.com',
      featured: false
    }
  ]

  const categories = ['All', 'Data Engineering', 'Full Stack', 'Machine Learning', 'Backend', 'Frontend', 'Blockchain']

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden border-0 -mt-1">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 250, -250, 0],
            y: [0, -120, 120, 0],
            rotate: [0, 270, 540, 720],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -180, 180, 0],
            y: [0, 90, -90, 0],
            rotate: [360, 180, 0, -180],
            scale: [1.3, 1, 1.3]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -60, 60, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl"
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
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            FEATURED PROJECTS
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
            SHOWCASE OF TECHNICAL EXPERTISE & INNOVATIVE SOLUTIONS
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-primary-200 text-primary-600 hover:border-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="text-6xl text-primary-500" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                        aria-label="Demo"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always working on new projects and exploring innovative solutions. 
              Check out my GitHub for more repositories and feel free to reach out for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/tkondapalli"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FaGithub />
                View All Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Collaborate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
