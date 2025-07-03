'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AR Smart Trading</h3>
            <p className="text-gray-400">
              Empowering traders with knowledge and tools for success in the stock market.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Email: <a href="mailto:arsmarttradingedu@gmail.com" className="hover:text-white">arsmarttradingedu@gmail.com</a>
            </p>
            <p className="text-gray-400">
              WhatsApp: <a href="https://wa.me/919876543210?text=Hi%20I'm%20interested%20in%20the%20AR%20Smart%20Trading%20course" className="hover:text-white" target="_blank" rel="noopener noreferrer">Chat with us</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AR Smart Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 