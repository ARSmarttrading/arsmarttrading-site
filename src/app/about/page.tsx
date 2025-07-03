'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-10 py-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
      >
        About AR Smart Trading
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-700 max-w-3xl mx-auto text-lg mb-10"
      >
        We provide AI-powered share market learning in Tamil & English, making financial education accessible to everyone.
        Our mission is to democratize trading knowledge and empower individuals to make informed investment decisions.
      </motion.p>

      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-xl shadow p-6"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To make stock market education accessible, affordable, and effective for everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-xl shadow p-6"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become the leading platform for AI-powered trading education in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-xl shadow p-6"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h3>
          <p className="text-gray-700">
            Innovation, transparency, and commitment to student success.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 