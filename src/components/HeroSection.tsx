import { Diamond, Zap, Shield, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-glow-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in backdrop-blur-sm">
            <Zap className="w-4 h-4 text-neon-gold animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Limited Time Event Active</span>
          </div>

          {/* Main Title */}
          <h1 className="font-gaming text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">CLAIM YOUR</span>
            <br />
            <span className="gradient-text text-glow-cyan">FREE REWARDS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unlock exclusive diamonds, legendary bundles, rare characters, and epic emotes. 
            Your Free Fire adventure just got more rewarding!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-neon-cyan">
                <Diamond className="w-5 h-5" />
                <span className="font-gaming text-2xl md:text-3xl font-bold">10K+</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Diamonds Given</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-neon-purple">
                <Shield className="w-5 h-5" />
                <span className="font-gaming text-2xl md:text-3xl font-bold">500+</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-neon-gold">
                <Zap className="w-5 h-5" />
                <span className="font-gaming text-2xl md:text-3xl font-bold">99%</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Success Rate</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="cyber" size="xl" className="w-full sm:w-auto pulse-glow">
              <Diamond className="w-5 h-5 mr-2" />
              Claim Free Diamonds
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              <Shield className="w-5 h-5 mr-2" />
              View All Rewards
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
