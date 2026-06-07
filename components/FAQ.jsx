'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import CTAButtons from './ui/CTAButtons';
import { faqs } from '@/lib/site';

export default function FAQ({ limit, withHeading = true }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState(0);

  return (
    <section className="section relative" id="faq">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="FAQ"
            title="Questions? We’ve Got Answers"
            subtitle="Everything you need to know about our AC and geyser services in Lahore."
          />
        )}

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {list.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className={`glass overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? 'border-electric/30' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-semibold md:text-lg">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors ${
                      isOpen ? 'bg-electric text-white' : 'bg-card/60 text-electric'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButtons book={false} />
        </div>
      </div>
    </section>
  );
}
