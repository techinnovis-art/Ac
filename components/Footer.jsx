'use client';

import Link from 'next/link';
import { Wind, Phone, MapPin, MessageCircle, Mail, Clock } from 'lucide-react';
import { site, telLink, whatsappLink } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-border/10 bg-surface/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric-600 to-cyan-500 text-white">
                <Wind className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">
                Service<span className="text-gradient-blue">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted">
              Reliable AC repair, gas filling, installation, maintenance and geyser
              services across Lahore. Fast, trusted and professional.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {[
                ['Home', '/'],
                ['Services', '/services'],
                ['About Us', '/about'],
                ['Booking', '/booking'],
                ['FAQ', '/faq'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-electric">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {[
                'AC Repair',
                'AC Gas Filling',
                'AC Installation',
                'AC Maintenance',
                'Geyser Repair',
                'Geyser Installation',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="transition-colors hover:text-electric">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                <span>{site.city}, {site.region}, {site.country}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-ember" />
                <a href={telLink} className="hover:text-fg">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan" />
                <a href={`mailto:${site.email}`} className="hover:text-fg">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-electric" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-6 text-sm text-muted md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Contact Person: <span className="font-medium text-fg">{site.contactPerson}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
