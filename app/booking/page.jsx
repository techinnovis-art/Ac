import SectionWrapper from '@/components/SectionWrapper';
import PageHeader from '@/components/PageHeader';
import BookingForm from '@/components/BookingForm';
import Process from '@/components/Process';
import { ShieldCheck, Clock, ReceiptText, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Book a Service — AC Repair & Geyser in Lahore',
  description:
    'Book AC repair, gas filling, installation, maintenance or geyser service in Lahore online. Quick booking, same-day service available, transparent pricing.',
  alternates: { canonical: '/booking' },
};

const perks = [
  { icon: Clock, text: 'Same-day service available' },
  { icon: ReceiptText, text: 'Transparent, upfront pricing' },
  { icon: ShieldCheck, text: 'Warranty on selected services' },
  { icon: MessageCircle, text: 'Fast WhatsApp confirmation' },
];

export default function BookingPage() {
  return (
    <>
      <SectionWrapper first blur={false}>
        <PageHeader
          eyebrow="Book Online"
          title="Book Your AC or Geyser Service"
          subtitle="Fill in a few details and we’ll confirm your slot on WhatsApp. It takes less than a minute."
        />
      </SectionWrapper>

      <SectionWrapper blur={false}>
        <section className="relative pb-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <BookingForm />

            {/* Trust sidebar */}
            <aside className="space-y-3">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold">Why book with us?</h3>
                <ul className="mt-4 space-y-3">
                  {perks.map((p) => (
                    <li key={p.text} className="flex items-center gap-3 text-sm text-muted">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric/15 to-cyan/15 text-electric">
                        <p.icon className="h-4 w-4" />
                      </span>
                      {p.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl bg-gradient-to-br from-electric/10 to-cyan/10 p-6">
                <p className="text-sm leading-relaxed text-muted">
                  Prefer to talk first? Call or WhatsApp us directly and we’ll guide you through
                  the best option for your AC or geyser.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      </SectionWrapper>

      <SectionWrapper>
        <Process />
      </SectionWrapper>
    </>
  );
}
