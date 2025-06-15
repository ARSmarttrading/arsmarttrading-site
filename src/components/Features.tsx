'use client';
import React from 'react';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  CpuChipIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Beginner Friendly',
    description: 'Start your trading journey with our easy-to-follow courses designed for beginners.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Real Examples',
    description: 'Learn from real market examples and case studies to understand practical applications.',
    icon: ChartBarIcon,
  },
  {
    title: 'AI-Powered Lessons',
    description: 'Experience personalized learning with our advanced AI technology.',
    icon: CpuChipIcon,
  },
  {
    title: 'Mobile Access',
    description: 'Learn on the go with our mobile-friendly platform and app.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Course Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 