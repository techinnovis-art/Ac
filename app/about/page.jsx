import SectionWrapper from '@/components/SectionWrapper';
import PageHeader from '@/components/PageHeader';
import AboutContent from '@/components/AboutContent';
import WhyChooseUs from '@/components/WhyChooseUs';
import Brands from '@/components/Brands';
import Reviews from '@/components/Reviews';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
  title: 'About Us — Trusted AC & Geyser Experts in Lahore',
  description:
    'Service Hub is a trusted team of AC and geyser technicians in Lahore led by Salman Naveed. Honest pricing, skilled work, and same-day service across the city.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper first blur={false}>
        <PageHeader
          eyebrow="About Service Hub"
          title="Lahore’s Trusted Cooling & Heating Team"
          subtitle="Skilled technicians, honest pricing, and a genuine commitment to getting your home comfortable again — fast."
        />
      </SectionWrapper>
      <SectionWrapper>
        <AboutContent />
      </SectionWrapper>
      <SectionWrapper>
        <WhyChooseUs />
      </SectionWrapper>
      <SectionWrapper>
        <Brands />
      </SectionWrapper>
      <SectionWrapper>
        <Reviews />
      </SectionWrapper>
      <SectionWrapper blur={false}>
        <EmergencyCTA />
      </SectionWrapper>
    </>
  );
}
