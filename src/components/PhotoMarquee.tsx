'use client';

import Image from 'next/image';

const photos = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'].map(
  (g) => `/images/photos/${g}.jpg`
);

interface PhotoMarqueeProps {
  reverse?: boolean;
}

/**
 * Infinite horizontal photo slideshow. The track is duplicated so the CSS
 * marquee loops seamlessly; pauses on hover. Edge gradients fade into the page.
 */
const PhotoMarquee: React.FC<PhotoMarqueeProps> = ({ reverse = false }) => {
  const track = [...photos, ...photos];
  return (
    <div className="group relative w-full overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent" />

      <div
        className={`flex w-max gap-4 sm:gap-5 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="relative h-44 w-64 flex-shrink-0 overflow-hidden rounded-2xl border border-line shadow-lg sm:h-56 sm:w-80"
          >
            <Image
              src={src}
              alt="RallySphere community"
              fill
              sizes="320px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
