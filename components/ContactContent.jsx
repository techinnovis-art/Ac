'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Clock, User } from 'lucide-react';
import ContactForm from './ContactForm';
import Reveal from './ui/Reveal';
import { site, telLink, whatsappLink } from '@/lib/site';

const cards = [
  { icon: User, label: 'Contact Person', value: site.contactPerson, href: null, color: 'text-electric' },
  { icon: Phone, label: 'Call Us', value: site.phoneDisplay, href: telLink, color: 'text-ember' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappLink(), color: 'text-[#25D366]', external: true },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, color: 'text-cyan' },
  { icon: MapPin, label: 'Location', value: `${site.city}, ${site.region}, ${site.country}`, href: null, color: 'text-electric' },
  { icon: Clock, label: 'Hours', value: site.hours, href: null, color: 'text-ember' },
];

export default function ContactContent() {
  return (
    <section className="section relative pt-4">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: info + map */}
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map((c, i) => {
                const inner = (
                  <>
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card/60 ${c.color}`}>
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
                      <p className="truncate font-semibold text-fg">{c.value}</p>
                    </div>
                  </>
                );
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? '_blank' : undefined}
                        rel={c.external ? 'noopener noreferrer' : undefined}
                        className="glass flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-electric/30"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="glass flex items-center gap-3 rounded-2xl p-4">{inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Map placeholder — replace src with your Google Maps embed URL */}
            <Reveal>
              <div className="glass overflow-hidden rounded-2xl">
                <div className="relative grid h-64 place-items-center bg-gradient-to-br from-electric/10 via-transparent to-cyan/10">
                  <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-30" />
                  <div className="relative text-center">
                    <MapPin className="mx-auto h-10 w-10 text-electric" />
                    <p className="mt-2 font-display font-semibold">Serving All of Lahore</p>
                    <p className="text-sm text-muted">{site.region}, {site.country}</p>
                  </div>
                </div>
                {/*
                  TO ADD A REAL MAP: replace the block above with an iframe, e.g.
                  <iframe
                    title="Service Hub Location"
                    src="PASTE_GOOGLE_MAPS_EMBED_URL"
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                */}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div>
            <Reveal>
              <h2 className="mb-4 font-display text-2xl font-bold">Send Us a Message</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
