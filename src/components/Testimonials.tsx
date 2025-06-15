'use client';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Beginner Trader',
    content: 'AR Smart Trading transformed my understanding of the stock market. The beginner-friendly approach made it easy to get started.',
    image: '/testimonials/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Professional Investor',
    content: 'The AI-powered lessons provide insights I never would have discovered on my own. Highly recommended!',
    image: '/testimonials/michael.jpg',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Day Trader',
    content: 'The real examples and case studies helped me understand complex trading strategies in a practical way.',
    image: '/testimonials/emma.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Students Say</h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic">"{testimonials[currentIndex].content}"</p>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
} 