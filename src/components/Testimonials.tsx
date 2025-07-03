'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Suresh K.',
    review: 'AR Smart Trading gave me the confidence to start trading. Very clear and simple!',
  },
  {
    name: 'Priya M.',
    review: 'The AI learning method is excellent. I can learn in Tamil and ask doubts anytime.',
  },
  {
    name: 'Rahul D.',
    review: 'Very beginner-friendly and packed with useful tips. Worth every minute!',
  },
];

export default function Testimonials({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">🌟 What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4">"{testimonial.review}"</p>
            <p className="font-semibold text-blue-400">- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 