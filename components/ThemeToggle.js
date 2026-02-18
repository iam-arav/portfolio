"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = ['royal', 'emerald', 'crimson'];

export default function ThemeToggle() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'royal';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setThemeIndex(themes.indexOf(savedTheme));
  }, []);

  useEffect(() => {
    if (mounted) {
      const currentTheme = themes[themeIndex];
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, [themeIndex, mounted]);

  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-surface/80 border border-primary/30 backdrop-blur-md rounded-full shadow-lg group hover:border-primary transition-colors"
    >
      {/* The Animated Star Icon */}
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-primary"
        animate={{ rotate: themeIndex * 120 }} // Rotates 120deg on every click
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </motion.svg>

      <span className="text-sm font-mono font-bold text-slate-300 group-hover:text-primary transition-colors">
        Theme
      </span>
    </motion.button>
  );
}