'use client';

import { motion } from 'framer-motion';
import { Target, Eye, HandHeart, Wrench } from 'lucide-react';
import Reveal from './ui/Reveal';
import CTAButtons from './ui/CTAButtons';
import { site } from '@/lib/site';

const values = [
  { icon: Target, title: 'Our Mission', text: 'To make professional AC and geyser service in Lahore fast, fair, and stress-free for every home.' },
  { icon: Eye, title: 'Our Promise', text: 'Honest diagnosis, transparent pricing, and clean workmanship — every single visit.' },
  { icon: HandHeart, title: 'Our Values', text: 'Respect for your home, your time, and your budget. We treat your equipment like our own.' },
];

export default function AboutContent() {
  return (
    <section className="section relative pt-4">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-electric/20 to-cyan/15 blur-2xl" />
              <div className="glass relative rounded-3xl p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-600 to-cyan-500 text-white shadow-glow">
                  <Wrench className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  Led by {site.contactPerson}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Service Hub was built on a simple idea: getting your AC or geyser fixed in
                  Lahore shouldn’t be a hassle. What started as a one-man service has grown into
                  a trusted team of skilled technicians serving homes across the city.
                </p>
                <p className="mt-3 leading-relaxed text-muted">
                  We handle everything from quick gas top-ups to full installations and tricky
                  PCB faults — always with honest advice and fair, upfront pricing.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[['500+', 'Jobs'], ['12+', 'Brands'], ['4.9★', 'Rated']].map(([v, l]) => (
                    <div key={l} className="rounded-xl border border-border/10 bg-bg/40 py-3">
                      <p className="font-display text-xl font-extrabold text-gradient-blue">{v}</p>
                      <p className="text-xs text-muted">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass flex gap-4 rounded-2xl p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/15 to-cyan/15 text-electric">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold">{v.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </motion.div>
            ))}
            <Reveal delay={0.3}>
              <CTAButtons className="pt-2" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
