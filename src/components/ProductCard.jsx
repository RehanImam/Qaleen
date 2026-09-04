import React, { useState } from 'react';

export default function ProductCard({ product, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Gallery list: prefer product.images array, then hoverImage, fallback to single image
  const gallery = product?.images && product.images.length > 0
    ? product.images
    : product?.hoverImage
      ? [product.image, product.hoverImage]
      : [product?.image].filter(Boolean);

  const hasMultipleImages = gallery.length > 1;
  const secondaryImage = gallery[1] || product?.hoverImage;

  // Determine active displayed image:
  // On desktop hover, preview the second image (unless user clicked a specific dot)
  const isShowingHoverPreview = isHovered && hasMultipleImages && activeDotIndex === 0;

  const handleDotClick = (e, idx) => {
    e.stopPropagation();
    setActiveDotIndex(idx);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div 
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col justify-between h-full bg-transparent transition-all w-full border-0 select-none"
    >
      <div>
        {/* Borderless, image-forward container: Portrait aspect-[3/4] as originally designed */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-100 rounded-xs">
          
          {/* Discount badge: Soft, tidy translucent pill in top-left */}
          {product.discountBadge && (
            <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/80 backdrop-blur-xs text-stone-700 text-[10px] sm:text-[10.5px] font-normal px-2.5 py-0.5 rounded-full z-20 shadow-2xs border border-white/60 tracking-tight font-sans">
              {product.discountBadge}
            </span>
          )}

          {/* Wishlist Heart Icon: Tidy, small circular button in top-right */}
          <button
            type="button"
            onClick={handleWishlistToggle}
            aria-label="Add to Wishlist"
            className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all z-20 cursor-pointer ${
              isWishlisted
                ? 'bg-white text-[#5c0612] shadow-xs opacity-100'
                : 'bg-white/80 hover:bg-white text-stone-500 hover:text-[#5c0612] opacity-0 group-hover:opacity-100 shadow-2xs backdrop-blur-xs'
            }`}
          >
            <svg 
              className={`w-3.5 h-3.5 transition-transform ${isWishlisted ? 'fill-current scale-110' : 'stroke-[1.5]'}`} 
              fill={isWishlisted ? '#5c0612' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Primary / Active Image */}
          <img 
            src={gallery[activeDotIndex] || product.image} 
            alt={product.title} 
            className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Secondary Hover Image (Preloaded & Crossfades smoothly on hover) */}
          {hasMultipleImages && (
            <img 
              src={secondaryImage} 
              alt={`${product.title} alternate angle view`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-in-out ${
                isShowingHoverPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } ${isHovered ? 'scale-105' : 'scale-100'}`}
              loading="eager"
            />
          )}

          {/* Image carousel / pagination dots centered at bottom: Tidy, delicate capsules */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
              {gallery.slice(0, 3).map((_, idx) => {
                const isActive = (isShowingHoverPreview && idx === 1) || (!isShowingHoverPreview && activeDotIndex === idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => handleDotClick(e, idx)}
                    aria-label={`View photo ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive 
                        ? 'w-3 h-0.5 bg-white shadow-xs' 
                        : 'w-1 h-0.5 bg-white/60 hover:bg-white/90 shadow-2xs'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Product Information: Clean, spacious editorial layout */}
        <div className="mt-3.5 sm:mt-4 space-y-1 text-left">
          <h3 className="font-serif text-[13px] sm:text-[14.5px] text-stone-900 line-clamp-1 font-normal tracking-wide group-hover:text-[#5c0612] transition-colors">
            {product.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-stone-400 font-light">
            {product.sizes ? product.sizes[0] || '6x4 ft' : product.dimensions || '6x4 ft'}
          </p>
        </div>
      </div>

      {/* Price & Hover-Revealed "+ Add" Button: Balanced and spacious */}
      <div className="mt-2.5 sm:mt-3 flex items-center justify-between gap-2 text-left">
        <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 text-xs sm:text-sm">
          {product.originalPrice && (
            <span className="text-stone-400 line-through font-light text-[11px] sm:text-xs">
              ₹{product.originalPrice?.toLocaleString()}
            </span>
          )}
          <span className="font-serif font-medium text-stone-900 text-xs sm:text-sm">
            ₹{product.price?.toLocaleString()}
          </span>
        </div>

        {/* Minimal "+ Add" Quick-Add Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="text-stone-700 hover:text-stone-950 text-[10.5px] sm:text-xs px-2.5 py-1 border border-stone-300 hover:border-stone-900 bg-white/90 hover:bg-white transition-all shrink-0 cursor-pointer rounded-none font-sans opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          + Add
        </button>
      </div>
    </div>
  );
}