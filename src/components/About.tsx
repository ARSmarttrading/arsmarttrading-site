'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function About({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About AR Smart Trading</h2>
          <p className="text-lg text-gray-600 mb-6">
            AR Smart Trading is your comprehensive platform for mastering the stock market. 
            We combine cutting-edge technology with expert knowledge to provide you with 
            the tools and education needed to succeed in trading.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to democratize financial education and empower individuals 
            to make informed investment decisions through our innovative learning platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 