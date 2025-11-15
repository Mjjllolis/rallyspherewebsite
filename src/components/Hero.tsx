'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';
import dynamic from 'next/dynamic';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
});

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative flex items-center justify-center w-full h-[70vh] px-6 sm:px-8 md:px-10 pt-44 sm:pt-48 md:pt-52 pb-0 overflow-visible"
      >
        <Header className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] z-50" />

        <div className="flex flex-col items-center justify-center h-full text-center relative z-20 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-tight font-bold text-black max-w-sm sm:max-w-lg md:max-w-2xl mx-auto px-4">
            All-in-One Platform for Clubs and Players
          </h1>
          <p className="text-base sm:text-lg text-black/90 max-w-sm sm:max-w-lg mx-auto px-4 leading-relaxed">
            Manage games, coaching, events, memberships, analytics, and merch—all from your phone or computer.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-fit mx-auto pt-4">
            <AppStoreButton dark />
            <PlayStoreButton dark />
          </div>
        </div>
      </section>

      {/* 3D iPhone model in document flow */}
      <Hero3DBackground />
    </>
  );
};

export default Hero;