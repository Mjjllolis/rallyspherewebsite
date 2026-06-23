'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi2';

interface ThemeToggleProps {
    className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch — only render the resolved icon after mount.
    useEffect(() => setMounted(true), []);

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 backdrop-blur-sm ${className}`}
            aria-label="Toggle color theme"
            type="button"
        >
            {/* Render a stable placeholder until mounted to keep SSR/CSR markup identical */}
            {!mounted ? (
                <span className="block w-6 h-6" />
            ) : isDark ? (
                <HiSun className="w-6 h-6 text-accent-via" />
            ) : (
                <HiMoon className="w-6 h-6 text-accent-via" />
            )}
        </button>
    );
};

export default ThemeToggle;
