import { useState } from 'react';
import { Menu, X, Diamond, Gift, Users, Gamepad2 } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Diamonds', icon: Diamond, href: '#diamonds' },
    { name: 'Bundles', icon: Gift, href: '#bundles' },
    { name: 'Characters', icon: Users, href: '#characters' },
    { name: 'Emotes', icon: Gamepad2, href: '#emotes' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-gaming bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Diamond className="w-8 h-8 text-neon-cyan animate-float" />
              <div className="absolute inset-0 bg-neon-cyan/20 blur-xl animate-glow-pulse" />
            </div>
            <span className="font-gaming text-xl font-bold gradient-text">
              FF REWARDS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <link.icon className="w-4 h-4 group-hover:animate-bounce-subtle" />
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cyber" size="sm">
              Login with UID
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
            <Button variant="cyber" className="w-full">
              Login with UID
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
