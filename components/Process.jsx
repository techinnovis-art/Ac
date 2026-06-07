'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { processSteps } from '@/lib/site';

export default function Process() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works — Booking to Done"
          subtitle="A clear, hassle-free process from your first message to a fully working AC or geyser."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-600 to-cyan-500 font-display text-xl font-extrabold text-white shadow-glow">
                  {s.step}
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
