'use client';

import { motion } from 'framer-motion';
import { Info, CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import CTAButtons from './ui/CTAButtons';
import { gasPricing } from '@/lib/site';

export default function PricingTable() {
  return (
    <section className="section relative" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="Gas Types & Estimated Rates"
          title="Transparent, Honest Pricing"
          subtitle="“Starting From” rates so you know roughly what to expect. The exact price is always confirmed after a quick on-site inspection — no surprises."
        />

        {/* Cards on mobile, table feel on desktop */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mx-auto mt-14 grid max-w-4xl gap-3"
        >
          {/* Header row (desktop) */}
          <div className="hidden grid-cols-12 gap-4 px-6 text-xs font-semibold uppercase tracking-wider text-muted md:grid">
            <div className="col-span-4">Service / Gas Type</div>
            <div className="col-span-5">Details</div>
            <div className="col-span-3 text-right">Starting From</div>
          </div>

          {gasPricing.map((row) => (
            <motion.div
              key={row.type}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass group grid grid-cols-2 items-center gap-3 rounded-2xl p-5 transition-colors hover:border-electric/30 md:grid-cols-12 md:gap-4 md:px-6"
            >
              <div className="col-span-2 flex items-center gap-3 md:col-span-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan" />
                <span className="font-display font-bold">{row.type}</span>
              </div>
              <div className="col-span-2 text-sm text-muted md:col-span-5">{row.note}</div>
              <div className="col-span-2 md:col-span-3 md:text-right">
                <span className="font-display text-xl font-extrabold text-gradient-blue">
                  {row.unit} {row.from}
                </span>
                <span className="ml-1 text-xs text-muted">+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <div className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-2xl border border-ember/20 bg-ember/5 p-4 text-sm text-muted">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
          <p>
            Prices are <span className="font-semibold text-fg">estimated</span> and depend on AC size,
            gas level, leakage, and overall service condition.{' '}
            <span className="font-semibold text-fg">Final price will be confirmed after inspection.</span>
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButtons book whatsapp call={false} />
        </div>
      </div>
    </section>
  );
}
