import SectionWrapper from '@/components/SectionWrapper';
import PageHeader from '@/components/PageHeader';
import FAQ from '@/components/FAQ';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
  title: 'FAQ — AC Repair & Geyser Service Questions',
  description:
    'Answers to common questions about AC cooling problems, gas filling cost, AC water leakage, AC shifting, geyser ignition, same-day service, warranty and areas covered in Lahore.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <>
      <SectionWrapper first blur={false}>
        <PageHeader
          eyebrow="Help Center"
          title="Frequently Asked Questions"
          subtitle="Quick answers about our AC and geyser services across Lahore. Still unsure? Just message us."
        />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ withHeading={false} />
      </SectionWrapper>
      <SectionWrapper blur={false}>
        <EmergencyCTA />
      </SectionWrapper>
    </>
  );
}
