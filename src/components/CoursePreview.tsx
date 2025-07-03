'use client';
import { motion } from 'framer-motion';
import { FaChartLine, FaMobileAlt, FaRobot, FaLightbulb, FaTools, FaMoneyBillAlt } from 'react-icons/fa';

const topics = [
  { icon: <FaChartLine />, title: 'Stock Market Basics' },
  { icon: <FaMobileAlt />, title: 'Mobile Trading Setup' },
  { icon: <FaRobot />, title: 'AI-Based Smart Learning' },
  { icon: <FaLightbulb />, title: 'Candlestick &amp; Chart Patterns' },
  { icon: <FaTools />, title: 'Trading Tools &amp; Strategies' },
  { icon: <FaMoneyBillAlt />, title: 'Intraday &amp; Options Insights' },
];

export default function CoursePreview({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-white text-gray-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">📘 What You&apos;ll Learn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 rounded-lg shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 text-2xl">{topic.icon}</div>
            <p className="text-md font-semibold">{topic.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 