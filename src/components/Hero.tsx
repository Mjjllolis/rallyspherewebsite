'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <>
      <Header className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] z-50" />
      <section
        id="hero"
        className="relative flex items-center justify-center w-full h-screen px-5 bg-cover bg-center pt-40 md:pt-48"
        style={{ backgroundImage: "url('/images/Background.png')" }}
      >
        {/* Grid lines + white fade */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] bg-white/70" />

        <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
          <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto paddingtop-10">
            All-in-One Platform for Clubs and Players
          </h1>
          <p className="mt-4 text-foreground max-w-lg mx-auto">
            Manage games, coaching, events, memberships, analytics, and merch—all from your phone or computer.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
            <AppStoreButton dark />
            <PlayStoreButton dark />
          </div>
          <div className="relative mt-12 md:mt-16 mx-auto z-10">
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(0,102,255,0.3)_0%,rgba(0,102,255,0)_80%)] rounded-full blur-2xl scale-[1.8] z-0" />
            <Image
              src="/images/Logo.png"
              width={384}
              height={340}
              quality={100}
              sizes="(max-width: 768px) 100vw, 384px"
              priority={true}
              unoptimized={true}
              alt="App Mockup"
              className="relative z-10 w-60 md:w-96 mb-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;