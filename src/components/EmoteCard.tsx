import { useState } from 'react';
import { Sparkles, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';

interface EmoteCardProps {
  name: string;
  rarity: 'epic' | 'legendary';
}

const EmoteCard = ({ name, rarity }: EmoteCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showClaim, setShowClaim] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowClaim(true);
    
    // Auto stop after 3 seconds
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="gaming-card group">
      <div className="relative p-4">
        {/* Rarity Badge */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-gaming uppercase
          ${rarity === 'legendary' 
            ? 'bg-neon-gold/20 text-neon-gold border border-neon-gold/30' 
            : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'}`}>
          {rarity}
        </div>

        {/* Emote Preview Area */}
        <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border mb-4 overflow-hidden">
          {/* Animated Background */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-radial from-neon-purple/30 via-transparent to-transparent animate-glow-pulse" />
            <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/20 via-transparent to-transparent animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Emote Icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isPlaying ? 'animate-bounce-subtle scale-110' : ''}`}>
            <Sparkles className={`w-16 h-16 ${rarity === 'legendary' ? 'text-neon-gold' : 'text-neon-purple'} ${isPlaying ? 'animate-spin-slow' : ''}`} />
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
              {isPlaying ? (
                <Pause className="w-6 h-6 text-primary-foreground" />
              ) : (
                <Play className="w-6 h-6 text-primary-foreground ml-1" />
              )}
            </div>
          </button>
        </div>

        {/* Name */}
        <h3 className="font-gaming text-sm font-bold text-center text-foreground mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Claim Button */}
        <Button
          variant={rarity === 'legendary' ? 'gold' : 'secondary'}
          size="sm"
          className={`w-full transition-all duration-300 ${showClaim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          Claim Emote
        </Button>
      </div>
    </div>
  );
};

export default EmoteCard;
