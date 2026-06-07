import SectionWrapper from '@/components/SectionWrapper';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Brands from '@/components/Brands';
import PricingTable from '@/components/PricingTable';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import EmergencyCTA from '@/components/EmergencyCTA';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <>
      <SectionWrapper first blur={false}>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <ServicesOverview limit={8} />
      </SectionWrapper>
      <SectionWrapper>
        <WhyChooseUs />
      </SectionWrapper>
      <SectionWrapper blur={false}>
        <EmergencyCTA />
      </SectionWrapper>
      <SectionWrapper>
        <Brands />
      </SectionWrapper>
      <SectionWrapper>
        <PricingTable />
      </SectionWrapper>
      <SectionWrapper>
        <Process />
      </SectionWrapper>
      <SectionWrapper>
        <Reviews />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ limit={6} />
      </SectionWrapper>
    </>
  );
}
