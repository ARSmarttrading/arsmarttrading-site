'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="AR Smart Trading"
            width={40}
            height={40}
            className="h-8 w-auto md:h-10 mr-2"
          />
          <span className="text-xl font-bold text-blue-700">AR Smart Trading</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#learn" className="hover:text-blue-600">Learn</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#download" className="hover:text-blue-600">Download</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-2xl text-blue-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium"
          >
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a><br />
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a><br />
            <a href="#learn" onClick={() => setMenuOpen(false)}>Learn</a><br />
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><br />
            <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 