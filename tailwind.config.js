/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        // Semantic tokens are driven by CSS variables (see globals.css)
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        // Brand accents
        navy: '#0A0E1A',
        electric: {
          DEFAULT: '#2D7FFF',
          400: '#5C9BFF',
          500: '#2D7FFF',
          600: '#1E63FF',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          400: '#3DDFF5',
          500: '#22D3EE',
        },
        ember: {
          DEFAULT: '#FF7A1A',
          400: '#FF8A3D',
          500: '#FF7A1A',
          600: '#F26A0A',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(45 127 255 / 0.25), 0 8px 40px -8px rgb(45 127 255 / 0.45)',
        'glow-cyan': '0 0 0 1px rgb(34 211 238 / 0.25), 0 8px 40px -8px rgb(34 211 238 / 0.45)',
        'glow-ember': '0 8px 40px -8px rgb(255 122 26 / 0.5)',
        soft: '0 10px 40px -12px rgb(0 0 0 / 0.45)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
