import React, { useState, useEffect, useRef } from 'react';

const BESTSELLER_PRODUCTS = [
  {
    id: 1,
    title: 'Loom Hand Tufted Carpet & Rug',
    price: 20999,
    originalPrice: 41998,
    discount: '-50%',
    rating: 5,
    primaryImage: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Roster Hand Tufted Carpet & Rug',
    price: 11999,
    originalPrice: 23998,
    discount: '-50%',
    rating: 5,
    primaryImage: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Prime Hand Tufted Carpet & Rug',
    price: 20999,
    originalPrice: 41998,
    discount: '-50%',
    rating: 5,
    primaryImage: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Whispetal Floral Hand Tufted Carpet & Rug',
    price: 17499,
    originalPrice: 34998,
    discount: '-50%',
    rating: 5,
    primaryImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Bestsellers({ navigateTo }) {
  const [hoveredId, setHoveredId] = useState(null);
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

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 lg:pb-40 bg-[#f5efe6]"
    >
      {/* Heading & Subtext */}
      <div 
        className={`mb-12 sm:mb-16 lg:mb-20 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-[0.2em] uppercase">
          BESTSELLERS
        </h2>
        <p className="text-xs sm:text-sm font-light text-stone-500 tracking-[0.16em] uppercase mt-2.5">
          Our Most Loved And Coveted Designs
        </p>
      </div>

      {/* Grid: 4 Columns matching Category section proportions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {BESTSELLER_PRODUCTS.map((product, idx) => {
          const isHovered = hoveredId === product.id;

          return (
            <div
              key={product.id}
              onClick={() => navigateTo('productDetail', { product })}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`group cursor-pointer flex flex-col transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Image Container with matching 3/4 portrait ratio */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-100 rounded-xs mb-2.5 sm:mb-3">
                
                {/* Discount Badge */}
                <span className="absolute top-2 left-2 z-10 bg-[#333333] text-white text-[9px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-xs">
                  {product.discount}
                </span>

                {/* Main Image */}
                <img
                  src={product.primaryImage}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-all duration-500 ease-in-out absolute inset-0 ${
                    isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                  }`}
                />

                {/* Hover Close-up Image */}
                <img
                  src={product.hoverImage}
                  alt={`${product.title} Close-up`}
                  className={`w-full h-full object-cover transition-all duration-500 ease-in-out absolute inset-0 ${
                    isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                {product.title}
              </h3>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5 text-amber-500 text-[10px] sm:text-xs my-0.5 sm:my-1">
                {'★'.repeat(product.rating)}
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-auto font-sans">
                <span className="text-xs sm:text-sm font-bold text-red-700">
                  Rs. {product.price.toLocaleString('en-IN')}.00
                </span>
                <span className="line-through text-[10px] sm:text-xs text-stone-400">
                  Rs. {product.originalPrice.toLocaleString('en-IN')}.00
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}