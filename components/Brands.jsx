'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { brands } from '@/lib/site';

export default function Brands() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="All Brands Supported"
          title="We Service Every Major AC Brand"
          subtitle="Whatever you own, our technicians have the parts knowledge and tools to fix it."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative grid h-24 place-items-center overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/30 to-cyan/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="glass relative m-px grid h-[calc(100%-2px)] w-[calc(100%-2px)] place-items-center rounded-2xl">
                {/* Logo-style text badge. Replace with <Image> logos in /public when available. */}
                <span className="font-display text-lg font-extrabold tracking-tight text-fg/80 transition-colors group-hover:text-gradient-blue">
                  {brand}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          …and many other brands. Don’t see yours?{' '}
          <span className="font-medium text-electric">Just ask — we’ve got it covered.</span>
        </p>
      </div>
    </section>
  );
}
