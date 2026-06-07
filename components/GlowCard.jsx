'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * GlowCard
 * Premium interactive card:
 *  - cursor-tracking radial spotlight (follows the mouse inside the card)
 *  - animated gradient border on hover
 *  - smooth lift + subtle scale
 *  - works as a glassmorphism surface
 *
 * Pure CSS-variable updates on pointer move (no React re-renders) for speed.
 */
export default function GlowCard({ children, className = '', lift = true }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      whileHover={reduce || !lift ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glow-card group relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* gradient border on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/45 via-cyan/35 to-ember/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* cursor spotlight */}
      <span className="glow-card__spot pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* glass surface (1px inset reveals the gradient border) */}
      <div className="glass relative m-px h-[calc(100%-2px)] rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}
