import ClaimCard from './ClaimCard';
import { Diamond } from 'lucide-react';

const DiamondSection = () => {
  const diamondOffers = [
    {
      title: 'Starter Pack',
      description: 'Perfect for new players',
      value: '100 💎',
      rarity: 'common' as const,
    },
    {
      title: 'Weekly Bonus',
      description: 'Exclusive weekly reward',
      value: '500 💎',
      rarity: 'rare' as const,
    },
    {
      title: 'Mega Bundle',
      description: 'Ultimate diamond package',
      value: '2,000 💎',
      rarity: 'legendary' as const,
    },
    {
      title: 'Elite Pass Bonus',
      description: 'Booyah Pass diamonds',
      value: '1,000 💎',
      rarity: 'rare' as const,
    },
  ];

  return (
    <section id="diamonds" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Diamond className="w-8 h-8 text-neon-cyan animate-float" />
            <h2 className="font-gaming text-3xl md:text-4xl font-bold gradient-text">
              FREE DIAMONDS
            </h2>
            <Diamond className="w-8 h-8 text-neon-cyan animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Claim your free diamonds and unlock premium content. Limited time offers available!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diamondOffers.map((offer, index) => (
            <div
              key={offer.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ClaimCard
                title={offer.title}
                description={offer.description}
                value={offer.value}
                icon="diamond"
                rarity={offer.rarity}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiamondSection;
