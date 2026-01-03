import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DiamondSection from '@/components/DiamondSection';
import LiveClaimsCounter from '@/components/LiveClaimsCounter';
import BundlesSection from '@/components/BundlesSection';
import RedeemSection from '@/components/RedeemSection';
import LoginSection from '@/components/LoginSection';
import CharactersSection from '@/components/CharactersSection';
import EmotesSection from '@/components/EmotesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Scan Lines Effect */}
      <div className="fixed inset-0 pointer-events-none scanlines z-10" />
      
      {/* Main Content */}
      <div className="relative z-20">
        <Navbar />
        <HeroSection />
        <LiveClaimsCounter />
        <DiamondSection />
        <BundlesSection />
        <RedeemSection />
        <LoginSection />
        <CharactersSection />
        <EmotesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
