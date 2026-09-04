import React, { useState, useEffect, useRef } from 'react';

export default function LifestyleBanner({ navigateTo }) {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

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

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={bannerRef}
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[78vh] min-h-[460px] overflow-hidden flex items-center justify-start bg-stone-900"
    >
      {/* Background Image with Slow Subtle Zoom on Scroll-in */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Warm styled living room featuring an artisanal handcrafted rug"
          className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
            isVisible ? 'scale-100' : 'scale-105'
          }`}
        />
        {/* Soft dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 sm:to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div 
          className={`max-w-xl lg:max-w-2xl text-left space-y-4 sm:space-y-5 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow / Kicker */}
          <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.25em] text-amber-200/90 uppercase">
            REAL ROOMS, REAL RUGS
          </p>

          {/* Big Serif Headline with Italic Emphasis */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] tracking-tight">
            Your floor, <span className="italic font-light text-amber-100">reimagined.</span>
          </h2>

          {/* Supporting Line */}
          <p className="font-serif text-sm sm:text-base text-stone-200/90 font-light leading-relaxed max-w-lg">
            Thoughtfully hand-knotted foundations that turn everyday living spaces into sacred sanctuaries.
          </p>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => navigateTo && navigateTo('shop')}
              className="inline-flex items-center gap-3 bg-[#faf8f5] text-stone-900 px-8 py-3.5 text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:bg-white hover:shadow-lg transition-all transform active:scale-95"
            >
              <span>Find your rug</span>
              <svg className="w-3.5 h-3.5 stroke-[2] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
