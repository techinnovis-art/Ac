'use client';

import Link from 'next/link';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { whatsappLink, telLink } from '@/lib/site';

export default function StickyCTA() {
  return (
    <>
      {/* Floating WhatsApp button — visible on all screens */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group glow-pulse fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" />
      </a>

      {/* Sticky bottom bar — mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/10 bg-surface/90 backdrop-blur-lg md:hidden">
        <div className="grid grid-cols-3 gap-px">
          <a
            href={telLink}
            className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-fg"
          >
            <Phone className="h-5 w-5 text-ember" />
            Call
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 border-x border-border/10 py-3 text-xs font-semibold text-fg"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            WhatsApp
          </a>
          <Link
            href="/booking"
            className="flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-electric-600 to-cyan-500 py-3 text-xs font-semibold text-white"
          >
            <CalendarCheck className="h-5 w-5" />
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
