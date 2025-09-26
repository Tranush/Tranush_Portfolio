'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Startups from '@/components/Startups'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading Portfolio...</h2>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Startups />
      <Skills />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
