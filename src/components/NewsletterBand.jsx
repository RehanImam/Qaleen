import React, { useState, useEffect, useRef } from 'react';

export default function NewsletterBand() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bandRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (bandRef.current) {
      observer.observe(bandRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section 
      ref={bandRef}
      className="w-full bg-[#5c0612] text-white py-20 sm:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle decorative background pattern/texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <div 
          className={`space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Eyebrow */}
          <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.25em] text-amber-200/90 uppercase">
            A LITTLE NOTE FROM US
          </p>

          {/* Serif Headline with Italic Emphasis */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Beautiful spaces, <span className="italic font-light text-amber-100">straight to your inbox.</span>
          </h2>

          {/* Supporting line */}
          <p className="font-serif text-sm sm:text-base text-rose-100/80 font-light max-w-lg mx-auto leading-relaxed">
            First looks at limited weaving editions, artisanal styling notes, and private collector previews.
          </p>

          {/* Form */}
          <div className="pt-4 max-w-md mx-auto">
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-none text-amber-100 text-sm font-sans tracking-wide">
                Thank you for subscribing to Qaleen Bhaiya.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-3.5 bg-white/10 text-white placeholder-rose-200/60 border border-white/20 focus:outline-none focus:border-white focus:bg-white/15 text-sm font-sans tracking-wide transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#f5efe6] text-[#5c0612] px-8 py-3.5 text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:bg-white hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
