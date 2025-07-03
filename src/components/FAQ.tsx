'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Is this course suitable for beginners?',
    answer: 'Yes! AR Smart Trading is designed for absolute beginners and explains concepts in simple Tamil-English.',
  },
  {
    question: 'Do I need any paid software to learn?',
    answer: 'No. We only use free or low-cost trading platforms like Zerodha, TradingView, etc.',
  },
  {
    question: 'Is the learning available in Tamil?',
    answer: 'Yes. We use Tamil-English mixed content for easy understanding.',
  },
  {
    question: 'Do you offer support after the course?',
    answer: 'Yes, you can contact us anytime via WhatsApp for doubts or help.',
  },
];

export default function FAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="bg-white text-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">❓ Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-sm cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="font-semibold">{faq.question}</div>
            {openIndex === index && (
              <motion.p
                className="text-sm mt-2 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 