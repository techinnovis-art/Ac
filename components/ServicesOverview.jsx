'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Icon from './ui/Icon';
import GlowCard from './GlowCard';
import SectionHeading from './ui/SectionHeading';
import { services } from '@/lib/site';

export default function ServicesOverview({ limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="section relative" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete AC & Geyser Solutions"
          subtitle="From quick repairs to full installations — one trusted team for all your home cooling and heating needs in Lahore."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {list.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <GlowCard className="h-full">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric/15 to-cyan/15 text-electric transition-all duration-300 group-hover:from-electric group-hover:to-cyan group-hover:text-white group-hover:scale-110 group-hover:-rotate-6">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-border/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      {s.group}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {limit && (
          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-ghost">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
