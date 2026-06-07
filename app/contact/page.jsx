import SectionWrapper from '@/components/SectionWrapper';
import PageHeader from '@/components/PageHeader';
import ContactContent from '@/components/ContactContent';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
  title: 'Contact Us — Book AC & Geyser Service in Lahore',
  description:
    'Contact Service Hub for AC repair, gas filling and geyser service in Lahore. Call, WhatsApp, or send us a message. Contact person: Salman Naveed.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper first blur={false}>
        <PageHeader
          eyebrow="Get In Touch"
          title="Let’s Get Your Home Comfortable Again"
          subtitle="Call, WhatsApp, or drop us a message. We respond fast and serve all areas of Lahore."
        />
      </SectionWrapper>
      <SectionWrapper blur={false}>
        <ContactContent />
      </SectionWrapper>
      <SectionWrapper blur={false}>
        <EmergencyCTA />
      </SectionWrapper>
    </>
  );
}
