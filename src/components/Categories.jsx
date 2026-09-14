import React from "react";
import useReveal from "../hooks/useReveal";

export default function Categories({ navigateTo }) {
  const [sectionRef, isVisible] = useReveal({ threshold: 0.12 });

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
      className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32 bg-[#faf8f5]"
    >
      
      {/* Top Header Section */}
      <div 
        className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.25em] text-[#9b6828] uppercase mb-3">
          Explore Our Handcrafted Collections
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
          Shop by <span className="italic font-light text-stone-600">Category</span>
        </h2>
      </div>

      {/* 4-Column x 1-Row Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {categoryItems.map((cat, idx) => (
          <div
            key={cat.title}
            onClick={() => {
              if (cat.mainGroup === "Custom") {
                navigateTo("custom");
              } else {
                navigateTo("shop", { mainGroup: cat.mainGroup });
              }
            }}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`group cursor-pointer flex flex-col bg-[#faf8f5] overflow-hidden transition-all duration-700 ease-out ${
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
            <div className="py-3 px-2 sm:px-3 flex items-center justify-between bg-[#faf8f5]">
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