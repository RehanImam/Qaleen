import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    image: "https://d3o59fu9acgbkr.cloudfront.net/jrc2021/home/master/2026/8/3/jrc-desktop-banner-8-3-2026-3-56-49-PM.jpg",
    eyebrow: "Your patio, monsoon ready",
    headline: "OUTDOOR RUGS",
    ctaText: "SHOP NOW",
    ctaLink: "shop"
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    eyebrow: "Elegance defined",
    headline: "LIVING ROOM COLLECTION",
    ctaText: "EXPLORE",
    ctaLink: "shop"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    eyebrow: "Modern aesthetics",
    headline: "ABSTRACT DESIGNS",
    ctaText: "DISCOVER MORE",
    ctaLink: "shop"
  }
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroCarousel({ navigateTo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
      setAnimationKey(prev => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);


  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-stone-900 text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={`Hero Background ${idx + 1}`}
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}


      {/* Main Content */}
      <div className="relative z-10 w-full px-10 md:px-16 pt-32 h-full flex flex-col justify-center">
        <div className="max-w-xl space-y-4">
          <p className="text-sm font-light tracking-wide text-stone-200 transition-opacity duration-500 delay-100">
            {currentSlide.eyebrow}
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.08em] uppercase text-white leading-tight transition-opacity duration-500 delay-200">
            {currentSlide.headline}
          </h1>
          <div className="pt-2 transition-opacity duration-500 delay-300">
            <button
              onClick={() => navigateTo(currentSlide.ctaLink)}
              className="bg-white text-stone-900 px-7 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-stone-100 transition-colors shadow-sm"
            >
              {currentSlide.ctaText}
            </button>
          </div>
        </div>

        {/* Progress Indicators — small circular outlines. The active slide's
            outline draws around its circumference over SLIDE_DURATION, from a
            faint edge to a fully opaque white ring, with an empty centre. */}
        <div className="absolute bottom-12 md:bottom-16 left-10 md:left-16 flex items-center justify-start gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setAnimationKey(prev => prev + 1);
              }}
              className="relative w-4 h-4 focus:outline-none cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentIndex}
            >
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 24 24">
                {/* Inactive: thin, faint outline with a transparent centre */}
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.5"
                />
                {/* Active: opaque white outline drawn around the circumference */}
                {idx === currentIndex && (
                  <circle
                    key={animationKey} // remount to restart the draw on every change
                    cx="12"
                    cy="12"
                    r="9"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    className="qb-progress-fill"
                    style={{
                      animationName: 'qb-progress-fill',
                      animationDuration: `${SLIDE_DURATION}ms`,
                      animationTimingFunction: 'linear',
                      animationFillMode: 'forwards',
                      animationPlayState: isHovered ? 'paused' : 'running'
                    }}
                  />
                )}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
