'use client';

interface GradientSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'cyan' | 'purple';
}

export default function GradientSection({ children, className = '', variant = 'default' }: GradientSectionProps) {
  const gradients = {
    default: 'bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#0A0F1C] dark:via-[#0B1120]/50 dark:to-[#0A0F1C]',
    blue: 'bg-gradient-to-br from-blue-50/40 via-white to-cyan-50/30 dark:from-blue-950/20 dark:via-[#0A0F1C] dark:to-cyan-950/20',
    cyan: 'bg-gradient-to-bl from-cyan-50/30 via-white to-blue-50/40 dark:from-cyan-950/20 dark:via-[#0A0F1C] dark:to-blue-950/20',
    purple: 'bg-gradient-to-r from-purple-50/20 via-blue-50/30 to-cyan-50/20 dark:from-purple-950/10 dark:via-blue-950/20 dark:to-cyan-950/10',
  };

  return (
    <div className={`relative w-full ${gradients[variant]} ${className}`}>
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
    </div>
  );
}
