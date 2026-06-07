'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { reviews } from '@/lib/site';

export default function Reviews() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Lahore Says About Us"
          subtitle="Real feedback from homeowners across the city who trusted Service Hub with their cooling and heating."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass relative flex flex-col gap-4 rounded-2xl p-6"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-electric/15" />
              <div className="flex items-center gap-0.5 text-ember">
                {[...Array(r.rating)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-muted">“{r.text}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan font-display text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-fg">{r.name}</p>
                  <p className="text-xs text-muted">{r.area}, Lahore</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
