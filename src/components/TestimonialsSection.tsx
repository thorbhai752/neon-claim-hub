import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'ELITE_GAMER_99',
    avatar: 'E',
    rating: 5,
    text: 'Got 2000 diamonds instantly! This site is 100% legit. Already recommended to my squad.',
    reward: '2000 Diamonds',
  },
  {
    name: 'ProPlayer_FF',
    avatar: 'P',
    rating: 5,
    text: 'Finally got the Criminal Bundle I always wanted. The process was super easy!',
    reward: 'Criminal Bundle',
  },
  {
    name: 'WinnerKing',
    avatar: 'W',
    rating: 5,
    text: 'Unlocked Alok character for free. Best Free Fire rewards site ever!',
    reward: 'Alok Character',
  },
  {
    name: 'BattleAce_21',
    avatar: 'B',
    rating: 5,
    text: 'The Cobra bundle was delivered to my account in minutes. Absolutely amazing!',
    reward: 'Cobra Bundle',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">PLAYER</span>{' '}
            <span className="gradient-text">REVIEWS</span>
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied players who claimed their rewards
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-4"
                >
                  <div className="gaming-card p-8 text-center">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
                    
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-neon-gold fill-neon-gold" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg text-foreground mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Reward Badge */}
                    <div className="inline-flex items-center gap-2 bg-neon-gold/10 text-neon-gold px-4 py-2 rounded-full border border-neon-gold/30 mb-6">
                      <Star className="w-4 h-4" />
                      <span className="font-gaming text-sm">Claimed: {testimonial.reward}</span>
                    </div>

                    {/* Avatar & Name */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                        <span className="font-gaming text-lg text-background">{testimonial.avatar}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-gaming text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">Verified Player</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
