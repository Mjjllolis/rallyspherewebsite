'use client';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false); // Default to light mode

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        // Default to light mode if no preference is stored
        if (stored === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
            if (!stored) {
                localStorage.setItem('theme', 'light');
            }
        }
    }, []);

    const toggle = () => {
        const html = document.documentElement;
        const next = !isDark;
        html.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        setIsDark(next);
    };

    return (
        <button
            onClick={toggle}
            className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <HiSun className="w-6 h-6 text-yellow-300" />
            ) : (
                <HiMoon className="w-6 h-6 text-blue-400" />
            )}
        </button>
    );
};

export default ThemeToggle;