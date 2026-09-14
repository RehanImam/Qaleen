import React from 'react';
import ProductCard from './ProductCard';
import useReveal from '../hooks/useReveal';

const DEFAULT_SIZES = ['4x6', '5x7', '5x8', '6x7', '6x9', '8x10'];

// Curated bestsellers mapped to the shared product shape so they render through
// the same ProductCard used on the Shop grid (consistent badge/typography/price/hover).
const BESTSELLER_PRODUCTS = [
  {
    id: 'bs-1',
    title: 'Loom Hand Tufted Carpet & Rug',
    price: 20999,
    originalPrice: 41998,
    discountBadge: '50% off',
    rating: 5,
    sizes: DEFAULT_SIZES,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'bs-2',
    title: 'Roster Hand Tufted Carpet & Rug',
    price: 11999,
    originalPrice: 23998,
    discountBadge: '50% off',
    rating: 5,
    sizes: DEFAULT_SIZES,
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'bs-3',
    title: 'Prime Hand Tufted Carpet & Rug',
    price: 20999,
    originalPrice: 41998,
    discountBadge: '50% off',
    rating: 5,
    sizes: DEFAULT_SIZES,
    image: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'bs-4',
    title: 'Whispetal Floral Hand Tufted Carpet & Rug',
    price: 17499,
    originalPrice: 34998,
    discountBadge: '50% off',
    rating: 5,
    sizes: DEFAULT_SIZES,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

export default function Bestsellers({ navigateTo }) {
  const [sectionRef, isVisible] = useReveal({ threshold: 0.12 });

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-[#faf8f5]"
    >
      {/* Heading & Subtext */}
      <div 
        className={`mb-12 sm:mb-16 lg:mb-20 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.25em] text-[#9b6828] uppercase mb-3">
          Most Loved &amp; Coveted Designs
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
          Our <span className="italic font-light text-stone-600">Bestsellers</span>
        </h2>
      </div>

      {/* Grid: 4 Columns matching Category section proportions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-9 gap-y-10 sm:gap-y-12">
        {BESTSELLER_PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ProductCard
              product={product}
              onSelect={(p) => navigateTo('productDetail', { product: p })}
            />
          </div>
        ))}
      </div>
    </section>
  );
}