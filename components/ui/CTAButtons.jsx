'use client';

import Link from 'next/link';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { site, whatsappLink, telLink } from '@/lib/site';

/**
 * CTAButtons — the three core conversion actions.
 * Props:
 *  - book: show "Book Service Now" (default true)
 *  - call: show call button (default true)
 *  - whatsapp: show whatsapp button (default true)
 *  - size: 'md' | 'sm'
 */
export default function CTAButtons({
  book = true,
  call = true,
  whatsapp = true,
  size = 'md',
  className = '',
}) {
  const pad = size === 'sm' ? '!px-4 !py-2.5 text-sm' : '';
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {book && (
        <MagneticButton>
          <Link href="/booking" className={`btn-primary ${pad}`}>
            <CalendarCheck className="h-5 w-5" />
            Book Service Now
          </Link>
        </MagneticButton>
      )}
      {call && (
        <MagneticButton>
          <a href={telLink} className={`btn-ember ${pad}`}>
            <Phone className="h-5 w-5" />
            Call {site.contactPerson.split(' ')[0]}
          </a>
        </MagneticButton>
      )}
      {whatsapp && (
        <MagneticButton>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-whatsapp ${pad}`}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </a>
        </MagneticButton>
      )}
    </div>
  );
}
