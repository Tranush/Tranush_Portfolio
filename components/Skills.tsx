'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaBrain, FaCloud, FaTools, FaLanguage } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'Go', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'Rust', level: 75, color: 'from-orange-400 to-orange-600' },
        { name: 'SQL', level: 95, color: 'from-blue-400 to-blue-600' },
      ]
    },
    {
      title: 'Data Engineering',
      icon: FaDatabase,
      skills: [
        { name: 'Apache Spark', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'Apache Kafka', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'Apache Airflow', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Pandas', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'NumPy', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Apache Beam', level: 80, color: 'from-green-400 to-green-600' },
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: FaBrain,
      skills: [
        { name: 'TensorFlow', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'Scikit-learn', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'Keras', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'OpenAI API', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Hugging Face', level: 75, color: 'from-yellow-400 to-yellow-600' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      skills: [
        { name: 'AWS', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Kubernetes', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Terraform', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'Jenkins', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'GitLab CI/CD', level: 90, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: FaTools,
      skills: [
        { name: 'React/Next.js', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Spring Boot', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'FastAPI', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Django', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-400 to-gray-600' },
      ]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: [
        { name: 'PostgreSQL', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'MongoDB', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Redis', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'Elasticsearch', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Apache Cassandra', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'BigQuery', level: 90, color: 'from-blue-400 to-blue-600' },
      ]
    }
  ]

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      credential: 'AWS-SAA-2023'
    },
    {
      name: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      year: '2022',
      credential: 'GCP-PDE-2022'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2022',
      credential: 'CKA-2022'
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      year: '2021',
      credential: 'TF-DEV-2021'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data engineering, software development, and AI technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <category.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.05 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLanguage className="text-white text-2xl" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{cert.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-xs text-primary-600 font-medium">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying at the forefront. 
              I regularly participate in conferences, contribute to open-source projects, 
              and pursue new certifications to expand my expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#publications" className="btn-primary">
                Read My Research
              </a>
              <a href="#projects" className="btn-secondary">
                See My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
