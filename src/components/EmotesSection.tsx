import EmoteCard from './EmoteCard';
import { Gamepad2 } from 'lucide-react';

const EmotesSection = () => {
  const emotes = [
    { name: 'Booyah Dance', rarity: 'legendary' as const },
    { name: 'Victory Slide', rarity: 'epic' as const },
    { name: 'Champion Walk', rarity: 'legendary' as const },
    { name: 'Elite Salute', rarity: 'epic' as const },
    { name: 'Fire Spin', rarity: 'legendary' as const },
    { name: 'Cool Swagger', rarity: 'epic' as const },
  ];

  return (
    <section id="emotes" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gamepad2 className="w-8 h-8 text-neon-purple animate-float" />
            <h2 className="font-gaming text-3xl md:text-4xl font-bold">
              <span className="text-foreground">LEGENDARY</span>{' '}
              <span className="text-neon-purple text-glow-purple">EMOTES</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Express yourself with exclusive emotes. Click to preview the animation!
          </p>
        </div>

        {/* Emotes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {emotes.map((emote, index) => (
            <div
              key={emote.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EmoteCard {...emote} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotesSection;
