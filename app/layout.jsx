import './globals.css';
import { Sora, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import FloatingIconsBackground from '@/components/FloatingIconsBackground';
import { site } from '@/lib/site';

// Distinctive technical display font + clean body font (optimized & self-hosted by Next).
const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'AC Repair & Geyser Service in Lahore | Service Hub',
    template: '%s | Service Hub Lahore',
  },
  description:
    'Reliable AC repair, gas filling, installation, maintenance and geyser services in Lahore. Same-day service, all brands, transparent pricing. Call or WhatsApp Service Hub today.',
  keywords: [
    'AC repair Lahore',
    'AC gas filling Lahore',
    'AC service Lahore',
    'AC installation Lahore',
    'geyser repair Lahore',
    'geyser installation Lahore',
    'AC maintenance Lahore',
    'AC technician Lahore',
    'split AC repair Lahore',
    'home cooling heating Lahore',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: site.url,
    siteName: site.name,
    title: 'AC Repair & Geyser Service in Lahore | Service Hub',
    description:
      'Fast, trusted and professional AC & geyser services across Lahore. Same-day service available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair & Geyser Service in Lahore | Service Hub',
    description:
      'Fast, trusted and professional AC & geyser services across Lahore. Same-day service available.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport = {
  themeColor: '#050810',
  width: 'device-width',
  initialScale: 1,
};

// LocalBusiness structured data for local SEO.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: site.name,
  description:
    'AC repair, gas filling, installation, maintenance and geyser services in Lahore.',
  areaServed: { '@type': 'City', name: 'Lahore' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  telephone: site.phoneTel,
  url: site.url,
  openingHours: 'Mo-Su 08:00-23:00',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable} dark`} suppressHydrationWarning>
      <body className="relative min-h-screen font-sans antialiased">
        {/* Background atmosphere — layered animated glows + faint grid */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-40" />
          <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] animate-float rounded-full bg-electric/20 blur-[120px]" style={{ opacity: 'var(--hero-glow)', animationDuration: '13s' }} />
          <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] animate-float rounded-full bg-cyan/20 blur-[120px]" style={{ opacity: 'var(--hero-glow)', animationDuration: '17s', animationDelay: '1.5s' }} />
          <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] animate-float rounded-full bg-ember/10 blur-[120px]" style={{ animationDuration: '15s', animationDelay: '0.8s' }} />
        </div>

        {/* Floating service icons with cursor parallax (client component) */}
        <FloatingIconsBackground />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider>
          <Navbar />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
          <StickyCTA />
          {/* Spacer so mobile sticky bar never covers content */}
          <div className="h-16 md:hidden" aria-hidden />
        </ThemeProvider>
      </body>
    </html>
  );
}
