'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import WaveTransition from './WaveTransition';

import { heroDetails } from '@/data/hero';
import dynamic from 'next/dynamic';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
});

// Background texture component
const BackgroundTexture = () => (
  <>
    {/* Grid lines background */}
    <div className="absolute inset-0 z-0 w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
  </>
);

const Hero: React.FC = () => {
  return (
    <>
      <Header className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] z-50" />
      <section
        id="hero"
        className="relative flex items-center justify-center w-full min-h-screen px-6 sm:px-8 md:px-10 pt-44 sm:pt-48 md:pt-52 pb-0 hero-gradient overflow-hidden"
      >
        {/* Background texture */}
        <BackgroundTexture />
        {/* 3D animated shapes */}
        <Hero3DBackground />

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
            <Image
              src="/images/LogoWithText.png"
              width={500}
              height={500}
              quality={100}
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 300px, 500px"
              priority={true}
              unoptimized={true}
              alt="RallySphere Logo"
              className="relative z-10 w-60 sm:w-72 md:w-80 lg:w-[30rem] mb-8 sm:mb-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Wave transition at bottom of hero */}
        <WaveTransition />
      </section>
    </>
  );
};

export default Hero;