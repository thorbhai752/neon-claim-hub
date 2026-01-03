import { useState } from 'react';
import { KeyRound, Sparkles, Check, Loader2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

const RedeemSection = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedInput, setFocusedInput] = useState(false);

  const handleRedeem = () => {
    if (!code.trim()) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (code.length === 12 || code.length === 16) {
        setStatus('success');
      } else {
        setStatus('error');
      }
      
      setTimeout(() => {
        setStatus('idle');
        if (code.length === 12 || code.length === 16) {
          setCode('');
        }
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neon-purple/10 border border-neon-purple/30 mb-4">
              <KeyRound className="w-8 h-8 text-neon-purple animate-glow-pulse" />
            </div>
            <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">REDEEM</span>{' '}
              <span className="text-neon-purple text-glow-purple">CODE</span>
            </h2>
            <p className="text-muted-foreground">
              Enter your exclusive redeem code to unlock premium rewards instantly
            </p>
          </div>

          {/* Redeem Input */}
          <div className="gaming-card p-8">
            <div className={`relative transition-all duration-300 ${focusedInput ? 'scale-105' : ''}`}>
              {/* Animated Border */}
              <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-gold opacity-75 blur transition-opacity duration-300 ${focusedInput ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className="relative">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  onFocus={() => setFocusedInput(true)}
                  onBlur={() => setFocusedInput(false)}
                  placeholder="XXXX-XXXX-XXXX"
                  className="w-full h-14 px-6 bg-background border-2 border-border rounded-xl text-foreground font-gaming text-lg tracking-widest text-center placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  maxLength={19}
                  disabled={status === 'loading'}
                />
                
                {/* Sparkle Effects */}
                {focusedInput && (
                  <>
                    <Sparkles className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-neon-cyan animate-glow-pulse" />
                    <Sparkles className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-neon-purple animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                  </>
                )}
              </div>
            </div>

            {/* Status Messages */}
            <div className="h-8 mt-4 flex items-center justify-center">
              {status === 'success' && (
                <div className="flex items-center gap-2 text-neon-green animate-fade-in">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Code redeemed successfully!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-destructive animate-fade-in">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Invalid code. Please try again.</span>
                </div>
              )}
            </div>

            {/* Redeem Button */}
            <Button
              variant="cyber"
              size="lg"
              className="w-full mt-4"
              onClick={handleRedeem}
              disabled={!code.trim() || status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying Code...
                </>
              ) : (
                <>
                  <KeyRound className="w-5 h-5" />
                  Redeem Now
                </>
              )}
            </Button>

            {/* Tips */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                💡 <span className="text-foreground font-medium">Pro Tip:</span> Redeem codes are 12 or 16 characters long. 
                Check official Free Fire social media for new codes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedeemSection;
