// import React from 'react';
// import FilterSidebar from './FilterSidebar';
// import ProductCard from './ProductCard';

// export default function ShopView({ filters, setFilters, filteredProducts, navigateTo }) {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="flex flex-col md:flex-row gap-8">
//         <FilterSidebar filters={filters} setFilters={setFilters} />

//         <div className="flex-1">
//           <div className="flex justify-between items-center mb-6 border-b border-stone-200 pb-4">
//             <h2 className="font-serif text-2xl text-[#2c221e]">
//               {filters.mainGroup ? `${filters.mainGroup} Collection` : 'All Collections'} ({filteredProducts.length})
//             </h2>
//           </div>

//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-16 bg-white rounded-lg border border-stone-200">
//               <p className="text-stone-500 text-sm">No products found matching the selected filters.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   onSelect={(prod) => navigateTo('productDetail', { product: prod })}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

export default function ShopView({ filters, setFilters, filteredProducts, navigateTo }) {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 border-b border-stone-200 pb-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#2c221e]">
              {filters.mainGroup ? `${filters.mainGroup} Collection` : 'All Collections'} ({filteredProducts.length})
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-stone-200">
              <p className="text-stone-500 text-sm">No products found matching the selected filters.</p>
            </div>
          ) : (
            /* grid-cols-2 for mobile/iPhone and lg:grid-cols-3 for desktop */
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(prod) => navigateTo('productDetail', { product: prod })}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}