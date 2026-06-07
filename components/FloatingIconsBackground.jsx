'use client';

import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import {
  Snowflake, Fan, Wrench, Thermometer, Wind, Flame, Cog,
  Droplets, Gauge, AirVent, Settings, Zap,
} from 'lucide-react';

// Deterministic placement so layout is stable across renders.
// left/top in %, size in px, depth = how strongly it reacts to the cursor.
const ICONS = [
  { Icon: Snowflake, left: 6, top: 14, size: 46, depth: 38, dur: 9, delay: 0 },
  { Icon: Fan, left: 88, top: 10, size: 54, depth: 30, dur: 11, delay: 1.2 },
  { Icon: Wrench, left: 14, top: 70, size: 40, depth: 44, dur: 10, delay: 0.6 },
  { Icon: Thermometer, left: 78, top: 64, size: 38, depth: 36, dur: 12, delay: 2 },
  { Icon: Wind, left: 46, top: 8, size: 50, depth: 26, dur: 13, delay: 0.4 },
  { Icon: Flame, left: 92, top: 80, size: 42, depth: 40, dur: 10.5, delay: 1.6 },
  { Icon: Cog, left: 4, top: 44, size: 56, depth: 22, dur: 14, delay: 0.9 },
  { Icon: Droplets, left: 60, top: 78, size: 36, depth: 46, dur: 9.5, delay: 2.4 },
  { Icon: Gauge, left: 70, top: 28, size: 44, depth: 32, dur: 11.5, delay: 0.2 },
  { Icon: AirVent, left: 30, top: 30, size: 40, depth: 34, dur: 12.5, delay: 1.4 },
  { Icon: Settings, left: 50, top: 52, size: 48, depth: 24, dur: 13.5, delay: 0.8 },
  { Icon: Zap, left: 22, top: 90, size: 38, depth: 42, dur: 10, delay: 2.1 },
];

function FloatingIcon({ Icon, left, top, size, depth, dur, delay, nx, ny }) {
  // Parallax: icons drift opposite the cursor (they "move away"), scaled by depth.
  const x = useTransform(nx, (v) => -v * depth);
  const y = useTransform(ny, (v) => -v * depth);
  const rotate = useTransform(nx, (v) => v * 10);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${left}%`, top: `${top}%`, x, y, rotate }}
    >
      {/* Inner element handles the slow infinite float so it composes with parallax */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
        transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
        className="text-electric/10 dark:text-cyan/10"
      >
        <Icon style={{ width: size, height: size }} strokeWidth={1.4} />
      </motion.div>
    </motion.div>
  );
}

export default function FloatingIconsBackground() {
  const reduce = useReducedMotion();

  // Normalized cursor position in [-0.5, 0.5] from screen center, spring-smoothed.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const nx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.4 });
  const ny = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, rawX, rawY]);

  // Reduced motion: render a few static, faint icons (no animation, no parallax).
  if (reduce) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {ICONS.slice(0, 6).map((it, i) => (
          <div key={i} className="absolute text-electric/5" style={{ left: `${it.left}%`, top: `${it.top}%` }}>
            <it.Icon style={{ width: it.size, height: it.size }} strokeWidth={1.4} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ICONS.map((it, i) => (
        <FloatingIcon key={i} {...it} nx={nx} ny={ny} />
      ))}
    </div>
  );
}
