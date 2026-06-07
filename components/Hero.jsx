'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, Star, Zap } from 'lucide-react';
import CTAButtons from './ui/CTAButtons';
import { site } from '@/lib/site';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '500+', label: 'Jobs Completed' },
  { value: 'Same-Day', label: 'Service Available' },
  { value: '12+', label: 'Brands Supported' },
  { value: '4.9★', label: 'Customer Rating' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
      {/* Animated gradient atmosphere specific to the hero */}
      <div
        aria-hidden
        className="animated-gradient pointer-events-none absolute left-1/2 top-0 -z-10 h-[120%] w-[140%] -translate-x-1/2 opacity-60 blur-3xl"
        style={{
          backgroundImage:
            'radial-gradient(40% 50% at 20% 20%, rgba(45,127,255,0.22), transparent 70%), radial-gradient(40% 50% at 80% 10%, rgba(34,211,238,0.18), transparent 70%), radial-gradient(40% 50% at 60% 80%, rgba(255,122,26,0.14), transparent 70%)',
        }}
      />
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-7">
            <motion.span variants={item} className="eyebrow">
              <Snowflake className="h-3.5 w-3.5" />
              {site.areaNote}
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight balance sm:text-5xl md:text-6xl"
            >
              Reliable{' '}
              <span className="text-gradient">AC Repair</span> &{' '}
              <span className="text-gradient-blue">Geyser Services</span> in Lahore
            </motion.h1>

            <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Fast, trusted, and professional service for AC repair, gas filling,
              installation, maintenance, indoor/outdoor faults, geyser repair, and
              complete home cooling &amp; heating solutions.
            </motion.p>

            <motion.div variants={item}>
              <CTAButtons />
            </motion.div>

            {/* Trust row */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-electric" /> Warranty on selected services
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-ember" /> Fast WhatsApp response
              </span>
            </motion.div>
          </motion.div>

          {/* Right: floating glass panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-electric/30 via-cyan/20 to-ember/20 blur-2xl" />
            <div className="relative animate-float">
              <div className="glass rounded-3xl p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric-600 to-cyan-500 text-white">
                      <Snowflake className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-display font-bold">Cooling Restored</p>
                      <p className="text-xs text-muted">Inverter AC • DHA Lahore</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#25D366]/15 px-3 py-1 text-xs font-semibold text-[#25D366]">
                    Done
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ['Gas Refilled', 'R410A'],
                    ['Coil Cleaned', '✓'],
                    ['Cooling Test', '16°C'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between rounded-xl border border-border/10 bg-bg/40 px-4 py-3 text-sm">
                      <span className="text-muted">{k}</span>
                      <span className="font-semibold">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1 text-ember">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs text-muted">“Quick & professional”</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
            >
              <p className="font-display text-2xl font-extrabold text-gradient-blue md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-muted md:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
