

import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

export default function ShopView({ filters, setFilters, filteredProducts, navigateTo }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('');

  // Handle product sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
    return 0; // Default / Featured
  });

  return (
    <div className="w-full bg-white font-serif min-h-screen pb-16">
      
      {/* Sub-Header Control Bar */}
      <div className="w-full border-t border-b border-stone-200 px-4 sm:px-8 py-3.5 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-serif text-xs sm:text-sm text-stone-700">
          
          {/* LEFT SIDE: Filter / Sort by ∨ */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 hover:text-black transition-colors font-light tracking-wide text-stone-800"
            >
              <span>Filter</span>
            </button>

            {/* Separator / */}
            <span className="text-stone-300 font-sans">/</span>

            {/* Exact "Sort by ∨" Dropdown as per Image */}
            <div className="relative inline-flex items-center group cursor-pointer">
              {/* Display Text & Arrow */}
              <div className="flex items-center gap-2 text-stone-800 font-light tracking-wide hover:text-black transition-colors">
                <span>Sort by</span>
                <svg
                  className="w-3 h-3 text-stone-600 stroke-[1.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Invisible native select overlaid on top to keep functional sorting */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              >
              
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="title-asc">Alphabetically: A-Z</option>
              </select>
            </div>
          </div>

          {/* RIGHT SIDE: Product Count */}
          <div className="text-stone-600 font-light tracking-wide text-xs sm:text-sm">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </div>

        </div>
      </div>

      {/* Filter Sidebar Drawer */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        totalResults={sortedProducts.length}
      />

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => navigateTo('productDetail', { product: prod })}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 space-y-4">
            <p className="text-stone-500 text-base font-sans">No products match your selected filters.</p>
            <button
              onClick={() => setFilters({ mainGroup: '', category: '', maxPrice: 50000, size: '', country: '', color: '' })}
              className="px-6 py-2 bg-stone-900 text-white text-xs tracking-wider uppercase font-sans hover:bg-stone-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
}