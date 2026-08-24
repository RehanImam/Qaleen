
// import React from 'react';

// export default function ProductCard({ product, onSelect }) {
//   return (
//     <div 
//       onClick={() => onSelect(product)}
//       className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
//     >
//       {/* Exact Square Aspect Ratio for Compact Cards */}
//       <div className="relative w-full aspect-square overflow-hidden bg-stone-100">
//         <img 
//           src={product.image} 
//           alt={product.title} 
//           className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Card Details */}
//       <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
//         <div>
//           <span className="block text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#5c0612] uppercase mb-1">
//             {product.category}
//           </span>
//           <h3 className="font-serif text-xs sm:text-sm text-[#2c221e] line-clamp-2 leading-snug group-hover:text-[#5c0612] transition-colors">
//             {product.title}
//           </h3>
//         </div>

//         <div className="mt-2 sm:mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
//           <div className="flex items-baseline gap-1.5 flex-wrap">
//             <span className="font-semibold text-xs sm:text-sm text-[#5c0612]">
//               Rs. {product.price?.toLocaleString()}
//             </span>
//             {product.originalPrice && (
//               <span className="text-[10px] sm:text-xs text-stone-400 line-through">
//                 Rs. {product.originalPrice?.toLocaleString()}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function ProductCard({ product, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(product)}
      className="group cursor-pointer flex flex-col justify-between h-full bg-white transition-all w-full"
    >
      <div>
        {/* Product Image Container - Background White */}
        <div className="relative w-full aspect-square overflow-hidden bg-white rounded-none border border-stone-100 sm:border-none">
          
          {/* Badge (10% off / 25% off) */}
          <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-[#fceae6] text-[#b85c43] text-[9px] sm:text-[11px] font-normal px-2 py-0.5 sm:px-2.5 rounded-full z-10">
            {product.discountBadge || "10% off"}
          </span>

          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-2 sm:bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            <span className="w-3 sm:w-3.5 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white/60 rounded-full"></span>
            <span className="w-1 h-1 bg-white/60 rounded-full"></span>
          </div>
        </div>

        {/* Title & Dimension - Responsive Spacing & Text */}
        <div className="mt-2 sm:mt-2.5 space-y-0.5">
          <h3 className="font-serif text-[11px] sm:text-sm text-stone-800 line-clamp-1 font-normal tracking-wide">
            {product.title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-stone-400 font-light">
            {product.dimensions || "6x4 ft"}
          </p>
        </div>
      </div>

      {/* Price & + Add Button - Mobile and Desktop Optimized */}
      <div className="mt-2 sm:mt-2.5 flex items-center justify-between gap-1">
        <div className="flex flex-wrap items-baseline gap-1 sm:gap-1.5 text-xs sm:text-sm">
          {product.originalPrice && (
            <span className="text-stone-400 line-through font-light text-[10px] sm:text-xs">
              ₹{product.originalPrice?.toLocaleString()}
            </span>
          )}
          <span className="font-serif font-medium text-stone-900 text-xs sm:text-sm">
            ₹{product.price?.toLocaleString()}
          </span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="text-stone-600 text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 border border-stone-300 hover:border-black hover:text-black transition-colors shrink-0"
        >
          + Add
        </button>
      </div>
    </div>
  );
}