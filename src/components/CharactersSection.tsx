import CharacterCard from './CharacterCard';
import { Users } from 'lucide-react';

const CharactersSection = () => {
  const characters = [
    {
      name: 'ALOK',
      skill: 'Drop the Beat',
      skillDescription: 'Creates a 5m aura that increases movement speed and restores HP for 10 seconds.',
      type: 'support' as const,
    },
    {
      name: 'CHRONO',
      skill: 'Time Turner',
      skillDescription: 'Creates a force field that blocks 600 damage. Can shoot from inside.',
      type: 'defense' as const,
    },
    {
      name: 'K',
      skill: 'Master of All',
      skillDescription: 'Jiujitsu Mode: Allies gain 500% EP conversion. Psychology Mode: Recover 2 EP every 2.2s.',
      type: 'support' as const,
    },
    {
      name: 'HAYATO',
      skill: 'Bushido',
      skillDescription: 'With every 10% decrease in max HP, armor penetration increases by 10%.',
      type: 'assault' as const,
    },
    {
      name: 'WUKONG',
      skill: 'Camouflage',
      skillDescription: 'Turns into a bush for 15 seconds. Cooldown resets on knockdowns.',
      type: 'defense' as const,
    },
    {
      name: 'SKYLER',
      skill: 'Riptide Rhythm',
      skillDescription: 'Unleashes a sonic wave that damages 5 gloo walls within 100m. Gains HP when placing walls.',
      type: 'assault' as const,
    },
  ];

  return (
    <section id="characters" className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-8 h-8 text-neon-cyan animate-float" />
            <h2 className="font-gaming text-3xl md:text-4xl font-bold">
              <span className="text-foreground">FREE</span>{' '}
              <span className="gradient-text">CHARACTERS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlock powerful characters and their unique abilities. Click on any character to preview their skill!
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CharacterCard {...character} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
