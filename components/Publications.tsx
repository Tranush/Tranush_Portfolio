'use client'

import { motion } from 'framer-motion'
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt, FaUser, FaQuoteLeft } from 'react-icons/fa'

const Publications = () => {
  const publications = [
    {
      title: 'Scalable Data Pipeline Architecture for E-commerce Analytics',
      authors: 'Tranush Kondapalli, Sarah Johnson, Michael Chen',
      journal: 'IEEE Transactions on Data Engineering',
      year: '2023',
      type: 'Journal Article',
      description: 'A comprehensive study on building robust data pipelines for large-scale e-commerce platforms, featuring novel optimization techniques.',
      link: 'https://ieee.org/example-paper',
      citations: 45,
      featured: true
    },
    {
      title: 'Machine Learning Approaches to Demand Forecasting in Retail',
      authors: 'Tranush Kondapalli, David Kim',
      journal: 'Proceedings of the International Conference on Machine Learning',
      year: '2023',
      type: 'Conference Paper',
      description: 'Novel deep learning models for improving demand forecasting accuracy in retail environments with seasonal variations.',
      link: 'https://icml.cc/example-paper',
      citations: 32,
      featured: true
    },
    {
      title: 'Building Resilient Microservices: Lessons from Production',
      authors: 'Tranush Kondapalli',
      journal: 'Medium Engineering Blog',
      year: '2023',
      type: 'Blog Post',
      description: 'Practical insights on designing and maintaining microservices architecture in high-traffic production environments.',
      link: 'https://medium.com/example-post',
      citations: 128,
      featured: false
    },
    {
      title: 'Real-time Data Processing with Apache Kafka and Spark',
      authors: 'Kevin Tran, Lisa Wang',
      journal: 'O\'Reilly Data Engineering Newsletter',
      year: '2022',
      type: 'Technical Article',
      description: 'Best practices for implementing real-time data processing systems using modern streaming technologies.',
      link: 'https://oreilly.com/example-article',
      citations: 67,
      featured: false
    },
    {
      title: 'The Future of AI in Business Intelligence',
      authors: 'Tranush Kondapalli',
      journal: 'TechCrunch',
      year: '2022',
      type: 'Opinion Piece',
      description: 'Exploring the transformative potential of AI technologies in business intelligence and decision-making processes.',
      link: 'https://techcrunch.com/example-article',
      citations: 89,
      featured: false
    },
    {
      title: 'Open Source Data Tools: A Comprehensive Guide',
      authors: 'Tranush Kondapalli, Alex Rodriguez',
      journal: 'GitHub Blog',
      year: '2021',
      type: 'Technical Guide',
      description: 'A detailed guide to the most effective open-source tools for data engineering and analytics workflows.',
      link: 'https://github.blog/example-guide',
      citations: 156,
      featured: false
    }
  ]

  const stats = [
    { label: 'Total Publications', value: '12+' },
    { label: 'Journal Articles', value: '4' },
    { label: 'Conference Papers', value: '3' },
    { label: 'Total Citations', value: '500+' },
  ]

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 180, -180, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.6, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -220, 220, 0],
            y: [0, 110, -110, 0],
            rotate: [360, 0, -360],
            scale: [1.4, 1, 1.4]
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 140, -140, 0],
            y: [0, -70, 70, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 26,
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
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            RESEARCH & PUBLICATIONS
          </motion.h2>
          <motion.p 
            animate={{
              color: ["#ffffff", "#60a5fa", "#a78bfa", "#ffffff"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl text-white/90 max-w-3xl mx-auto font-bold"
          >
            CONTRIBUTING TO ADVANCEMENT OF DATA ENGINEERING & AI THROUGH RESEARCH
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
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Publications</h3>
          <div className="space-y-8">
            {publications.filter(pub => pub.featured).map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                          <FaFileAlt className="text-white text-xl" />
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                            {publication.type}
                          </span>
                        </div>
                      </div>
                      <a
                        href={publication.link}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                        aria-label="Read Publication"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3">{publication.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{publication.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>{publication.authors}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{publication.year}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Published in:</strong> {publication.journal}
                    </p>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">{publication.citations}</div>
                      <div className="text-sm text-gray-600 mb-4">Citations</div>
                      <a
                        href={publication.link}
                        className="btn-primary w-full"
                      >
                        Read Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Publications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.filter(pub => !pub.featured).map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                    {publication.type}
                  </span>
                  <a
                    href={publication.link}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>

                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{publication.title}</h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{publication.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{publication.year}</span>
                  <span>{publication.citations} citations</span>
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
            <div className="flex justify-center mb-6">
              <FaQuoteLeft className="text-4xl text-primary-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Sharing</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I believe in the power of sharing knowledge and contributing to the tech community. 
              My publications reflect my commitment to advancing the field and helping others learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://scholar.google.com/citations?user=tkondapalli"
                className="btn-primary"
              >
                View Google Scholar
              </a>
              <a href="#contact" className="btn-secondary">
                Discuss Research
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
