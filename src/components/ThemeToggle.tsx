'use client';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
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
            className={`px-4 py-3 rounded-full transition-colors text-xl leading-none
        ${isDark ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-neutral-200'}
      `}
            aria-label="Toggle theme"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;