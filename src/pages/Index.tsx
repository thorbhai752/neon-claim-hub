import { useEffect } from "react";

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

/* ---------- AD COMPONENT ---------- */
const AdScript = ({
  src,
  atOptions,
  containerId,
}: {
  src: string;
  atOptions?: any;
  containerId?: string;
}) => {
  useEffect(() => {
    if (atOptions) {
      (window as any).atOptions = atOptions;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return containerId ? <div id={containerId} className="my-6 text-center" /> : null;
};

/* ---------- STICKY AD ---------- */
const StickyBottomAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl28075412.effectivegatecpm.com/a4/e3/5e/a4e35e67e1bc52f75119297d17333669.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <div className="fixed inset-0 pointer-events-none scanlines z-10" />

      {/* 🔥 AD 1 – Top pop (highest CTR) */}
      <AdScript src="https://pl28075406.effectivegatecpm.com/9c/87/58/9c87582bfed6d2546ec5e958aa2696ec.js" />

      <div className="relative z-20">
        <Navbar />

        {/* 🔥 AD 2 – Just below hero */}
        <HeroSection />
        <AdScript
          src="https://www.highperformanceformat.com/3ec249203d50b6999bea46efccf8ef9b/invoke.js"
          atOptions={{
            key: "3ec249203d50b6999bea46efccf8ef9b",
            format: "iframe",
            height: 300,
            width: 160,
            params: {},
          }}
        />

        <LiveClaimsCounter />

        {/* 🔥 AD 3 – Mid content break */}
        <DiamondSection />
        <AdScript
          src="https://www.highperformanceformat.com/4185b55c5b499dfb558c6ab6025cb3b6/invoke.js"
          atOptions={{
            key: "4185b55c5b499dfb558c6ab6025cb3b6",
            format: "iframe",
            height: 250,
            width: 300,
            params: {},
          }}
        />

        <BundlesSection />

        {/* 🔥 AD 4 – Container based */}
        <AdScript
          src="https://pl28075436.effectivegatecpm.com/5eb5d39054e65c909a2d9ba3bce1f184/invoke.js"
          containerId="container-5eb5d39054e65c909a2d9ba3bce1f184"
        />

        <RedeemSection />

        {/* 🔥 AD 5 – Wide banner before login */}
        <AdScript
          src="https://www.highperformanceformat.com/d8bba95de132b38e61e0dce90656b030/invoke.js"
          atOptions={{
            key: "d8bba95de132b38e61e0dce90656b030",
            format: "iframe",
            height: 90,
            width: 728,
            params: {},
          }}
        />

        <LoginSection />
        <CharactersSection />
        <EmotesSection />

        {/* 🔥 AD 6 – Just before testimonials */}
        <AdScript
          src="https://www.highperformanceformat.com/3ec249203d50b6999bea46efccf8ef9b/invoke.js"
          atOptions={{
            key: "3ec249203d50b6999bea46efccf8ef9b",
            format: "iframe",
            height: 300,
            width: 160,
            params: {},
          }}
        />

        <TestimonialsSection />
        <Footer />
      </div>

      {/* 🔥 Sticky bottom ad (annoying = clicks) */}
      <StickyBottomAd />
    </div>
  );
};

export default Index;
