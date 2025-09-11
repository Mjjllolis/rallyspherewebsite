'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

// Background texture component
const BackgroundTexture = () => (
  <>
    {/* Grid lines background */}
    <div className="absolute inset-0 z-0 w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
    
    {/* Floating texture elements */}
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
      {/* Large floating circles */}
      <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-32 -left-32" />
      <div className="absolute w-80 h-80 bg-blue-500/8 rounded-full top-10 -right-20" />
      <div className="absolute w-72 h-72 bg-white/6 rounded-full bottom-10 left-10" />
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full -bottom-20 -right-10" />
      
      {/* Medium circles */}
      <div className="absolute w-30 h-30 bg-white/8 rounded-full top-16 left-5" />
      <div className="absolute w-20 h-20 bg-white/6 rounded-full top-36 right-8" />
      <div className="absolute w-40 h-40 bg-white/5 rounded-full bottom-48 left-20" />
      <div className="absolute w-24 h-24 bg-white/7 rounded-full bottom-20 right-12" />
      
      {/* Large geometric shapes */}
      <div className="absolute w-32 h-32 bg-blue-500/12 rounded-3xl bottom-60 left-8 transform rotate-12" />
      <div className="absolute w-28 h-28 bg-blue-500/15 rounded-3xl top-20 right-10 transform -rotate-12" />
      <div className="absolute w-24 h-24 bg-white/8 rounded-2xl top-60 left-32 transform rotate-45" />
      
      {/* Medium geometric shapes */}
      <div className="absolute w-16 h-16 bg-blue-500/15 rounded-2xl bottom-60 left-8 transform rotate-15" />
      <div className="absolute w-20 h-20 bg-blue-500/12 rounded-2xl top-20 right-10 transform -rotate-20" />
      
      {/* Floating dots */}
      <div className="absolute w-3 h-3 bg-white/20 rounded-full top-48 left-16" />
      <div className="absolute w-2 h-2 bg-blue-500/30 rounded-full top-72 right-24" />
      <div className="absolute w-4 h-4 bg-white/15 rounded-full bottom-96 left-36" />
      <div className="absolute w-2.5 h-2.5 bg-blue-500/25 rounded-full bottom-44 right-20" />
      <div className="absolute w-3.5 h-3.5 bg-white/18 rounded-full top-96 left-48" />
      <div className="absolute w-5 h-5 bg-white/12 rounded-full top-80 right-32" />
      <div className="absolute w-6 h-6 bg-blue-500/20 rounded-full bottom-80 left-64" />
    </div>
  </>
);

const Hero: React.FC = () => {
  return (
    <>
      <Header className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] z-50" />
      <section
        id="hero"
        className="relative flex items-center justify-center w-full min-h-screen px-6 sm:px-8 md:px-10 pt-44 sm:pt-48 md:pt-52 hero-gradient"
      >
        {/* Background texture */}
        <BackgroundTexture />

        <div className="flex flex-col items-center justify-center h-full text-center relative z-20 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-tight font-bold text-white max-w-sm sm:max-w-lg md:max-w-2xl mx-auto px-4">
            All-in-One Platform for Clubs and Players
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-sm sm:max-w-lg mx-auto px-4 leading-relaxed">
            Manage games, coaching, events, memberships, analytics, and merch—all from your phone or computer.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-fit mx-auto pt-4">
            <AppStoreButton dark />
            <PlayStoreButton dark />
          </div>
          <div className="relative mt-8 sm:mt-12 md:mt-16 mx-auto z-10">
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,102,255,0.3)_0%,rgba(0,102,255,0)_80%)] rounded-full blur-2xl scale-[1.8] z-0" />
            <Image
              src="/images/Logo.png"
              width={384}
              height={340}
              quality={100}
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 300px, 384px"
              priority={true}
              unoptimized={true}
              alt="App Mockup"
              className="relative z-10 w-60 sm:w-72 md:w-80 lg:w-96 mb-8 sm:mb-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;