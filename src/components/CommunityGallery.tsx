'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCamera } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';

const photos = ['g1', 'g4', 'g2', 'g7', 'g6', 'g3', 'g8', 'g5'];

const CommunityGallery: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden surface-navy text-ink-on-inverse">
      <div className="absolute inset-0 z-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-accent-from/15 blur-3xl" />
        <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-accent-to/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-12 xl:px-20 space-y-14">
        <SectionHeading
          inverse
          eyebrow="The RallySphere Community"
          title={<>Where pickleball <span className="text-gradient-animated">comes alive</span></>}
          subtitle="Real players, real clubs, real nights on the court. This is the community you’re joining."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {photos.map((g, i) => (
            <motion.div
              key={g}
              initial={{ opacity: 0, y: 28, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 shadow-xl"
            >
              <Image
                src={`/images/photos/${g}.jpg`}
                alt="RallySphere community"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-1/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <FiCamera size={12} className="text-accent-via" />
                RallySphere
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;
