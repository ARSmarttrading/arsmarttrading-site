'use client'

import { motion } from 'framer-motion'

export default function CoursesPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📘 Our Courses
        </motion.h1>

        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore our stock market learning modules and start your trading journey today. Learn in Tamil & English with step-by-step guidance.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: '🔰 Beginner Level',
              description: 'Learn stock market basics, how to open demat account, use of Zerodha, and tradingview setup. Ideal for absolute beginners.',
            },
            {
              title: '📊 Advanced Level',
              description: 'Learn price action, technical indicators, and how to read charts. Perfect for those with basic knowledge.',
            },
            {
              title: '⚡ Pro Level',
              description: 'Master options trading, strategy building, risk management, and market psychology. Build confidence to trade live.',
            },
            {
              title: '🧠 AI Trading Assistant',
              description: 'Ask doubts to AR Learn Pro AI. Get smart learning support and real-time market guidance.',
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-700">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 