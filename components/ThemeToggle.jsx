'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative grid h-10 w-10 place-items-center rounded-xl border border-border/20 bg-card/60 text-fg transition-colors hover:border-electric/50 hover:text-electric ${className}`}
    >
      {/* Avoid hydration flash: render a neutral icon until mounted */}
      {!mounted ? (
        <Sun className="h-5 w-5 opacity-0" />
      ) : isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
