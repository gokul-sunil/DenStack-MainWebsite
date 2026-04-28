import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/home/HeroSection';
import { TrustBar } from '@/app/components/home/TrustBar';
import { RealParallaxSection } from '@/app/components/home/RealParallaxSection';
import { PracticeChallengesSection } from '@/app/components/home/PracticeChallengesSection';
import { WhoItsForSection } from '@/app/components/home/WhoItsForSection';
import { ROISection } from '@/app/components/home/ROISection';
import { TestimonialsSection } from '@/app/components/home/TestimonialsSection';
import { FinalCTASection } from '@/app/components/home/FinalCTASection';
import { PremiumMarketingSections } from '@/app/components/home/PremiumMarketingSections';
import { CareStackActionSection } from '@/app/components/home/CareStackActionSection';
import { SocialProofSection } from '@/app/components/home/SocialProofSection';
import { PlatformFeaturesSection } from '@/app/components/home/PlatformFeaturesSection';
import { StickyCTA } from '@/app/components/marketing/StickyCTA';
import { AmbientShaderBackground } from '@/app/components/effects/AmbientShaderBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] relative" style={{ position: 'relative' }}>
      <AmbientShaderBackground />
      <Header />
      
      <main className="relative" style={{ position: 'relative' }}>
        <HeroSection />
        <TrustBar />
        <PracticeChallengesSection />
        <RealParallaxSection />
        <WhoItsForSection />
        <ROISection />
        <PlatformFeaturesSection />
        <TestimonialsSection />
        <FinalCTASection />
        <PremiumMarketingSections />
        <CareStackActionSection />
        <SocialProofSection />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
