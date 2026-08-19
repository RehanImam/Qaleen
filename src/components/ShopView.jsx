import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

export default function ShopView({ filters, setFilters, filteredProducts, navigateTo }) {
  // State to track sub-category selection when under Artwork
  const [selectedSubCat, setSelectedSubCat] = useState(null);

  // Reset sub-category state whenever the main category changes
  useEffect(() => {
    setSelectedSubCat(null);
  }, [filters.mainGroup]);

  // Handle Artwork sub-div selection & update filters
  const handleSubCatClick = (subCat) => {
    setSelectedSubCat(subCat);
    setFilters((prev) => ({ ...prev, category: subCat }));
  };

  // Check if we are currently on the Artwork initial landing screen (showing the 2 divs)
  const isArtworkLanding = filters.mainGroup === 'Artwork' && !selectedSubCat;

  // Determine list of products to show
  const displayedProducts = selectedSubCat
    ? filteredProducts.filter((p) => p.category === selectedSubCat)
    : filteredProducts;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        
        {/* Render FilterSidebar ONLY when NOT on the Artwork landing screen */}
        {!isArtworkLanding && (
          <FilterSidebar filters={filters} setFilters={setFilters} />
        )}

        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-stone-200 pb-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#2c221e]">
              {filters.mainGroup ? `${filters.mainGroup} Collection` : 'All Collections'}
              {filters.mainGroup === 'Artwork' && selectedSubCat && ` - ${selectedSubCat}`}
              {!isArtworkLanding && ` (${displayedProducts.length})`}
            </h2>

            {/* Back button if a sub-category is selected */}
            {filters.mainGroup === 'Artwork' && selectedSubCat && (
              <button
                onClick={() => {
                  setSelectedSubCat(null);
                  setFilters((prev) => ({ ...prev, category: null }));
                }}
                className="text-xs text-[#5c0612] underline font-semibold cursor-pointer"
              >
                ← Back to Artwork Categories
              </button>
            )}
          </div>

          {/* ARTWORK INITIAL VIEW: Show 2 Divs First (No Sidebar, No Data) */}
          {isArtworkLanding ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 max-w-4xl mx-auto">
              <div
                onClick={() => handleSubCatClick('Handmade Wall Tapestry')}
                className="cursor-pointer bg-stone-100 border border-stone-300 rounded-xl p-8 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-[#5c0612] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3 className="font-serif text-xl text-[#2c221e] font-semibold mb-2">
                  Handmade Wall Tapestry
                </h3>
                <p className="text-stone-600 text-sm">
                  Explore exquisite handcrafted tapestry artwork for your walls.
                </p>
              </div>

              <div
                onClick={() => handleSubCatClick('Framed Textile Art')}
                className="cursor-pointer bg-stone-100 border border-stone-300 rounded-xl p-8 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-[#5c0612] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
                  🖼️
                </div>
                <h3 className="font-serif text-xl text-[#2c221e] font-semibold mb-2">
                  Framed Textile Art
                </h3>
                <p className="text-stone-600 text-sm">
                  Browse elegant framed textile artwork pieces.
                </p>
              </div>
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-stone-200">
              <p className="text-stone-500 text-sm">No products found matching the selected filters.</p>
            </div>
          ) : (
            /* PRODUCT GRID DISPLAY */
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {displayedProducts.map((product) => (
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