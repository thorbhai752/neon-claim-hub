import ClaimCard from './ClaimCard';
import { Gift } from 'lucide-react';

const BundlesSection = () => {
  const bundles = [
    {
      title: 'Cobra Bundle',
      description: 'Legendary snake-themed outfit',
      value: 'FREE',
      rarity: 'legendary' as const,
    },
    {
      title: 'Hip Hop Bundle',
      description: 'Classic street style look',
      value: 'FREE',
      rarity: 'rare' as const,
    },
    {
      title: 'Criminal Bundle',
      description: "OG rare collector's item",
      value: 'FREE',
      rarity: 'legendary' as const,
    },
    {
      title: 'Sakura Bundle',
      description: 'Elegant cherry blossom theme',
      value: 'FREE',
      rarity: 'rare' as const,
    },
  ];

  // 🔥 AD TRIGGER ON CLICK
  const handleClaimClick = () => {
    // Pop / redirect ad (high CTR)
    window.open(
      'https://pl28075406.effectivegatecpm.com/9c/87/58/9c87582bfed6d2546ec5e958aa2696ec.js',
      '_blank'
    );
  };

  return (
    <section id="bundles" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-gold/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-neon-gold animate-float" />
            <h2 className="font-gaming text-3xl md:text-4xl font-bold">
              <span className="text-foreground">LEGENDARY</span>{' '}
              <span className="text-neon-gold text-glow-gold">BUNDLES</span>
            </h2>
            <Gift
              className="w-8 h-8 text-neon-gold animate-float"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive bundles and stand out on the battlefield with rare outfits!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map((bundle, index) => (
            <div
              key={bundle.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ClaimCard
                title={bundle.title}
                description={bundle.description}
                value={bundle.value}
                icon="gift"
                rarity={bundle.rarity}
                onClaim={handleClaimClick} // 🔥 PASS CLICK HANDLER
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
