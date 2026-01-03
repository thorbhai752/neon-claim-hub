import { useState } from 'react';
import { User, LogIn, Shield, Check, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

const LoginSection = () => {
  const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const handleLogin = () => {
    if (!uid.trim() || uid.length < 8) return;
    
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      setPlayerName('ELITE_GAMER_' + uid.slice(-4));
    }, 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="gaming-card p-8 hover:shadow-neon-cyan">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple mb-4">
                <User className="w-8 h-8 text-background" />
              </div>
              <h2 className="font-gaming text-2xl font-bold text-foreground">
                {isLoggedIn ? 'WELCOME BACK' : 'LOGIN WITH UID'}
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                {isLoggedIn 
                  ? 'You are now connected to claim rewards' 
                  : 'Enter your Free Fire UID to access rewards'}
              </p>
            </div>

            {isLoggedIn ? (
              /* Logged In State */
              <div className="text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green px-4 py-2 rounded-full mb-4">
                  <Check className="w-4 h-4" />
                  <span className="font-medium">Connected</span>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-xl border border-border mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Player Name</p>
                  <p className="font-gaming text-xl text-neon-cyan">{playerName}</p>
                  <p className="text-xs text-muted-foreground mt-2">UID: {uid}</p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-neon-green" />
                  <span>Account verified and secured</span>
                </div>
              </div>
            ) : (
              /* Login Form */
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={uid}
                    onChange={(e) => setUid(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter your UID (e.g., 123456789)"
                    className="w-full h-14 px-4 pl-12 bg-muted border border-border rounded-xl text-foreground font-mono text-lg tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    maxLength={12}
                    disabled={isLoading}
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>

                <Button
                  variant="cyber"
                  size="lg"
                  className="w-full"
                  onClick={handleLogin}
                  disabled={!uid.trim() || uid.length < 8 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Connect Account
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Your UID is encrypted and secure</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
