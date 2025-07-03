'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📞 Contact Us
        </motion.h1>

        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Got questions? Reach out to our team and we&apos;ll help you get started.
        </motion.p>

        <motion.div
          className="bg-gray-100 rounded-xl p-6 shadow max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4"><strong>Email:</strong> arsmarttradingedu@gmail.com</p>
          <p className="mb-4"><strong>Phone:</strong> +91 82704 32182</p>
          <p className="mb-4"><strong>Website:</strong> www.arsmarttrading.in</p>
          <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
        </motion.div>
      </div>
    </div>
  )
} 