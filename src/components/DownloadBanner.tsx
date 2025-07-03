'use client';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaWhatsapp } from 'react-icons/fa';

export default function DownloadBanner({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">📲 Start Your Trading Journey Today</h2>
        <p className="mb-8 text-lg">Join AR Smart Trading now and explore AI-powered stock market learning in Tamil & English.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.yourapp.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-700 px-6 py-4 rounded-full font-semibold shadow hover:scale-105 transition-transform text-lg"
          >
            <FaGooglePlay /> Download App
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20I'm%20interested%20in%20the%20AR%20Smart%20Trading%20course"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full font-semibold shadow hover:scale-105 transition-transform text-lg"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
} 