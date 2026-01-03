import { useState } from 'react';
import { Diamond, Gift, Sparkles, Check, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

interface ClaimCardProps {
  title: string;
  description: string;
  value: string;
  icon: 'diamond' | 'gift' | 'sparkles';
  rarity: 'common' | 'rare' | 'legendary';
  image?: string;
}

const ClaimCard = ({ title, description, value, icon, rarity, image }: ClaimCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [progress, setProgress] = useState(0);

  const icons = {
    diamond: Diamond,
    gift: Gift,
    sparkles: Sparkles,
  };

  const rarityStyles = {
    common: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    rare: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    legendary: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
  };

  const rarityGlow = {
    common: 'hover:shadow-neon-cyan',
    rare: 'hover:shadow-neon-purple',
    legendary: 'hover:shadow-neon-gold',
  };

  const IconComponent = icons[icon];

  const handleClaim = () => {
    if (isClaimed) return;
    setIsClaiming(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsClaiming(false);
          setIsClaimed(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div
      className={`gaming-card group cursor-pointer transition-all duration-500 ${rarityGlow[rarity]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !isClaiming && !isClaimed && setIsHovered(true)}
    >
      {/* Rarity Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${rarityStyles[rarity]} opacity-50`} />

      {/* Content */}
      <div className="relative p-6">
        {/* Rarity Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-gaming uppercase tracking-wider
          ${rarity === 'legendary' ? 'bg-neon-gold/20 text-neon-gold border border-neon-gold/30' :
            rarity === 'rare' ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' :
              'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'}`}>
          {rarity}
        </div>

        {/* Icon/Image */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-contain" />
          ) : (
            <div className={`w-full h-full rounded-2xl flex items-center justify-center
              ${rarity === 'legendary' ? 'bg-neon-gold/10' :
                rarity === 'rare' ? 'bg-neon-purple/10' : 'bg-neon-cyan/10'}`}>
              <IconComponent className={`w-10 h-10 ${isHovered ? 'animate-bounce-subtle' : ''}
                ${rarity === 'legendary' ? 'text-neon-gold' :
                  rarity === 'rare' ? 'text-neon-purple' : 'text-neon-cyan'}`} />
            </div>
          )}
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-2xl blur-xl opacity-50 animate-glow-pulse
            ${rarity === 'legendary' ? 'bg-neon-gold/30' :
              rarity === 'rare' ? 'bg-neon-purple/30' : 'bg-neon-cyan/30'}`} />
        </div>

        {/* Value */}
        <div className={`font-gaming text-2xl font-bold text-center mb-2
          ${rarity === 'legendary' ? 'text-neon-gold text-glow-gold' :
            rarity === 'rare' ? 'text-neon-purple text-glow-purple' : 'text-neon-cyan text-glow-cyan'}`}>
          {value}
        </div>

        {/* Title */}
        <h3 className="font-gaming text-lg font-semibold text-center text-foreground mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground text-center mb-4">
          {description}
        </p>

        {/* Progress Bar (when claiming) */}
        {isClaiming && (
          <div className="mb-4 animate-fade-in">
            <div className="progress-bar">
              <div 
                className="progress-bar-fill transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Processing... {progress}%
            </p>
          </div>
        )}

        {/* Claim Button */}
        <div className={`transition-all duration-300 ${isHovered || isClaiming ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button
            variant={isClaimed ? 'outline' : 'claim'}
            className="w-full"
            onClick={handleClaim}
            disabled={isClaiming || isClaimed}
          >
            {isClaiming ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Claiming...
              </>
            ) : isClaimed ? (
              <>
                <Check className="w-4 h-4" />
                Claimed!
              </>
            ) : (
              'CLAIM NOW'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClaimCard;
