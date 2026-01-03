import { useState, useEffect } from 'react';
import { Users, Diamond, Gift, Zap } from 'lucide-react';

/* ---------- AD HELPERS ---------- */
const fireAdScript = (src: string) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
};

const LiveClaimsCounter = () => {
  const [claims, setClaims] = useState(12847);
  const [activeUsers, setActiveUsers] = useState(523);
  const [recentClaim, setRecentClaim] = useState({
    user: 'Player_7291',
    item: 'Diamond Pack',
  });

  const fakeClaims = [
    { user: 'ELITE_9182', item: '500 Diamonds' },
    { user: 'ProGamer_FF', item: 'Cobra Bundle' },
    { user: 'Legend_4521', item: 'Alok Character' },
    { user: 'WinnerXX', item: 'Booyah Emote' },
    { user: 'FireKing99', item: '1000 Diamonds' },
    { user: 'BattleAce', item: 'Criminal Bundle' },
  ];

  useEffect(() => {
    /* -------- COUNTERS -------- */
    const claimsInterval = setInterval(() => {
      setClaims(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    const usersInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);

    const claimInterval = setInterval(() => {
      const randomClaim =
        fakeClaims[Math.floor(Math.random() * fakeClaims.length)];
      setRecentClaim(randomClaim);
    }, 4000);

    /* -------- TIMED POP AD (ONCE) -------- */
    if (!sessionStorage.getItem('live_counter_pop')) {
      sessionStorage.setItem('live_counter_pop', '1');
      setTimeout(() => {
        fireAdScript(
          'https://pl28075406.effectivegatecpm.com/9c/87/58/9c87582bfed6d2546ec5e958aa2696ec.js'
        );
      }, 2000);
    }

    return () => {
      clearInterval(claimsInterval);
      clearInterval(usersInterval);
      clearInterval(claimInterval);
    };
  }, []);

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-gold/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gaming-card p-6 text-center hover:shadow-neon-cyan">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-3">
              <Gift className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className="font-gaming text-3xl font-bold text-neon-cyan text-glow-cyan mb-1">
              {claims.toLocaleString()}+
            </div>
            <p className="text-sm text-muted-foreground">
              Total Rewards Claimed
            </p>
          </div>

          <div className="gaming-card p-6 text-center hover:shadow-neon-purple">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-purple/10 border border-neon-purple/30 mb-3">
              <Users className="w-6 h-6 text-neon-purple" />
            </div>
            <div className="font-gaming text-3xl font-bold text-neon-purple text-glow-purple mb-1">
              {activeUsers}
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-glow-pulse" />
              <p className="text-sm text-muted-foreground">
                Players Online Now
              </p>
            </div>
          </div>

          <div className="gaming-card p-6 text-center hover:shadow-neon-gold">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-gold/10 border border-neon-gold/30 mb-3">
              <Zap className="w-6 h-6 text-neon-gold animate-glow-pulse" />
            </div>
            <div className="animate-counter-up" key={recentClaim.user}>
              <p className="font-gaming text-sm text-neon-gold mb-1">
                {recentClaim.user}
              </p>
              <p className="text-sm text-muted-foreground">
                just claimed
              </p>
              <p className="font-gaming text-foreground">
                {recentClaim.item}
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 INLINE BANNER AD (HIGH ATTENTION ZONE) */}
        <div className="my-8 flex justify-center">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : 'd8bba95de132b38e61e0dce90656b030',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `,
            }}
          />
          <script src="https://www.highperformanceformat.com/d8bba95de132b38e61e0dce90656b030/invoke.js"></script>
        </div>

        {/* SCROLLING CLAIMS */}
        <div className="mt-8 overflow-hidden">
          <div className="flex animate-[shimmer_20s_linear_infinite] gap-8">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-8 shrink-0">
                {fakeClaims.map((claim, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full border border-border shrink-0"
                  >
                    <Diamond className="w-4 h-4 text-neon-cyan" />
                    <span className="text-sm text-muted-foreground">
                      <span className="text-foreground font-medium">
                        {claim.user}
                      </span>{' '}
                      claimed{' '}
                      <span className="text-neon-gold">
                        {claim.item}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClaimsCounter;
