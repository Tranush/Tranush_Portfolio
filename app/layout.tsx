import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tranush Kondapalli - Data & Software Engineer | AI Enthusiast',
  description: 'Professional portfolio of Tranush Kondapalli, Data & Software Engineer at Walmart, AI enthusiast, and entrepreneur. Explore my projects, publications, and startup ventures.',
  keywords: 'Data Engineer, Software Engineer, AI Engineer, Machine Learning, Portfolio, Walmart, Entrepreneur',
  authors: [{ name: 'Tranush Kondapalli' }],
  openGraph: {
    title: 'Tranush Kondapalli - Data & Software Engineer',
    description: 'Professional portfolio showcasing expertise in data engineering, software development, and AI innovation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
