'use client';

export default function WaveTransition() {
  return (
    <div className="absolute bottom-[-2px] left-0 right-0 w-full h-32 overflow-hidden">
      {/* Animated SVG Wave */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#001B33" stopOpacity="1" />
            <stop offset="50%" stopColor="#002B5C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#004B94" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Background wave - slowest */}
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.3"
          d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z;
              M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,120 L0,120 Z;
              M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z
            "
          />
        </path>

        {/* Middle wave */}
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.5"
          d="M0,40 C320,70 640,10 960,40 C1280,70 1440,10 1440,40 L1440,120 L0,120 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,40 C320,70 640,10 960,40 C1280,70 1440,10 1440,40 L1440,120 L0,120 Z;
              M0,70 C320,40 640,100 960,70 C1280,40 1440,100 1440,70 L1440,120 L0,120 Z;
              M0,40 C320,70 640,10 960,40 C1280,70 1440,10 1440,40 L1440,120 L0,120 Z
            "
          />
        </path>

        {/* Foreground wave - fastest */}
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,80 C360,50 720,110 1080,80 C1260,65 1350,95 1440,80 L1440,120 L0,120 Z"
        >
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="
              M0,80 C360,50 720,110 1080,80 C1260,65 1350,95 1440,80 L1440,120 L0,120 Z;
              M0,95 C360,65 720,125 1080,95 C1260,80 1350,110 1440,95 L1440,120 L0,120 Z;
              M0,80 C360,50 720,110 1080,80 C1260,65 1350,95 1440,80 L1440,120 L0,120 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
