'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="AR Smart Trading Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master the Stock Market
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Learn trading strategies from experts and start your journey to financial freedom
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Join Now
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
} 