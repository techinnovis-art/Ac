'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'framer-motion';

/**
 * SectionWrapper
 * Premium scroll-linked section transition.
 *  - As a section enters from the bottom it fades + slides up + scales in.
 *  - As it leaves the top it softly lifts away, fades and scales down,
 *    so the previous block "moves above and removes at the top" while the
 *    next block rises into focus.
 *
 * Props:
 *  - first:   true for the top (hero) section — stays fully visible on load,
 *             only animates on the way OUT.
 *  - blur:    enable a subtle focus-blur on enter/exit (default true).
 *  - className / id passed through.
 */
export default function SectionWrapper({
  children,
  first = false,
  blur = true,
  className = '',
  id,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Keyframe stops: enter (0 -> .18), hold (.18 -> .82), exit (.82 -> 1)
  const opacity = useTransform(
    scrollYProgress,
    first ? [0, 0.82, 1] : [0, 0.18, 0.82, 1],
    first ? [1, 1, 0] : [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    first ? [0, 0.82, 1] : [0, 0.18, 0.82, 1],
    first ? [0, 0, -70] : [70, 0, 0, -70]
  );
  const scale = useTransform(
    scrollYProgress,
    first ? [0, 0.82, 1] : [0, 0.18, 0.82, 1],
    first ? [1, 1, 0.95] : [0.94, 1, 1, 0.95]
  );
  const blurPx = useTransform(
    scrollYProgress,
    first ? [0, 0.82, 1] : [0, 0.18, 0.82, 1],
    first ? [0, 0, 5] : [5, 0, 0, 5]
  );
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  if (reduce) {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`will-change-transform ${className}`}
      style={{ opacity, y, scale, filter: blur ? filter : undefined }}
    >
      {children}
    </motion.div>
  );
}

// Alias requested in the brief.
export const AnimatedSection = SectionWrapper;
