'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Siren } from 'lucide-react';
import { whatsappLink, telLink, site } from '@/lib/site';

export default function EmergencyCTA() {
  return (
    <section className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/10 p-8 text-center md:p-14"
        >
          {/* background gradient + glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-electric-600/90 via-electric-500/80 to-cyan-500/80" />
          <div className="absolute inset-0 -z-10 bg-grid-faint [background-size:36px_36px] opacity-30" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/40 blur-3xl" />

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            <Siren className="h-4 w-4" /> Emergency Service
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white balance md:text-4xl">
            Need urgent AC or geyser repair in Lahore?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Don’t sweat it. {site.contactPerson} and the team are ready to help — same-day
            service available across the city.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-navy shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href={whatsappLink('I need urgent AC/geyser repair in Lahore. Please help.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
