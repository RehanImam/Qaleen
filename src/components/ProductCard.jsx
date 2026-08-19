// import React from 'react';

// export default function ProductCard({ product, onSelect }) {
//   return (
//     <div
//       onClick={() => onSelect(product)}
//       className="bg-white border border-stone-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
//     >
//       <div className="overflow-hidden h-64">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>
//       <div className="p-4 space-y-2">
//         <div className="text-[10px] uppercase font-semibold text-[#5c0612] tracking-wider">
//           {product.category}
//         </div>
//         <h3 className="font-serif font-semibold text-sm text-stone-900 group-hover:text-[#5c0612] transition-colors">
//           {product.title}
//         </h3>
//         <div className="flex items-center gap-2">
//           <span className="font-bold text-[#5c0612] text-sm">
//             Rs. {product.price.toLocaleString()}
//           </span>
//           <span className="line-through text-stone-400 text-xs">
//             Rs. {product.originalPrice.toLocaleString()}
//           </span>
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
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Exact Square Aspect Ratio for Compact Cards */}
      <div className="relative w-full aspect-square overflow-hidden bg-stone-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Details */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
        <div>
          <span className="block text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#5c0612] uppercase mb-1">
            {product.category}
          </span>
          <h3 className="font-serif text-xs sm:text-sm text-[#2c221e] line-clamp-2 leading-snug group-hover:text-[#5c0612] transition-colors">
            {product.title}
          </h3>
        </div>

        <div className="mt-2 sm:mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-semibold text-xs sm:text-sm text-[#5c0612]">
              Rs. {product.price?.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-stone-400 line-through">
                Rs. {product.originalPrice?.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}