'use client';

import { motion } from 'framer-motion';
import Icon from './ui/Icon';
import SectionHeading from './ui/SectionHeading';
import { whyChooseUs } from '@/lib/site';

export default function WhyChooseUs() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Why Service Hub"
          title="Lahore Trusts Us For A Reason"
          subtitle="We combine skilled technicians, honest pricing, and fast service so you can relax while we handle the rest."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
