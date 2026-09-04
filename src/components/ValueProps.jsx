import React, { useState, useEffect, useRef } from 'react';

export default function ValueProps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const props = [
    {
      num: '01',
      title: 'Looks expensive, feels effortless',
      desc: 'Thoughtfully chosen designs and nuanced color palettes that lift an entire room without ever trying too hard.',
    },
    {
      num: '02',
      title: 'Made for real homes',
      desc: 'Durable, easy-care natural fibers crafted for active living rooms, peaceful bedrooms, welcoming hallways and high-traffic corners.',
    },
    {
      num: '03',
      title: 'Handcrafted, not mass-made',
      desc: 'Each piece is hand-tufted by generational master artisans across traditional weaving clusters, so no two rugs are ever identical.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#f4ebe1] border-y border-stone-200/70 py-20 sm:py-28 lg:py-32"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header */}
        <div 
          className={`max-w-3xl mb-14 sm:mb-20 text-left transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.25em] text-[#9b6828] uppercase mb-3">
            THE QALEEN PROMISE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Woven well. <span className="italic font-light text-stone-600">Worth it.</span>
          </h2>
        </div>

        {/* 3 Numbered Columns with Divider Lines on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-stone-300/70">
          {props.map((item, idx) => (
            <div
              key={item.num}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`flex flex-col justify-between md:px-8 lg:px-12 first:md:pl-0 last:md:pr-0 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                {/* Large Light-Gold Number */}
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#b89047] tracking-tight block mb-4 sm:mb-6">
                  {item.num}
                </span>

                {/* Bold Short Title */}
                <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 tracking-wide mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Blurb */}
                <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative subtle accent line at bottom */}
              <div className="w-8 h-[1px] bg-stone-300 mt-8" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
