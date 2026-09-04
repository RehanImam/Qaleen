import React, { useState, useEffect, useRef } from 'react';

export default function InstagramFeed() {
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

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      caption: 'The Mirzapur heritage weave grounding this sunlit sanctuary.',
      handle: '@thecuratedhome',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      caption: 'Morning light on our hand-tufted plush wool runner.',
      handle: '@ananya_interiors',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      caption: 'Quiet reflections. Handcrafted silk-wool prayer mat in natural ochre.',
      handle: '@studio_alvida',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      caption: 'Textural depth and muted earth tones in this living setup.',
      handle: '@rohit_spaces',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#faf8f5] py-20 sm:py-28 lg:py-32"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header with Headline on Left & Handle on Right */}
        <div 
          className={`flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 pb-4 border-b border-stone-200/80 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.25em] text-[#9b6828] uppercase mb-2">
              FROM THE FEED
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Seen on <span className="italic font-light text-stone-600">Instagram</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium tracking-wider text-stone-600 hover:text-stone-900 transition-colors group"
          >
            <span>@qaleenbhaiya</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* 4 Square Images: 4 across desktop, 2x2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`group relative aspect-square overflow-hidden bg-stone-200 block transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover State: subtle darken + Instagram glyph & "View post" */}
              <div className="absolute inset-0 bg-stone-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[11px] font-sans font-medium tracking-widest uppercase">
                  View post
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="font-serif text-sm sm:text-base text-stone-600 font-light italic">
            Tag us <span className="font-normal not-italic text-stone-900 font-sans tracking-wide">@qaleenbhaiya</span> to be featured in our curated journal.
          </p>
        </div>

      </div>
    </section>
  );
}
