'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';
import Header from '@/components/Header';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import WaveTransition from './WaveTransition';

import { heroDetails } from '@/data/hero';
import dynamic from 'next/dynamic';

const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
});

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Honor reduced-motion: hold on the poster frame instead of looping.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  return (
    <>
      <Header className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] z-50" />
      <section
        id="hero"
        className="relative flex items-center justify-center w-full min-h-[70vh] px-6 sm:px-8 md:px-10 pt-24 sm:pt-24 md:pt-24 pb-0 surface-navy overflow-hidden"
      >
        {/* Video background with brand overlay */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-center"
            poster="/video/hero-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/video/hero.webm" type="video/webm" />
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 surface-navy opacity-[0.72]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-1/80 via-navy-1/30 to-navy-1" />
          <div className="absolute inset-0 grid-overlay opacity-40" />
        </div>

        {/* 3D animated shapes */}
        <Hero3DBackground />

        <div className="flex flex-col items-center justify-center h-full text-center relative z-20 space-y-5">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-sm"
          >
            <FiZap className="text-accent-via" />
            Built for pickleball clubs &amp; players
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-tight font-bold text-white max-w-sm sm:max-w-lg md:max-w-2xl mx-auto px-4"
          >
            {heroDetails.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-white/90 max-w-sm sm:max-w-lg mx-auto px-4 leading-relaxed"
          >
            {heroDetails.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-fit mx-auto pt-4"
          >
            <AppStoreButton dark />
            <PlayStoreButton dark />
          </motion.div>
          <div className="relative mt-4 sm:mt-6 mx-auto z-10">
            <Image
              src={heroDetails.centerImageSrc}
              width={500}
              height={500}
              quality={100}
              sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 160px"
              priority={true}
              unoptimized={true}
              alt="RallySphere Logo"
              className="relative z-10 w-32 sm:w-36 md:w-40 lg:w-40 mb-2 drop-shadow-2xl animate-float"
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