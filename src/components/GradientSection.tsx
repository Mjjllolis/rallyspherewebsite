'use client';

import { motion } from 'framer-motion';

interface GradientSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'cyan' | 'purple';
}

export default function GradientSection({ children, className = '', variant = 'default' }: GradientSectionProps) {
  const gradients = {
    default: 'bg-gradient-to-b from-white via-blue-50/30 to-white',
    blue: 'bg-gradient-to-br from-blue-50/40 via-white to-cyan-50/30',
    cyan: 'bg-gradient-to-bl from-cyan-50/30 via-white to-blue-50/40',
    purple: 'bg-gradient-to-r from-purple-50/20 via-blue-50/30 to-cyan-50/20',
  };

  return (
    <motion.div
      className={`relative w-full ${gradients[variant]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient orbs in background - full width */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
}
