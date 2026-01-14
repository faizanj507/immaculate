import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { WhyUs } from '@/components/organisms/WhyUs';
import { CompanyOfChoice } from '@/components/organisms/CompanyOfChoice';
import { ProfessionalCleaning } from '@/components/organisms/ProfessionalCleaning';
import { FlexibleServices } from '@/components/organisms/FlexibleServices';
import { ContactFormSection } from '@/components/organisms/ContactFormSection';
import { CTASection } from '@/components/organisms/CTASection';
import { BottomBanner } from '@/components/organisms/BottomBanner';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <CompanyOfChoice />
      <ProfessionalCleaning />
      <FlexibleServices />
      <ContactFormSection />
      <CTASection />
      <BottomBanner />
      <Footer />
    </main>
  );
}
