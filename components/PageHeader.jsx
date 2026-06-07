'use client';

import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden pb-8 pt-12 md:pb-12 md:pt-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight balance md:text-5xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
