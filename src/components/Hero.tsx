'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-blue-800 to-blue-600 text-white">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Master the Stock Market
      </motion.h1>
      
      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Learn trading strategies from experts and start your journey to financial freedom
      </motion.p>
      
      <motion.a
        href="#"
        className="bg-white text-blue-700 font-semibold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now
      </motion.a>
    </section>
  );
} 