import { useState } from 'react';
import { Zap, Shield, Sword, Lock, Unlock } from 'lucide-react';
import { Button } from './ui/button';

interface CharacterCardProps {
  name: string;
  skill: string;
  skillDescription: string;
  type: 'assault' | 'support' | 'defense';
  imageUrl?: string;
}

const CharacterCard = ({ name, skill, skillDescription, type, imageUrl }: CharacterCardProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  const typeIcons = {
    assault: Sword,
    support: Zap,
    defense: Shield,
  };

  const typeColors = {
    assault: 'text-red-500 bg-red-500/10 border-red-500/30',
    support: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/30',
    defense: 'text-neon-gold bg-neon-gold/10 border-neon-gold/30',
  };

  const TypeIcon = typeIcons[type];

  return (
    <div 
      className="gaming-card group cursor-pointer"
      onClick={() => setShowSkill(!showSkill)}
    >
      <div className="relative p-4">
        {/* Type Badge */}
        <div className={`absolute top-3 right-3 p-2 rounded-lg border ${typeColors[type]}`}>
          <TypeIcon className="w-4 h-4" />
        </div>

        {/* Character Avatar */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-muted/50 border-2 border-border flex items-center justify-center overflow-hidden group-hover:border-primary transition-colors">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-gaming text-3xl text-primary">{name[0]}</span>
            )}
          </div>
          
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary group-hover:animate-glow-pulse transition-all" />
        </div>

        {/* Name */}
        <h3 className="font-gaming text-lg font-bold text-center text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Skill Preview */}
        <div className={`overflow-hidden transition-all duration-300 ${showSkill ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-muted/50 rounded-lg p-3 mb-3 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-neon-purple animate-glow-pulse" />
              <span className="font-gaming text-sm text-neon-purple">{skill}</span>
            </div>
            <p className="text-xs text-muted-foreground">{skillDescription}</p>
          </div>
        </div>

        {/* Unlock Button */}
        <Button
          variant={isUnlocked ? 'outline' : 'neon'}
          size="sm"
          className={`w-full ${showSkill ? 'animate-fade-in' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsUnlocked(true);
          }}
          disabled={isUnlocked}
        >
          {isUnlocked ? (
            <>
              <Unlock className="w-4 h-4" />
              Unlocked
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              Unlock Free
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
