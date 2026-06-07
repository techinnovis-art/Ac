'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Wind } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { site, telLink } from '@/lib/site';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric-600 to-cyan-500 text-white shadow-glow">
            <Wind className="h-5 w-5" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">
              Service<span className="text-gradient-blue">Hub</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              Lahore
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-underline relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-electric' : 'text-muted hover:text-fg'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-electric to-cyan"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-xl border border-border/20 bg-card/60 px-3 py-2 text-sm font-medium text-fg transition-colors hover:border-ember/50 hover:text-ember lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-ember" />
            {site.phoneDisplay}
          </a>
          <ThemeToggle />
          <Link href="/booking" className="btn-primary hidden !px-4 !py-2.5 text-sm sm:inline-flex">
            Book Now
          </Link>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border/20 bg-card/60 text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t border-border/10 md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      active ? 'bg-electric/10 text-electric' : 'text-fg hover:bg-card/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/booking" className="btn-primary mt-2">
                Book Service Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
