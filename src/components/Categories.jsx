import React, { useState, useEffect, useRef } from "react";

export default function Categories({ navigateTo }) {
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

  const categoryItems = [
    {
      title: "CARPET",
      mainGroup: "Carpet",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "PRAYER MAT",
      mainGroup: "Prayer Mat",
      image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "ARTWORK",
      mainGroup: "Artwork",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "CUSTOM",
      mainGroup: "Custom",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36 bg-[#f5efe6]"
    >
      
      {/* Top Header Section */}
      <div 
        className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-[0.2em] uppercase">
          SHOP BY CATEGORY
        </h2>
        <p className="text-xs sm:text-sm font-light text-stone-500 tracking-[0.16em] uppercase mt-2.5">
          Explore Our Handcrafted Collections
        </p>
      </div>

      {/* 4-Column x 1-Row Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {categoryItems.map((cat, idx) => (
          <div
            key={cat.title}
            onClick={() => navigateTo("shop", { mainGroup: cat.mainGroup })}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`group cursor-pointer flex flex-col bg-[#f5efe6] overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tall Vertical Image */}
            <div className="w-full aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Bottom Info Row: Title on Left, Arrow on Right */}
            <div className="py-3 px-2 sm:px-3 flex items-center justify-between bg-[#f5efe6]">
              <span className="font-sans text-[11px] sm:text-xs text-stone-800 tracking-[0.16em] uppercase font-medium group-hover:text-black transition-colors">
                {cat.title}
              </span>
              <svg
                className="w-3.5 h-3.5 text-stone-600 stroke-[1.8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7H9M17 7V15" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}