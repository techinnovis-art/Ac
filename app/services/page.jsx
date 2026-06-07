import SectionWrapper from '@/components/SectionWrapper';
import PageHeader from '@/components/PageHeader';
import ServicesOverview from '@/components/ServicesOverview';
import PricingTable from '@/components/PricingTable';
import Process from '@/components/Process';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
  title: 'Our Services — AC Repair, Gas Filling & Geyser',
  description:
    'Full list of AC and geyser services in Lahore: repair, gas filling, installation, maintenance, shifting, compressor, PCB/kit, water leakage, and geyser repair & installation.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper first blur={false}>
        <PageHeader
          eyebrow="Our Services"
          title="Everything Your AC & Geyser Need"
          subtitle="One trusted team for repairs, installations, gas filling, maintenance and more — across all areas of Lahore."
        />
      </SectionWrapper>
      <SectionWrapper>
        <ServicesOverview />
      </SectionWrapper>
      <SectionWrapper>
        <PricingTable />
      </SectionWrapper>
      <SectionWrapper>
        <Process />
      </SectionWrapper>
      <SectionWrapper blur={false}>
        <EmergencyCTA />
      </SectionWrapper>
    </>
  );
}
