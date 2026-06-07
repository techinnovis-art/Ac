'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * MagneticButton
 * Wrap any element (Link, <a>, <button>) to give it a subtle magnetic pull
 * toward the cursor, springing back on leave. Renders an inline-flex wrapper
 * so it doesn't disturb layout.
 *
 * Props:
 *  - strength: how far it moves toward the cursor (px-ish factor). Default 0.35.
 */
export default function MagneticButton({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  );
}
