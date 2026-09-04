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

  // Active filter count for badge
  const activeFilterCount =
    (filters.subCategory || filters.category ? 1 : 0) +
    (filters.size ? 1 : 0) +
    (filters.color ? 1 : 0) +
    (filters.maxPrice < 50000 ? 1 : 0);

  return (
    <div className="w-full bg-[#f5efe6] font-serif min-h-screen pb-20">
      
      {/* (A) TOOLBAR ROW (Filter / Sort by / product count) */}
      <div className="w-full border-b border-stone-200/70 py-4 sm:py-5 bg-[#f5efe6]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-serif text-xs sm:text-sm text-stone-700">
          
          {/* Left Side: Filter and Sort by ▾ grouped together, LEFT-ALIGNED */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 hover:text-[#5c0612] transition-colors font-light tracking-wide text-stone-800 cursor-pointer"
            >
              <span>Filter</span>
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#5c0612] text-white text-[10px] font-sans font-medium flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Separator / */}
            <span className="text-stone-300 font-sans select-none">/</span>

            {/* "Sort by ▾" Dropdown */}
            <div className="relative inline-flex items-center group cursor-pointer">
              <div className="flex items-center gap-1.5 text-stone-800 font-light tracking-wide hover:text-[#5c0612] transition-colors">
                <span>Sort by</span>
                <svg
                  className="w-3 h-3 text-stone-600 stroke-[1.5] transition-transform group-hover:translate-y-0.5"
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
                <option value="">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="title-asc">Alphabetically: A-Z</option>
              </select>
            </div>
          </div>

          {/* Right Side: Product Count right-aligned and vertically centered */}
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

      {/* (B) PRODUCT GRID SECTION (Larger, image-forward layout matching Reference Image 2) */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-9 gap-y-12 sm:gap-y-16">
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
              onClick={() =>
                setFilters({
                  mainGroup: '',
                  category: '',
                  maxPrice: 50000,
                  size: '',
                  country: '',
                  color: '',
                })
              }
              className="text-xs tracking-wider uppercase underline font-sans text-stone-700 hover:text-black cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
}