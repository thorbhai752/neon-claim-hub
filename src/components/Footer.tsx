import { Diamond, Shield, Lock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Diamond className="w-8 h-8 text-neon-cyan" />
              <span className="font-gaming text-xl font-bold gradient-text">FF REWARDS</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Your trusted destination for Free Fire rewards. Claim free diamonds, bundles, characters, and emotes instantly.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-neon-green" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-neon-cyan" />
                <span>Encrypted</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-gaming text-sm font-bold text-foreground mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Diamonds', 'Bundles', 'Characters', 'Emotes', 'Redeem Code'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-gaming text-sm font-bold text-foreground mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              {['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 FF Rewards. This is a fan-made site. Not affiliated with Garena Free Fire.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" /> for gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
